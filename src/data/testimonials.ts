export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  badgeColor?: string;
  quoteColor?: string;
}

// Spreadsheet ID Sensus Alumni
const SPREADSHEET_ID = "1SVNG7B4kDm7TUNUstoX44LVT3g23zbV-uL-3D_7mBDw";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv`;

// Fungsi helper parse CSV sederhana yang menangani kutip & newline
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      currentCell += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = "";
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentCell.trim());
      if (currentRow.some(c => c.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentCell = "";
    } else {
      currentCell += char;
    }
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(c => c.length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}

// Convert Google Drive share link to direct googleusercontent image link
function convertDrivePhotoUrl(url: string): string {
  if (!url) return "";
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    // URL direct CDN Google User Content untuk gambar yang stabil dan instan
    return `https://lh3.googleusercontent.com/d/${match[1]}=w400`;
  }
  return url;
}

export async function getLiveTestimonials(): Promise<TestimonialItem[]> {
  try {
    const res = await fetch(CSV_URL);
    if (!res.ok) throw new Error("Gagal mengambil data Spreadsheet");
    const csvText = await res.text();
    const rows = parseCSV(csvText);

    if (rows.length <= 1) return [];

    const approvedList: TestimonialItem[] = [];

    // Header index:
    // 0: Timestamps
    // 1: Nama lengkap
    // 2: Nama Panggilan
    // 3: Nama Angkatan
    // 4: Tahun Lulus SMA
    // 5: No WhatsApp
    // 6: Email
    // 7: Aktivitas (Pekerjaan / Domisili)
    // 8: Pesan
    // 9: Link Photo
    // 10: Status
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length < 9) continue;

      const namaLengkap = row[1] || "";
      const namaPanggilan = (row[2] || "").trim();
      // Gunakan nama panggilan jika ada, jika tidak ada gunakan nama lengkap
      const displayName = namaPanggilan || namaLengkap;

      const angkatan = row[3] || "";
      const pekerjaan = row[7] || "";
      const pesan = row[8] || "";
      const foto = convertDrivePhotoUrl(row[9] || "");
      const status = (row[10] || "").toLowerCase().trim();

      // Cek apakah status legitimate / official / sah
      const isApproved =
        status === "legitimate" ||
        status === "official" ||
        status === "sah" ||
        status.includes("legit") ||
        status.includes("sah") ||
        status.includes("official");

      if (isApproved && displayName && pesan) {
        // Tampilkan Nama Angkatan dan Tahun secara lengkap (contoh: "Angkatan 15 - Tilas Guar (1998) • Sr Officer-Principal Design")
        const roleText = angkatan
          ? (pekerjaan ? `${angkatan} • ${pekerjaan}` : angkatan)
          : (pekerjaan || "Alumni KPA SMAN 39");

        approvedList.push({
          name: displayName,
          role: roleText,
          quote: pesan,
          avatar: foto,
          badgeColor: "bg-primary-fixed text-primary",
          quoteColor: "text-primary-fixed",
        });
      }
    }

    return approvedList;
  } catch (err) {
    console.warn("⚠️ Ambil live testimonials gagal:", err);
  }

  return [];
}

export const allTestimonials = await getLiveTestimonials();
