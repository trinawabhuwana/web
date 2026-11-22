/**
 * GOOGLE APPS SCRIPT - SENSUS ALUMNI KPA TRINAWA BHUWANA SMAN 39 JAKARTA
 * 
 * Target Spreadsheet ID: 1SVNG7B4kDm7TUNUstoX44LVT3g23zbV-uL-3D_7mBDw
 * Target Folder ID Foto Profil: 133DN60hr2Dt78Q0e-8F0eZzybKkkob05
 */

const SPREADSHEET_ID = "1SVNG7B4kDm7TUNUstoX44LVT3g23zbV-uL-3D_7mBDw";
const FOLDER_ID = "133DN60hr2Dt78Q0e-8F0eZzybKkkob05";

function getTargetSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheets()[0];
}

/**
 * JALANKAN FUNGSI INI 1 KALI DARI EDITOR APPS SCRIPT:
 * Pilih fungsi "authorizeAll" lalu klik tombol "Jalankan (Run)".
 * Google akan memunculkan dialog persetujuan "Review Permissions" untuk Google Drive & Gmail/Mail.
 * Klik "Advanced / Lanjutan" -> "Go to (unsafe) / Buka (tidak aman)" -> "Allow / Izinkan".
 */
function authorizeAll() {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    Logger.log("Folder Drive Terkoneksi: " + folder.getName());
    Logger.log("Email Kuota Tersisa: " + MailApp.getRemainingDailyQuota());
  } catch (e) {
    Logger.log("Error otorisasi: " + e.toString());
  }
}

/**
 * Handle GET Request:
 * 1. ?check=duplicate&phone=...&email=... -> Cek duplikasi nomor WA & email
 * 2. ?action=getTestimonials -> Ambil testimoni yang berstatus legitimate/official/sah
 */
function doGet(e) {
  try {
    const params = e.parameter || {};
    const sheet = getTargetSheet();
    const data = sheet.getDataRange().getValues();

    // 1. Cek Duplikasi Sensus
    if (params.check === "duplicate") {
      const checkEmail = (params.email || "").toLowerCase().trim();
      const checkPhone = (params.phone || "").replace(/[^0-9]/g, "");

      let emailMatch = false;
      let phoneMatch = false;

      // Header row: Timestamps, Nama lengkap, Nama Panggilan, Nama Angkatan, Tahun Lulus SMA, No WhatsApp, Email, Aktivitas, Pesan, Link Photo, Status
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const rowPhone = String(row[5] || "").replace(/[^0-9]/g, "");
        const rowEmail = String(row[6] || "").toLowerCase().trim();

        if (checkEmail && rowEmail && rowEmail === checkEmail) {
          emailMatch = true;
        }
        if (checkPhone && rowPhone && (rowPhone.endsWith(checkPhone.slice(-8)) || checkPhone.endsWith(rowPhone.slice(-8)))) {
          phoneMatch = true;
        }
      }

      if (emailMatch && phoneMatch) {
        return ContentService.createTextOutput(JSON.stringify({
          isDuplicate: true,
          duplicateField: "both"
        })).setMimeType(ContentService.MimeType.JSON);
      } else if (emailMatch) {
        return ContentService.createTextOutput(JSON.stringify({
          isDuplicate: true,
          duplicateField: "email"
        })).setMimeType(ContentService.MimeType.JSON);
      } else if (phoneMatch) {
        return ContentService.createTextOutput(JSON.stringify({
          isDuplicate: true,
          duplicateField: "phone"
        })).setMimeType(ContentService.MimeType.JSON);
      }

      return ContentService.createTextOutput(JSON.stringify({
        isDuplicate: false,
        duplicateField: ""
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Ambil Testimoni Alumni untuk Beranda (status = legitimate / official / sah)
    if (params.action === "getTestimonials") {
      const testimonials = [];

      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const namaLengkap = String(row[1] || "").trim();
        const angkatan = String(row[3] || "").trim();
        const pekerjaan = String(row[7] || "").trim();
        const pesan = String(row[8] || "").trim();
        const fotoUrl = String(row[9] || "").trim();
        const status = String(row[10] || "").toLowerCase().trim();

        const isApproved =
          status === "legitimate" ||
          status === "official" ||
          status === "sah" ||
          status.includes("sah") ||
          status.includes("legit");

        if (isApproved && namaLengkap && pesan) {
          testimonials.push({
            name: namaLengkap,
            role: `${angkatan ? angkatan.split(" - ")[0] + " • " : ""}${pekerjaan || "Alumni KPA"}`,
            quote: pesan,
            avatar: fotoUrl,
            initials: namaLengkap.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase()
          });
        }
      }

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        total: testimonials.length,
        data: testimonials
      })).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "ready",
      message: "API Sensus Alumni KPA Trinawa Bhuwana SMAN 39 Aktif"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle POST Request: Menyimpan Data Sensus Alumni, Upload Foto 1:1, & Kirim Email Konfirmasi
 */
function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    const sheet = getTargetSheet();

    const fullName = postData.fullName || "";
    const rimbaName = postData.rimbaName || "";
    const angkatan = postData.angkatan || "";
    const gradYear = postData.gradYear || "";
    const phone = postData.phone || "";
    const email = postData.email || "";
    const domicile = postData.domicile || "";
    const message = postData.message || "";
    const status = "Pending";

    // 1. Simpan Foto Alumni ke Folder Google Drive (Dibalut try-catch agar jika izin Drive belum tuntas, sheet & email tetap masuk)
    let photoUrl = "";
    if (postData.photoBase64 && postData.photoOriginalName) {
      try {
        const folder = DriveApp.getFolderById(FOLDER_ID);
        const ext = postData.photoOriginalName.split('.').pop();
        const cleanName = fullName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
        const cleanAngkatan = angkatan.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
        const fileName = `${cleanName}_${cleanAngkatan}.${ext}`;

        const decodedData = Utilities.base64Decode(postData.photoBase64);
        const blob = Utilities.newBlob(decodedData, postData.photoMimeType || "image/jpeg", fileName);
        const file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        photoUrl = file.getUrl();
      } catch (driveError) {
        photoUrl = "Error upload foto (Otorisasi Drive diperlukan): " + driveError.toString();
      }
    }

    const timestamp = new Date();

    // 2. Tambahkan Baris Data ke Spreadsheet
    sheet.appendRow([
      timestamp,
      fullName,
      rimbaName,
      angkatan,
      gradYear,
      phone,
      email,
      domicile,
      message,
      photoUrl,
      status
    ]);

    // 3. Kirim Email Konfirmasi Penerimaan Sensus ke Alumni
    if (email) {
      try {
        const subject = `Konfirmasi Pendataan Sensus Alumni Trinawa Bhuwana - ${fullName}`;
        const htmlBody = `
          <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #065143, #04342b); padding: 32px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px; color: #ffffff;">KPA TRINAWA BHUWANA</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #FF8000; font-weight: bold; letter-spacing: 1px;">SMAN 39 JAKARTA</p>
            </div>
            
            <div style="padding: 28px 24px; color: #334155; line-height: 1.6;">
              <h2 style="font-size: 18px; color: #065143; margin-top: 0;">Halo, Kak ${fullName}!</h2>
              <p style="font-size: 14px;">Terima kasih atas partisipasi dan kepedulian Kakak dalam mengisi formulir <strong>Sensus & Pendataan Ulang Alumni KPA Trinawa Bhuwana SMAN 39 Jakarta</strong>.</p>
              
              <div style="background: #f8fafc; border-left: 4px solid #FF8000; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 8px; font-size: 13px; font-weight: bold; color: #065143; text-transform: uppercase;">Ringkasan Data yang Diterima:</p>
                <table style="width: 100%; font-size: 13px; color: #475569;">
                  <tr><td style="width: 140px; font-weight: 600;">Nama Lengkap:</td><td>${fullName}</td></tr>
                  <tr><td style="font-weight: 600;">Nama Rimba:</td><td>${rimbaName || "-"}</td></tr>
                  <tr><td style="font-weight: 600;">Angkatan:</td><td>${angkatan}</td></tr>
                  <tr><td style="font-weight: 600;">Tahun Lulus SMA:</td><td>${gradYear}</td></tr>
                  <tr><td style="font-weight: 600;">No. WhatsApp:</td><td>${phone}</td></tr>
                  <tr><td style="font-weight: 600;">Pekerjaan / Domisili:</td><td>${domicile || "-"}</td></tr>
                  <tr><td style="font-weight: 600;">Pesan / Masukan:</td><td>"${message || "-"}"</td></tr>
                  <tr><td style="font-weight: 600;">Status Verifikasi:</td><td><strong style="color: #ea580c;">Pending</strong></td></tr>
                </table>
              </div>

              <p style="font-size: 13px; color: #475569;">Pesan dan wejangan Kakak akan diverifikasi oleh sekretariat. Setelah berstatus <em>legitimate/sah</em>, kutipan dan foto profil Kakak akan ditayangkan pada bagian Testimoni di halaman Beranda website resmi KPA Trinawa Bhuwana.</p>

              <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">Salam Lestari!<br/><strong>Sekretariat KPA Trinawa Bhuwana SMAN 39 Jakarta</strong><br/>WhatsApp: +62 813-8883-8116</p>
            </div>

            <div style="background: #0f172a; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8;">
              &copy; 2026 KPA Trinawa Bhuwana SMAN 39 Jakarta &bull; Persaudaraan Rimba Abadi
            </div>
          </div>
        `;

        MailApp.sendEmail({
          to: email,
          subject: subject,
          htmlBody: htmlBody
        });
      } catch (mailErr) {
        Logger.log("Gagal kirim email alumni: " + mailErr.toString());
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data sensus alumni dan foto berhasil disimpan dengan status Pending, email konfirmasi telah dikirim.",
      photoUrl: photoUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
