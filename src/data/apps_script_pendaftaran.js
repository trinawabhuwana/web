/**
 * GOOGLE APPS SCRIPT - PENDAFTARAN CALON SISWA KPA TRINAWA BHUWANA SMAN 39 JAKARTA
 * 
 * Target Spreadsheet ID: 1zydmUUlRyceXrYhuGWYzCRgM86CQYF1y6CAKsRxhh0s
 * Target Folder ID (Surat Kesehatan): 1529aGxpUWAK27TRYECEV0eiW-TA5x-9I
 */

const SPREADSHEET_ID = "1zydmUUlRyceXrYhuGWYzCRgM86CQYF1y6CAKsRxhh0s";
const FOLDER_ID = "1529aGxpUWAK27TRYECEV0eiW-TA5x-9I";
const SHEET_NAME = "Pendaftaran";

function setupSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  const headers = [
    "Timestamp",
    "Nama Lengkap",
    "Email",
    "No WhatsApp",
    "Motivasi",
    "Nama File Surat Kesehatan",
    "Link Surat Kesehatan Google Drive",
    "Consent Tes & Kebenaran Data",
    "Status Email Notifikasi"
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#065143").setFontColor("#FFFFFF");
  sheet.setFrozenRows(1);
}

/**
 * Handle GET Request: Pengecekan Duplicate Email & WhatsApp
 */
function doGet(e) {
  try {
    const params = e.parameter;
    if (params.check === "duplicate") {
      const checkEmail = (params.email || "").toLowerCase().trim();
      const checkPhone = (params.phone || "").replace(/[^0-9]/g, "");

      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sheet = ss.getSheetByName(SHEET_NAME);

      if (!sheet) {
        return ContentService.createTextOutput(JSON.stringify({
          isDuplicate: false
        })).setMimeType(ContentService.MimeType.JSON);
      }

      const data = sheet.getDataRange().getValues();
      // Baris 1 adalah header: [Timestamp, Nama Lengkap, Email, No WhatsApp, ...]
      let emailMatch = false;
      let phoneMatch = false;

      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const rowEmail = String(row[2] || "").toLowerCase().trim();
        const rowPhone = String(row[3] || "").replace(/[^0-9]/g, "");

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
        isDuplicate: false
      })).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "ready",
      message: "API Pendaftaran Calon Siswa KPA Trinawa Bhuwana SMAN 39 Aktif"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle POST Request: Menyimpan Data Pendaftaran & Upload Berkas
 */
function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      setupSheet();
      sheet = ss.getSheetByName(SHEET_NAME);
    }

    const namaLengkap = postData.namaLengkap || "";
    const email = postData.email || "";
    const noWhatsApp = postData.noWhatsApp || "";
    const motivasi = postData.motivasi || "";
    const consent = postData.consent ? "Ya, Bersedia & Data Benar" : "Tidak";

    // 1. Handle File Upload (Surat Kesehatan) ke Google Drive Folder
    let fileUrl = "";
    let fileName = "";
    if (postData.fileBase64 && postData.fileOriginalName) {
      const folder = DriveApp.getFolderById(FOLDER_ID);
      const extension = postData.fileOriginalName.split('.').pop();
      // Nama file sesuai nama calon siswa: Surat_Kesehatan_Nama_Lengkap.ext
      const cleanName = namaLengkap.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
      fileName = `Surat_Kesehatan_${cleanName}.${extension}`;
      
      const decodedData = Utilities.base64Decode(postData.fileBase64);
      const blob = Utilities.newBlob(decodedData, postData.fileMimeType || "application/octet-stream", fileName);
      const file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    const timestamp = new Date();

    // 2. Kirim Email Sukses Pendaftaran ke Calon Siswa
    let emailStatus = "Terkirim";
    if (email) {
      try {
        const subject = `Pendaftaran Calon Anggota Trinawa Bhuwana SMAN 39 Diterima - ${namaLengkap}`;
        const htmlBody = `
          <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #065143, #04342b); padding: 32px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px; color: #ffffff;">KPA TRINAWA BHUWANA</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #FF8000; font-weight: bold; letter-spacing: 1px;">SMAN 39 JAKARTA</p>
            </div>
            
            <div style="padding: 28px 24px; color: #334155; line-height: 1.6;">
              <h2 style="font-size: 18px; color: #065143; margin-top: 0;">Halo, ${namaLengkap}!</h2>
              <p style="font-size: 14px;">Terima kasih telah mendaftarkan diri sebagai <strong>Calon Anggota Baru KPA Trinawa Bhuwana SMAN 39 Jakarta</strong>. Formulir dan berkas Anda telah berhasil kami terima di sistem.</p>
              
              <div style="background: #f8fafc; border-left: 4px solid #FF8000; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 8px; font-size: 13px; font-weight: bold; color: #065143; text-transform: uppercase;">Ringkasan Data Pendaftaran:</p>
                <table style="width: 100%; font-size: 13px; color: #475569;">
                  <tr><td style="width: 130px; font-weight: 600;">Nama Lengkap:</td><td>${namaLengkap}</td></tr>
                  <tr><td style="font-weight: 600;">Email:</td><td>${email}</td></tr>
                  <tr><td style="font-weight: 600;">No WhatsApp:</td><td>${noWhatsApp}</td></tr>
                  <tr><td style="font-weight: 600;">Surat Kesehatan:</td><td><a href="${fileUrl}" style="color: #065143; font-weight: bold;">Lihat Berkas Google Drive</a></td></tr>
                  <tr><td style="font-weight: 600;">Persetujuan Tes:</td><td>${consent}</td></tr>
                </table>
              </div>

              <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 8px;">Tahapan Selanjutnya:</h3>
              <ul style="font-size: 13px; color: #475569; padding-left: 20px; margin: 0 0 20px;">
                <li>Tim Sekretariat akan memverifikasi kelengkapan berkas surat kesehatan Anda.</li>
                <li>Jadwal tahapan seleksi fisik, wawancara, dan tes kepatutan akan kami umumkan melalui grup WhatsApp calon anggota.</li>
                <li>Pastikan nomor WhatsApp Anda aktif: <strong>${noWhatsApp}</strong>.</li>
              </ul>

              <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">Jika ada pertanyaan, silakan balas email ini atau hubungi sekretariat di WhatsApp: <strong>+62 813-8883-8116</strong>.</p>
            </div>

            <div style="background: #0f172a; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8;">
              &copy; 2026 KPA Trinawa Bhuwana SMAN 39 Jakarta &bull; Lestari Rimba Nusantara
            </div>
          </div>
        `;

        MailApp.sendEmail({
          to: email,
          subject: subject,
          htmlBody: htmlBody
        });
      } catch (mailErr) {
        emailStatus = "Gagal: " + mailErr.toString();
      }
    }

    // 3. Simpan Baris Data ke Spreadsheet
    sheet.appendRow([
      timestamp,
      namaLengkap,
      email,
      noWhatsApp,
      motivasi,
      fileName,
      fileUrl,
      consent,
      emailStatus
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Pendaftaran berhasil disimpan dan email konfirmasi telah dikirim.",
      fileUrl: fileUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
