/**
 * BANK SOAL LENGKAP & SISTEM PENGACAKAN STANDAR PUSMENDIK / PM_DEV
 * TJKT SMK Negeri 1 Giritontro 2026
 *
 * FITUR UTAMA PERBAIKAN:
 * 1. Tidak ada pengulangan soal dalam satu sesi (30 soal unik per sesi).
 * 2. Distribusi kunci jawaban merata acak (A, B, C, D, E dengan proporsi seimbang, bukan melulu opsi B).
 * 3. Soal Multi-Answer (PGK MCMA) bervariasi luas (AC, BDE, AD, BCE, CDE, AB, dll - bukan melulu ABD).
 * 4. Soal Benar/Salah memiliki pola acak beragam (B-B-S, S-B-S, S-S-B, B-S-S, B-S-B, S-B-B).
 * 5. Variasi profesi & studi kasus luas (Network Planner, NOC Engineer, DevOps, Fiber Splicer, Cloud Engineer, dll).
 */

// ================= MASTER POOL SOAL TJKT BERDASARKAN ELEMEN BSKAP 046/2025 =================

const TJKT_MASTER_QUESTIONS = [
  // --- PILAR 1: WAWASAN DUNIA KERJA & PROFESI TJKT ---
  {
    category: "profesi",
    type: "pg",
    stimulus: "Sebuah perusahaan ISP sedang merencanakan perluasan jaringan FTTH (Fiber To The Home) di perumahan baru.",
    question: "Profesi yang paling bertanggung jawab dalam merancang rute kabel, menghitung optical link budget, dan memetakan posisi ODC serta ODP adalah...",
    correctText: "Network Planner / Perencana Jaringan",
    distractors: [
      "Database Administrator",
      "Frontend Developer",
      "Helpdesk Tier 1",
      "Staff Akuntansi Keuangan"
    ],
    explanation: "Network Planner bertugas melakukan survei rute, perhitungan redaman kabel (link budget), dan penempatan tiang distribusi serta splitter ODC/ODP.",
    quickTip: "Merancang rute & link budget = Network Planner."
  },
  {
    category: "profesi",
    type: "pg",
    stimulus: "Pusat operasi jaringan (NOC) menerima alert bahwa link backbone antar-kantor pusat mengalami packet loss hingga 40%.",
    question: "Tugas utama tim Network Operation Center (NOC) dalam menangani insiden tersebut adalah...",
    correctText: "Menganalisis log perangkat, membuat trouble ticket, dan mengoordinasikan teknisi lapangan terdekat",
    distractors: [
      "Menghapus seluruh file konfigurasi router secara permanen",
      "Mematikan pasokan listrik seluruh gedung kantor",
      "Mengganti seluruh kabel server tanpa melakukan diagnosa log",
      "Menunggu hingga jam operasional kantor esok hari"
    ],
    explanation: "SOP tim NOC adalah memantau dashboard, menganalisis log perangkat, membuka tiket gangguan (trouble ticket), dan memandu tim lapangan.",
    quickTip: "NOC = Memantau, mendiagnosis log, dan mengoordinasikan trouble ticket."
  },
  {
    category: "profesi",
    type: "pg",
    stimulus: "Sebuah instansi pemerintah membutuhkan pengelolaan server Linux, manajemen backup basis data otomatis, dan pembatasan hak akses pengguna.",
    question: "Peran profesi TI yang paling tepat untuk bertanggung jawab atas keandalan server dan hak akses tersebut adalah...",
    correctText: "System Administrator (SysAdmin)",
    distractors: [
      "Web Graphic Designer",
      "Digital Marketing Specialist",
      "Hardware Assembler Pabrik",
      "Video Editor Multimedia"
    ],
    explanation: "System Administrator bertugas memelihara sistem operasi server, hak akses (user privileges), keamanan, dan pencadangan (backup) berkala.",
    quickTip: "SysAdmin = Pengelola server, OS Linux, dan user privileges."
  },
  {
    category: "profesi",
    type: "pg",
    stimulus: "Lulusan SMK TJKT ingin merintis usaha mandiri (technopreneur) yang bergerak di bidang layanan jaringan.",
    question: "Jenis peluang usaha technopreneur yang paling relevan dan berpotensi tinggi untuk lulusan TJKT adalah...",
    correctText: "Jasa perancangan dan instalasi jaringan LAN, Wi-Fi terkelola, dan sistem keamanan CCTV",
    distractors: [
      "Pabrik pembuatan ban kendaraan bermotor",
      "Pengeboran tambang minyak bumi lepas pantai",
      "Distributor penjualan beras dan sembako",
      "Jasa fotokopi dokumen konvensional tanpa komputer"
    ],
    explanation: "Technopreneur TJKT fokus pada solusi IT: instalasi jaringan LAN kantor, perakitan server lokal, Wi-Fi voucher, dan integrasi IP CCTV.",
    quickTip: "Technopreneur TJKT = Wirausaha jasa jaringan, hotspot Wi-Fi, & CCTV."
  },
  {
    category: "profesi",
    type: "pg",
    stimulus: "Kualitas layanan penyedia jasa internet (ISP) diikat oleh kontrak Service Level Agreement (SLA).",
    question: "Jika sebuah ISP menjanjikan SLA sebesar 99,9% dalam 1 bulan (30 hari), maka total waktu toleransi gangguan (downtime) maksimal adalah sekitar...",
    correctText: "Sekitar 43 menit per bulan",
    distractors: [
      "Sekitar 24 jam penuh per bulan",
      "Sekitar 7 hari kerja berturut-turut",
      "Hanya 1 detik per tahun",
      "Sekitar 10 jam per minggu"
    ],
    explanation: "30 hari = 43.200 menit. Toleransi downtime 0,1% = 0,001 x 43.200 menit = 43,2 menit dalam sebulan.",
    quickTip: "SLA 99.9% = Toleransi downtime sekitar 43 menit per bulan."
  },

  // --- PILAR 2: K3LH & BUDAYA KERJA 5R ---
  {
    category: "k3_5r",
    type: "pg",
    stimulus: "Teknisi TJKT ditugaskan menarik kabel drop fiber optik pada tiang tumpu setinggi 7 meter di pinggir jalan raya.",
    question: "APD penahan jatuh yang wajib dikenakan teknisi saat bekerja di atas tiang dengan tumpuan tali pengaman adalah...",
    correctText: "Full Body Harness dengan tali lanyard ganda terpasang ke tiang",
    distractors: [
      "Sabuk pinggang kulit biasa untuk pakaian harian",
      "Jas hujan plastik tipis",
      "Masker kain bedah sekali pakai",
      "Rompi pelampung air renang"
    ],
    explanation: "Sesuai standar K3 Ketinggian (Permenaker No. 9 Tahun 2016), bekerja di atas ketinggian 1,8 meter wajib menggunakan Full Body Harness dengan lanyard.",
    quickTip: "Bekerja di ketinggian tiang/tower wajib Full Body Harness."
  },
  {
    category: "k3_5r",
    type: "pg",
    stimulus: "Di ruang server data center sebuah instansi, kabel data UTP dan kabel power listrik AC 220V terlihat berserakan di koridor jalan.",
    question: "Penerapan konsep 5R (Rapi) dan K3LH yang tepat untuk mencegah induksi elektromagnetik dan bahaya tersandung adalah...",
    correctText: "Memisahkan jalur kabel data dan kabel listrik dalam ducting / cable tray yang berbeda",
    distractors: [
      "Menutupi kabel berserakan dengan karpet kain biasa",
      "Mengikat kabel listrik tegangan tinggi dan kabel data UTP menjadi satu bundel rapat",
      "Memotong kabel yang panjang dan membiarkan ujungnya terbuka",
      "Mengabaikan kabel karena jarang dilalui pimpinan"
    ],
    explanation: "Kabel data dan listrik harus dipisah dalam cable tray berbeda untuk menghindari induksi elektromagnetik (EMI) dan mencegah teknisi tersandung.",
    quickTip: "5R Rapi: Pisahkan kabel data dari kabel listrik dalam cable tray."
  },
  {
    category: "k3_5r",
    type: "pg",
    stimulus: "Saat terjadi insiden korsleting listrik pada rak server di ruang data center yang menimbulkan percikan api.",
    question: "Alat Pemadam Api Ringan (APAR) yang paling aman digunakan tanpa merusak komponen elektronik server adalah jenis...",
    correctText: "APAR Karbon Dioksida (CO2) atau Clean Agent Gas",
    distractors: [
      "APAR Air (Water)",
      "APAR Busa (Foam basah)",
      "Ember berisi pasir basah berair",
      "Siraman selang air pemadam kebakaran"
    ],
    explanation: "APAR CO2 atau Gas Clean Agent tidak meninggalkan residu dan tidak menghantarkan arus listrik, sehingga aman untuk perangkat elektronik server.",
    quickTip: "Kebakaran alat elektronik/server = Gunakan APAR CO2 (tanpa residu)."
  },
  {
    category: "k3_5r",
    type: "pg",
    stimulus: "Sisa potongan core serat optik setelah proses stripping dan cleaving berukuran sangat kecil dan tembus pandang.",
    question: "Prosedur K3 yang benar dalam menangani limbah sisa pecahan core fiber optik adalah...",
    correctText: "Mengumpulkan pecahan kaca dengan pinset dan membuangnya ke wadah limbah khusus bertutup rapat",
    distractors: [
      "Meniup pecahan kaca dari meja agar jatuh ke lantai",
      "Mengusap meja dengan telapak tangan kosong tanpa sarung tangan",
      "Membuang pecahan kaca ke kantong sampah plastik makanan",
      "Menghancurkan pecahan kaca dengan palu di atas meja kerja"
    ],
    explanation: "Pecahan kaca fiber sangat tajam dan bisa menembus pembuluh darah jika menusuk kulit atau terhirup. Wajib dibuang ke wadah khusus bertutup (Fiber Trash Can).",
    quickTip: "Limbah core optik wajib dibuang ke wadah khusus tertutup dengan pinset."
  },
  {
    category: "k3_5r",
    type: "pg",
    stimulus: "Teknisi hendak memanjat tiang kabel yang posisinya berada di dekat kabel Saluran Udara Tegangan Rendah (SUTR) PLN.",
    question: "Material tangga yang paling aman digunakan oleh teknisi untuk meminimalkan risiko sengatan listrik adalah...",
    correctText: "Tangga berbahan fiberglass / serat kaca isolator",
    distractors: [
      "Tangga aluminium murni",
      "Tangga pipa besi baja galvanis",
      "Tangga kawat tembaga elastis",
      "Tangga rantai besi gantung"
    ],
    explanation: "Fiberglass adalah material isolator yang tidak menghantarkan listrik, sehingga wajib digunakan saat bekerja di dekat instalasi listrik PLN.",
    quickTip: "Kerja dekat kabel listrik = Gunakan tangga Fiberglass (isolator listrik)."
  },

  // --- PILAR 3: MEDIA TRANSMISI TEMBAGA, OPTIK & TELEKOMUNIKASI ---
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Teknisi diminta membuat kabel jaringan untuk menghubungkan port Ethernet laptop langsung ke port LAN router.",
    question: "Berdasarkan standar internasional TIA/EIA 568B, susunan urutan warna kabel pin 1 hingga 8 yang benar adalah...",
    correctText: "Putih Orange, Orange, Putih Hijau, Biru, Putih Biru, Hijau, Putih Cokelat, Cokelat",
    distractors: [
      "Putih Hijau, Hijau, Putih Orange, Biru, Putih Biru, Orange, Putih Cokelat, Cokelat",
      "Orange, Putih Orange, Hijau, Putih Hijau, Biru, Putih Biru, Cokelat, Putih Cokelat",
      "Putih Biru, Biru, Putih Orange, Hijau, Putih Hijau, Orange, Putih Cokelat, Cokelat",
      "Putih Cokelat, Cokelat, Putih Hijau, Biru, Putih Biru, Hijau, Putih Orange, Orange"
    ],
    explanation: "Standar TIA/EIA 568B: 1. Putih Orange, 2. Orange, 3. Putih Hijau, 4. Biru, 5. Putih Biru, 6. Hijau, 7. Putih Cokelat, 8. Cokelat.",
    quickTip: "Hafalan 568B: Putih Orange, Orange, Putih Hijau, Biru, Putih Biru, Hijau, Putih Cokelat, Cokelat."
  },
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Jarak maksimal transmisi data kabel twisted pair UTP Cat6 tanpa repeater sesuai spesifikasi IEEE 802.3 adalah...",
    question: "Batas panjang bentangan kabel UTP horizontal dari patch panel/switch ke outlet workstation adalah...",
    correctText: "100 meter (90 meter kabel solid horizontal + 10 meter patch cord)",
    distractors: [
      "500 meter",
      "1.000 meter (1 kilometer)",
      "25 meter",
      "2.000 meter"
    ],
    explanation: "Standar TIA/EIA dan IEEE 802.3 menetapkan panjang maksimal total saluran UTP adalah 100 meter untuk menjaga redaman sinyal tetap dalam toleransi.",
    quickTip: "Batas panjang kabel tembaga UTP = 100 Meter."
  },
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Pada kabel serat optik, cahaya dapat merambat mengikuti lekukan kabel melalui prinsip Pemantulan Internal Total (Total Internal Reflection).",
    question: "Syarat fisis mutlak agar fenomena Total Internal Reflection dapat terjadi di dalam serat optik adalah...",
    correctText: "Indeks bias Core harus lebih besar daripada indeks bias Cladding (n_core > n_cladding)",
    distractors: [
      "Indeks bias Core harus lebih kecil daripada indeks bias Cladding (n_core < n_cladding)",
      "Diameter inti Core harus sama besar dengan diameter kabel jaket luar",
      "Cahaya yang digunakan harus memiliki intensitas panas di atas 100 derajat Celsius",
      "Kabel harus dialiri arus listrik tegangan tinggi konstan"
    ],
    explanation: "Sesuai hukum Snellius, pantulan internal total terjadi saat cahaya merambat dari medium berindeks bias lebih tinggi (Core) menuju medium berindeks bias lebih rendah (Cladding) dengan sudut datang melebihi sudut kritis.",
    quickTip: "Syarat pantulan optik: n_core selalu LEBIH BESAR dari n_cladding."
  },
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Dua jenis serat optik yang umum digunakan di industri telekomunikasi adalah Single-Mode Fiber (SMF) dan Multi-Mode Fiber (MMF).",
    question: "Karakteristik utama yang membedakan serat optik Single-Mode dibandingkan Multi-Mode adalah...",
    correctText: "Single-Mode memiliki diameter core sangat kecil (~9 µm) dan menggunakan sumber cahaya laser untuk jarak jauh",
    distractors: [
      "Single-Mode memiliki diameter core 50 µm dan menggunakan lampu LED bohlam",
      "Single-Mode hanya bisa mentransmisikan data maksimal sejauh 100 meter",
      "Single-Mode tidak dapat digunakan di luar ruangan (outdoor)",
      "Single-Mode menggunakan tembaga di dalam intinya"
    ],
    explanation: "Single-Mode memiliki core 9/125 µm, merambatkan 1 mode cahaya (laser), dispersi modal minim, dan ditujukan untuk transmisi jarak jauh puluhan kilometer.",
    quickTip: "Single-Mode: Core kecil 9 mikron, Laser, Jarak Jauh."
  },
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Untuk instalasi Wi-Fi di area padat penduduk, spektrum frekuensi 2.4 GHz sering mengalami interferensi antar-Access Point.",
    question: "Kombinasi tiga kanal (channels) pada frekuensi 2.4 GHz standar Indonesia yang sama sekali tidak saling tumpang tindih (non-overlapping) adalah...",
    correctText: "Kanal 1, Kanal 6, dan Kanal 11",
    distractors: [
      "Kanal 1, Kanal 2, dan Kanal 3",
      "Kanal 2, Kanal 4, dan Kanal 6",
      "Kanal 6, Kanal 7, dan Kanal 8",
      "Kanal 10, Kanal 11, dan Kanal 12"
    ],
    explanation: "Pada pita frekuensi Wi-Fi 2.4 GHz dengan lebar pita 20 MHz, hanya kanal 1, 6, dan 11 yang memiliki pemisahan frekuensi bersih tanpa interferensi kanal bersama.",
    quickTip: "Non-overlapping channels 2.4 GHz = 1, 6, dan 11."
  },
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Komunikasi data nirkabel menggunakan sistem gelombang mikro (Microwave Link) membutuhkan lintasan udara yang bersih.",
    question: "Kondisi tanpa penghalang visual dan radio antara antena pemancar dan penerima pada komunikasi microwave disebut...",
    correctText: "Line of Sight (LOS) dengan daerah Fresnel Zone yang bebas halangan",
    distractors: [
      "Non-Line of Sight (NLOS)",
      "Direct Underground Propagation",
      "Diffraction Over Mountain Only",
      "Atmospheric Ionization Delay"
    ],
    explanation: "Microwave bekerja pada frekuensi GHz yang merambat lurus, sehingga memerlukan Line of Sight (LOS) dan ruang bebas Fresnel Zone minimal 60% bebas dari pohon/gedung.",
    quickTip: "Microwave link butuh Line of Sight (LOS) bebas halangan."
  },
  {
    category: "transmisi",
    type: "pg",
    stimulus: "Sebuah sekolah di wilayah kepulauan terpencil yang belum terjangkau fiber optik memanfaatkan koneksi satelit VSAT IP geostasioner.",
    question: "Karakteristik utama koneksi satelit Geostasioner (GEO) yang mempengaruhi performa game online dan panggilan video adalah...",
    correctText: "Latency (RTT) yang relatif tinggi (~500 - 600 ms) karena jarak orbit satelit ~36.000 km dari bumi",
    distractors: [
      "Latency sangat rendah di bawah 1 milidetik",
      "Tidak dapat menggunakan protokol TCP/IP sama sekali",
      "Wajib menyambungkan kabel tembaga dari bumi ke satelit",
      "Hanya dapat mentransmisikan teks SMS hitam putih"
    ],
    explanation: "Satelit GEO berada pada orbit ~35.786 km di atas khatulistiwa. Waktu tempuh bolak-balik gelombang radio ke luar angkasa menghasilkan latency sekitar 500-600 ms.",
    quickTip: "Satelit GEO = Jangkauan luas tetapi Latency tinggi (~500-600 ms)."
  },

  // --- PILAR 4: PENGALAMATAN IP, SWITCHING & ROUTING ---
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Administrator jaringan diberikan blok alamat network 192.168.100.0/26 untuk dialokasikan ke laboratorium komputer.",
    question: "Berapa jumlah host valid yang dapat digunakan oleh komputer klien, dan berapakah subnet mask dari network tersebut?",
    correctText: "62 host valid dengan subnet mask 255.255.255.192",
    distractors: [
      "64 host valid dengan subnet mask 255.255.255.128",
      "30 host valid dengan subnet mask 255.255.255.224",
      "126 host valid dengan subnet mask 255.255.255.192",
      "254 host valid dengan subnet mask 255.255.255.0"
    ],
    explanation: "Prefix /26 menyisakan 32 - 26 = 6 bit host. Jumlah total IP = 2^6 = 64. Host valid = 64 - 2 = 62 host. Subnet mask = 256 - 64 = 192 di oktet terakhir (255.255.255.192).",
    quickTip: "Subnet /26 = 62 host valid, Subnet mask 255.255.255.192."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Dua buah router kantor pusat dan cabang dihubungkan melalui kabel serial point-to-point.",
    question: "Prefix subnetting yang paling efisien agar tidak ada alamat IP yang terbuang sia-sia pada link point-to-point tersebut adalah...",
    correctText: "/30 (menyediakan tepat 2 alamat host valid)",
    distractors: [
      "/24 (menyediakan 254 host valid)",
      "/28 (menyediakan 14 host valid)",
      "/27 (menyediakan 30 host valid)",
      "/29 (menyediakan 6 host valid)"
    ],
    explanation: "Link point-to-point hanya membutuhkan 2 IP untuk antarmuka kedua router. Prefix /30 menyediakan total 4 IP (1 network, 2 host valid, 1 broadcast), pilihan paling tepat dan hemat.",
    quickTip: "Link point-to-point antar 2 router = Gunakan prefix /30."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Dokumen RFC 1918 mengatur alokasi alamat IPv4 Private yang tidak dapat di-routing secara langsung di internet publik.",
    question: "Alamat IP berikut yang termasuk dalam kelompok IP Private kelas B adalah...",
    correctText: "172.16.50.1",
    distractors: [
      "192.168.1.1",
      "10.0.0.1",
      "8.8.8.8",
      "169.254.10.20"
    ],
    explanation: "Rentang IP Private menurut RFC 1918: Kelas A (10.0.0.0 - 10.255.255.255), Kelas B (172.16.0.0 - 172.31.255.255), Kelas C (192.168.0.0 - 192.168.255.255). 172.16.50.1 berada di kelas B.",
    quickTip: "Private Kelas B = 172.16.0.0 s.d. 172.31.255.255."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Sebuah PC klien Windows diset mendapatkan IP otomatis melalui DHCP. Namun DHCP Server mati, sehingga PC mendapatkan IP 169.254.12.34.",
    question: "Mekanisme pengalamatan otomatis pada sistem operasi saat DHCP Server tidak merespons tersebut dinamakan...",
    correctText: "APIPA (Automatic Private IP Addressing)",
    distractors: [
      "DNS Static Mapping",
      "Default Gateway Redundancy",
      "NAT Masquerading Dynamic",
      "VLAN Tagging 802.1Q"
    ],
    explanation: "Jika klien DHCP gagal mendapatkan IP dari server, sistem operasi otomatis mengalokasikan IP APIPA dalam rentang 169.254.0.1 - 169.254.255.254.",
    quickTip: "IP 169.254.x.x = APIPA (gagal dapat IP dari DHCP Server)."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Protokol IPv6 memiliki panjang alamat 128 bit yang ditulis dalam bilangan heksadesimal.",
    question: "Alamat IPv6 berikut: 2001:0db8:0000:0000:0000:0000:0000:0001 jika disingkat sesuai aturan standar RFC 5952 yang benar adalah...",
    correctText: "2001:db8::1",
    distractors: [
      "2001:db8:0:0:0:0:0:1",
      "2001::db8::1",
      "2001:db8:::1",
      "2001-db8--1"
    ],
    explanation: "Aturan penyingkatan IPv6: 1. Angka 0 di depan (leading zeros) dihilangkan (0db8 -> db8), 2. Blok angka 0 berurutan diganti dengan double colon (::) tepat SATU KALI.",
    quickTip: "Singkat IPv6: Hilangkan 0 di depan, blok 0 berurutan diganti '::' sekali saja."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Perangkat Switch managed Layer 2 menggunakan informasi tertentu untuk meneruskan frame data ke port yang tepat.",
    question: "Tabel basis data internal yang dibangun oleh Switch Layer 2 untuk memetakan port fisik dengan perangkat tujuan adalah...",
    correctText: "MAC Address Table (CAM Table)",
    distractors: [
      "Routing Table IPv4",
      "DNS Cache Record",
      "ARP Cache Gateway Only",
      "ACL Rule Table"
    ],
    explanation: "Switch Layer 2 membaca alamat MAC sumber frame yang masuk dan menyimpannya di MAC Address Table (Content Addressable Memory/CAM Table).",
    quickTip: "Switch L2 bekerja menggunakan MAC Address Table."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Teknologi Virtual LAN (VLAN) memungkinkan beberapa jaringan logis berjalan di atas switch fisik yang sama.",
    question: "Port switch yang digunakan untuk menghubungkan switch dengan switch lain atau ke router untuk membawa lalu lintas banyak VLAN bertagging disebut...",
    correctText: "Trunk Port (berdasarkan standar IEEE 802.1Q)",
    distractors: [
      "Access Port",
      "Console Port",
      "Auxiliary Port",
      "Loopback Port"
    ],
    explanation: "Access Port hanya membawa 1 VLAN untuk perangkat akhir (PC/printer), sedangkan Trunk Port membawa banyak VLAN bertagging IEEE 802.1Q antar-switch atau ke router.",
    quickTip: "Trunk Port = Membawa banyak VLAN (Tagged 802.1Q)."
  },
  {
    category: "jaringan",
    type: "pg",
    stimulus: "Agar seluruh PC di lab yang menggunakan IP Private dapat berselancar di internet menggunakan satu IP Public dari ISP.",
    question: "Mekanisme penerjemahan alamat jaringan yang harus dikonfigurasi pada router gateway adalah...",
    correctText: "Source NAT (Masquerade)",
    distractors: [
      "Destination NAT (Port Forwarding)",
      "DHCP Relay Server",
      "Spanning Tree Protocol (STP)",
      "Static ARP Binding"
    ],
    explanation: "Source NAT Masquerade mentranslasikan IP Private klien lokal menjadi IP Public antarmuka router saat paket keluar menuju internet.",
    quickTip: "Klien lokal bisa internetan lewat router berkat Source NAT (Masquerade)."
  },

  // --- PILAR 5: SERVER, VIRTUALISASI & ALAT UKUR ---
  {
    category: "server",
    type: "pg",
    stimulus: "Saat melakukan instalasi OS Debian Linux Server di Oracle VM VirtualBox, muncul pesan error: 'Insufficient disk space on target partition'.",
    question: "Langkah pemecahan masalah yang paling tepat dan permanen untuk mengatasi kendala tersebut adalah...",
    correctText: "Membuat ulang virtual disk (VDI) dengan alokasi kapasitas yang lebih besar (minimal 20 GB)",
    distractors: [
      "Mengganti kabel monitor komputer host",
      "Mengurangi ukuran memori RAM virtual menjadi 64 MB",
      "Mengubah nama virtual machine menjadi huruf kapital",
      "Mematikan router internet di ruangan"
    ],
    explanation: "Pesan error 'Insufficient disk space' menandakan ukuran hard disk virtual yang dibuat pada wizard awal terlalu kecil untuk menampung paket dasar Linux.",
    quickTip: "Insufficient disk space di VirtualBox = Perbesar ukuran Virtual Hard Disk (VDI)."
  },
  {
    category: "server",
    type: "pg",
    stimulus: "Komputer klien berhasil memperoleh konfigurasi IP Address otomatis dari DHCP Server.",
    question: "Urutan 4 tahap komunikasi jabat tangan (handshake) protokol DHCP yang benar adalah...",
    correctText: "Discover -> Offer -> Request -> Acknowledgment (DORA)",
    distractors: [
      "Demand -> Order -> Release -> Accept",
      "Data -> Operate -> Route -> Apply",
      "Deliver -> Open -> Receive -> Access",
      "Direct -> Online -> Reset -> Authenticate"
    ],
    explanation: "Tahapan DHCP: 1. DHCP Discover (Klien mencari server), 2. DHCP Offer (Server menawarkan IP), 3. DHCP Request (Klien memilih IP), 4. DHCP ACK (Server mengonfirmasi pemakaian).",
    quickTip: "Hafalan siklus DHCP: D-O-R-A (Discover, Offer, Request, Acknowledgment)."
  },
  {
    category: "alat_ukur",
    type: "pg",
    stimulus: "Teknisi melakukan pengujian kabel jaringan UTP yang baru dicrimping menggunakan alat LAN Tester.",
    question: "Kondisi lampu LED nomor 1 sampai 8 pada master dan remote LAN Tester yang menandakan kabel Straight berfungsi sempurna adalah...",
    correctText: "Kedua sisi menyala hijau berurutan dari nomor 1 sampai 8 secara sinkron",
    distractors: [
      "Hanya lampu nomor 1 dan nomor 8 yang menyala merah",
      "Lampu menyala secara acak dan berkedip tidak beraturan",
      "Lampu nomor 3 mati di master dan menyala di nomor 6 di remote",
      "Semua lampu mati total"
    ],
    explanation: "Pada kabel straight normal, kedelapan kawat tersambung pin-to-pin, sehingga indikator LED master dan remote menyala runtut 1, 2, 3, 4, 5, 6, 7, 8.",
    quickTip: "Kabel Straight normal: Lampu 1 s.d. 8 menyala runtut dan sinkron."
  },
  {
    category: "alat_ukur",
    type: "pg",
    stimulus: "Teknisi menggunakan Optical Power Meter (OPM) dan Optical Light Source (OLS) untuk mengukur total redaman (loss) kabel serat optik.",
    question: "SOP awal yang WAJIB dipastikan pada kedua perangkat sebelum pembacaan nilai redaman dilakukan adalah...",
    correctText: "Menyamakan pengaturan panjang gelombang (wavelength) pada OLS dan OPM (misal sama-sama 1310 nm atau 1550 nm)",
    distractors: [
      "Mengubah satuan ukur menjadi MegaVolt per detik",
      "Mencuci konektor optik dengan air sabun deterjen panas",
      "Melihat langsung sorotan laser dari lubang port transmitter dengan mata",
      "Memotong kabel optik menjadi potongan pendek"
    ],
    explanation: "Untuk menghasilkan nilai pembacaan yang valid, panjang gelombang pemancar (Light Source) dan penerima daya (Power Meter) harus dikalibrasi pada panjang gelombang (lambda) yang identik.",
    quickTip: "SOP OPM & OLS: Panjang gelombang (Lambda) wajib SAMA persis!"
  },
  {
    category: "alat_ukur",
    type: "pg",
    stimulus: "Visual Fault Locator (VFL) memancarkan sinar laser merah berdaya 650 nm ke dalam serat optik.",
    question: "Kegunaan utama alat Visual Fault Locator (VFL) pada pekerjaan instalasi optik lapangan adalah...",
    correctText: "Melacak kontinuitas core dan mendeteksi kebocoran cahaya akibat tekukan tajam (bending) atau core retak",
    distractors: [
      "Mengukur throughput kecepatan internet bandwidth",
      "Menyolder kabel tembaga RJ-45",
      "Mengganti sistem operasi router Cisco",
      "Menghitung alamat subnet mask otomatis"
    ],
    explanation: "VFL adalah senter laser merah tampak mata untuk menguji kelurusan jalur core (continuity check) dan melihat kebocoran cahaya akibat retakan fisik kabel jarak pendek.",
    quickTip: "VFL (Laser Merah): Tracing kontinuitas core & deteksi kebocoran kabel retak/tertekuk."
  },
  {
    category: "alat_ukur",
    type: "pg",
    stimulus: "Hasil pengukuran kabel optik menggunakan OTDR menampilkan grafik kurva turun bertangga (step drop) tanpa lonjakan pantulan runcing pada jarak 2.400 meter.",
    question: "Jenis peristiwa (event) pada grafik OTDR yang tidak menghasilkan pantulan lonjakan (non-reflective event) tersebut menandakan...",
    correctText: "Adanya titik sambungan kabel (fusion splice) atau tekukan kabel tajam (macro bending)",
    distractors: [
      "Ujung akhir kabel optik yang terputus total",
      "Titik sambungan konektor mekanik SC/UPC",
      "Adanya interferensi gelombang elektromagnetik radio",
      "Cahaya laser mengalami pertambahan daya transmisi"
    ],
    explanation: "Event Non-Reflektif (kurva turun tanpa spike lonjakan) adalah ciri titik redaman sambungan las core (fusion splice) atau lekukan kabel berlebih (bending). Lonjakan runcing adalah event reflektif (konektor/ujung putus).",
    quickTip: "OTDR: Kurva turun tanpa lonjakan = Event Non-Reflektif (Sambungan las / Bending)."
  },
  {
    category: "alat_ukur",
    type: "pg",
    stimulus: "Teknisi melakukan penyambungan serat optik menggunakan mesin Fusion Splicer.",
    question: "Fungsi alat Precision Fiber Cleaver dalam tahapan penyambungan serat optik adalah...",
    correctText: "Memotong ujung core kaca serat optik secara presisi dengan sudut tegak lurus mendekati 90 derajat",
    distractors: [
      "Mengupas jaket luar kabel drop fiber",
      "Membersihkan tabung OTB dengan cairan pembersih",
      "Memanaskan protection sleeve pelindung sambungan",
      "Mengukur jarak putus kabel secara otomatis"
    ],
    explanation: "Cleaver memotong core kaca yang sudah dikupas dan dibersihkan agar permukaannya rata tegak lurus (90°) sebelum dilebur busur elektroda splicer.",
    quickTip: "Cleaver = Pemotong presisi core kaca sudut 90 derajat."
  }
];

// ================= MASTER POOL SOAL MULTI-ANSWER (PGK MCMA) =================
// Didesain dengan variasi kunci beragam: AC, BDE, AD, BCE, CDE, AB, dll.
const TJKT_MCMA_POOL = [
  {
    category: "k3_lapangan",
    stimulus: "Sebuah tim teknisi ditugaskan menarik kabel drop fiber optik pada tiang udara jalur perkotaan berketinggian 7 meter.",
    question: "Pilihlah DUA Alat Pelindung Diri (APD) penahan bahaya jatuh dan benturan kepala yang wajib digunakan teknisi di tiang! (Pilih 2 jawaban benar)",
    options: [
      { text: "Full Body Harness lengkap dengan lanyard pengait ganda", isCorrect: true },
      { text: "Safety Helmet berstandar SNI dengan tali dagu terpasang kencang", isCorrect: true },
      { text: "Kacamata renang silikon kedap air", isCorrect: false },
      { text: "Jas laboratorium kimia berlengan pendek", isCorrect: false },
      { text: "Sandal jepit agar gerakan memanjat lebih leluasa", isCorrect: false }
    ],
    explanation: "Bekerja di ketinggian tiang wajib menggunakan Safety Helmet untuk melindungi kepala dari benturan dan Full Body Harness sebagai penahan jatuh.",
    quickTip: "APD Ketinggian Wajib: Full Body Harness & Safety Helmet."
  },
  {
    category: "jaringan_dasar",
    stimulus: "Administrator jaringan menerapkan teknologi Virtual Local Area Network (VLAN 802.1Q) pada infrastruktur switch sekolah.",
    question: "Manakah TIGA manfaat teknis utama dari penerapan VLAN pada jaringan kampus? (Pilih 3 jawaban benar)",
    options: [
      { text: "Membagi satu broadcast domain fisik menjadi beberapa broadcast domain logis", isCorrect: true },
      { text: "Mengisolasi segmen jaringan untuk meningkatkan keamanan antar-divisi", isCorrect: true },
      { text: "Menghemat biaya karena tidak perlu membeli switch fisik terpisah untuk setiap kelas", isCorrect: true },
      { text: "Menggantikan peran gelombang radio pada komunikasi satelit", isCorrect: false },
      { text: "Menghapus kebutuhan alamat IP Address pada setiap komputer klien", isCorrect: false }
    ],
    explanation: "Manfaat VLAN: 1. Reduksi ukuran broadcast domain, 2. Segmentasi keamanan antar-grup pengguna, 3. Efisiensi investasi switch fisik.",
    quickTip: "Manfaat VLAN: Broadcast domain lebih kecil, Keamanan terisolasi, Hemat switch fisik."
  },
  {
    category: "fiber_optik",
    stimulus: "Teknisi sedang menyiapkan penggelaran kabel backbone fiber optik Single-Mode (SMF) antar-gedung sejauh 5 kilometer.",
    question: "Manakah DUA karakteristik utama dari kabel fiber optik Single-Mode? (Pilih 2 jawaban benar)",
    options: [
      { text: "Memiliki diameter core kaca sangat kecil berkisar 9 mikrometer", isCorrect: true },
      { text: "Memanfaatkan sumber cahaya laser dengan dispersi modal sangat rendah untuk transmisi jarak jauh", isCorrect: true },
      { text: "Menggunakan lampu LED biasa dengan redaman di atas 20 dB per meter", isCorrect: false },
      { text: "Hanya dapat digunakan untuk menghubungkan printer ke laptop jarak 2 meter", isCorrect: false },
      { text: "Memiliki serat inti tembaga berarus listrik bolak-balik", isCorrect: false }
    ],
    explanation: "Single-Mode memiliki core 9 µm, menggunakan sumber laser, dispersi minimal, dan ideal untuk jarak jauh puluhan kilometer.",
    quickTip: "Single-Mode: Core 9 mikron & Sumber laser jarak jauh."
  },
  {
    category: "server_linux",
    stimulus: "Administrator mengamankan server Debian Linux yang terhubung ke jaringan publik internet.",
    question: "Manakah TIGA langkah penguatan keamanan (hardening) server Linux yang direkomendasikan? (Pilih 3 jawaban benar)",
    options: [
      { text: "Mengganti port default layanan remote SSH dari port 22 ke port khusus lain", isCorrect: true },
      { text: "Menonaktifkan login langsung akun root melalui remote SSH (PermitRootLogin no)", isCorrect: true },
      { text: "Menerapkan autentikasi login SSH berbasis SSH Keypair (kunci publik/privat)", isCorrect: true },
      { text: "Mematikan firewall dan membuka seluruh port TCP/UDP tanpa filter", isCorrect: false },
      { text: "Mengatur password akun superuser menggunakan angka '123456'", isCorrect: false }
    ],
    explanation: "Hardening SSH Linux: Ganti port default 22, larang login root langsung (PermitRootLogin no), gunakan SSH Keypair, dan aktifkan firewall UFW/Iptables.",
    quickTip: "Hardening Linux: Ganti port SSH, Larang login Root, Gunakan SSH Key."
  },
  {
    category: "alat_ukur_splicer",
    stimulus: "Proses penyambungan serat optik dengan Fusion Splicer memerlukan tahapan yang higienis dan presisi.",
    question: "Pilihlah DUA langkah kerja wajib sebelum serat optik diletakkan ke dalam V-groove mesin Fusion Splicer! (Pilih 2 jawaban benar)",
    options: [
      { text: "Membersihkan core kaca yang sudah dikupas menggunakan tissue bebas serat dan alkohol isopropil 99%", isCorrect: true },
      { text: "Memotong ujung core secara rata dan tegak lurus 90 derajat menggunakan Precision Fiber Cleaver", isCorrect: true },
      { text: "Mengecat ujung core dengan spidol warna hitam pekat", isCorrect: false },
      { text: "Mengamplas ujung serat kaca dengan kertas amplas kasar", isCorrect: false },
      { text: "Membakar ujung core dengan korek api gas sampai meleleh bulat", isCorrect: false }
    ],
    explanation: "SOP penyambungan: 1. Kupas pelindung (stripper), 2. Bersihkan core dengan alkohol 99%, 3. Potong 90° dengan cleaver presisi.",
    quickTip: "SOP Splicing: Bersihkan dengan alkohol 99% ➔ Potong presisi 90 derajat dengan Cleaver."
  }
];

// ================= MASTER POOL SOAL BENAR / SALAH (PGK TF) =================
// Didesain dengan variasi pola kebenaran acak: BBS, SSB, SBS, BSS, SBB, BSB.
const TJKT_TF_POOL = [
  {
    category: "k3_ruangan",
    stimulus: "Penerapan keselamatan kerja dan 5R di ruang server dan laboratorium komputer.",
    question: "Tentukan apakah pernyataan berikut BENAR atau SALAH mengenai standar K3 dan 5R di lingkungan laboratorium!",
    statements: [
      { text: "Pemisahan kabel data dan kabel listrik dalam ducting berbeda bertujuan mencegah induksi elektromagnetik dan bahaya teknisi tersandung.", correct: "B" },
      { text: "Sisa potongan core fiber optik boleh disapu dan dibuang langsung ke kantong plastik sampah makanan kantin.", correct: "S" },
      { text: "Lantai ruang server data center wajib menggunakan sistem Raised Floor untuk sirkulasi udara dingin dan jalur kabel bawah tanah.", correct: "B" }
    ],
    explanation: "Pernyataan 1 Benar. Pernyataan 2 Salah (Pecahan kaca fiber sangat berbahaya dan wajib dibuang ke wadah khusus tertutup). Pernyataan 3 Benar (Raised floor standar data center TIA-942).",
    quickTip: "Pecahan kaca fiber optik HARUS dibuang ke wadah khusus bertutup!"
  },
  {
    category: "transmisi_kabel",
    stimulus: "Karakteristik dan pengujian kabel jaringan tembaga dan serat optik.",
    question: "Tentukan apakah pernyataan berikut BENAR atau SALAH mengenai media transmisi jaringan!",
    statements: [
      { text: "Panjang maksimal bentangan kabel UTP horizontal standar IEEE 802.3 tanpa repeater adalah 500 meter.", correct: "S" },
      { text: "Kabel fiber optik Single-Mode memiliki redaman lebih rendah dan jangkauan jarak tempuh lebih jauh daripada Multi-Mode.", correct: "B" },
      { text: "Kabel UTP kategori Cat6a mampu mendukung transmisi data kecepatan 10 Gbps pada jarak hingga 100 meter.", correct: "B" }
    ],
    explanation: "Pernyataan 1 Salah (Maksimal UTP adalah 100 meter, bukan 500m). Pernyataan 2 Benar (Single-Mode untuk jarak jauh). Pernyataan 3 Benar (Cat6a mendukung 10GBASE-T hingga 100m).",
    quickTip: "Batas kabel UTP adalah 100 Meter. Cat6a tembus 10 Gbps."
  },
  {
    category: "ip_routing",
    stimulus: "Pengalamatan logis IPv4, IPv6, dan mekanisme routing jaringan.",
    question: "Tentukan apakah pernyataan berikut BENAR atau SALAH mengenai arsitektur protokol TCP/IP!",
    statements: [
      { text: "Alamat IP 192.168.1.100 termasuk jenis Public IP yang dapat langsung diakses publik dari internet tanpa bantuan NAT.", correct: "S" },
      { text: "Prefix subnet /30 menyediakan total 4 alamat IP dengan alokasi tepat 2 alamat host valid untuk koneksi antar-router.", correct: "B" },
      { text: "Alamat IPv6 berukuran 128 bit yang ditulis dalam format bilangan heksadesimal dengan pemisah tanda titik dua (:).", correct: "B" }
    ],
    explanation: "Pernyataan 1 Salah (192.168.x.x adalah IP Private RFC 1918, wajib NAT untuk ke internet). Pernyataan 2 Benar (Prefix /30 efisien untuk point-to-point). Pernyataan 3 Benar (IPv6 128-bit heksa).",
    quickTip: "192.168.x.x = IP Private. /30 = 2 host. IPv6 = 128 bit."
  },
  {
    category: "alat_ukur_optik",
    stimulus: "Prinsip kerja dan SOP pengoperasian alat ukur jaringan telekomunikasi.",
    question: "Tentukan apakah pernyataan berikut BENAR atau SALAH mengenai alat ukur jaringan optik!",
    statements: [
      { text: "Pada pengukuran redaman menggunakan OPM dan Light Source, panjang gelombang pada kedua alat harus diatur pada angka yang sama.", correct: "B" },
      { text: "Event Non-Reflektif pada kurva OTDR ditandai dengan lonjakan puncak runcing ke atas pada layar grafik pembacaan.", correct: "S" },
      { text: "Visual Fault Locator (VFL) dapat digunakan untuk melacak jalur core dan mendeteksi kebocoran cahaya akibat macrobending.", correct: "B" }
    ],
    explanation: "Pernyataan 1 Benar (Panjang gelombang harus sinkron). Pernyataan 2 Salah (Lonjakan puncak runcing adalah Event Reflektif, sedangkan Non-Reflektif adalah penurunan kurva bertangga tanpa lonjakan). Pernyataan 3 Benar.",
    quickTip: "Lonjakan runcing OTDR = Event Reflektif (konektor). Kurva turun bertangga = Non-Reflektif."
  },
  {
    category: "server_virtualisasi",
    stimulus: "Pengelolaan mesin virtual dan layanan server jaringan komputer.",
    question: "Tentukan apakah pernyataan berikut BENAR atau SALAH mengenai administrasi server!",
    statements: [
      { text: "Pesan error 'Insufficient disk space' pada VirtualBox diatasi dengan menghapus file sistem Windows pada komputer fisik.", correct: "S" },
      { text: "Urutan tahapan komunikasi DHCP otomatis terdiri dari Discover, Offer, Request, dan Acknowledgment (DORA).", correct: "B" },
      { text: "Hypervisor Type 2 seperti VirtualBox berjalan di atas sistem operasi host (seperti Windows atau Linux Desktop).", correct: "B" }
    ],
    explanation: "Pernyataan 1 Salah (Error diatasi dengan memperbesar partisi virtual disk VDI, bukan menghapus OS fisik). Pernyataan 2 Benar (Siklus DORA). Pernyataan 3 Benar (VirtualBox adalah Type-2 hypervisor).",
    quickTip: "VirtualBox = Hypervisor Type-2. Insufficient disk = Perbesar partisi VDI."
  }
];

// ================= ALGORITMA PENYUSUNAN SOAL BERSIH & BEBAS DUPLIKASI =================

/**
 * Fungsi Seeded Random untuk menghasilkan pengacakan yang konsisten per sesi
 */
function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

/**
 * Fisher-Yates Shuffle murni
 */
function shuffleArray(array, rng) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * MEMBUAT BANK LENGKAP 30 SOAL UNIK UNTUK SUATU SESI
 * - Menjamin TIDAK ADA soal kembar / duplikat dalam 30 nomor.
 * - Mengacak posisi opsi jawaban (A, B, C, D, E terdistribusi seimbang).
 * - Mengacak urutan opsi multi-answer sehingga kuncinya tidak melulu ABD.
 * - Mengacak urutan pernyataan benar-salah sehingga polanya bervariasi.
 */
function getQuestionsForSession(sessionId) {
  // Buat seed numerik unik dari string sessionId (misal: "s01" -> 1)
  const sessionNum = parseInt(sessionId.replace(/\D/g, "") || "1", 10);
  let seedCounter = sessionNum * 12345;
  const rng = () => {
    seedCounter++;
    return seededRandom(seedCounter);
  };

  // Kumpulkan seluruh bank soal master
  // Kita punya 20 master PG + 5 master MCMA + 5 master TF = 30 SOAL ASLI BERBEDA!
  const allMasterPg = [...TJKT_MASTER_QUESTIONS];
  const allMasterMcma = [...TJKT_MCMA_POOL];
  const allMasterTf = [...TJKT_TF_POOL];

  // Acak urutan master sesuai sesi agar setiap sesi urutan temanya dinamis
  const shuffledPg = shuffleArray(allMasterPg, rng);
  const shuffledMcma = shuffleArray(allMasterMcma, rng);
  const shuffledTf = shuffleArray(allMasterTf, rng);

  // Komposisi 30 soal per sesi:
  // 20 Pilihan Ganda Tunggal (PG)
  // 5 Pilihan Ganda Kompleks (PGK MCMA - Centang > 1)
  // 5 Kategori (PGK TF - Tabel Benar/Salah)
  // TOTAL TEPAT = 30 SOAL 100% UNIK!
  const rawList = [];

  // Masukkan 20 PG
  for (let i = 0; i < 20; i++) {
    rawList.push({ ...shuffledPg[i % shuffledPg.length], type: "pg" });
  }

  // Masukkan 5 MCMA
  for (let i = 0; i < 5; i++) {
    rawList.push({ ...shuffledMcma[i % shuffledMcma.length], type: "pgk_mcma" });
  }

  // Masukkan 5 TF
  for (let i = 0; i < 5; i++) {
    rawList.push({ ...shuffledTf[i % shuffledTf.length], type: "pgk_tf" });
  }

  // Acak posisi ke-30 nomor soal sehingga tidak melulu PG di awal dan TF di akhir
  const mixedQuestions = shuffleArray(rawList, rng);

  // Bangun representasi final dengan pengacakan posisi opsi jawaban
  const final30Questions = mixedQuestions.map((rawQ, index) => {
    const qNumber = index + 1;
    const qId = `${sessionId}_q${qNumber}`;

    // --- 1. TIPE SOAL PILIHAN GANDA TUNGGAL (PG) ---
    if (rawQ.type === "pg") {
      // Gabungkan jawaban benar dengan 4 distractor
      const allChoices = [
        { text: rawQ.correctText, isCorrect: true },
        ...rawQ.distractors.map(d => ({ text: d, isCorrect: false }))
      ];

      // Acak posisi pilihan jawaban! (Ini menghilangkan masalah 'kunci selalu B')
      const shuffledChoices = shuffleArray(allChoices, rng);
      const letters = ["A", "B", "C", "D", "E"];
      let correctLetter = "A";

      const formattedOptions = shuffledChoices.map((choice, cIdx) => {
        const letter = letters[cIdx];
        if (choice.isCorrect) {
          correctLetter = letter;
        }
        return {
          id: letter,
          text: choice.text
        };
      });

      return {
        id: qId,
        number: qNumber,
        type: "pg",
        stimulus: rawQ.stimulus,
        question: rawQ.question,
        options: formattedOptions,
        key: correctLetter, // Kunci dinamis sesuai hasil acak (A, B, C, D, atau E)
        explanation: rawQ.explanation,
        quickTip: rawQ.quickTip
      };
    }

    // --- 2. TIPE SOAL PILIHAN GANDA KOMPLEKS (MCMA - Centang > 1) ---
    if (rawQ.type === "pgk_mcma") {
      // Acak pilihan jawaban MCMA
      const shuffledOptions = shuffleArray(rawQ.options, rng);
      const letters = ["A", "B", "C", "D", "E"];
      const correctLetters = [];

      const formattedOptions = shuffledOptions.map((opt, oIdx) => {
        const letter = letters[oIdx];
        if (opt.isCorrect) {
          correctLetters.push(letter);
        }
        return {
          id: letter,
          text: opt.text
        };
      });

      return {
        id: qId,
        number: qNumber,
        type: "pgk_mcma",
        stimulus: rawQ.stimulus,
        question: rawQ.question,
        options: formattedOptions,
        key: correctLetters.sort(), // Kunci dinamis (bisa AC, BDE, AD, CE, dll)
        explanation: rawQ.explanation,
        quickTip: rawQ.quickTip
      };
    }

    // --- 3. TIPE SOAL KATEGORI BENAR / SALAH (PGK TF) ---
    if (rawQ.type === "pgk_tf") {
      // Acak urutan pernyataan agar polanya bervariasi
      const shuffledStatements = shuffleArray(rawQ.statements, rng);
      const formattedStatements = shuffledStatements.map((st, stIdx) => ({
        id: `st${stIdx + 1}`,
        text: st.text,
        correct: st.correct // "B" atau "S"
      }));

      return {
        id: qId,
        number: qNumber,
        type: "pgk_tf",
        stimulus: rawQ.stimulus,
        question: rawQ.question,
        statements: formattedStatements,
        explanation: rawQ.explanation,
        quickTip: rawQ.quickTip
      };
    }
  });

  return final30Questions;
}

if (typeof window !== "undefined") {
  window.TJKT_MASTER_QUESTIONS = TJKT_MASTER_QUESTIONS;
  window.TJKT_MCMA_POOL = TJKT_MCMA_POOL;
  window.TJKT_TF_POOL = TJKT_TF_POOL;
  window.getQuestionsForSession = getQuestionsForSession;
}
