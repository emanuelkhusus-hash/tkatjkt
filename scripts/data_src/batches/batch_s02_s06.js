// scripts/data_src/batches/batch_s02_s06.js
// Kumpulan Dataset Sesi 2 sampai Sesi 6 (Total 5 Sesi x 30 Soal = 150 Soal Unik)
// Elemen 1 (Proses Bisnis & 5R) & Elemen 2 (K3LH Umum & Ketinggian) + Mini Boss 1

const batch = {};

// ==================== SESI 2 (s02): Alur Kerja, Proses Bisnis ISP & Perkembangan Industri ====================
batch["s02"] = {
  sessionId: "s02",
  pg: [
    {
      stimulus: "Penyedia Jasa Internet (ISP) menjanjikan Service Level Agreement (SLA) jaringan sebesar 99,9% dalam 1 bulan kalender (30 hari = 43.200 menit).",
      question: "Berapa lama batas waktu toleransi akumulasi gangguan (downtime) maksimal yang diperbolehkan dalam sebulan tersebut?",
      correctText: "Maksimal sekitar 43,2 menit",
      distractors: ["Maksimal 24 jam penuh", "Maksimal 7 hari kalender", "Maksimal 120 detik saja", "Maksimal 10 jam kerja"],
      explanation: "Toleransi downtime 0,1% = 0,001 x 43.200 menit = 43,2 menit per bulan.",
      quickTip: "SLA 99,9% = downtime maksimal ~43,2 menit dalam 30 hari."
    },
    {
      stimulus: "Tahapan penggelaran proyek jaringan diawali dengan survei lapangan, perhitungan link budget, dan penentuan rute kabel optik sebelum dilakukan penarikan fisik.",
      question: "Tahapan krusial pra-konstruksi tersebut dalam siklus proyek telekomunikasi dinamakan...",
      correctText: "Tahap Perencanaan (Planning & Site Survey)",
      distractors: ["Tahap Decommissioning", "Tahap Penagihan Invoice", "Tahap Pemusnahan Aset", "Tahap Audit Pajak"],
      explanation: "Tahap Perencanaan mencakup survei lapangan, feasibility study, dan desain teknis sebelum pengerjaan konstruksi.",
      quickTip: "Survei & perhitungan teknis sebelum pasang kabel = Tahap Perencanaan."
    },
    {
      stimulus: "Setelah teknisi selesai menggelar kabel fiber optik, dilakukan pengukuran redaman dan penyerahan dokumentasi rute fisik aktual kepada perusahaan.",
      question: "Dokumen gambar teknis yang memuat jalur kabel aktual hasil pemasangan di lapangan disebut...",
      correctText: "As-Built Drawing (Gambar Rekaman Akhir)",
      distractors: ["Brosur Penawaran Sales", "Kuitansi Pembelian BBM", "Katalog Produk Toko", "Surat Izin Mengemudi"],
      explanation: "As-Built Drawing adalah gambar rekaman teknis aktual yang mencerminkan instalasi nyata di lapangan sebagai dasar pemeliharaan.",
      quickTip: "Gambar teknis rute aktual pasca-pemasangan = As-Built Drawing."
    },
    {
      stimulus: "Dalam metriks evaluasi pemeliharaan jaringan, waktu rata-rata yang dibutuhkan tim teknisi untuk memulihkan sistem yang rusak kembali normal diukur dengan sebuah indikator standar.",
      question: "Indikator kinerja waktu pemulihan gangguan tersebut dikenal dengan istilah...",
      correctText: "Mean Time to Repair (MTTR)",
      distractors: ["Mean Time Between Failures (MTBF)", "Return on Investment (ROI)", "Gross Domestic Product (GDP)", "Net Present Value (NPV)"],
      explanation: "MTTR (Mean Time to Repair) mengukur rata-rata waktu yang dibutuhkan untuk memperbaiki dan memulihkan sistem dari gangguan.",
      quickTip: "Rata-rata waktu perbaikan sistem = MTTR."
    },
    {
      stimulus: "Evolusi teknologi seluler telah melompat dari 3G (WCDMA), 4G (LTE), hingga generasi kelima (5G NR).",
      question: "Karakteristik keunggulan utama teknologi 5G dibandingkan 4G adalah...",
      correctText: "Latensi amat rendah (ultra-low latency ~1ms) dan throughput data gigabit per detik",
      distractors: ["Menggunakan kabel tembaga analog", "Hanya bisa mentransfer pesan teks SMS", "Memerlukan antena pemancar sebesar lapangan bola", "Jarak jangkau satu antena mencapai seluruh benua"],
      explanation: "5G menawarkan tiga pilar utama: eMBB (throughput tinggi), URLLC (ultra-low latency <1ms), dan mMTC (konektivitas IoT masif).",
      quickTip: "Keunggulan 5G: Ultra-low latency (~1ms) & throughput gigabit."
    },
    {
      stimulus: "Untuk mengatasi keterbatasan alokasi alamat IPv4 yang telah habis di tingkat global, dunia industri mempercepat migrasi pengalamatan jaringan.",
      question: "Standar protokol pengalamatan internet modern yang memiliki panjang 128-bit dan ruang alamat hampir tak terbatas adalah...",
      correctText: "IPv6 (Internet Protocol Version 6)",
      distractors: ["IPv4 Class D", "IPX/SPX Novell", "NetBEUI Microsoft", "AppleTalk Phase 2"],
      explanation: "IPv6 menyediakan ruang alamat 128-bit heksadesimal yang mampu menampung miliaran perangkat internet modern.",
      quickTip: "Protokol 128-bit pengganti keterbatasan IPv4 = IPv6."
    },
    {
      stimulus: "Jaringan telekomunikasi modern memanfaatkan konsep pemisahan antara bidang kendali (Control Plane) dan bidang penerusan data (Data Plane) menggunakan perangkat lunak terpusat.",
      question: "Paradigma arsitektur jaringan berbasis perangkat lunak tersebut dikenal sebagai...",
      correctText: "Software-Defined Networking (SDN)",
      distractors: ["Dial-Up Networking", "Manual Hub Switching", "Coaxial Bus Architecture", "Token Ring Topology"],
      explanation: "SDN memisahkan control plane dan data plane serta memungkinkan manajemen jaringan terprogram secara terpusat.",
      quickTip: "Pemisahan control plane & data plane terpusat = SDN."
    },
    {
      stimulus: "Perangkat sensor suhu, kamera pintar, dan aktuator di rumah dapat saling terhubung ke internet dan mengirimkan data secara otomatis tanpa intervensi manusia.",
      question: "Konsep ekosistem perangkat pintar yang saling bertukar data melalui jaringan internet tersebut dinamakan...",
      correctText: "Internet of Things (IoT)",
      distractors: ["Radio Antar Penduduk", "Paging System Konvensional", "Mesin Fax Kantor", "Telegraf Sandi Morse"],
      explanation: "Internet of Things (IoT) menghubungkan berbagai objek fisik berbasis sensor ke internet untuk pengumpulan dan otomasi data.",
      quickTip: "Perangkat fisik berinterkoneksi mengirim data mandiri = Internet of Things (IoT)."
    },
    {
      stimulus: "Perusahaan menyewa infrastruktur komputasi berupa virtual machine, penyimpanan, dan jaringan dari penyedia seperti AWS atau Google Cloud tanpa membeli server fisik sendiri.",
      question: "Model layanan cloud computing yang menyediakan komponen infrastruktur dasar tersebut adalah...",
      correctText: "Infrastructure as a Service (IaaS)",
      distractors: ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Desktop as a Service (DaaS)", "Network as a Cable (NaaC)"],
      explanation: "IaaS menyediakan sumber daya komputasi mendasar seperti server virtual, network, dan storage yang dapat dikonfigurasi penyewa.",
      quickTip: "Sewa infrastruktur server virtual & jaringan = IaaS."
    },
    {
      stimulus: "Dalam prinsip keamanan siber kontemporer, sistem tidak boleh secara otomatis mempercayai siapapun di dalam maupun di luar jaringan sebelum dilakukan verifikasi ketat.",
      question: "Prinsip arsitektur keamanan siber yang menerapkan kaidah 'never trust, always verify' disebut...",
      correctText: "Zero Trust Architecture",
      distractors: ["Open Door Policy", "Free For All Network", "Blind Faith Security", "Static Perimeter Only"],
      explanation: "Zero Trust mewajibkan verifikasi identitas dan hak akses secara terus-menerus tanpa mengasumsikan zona aman.",
      quickTip: "'Never trust, always verify' = Zero Trust Architecture."
    },
    {
      stimulus: "Proses bisnis penyedia jasa internet diatur oleh peraturan pemerintah Republik Indonesia mengenai perlindungan data pribadi pengguna.",
      question: "Undang-Undang di Indonesia yang secara resmi mengatur perlindungan data pribadi dan privasi digital pelanggan adalah...",
      correctText: "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)",
      distractors: ["UU Lalu Lintas Jalan Raya", "UU Hak Cipta Musik Tradisional", "UU Kepabeanan Barang Impor", "UU Pertambangan Batu Bara"],
      explanation: "UU PDP No. 27/2022 menjadi landasan hukum perlindungan hak privasi dan pengolahan data konsumen di Indonesia.",
      quickTip: "Regulasi pelindungan data pribadi di Indonesia = UU PDP (No. 27/2022)."
    },
    {
      stimulus: "Ketika ada laporan gangguan dari pelanggan bisnis (Corporate Client), sistem penanganan tiket di ISP mencatat status 'Open', 'In Progress', 'Resolved', hingga 'Closed'.",
      question: "Aktivitas meneruskan tiket ke level pimpinan atau tim spesialis jika waktu penanganan melampaui batas toleransi disebut...",
      correctText: "Eskalasi Tiket (Ticket Escalation)",
      distractors: ["Penghapusan Tiket Permanen", "Pengabaian Keluhan Klien", "Pemblokiran Nomor Pelanggan", "Penundaan Pekerjaan Otomatis"],
      explanation: "Eskalasi tiket dilakukan untuk melibatkan personel yang lebih berkompeten jika penanganan melebihi batas waktu (SLA threshold).",
      quickTip: "Penerusan tiket gangguan ke level lebih tinggi = Eskalasi Tiket."
    },
    {
      stimulus: "Untuk menghubungkan lokasi terpencil dengan pemrosesan latensi rendah, data diproses dekat dengan sumber perangkat bukan dikirim ke cloud terpusat di benua lain.",
      question: "Model komputasi terdistribusi yang memproses data di dekat tepi jaringan tersebut dinamakan...",
      correctText: "Edge Computing",
      distractors: ["Centralized Mainframe 1970", "Floppy Disk Sharing", "Batch Punch Card", "Single Core Computing"],
      explanation: "Edge Computing memproses daya komputasi di dekat sumber data (tepi jaringan) guna mengurangi latensi dan menghemat bandwidth.",
      quickTip: "Komputasi di dekat sumber data lokal = Edge Computing."
    },
    {
      stimulus: "Penyedia layanan internet membeli kapasitas bandwidth internasional dari operator tier-1 untuk disalurkan kembali kepada pelanggan retail.",
      question: "Koneksi interkoneksi bandwidth internet skala besar antar-operator penyedia jasa jaringan tersebut disebut...",
      correctText: "IP Transit & Peering",
      distractors: ["Voucher Wi-Fi Warnet", "Tethering Ponsel Pribadi", "Bluetooth File Sharing", "Kabel Audio Aux"],
      explanation: "IP Transit dan Peering adalah mekanisme interkoneksi lalu lintas internet antar-penyedia layanan jaringan di Internet Exchange Point (IXP).",
      quickTip: "Interkoneksi bandwidth antar-operator ISP = IP Transit & Peering."
    },
    {
      stimulus: "Sebuah perusahaan ISP ingin mengukur kepuasan pelanggan terhadap kualitas layanan teknisi pasang baru yang datang ke rumah mereka.",
      question: "Metrik survei standar industri untuk mengukur kepuasan pelanggan secara kuantitatif adalah...",
      correctText: "Customer Satisfaction Score (CSAT) / Net Promoter Score (NPS)",
      distractors: ["Ketinggian Tiang Listrik", "Berat Kabel Tembaga", "Kecepatan Putaran Harddisk", "Voltase Arus Petir"],
      explanation: "CSAT dan NPS adalah metrik baku bisnis untuk menilai kepuasan dan loyalitas pelanggan terhadap kualitas layanan.",
      quickTip: "Metrik kepuasan pelanggan = CSAT / NPS."
    },
    {
      stimulus: "Pemasangan kabel serat optik bawah tanah di kawasan jalan perkotaan wajib mengantongi izin pemanfaatan ruang milik jalan dari dinas terkait.",
      question: "Perizinan pemanfaatan jalur publik jalan untuk infrastruktur utilitas telekomunikasi dikenal sebagai izin...",
      correctText: "Right of Way (RoW) / Izin Pemanfaatan Jalur Jalan",
      distractors: ["Izin Trayek Bus Kota", "Izin Usaha Restoran Cepat Saji", "Surat Izin Menembak", "Sertifikat Tanah Pertanian"],
      explanation: "Right of Way (RoW) adalah hak dan izin hukum penggunaan lahan publik/jalur jalan untuk menempatkan kabel dan utilitas.",
      quickTip: "Izin penempatan kabel di ruang milik jalan = Right of Way (RoW)."
    },
    {
      stimulus: "Perangkat jaringan generasi lama masih menggunakan enkripsi transmisi data berbasis teks terbuka (cleartext).",
      question: "Protokol manajemen jarak jauh yang telah ditinggalkan karena tidak aman dan digantikan oleh SSH (Secure Shell) adalah...",
      correctText: "Telnet (Port 23)",
      distractors: ["HTTPS (Port 443)", "SFTP (Port 22)", "SNMPv3", "IPsec"],
      explanation: "Telnet mengirimkan password dan data dalam format teks mentah tanpa enkripsi sehingga sangat rentan terhadap sniffing.",
      quickTip: "Remote teks tanpa enkripsi yang digantikan SSH = Telnet."
    },
    {
      stimulus: "Di era jaringan terkonvergensi, suara panggilan telepon dialirkan melalui paket protokol internet menggantikan kabel tembaga PSTN konvensional.",
      question: "Teknologi transmisi suara berbasis paket IP tersebut dikenal dengan...",
      correctText: "Voice over IP (VoIP)",
      distractors: ["Short Message Service (SMS)", "Morse Code Audio", "Gramophone Recording", "AM Radio Broadcast"],
      explanation: "VoIP (Voice over IP) mentransmisikan sinyal suara digital dalam bentuk paket data IP melalui jaringan internet.",
      quickTip: "Panggilan suara lewat jaringan internet = VoIP."
    },
    {
      stimulus: "Untuk menjamin kelangsungan bisnis (Business Continuity) saat terjadi bencana gempa di data center utama, perusahaan menyiapkan fasilitas replikasi sekunder.",
      question: "Pusat data cadangan yang siap mengambil alih operasional jika pusat data utama lumpuh disebut...",
      correctText: "Disaster Recovery Center (DRC)",
      distractors: ["Pusat Kebugaran Karyawan", "Kantin Bersama Lantai 1", "Tempat Parkir Bawah Tanah", "Gudang Kardus Bekas"],
      explanation: "DRC (Disaster Recovery Center) adalah fasilitas pusat data sekunder untuk menjamin kelangsungan operasional sistem saat bencana.",
      quickTip: "Pusat data cadangan pemulihan bencana = DRC (Disaster Recovery Center)."
    },
    {
      stimulus: "Sebuah aplikasi layanan video streaming membutuhkan latensi yang stabil dan jitter rendah agar gambar tidak terputus-putus saat ditonton pengguna.",
      question: "Mekanisme pengelolaan prioritas lalu lintas paket data pada router/switch untuk menjamin performa layanan kritis disebut...",
      correctText: "Quality of Service (QoS)",
      distractors: ["Address Resolution Protocol (ARP)", "Domain Name System (DNS)", "Dynamic Host Configuration (DHCP)", "Network Time Protocol (NTP)"],
      explanation: "QoS (Quality of Service) mengatur alokasi bandwidth, antrean paket, dan prioritas trafik sensitif waktu (video/voice).",
      quickTip: "Mekanisme prioritas lalu lintas bandwidth = Quality of Service (QoS)."
    }
  ],
  mcma: [
    {
      stimulus: "Dalam siklus manajemen layanan telekomunikasi, perjanjian tingkat layanan (SLA) mencakup beberapa parameter kuantitatif performa jaringan.",
      question: "Manakah parameter teknis di bawah ini yang umumnya diukur dalam kontrak SLA penyedia layanan internet? (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Tingkat ketersediaan jaringan (Network Availability %)", isCorrect: true },
        { text: "Batas maksimal latensi (Round Trip Delay / RTT)", isCorrect: true },
        { text: "Toleransi tingkat paket hilang (Packet Loss %)", isCorrect: true },
        { text: "Warna casing luar router pelanggan", isCorrect: false },
        { text: "Merk sepatu yang dipakai direktur ISP", isCorrect: false }
      ],
      explanation: "Parameter SLA standar meliputi Availability (%), Latency (ms), Jitter, dan Packet Loss (%).",
      quickTip: "Parameter SLA: Availability, Latency, dan Packet Loss."
    },
    {
      stimulus: "Teknologi jaringan nirkabel seluler terus berevolusi untuk mendukung kebutuhan interkoneksi data kecepatan tinggi.",
      question: "Manakah fitur utama yang diperkenalkan dalam standar jaringan 5G dibandingkan generasi sebelumnya? (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Enhanced Mobile Broadband (eMBB) untuk kecepatan data multi-gigabit", isCorrect: true },
        { text: "Ultra-Reliable Low-Latency Communication (URLLC) untuk respon instan", isCorrect: true },
        { text: "Massive Machine Type Communication (mMTC) untuk jutaan sensor IoT", isCorrect: true },
        { text: "Wajib menggunakan kabel koaksial analog tebal ke ponsel", isCorrect: false },
        { text: "Hanya mendukung komunikasi teks hitam putih", isCorrect: false }
      ],
      explanation: "Tiga pilar resmi 5G adalah eMBB, URLLC, dan mMTC.",
      quickTip: "Tiga pilar 5G: eMBB, URLLC, dan mMTC."
    },
    {
      stimulus: "Penyusunan dokumen teknis As-Built Drawing dilakukan setelah instalasi selesai untuk keperluan audit dan pemeliharaan.",
      question: "Komponen informasi penting yang wajib dicantumkan dalam dokumen As-Built Drawing penggelaran fiber optik meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Peta rute riil bentangan kabel dan titik koordinat tiang/manhole", isCorrect: true },
        { text: "Posisi penempatan ODC, ODP, dan kapasitas core yang digunakan", isCorrect: true },
        { text: "Hasil pengukuran redaman aktual (dB) tiap titik sambungan", isCorrect: true },
        { text: "Daftar menu makanan favorit teknisi selama proyek", isCorrect: false },
        { text: "Koleksi foto selfie pribadi tanpa kaitan teknis", isCorrect: false }
      ],
      explanation: "As-Built Drawing memuat rute kabel aktual, posisi ODC/ODP, alokasi core, dan data redaman terukur.",
      quickTip: "Isi As-Built Drawing: Rute aktual, posisi ODC/ODP, dan redaman terukur."
    },
    {
      stimulus: "Sistem komputasi awan (Cloud Computing) menawarkan berbagai model penyampaian layanan sesuai kebutuhan arsitektur bisnis.",
      question: "Manakah yang merupakan model layanan resmi komputasi awan (Cloud Computing)? (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Infrastructure as a Service (IaaS)", isCorrect: true },
        { text: "Platform as a Service (PaaS)", isCorrect: true },
        { text: "Software as a Service (SaaS)", isCorrect: true },
        { text: "Cable as a Service (CaaS Hardware Tembaga)", isCorrect: false },
        { text: "Electricity as a Service (EaaS Trafo Gardu)", isCorrect: false }
      ],
      explanation: "Tiga model standar cloud computing adalah IaaS (infrastruktur), PaaS (platform pengembang), dan SaaS (perangkat lunak siap pakai).",
      quickTip: "3 Model Cloud: IaaS, PaaS, dan SaaS."
    },
    {
      stimulus: "Manajemen trouble ticket di pusat operasi jaringan (NOC) mengikuti alur terstandarisasi untuk mencegah pelanggaran SLA.",
      question: "Langkah-langkah baku yang terdapat dalam penanganan tiket gangguan jaringan adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Pencatatan nomor tiket dan identifikasi tingkat keparahan (Severity Level)", isCorrect: true },
        { text: "Eskalasi ke tim teknisi bidang terkait bila tidak tuntas pada batas waktu tertentu", isCorrect: true },
        { text: "Verifikasi penyelesaian masalah bersama pelanggan sebelum status tiket ditutup (Closed)", isCorrect: true },
        { text: "Menghapus riwayat tiket dari database untuk menyembunyikan keterlambatan", isCorrect: false },
        { text: "Mematikan sambungan telepon pelanggan yang mengajukan komplain", isCorrect: false }
      ],
      explanation: "SOP penanganan tiket: Pencatatan & klasifikasi severity, eskalasi tepat waktu, dan konfirmasi pemulihan sebelum tiket di-close.",
      quickTip: "Alur tiket: Registrasi severity -> Eskalasi -> Verifikasi & Close."
    }
  ],
  tf: [
    {
      stimulus: "Perjanjian Service Level Agreement (SLA) memiliki konsekuensi pinalti finansial bagi ISP jika target ketersediaan gagal tercapai.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penerapan SLA industri telekomunikasi!",
      statements: [
        { text: "Jika downtime melebihi toleransi kontrak SLA, ISP wajib memberikan kompensasi atau pengembalian biaya kepada pelanggan bisnis.", correct: "B" },
        { text: "Perhitungan persentase SLA tidak memperhitungkan durasi waktu gangguan sama sekali.", correct: "S" },
        { text: "Layanan internet korporat (Dedicated) umumnya memiliki jaminan SLA yang lebih tinggi daripada internet retail rumahan (Best Effort).", correct: "B" }
      ],
      explanation: "Internet dedicated memiliki SLA ketat dengan kompensasi pinalti bila downtime melebihi batas waktu.",
      quickTip: "Dedicated = SLA tinggi + pinalti finansial jika terjadi wanprestasi."
    },
    {
      stimulus: "Dalam proses penggelaran jaringan telekomunikasi, tahapan perencanaan menentukan efisiensi anggaran dan keberhasilan konstruksi fisik.",
      question: "Tentukan kebenaran dari pernyataan berikut terkait alur kerja proyek jaringan!",
      statements: [
        { text: "Penghitungan Optical Link Budget wajib diselesaikan pada tahap perencanaan sebelum kabel dibeli dan digelar.", correct: "B" },
        { text: "Tahap serah terima (handover) dilakukan tanpa perlu menyerahkan dokumen hasil uji redaman.", correct: "S" },
        { text: "Izin Right of Way (RoW) dari pemerintah daerah wajib diperoleh sebelum menggali jalur utilitas kabel bawah tanah.", correct: "B" }
      ],
      explanation: "Link budget dan izin RoW mutlak di tahap awal; serah terima proyek wajib melampirkan hasil uji redaman valid.",
      quickTip: "Link budget & izin RoW wajib di awal; serah terima wajib bukti uji redaman."
    },
    {
      stimulus: "Konsep Zero Trust Architecture merevolusi cara pandang pengamanan infrastruktur jaringan komputer modern.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai prinsip Zero Trust!",
      statements: [
        { text: "Zero Trust menganggap semua lalu lintas data berpotensi berbahaya meskipun berasal dari dalam jaringan kantor sendiri.", correct: "B" },
        { text: "Dengan sistem Zero Trust, pengguna hanya perlu login sekali seumur hidup tanpa verifikasi lanjutan.", correct: "S" },
        { text: "Otentikasi multi-faktor (MFA) dan inspeksi hak akses berkelanjutan merupakan komponen penting Zero Trust.", correct: "B" }
      ],
      explanation: "Zero Trust tidak mempercayai internal network secara buta dan mewajibkan verifikasi ketat berkelanjutan (MFA/least privilege).",
      quickTip: "Zero Trust: Selalu verifikasi (MFA), tidak percaya zona internal otomatis."
    },
    {
      stimulus: "IPv6 diciptakan untuk menggantikan ruang alamat IPv4 yang telah habis di seluruh dunia.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai karakteristik protokol IPv6!",
      statements: [
        { text: "Panjang alamat IPv6 adalah 128-bit yang ditulis dalam format 8 kelompok bilangan heksadesimal.", correct: "B" },
        { text: "IPv6 menggunakan mekanisme broadcast sama persis seperti pada IPv4 untuk mencari alamat MAC.", correct: "S" },
        { text: "Metode Dual-Stack memungkinkan perangkat menjalankan protokol IPv4 dan IPv6 secara bersamaan dalam satu kartu jaringan.", correct: "B" }
      ],
      explanation: "IPv6 menggantikan broadcast dengan multicast (Neighbor Discovery Protocol) dan berukuran 128-bit.",
      quickTip: "IPv6 = 128-bit heksadesimal, tanpa broadcast (pakai multicast), mendukung Dual-Stack."
    },
    {
      stimulus: "Teknologi Internet of Things (IoT) menghubungkan berbagai perangkat sensor cerdas ke cloud melalui jaringan telekomunikasi.",
      question: "Tentukan kebenaran dari pernyataan berikut terkait pemanfaatan IoT di bidang TJKT!",
      statements: [
        { text: "Perangkat IoT memanfaatkan protokol komunikasi ringan seperti MQTT untuk menghemat konsumsi bandwidth dan daya baterai.", correct: "B" },
        { text: "Perangkat sensor IoT tidak memerlukan alamat IP sama sekali untuk mengirimkan data ke server internet.", correct: "S" },
        { text: "Konektivitas IoT dapat menggunakan teknologi nirkabel berdaya rendah seperti LoRaWAN dan NB-IoT.", correct: "B" }
      ],
      explanation: "Sensor IoT terhubung ke IP network via gateway dan menggunakan protokol efisien seperti MQTT / LoRaWAN.",
      quickTip: "IoT: Protokol MQTT efisien, konektivitas LoRaWAN/NB-IoT, terhubung ke internet."
    }
  ]
};

module.exports = batch;
