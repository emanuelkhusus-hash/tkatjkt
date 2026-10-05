/**
 * REGISTRY 30 SESI DRILLING TKA TJKT (15 HARI x 2 SESI)
 * Standar Muatan Pusmendik Kemendikdasmen (SK BSKAP No 046/H/KR/2025)
 */

const TKA_SESSIONS = [
  // ================= DAY 1: PROSES BISNIS & PROFESI TJKT =================
  {
    id: "s01",
    day: 1,
    sessionNum: 1,
    code: "H01-S1",
    title: "Wawasan Profesi & Peran Kerja Bidang TJKT",
    category: "Wawasan Dunia Kerja TJKT",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: null,
    description: "Mengenal profil profesi Network Engineer, System Administrator, Fiber Planner, Technopreneur, dan alur kerja industri."
  },
  {
    id: "s02",
    day: 1,
    sessionNum: 2,
    code: "H01-S2",
    title: "Proses Bisnis & Perkembangan Teknologi Modern",
    category: "Wawasan Dunia Kerja TJKT",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s01",
    description: "Alur bisnis ISP/Telco, perkembangan 3G/4G/5G, VSAT IP, Microwave Link, Fiber Optik, IPv6, IoT, Cloud, dan Cyber Security."
  },

  // ================= DAY 2: K3LH & BUDAYA KERJA 5R =================
  {
    id: "s03",
    day: 2,
    sessionNum: 1,
    code: "H02-S1",
    title: "Budaya Kerja Industri 5R & Etika Profesional",
    category: "Kecakapan Kerja Dasar & K3",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s02",
    description: "Penerapan Ringkas, Rapi, Resik, Rawat, Rajin di lab jaringan, data center, etika komunikasi, dan disiplin kerja."
  },
  {
    id: "s04",
    day: 2,
    sessionNum: 2,
    code: "H02-S2",
    title: "K3LH Umum & Manajemen Resiko Ruang Tertutup",
    category: "Kecakapan Kerja Dasar & K3",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s03",
    description: "Identifikasi bahaya listrik, manajemen kabel terserak, sirkulasi udara server, APAR, dan penanganan darurat kecelakaan kerja."
  },

  // ================= DAY 3: K3 KETINGGIAN & LAPANGAN FTTH =================
  {
    id: "s05",
    day: 3,
    sessionNum: 1,
    code: "H03-S1",
    title: "K3LH Bekerja di Ketinggian (Tiang & Tower)",
    category: "Kecakapan Kerja Dasar & K3",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s04",
    description: "Penggunaan Full Body Harness, Safety Helmet, Lanyard, tangga fiberglass, dan SOP penarikan kabel jalur tiang 6–8 meter."
  },
  {
    id: "s06",
    day: 3,
    sessionNum: 2,
    code: "H03-S2",
    title: "Mini Boss 1: Evaluasi Terpadu Fondasi & K3LH",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s05",
    description: "Uji penalaran dan studi kasus integrasi profesi, proses bisnis, 5R, dan penerapan K3LH di berbagai medan kerja."
  },

  // ================= DAY 4: MEDIA TRANSMISI TEMBAGA & STANDARISASI =================
  {
    id: "s07",
    day: 4,
    sessionNum: 1,
    code: "H04-S1",
    title: "Karakteristik Kabel Twisted Pair (UTP / STP)",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s06",
    description: "Kategori kabel Cat5e/Cat6/Cat6a, crosstalk, shielding, redaman jarak kabel (maksimal 100 meter), dan konektor RJ-45."
  },
  {
    id: "s08",
    day: 4,
    sessionNum: 2,
    code: "H04-S2",
    title: "Standarisasi Terminasi TIA/EIA 568A & 568B",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s07",
    description: "Urutan warna kabel Straight-Through & Cross-Over, pengujian dengan LAN Tester, pemecahan masalah kabel putus (open/short)."
  },

  // ================= DAY 5: FIBER OPTIK DASAR & KARAKTERISTIK =================
  {
    id: "s09",
    day: 5,
    sessionNum: 1,
    code: "H05-S1",
    title: "Struktur Dasar & Prinsip Cahaya Fiber Optik",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s08",
    description: "Struktur Core, Cladding, Coating, prinsip Total Internal Reflection (TIR), indeks bias, dan spektrum gelombang cahaya."
  },
  {
    id: "s10",
    day: 5,
    sessionNum: 2,
    code: "H05-S2",
    title: "Single-Mode vs Multi-Mode Fiber & Redaman",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s09",
    description: "Perbedaan SMF 9/125um vs MMF 50/125um, modal dispersion, panjang gelombang (850nm, 1310nm, 1550nm), dan rumus link budget."
  },

  // ================= DAY 6: NIRKABEL & TELEKOMUNIKASI MODERN =================
  {
    id: "s11",
    day: 6,
    sessionNum: 1,
    code: "H06-S1",
    title: "Teknologi Nirkabel WLAN & Standar IEEE 802.11",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s10",
    description: "Frekuensi 2.4 GHz vs 5 GHz, channel overlapping, interferensi, standar Wi-Fi 4/5/6, SSID, dan keamanan WPA2/WPA3."
  },
  {
    id: "s12",
    day: 6,
    sessionNum: 2,
    code: "H06-S2",
    title: "Sistem Telekomunikasi Seluler, Microwave & VSAT",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s11",
    description: "Arsitektur BTS/eNodeB/gNodeB, propagasi gelombang mikro (LOS & Fresnel Zone), satelit geostasioner VSAT IP dan delay transmisi."
  },

  // ================= DAY 7: MINI BOSS 2 & REVIEW TRANSMISI =================
  {
    id: "s13",
    day: 7,
    sessionNum: 1,
    code: "H07-S1",
    title: "Mini Boss 2A: Analisis Pemilihan Media Transmisi",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s12",
    description: "Studi kasus menentukan media tepat (Kabel Tembaga, Fiber Optik, Radio PTP, VSAT) berdasarkan anggaran, jarak, dan kondisi geografis."
  },
  {
    id: "s14",
    day: 7,
    sessionNum: 2,
    code: "H07-S2",
    title: "Mini Boss 2B: Troubleshooting Transmisi Jaringan",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s13",
    description: "Menganalisis penyebab link optik putus, interferensi Wi-Fi gedung, attenuasi kabel tembaga, dan delay satelit."
  },

  // ================= DAY 8: PENGALAMATAN IPV4 & SUBNETTING =================
  {
    id: "s15",
    day: 8,
    sessionNum: 1,
    code: "H08-S1",
    title: "Konsep Dasar IPv4 & Kelas Pengalamatan",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s14",
    description: "Format 32-bit IPv4, Network ID vs Host ID, IP Publik vs Private (RFC 1918), IP Loopback, dan APIPA (169.254.x.x)."
  },
  {
    id: "s16",
    day: 8,
    sessionNum: 2,
    code: "H08-S2",
    title: "Perhitungan Subnetting CIDR & VLSM Cepat",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s15",
    description: "Teknik cepat menghitung Subnet Mask, Network Address, Broadcast Address, dan jumlah Host valid pada prefix /24 hingga /30."
  },

  // ================= DAY 9: TRANSISI IPV6 & MODEL OSI / TCP-IP =================
  {
    id: "s17",
    day: 9,
    sessionNum: 1,
    code: "H09-S1",
    title: "Pengalamatan IPv6 & Mekanisme Transisi",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s16",
    description: "Format 128-bit heksadesimal, penyingkatan nol, Link-Local (fe80::), Global Unicast (2000::), SLAAC, dan Dual-Stack."
  },
  {
    id: "s18",
    day: 9,
    sessionNum: 2,
    code: "H09-S2",
    title: "Model 7 Layer OSI & Protokol TCP/IP",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s17",
    description: "Enkapsulasi data (Data, Segment, Packet, Frame, Bits), fungsi tiap layer, protokol TCP vs UDP, port umum (80, 443, 22, 53, 67)."
  },

  // ================= DAY 10: SWITCHING, VLAN & ROUTING DASAR =================
  {
    id: "s19",
    day: 10,
    sessionNum: 1,
    code: "H10-S1",
    title: "Switching & Virtual LAN (VLAN 802.1Q)",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s18",
    description: "Broadcast domain, MAC Address Table, konfigurasi Access Port vs Trunk Port, Inter-VLAN Routing (Router-on-a-Stick)."
  },
  {
    id: "s20",
    day: 10,
    sessionNum: 2,
    code: "H10-S2",
    title: "Konsep Routing Dinamis/Statis & NAT",
    category: "Media dan Jaringan Telekomunikasi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s19",
    description: "Default route (0.0.0.0/0), Static Routing, OSPF Metric Cost, Network Address Translation (Source NAT masquerade & Port Forwarding)."
  },

  // ================= DAY 11: SERVER, VIRTUALISASI & LINUX =================
  {
    id: "s21",
    day: 11,
    sessionNum: 1,
    code: "H11-S1",
    title: "Virtualisasi Sistem & Manajemen VM (VirtualBox)",
    category: "Kecakapan Kerja Dasar",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s20",
    description: "Konsep Hypervisor Type 2, pembuatan VM, troubleshooting error 'Insufficient disk space', alokasi RAM, dan Network Adapter VM."
  },
  {
    id: "s22",
    day: 11,
    sessionNum: 2,
    code: "H11-S2",
    title: "Layanan Jaringan Server (DHCP, DNS, Web Server)",
    category: "Kecakapan Kerja Dasar",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s21",
    description: "Proses DORA pada DHCP Server, pemetaan IP dan Domain pada DNS, konfigurasi Web Server (Apache/Nginx), dan remote SSH."
  },

  // ================= DAY 12: ALAT UKUR TEMBAGA & OPTIK DASAR =================
  {
    id: "s23",
    day: 12,
    sessionNum: 1,
    code: "H12-S1",
    title: "Penggunaan LAN Tester & PoE Detector",
    category: "Penggunaan Alat Ukur Jaringan",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s22",
    description: "Membaca sekuens lampu 1-8 pada LAN Tester, mendeteksi kawat terbalik/short/split pair, dan uji daya Power over Ethernet."
  },
  {
    id: "s24",
    day: 12,
    sessionNum: 2,
    code: "H12-S2",
    title: "Pengujian Optik Dasar (OPM, Light Source & VFL)",
    category: "Penggunaan Alat Ukur Jaringan",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s23",
    description: "SOP pembersihan konektor fiber, pemilihan panjang gelombang (1310/1490/1550nm), membaca nilai dBm dan dB (loss), serta fungsi VFL laser merah."
  },

  // ================= DAY 13: ALAT UKUR LANJUT (OTDR & SPLICER) =================
  {
    id: "s25",
    day: 13,
    sessionNum: 1,
    code: "H13-S1",
    title: "Operasional Fusion Splicer & Standar Sambungan",
    category: "Penggunaan Alat Ukur Jaringan",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s24",
    description: "SOP pengupasan stripper, pemotongan sudut presisi cleaver, pembersihan alkohol 99%, proses arc fusion, dan estimasi loss sambungan."
  },
  {
    id: "s26",
    day: 13,
    sessionNum: 2,
    code: "H13-S2",
    title: "Analisis Grafik Jejak Kurva OTDR & Event Loss",
    category: "Penggunaan Alat Ukur Jaringan",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s25",
    description: "Membaca dead zone (event & attenuation dead zone), event reflektif (konektor/ujung fiber), non-reflektif (sambungan/bending), dan jarak putus fiber."
  },

  // ================= DAY 14: SIMULASI PREDIKSI TKA PUSMENDIK =================
  {
    id: "s27",
    day: 14,
    sessionNum: 1,
    code: "H14-S1",
    title: "Tryout Prediksi TKA Pusmendik Paket A",
    category: "Simulasi Ujian Nasional",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s26",
    description: "Simulasi komprehensif 30 butir soal: gabungan Wawasan Kerja, K3LH Ketinggian, Transmisi, dan Pengukuran (Format PG & PGK)."
  },
  {
    id: "s28",
    day: 14,
    sessionNum: 2,
    code: "H14-S2",
    title: "Tryout Prediksi TKA Pusmendik Paket B",
    category: "Simulasi Ujian Nasional",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s27",
    description: "Simulasi soal penalaran (Reasoning) dan pemecahan masalah industri nyata TJKT (Tabel Benar/Salah & Multi-Select)."
  },

  // ================= DAY 15: GRAND FINAL DRILLING TKA =================
  {
    id: "s29",
    day: 15,
    sessionNum: 1,
    code: "H15-S1",
    title: "Tryout Prediksi TKA Pusmendik Paket C",
    category: "Simulasi Ujian Nasional",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s28",
    description: "Uji ketajaman analisis teknis, kecepatan menghitung subnetting, dan akurasi SOP K3LH sebelum hari-H ujian."
  },
  {
    id: "s30",
    day: 15,
    sessionNum: 2,
    code: "H15-S2",
    title: "THE GRAND FINAL BOSS: Simulasi Penuh TKA Kemendikdasmen",
    category: "The Grand Final Boss",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s29",
    description: "Puncak drilling 15 hari! Uji standar tertinggi TKA Kejuruan TJKT. Raih skor maksimal dan peroleh Sertifikat Kelulusan Utama!"
  }
];

if (typeof window !== "undefined") {
  window.TKA_SESSIONS = TKA_SESSIONS;
}
