export interface AffiliateItem {
  id: string;
  name: string;
  brand?: string;
  category: "gunung" | "navigasi" | "medis" | "survival" | "organik" | "umum";
  price: string;
  originalPrice?: string;
  rating?: string;
  soldCount?: string;
  badge?: string; // e.g. "Standar Ekspedisi", "Uji Lapangan TNB", "Pilihan Pemula"
  image: string;
  description: string;
  links: {
    tokopedia?: string;
    shopee?: string;
    tiktok?: string;
  };
}

export const affiliateGearList: AffiliateItem[] = [
  {
    id: "kompas-bidik-prisma",
    name: "Kompas Bidik Prisma Militer Logam",
    brand: "Outdoor Gear",
    category: "navigasi",
    price: "Rp 75.000",
    originalPrice: "Rp 120.000",
    rating: "4.9",
    soldCount: "1.2k+ terjual",
    badge: "Uji Lapangan TNB",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
    description: "Kompas navigasi darat presisi tinggi dengan jarum berpendar glow in the dark, garis bidik prisma, dan klinometer kontur.",
    links: {
      tokopedia: "https://www.tokopedia.com/search?st=product&q=kompas+bidik+prisma+militer",
      shopee: "https://shopee.co.id/search?keyword=kompas%20bidik%20prisma%20militer",
      tiktok: "https://www.tiktok.com/search?q=kompas%20bidik%20outdoor",
    },
  },
  {
    id: "headlamp-rechargeable-waterproof",
    name: "Headlamp LED Sensor Gerak Waterproof IPX6",
    brand: "Rimba Light",
    category: "gunung",
    price: "Rp 85.000",
    originalPrice: "Rp 145.000",
    rating: "4.8",
    soldCount: "3.5k+ terjual",
    badge: "Rekomendasi Wajib",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80",
    description: "Senter kepala sorot jauh 500 lumens dengan sensor lambaian tangan, baterai Type-C tahan hingga 12 jam bivak malam.",
    links: {
      tokopedia: "https://www.tokopedia.com/search?st=product&q=headlamp+sensor+gerak+waterproof",
      shopee: "https://shopee.co.id/search?keyword=headlamp%20led%20sensor%20waterproof",
      tiktok: "https://www.tiktok.com/search?q=headlamp%20gunung%20waterproof",
    },
  },
  {
    id: "emergency-blanket-foil",
    name: "Emergency Blanket Foil Thermal Anti Hipotermia",
    brand: "First Aid Kit",
    category: "medis",
    price: "Rp 15.000",
    originalPrice: "Rp 30.000",
    rating: "5.0",
    soldCount: "10k+ terjual",
    badge: "Protokol Medis",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "Selimut thermal aluminium foil pemantul 90% panas tubuh saat diterpa cuaca dingin ekstrem atau badai puncak.",
    links: {
      tokopedia: "https://www.tokopedia.com/search?st=product&q=emergency+blanket+thermal+foil",
      shopee: "https://shopee.co.id/search?keyword=emergency%20blanket%20thermal",
      tiktok: "https://www.tiktok.com/search?q=emergency%20blanket%20gunung",
    },
  },
  {
    id: "carrier-backpack-60l",
    name: "Tas Carrier Gunung 60L + Raincover Ultralight",
    brand: "Nusantara Summit",
    category: "gunung",
    price: "Rp 385.000",
    originalPrice: "Rp 550.000",
    rating: "4.9",
    soldCount: "800+ terjual",
    badge: "Standar Ekspedisi",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    description: "Backsystem jaring sirkulasi udara dingin, bantalan pinggang tebal anti pegal, dan jahitan bartex kuat untuk penjelajahan 3-5 hari.",
    links: {
      tokopedia: "https://www.tokopedia.com/search?st=product&q=tas+carrier+60l+raincover",
      shopee: "https://shopee.co.id/search?keyword=carrier%2060l%20gunung",
      tiktok: "https://www.tiktok.com/search?q=tas%20carrier%20gunung%2060l",
    },
  },
];
