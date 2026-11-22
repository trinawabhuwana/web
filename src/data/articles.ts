export interface Article {
  id: string;
  title: string;
  slug: string;
  desc: string;
  date: string;
  category: "Berita" | "Event" | "Artikel" | "Zona Merinding" | string;
  categorySlug: "berita" | "event" | "artikel" | "merinding" | string;
  location?: string;
  locationIcon?: string;
  badge: string;
  badgeClass: string;
  author: string;
  readTime: string;
  imgSrc: string;
  imgAlt: string;
  featured?: boolean;
  contentHtml?: string;
  docUrl?: string;
}

// URL Endpoint Google Apps Script yang membaca Folder Google Drive Trinawa Bhuwana
export const GOOGLE_DRIVE_API_URL = "https://script.google.com/macros/s/AKfycbxnK7xzqLwz59pD4-qTRkWbk5krlzzapebF9ZQHGq6gYjsfwJEIjRs_SNyEQsA8jWo/exec";

// Cerita Mock / Starter untuk Ekspedisi, Keterampilan Rimba, Diksar, dan Zona Merinding
export const defaultArticles: Article[] = [
  {
    id: "ekspedisi-semeru-mahameru-xxix",
    slug: "puncak-mahameru-tim-ekspedisi-xxix",
    title: "Ekspedisi Semeru & Mahameru",
    desc: "Catatan penjelajahan tim Angkatan XXIX menuntaskan atap Jawa dengan protokol zero accident.",
    date: "18 November 2026",
    category: "Laporan Utama",
    categorySlug: "ekspedisi",
    location: "Gunung Semeru, Jawa Timur",
    locationIcon: "landscape",
    badge: "3.676 mdpl",
    badgeClass: "bg-amber-600 text-white font-bold",
    author: "Tim Ekspedisi XXIX",
    readTime: "7 menit baca",
    imgSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Puncak Mahameru Gunung Semeru",
    contentHtml: `
      <p class="lead"><em>"Keberhasilan sebuah ekspedisi pendakian bukan diukur dari apakah kita berhasil berdiri di puncak, melainkan apakah seluruh anggota tim kembali pulang ke rumah dengan selamat dan membawa pelajaran berharga."</em></p>
      
      <p>Pukul 00.30 WIB di Ranu Kumbolo, suhu menyentuh angka 4 derajat Celsius. Angin dingin khas lereng Semeru berhembus kencang membekukan embun di dedaunan tenda. Tim Ekspedisi Angkatan XXIX KPA Trinawa Bhuwana SMAN 39 Jakarta bersiap memulai summit attack menuju Mahameru 3.676 mdpl.</p>

      <h3>1. Manajemen Jalur & Pasir Berbisik Kalimati</h3>
      <p>Melintasi batas vegetasi Cemoro Kandang menuju Arcopodo memerlukan kehati-hatian luar biasa. Medan pasir curam dengan kemiringan 45 derajat menuntut teknik 'tiga langkah naik, dua langkah merosot'. Pengaturan ritme napas dan konsistensi langkah adalah kunci menjaga ketahanan stamina.</p>

      <h3>2. Menuntaskan Janji di Atap Jawa</h3>
      <p>Tepat pukul 05.45 WIB saat semburat fajar merah keemasan merekah di ufuk timur, tim berhasil menapakkan kaki di Puncak Mahameru. Pengibaran bendera kebanggaan KPA Trinawa Bhuwana SMAN 39 diiringi rasa syukur mendalam, tetap dengan kewaspadaan penuh menghindari gas beracun Jonggring Saloka.</p>

      <p><em>Prinsip Rimba: Bawa pulang cerita, tinggalkan jejak tanpa sampah, dan hormati kearifan alam pegunungan nusantara.</em></p>
    `,
  },
  {
    id: "navigasi-darat-peta-kontur",
    slug: "asah-navigasi-darat-bivak-kaki-gunung-gede",
    title: "Navigasi Darat & Peta Kontur",
    desc: "Metode resection & intersection kompas prisma untuk navigasi presisi di belantara rimba.",
    date: "12 November 2026",
    category: "Keterampilan Rimba",
    categorySlug: "keterampilan",
    location: "Kaki Gunung Gede, Jawa Barat",
    locationIcon: "explore",
    badge: "Panduan Teknis",
    badgeClass: "bg-emerald-600 text-white font-bold",
    author: "Divisi Gunung Hutan",
    readTime: "5 menit baca",
    imgSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Latihan navigasi darat kompas dan peta kontur",
    contentHtml: `
      <p class="lead">Navigasi darat (navrat) adalah keterampilan hidup paling mendasar bagi seorang penggiat alam bebas. Di dalam rimba yang lebat tanpa sinyal seluler dan GPS, selembar peta topografi dan sebuah kompas prisma adalah pemandu arah hidup-mati Anda.</p>

      <h3>1. Resection: Menemukan Posisi Diri di Peta</h3>
      <p>Teknik <em>resection</em> digunakan saat kita berada di medan terbuka dan ingin mengetahui secara pasti titik koordinat keberadaan kita. Caranya adalah dengan membidik minimal dua tanda medan yang mencolok (misalnya puncak bukit atau percabangan sungai besar) menggunakan kompas bidik, lalu menarik garis azimuth balik (back azimuth) ke atas peta kontur.</p>

      <h3>2. Intersection: Menentukan Posisi Target di Kejauhan</h3>
      <p>Sebaliknya, <em>intersection</em> digunakan untuk mengetahui koordinat suatu titik yang tidak terjangkau dari dua posisi yang sudah kita ketahui lokasinya. Titik potong dari kedua garis bidikan tersebut adalah lokasi persis sasaran kita.</p>

      <p>Dengan disiplin latihan membaca kontur rapat, punggungan, dan lembahan, tim ekspedisi TNB selalu siap bergerak dalam kondisi cuaca berkabut tebal sekalipun.</p>
    `,
  },
  {
    id: "diksar-calon-angkatan-xxx",
    slug: "pendaftaran-pendidikan-dasar-angkatan-xxx",
    title: "DIKSAR Calon Angkatan XXX",
    desc: "Pembentukan karakter, kepemimpinan, dan persaudaraan rimba kekal siswa SMAN 39 Jakarta.",
    date: "08 November 2026",
    category: "Pendidikan Dasar",
    categorySlug: "organisasi",
    location: "Kampus SMAN 39 & Lapangan Rimba",
    locationIcon: "school",
    badge: "Perekrutan",
    badgeClass: "bg-sky-600 text-white font-bold",
    author: "BPH Trinawa Bhuwana",
    readTime: "4 menit baca",
    imgSrc: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Pendidikan Dasar DIKSAR Trinawa Bhuwana SMAN 39",
    contentHtml: `
      <p class="lead">Pendidikan Dasar (DIKSAR) merupakan gerbang utama pembentukan karakter bagi calon anggota baru Kelompok Pecinta Alam Trinawa Bhuwana SMAN 39 Jakarta.</p>

      <h3>1. Materi Kelas & Teori Dasar Rimba</h3>
      <p>Sebelum terjun langsung ke alam bebas, seluruh peserta dibekali materi esensial di ruang kelas: manajemen logistik dan packing carrier, pertolongan pertama pada kecelakaan (P3K) di alam bebas, botani dan zoologi praktis, serta etika kelestarian lingkungan.</p>

      <h3>2. Aplikasi Lapangan & Pembentukan Mental</h3>
      <p>Fase lapangan mengajarkan kemandirian dalam mendirikan bivak perlindungan alam, memasak makanan darurat, orientasi medan malam hari, serta melatih daya juang dan persaudaraan tanpa pamrih antar sesama kawan seperjuangan.</p>

      <p>Mari bergabung dan temukan jati diri Anda di bawah naungan panji kebanggaan Trinawa Bhuwana SMAN 39 Jakarta!</p>
    `,
  },
  {
    id: "misteri-pos-4-gunung-salak",
    slug: "misteri-suara-gamelan-pos-4-gunung-salak",
    title: "Misteri Suara Gamelan & Tenda Bayangan di Pos 4 Gunung Salak",
    desc: "Malam ketiga bivak darurat di punggungan Salak 1, kabut tebal turun disertai alunan gamelan laras pelog yang kian mendekat di tengah hening dini hari.",
    date: "14 November 2026",
    category: "Zona Merinding",
    categorySlug: "merinding",
    location: "Gunung Salak, Jawa Barat",
    locationIcon: "landscape",
    badge: "Zona Merinding",
    badgeClass: "bg-red-800 text-white font-bold",
    author: "Tim Ekspedisi Malam",
    readTime: "6 menit baca",
    imgSrc: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Hutan berkabut malam hari yang mencekam di Gunung Salak",
    contentHtml: `
      <p class="lead"><em>"Kalau dengar bunyi gamelan atau suara orang manggil nama asli di atas jam dua belas malam, jangan pernah sekali-kali nengok ke belakang atau menyahut..."</em></p>
      
      <p>Peringatan itu selalu diulang para pendaki senior sebelum kami menginjakkan kaki di jalur pendakian Gunung Salak. Malam itu, tepat di ketinggian 1.800 mdpl dekat Pos 4, hujan gerimis bercampur kabut pekat mulai membungkus tenda dome kami.</p>
      
      <h3>1. Alunan Gamelan di Jam Tiga Pagi</h3>
      <p>Suhu drop hingga 9 derajat Celsius. Jarum jam tangan lapangan menunjukkan pukul 03.15 WIB. Saat seluruh anggota tim sedang terlelap kelelahan setelah 7 jam menembus trek lumpur 'Hutan Mati', suara sayup kendang dan saron mulai terdengar dari arah lembah jurang sebelah barat.</p>
      <p>Anehnya, suaranya bukan semakin menjauh, melainkan berputar mengelilingi pasak-pasak tenda kami. Bunyi gemerincing gelang kaki penari terdengar menginjak dedaunan basah tepat di samping flysheet.</p>
      
      <h3>2. Bayangan Berdiri di Depan Pintu Tenda</h3>
      <p>Melalui celah ventilasi tenda yang tembus pandang, terlihat bayangan sosok tinggi berdiri mematung. Sorot senter headlamp kami padamkan seketika. Tak ada satu pun dari kami yang berani bernapas keras.</p>
      <p>Hingga fajar menyingsing pukul 05.30 WIB dan adzan subuh dari kejauhan lereng berkumandang, jejak kaki di tanah gembur luar tenda sama sekali tidak ditemukan. Hanya ada wangi melati hutan yang menusuk hidung.</p>
      
      <p><em>Pesan Etika Rimba: Selalu jaga ucapan, bersihkan niat, dan jangan sekali-kali meremehkan kearifan lokal serta pantangan para leluhur di tanah manapun kita berpijak.</em></p>
    `,
  },
  {
    id: "sosok-penunggu-pohon-tua-cibodas",
    slug: "sosok-hitam-penjaga-jalur-kanopi-cibodas",
    title: "Malam Kelam di Jalur Kanopi: Sosok Penjaga Pohon Raksasa",
    desc: "Sorot headlamp yang memantulkan sepasang mata merah di ketinggian dahan pohon ki hujan tua, mengawasi setiap langkah orientasi malam.",
    date: "05 November 2026",
    category: "Zona Merinding",
    categorySlug: "merinding",
    location: "Mandalawangi, Pangrango",
    locationIcon: "forest",
    badge: "Zona Merinding",
    badgeClass: "bg-red-800 text-white font-bold",
    author: "Alumni Angkatan XXIV",
    readTime: "5 menit baca",
    imgSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Pohon tua rimba malam berlatar siluet merah temaram",
    contentHtml: `
      <p>Latihan navigasi malam dan orientasi peta kontur selalu menjadi ujian mental terberat. Suara hembusan angin di sela tajuk kanopi hutan hujan tropis bisa memanipulasi pendengaran siapa saja.</p>
      
      <h3>Tatapan Dari Puncak Kanopi</h3>
      <p>Saat tim penyapu (sweeper) berhenti untuk mengecek jumlah anggota barisan, kompas bidik prisma yang digunakan tiba-tiba berputar liar tak menentu. Udara mendadak menjadi sangat dingin dan berbau dupa bakar.</p>
      <p>Ketika cahaya senter tanpa sengaja terangkat ke dahan pohon ki hujan raksasa setinggi 20 meter, tampak siluet hitam pekat berlengan panjang sedang duduk bersila mengawasi formasi jalan kami dari atas...</p>
    `,
  }
];

// Fallback untuk backward compatibility
export const defaultHorrorStories = defaultArticles.filter(a => a.categorySlug === "merinding");

// Fungsi untuk mengambil data artikel MURNI dari Google Drive + gabungan default agar route selalu valid
export async function getLiveArticles(): Promise<Article[]> {
  try {
    const res = await fetch(GOOGLE_DRIVE_API_URL);
    if (!res.ok) throw new Error("Failed to fetch Google Drive articles");
    const json = await res.json();
    if (json.status === "success" && Array.isArray(json.data) && json.data.length > 0) {
      const liveList: Article[] = json.data;

      // Gabungkan artikel live dari Google Drive dengan artikel default yang belum ada slug-nya
      const existingSlugs = new Set(liveList.map(a => a.slug));
      const supplementary = defaultArticles.filter(a => !existingSlugs.has(a.slug));

      return [...liveList, ...supplementary];
    }
  } catch (error) {
    console.warn("⚠️ Fetch Google Drive API gagal atau offline:", error);
  }
  return defaultArticles;
}

// Export artikel murni dari Google Drive (lengkap dengan artikel sistem)
export const allArticles = await getLiveArticles();
