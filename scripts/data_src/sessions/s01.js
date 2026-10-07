// scripts/data_src/sessions/s01.js
// Sesi 1: Wawasan Profesi dan Jabatan Kerja Bidang TJKT (30 Soal Unik)
// Matriks Pusmendik: Elemen 1 (Jenis profesi serta jabatan kerja bidang TJKT sesuai klasifikasi industri)

const s01_pg = [
  {
    stimulus: "Sebuah perusahaan ISP skala nasional sedang membuka lowongan untuk posisi yang bertugas merancang rute kabel backbone, menghitung optical link budget, dan memetakan penempatan ODC serta ODP di kawasan residensial baru.",
    question: "Nama jabatan kerja yang paling tepat untuk deskripsi tugas perancangan infrastruktur jaringan tersebut adalah...",
    correctText: "Network Planner / Fiber Optic Planner",
    distractors: [
      "Database Administrator",
      "Frontend Developer",
      "IT Helpdesk Tier 1",
      "Staf Administrasi Pergudangan"
    ],
    explanation: "Network Planner bertanggung jawab dalam perencanaan teknis, survei rute, perhitungan redaman kabel (optical link budget), serta pemetaan perangkat pasif ODC/ODP.",
    quickTip: "Merancang rute kabel & menghitung link budget = Network Planner."
  },
  {
    stimulus: "Di ruang Network Operation Center (NOC), layar monitor menunjukkan grafik lonjakan latensi dan indikasi putusnya interkoneksi utama ke salah satu POP regional.",
    question: "Tugas pokok seorang NOC Engineer pada tingkat awal dalam menangani insiden jaringan tersebut adalah...",
    correctText: "Menganalisis log perangkat, menerbitkan trouble ticket, dan mengoordinasikan teknisi lapangan terdekat",
    distractors: [
      "Mengganti seluruh modul router inti tanpa diagnosa awal",
      "Mematikan suplai daya genset gedung pusat",
      "Menghapus seluruh tabel routing BGP pada router core",
      "Menutup layanan internet pelanggan secara sepihak tanpa pemberitahuan"
    ],
    explanation: "SOP NOC Engineer adalah memantau alarm, menganalisis log, membuka trouble ticket sistem, dan mengarahkan personel lapangan untuk pengecekan fisik.",
    quickTip: "NOC Engineer = Memantau dashboard, menganalisis log, dan membuka trouble ticket."
  },
  {
    stimulus: "Instansi pemerintah memerlukan tenaga ahli yang bertanggung jawab mengelola sistem operasi Linux, konfigurasi hak akses berkas, manajemen direktori pengguna, dan penjadwalan pencadangan (backup) data server.",
    question: "Profesi di bidang teknologi informasi yang memegang peranan utama tersebut adalah...",
    correctText: "System Administrator (SysAdmin)",
    distractors: [
      "UI/UX Designer",
      "Digital Content Creator",
      "Hardware Assembler Manufaktur",
      "Operator Entry Data"
    ],
    explanation: "System Administrator bertugas memelihara kelangsungan operasional sistem operasi server, manajemen user/privilege, serta backup data berkala.",
    quickTip: "Mengelola server OS, user privileges & backup = System Administrator."
  },
  {
    stimulus: "Seorang lulusan SMK TJKT mendirikan unit usaha mandiri yang melayani jasa perancangan jaringan Wi-Fi voucher perumahan, instalasi CCTV berbasis IP, dan perawatan berkala jaringan warnet/kantor.",
    question: "Peran profil kerja mandiri berbasis teknologi yang dijalankan oleh lulusan tersebut dinamakan...",
    correctText: "Technopreneur Bidang Jaringan & Telekomunikasi",
    distractors: [
      "Buruh Fabrikasi Perangkat",
      "Broker Properti Perumahan",
      "Reseller Pakaian Daring",
      "Kurir Ekspedisi Logistik"
    ],
    explanation: "Technopreneur adalah wirausahawan yang memanfaatkan keahlian teknologi (dalam hal ini TJKT) untuk menciptakan solusi dan layanan bernilai ekonomi.",
    quickTip: "Wirausaha mandiri berbasis keahlian teknologi IT = Technopreneur."
  },
  {
    stimulus: "Sebuah bank komersial mempekerjakan profesional keamanan siber untuk menguji ketahanan sistem transaksi mereka dengan cara mensimulasikan serangan peretasan legal sesuai izin resmi.",
    question: "Sebutan jabatan spesifik untuk penguji celah keamanan legal tersebut adalah...",
    correctText: "Penetration Tester / Ethical Hacker",
    distractors: [
      "Script Kiddie",
      "Social Media Specialist",
      "Graphic Illustrator",
      "Customer Care Officer"
    ],
    explanation: "Penetration Tester (Ethical Hacker) bertugas menguji kelemahan keamanan sistem jaringan secara legal dengan metodologi teruji dan izin tertulis.",
    quickTip: "Simulasi serangan legal menguji kerentanan sistem = Penetration Tester."
  },
  {
    stimulus: "Dalam proyek penggelaran kabel fiber optik bawah tanah (ducting), terdapat personil yang mengoperasikan mesin splicer dan memotong serat optik dengan cleaver presisi tinggi.",
    question: "Spesialisasi teknisi lapangan yang mengerjakan penyambungan inti serat kaca tersebut adalah...",
    correctText: "Fiber Optic Splicer / Teknisi Splicing",
    distractors: [
      "Civil Surveyor Geodesi",
      "Pemasang Tiang Pancang",
      "Desainer Grafis Percetakan",
      "Operator Excavator Jalan"
    ],
    explanation: "Fiber Splicer adalah teknisi spesialis yang melakukan pengupasan, pemotongan sudut presisi, dan penyambungan peleburan core optik.",
    quickTip: "Spesialis menyambung inti serat kaca optik = Fiber Splicer."
  },
  {
    stimulus: "Di lingkungan penyedia layanan cloud (Cloud Service Provider), arsitektur server fisik telah dialihkan ke instans virtual yang diatur secara otomatis menggunakan kode script.",
    question: "Profesi yang menjembatani kolaborasi antara pengembang aplikasi dan operasional infrastruktur jaringan/server otomatis disebut...",
    correctText: "DevOps Engineer / Site Reliability Engineer (SRE)",
    distractors: [
      "Technical Writer",
      "Akuntan Pajak TI",
      "Staf Resepsionis Kantor",
      "Surveyor Lokasi Tanah"
    ],
    explanation: "DevOps Engineer mengintegrasikan proses development dan operations melalui otomatisasi infrastruktur, CI/CD, dan manajemen kontainer/cloud.",
    quickTip: "Kolaborasi pengembangan aplikasi & infrastruktur otomatis = DevOps Engineer."
  },
  {
    stimulus: "Ketika pengguna rumahan mengeluhkan koneksi internet rumahnya mati (lampu indikator LOS merah berkedip), pengguna tersebut pertama kali menghubungi pusat layanan via telepon atau aplikasi chat.",
    question: "Petugas yang melayani keluhan pertama kali, mencatat nomor pelanggan, dan memandu langkah troubleshooting dasar (reboot modem) adalah...",
    correctText: "Helpdesk Tier 1 / Customer Service Representative",
    distractors: [
      "Chief Technology Officer (CTO)",
      "Core Network Architect",
      "Data Center Facility Manager",
      "Security Operations Director"
    ],
    explanation: "Helpdesk Tier 1 merupakan titik kontak pertama (First Line Support) yang bertugas menangani keluhan dasar dan mencatat tiket gangguan.",
    quickTip: "First contact penanganan gangguan via telepon/chat = Helpdesk Tier 1."
  },
  {
    stimulus: "Sebuah perusahaan tambang di area terpencil di pedalaman hutan membutuhkan komunikasi data menggunakan stasiun bumi satelit berantena parabola.",
    question: "Tenaga ahli yang melakukan pointing antena ke satelit geostasioner, mengatur modem satelit IDU dan unit ODU (BUC/LNB) adalah...",
    correctText: "VSAT Engineer / Teknisi Komunikasi Satelit",
    distractors: [
      "Broadcasting Cameraman",
      "Pilot Drone Pemetaan Hutan",
      "Mekanik Truk Tambang",
      "Teknisi Pendingin Ruangan (AC)"
    ],
    explanation: "VSAT Engineer bertugas memasang, melakukan pointing sudut azimut-elevasi, serta mengonfigurasi modem komunikasi satelit stasiun bumi.",
    quickTip: "Instalasi pointing antena parabola & komunikasi satelit = VSAT Engineer."
  },
  {
    stimulus: "Seorang Network Engineer ditugaskan mengonfigurasi perangkat router perbatasan (Border Router) untuk menghubungkan sistem otonom (Autonomous System) ISP ke jaringan global dunia.",
    question: "Kompetensi utama yang wajib dikuasai oleh insinyur jaringan tersebut pada level routing antarsistem otonom adalah...",
    correctText: "Protokol Routing BGP (Border Gateway Protocol) dan Peering IXP",
    distractors: [
      "Instalasi Driver Printer USB",
      "Perakitan Komputer Gaming",
      "Pembuatan Desain Brosur Promosi",
      "Editing Video YouTube Channel"
    ],
    explanation: "Routing antar Autonomous System (AS) di tingkat global internet menggunakan protokol standar BGP (Border Gateway Protocol).",
    quickTip: "Routing antar Autonomous System global = Protokol BGP."
  },
  {
    stimulus: "Penyedia menara telekomunikasi (Tower Provider) mempekerjakan teknisi yang memiliki sertifikasi khusus memanjat menara monopole dan four-leg untuk memasang perangkat antena microwave dan radio RRU.",
    question: "Jabatan teknisi pemanjat menara yang terlatih dalam keselamatan ketinggian tersebut dikenal sebagai...",
    correctText: "Tower Rigger / Tower Climber Technician",
    distractors: [
      "Security Guard Pos Menara",
      "Operator Genset Cadangan",
      "Pembersih Kaca Gedung Bertingkat",
      "Pemasang Keramik Gardu"
    ],
    explanation: "Rigger adalah teknisi spesialis pemanjat struktur tinggi (menara/tiang) yang memasang dan menyetel perangkat radio serta kabel feeder.",
    quickTip: "Teknisi spesialis memanjat menara BTS = Tower Rigger."
  },
  {
    stimulus: "Di lingkungan perusahaan multinasional, terdapat pimpinan yang bertanggung jawab merancang strategi adopsi teknologi informasi jangka panjang, keamanan data, dan anggaran infrastruktur TI.",
    question: "Jabatan level eksekutif tertinggi yang mengomandoi seluruh divisi teknologi informasi tersebut adalah...",
    correctText: "Chief Information Officer (CIO) / Chief Technology Officer (CTO)",
    distractors: [
      "Junior Desktop Support",
      "Field Maintenance Helper",
      "Internship Student",
      "Warehouse Packer"
    ],
    explanation: "CIO atau CTO adalah pimpinan eksekutif yang merumuskan visi teknologi, strategi infrastruktur, serta alokasi anggaran TI perusahaan.",
    quickTip: "Pimpinan eksekutif tertinggi bidang teknologi = CIO / CTO."
  },
  {
    stimulus: "Sebuah perusahaan jasa integrasi sistem (System Integrator) membutuhkan staf yang bertugas mengukur kekuatan sinyal radio Wi-Fi gedung, menganalisis spektrum interferensi, dan membuat heatmap jangkauan sinyal.",
    question: "Peran fungsional yang dijalankan oleh staf tersebut dalam proyek nirkabel adalah...",
    correctText: "Wireless Site Survey Specialist / RF Engineer",
    distractors: [
      "Audio Mixing Specialist",
      "Penyiar Radio Komersial",
      "Pemasang Wallpaper Ruangan",
      "Operator Mesin Cetak Banner"
    ],
    explanation: "Wireless/RF Site Surveyor mengukur propagasi gelombang elektromagnetik, interferensi, serta membuat peta jangkauan sinyal (heatmap).",
    quickTip: "Pengukuran heatmap sinyal radio & interferensi = Wireless/RF Surveyor."
  },
  {
    stimulus: "Dalam struktur eskalasi bantuan teknis (Technical Support Hierarchy) di ISP, tiket masalah yang gagal diselesaikan oleh Tier 1 akan dilanjutkan ke tingkatan yang lebih ahli.",
    question: "Tingkatan teknis yang melakukan konfigurasi ulang router pelanggan dari jarak jauh, reset port switch, dan analisis statistik trafik adalah...",
    correctText: "Technical Support Tier 2 / Tier 2 Network Support",
    distractors: [
      "Petugas Loket Pembayaran Tagihan",
      "Driver Pengantar Surat Tagihan",
      "Satpam Kantor Pelayanan",
      "Tukang Kebun Kantor Pusat"
    ],
    explanation: "Support Tier 2 menangani troubleshooting tingkat menengah yang memerlukan akses konfigurasi perangkat dan analisis teknis lanjutan.",
    quickTip: "Penanganan gangguan teknis eskalasi lanjutan = Support Tier 2."
  },
  {
    stimulus: "Sebuah pusat data (Data Center) besar memiliki fasilitas fisik yang memerlukan pemantauan terus-menerus terhadap pasokan daya UPS, genset cadangan, dan unit pendingin presisi (CRAC).",
    question: "Jabatan yang bertanggung jawab memastikan keandalan lingkungan fisik dan kelistrikan ruang server tersebut adalah...",
    correctText: "Data Center Facility Engineer",
    distractors: [
      "Front Office Receptionist",
      "Petugas Kebersihan Koridor Luar",
      "Kurir Makanan Karyawan",
      "Desainer Seragam Kerja"
    ],
    explanation: "Data Center Facility Engineer mengawasi infrastruktur kritis pendukung data center seperti kelistrikan (UPS/PDU), pendingin presisi, dan pencegah kebakaran.",
    quickTip: "Pengelola keandalan daya listrik & pendingin data center = Data Center Facility Engineer."
  },
  {
    stimulus: "Seorang insinyur jaringan ditugaskan mendesain sistem pencegahan intrusi (IPS) dan kebijakan penyaringan paket data antar zona jaringan perbankan menggunakan firewall generasi terbaru (NGFW).",
    question: "Fokus keahlian spesifik yang dijalankan insinyur tersebut berada pada bidang...",
    correctText: "Network Security Engineer",
    distractors: [
      "Animasi Karakter 3D",
      "Videografi Dokumenter",
      "Penyusun Laporan Neraca Keuangan",
      "Pemasang Kanopi Gedung"
    ],
    explanation: "Network Security Engineer mengkhususkan diri pada proteksi lalu lintas jaringan, penerapan firewall NGFW, VPN, dan sistem IPS/IDS.",
    quickTip: "Penerapan firewall NGFW & keamanan lalu lintas data = Network Security Engineer."
  },
  {
    stimulus: "Perusahaan telekomunikasi menggelar proyek kabel serat optik bawah laut (Submarine Cable) yang menghubungkan antarpulau besar di Indonesia.",
    question: "Organisasi industri telekomunikasi yang mengatur standar teknis internasional dalam bidang transmisi kabel optik dan frekuensi radio global adalah...",
    correctText: "ITU (International Telecommunication Union)",
    distractors: [
      "FIFA (Federation Internationale de Football Association)",
      "WHO (World Health Organization)",
      "UNICEF",
      "OPEC"
    ],
    explanation: "ITU adalah badan khusus PBB yang meregulasikan standarisasi telekomunikasi internasional, alokasi spektrum frekuensi, dan orbit satelit.",
    quickTip: "Badan standarisasi telekomunikasi internasional PBB = ITU."
  },
  {
    stimulus: "Seorang teknisi bertugas di lapangan mengendarai mobil operasional dengan membawa tangga, fusion splicer, OPM, dan kabel drop optik untuk memasang jaringan internet di rumah pelanggan baru.",
    question: "Sebutan peran teknisi yang berinteraksi langsung dengan instalasi fisik di sisi pelanggan (CPE) adalah...",
    correctText: "Field Technician / Teknisi Pasang Baru (PSB)",
    distractors: [
      "Legal Officer Perusahaan",
      "Audit Internal Finansial",
      "General Manager Marketing",
      "Staf Penggajian Personalia"
    ],
    explanation: "Field Technician (Teknisi Lapangan / PSB) bertugas mengeksekusi instalasi fisik penarikan kabel drop dan aktivasi modem di rumah pelanggan.",
    quickTip: "Teknisi instalasi kabel drop & aktivasi modem di rumah = Field Technician."
  },
  {
    stimulus: "Dalam suatu tim kerja rekayasa jaringan, ada personil yang khusus bertugas memetakan aset jaringan fisik (tiang, kabel, ODP) ke dalam aplikasi Sistem Informasi Geografis (GIS) dan AutoCAD.",
    question: "Nama jabatan kerja untuk pembuat gambar teknis jalur jaringan tersebut adalah...",
    correctText: "CAD / GIS Drafter Telekomunikasi",
    distractors: [
      "Art Painter Pameran",
      "Fotografer Model Studio",
      "Editor Naskah Cerpen",
      "Penerjemah Bahasa Sastra"
    ],
    explanation: "CAD/GIS Drafter bertanggung jawab memvisualisasikan rute kabel, posisi tiang, dan rincian konstruksi telekomunikasi ke format peta digital.",
    quickTip: "Pembuat gambar teknis peta rute jaringan & CAD = Drafter Telekomunikasi."
  },
  {
    stimulus: "Lulusan TJKT yang bekerja di industri wajib memiliki sikap profesional dalam menjaga data kredensial akses perangkat (password router, switch, database) milik perusahaan.",
    question: "Prinsip etika profesi yang mewajibkan tenaga kerja tidak membocorkan informasi rahasia konfigurasi jaringan kepada pihak luar diikat dalam dokumen...",
    correctText: "Non-Disclosure Agreement (NDA) / Perjanjian Kerahasiaan Informasi",
    distractors: [
      "Surat Tanda Nomor Kendaraan (STNK)",
      "Kartu Iuran Asuransi",
      "Kuitansi Pembelian ATK Kantor",
      "Brosur Promosi Produk Paket"
    ],
    explanation: "NDA adalah perjanjian hukum yang mengikat karyawan untuk tidak menyebarkan rahasia teknologi, konfigurasi sistem, dan data privasi perusahaan.",
    quickTip: "Perjanjian hukum menjaga kerahasiaan informasi = NDA (Non-Disclosure Agreement)."
  }
];

const s01_mcma = [
  {
    stimulus: "Pengembangan infrastruktur jaringan telekomunikasi modern menuntut pembagian tugas kerja yang terstruktur antara tim perencana, tim implementasi, dan tim pemeliharaan.",
    question: "Manakah peran kerja di bawah ini yang tergolong dalam kelompok tenaga pelaksana instalasi dan pemeliharaan fisik lapangan (Field Operations)? (Pilihlah DUA atau TIGA jawaban yang benar)",
    options: [
      { text: "Fiber Optic Splicer Technician", isCorrect: true },
      { text: "Tower Climber / Rigger", isCorrect: true },
      { text: "Teknisi Pasang Baru (PSB / IKR)", isCorrect: true },
      { text: "Chief Financial Officer (CFO)", isCorrect: false },
      { text: "Software Frontend React Developer", isCorrect: false }
    ],
    explanation: "Splicer, Rigger, dan Teknisi PSB/IKR merupakan tenaga lapangan (Field Operations) yang bersentuhan langsung dengan media transmisi fisik.",
    quickTip: "Tenaga lapangan fisik = Splicer, Rigger, dan Teknisi PSB."
  },
  {
    stimulus: "Pusat Operasi Jaringan (Network Operation Center / NOC) beroperasi 24 jam sehari dalam memantau performa ribuan elemen jaringan ISP.",
    question: "Tugas dan fungsi harian yang menjadi tanggung jawab utama seorang NOC Engineer meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
    options: [
      { text: "Memantau sistem monitoring NMS terhadap event alert gangguan jaringan", isCorrect: true },
      { text: "Membuka trouble ticket dan mencatat riwayat eskalasi penanganan insiden", isCorrect: true },
      { text: "Melakukan koordinasi dengan tim lapangan untuk investigasi gangguan di lokasi", isCorrect: true },
      { text: "Menjual paket kuota internet langsung secara door-to-door ke perumahan", isCorrect: false },
      { text: "Membuat desain interior gedung perkantoran pusat", isCorrect: false }
    ],
    explanation: "Tugas utama tim NOC berpusat pada monitoring dashboard NMS, trouble ticket management, dan koordinasi dispatching tim lapangan.",
    quickTip: "Fungsi NOC: Monitoring NMS, Trouble Ticketing, dan Dispatch Lapangan."
  },
  {
    stimulus: "Dalam struktur organisasi divisi IT perusahaan perbankan, keamanan data nasabah menjadi prioritas mutlak.",
    question: "Kualifikasi dan peran profesi yang fokus pada ranah perlindungan aset jaringan dan penanggulangan insiden siber adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
    options: [
      { text: "SOC (Security Operations Center) Analyst", isCorrect: true },
      { text: "Penetration Tester / Vulnerability Assessor", isCorrect: true },
      { text: "Network Security Engineer", isCorrect: true },
      { text: "Staf Resepsionis Lobi Kantor", isCorrect: false },
      { text: "Petugas Operator Mesin Cuci Seragam", isCorrect: false }
    ],
    explanation: "SOC Analyst, Penetration Tester, dan Network Security Engineer adalah pilar profesi keamanan siber (Cybersecurity) industri IT.",
    quickTip: "Profesi keamanan informasi = SOC Analyst, Pen Tester, Network Security Engineer."
  },
  {
    stimulus: "Lulusan SMK TJKT yang berjiwa wirausaha (Technopreneur) dapat membangun layanan bernilai tambah secara mandiri di lingkungannya.",
    question: "Bidang usaha jasa mandiri yang sangat relevan dengan kompetensi kejuruan TJKT adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
    options: [
      { text: "Jasa perancangan dan pemasangan sistem Wi-Fi terkelola (Hotspot Voucher)", isCorrect: true },
      { text: "Instalasi dan integrasi kamera keamanan IP-CCTV jaringan", isCorrect: true },
      { text: "Konsultasi perakitan dan konfigurasi server Linux untuk kantor UMKM", isCorrect: true },
      { text: "Pabrik peleburan bijih besi berskala berat", isCorrect: false },
      { text: "Budidaya tanaman hias langka hidroponik", isCorrect: false }
    ],
    explanation: "Wirausaha TJKT berfokus pada solusi teknologi jaringan seperti hotspot Wi-Fi, IP-CCTV, dan pemeliharaan server/jaringan kantor UMKM.",
    quickTip: "Usaha mandiri TJKT: Hotspot Wi-Fi, IP-CCTV, dan Administrasi Jaringan UMKM."
  },
  {
    stimulus: "System Administrator bertugas mengelola siklus hidup server agar layanan perusahaan tetap dapat diakses tanpa henti.",
    question: "Aktivitas teknis yang rutin dilaksanakan oleh seorang System Administrator meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
    options: [
      { text: "Mengelola hak izin akses berkas dan direktori pengguna di server", isCorrect: true },
      { text: "Melakukan pembaruan keamanan (security patch) pada sistem operasi", isCorrect: true },
      { text: "Mengatur jadwal pencadangan (automated backup) basis data secara berkala", isCorrect: true },
      { text: "Mengemudikan truk pengantar tiang beton ke luar kota", isCorrect: false },
      { text: "Memasak hidangan katering makan siang karyawan", isCorrect: false }
    ],
    explanation: "SysAdmin bertanggung jawab atas user permissions, OS security patch, dan automated backup berkala.",
    quickTip: "Tugas SysAdmin: Manajemen hak akses, security update OS, dan backup data."
  }
];

const s01_tf = [
  {
    stimulus: "Profesi Network Planner bertugas merancang topologi, menghitung redaman transmisi, dan memilih spesifikasi perangkat sebelum proyek penggelaran kabel fiber optik dimulai.",
    question: "Tentukan kebenaran dari masing-masing pernyataan berikut terkait peran Network Planner!",
    statements: [
      { text: "Network Planner bekerja menghitung Optical Link Budget sebelum konstruksi fisik dimulai.", correct: "B" },
      { text: "Network Planner bertugas memanjat tiang kabel secara langsung untuk menyambung serat optik setiap hari.", correct: "S" },
      { text: "Dokumen hasil rancangan Network Planner menjadi acuan kerja bagi tim penggelaran kabel di lapangan.", correct: "B" }
    ],
    explanation: "Network Planner fokus pada perancangan teknis dan kalkulasi sebelum konstruksi, bukan pelaksana manual splicing tiang harian.",
    quickTip: "Planner merancang & menghitung; teknisi lapangan yang memasang fisik."
  },
  {
    stimulus: "Petugas Helpdesk Tier 1 bertindak sebagai gerbang terdepan (first point of contact) penanganan aduan pelanggan pada penyedia layanan internet (ISP).",
    question: "Tentukan kebenaran dari masing-masing pernyataan berikut mengenai tugas Helpdesk Tier 1!",
    statements: [
      { text: "Helpdesk Tier 1 wajib mendokumentasikan keluhan pelanggan dan menerbitkan nomor tiket gangguan.", correct: "B" },
      { text: "Jika terjadi kabel serat optik bawah laut putus, Helpdesk Tier 1 bertugas menyelam ke dasar laut untuk memperbaikinya.", correct: "S" },
      { text: "Helpdesk Tier 1 memandu pelanggan melakukan verifikasi fisik dasar seperti status lampu indikator pada modem.", correct: "B" }
    ],
    explanation: "Helpdesk Tier 1 bertugas mencatat tiket dan memandu troubleshooting dasar, perbaikan fisik bawah laut dilakukan kapal kabel khusus.",
    quickTip: "Helpdesk melayani komunikasi pelanggan & panduan awal, bukan penyelam perbaikan fisik."
  },
  {
    stimulus: "Seorang Network Engineer bertanggung jawab atas perancangan konfigurasi perutean (routing) dan pensaklaran (switching) jaringan komputer.",
    question: "Tentukan kebenaran dari masing-masing pernyataan berikut mengenai peran Network Engineer!",
    statements: [
      { text: "Network Engineer bertugas mengonfigurasi protokol routing dinamis seperti OSPF dan BGP pada router.", correct: "B" },
      { text: "Network Engineer bertugas merancang pembagian segmen Virtual LAN (VLAN) untuk membatasi domain siaran.", correct: "B" },
      { text: "Network Engineer bertanggung jawab menulis artikel berita gosip selebriti di majalah cetak kantor.", correct: "S" }
    ],
    explanation: "Routing, VLAN switching, dan optimasi arsitektur jaringan adalah kompetensi inti dari Network Engineer.",
    quickTip: "Network Engineer ahli dalam protokol routing, VLAN, dan konfigurasi jaringan."
  },
  {
    stimulus: "Technopreneurship di bidang teknologi informasi membuka peluang kemandirian finansial bagi lulusan SMK kejuruan TJKT.",
    question: "Tentukan kebenaran dari masing-masing pernyataan berikut tentang Technopreneur TJKT!",
    statements: [
      { text: "Technopreneur TJKT menggabungkan kecakapan teknis jaringan dengan kemampuan mengelola peluang bisnis.", correct: "B" },
      { text: "Technopreneur di bidang TJKT dilarang membuat nota kesepakatan tertulis saat melayani pelanggan kantor.", correct: "S" },
      { text: "Penyediaan solusi Wi-Fi terintegrasi sistem autentikasi voucher merupakan contoh produk layanan technopreneur TJKT.", correct: "B" }
    ],
    explanation: "Technopreneur menggabungkan keahlian teknologi dan bisnis, serta selalu menerapkan administrasi profesional seperti nota kontrak kerja.",
    quickTip: "Technopreneur = Keahlian teknologi + wirausaha profesional."
  },
  {
    stimulus: "Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) merupakan standar hukum dalam etika profesi teknologi informasi.",
    question: "Tentukan kebenaran dari masing-masing pernyataan berikut tentang kepatuhan etika profesi dan NDA!",
    statements: [
      { text: "Teknisi jaringan diperbolehkan menjual data pribadi pelanggan ISP kepada pihak ketiga demi keuntungan pribadi.", correct: "S" },
      { text: "Menjaga kerahasiaan diagram topologi dan password perangkat jaringan adalah kewajiban profesional beretika.", correct: "B" },
      { text: "Pelanggaran terhadap dokumen NDA dapat berakibat pada sanksi hukum pemutusan hubungan kerja hingga pidana.", correct: "B" }
    ],
    explanation: "Membocorkan data pelanggan adalah pelanggaran hukum dan etika berat; dokumen NDA mengikat secara hukum kerahasiaan data perusahaan.",
    quickTip: "Etika profesi & NDA melarang keras pembocoran data rahasia konfigurasi/pelanggan."
  }
];

module.exports = {
  sessionId: "s01",
  pg: s01_pg,
  mcma: s01_mcma,
  tf: s01_tf
};
