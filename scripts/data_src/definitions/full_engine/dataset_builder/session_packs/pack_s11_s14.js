// scripts/data_src/definitions/full_engine/dataset_builder/session_packs/pack_s11_s14.js
// Sesi 11: Transmisi Nirkabel (Wireless LAN) & Standar IEEE 802.11
// Sesi 12: Komunikasi Gelombang Mikro (Microwave Link), Seluler & Satelit VSAT
// Sesi 13: Topologi Fisik & Logika Serta Arsitektur Jaringan Telekomunikasi
// Sesi 14: Mini Boss 2: Analisis Pemilihan Media, Topologi & Troubleshooting Transmisi
// Total 4 Sesi x 30 Soal = 120 Butir Soal Unik Standar Pusmendik

const s11 = {
  sessionId: "s11",
  pg: [
    {
      stimulus: "Standar Wireless LAN (WLAN) IEEE 802.11 telah mengalami evolusi generasi untuk meningkatkan kecepatan dan efisiensi transmisi data.",
      question: "Standar Wi-Fi generasi ke-6 yang beroperasi pada pita frekuensi 2.4 GHz dan 5 GHz (serta 6 GHz pada Wi-Fi 6E) dengan teknologi OFDMA adalah...",
      correctText: "IEEE 802.11ax (Wi-Fi 6)",
      distractors: [
        "IEEE 802.11b (Wi-Fi 1)",
        "IEEE 802.11g (Wi-Fi 3)",
        "IEEE 802.11n (Wi-Fi 4)",
        "IEEE 802.11ac (Wi-Fi 5)"
      ],
      explanation: "Wi-Fi 6 mengacu pada standar IEEE 802.11ax yang memperkenalkan Orthogonal Frequency Division Multiple Access (OFDMA) dan Target Wake Time (TWT) untuk efisiensi perangkat padat.",
      quickTip: "IEEE 802.11ax = Wi-Fi 6 (teknologi OFDMA & efisiensi tinggi)."
    },
    {
      stimulus: "Pada pita frekuensi 2.4 GHz, spektrum frekuensi dibagi menjadi beberapa saluran (channel) dengan lebar kanal standar 20 MHz.",
      question: "Kombinasi tiga kanal non-overlapping (tidak saling tumpang tindih) yang umum digunakan pada pita 2.4 GHz agar bebas interferensi adalah...",
      correctText: "Kanal 1, Kanal 6, dan Kanal 11",
      distractors: [
        "Kanal 1, Kanal 2, dan Kanal 3",
        "Kanal 2, Kanal 4, dan Kanal 6",
        "Kanal 5, Kanal 10, dan Kanal 15",
        "Kanal 3, Kanal 7, dan Kanal 12"
      ],
      explanation: "Pada pita 2.4 GHz, hanya ada 3 kanal dengan jarak pemisah 25 MHz yang tidak saling bersinggungan secara spektral, yaitu kanal 1, 6, dan 11.",
      quickTip: "Tiga kanal 2.4 GHz bebas interferensi = Kanal 1, 6, dan 11."
    },
    {
      stimulus: "Gelombang radio pada pita 2.4 GHz dan pita 5 GHz memiliki karakteristik fisis perambatan yang berbeda terhadap halangan fisik dinding.",
      question: "Kelebihan utama frekuensi nirkabel 2.4 GHz dibandingkan frekuensi 5 GHz dalam instalasi rumahan adalah...",
      correctText: "Memiliki daya tembus dinding dan jangkauan area cakupan yang lebih luas",
      distractors: [
        "Memiliki kecepatan bandwidth data jauh lebih tinggi",
        "Bebas total dari gangguan gelombang mikro dan microwave oven",
        "Memiliki jumlah kanal bebas tumpang tindih sebanyak 24 kanal",
        "Tidak membutuhkan antena pemancar sama sekali"
      ],
      explanation: "Frekuensi yang lebih rendah (2.4 GHz) memiliki panjang gelombang lebih panjang sehingga daya tembus terhadap partisi/dinding lebih baik dan jangkauan lebih luas dibanding 5 GHz.",
      quickTip: "Frekuensi 2.4 GHz: Jangkauan lebih jauh & tembus dinding lebih baik; 5 GHz: Kecepatan lebih tinggi."
    },
    {
      stimulus: "Nama jaringan nirkabel yang dipancarkan oleh Access Point (AP) agar dapat dikenali dan dipilih oleh pengguna di perangkat laptop/ponsel disebut...",
      question: "Istilah untuk identitas nama jaringan nirkabel yang disiarkan (broadcast) tersebut adalah...",
      correctText: "SSID (Service Set Identifier)",
      distractors: [
        "BSSID (Basic Service Set Identifier)",
        "MAC Address",
        "IP Address",
        "Default Gateway"
      ],
      explanation: "SSID adalah label nama teks (hingga 32 karakter) yang mengidentifikasi jaringan nirkabel bagi klien pengguna.",
      quickTip: "Nama tampilan jaringan Wi-Fi = SSID."
    },
    {
      stimulus: "Alamat fisik unik 48-bit (MAC Address) dari antarmuka radio kartu Access Point nirkabel yang memancarkan sinyal disebut...",
      question: "Istilah teknis identitas alamat fisik perangkat pemancar nirkabel tersebut adalah...",
      correctText: "BSSID (Basic Service Set Identifier)",
      distractors: [
        "SSID",
        "ESSID",
        "Subnet Mask",
        "WPA Key"
      ],
      explanation: "BSSID adalah alamat MAC dari modul radio nirkabel pada Access Point yang melayani sel jaringan BSS.",
      quickTip: "Alamat fisik MAC radio Access Point = BSSID."
    },
    {
      stimulus: "Protokol enkripsi keamanan Wi-Fi generasi awal (Wired Equivalent Privacy / WEP) saat ini telah ditinggalkan dan dilarang digunakan.",
      question: "Alasan utama protokol keamanan WEP tidak boleh digunakan lagi pada jaringan Wi-Fi modern adalah...",
      correctText: "Memiliki kelemahan algoritma IV (Initialization Vector) yang dapat diretas dengan mudah dalam hitungan menit menggunakan tools analisis paket",
      distractors: [
        "Tidak bisa dijalankan pada sistem operasi Windows 10",
        "Menyebabkan perangkat laptop menjadi cepat panas",
        "Hanya mendukung kecepatan internet maksimal 1 Kbps",
        "Membutuhkan kabel tembaga tambahan untuk mengaktifkannya"
      ],
      explanation: "WEP menggunakan algoritma RC4 dengan IV 24-bit yang rentan terhadap serangan pengumpulan paket (aircrack-ng) dan dapat dipecahkan dalam beberapa menit.",
      quickTip: "WEP dilarang karena memiliki celah keamanan fatal pada Initialization Vector (IV)."
    },
    {
      stimulus: "Standar pengamanan Wi-Fi modern WPA3 memperkenalkan metode otentikasi baru untuk jaringan personal guna menggantikan PSK rentan kamus.",
      question: "Nama mekanisme pertukaran kunci yang aman terhadap serangan offline dictionary attack pada WPA3-Personal adalah...",
      correctText: "SAE (Simultaneous Authentication of Equals)",
      distractors: [
        "WEP 64-bit Shared Key",
        "MD5 Hashing Algorithm",
        "DES (Data Encryption Standard)",
        "Telnet Plaintext Auth"
      ],
      explanation: "SAE (berdasarkan protokol Dragonfly key exchange) mencegah penyerang melakukan serangan kamus pasif (offline dictionary attack) terhadap handshake Wi-Fi.",
      quickTip: "Otentikasi WPA3-Personal yang kebal serangan kamus = SAE (Simultaneous Authentication of Equals)."
    },
    {
      stimulus: "Untuk autentikasi pengguna pada jaringan Wi-Fi kantor skala enterprise, setiap karyawan menggunakan username dan password masing-masing secara terpusat.",
      question: "Protokol keamanan Wi-Fi yang memanfaatkan server autentikasi terpusat (seperti RADIUS Server berbasis 802.1X) adalah...",
      correctText: "WPA2 / WPA3 Enterprise",
      distractors: [
        "WPA-Personal (Pre-Shared Key)",
        "Wired Equivalent Privacy (WEP)",
        "Open System Authentication",
        "WPS (Wi-Fi Protected Setup) PIN"
      ],
      explanation: "WPA-Enterprise mengarahkan autentikasi ke server RADIUS (IEEE 802.1X/EAP), memungkinkan pengelolaan akun individual dan pencabutan hak akses terpusat.",
      quickTip: "Autentikasi Wi-Fi terpusat dengan RADIUS/802.1X = WPA-Enterprise."
    },
    {
      stimulus: "Fitur pada router Wi-Fi rumahan yang memungkinkan koneksi mudah dengan menekan satu tombol fisik di perangkat, namun memiliki celah kerentanan brute-force PIN.",
      question: "Nama fitur kemudahan koneksi nirkabel yang sering direkomendasikan untuk dinonaktifkan demi keamanan adalah...",
      correctText: "WPS (Wi-Fi Protected Setup)",
      distractors: [
        "DHCP Server",
        "DNS Relay",
        "NAT Masquerade",
        "SSID Broadcast"
      ],
      explanation: "WPS memiliki PIN 8-digit yang dapat ditembus dengan serangan brute-force (menggunakan tool Reaver) dalam beberapa jam karena verifikasi dibagi menjadi dua bagian 4-digit.",
      quickTip: "Fitur tombol koneksi mudah yang rentan dibobol PIN = WPS (Wi-Fi Protected Setup)."
    },
    {
      stimulus: "Kekuatan sinyal penerimaan nirkabel pada perangkat klien diukur dalam satuan dBm dengan nilai logaritmik negatif.",
      question: "Nilai RSSI (Received Signal Strength Indicator) yang menunjukkan kualitas sinyal Wi-Fi yang sangat kuat dan optimal untuk streaming video definisi tinggi adalah...",
      correctText: "-50 dBm hingga -60 dBm",
      distractors: [
        "-85 dBm hingga -95 dBm",
        "-110 dBm hingga -120 dBm",
        "+50 dBm hingga +100 dBm",
        "0 dBm tepat tanpa sinyal"
      ],
      explanation: "Kekuatan sinyal Wi-Fi diukur dalam dBm negatif. -50 dBm sangat kuat, -67 dBm batas minimum untuk VoIP/video, sedangkan di bawah -80 dBm sinyal sangat lemah dan putus-putus.",
      quickTip: "Sinyal Wi-Fi bagus = -50 dBm s.d. -65 dBm (semakin mendekati 0 semakin kuat)."
    },
    {
      stimulus: "Teknologi antena pada standar 802.11n ke atas yang menggunakan banyak antena pemancar dan penerima untuk meningkatkan throughput data disebut...",
      question: "Nama teknologi antena spasial ganda tersebut adalah...",
      correctText: "MIMO (Multiple-Input Multiple-Output)",
      distractors: [
        "SISO (Single-Input Single-Output)",
        "AM (Amplitude Modulation)",
        "FM (Frequency Modulation)",
        "BNC (Bayonet Coupling)"
      ],
      explanation: "MIMO memanfaatkan multi-stream spasial dengan beberapa antena TX/RX secara serentak untuk melipatgandakan laju transfer data tanpa memperlebar spektrum frekuensi.",
      quickTip: "Teknologi banyak antena pemancar & penerima = MIMO."
    },
    {
      stimulus: "Pada Wi-Fi 5 (802.11ac Wave 2) dan Wi-Fi 6 (802.11ax), Access Point dapat mentransmisikan data ke beberapa perangkat klien nirkabel secara bersamaan.",
      question: "Nama pengembangan teknologi transmisi paralel multi-pengguna tersebut adalah...",
      correctText: "MU-MIMO (Multi-User Multiple-Input Multiple-Output)",
      distractors: [
        "Single Carrier Modulation",
        "Half Duplex Time Slicing",
        "Frequency Hopping Spread Spectrum",
        "Carrier Sense Multiple Access"
      ],
      explanation: "MU-MIMO memungkinkan Access Point berkomunikasi secara bersamaan dengan beberapa klien tanpa harus bergantian antre waktu (time slicing).",
      quickTip: "Transmisi nirkabel serentak ke banyak pengguna = MU-MIMO."
    },
    {
      stimulus: "Metode kendali akses media yang digunakan pada jaringan Wireless LAN (IEEE 802.11) untuk menghindari tabrakan data (collision) di udara adalah...",
      question: "Protokol transmisi nirkabel yang mendengarkan sebelum memancar dan menggunakan mekanisme RTS/CTS adalah...",
      correctText: "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)",
      distractors: [
        "CSMA/CD (Collision Detection)",
        "Token Passing Protocol",
        "Polling Master-Slave",
        "Slotted Aloha"
      ],
      explanation: "Karena transceiver radio nirkabel tidak dapat mendeteksi tabrakan saat memancar (half-duplex), 802.11 menggunakan CSMA/CA (Collision Avoidance) dengan sinyal acknowledge (ACK).",
      quickTip: "Wi-Fi menggunakan CSMA/CA (Avoidance); Kabel Ethernet menggunakan CSMA/CD (Detection)."
    },
    {
      stimulus: "Sebuah Access Point difungsikan untuk menerima sinyal Wi-Fi dari Access Point utama yang posisinya jauh, lalu memancarkannya kembali ke area blind spot.",
      question: "Mode operasional perangkat nirkabel yang bertindak memperluas jangkauan sinyal tersebut adalah...",
      correctText: "Range Extender / Repeater Mode",
      distractors: [
        "Router Gateway Mode",
        "Bridge Mode Point-to-Point",
        "Client Station Mode Murni",
        "DHCP Relay Mode"
      ],
      explanation: "Mode Repeater / Range Extender menangkap sinyal nirkabel yang sudah ada lalu memperkuat dan memancarkannya kembali ke area yang belum terjangkau.",
      quickTip: "Memperluas jangkauan sinyal nirkabel = Mode Repeater / Range Extender."
    },
    {
      stimulus: "Dua kantor cabang yang terpisah jarak 2 kilometer tanpa halangan gedung dihubungkan menggunakan dua perangkat radio nirkabel outdoor berantena directional.",
      question: "Konfigurasi jaringan nirkabel yang menghubungkan tepat dua titik lokasi tetap secara langsung disebut...",
      correctText: "Point-to-Point (PTP)",
      distractors: [
        "Point-to-Multipoint (PTMP)",
        "Ad-Hoc Mesh Peer",
        "Broadcasting Area",
        "WPS Push Pairing"
      ],
      explanation: "Koneksi Point-to-Point (PTP) menghubungkan dua lokasi tunggal menggunakan antena terarah dengan fokus gain tinggi.",
      quickTip: "Koneksi nirkabel langsung antara 2 lokasi = Point-to-Point (PTP)."
    },
    {
      stimulus: "Sebuah menara BTS pemancar internet nirkabel (WISP) melayani puluhan antena radio di rumah-rumah pelanggan di sekitarnya.",
      question: "Topologi nirkabel di mana satu Access Point pusat melayani banyak stasiun radio klien disebut...",
      correctText: "Point-to-Multipoint (PTMP)",
      distractors: [
        "Point-to-Point (PTP)",
        "Loopback Connection",
        "Simplex Transmission",
        "Single-Mode Linking"
      ],
      explanation: "Point-to-Multipoint (PTMP) menggunakan antena sektoral atau omnidirectional pada stasiun pusat untuk memancarkan sinyal ke berbagai stasiun klien terarah.",
      quickTip: "Satu pemancar melayani banyak klien = Point-to-Multipoint (PTMP)."
    },
    {
      stimulus: "Jenis antena nirkabel yang memancarkan energi gelombang radio ke segala arah secara merata 360 derajat pada bidang horizontal adalah...",
      question: "Nama tipe antena penyebar sinyal segala arah tersebut adalah...",
      correctText: "Antena Omnidirectional",
      distractors: [
        "Antena Parabolik Grid",
        "Antena Solid Dish",
        "Antena Yagi-Uda",
        "Antena Horn Feeder"
      ],
      explanation: "Antena Omnidirectional memiliki pola radiasi 360 derajat horizontal menyerupai bentuk kue donat (toroid), cocok untuk area ruangan terpusat.",
      quickTip: "Pancaran sinyal merata 360 derajat = Antena Omnidirectional."
    },
    {
      stimulus: "Untuk menjangkau jarak nirkabel belasan kilometer pada koneksi Point-to-Point, dibutuhkan antena dengan penguatan fokus (gain) sangat tinggi dan sudut pancar sempit.",
      question: "Tipe antena yang paling efektif untuk koneksi terarah jarak jauh tersebut adalah...",
      correctText: "Antena Grid / Solid Dish Parabolic",
      distractors: [
        "Antena Omnidirectional 2 dBi",
        "Antena Rubber Duck bawaan laptop",
        "Antena Tongkat Monopole Mobil",
        "Antena Dipole Lipat Televisi"
      ],
      explanation: "Antena piringan parabola (Dish/Grid) memfokuskan energi gelombang elektromagnetik ke satu berkas sempit dengan gain sangat tinggi (24 - 34 dBi) untuk jarak puluhan km.",
      quickTip: "Koneksi nirkabel jarak jauh berfokus tajam = Antena Dish / Grid Parabolik."
    },
    {
      stimulus: "Teknisi melakukan survei sinyal Wi-Fi di area kantor untuk memetakan kekuatan sinyal, interferensi, dan area blank spot (dead zone).",
      question: "Kegiatan pengukuran dan pemetaan sebaran sinyal nirkabel di gedung tersebut dinamakan...",
      correctText: "Wireless Site Survey (Heatmap Analysis)",
      distractors: [
        "Penetration Testing Brute Force",
        "Cable Certifying TIA-568",
        "Fusion Splicing Alignment",
        "Electrical Voltage Auditing"
      ],
      explanation: "Wireless Site Survey (menggunakan tools seperti NetSpot, Ekahau, atau Wi-Fi Analyzer) menghasilkan peta panas (heatmap) kekuatan sinyal dan rasio SNR.",
      quickTip: "Pemetaan cakupan dan kekuatan sinyal Wi-Fi di gedung = Wireless Site Survey."
    },
    {
      stimulus: "Tingkat perbandingan antara kekuatan sinyal yang diinginkan (signal) terhadap derau kebisingan lingkungan (noise) dinyatakan dalam satuan dB.",
      question: "Parameter kualitas jaringan nirkabel yang menunjukkan rasio sinyal terhadap derau tersebut adalah...",
      correctText: "SNR (Signal-to-Noise Ratio)",
      distractors: [
        "MTU (Maximum Transmission Unit)",
        "TTL (Time to Live)",
        "QoS (Quality of Service)",
        "SSID (Service Set Identifier)"
      ],
      explanation: "SNR mengukur seberapa jauh sinyal data lebih kuat daripada derau lingkungan (noise floor). Nilai SNR di atas 25-30 dB menandakan kualitas koneksi yang sangat baik.",
      quickTip: "Rasio kekuatan sinyal terhadap gangguan derau = SNR (Signal-to-Noise Ratio)."
    }
  ],
  mcma: [
    {
      stimulus: "Standar Wireless LAN IEEE 802.11 mengalami peningkatan kapasitas dari generasi ke generasi.",
      question: "Manakah pasangan antara standar 802.11 dan nama generasinya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "IEEE 802.11n = Wi-Fi 4", isCorrect: true },
        { text: "IEEE 802.11ac = Wi-Fi 5", isCorrect: true },
        { text: "IEEE 802.11ax = Wi-Fi 6", isCorrect: true },
        { text: "IEEE 802.11b = Wi-Fi 6E", isCorrect: false },
        { text: "IEEE 802.11a = Wi-Fi 7", isCorrect: false }
      ],
      explanation: "Asosiasi Wi-Fi Alliance menetapkan penamaan generasi: 802.11n = Wi-Fi 4, 802.11ac = Wi-Fi 5, 802.11ax = Wi-Fi 6. 802.11b dan 802.11a adalah standar generasi awal.",
      quickTip: "Generasi Wi-Fi: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), 802.11ax (Wi-Fi 6)."
    },
    {
      stimulus: "Frekuensi 2.4 GHz dan 5 GHz memiliki perbedaan karakteristik penting yang harus dipertimbangkan saat mendesain jaringan Wi-Fi.",
      question: "Manakah pernyataan yang BENAR mengenai perbandingan frekuensi 2.4 GHz dan 5 GHz? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Frekuensi 5 GHz menawarkan throughput bandwidth lebih tinggi dan memiliki lebih banyak saluran bebas interferensi", isCorrect: true },
        { text: "Frekuensi 2.4 GHz memiliki jangkauan lebih luas dan kemampuan menembus dinding lebih baik dibanding 5 GHz", isCorrect: true },
        { text: "Frekuensi 2.4 GHz sama sekali tidak terpengaruh oleh gelombang microwave oven atau perangkat Bluetooth", isCorrect: false },
        { text: "Frekuensi 5 GHz memiliki jangkauan jarak tembus fisik dinding beton yang jauh lebih baik daripada 2.4 GHz", isCorrect: false },
        { text: "Kanal 2.4 GHz memiliki total 25 saluran yang seluruhnya tidak saling tumpang tindih", isCorrect: false }
      ],
      explanation: "2.4 GHz unggul dalam jangkauan dan penetrasi dinding; 5 GHz unggul dalam kecepatan dan ketersediaan kanal bersih bebas derau.",
      quickTip: "2.4 GHz: jangkauan luas; 5 GHz: bandwidth kencang & kanal bersih."
    },
    {
      stimulus: "Pengamanan jaringan nirkabel membutuhkan konfigurasi enkripsi dan autentikasi yang kuat.",
      question: "Manakah metode pengamanan Wi-Fi yang DIANGGAP AMAN dan direkomendasikan untuk digunakan saat ini? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "WPA2-PSK dengan algoritma enkripsi AES (CCMP)", isCorrect: true },
        { text: "WPA3-Personal dengan protokol autentikasi SAE (Simultaneous Authentication of Equals)", isCorrect: true },
        { text: "WEP 64-bit dengan kunci heksadesimal statis", isCorrect: false },
        { text: "WPS (Wi-Fi Protected Setup) menggunakan PIN standar pabrik", isCorrect: false },
        { text: "Open Authentication tanpa password sama sekali", isCorrect: false }
      ],
      explanation: "WPA2-AES dan WPA3-SAE adalah standar keamanan modern yang tangguh. WEP, WPS PIN, dan Open Network sangat rentan terhadap penyusupan.",
      quickTip: "Gunakan minimal WPA2-AES atau WPA3-SAE untuk keamanan Wi-Fi yang kuat."
    },
    {
      stimulus: "Antena nirkabel memiliki pola pancaran (radiation pattern) yang disesuaikan dengan kebutuhan area layanan.",
      question: "Manakah jenis antena directional (terarah) yang umum digunakan untuk transmisi Point-to-Point jarak jauh? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Antena Grid Parabolik", isCorrect: true },
        { text: "Antena Solid Dish Parabolik", isCorrect: true },
        { text: "Antena Yagi-Uda", isCorrect: true },
        { text: "Antena Karet Monopole Omnidirectional", isCorrect: false },
        { text: "Antena BNC Coaxial Loop", isCorrect: false }
      ],
      explanation: "Grid, Solid Dish, dan Yagi adalah antena directional yang memfokuskan energi ke satu arah tertentu untuk jarak jauh. Antena Omnidirectional memancar ke segala arah.",
      quickTip: "Antena directional terarah: Grid, Dish Parabolik, dan Yagi."
    },
    {
      stimulus: "Masalah koneksi lambat pada jaringan Wi-Fi di kantor dapat disebabkan oleh berbagai faktor lingkungan gelombang radio.",
      question: "Manakah faktor yang DAPAT MENURUNKAN performa sinyal Wi-Fi di dalam gedung? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Interferensi antar-Access Point yang menggunakan kanal frekuensi bertumpuk (Co-Channel Interference)", isCorrect: true },
        { text: "Peredaman sinyal akibat partisi dinding beton tebal, kaca film, dan struktur logam", isCorrect: true },
        { text: "Jumlah perangkat klien aktif yang terlalu padat pada satu Access Point melebihi kapasitas radio", isCorrect: true },
        { text: "Penggunaan kabel UTP Cat6 berkualitas baik dari switch ke Access Point", isCorrect: false },
        { text: "Penempatan Access Point di plafon tengah ruangan tanpa halangan", isCorrect: false }
      ],
      explanation: "Performa Wi-Fi turun akibat interferensi kanal tumpang tindih, redaman material padat/logam, dan kelebihan beban klien (overload). Kabel Cat6 dan pemasangan di plafon justru meningkatkan performa.",
      quickTip: "Faktor penurunan Wi-Fi: Interferensi kanal, dinding tebal/logam, dan beban klien berlebih."
    }
  ],
  tf: [
    {
      stimulus: "Kanal frekuensi pada pita Wi-Fi 2.4 GHz.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pembagian kanal 2.4 GHz!",
      statements: [
        { text: "Kanal 1, 6, dan 11 adalah tiga kanal pada pita 2.4 GHz yang tidak saling tumpang tindih spektrumnya.", correct: "B" },
        { text: "Jika dua Access Point berdekatan diatur pada kanal 1 dan kanal 2, akan terjadi interferensi adjacent-channel yang parah.", correct: "B" },
        { text: "Pita frekuensi 2.4 GHz memiliki 50 saluran bebas interferensi yang dapat digunakan serentak.", correct: "S" }
      ],
      explanation: "Pada pita 2.4 GHz hanya ada 3 kanal non-overlapping (1, 6, 11). Menempatkan AP di kanal 1 dan 2 akan menimbulkan tabrakan interferensi parah.",
      quickTip: "Hanya ada 3 kanal non-overlapping di 2.4 GHz: Kanal 1, 6, dan 11."
    },
    {
      stimulus: "Protokol kendali media CSMA/CA pada Wireless LAN.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang mekanisme CSMA/CA!",
      statements: [
        { text: "Perangkat nirkabel 802.11 beroperasi secara half-duplex karena tidak dapat memancar dan mendengar tabrakan pada frekuensi yang sama secara bersamaan.", correct: "B" },
        { text: "CSMA/CA menggunakan mekanisme pengiriman frame ACK untuk memastikan paket data diterima utuh oleh penerima.", correct: "B" },
        { text: "CSMA/CA bekerja dengan mendeteksi tabrakan tabrakan listrik di kawat tembaga secara instan seperti CSMA/CD kabel LAN.", correct: "S" }
      ],
      explanation: "CSMA/CA menghindari tabrakan (avoidance) di udara nirkabel, bukan mendeteksi tabrakan kawat listrik (CSMA/CD pada kabel Ethernet).",
      quickTip: "Nirkabel memakai CSMA/CA karena radio beroperasi secara half-duplex."
    },
    {
      stimulus: "Keamanan jaringan Wi-Fi modern dan protokol enkripsi.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai keamanan Wi-Fi!",
      statements: [
        { text: "Protokol WPA3-Personal menggunakan mekanisme Simultaneous Authentication of Equals (SAE) untuk menolak serangan brute-force kamus.", correct: "B" },
        { text: "Protokol WEP dianggap usang dan tidak aman karena kunci enkripsinya mudah dibongkar dalam waktu singkat.", correct: "B" },
        { text: "Menyembunyikan SSID (Hidden SSID) adalah metode keamanan mutlak yang membuat jaringan 100% tidak bisa dilacak oleh siapapun.", correct: "S" }
      ],
      explanation: "Hidden SSID tetap memancarkan frame probe response dan beacon yang dengan mudah dapat dianalisis oleh tool scanner seperti Wireshark atau airodump-ng.",
      quickTip: "Hidden SSID bukan fitur keamanan; sinyal tetap mudah dideteksi packet sniffer."
    },
    {
      stimulus: "Teknologi MIMO dan antena nirkabel modern.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang teknologi MIMO!",
      statements: [
        { text: "MIMO memanfaatkan beberapa antena pemancar dan penerima untuk mengirim beberapa aliran data spasial secara simultan.", correct: "B" },
        { text: "MU-MIMO memungkinkan Access Point melayani komunikasi beberapa klien secara bersamaan.", correct: "B" },
        { text: "Teknologi MIMO hanya dapat berjalan jika kabel serat optik ditancapkan langsung ke badan antena klien.", correct: "S" }
      ],
      explanation: "MIMO adalah teknologi transmisi gelombang radio nirkabel spasial melalui udara, bukan teknologi kabel serat optik.",
      quickTip: "MIMO memproses gelombang radio spasial nirkabel multi-antena."
    },
    {
      stimulus: "Indikator kekuatan sinyal RSSI dan rasio SNR.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pembacaan sinyal nirkabel!",
      statements: [
        { text: "Nilai RSSI sebesar -55 dBm jauh lebih kuat dan lebih stabil dibandingkan nilai RSSI sebesar -88 dBm.", correct: "B" },
        { text: "Nilai SNR yang semakin besar menunjukkan kualitas sinyal yang semakin bersih dari gangguan derau lingkungan.", correct: "B" },
        { text: "Nilai RSSI sebesar -95 dBm adalah sinyal sempurna dengan kecepatan data maksimal.", correct: "S" }
      ],
      explanation: "-95 dBm berada di dekat batas noise floor di mana sinyal hampir tidak terbaca dan menyebabkan koneksi terputus total.",
      quickTip: "-55 dBm sinyal sangat bagus; -95 dBm sinyal hampir hilang / putus."
    }
  ]
};

const s12 = {
  sessionId: "s12",
  pg: [
    {
      stimulus: "Komunikasi transmisi radio gelombang mikro (Microwave Link) bekerja pada rentang frekuensi gigahertz (GHz) dan merambat lurus melalui atmosfer.",
      question: "Syarat fisis mutlak perambatan gelombang radio microwave antar-antena pemancar dan penerima tanpa penghalang visual adalah...",
      correctText: "Line of Sight (LoS)",
      distractors: [
        "Non-Line of Sight (NLoS)",
        "Ionospheric Skywave Reflection",
        "Ground Wave Troposcatter",
        "Subsea Acoustic Reflection"
      ],
      explanation: "Gelombang mikro membutuhkan kondisi Line of Sight (LoS) bebas halangan karena panjang gelombangnya yang pendek tidak mampu membelok atau menembus rintangan besar.",
      quickTip: "Transmisi gelombang mikro (Microwave Link) mutlak membutuhkan Line of Sight (LoS)."
    },
    {
      stimulus: "Dalam perencanaan link radio microwave Point-to-Point, area elips di sekitar garis lurus LoS tidak boleh terhalang pohon atau bangunan.",
      question: "Nama daerah elipsoid teoritis di sekitar garis bebas pandang yang wajib bersih minimal 60% dari rintangan disebut...",
      correctText: "Zona Fresnel (Fresnel Zone Pertama)",
      distractors: [
        "Zona Ozon Stratosfer",
        "Dead Zone OTDR",
        "Collision Domain",
        "Tropospheric Duct"
      ],
      explanation: "Zona Fresnel Pertama (First Fresnel Zone) harus bebas dari rintangan minimal 60% agar sinyal yang sampai tidak mengalami pelemahan akibat interferensi destruktif fase pantulan.",
      quickTip: "Area elips bebas halangan minimal 60% pada link radio = Fresnel Zone Pertama."
    },
    {
      stimulus: "Struktur menara telekomunikasi mandiri berkaki tiga atau empat yang kokoh tanpa kawat penopang baja banyak digunakan di area perkotaan yang lahannya terbatas.",
      question: "Tipe menara baja berkaki mandiri tersebut dikenal dengan istilah...",
      correctText: "SST (Self-Supporting Tower)",
      distractors: [
        "Guyed Mast Tower (Menara Rentang Kawat)",
        "Monopole Pole Tunggal",
        "Tiang Bambu Ikat",
        "Tiang Kayu Telepon Kuno"
      ],
      explanation: "SST (Self-Supporting Tower) berdiri tegak dengan kekuatan rangka baja berkaki 3 atau 4 tanpa membutuhkan kawat tarikan (guyed wires).",
      quickTip: "Menara rangka baja mandiri tanpa kawat tarikan = Self-Supporting Tower (SST)."
    },
    {
      stimulus: "Menara telekomunikasi berpenampang tiang silinder tunggal ramping yang sering dipasang di median jalan kota atau taman disebut...",
      question: "Jenis menara telekomunikasi tiang tunggal tersebut adalah...",
      correctText: "Monopole Tower",
      distractors: [
        "SST 4-Leg Tower",
        "Guyed Mast 60 Meter",
        "Pylon Sutet PLN",
        "Rig Pengeboran Lepas Pantai"
      ],
      explanation: "Monopole berbentuk pipa baja tunggal meruncing, sangat hemat tempat dan estetik untuk penempatan seluler mikro di perkotaan.",
      quickTip: "Menara tiang tunggal ramping = Monopole Tower."
    },
    {
      stimulus: "Pada sistem komunikasi seluler generasi ke-4 (4G LTE), menara BTS yang melayani komunikasi radio dengan ponsel pelanggan disebut...",
      question: "Nama stasiun pemancar radio seluler pada arsitektur jaringan 4G LTE adalah...",
      correctText: "eNodeB (Evolved Node B)",
      distractors: [
        "BTS (Base Transceiver Station - 2G)",
        "NodeB (3G WCDMA)",
        "gNodeB (5G NR)",
        "BSC (Base Station Controller)"
      ],
      explanation: "4G LTE menggunakan eNodeB, 2G menggunakan BTS, 3G menggunakan NodeB, dan 5G menggunakan gNodeB.",
      quickTip: "Stasiun radio seluler: 2G = BTS, 3G = NodeB, 4G = eNodeB, 5G = gNodeB."
    },
    {
      stimulus: "Teknologi seluler generasi ke-5 (5G New Radio) dirancang untuk melayani tiga pilar skenario penggunaan industri utama.",
      question: "Pilar 5G yang berfokus pada kecepatan data super tinggi hingga puluhan gigabit per detik untuk pengguna massal disebut...",
      correctText: "eMBB (Enhanced Mobile Broadband)",
      distractors: [
        "URLLC (Ultra-Reliable Low-Latency Communications)",
        "mMTC (Massive Machine Type Communications)",
        "GPRS (General Packet Radio Service)",
        "SMS (Short Message Service)"
      ],
      explanation: "Tiga pilar 5G: eMBB (kecepatan data masif), URLLC (latensi super rendah untuk operasi bedah/mobil otonom), dan mMTC (miliaran sensor IoT).",
      quickTip: "Pilar 5G kecepatan gigabit = eMBB (Enhanced Mobile Broadband)."
    },
    {
      stimulus: "Sistem komunikasi satelit geostasioner (GEO) mengorbit bumi pada posisi tetap terhadap permukaan bumi sepanjang waktu.",
      question: "Ketinggian lintasan orbit satelit Geostasioner di atas garis khatulistiwa bumi adalah sekitar...",
      correctText: "36.000 kilometer (35.786 km)",
      distractors: [
        "400 kilometer (Orbit Stasiun Luar Angkasa ISS)",
        "2.000 kilometer (Orbit Rendah LEO)",
        "100 kilometer (Batas Atmosfer Karman)",
        "100.000 kilometer"
      ],
      explanation: "Satelit GEO berada di ketinggian ~36.000 km dengan periode orbit 24 jam persis menyamai putaran rotasi bumi sehingga tampak diam di langit.",
      quickTip: "Ketinggian satelit Geostasioner (GEO) = sekitar 36.000 km di atas khatulistiwa."
    },
    {
      stimulus: "Akibat jarak tempuh sinyal radio bolak-balik dari stasiun bumi ke satelit GEO di luar angkasa (jarak tempuh ~72.000 km), timbul jeda waktu.",
      question: "Karakteristik latensi waktu tempuh bolak-balik (Round Trip Time / RTT) rata-rata pada transmisi internet satelit GEO adalah sekitar...",
      correctText: "Sekitar 500 hingga 700 milidetik (ms)",
      distractors: [
        "Hanya 1 hingga 5 milidetik (ms)",
        "Tepat 10 mikrodetik (µs)",
        "Nol detik tanpa delay sama sekali",
        "Sekitar 10 menit per paket data"
      ],
      explanation: "Kecepatan cahaya 300.000 km/s menempuh jarak bumi-satelit-bumi dua kali (~144.000 km) menghasilkan delay propagasi teoritis minimal ~500 ms RTT.",
      quickTip: "Latensi transmisi satelit GEO tinggi = rata-rata 500 s.d. 700 ms RTT."
    },
    {
      stimulus: "Sistem komunikasi stasiun bumi satelit berukuran kecil yang banyak dipasang di daerah terpencil atau pulau terluar dikenal dengan singkatan VSAT.",
      question: "Kepanjangan dari akronim teknologi komunikasi satelit VSAT adalah...",
      correctText: "Very Small Aperture Terminal",
      distractors: [
        "Virtual Storage Access Transmitter",
        "Variable Speed Antenna Transceiver",
        "Vertical Signal Amplification Technology",
        "Voice Streaming Audio Transmitter"
      ],
      explanation: "VSAT singkatan dari Very Small Aperture Terminal, merujuk pada stasiun bumi dengan antena parabola berdiameter kecil (biasanya 0.9 hingga 2.4 meter).",
      quickTip: "VSAT = Very Small Aperture Terminal."
    },
    {
      stimulus: "Peralatan terminal antena VSAT dibagi menjadi dua bagian utama: unit luar ruangan (ODU) dan unit dalam ruangan (IDU).",
      question: "Komponen pemancar pada ODU yang berfungsi menaikkan frekuensi sinyal modem ke frekuensi radio satelit sekaligus menguatkan dayanya adalah...",
      correctText: "BUC (Block Up Converter)",
      distractors: [
        "LNB (Low Noise Block)",
        "Feedhorn",
        "Modem Satelit IDU",
        "Kabel Coaxial RG-6"
      ],
      explanation: "BUC (Block Up Converter) menerima sinyal frekuensi menengah (IF, L-band) dari modem lalu mengubahnya ke frekuensi kirim satelit (C/Ku band) dan memancarkannya.",
      quickTip: "Pemancar pada antena VSAT = BUC (Block Up Converter)."
    },
    {
      stimulus: "Komponen penerima pada unit luar ruangan (ODU) antena VSAT yang menangkap sinyal lemah dari satelit dan menurunkan frekuensinya adalah...",
      question: "Nama perangkat penangkap sinyal satelit dengan derau rendah tersebut adalah...",
      correctText: "LNB / LNBC (Low Noise Block Converter)",
      distractors: [
        "BUC (Block Up Converter)",
        "OMT (Orthomode Transducer)",
        "Reflector Dish",
        "Inverter Daya Listrik"
      ],
      explanation: "LNB (Low Noise Block) menguatkan sinyal satelit mikrovolt yang sangat lemah dan menurunkannya ke frekuensi L-band agar dapat dihantarkan lewat kabel ke modem.",
      quickTip: "Penerima sinyal satelit pada piringan antena = LNB (Low Noise Block)."
    },
    {
      stimulus: "Komponen corong pemandu gelombang di ujung tiang penyangga antena parabola VSAT yang mengarahkan gelombang ke permukaan piringan disebut...",
      question: "Nama komponen corong pengarah gelombang radio tersebut adalah...",
      correctText: "Feedhorn",
      distractors: [
        "Subnet Router",
        "Switch Hub",
        "Grounding Rod",
        "Patch Cord"
      ],
      explanation: "Feedhorn berfungsi sebagai tanduk pemandu gelombang yang memfokuskan transmisi elektromagnetik antara BUC/LNB dengan cermin parabola.",
      quickTip: "Corong pengarah gelombang antena parabola = Feedhorn."
    },
    {
      stimulus: "Pita frekuensi satelit C-Band (Uplink ~6 GHz, Downlink ~4 GHz) sangat banyak digunakan di wilayah beriklim tropis seperti Indonesia.",
      question: "Keunggulan utama pita frekuensi C-Band dibanding Ku-Band di kawasan tropis Indonesia adalah...",
      correctText: "Sangat tahan terhadap redaman hujan lebat (Rain Fade)",
      distractors: [
        "Membutuhkan ukuran piringan parabola sangat kecil seukuran koin",
        "Memiliki kecepatan bandwidth data hingga 100 Terabits",
        "Tidak memerlukan izin spektrum frekuensi pemerintah",
        "Bisa beroperasi tanpa menggunakan sumber daya listrik"
      ],
      explanation: "Frekuensi C-Band yang relatif rendah memiliki panjang gelombang lebih besar dari butiran air hujan, sehingga sinyal tidak diserap/dihamburkan hujan lebat.",
      quickTip: "C-Band unggul di wilayah tropis Indonesia karena tahan gangguan hujan (Rain Fade)."
    },
    {
      stimulus: "Pita frekuensi satelit Ku-Band (Uplink ~14 GHz, Downlink ~12 GHz) menawarkan bandwidth besar dengan ukuran antena piringan yang lebih kompak (di bawah 1 meter).",
      question: "Kelemahan teknis utama dari frekuensi Ku-Band di negara bercurah hujan tinggi adalah...",
      correctText: "Sangat rentan terhadap pelemahan sinyal parah (Rain Fade) saat terjadi hujan lebat atau mendung tebal",
      distractors: [
        "Harga modem satelitnya seribu kali lebih mahal dari satelit lain",
        "Hanya bisa digunakan oleh satu komputer saja di dunia",
        "Tidak bisa memancarkan sinyal internet di malam hari",
        "Menghasilkan radiasi nuklir berbahaya bagi teknisi"
      ],
      explanation: "Butiran air hujan memiliki ukuran sebanding dengan panjang gelombang Ku-Band (12-14 GHz), mengakibatkan penyerapan dan hamburan daya gelombang saat badai.",
      quickTip: "Kelemahan Ku-Band di Indonesia = Rentan redaman hujan lebat (Rain Fade)."
    },
    {
      stimulus: "Untuk mengarahkan antena parabola VSAT ke arah orbit satelit di luar angkasa secara akurat, teknisi mengatur dua sudut koordinat utama.",
      question: "Dua sudut koordinat arah penunjukan antena tersebut adalah...",
      correctText: "Azimuth (sudut horizontal kompas) dan Elevasi (sudut kemiringan vertikal)",
      distractors: [
        "Latitude dan Longitude koordinat GPS",
        "Panjang Gelombang dan Amplitudo",
        "Refraksi dan Difraksi Gelombang",
        "Impedansi dan Resistansi Kabel"
      ],
      explanation: "Pointing antena parabola melibatkan pengaturan sudut Azimuth (derajat kompas horizontal) dan sudut Elevasi (kemiringan sudut vertikal mendongak ke langit).",
      quickTip: "Pointing antena VSAT = Mengatur sudut Azimuth (horizontal) dan Elevasi (vertikal)."
    },
    {
      stimulus: "Selain Azimuth dan Elevasi, penyesuaian sudut putar posisi LNB/feedhorn pada poros sumbu antena parabola disebut...",
      question: "Nama penyetelan sudut putaran polarisasi gelombang radio tersebut adalah...",
      correctText: "Polarisasi (Polarization Skew)",
      distractors: [
        "Atenuasi Sudut",
        "Resonansi Frekuensi",
        "Modulasi Fase",
        "Refleksi Optik"
      ],
      explanation: "Polarization Skew menyesuaikan sudut polarisasi elektromagnetik antena stasiun bumi agar sejajar persis dengan polarisasi transponder satelit.",
      quickTip: "Penyesuaian sudut putar LNB agar sejajar transponder = Polarisasi (Skew)."
    },
    {
      stimulus: "Peristiwa alam musiman di mana posisi matahari berada sejajar persis di belakang satelit dan antena penerima stasiun bumi disebut...",
      question: "Fenomena alam yang menyebabkan pemadaman sinyal satelit selama beberapa menit akibat radiasi termal matahari tersebut adalah...",
      correctText: "Sun Outage (Sun Interference)",
      distractors: [
        "Gerhana Bulan Total",
        "Badai Magnet Bumi Aurora",
        "Efek Rumah Kaca Global",
        "Tsunami Gelombang Pasang"
      ],
      explanation: "Sun Outage terjadi saat matahari, satelit, dan antena stasiun bumi berada dalam satu garis lurus, membanjiri feedhorn dengan radiasi derau termal matahari.",
      quickTip: "Matahari tepat di belakang satelit membuat sinyal hilang sementara = Sun Outage."
    },
    {
      stimulus: "Unit perangkat keras yang berada di dalam ruangan (Indoor Unit / IDU) pada instalasi VSAT berfungsi sebagai...",
      question: "Fungsi utama dari Satellite Modem pada sistem VSAT adalah...",
      correctText: "Memodulasi sinyal data digital komputer menjadi sinyal frekuensi radio dan mendemodulasi sinyal satelit penerima",
      distractors: [
        "Menyalakan genset listrik secara otomatis",
        "Menghitung tagihan pulsa telepon pelanggan",
        "Mendinginkan udara ruangan server",
        "Memutar piringan antena parabola luar ruangan"
      ],
      explanation: "Modem satelit (IDU) bertugas memodulasi paket IP digital menjadi sinyal frekuensi IF (L-band) ke arah pemancar BUC dan mendemodulasi sinyal balik dari LNB.",
      quickTip: "IDU Satellite Modem = Modulasi dan demodulasi sinyal data digital dengan sinyal radio satelit."
    },
    {
      stimulus: "Komunikasi microwave terrestrial sering mengalami pemudaran sinyal (fading) akibat pembiasan atmosfer dan pantulan permukaan tanah/air.",
      question: "Metode pemasangan dua antena penerima dengan ketinggian berbeda pada satu menara untuk menanggulangi multipath fading disebut...",
      correctText: "Space Diversity",
      distractors: [
        "Frequency Division Multiplexing",
        "Time Domain Reflectometry",
        "Subnetting VLSM",
        "Port Mirroring"
      ],
      explanation: "Space Diversity menempatkan dua antena secara vertikal di satu menara; jika sinyal di salah satu antena melemah akibat pantulan, antena lain tetap menerima sinyal kuat.",
      quickTip: "Dua antena pada menara untuk mengatasi multipath fading = Space Diversity."
    },
    {
      stimulus: "Penangkal petir dan sistem pentanahan (grounding) pada menara telekomunikasi dan antena parabola merupakan syarat keselamatan kerja wajib.",
      question: "Nilai resistansi pentanahan (grounding resistance) maksimal yang dipersyaratkan standar industri telekomunikasi untuk instalasi menara dan radio adalah...",
      correctText: "Maksimal di bawah 5 Ohm (idealnya di bawah 1-2 Ohm)",
      distractors: [
        "Maksimal 500 Ohm",
        "Maksimal 1.000 Ohm",
        "Harus tepat 50 Ohm",
        "Tidak terbatas bebas hambatan"
      ],
      explanation: "Standar grounding perangkat telekomunikasi (ITU-T dan PUIL) mensyaratkan resistansi tanah maksimal di bawah 5 Ohm agar arus sambaran petir dapat langsung dibuang aman ke bumi.",
      quickTip: "Resistansi grounding telekomunikasi = Maksimal di bawah 5 Ohm."
    }
  ],
  mcma: [
    {
      stimulus: "Sistem komunikasi satelit VSAT memiliki komponen yang terpasang di luar ruangan (Outdoor Unit / ODU).",
      question: "Manakah komponen yang TERPASANG pada bagian Outdoor Unit (ODU) antena VSAT? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "BUC (Block Up Converter sebagai pemancar sinyal)", isCorrect: true },
        { text: "LNB (Low Noise Block sebagai penerima sinyal)", isCorrect: true },
        { text: "Reflector Dish & Feedhorn (piringan parabola pemantul)", isCorrect: true },
        { text: "Server Database Linux Rackmount", isCorrect: false },
        { text: "Core Switch Layer 3", isCorrect: false }
      ],
      explanation: "ODU antena VSAT terdiri dari Dish Reflector, Feedhorn, BUC (pemancar), dan LNB (penerima). Server dan Switch terpasang di ruang server dalam gedung.",
      quickTip: "Komponen ODU VSAT: Dish Parabola, Feedhorn, BUC, dan LNB."
    },
    {
      stimulus: "Pita frekuensi satelit C-Band dan Ku-Band memiliki keunggulan dan kelemahan masing-masing.",
      question: "Manakah pernyataan yang BENAR mengenai karakteristik C-Band dan Ku-Band? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "C-Band memiliki ketahanan sangat tinggi terhadap gangguan hujan tropis (rain fade)", isCorrect: true },
        { text: "Ku-Band menggunakan diameter piringan antena yang lebih kecil dibanding C-Band untuk memperoleh gain yang setara", isCorrect: true },
        { text: "Ku-Band sama sekali tidak terpengaruh oleh badai hujan lebat", isCorrect: false },
        { text: "C-Band hanya bisa digunakan di luar angkasa dan tidak bisa diterima di bumi", isCorrect: false },
        { text: "Ku-Band membutuhkan piringan antena minimal 10 meter untuk setiap rumah", isCorrect: false }
      ],
      explanation: "C-Band tahan terhadap hujan lebat di wilayah tropis. Ku-Band frekuensinya lebih tinggi sehingga ukuran piringan antenanya lebih kecil (kompak) namun sensitif terhadap hujan.",
      quickTip: "C-Band tahan hujan; Ku-Band antena lebih kecil tapi rentan rain fade."
    },
    {
      stimulus: "Transmisi gelombang mikro (Microwave Link) membutuhkan perencanaan propagasi yang matang antar-menara.",
      question: "Manakah parameter penting yang HARUS diperhitungkan dalam perencanaan link radio microwave? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Line of Sight (LoS) bebas halangan pandang antar-menara", isCorrect: true },
        { text: "Kelonggaran Zona Fresnel pertama (Fresnel Zone Clearance)", isCorrect: true },
        { text: "Ketinggian menara terhadap kelengkungan permukaan bumi dan rintangan alam", isCorrect: true },
        { text: "Warna cat mobil teknisi yang melakukan survei lapangan", isCorrect: false },
        { text: "Kecepatan kipas pendingin laptop di kantor pusat", isCorrect: false }
      ],
      explanation: "Perencanaan radio link memperhitungkan LoS, kebebasan Fresnel Zone, ketinggian menara terhadap kelengkungan bumi, redaman atmosfer, dan radio link budget.",
      quickTip: "Parameter microwave link: LoS, Fresnel Zone, dan kelengkungan bumi / tinggi menara."
    },
    {
      stimulus: "Menara telekomunikasi memiliki jenis struktur yang disesuaikan dengan kondisi geografis dan ketersediaan lahan.",
      question: "Manakah tipe struktur menara telekomunikasi berstandar industri? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Self-Supporting Tower (SST 3-Leg atau 4-Leg)", isCorrect: true },
        { text: "Guyed Mast Tower (menara dengan kawat penahan tarikan)", isCorrect: true },
        { text: "Monopole Tower (menara tiang tunggal kompak)", isCorrect: true },
        { text: "Pipa Paralon PVC 2 Inci", isCorrect: false },
        { text: "Pagar Kawat Harmonika Taman", isCorrect: false }
      ],
      explanation: "Tiga tipe menara telekomunikasi standar adalah SST (Self-Supporting Tower), Guyed Mast (dengan kawat spanner), dan Monopole.",
      quickTip: "Tiga jenis menara telko utama: SST, Guyed Mast, dan Monopole."
    },
    {
      stimulus: "Evolusi jaringan seluler telah membawa peningkatan signifikan dalam kecepatan dan fungsionalitas.",
      question: "Manakah istilah komponen stasiun pemancar seluler yang SESUAI dengan generasinya? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "eNodeB digunakan pada jaringan seluler generasi 4G LTE", isCorrect: true },
        { text: "gNodeB digunakan pada jaringan seluler generasi 5G NR", isCorrect: true },
        { text: "BTS digunakan pada jaringan satelit antariksa NASA", isCorrect: false },
        { text: "NodeB adalah pemancar radio walkie-talkie analog", isCorrect: false },
        { text: "eNodeB adalah nama protokol kabel LAN tembaga", isCorrect: false }
      ],
      explanation: "4G LTE menggunakan pemancar eNodeB (Evolved Node B), dan 5G New Radio menggunakan pemancar gNodeB (Next Generation Node B).",
      quickTip: "4G = eNodeB; 5G = gNodeB."
    }
  ],
  tf: [
    {
      stimulus: "Karakteristik propagasi gelombang mikro (Microwave Link).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai link microwave!",
      statements: [
        { text: "Komunikasi radio microwave mutlak memerlukan kondisi Line of Sight (LoS) tanpa penghalang.", correct: "B" },
        { text: "Rintangan yang memotong lebih dari 40% area Zona Fresnel Pertama dapat menimbulkan redaman difraksi parah.", correct: "B" },
        { text: "Gelombang mikro dapat menembus pegunungan granit padat tanpa kehilangan daya sama sekali.", correct: "S" }
      ],
      explanation: "Gelombang mikro tidak dapat menembus gunung atau tanah; rintangan fisik memblokir total transmisi microwave.",
      quickTip: "Microwave link butuh LoS dan Fresnel Zone bebas rintangan; tidak tembus gunung."
    },
    {
      stimulus: "Karakteristik transmisi satelit Geostasioner (GEO).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang satelit GEO!",
      statements: [
        { text: "Satelit Geostasioner berada pada orbit sekitar 36.000 km di atas garis khatulistiwa bumi.", correct: "B" },
        { text: "Latensi waktu tempuh bolak-balik (RTT) satelit GEO relatif tinggi, rata-rata mencapai 500-700 milidetik.", correct: "B" },
        { text: "Antena parabola VSAT di bumi harus terus berputar cepat 360 derajat mengikuti satelit GEO yang berpindah tempat setiap jam.", correct: "S" }
      ],
      explanation: "Satelit GEO tampak diam (stasioner) di langit terhadap bumi, sehingga antena parabola stasiun bumi cukup diarahkan tetap (fixed pointing).",
      quickTip: "Satelit GEO posisinya tetap di langit; antena parabola cukup diarahkan statis."
    },
    {
      stimulus: "Perbedaan sifat pita frekuensi C-Band dan Ku-Band pada VSAT.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai C-Band dan Ku-Band!",
      statements: [
        { text: "Pita frekuensi C-Band lebih tahan terhadap gangguan redaman hujan tropis dibanding Ku-Band.", correct: "B" },
        { text: "Pita frekuensi Ku-Band memungkinkan penggunaan ukuran antena parabola yang lebih kecil (kompak).", correct: "B" },
        { text: "Hujan badai tidak memiliki pengaruh sama sekali terhadap daya pancar Ku-Band di wilayah Indonesia.", correct: "S" }
      ],
      explanation: "Ku-Band sangat sensitif terhadap hujan badai tropis, sering memicu redaman parah (rain fade) hingga sinyal putus sementara.",
      quickTip: "Ku-Band sangat terpengaruh hujan badai (rain fade); C-Band tahan hujan."
    },
    {
      stimulus: "Penyetelan sudut pointing antena parabola VSAT.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penunjukan antena VSAT!",
      statements: [
        { text: "Sudut Azimuth adalah sudut kompas horizontal penunjuk arah mata angin antena.", correct: "B" },
        { text: "Sudut Elevasi adalah sudut kemiringan vertikal mendongak antena menghadap ke atas langit.", correct: "B" },
        { text: "Penyesuaian sudut polarisasi LNB tidak berpengaruh apa-apa terhadap kualitas sinyal yang diterima.", correct: "S" }
      ],
      explanation: "Ketidaktepatan sudut polarisasi (skew) membuat sinyal drop drastis dan memicu interferensi silang antar-polarisasi.",
      quickTip: "Pointing butuh ketepatan sudut Azimuth, Elevasi, dan Polarisasi (Skew) LNB."
    },
    {
      stimulus: "Sistem grounding dan keselamatan petir pada menara telekomunikasi.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pentanahan menara!",
      statements: [
        { text: "Sistem grounding menara berfungsi menyalurkan arus sambaran petir langsung ke dalam bumi dengan aman.", correct: "B" },
        { text: "Nilai resistansi pentanahan grounding menara telekomunikasi standar dipersyaratkan di bawah 5 Ohm.", correct: "B" },
        { text: "Semakin besar nilai hambatan Ohm pentanahan tanah, maka perlindungan terhadap petir akan semakin baik.", correct: "S" }
      ],
      explanation: "Semakin KECIL nilai resistansi grounding (mendekati 0 Ohm), semakin lancar arus petir terbuang ke tanah dan semakin baik proteksinya.",
      quickTip: "Grounding yang baik memiliki resistansi serendah mungkin (di bawah 5 Ohm)."
    }
  ]
};

const s13 = {
  sessionId: "s13",
  pg: [
    {
      stimulus: "Dalam arsitektur jaringan komputer, bentuk penataan fisik perkabelan dan alur perpindahan data memiliki pembedaan konsep.",
      question: "Pembedaan antara tata letak penempatan fisik kabel/perangkat dengan cara data mengalir di dalam jaringan disebut...",
      correctText: "Topologi Fisik (Physical Topology) dan Topologi Logik (Logical Topology)",
      distractors: [
        "Topologi Analog dan Topologi Digital",
        "Topologi Primer dan Topologi Sekunder",
        "Topologi Kabel dan Topologi Nirkabel",
        "Topologi Statis dan Topologi Dinamis"
      ],
      explanation: "Topologi Fisik menggambarkan penempatan nyata kabel dan perangkat, sedangkan Topologi Logik menggambarkan bagaimana frame data dikirim dan melintas di media.",
      quickTip: "Fisik = Jalur kabel nyata; Logik = Alur aliran data melintas."
    },
    {
      stimulus: "Topologi jaringan yang paling dominan digunakan pada instalasi Local Area Network (LAN) modern menggunakan switch sentral.",
      question: "Topologi di mana setiap komputer kerja terhubung secara mandiri ke satu perangkat pusat (Switch) disebut...",
      correctText: "Topologi Star (Bintang)",
      distractors: [
        "Topologi Bus",
        "Topologi Ring",
        "Topologi Mesh Penuh",
        "Topologi Linier Rantai"
      ],
      explanation: "Topologi Star menghubungkan semua host langsung ke titik konsentrator pusat (Switch). Jika satu kabel putus, hanya komputer itu yang terputus tanpa mengganggu yang lain.",
      quickTip: "Semua komputer terhubung ke satu Switch sentral = Topologi Star."
    },
    {
      stimulus: "Pada topologi jaringan Bus lawas yang menggunakan kabel coaxial tunggal, kedua ujung kabel utama wajib dipasang komponen khusus.",
      question: "Nama komponen penutup ujung kabel coaxial yang berfungsi menyerap pantulan sinyal (impedansi 50 Ohm) adalah...",
      correctText: "Terminator 50 Ohm",
      distractors: [
        "Injektor PoE",
        "Splitter Optik",
        "Konektor RJ-45",
        "Protector Sleeve"
      ],
      explanation: "Terminator di kedua ujung kabel bus mencegah terjadinya pantulan gelombang sinyal (signal bounce) yang dapat merusak transmisi frame data lain.",
      quickTip: "Penyerap pantulan sinyal di ujung kabel Bus = Terminator 50 Ohm."
    },
    {
      stimulus: "Topologi di mana setiap perangkat komputer terhubung ke dua perangkat tetangga membentuk jalur lingkaran tertutup searah disebut...",
      question: "Nama topologi lingkaran beranting tersebut adalah...",
      correctText: "Topologi Ring (Cincin)",
      distractors: [
        "Topologi Star",
        "Topologi Bus",
        "Topologi Mesh",
        "Topologi Tree"
      ],
      explanation: "Topologi Ring menghubungkan node dalam pola lingkaran tertutup, di mana data berputar melintasi tiap node (sering memanfaatkan mekanisme Token Passing).",
      quickTip: "Koneksi node membentuk lingkaran tertutup = Topologi Ring."
    },
    {
      stimulus: "Topologi jaringan yang memberikan tingkat keandalan tertinggi (fault tolerance) di mana setiap perangkat terhubung langsung ke semua perangkat lainnya.",
      question: "Nama topologi berkeandalan maksimal tersebut adalah...",
      correctText: "Topologi Full Mesh",
      distractors: [
        "Topologi Star",
        "Topologi Bus",
        "Topologi Tree",
        "Topologi Linier"
      ],
      explanation: "Full Mesh memiliki tautan redundan langsung ke setiap simpul, sehingga jika ada tautan putus, lalu lintas langsung dialihkan lewat jalur alternatif tanpa downtime.",
      quickTip: "Setiap perangkat terhubung ke seluruh perangkat lain = Topologi Full Mesh."
    },
    {
      stimulus: "Untuk menghitung jumlah tautan kabel (links) yang dibutuhkan pada jaringan Full Mesh dengan n buah perangkat router.",
      question: "Rumus matematis untuk menghitung jumlah sambungan fisik pada topologi Full Mesh adalah...",
      correctText: "n * (n - 1) / 2",
      distractors: [
        "n * 2",
        "n * (n + 1)",
        "n kuadrat (n^2)",
        "2 pangkat n (2^n)"
      ],
      explanation: "Rumus tautan kabel Full Mesh adalah N(N-1)/2. Contoh: untuk 6 router dibutuhkan 6*(5)/2 = 15 tautan kabel langsung.",
      quickTip: "Rumus jumlah kabel Full Mesh = n * (n - 1) / 2."
    },
    {
      stimulus: "Sebuah perusahaan memiliki 8 kantor cabang utama yang akan dihubungkan secara Full Mesh langsung antar-router.",
      question: "Berapa jumlah saluran tautan fisik langsung (links) yang harus disediakan oleh penyedia jasa jaringan?",
      correctText: "28 tautan link",
      distractors: [
        "8 tautan link",
        "16 tautan link",
        "56 tautan link",
        "64 tautan link"
      ],
      explanation: "Menggunakan rumus: 8 * (8 - 1) / 2 = 8 * 7 / 2 = 28 tautan link.",
      quickTip: "8 simpul Full Mesh = 8 * 7 / 2 = 28 link."
    },
    {
      stimulus: "Model desain jaringan hirarkis 3-lapisan (Three-Tier Hierarchical Network Design) Cisco membagi jaringan menjadi Core, Distribution, dan Access.",
      question: "Fungsi utama dari lapisan Core Layer pada arsitektur hierarkis tersebut adalah...",
      correctText: "Menyediakan pengalihan data berkecepatan tinggi (high-speed switching) tanpa melakukan penyaringan paket rumit",
      distractors: [
        "Menghubungkan langsung laptop dan printer karyawan",
        "Mengatur pembatasan kecepatan bandwidth per siswa",
        "Menjadi tempat pemasangan stopkontak listrik UPS",
        "Mengatur tata letak kabel patch cord di meja kerja"
      ],
      explanation: "Core Layer bertindak sebagai tulang punggung (backbone) super cepat, bertugas meneruskan traffic secepat mungkin tanpa dibebani proses filtering/ACL.",
      quickTip: "Core Layer = Backbone cepat tanpa pemfilteran kompleks (High-Speed Transport)."
    },
    {
      stimulus: "Pada arsitektur jaringan hierarkis 3-lapisan, lapisan yang bertanggung jawab mengimplementasikan routing antar-VLAN, Access Control List (ACL), dan kebijakan keamanan adalah...",
      question: "Nama lapisan pemroses kebijakan jaringan tersebut adalah...",
      correctText: "Distribution Layer (Aggregation Layer)",
      distractors: [
        "Core Layer",
        "Access Layer",
        "Physical Layer",
        "Edge Internet Layer"
      ],
      explanation: "Distribution Layer menghubungkan Access Layer ke Core Layer serta mengeksekusi routing antar-VLAN, filtering keamanan (ACL), QoS, dan aggregasi link.",
      quickTip: "Routing antar-VLAN dan filter kebijakan keamanan = Distribution Layer."
    },
    {
      stimulus: "Lapisan pada model hierarkis jaringan yang berhadapan langsung dengan komputer pengguna, IP phone, printer, dan Access Point nirkabel adalah...",
      question: "Nama lapisan terluar tempat perangkat akhir tersambung adalah...",
      correctText: "Access Layer",
      distractors: [
        "Core Layer",
        "Distribution Layer",
        "Backbone Layer",
        "Data Center Fabric"
      ],
      explanation: "Access Layer terdiri dari switch layer 2 yang menyediakan port koneksi langsung ke workstation pengguna, kontrol port security, dan segmentasi VLAN.",
      quickTip: "Port penghubung langsung ke komputer pengguna = Access Layer."
    },
    {
      stimulus: "Pada gedung bertingkat, kabel vertikal yang menghubungkan ruang server utama di lantai 1 dengan lemari rack distribusi di tiap lantai atas disebut...",
      question: "Nama subsistem perkabelan vertikal antar-lantai dalam sistem terstruktur gedung adalah...",
      correctText: "Backbone Cabling (Riser Subsystem)",
      distractors: [
        "Horizontal Cabling",
        "Work Area Cabling",
        "Campus Patching",
        "Console Interconnect"
      ],
      explanation: "Backbone (Riser) cabling menghubungkan ruang telekomunikasi (TR) antar-lantai ke ruang peralatan utama (MDF), umumnya menggunakan kabel serat optik kecepatan tinggi.",
      quickTip: "Kabel vertikal penghubung antar-lantai gedung = Backbone / Riser Cabling."
    },
    {
      stimulus: "Kabel jaringan mendatar yang dipasang dari lemari distribusi (Patch Panel) menuju stopkontak dinding (Wallplate) meja kerja pengguna disebut...",
      question: "Nama subsistem perkabelan mendatar di lantai gedung tersebut adalah...",
      correctText: "Horizontal Cabling",
      distractors: [
        "Backbone Cabling",
        "Entrance Facility",
        "Main Cross-Connect",
        "Undersea Cabling"
      ],
      explanation: "Horizontal Cabling membentang dari ruang telekomunikasi lantai ke area kerja pengguna di lantai yang sama (panjang maks permanen 90m).",
      quickTip: "Kabel mendatar dari rack lantai ke stopkontak meja = Horizontal Cabling."
    },
    {
      stimulus: "Jika terdapat dua jalur kabel yang menghubungkan dua switch secara bersamaan tanpa konfigurasi khusus, dapat terjadi perputaran paket tiada henti (switching loop).",
      question: "Bencana jaringan di mana frame broadcast berputar terus-menerus hingga melumpuhkan seluruh bandwidth switch dinamakan...",
      correctText: "Broadcast Storm",
      distractors: [
        "Data Encryption",
        "Network Segmentation",
        "DHCP Snooping",
        "Default Routing"
      ],
      explanation: "Looping fisik layer 2 menyebabkan frame broadcast digandakan dan berputar terus di jaringan (karena tidak ada TTL di frame Ethernet), memicu Broadcast Storm.",
      quickTip: "Loop kabel pada switch memicu badai paket = Broadcast Storm."
    },
    {
      stimulus: "Protokol standar industri (IEEE 802.1D) yang diciptakan untuk mencegah loop fisik pada topologi switch dengan cara memblokir port cadangan secara otomatis adalah...",
      question: "Nama protokol pencegah loop layer 2 tersebut adalah...",
      correctText: "STP (Spanning Tree Protocol)",
      distractors: [
        "BGP (Border Gateway Protocol)",
        "RIP (Routing Information Protocol)",
        "OSPF (Open Shortest Path First)",
        "DNS (Domain Name System)"
      ],
      explanation: "STP memonitor topologi mesh pada switch dan secara cerdas memblokir port redundan (blocking state) untuk mencegah loop, dan otomatis membukanya jika link utama putus.",
      quickTip: "Protokol pencegah switching loop = STP (Spanning Tree Protocol)."
    },
    {
      stimulus: "Pengembangan protokol STP yang mampu mempercepat waktu konvergensi jaringan dari 30-50 detik menjadi kurang dari 1-2 detik saat terjadi perubahan topologi adalah...",
      question: "Nama standar IEEE 802.1w protokol Spanning Tree berkecepatan tinggi tersebut adalah...",
      correctText: "RSTP (Rapid Spanning Tree Protocol)",
      distractors: [
        "Classic STP 802.1D",
        "HDLC Protocol",
        "PPP Multilink",
        "Frame Relay"
      ],
      explanation: "RSTP (IEEE 802.1w) mengurangi waktu konvergensi secara dramatis menggunakan mekanisme handshake proposal-agreement tanpa harus menunggu timer listening/learning lama.",
      quickTip: "Spanning Tree berkonvergensi cepat (<2 detik) = RSTP (Rapid STP / 802.1w)."
    },
    {
      stimulus: "Teknologi penggabungan beberapa port fisik switch menjadi satu tautan logis berkapasitas besar sekaligus menyediakan redundansi otomatis (IEEE 802.3ad) adalah...",
      question: "Nama protokol standar agregasi port jaringan tersebut adalah...",
      correctText: "LACP (Link Aggregation Control Protocol / EtherChannel)",
      distractors: [
        "DHCP Option 82",
        "ICMP Echo Protocol",
        "VTP (VLAN Trunking)",
        "SNMP v3 Monitor"
      ],
      explanation: "LACP menggabungkan hingga 8 port fisik menjadi satu bundel logis (EtherChannel/Trunk) untuk melipatgandakan bandwidth dan memberikan failover instan.",
      quickTip: "Menggabungkan beberapa port switch menjadi 1 link besar = LACP (Link Aggregation)."
    },
    {
      stimulus: "Topologi jaringan di mana cabang-cabang kantor kecil (Spoke) seluruhnya terhubung secara terpusat ke kantor pusat utama (Hub) dinamakan...",
      question: "Model arsitektur jaringan WAN tersebut dikenal dengan nama...",
      correctText: "Topologi Hub-and-Spoke",
      distractors: [
        "Topologi Full Mesh",
        "Topologi Peer-to-Peer",
        "Topologi Daisy Chain",
        "Topologi Bus Coaxial"
      ],
      explanation: "Hub-and-Spoke menempatkan satu situs pusat (Hub) yang melayani lalu lintas komunikasi dari seluruh kantor cabang terpencil (Spokes), sangat efisien biaya dibanding Full Mesh.",
      quickTip: "Kantor cabang terhubung terpusat ke satu kantor utama = Topologi Hub-and-Spoke."
    },
    {
      stimulus: "Pada topologi fisik Ring, jika salah satu kabel lingkaran putus maka seluruh jaringan dapat terhenti.",
      question: "Solusi arsitektur redundansi pada jaringan Ring modern (seperti FDDI atau SONET/SDH) untuk mencegah putusnya layanan adalah...",
      correctText: "Menggunakan Dual-Ring (Dua Jalur Cincin Berlawanan Arah / Counter-Rotating)",
      distractors: [
        "Menghilangkan semua komputer cadangan",
        "Mengganti kabel serat optik dengan tali rami",
        "Mematikan daya seluruh perangkat setiap jam",
        "Menyambungkan seluruh kabel ke soket stopkontak"
      ],
      explanation: "Dual-Ring memiliki cincin primer dan sekunder berlawanan arah. Jika ada titik putus, cincin sekunder otomatis berputar balik (self-healing wrap) mengisolasi kerusakan.",
      quickTip: "Arsitektur Ring anti-putus = Dual-Ring (Counter-Rotating Ring)."
    },
    {
      stimulus: "Topologi jaringan Tree (Pohon / Hierarkis) pada dasarnya merupakan integrasi dan perluasan dari gabungan dua topologi dasar.",
      question: "Dua topologi dasar yang membentuk topologi Tree adalah gabungan antara...",
      correctText: "Topologi Star dan Topologi Bus",
      distractors: [
        "Topologi Ring dan Topologi Mesh",
        "Topologi Coaxial dan Topologi Nirkabel",
        "Topologi Fisik dan Topologi Logik",
        "Topologi Simplex dan Topologi Duplex"
      ],
      explanation: "Topologi Tree menggabungkan beberapa jaringan Star yang saling dihubungkan melalui kabel backbone utama (seperti topologi Bus).",
      quickTip: "Topologi Tree = Gabungan beberapa Topologi Star pada kabel tulang punggung (Bus)."
    },
    {
      stimulus: "Dalam ruang data center, topologi interkoneksi modern yang menghubungkan setiap switch akses rak (Leaf) ke seluruh switch backbone utama (Spine) disebut...",
      question: "Nama arsitektur topologi data center generasi baru tersebut adalah...",
      correctText: "Topologi Spine-and-Leaf Fabric",
      distractors: [
        "Topologi Bus Coaxial",
        "Topologi Token Ring",
        "Topologi Dial-Up Point",
        "Topologi Linier Paralel"
      ],
      explanation: "Spine-Leaf menjamin bahwa setiap server hanya berjarak tepat 1 hop dari server lainnya di data center, sangat optimal untuk lalu lintas traffic horizontal (East-West).",
      quickTip: "Topologi modern data center antar-rak server = Spine-and-Leaf Architecture."
    }
  ],
  mcma: [
    {
      stimulus: "Setiap topologi jaringan memiliki kelebihan dan kekurangan karakteristik fisik.",
      question: "Manakah pernyataan yang BENAR mengenai kelebihan dan karakteristik Topologi Star? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Kemudahan isolasi gangguan: jika satu kabel komputer putus, komputer lain tidak terganggu", isCorrect: true },
        { text: "Pengelolaan dan penambahan node baru sangat mudah dilakukan cukup dengan menancapkan kabel ke switch", isCorrect: true },
        { text: "Kebutuhan panjang kabel sangat sedikit dibanding topologi Bus", isCorrect: false },
        { text: "Jika konsentrator pusat (Switch) mati, seluruh komputer tetap dapat saling berkomunikasi normal", isCorrect: false },
        { text: "Wajib menggunakan terminator 50 Ohm di setiap ujung kartu jaringan komputer", isCorrect: false }
      ],
      explanation: "Topologi Star mudah dikelola dan gangguan lokal tidak memutus jaringan lain. Kelemahannya adalah ketergantungan pada switch pusat (single point of failure) dan kebutuhan kabel banyak.",
      quickTip: "Topologi Star: Mudah diisolasi & mudah dikembangkan; titik kritis ada di Switch pusat."
    },
    {
      stimulus: "Tiga tingkatan arsitektur hierarkis jaringan (Three-Tier Cisco Hierarchical Model) memiliki pembagian tugas terstruktur.",
      question: "Manakah pasangan nama lapisan dan fungsi utamanya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Core Layer bertugas meneruskan traffic data backbone secepat mungkin (Fast Transport)", isCorrect: true },
        { text: "Distribution Layer bertugas mengelola routing antar-VLAN, filtering ACL, dan QoS", isCorrect: true },
        { text: "Access Layer bertugas menyediakan port akses fisik bagi perangkat akhir pengguna (End Devices)", isCorrect: true },
        { text: "Core Layer bertugas membatasi hak akses port switch ke printer pengguna", isCorrect: false },
        { text: "Access Layer bertugas merutekan paket antar-kantor cabang lintas benua", isCorrect: false }
      ],
      explanation: "Core: fast backbone transport; Distribution: policy/routing/security; Access: konektivitas langsung ke PC/user.",
      quickTip: "Hierarki 3-Tier: Core (Cepat), Distribution (Kebijakan & Routing), Access (Koneksi Pengguna)."
    },
    {
      stimulus: "Topologi Mesh sering digunakan pada jaringan backbone antar-kantor pusat bank atau penyedia internet.",
      question: "Manakah karakteristik dari topologi Full Mesh? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Memiliki toleransi kesalahan (fault tolerance) dan redundansi jalur paling tinggi", isCorrect: true },
        { text: "Biaya instalasi perkabelan dan jumlah interface port router sangat tinggi seiring bertambahnya node", isCorrect: true },
        { text: "Jika satu kabel putus, seluruh kantor cabang langsung lumpuh total", isCorrect: false },
        { text: "Hanya membutuhkan tepat 1 kabel utama untuk seluruh kantor di dunia", isCorrect: false },
        { text: "Hanya dapat menghubungkan maksimal 3 unit perangkat saja", isCorrect: false }
      ],
      explanation: "Full Mesh sangat andal karena memiliki jalur redundan langsung ke setiap simpul, namun biayanya sangat tinggi karena banyaknya kabel n*(n-1)/2 yang harus digelar.",
      quickTip: "Full Mesh: Redundansi tertinggi dan paling tahan putus, namun biaya paling mahal."
    },
    {
      stimulus: "Looping pada jaringan switch dapat berakibat fatal bagi kelangsungan operasional komunikasi data.",
      question: "Manakah dampak buruk yang terjadi jika timbul Switching Loop pada jaringan Layer 2 tanpa STP? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Broadcast Storm (badai broadcast) yang membanjiri dan menghabiskan bandwidth jaringan", isCorrect: true },
        { text: "Ketidakstabilan tabel MAC Address (MAC Database Instability / MAC Flapping)", isCorrect: true },
        { text: "Penggandaan transmisi frame ganda (Multiple Frame Transmission) yang membebani host", isCorrect: true },
        { text: "Router otomatis merubah alamat IP menjadi sistem IPv6", isCorrect: false },
        { text: "Komputer pengguna langsung terformat sistem operasinya secara otomatis", isCorrect: false }
      ],
      explanation: "Loop Layer 2 menyebabkan: 1. Broadcast storm, 2. Frame ganda, 3. MAC table flapping pada switch. Tidak ada pengaruh terhadap format OS komputer.",
      quickTip: "Dampak loop switch: Broadcast Storm, Frame ganda, dan MAC table flapping."
    },
    {
      stimulus: "Subsistem pengkabelan terstruktur gedung (Structured Cabling System) menurut standar ANSI/TIA-568.",
      question: "Manakah subsistem yang TERMASUK dalam standar arsitektur perkabelan terstruktur gedung? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Horizontal Cabling (kabel mendatar dari ruang telekomunikasi ke meja kerja)", isCorrect: true },
        { text: "Backbone Cabling / Riser (kabel vertikal penghubung antar-lantai atau antar-gedung)", isCorrect: true },
        { text: "Work Area (komponen kabel patch cord dan faceplate di meja pengguna)", isCorrect: true },
        { text: "High Voltage Transmission Subsystem (kabel transmisi listrik gardu induk PLN)", isCorrect: false },
        { text: "Submarine International Cable (kabel bawah laut benua)", isCorrect: false }
      ],
      explanation: "Standar ANSI/TIA-568 mendefinisikan subsistem gedung: Horizontal Cabling, Backbone Cabling, Work Area, Telecommunications Room, Equipment Room, dan Entrance Facility.",
      quickTip: "Subsistem perkabelan gedung: Horizontal, Backbone/Riser, Work Area, dan TR."
    }
  ],
  tf: [
    {
      stimulus: "Perbedaan Topologi Fisik dan Topologi Logik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai topologi fisik vs logik!",
      statements: [
        { text: "Topologi Fisik menjelaskan penataan tata letak fisik kabel dan perangkat secara nyata di ruangan.", correct: "B" },
        { text: "Sebuah jaringan dapat memiliki topologi fisik Star namun secara logik beroperasi seperti topologi Bus atau Ring.", correct: "B" },
        { text: "Topologi Fisik dan Topologi Logik selalu wajib identik persis bentuknya dalam setiap implementasi jaringan.", correct: "S" }
      ],
      explanation: "Sebagai contoh: jaringan dengan Hub fisik berbentuk Star, namun sinyalnya di broadcast ke semua port secara logik Bus.",
      quickTip: "Topologi fisik dan logik bisa berbeda (contoh: fisik Star, logik Bus/Ring)."
    },
    {
      stimulus: "Pencegahan looping switch menggunakan Spanning Tree Protocol (STP).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai protokol STP!",
      statements: [
        { text: "STP (IEEE 802.1D) mencegah terjadinya broadcast storm dengan memblokir port cadangan redundan.", correct: "B" },
        { text: "RSTP (IEEE 802.1w) memiliki waktu konvergensi yang jauh lebih cepat dibanding STP tradisional.", correct: "B" },
        { text: "STP adalah protokol yang digunakan untuk mengatur pemberian alamat IP otomatis ke laptop klien.", correct: "S" }
      ],
      explanation: "Pemberian IP otomatis ke klien adalah tugas DHCP Server, bukan Spanning Tree Protocol.",
      quickTip: "STP mencegah loop Layer 2 switch; pemberian IP adalah tugas DHCP."
    },
    {
      stimulus: "Arsitektur desain jaringan hierarkis 3-lapisan (Core, Distribution, Access).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai model hierarki Cisco!",
      statements: [
        { text: "Access Layer adalah lapisan switch tempat komputer pengguna dan printer langsung terhubung.", correct: "B" },
        { text: "Core Layer dirancang untuk mengalirkan traffic secepat mungkin tanpa dibebani proses filtering yang rumit.", correct: "B" },
        { text: "Pada model hierarkis, seluruh komputer pengguna harus dicolokkan langsung ke port switch Core Layer.", correct: "S" }
      ],
      explanation: "Komputer pengguna dilarang dicolok langsung ke Core Layer demi menjaga stabilitas dan performa kecepatan backbone switch.",
      quickTip: "Komputer pengguna tersambung ke Access Layer, bukan ke Core Layer."
    },
    {
      stimulus: "Perhitungan jumlah sambungan pada topologi Full Mesh.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang perhitungan jaringan Mesh!",
      statements: [
        { text: "Rumus matematis untuk menentukan jumlah link fisik pada topologi Full Mesh adalah n * (n - 1) / 2.", correct: "B" },
        { text: "Untuk menghubungkan 5 router secara Full Mesh, dibutuhkan tepat 10 tautan kabel langsung.", correct: "B" },
        { text: "Topologi Full Mesh hanya memerlukan tepat 1 kabel untuk menghubungkan 100 router di seluruh dunia.", correct: "S" }
      ],
      explanation: "Untuk 5 router: 5 * 4 / 2 = 10 link. Untuk 100 router Full Mesh dibutuhkan 100*99/2 = 4.950 link kabel.",
      quickTip: "5 simpul Full Mesh = 5 * 4 / 2 = 10 tautan."
    },
    {
      stimulus: "Teknologi agregasi tautan LACP (Link Aggregation Control Protocol).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang LACP!",
      statements: [
        { text: "LACP menggabungkan beberapa link kabel fisik menjadi satu tautan logis berkapasitas gabungan yang lebih besar.", correct: "B" },
        { text: "Jika salah satu kabel pada bundel LACP putus, koneksi tidak putus dan data tetap mengalir melalui kabel sisanya.", correct: "B" },
        { text: "LACP hanya bisa digunakan jika kabel yang dipakai adalah kabel listrik PLN 220 Volt.", correct: "S" }
      ],
      explanation: "LACP adalah protokol agregasi antarmuka Ethernet telekomunikasi (IEEE 802.3ad/802.1AX), bukan sistem perkabelan listrik PLN.",
      quickTip: "LACP menggabungkan beberapa link Ethernet untuk memperbesar bandwidth dan redundansi."
    }
  ]
};

const s14 = {
  sessionId: "s14",
  pg: [
    {
      stimulus: "Sebuah kampus universitas merencanakan interkoneksi jaringan antara Gedung Rektorat dan Gedung Fakultas baru yang berjarak 3.5 kilometer melintasi jalan raya kota.",
      question: "Solusi media transmisi yang paling handal dengan kapasitas bandwidth gigabit jangka panjang dan bebas interferensi cuaca untuk kasus tersebut adalah...",
      correctText: "Kabel Serat Optik Single-Mode (SMF) dengan jalur udara ADSS atau tanam duct sub-terrestrial",
      distractors: [
        "Kabel tembaga UTP Cat6 disambung berantai dengan puluhan switch di jalan",
        "Kabel coaxial RG-59 TV kabel lama",
        "Kabel telepon 2-kawat tembaga telanjang",
        "Kabel audio speaker stereo fleksibel"
      ],
      explanation: "Jarak 3.5 km melampaui batas kabel tembaga (100 m). Kabel fiber optik Single-Mode adalah pilihan standar industri terbaik untuk jangkauan multi-kilometer berkecepatan tinggi.",
      quickTip: "Interkoneksi antar-gedung jarak 3.5 km = Fiber Optik Single-Mode (SMF)."
    },
    {
      stimulus: "Sebuah perusahaan tambang di pedalaman Kalimantan yang belum memiliki jalur kabel optik dan BTS seluler membutuhkan akses internet untuk operasional kantor.",
      question: "Media transmisi telekomunikasi yang paling realistis dan cepat diimplementasikan untuk menyediakan koneksi di daerah terpencil tersebut adalah...",
      correctText: "Sistem Komunikasi Satelit VSAT (C-Band atau Ku-Band)",
      distractors: [
        "Menarik kabel LAN UTP Cat5e melintasi hutan sejauh 500 km",
        "Menggunakan pemancar Wi-Fi rumahan 2.4 GHz tanpa antena luar",
        "Menunggu jaringan kabel telepon tembaga analog dipasang",
        "Menggunakan kabel HDMI panjang dari kota terdekat"
      ],
      explanation: "Wilayah terpencil (blank spot 3T) yang belum terjangkau infrastruktur terestrial hanya dapat dihubungkan menggunakan stasiun bumi satelit VSAT.",
      quickTip: "Koneksi internet wilayah terpencil / blank spot = Satelit VSAT."
    },
    {
      stimulus: "Laboratorium komputer sekolah mengalami penurunan kecepatan internet drastis saat seluruh 40 siswa serentak menonton video edukasi melalui satu Access Point 2.4 GHz.",
      question: "Langkah optimalisasi arsitektur nirkabel yang paling tepat untuk mengatasi kepadatan klien (high density) di laboratorium tersebut adalah...",
      correctText: "Menggunakan Access Point Dual-Band (2.4 GHz dan 5 GHz) berstandar Wi-Fi 6 (802.11ax) serta mengaktifkan fitur Band Steering",
      distractors: [
        "Mengganti antena Access Point dengan kawat jemuran besi",
        "Mematikan fungsi password Wi-Fi agar koneksi menjadi lebih cepat",
        "Menurunkan kecepatan internet provider menjadi paket paling lambat",
        "Mewajibkan siswa membuka casing laptop saat belajar"
      ],
      explanation: "Band steering mengarahkan perangkat modern ke pita 5 GHz yang bersih dan luas, sementara Wi-Fi 6 memanfaatkan OFDMA untuk melayani banyak klien secara serempak.",
      quickTip: "Mengatasi kepadatan klien Wi-Fi lab = AP Dual-Band Wi-Fi 6 dan fitur Band Steering."
    },
    {
      stimulus: "Teknisi mendapati lampu indikator semua port pada sebuah switch unmanaged berkedip sangat cepat secara serentak, dan seluruh jaringan lumpuh.",
      question: "Penyebab paling mungkin dari insiden Broadcast Storm yang melumpuhkan switch tersebut adalah...",
      correctText: "Terjadi switching loop akibat seorang pengguna menancapkan kedua ujung satu kabel patch cord ke dua port pada switch yang sama",
      distractors: [
        "Kabel listrik stopkontak dinding terpasang longgar",
        "Lampu penerangan ruangan lab dinyalakan bersamaan",
        "Kecepatan mouse komputer disetel terlalu tinggi",
        "Suhu AC ruangan lab disetel pada 24 derajat Celsius"
      ],
      explanation: "Switch unmanaged tanpa Spanning Tree Protocol (STP) jika portnya terhubung loop (satu kabel dicolok ke dua port switch) akan langsung mengalami badai broadcast.",
      quickTip: "Lampu port switch kedip serentak dan jaringan hang = Switching Loop (Broadcast Storm)."
    },
    {
      stimulus: "Sebuah link radio nirkabel Point-to-Point 5 GHz antar-gedung yang semula berjalan lancar tiba-tiba mengalami lonjakan packet loss parah setelah 6 bulan beroperasi.",
      question: "Faktor lingkungan alami yang paling sering menjadi penyebab terganggunya link radio LoS seiring berjalannya waktu adalah...",
      correctText: "Tumbuhnya dahan pepohonan rimbun yang mulai masuk menutupi clearance Zona Fresnel pertama",
      distractors: [
        "Bumi berputar mengelilingi matahari lebih cepat",
        "Cat tembok gedung diganti dengan warna biru muda",
        "Arah tiupan angin laut berubah arah",
        "Tekanan udara atmosfer turun 1 milibar"
      ],
      explanation: "Pertumbuhan pohon sering kali tanpa disadari memotong elipsoid Zona Fresnel pertama, menyebabkan difraksi dan pelemahan sinyal yang memicu packet loss.",
      quickTip: "Link radio antar-gedung tiba-tiba drop setelah berbulan-bulan = Pohon menembus Zona Fresnel."
    },
    {
      stimulus: "Pada gedung perkantoran 8 lantai, teknisi merencanakan perkabelan terstruktur untuk menghubungkan switch distribusi tiap lantai ke ruang server pusat di lantai 1.",
      question: "Pemilihan media transmisi yang paling tepat untuk jalur vertikal backbone (riser) gedung tersebut adalah...",
      correctText: "Kabel Serat Optik Multi-Mode (OM3/OM4) atau Single-Mode dengan kecepatan 10G/40G",
      distractors: [
        "Kabel telepon 2-kawat tembaga",
        "Kabel coaxial tebal 10BASE5 lama",
        "Kabel UTP Cat3 kecepatan 10 Mbps",
        "Kabel patch cord fleksibel tipis disambung selotip"
      ],
      explanation: "Backbone vertikal antar-lantai menampung agregasi lalu lintas seluruh pengguna gedung sehingga membutuhkan bandwidth besar dan kekebalan derau serat optik (OM3/OM4/SMF).",
      quickTip: "Backbone vertikal antar-lantai gedung bertingkat = Kabel Serat Optik (10G/40G)."
    },
    {
      stimulus: "Pengujian kabel LAN Cat6 sepanjang 80 meter menggunakan tester profesional menunjukkan kegagalan pada parameter Near-End Crosstalk (NEXT Fail).",
      question: "Kesalahan teknis saat terminasi konektor RJ-45 yang paling berpotensi menyebabkan kegagalan parameter NEXT tersebut adalah...",
      correctText: "Teknisi mengurai lilitan kawat (untwist) terlalu panjang melebihi batas 1.3 cm sebelum memasukkannya ke pin konektor",
      distractors: [
        "Teknisi memotong kabel menggunakan gunting tajam",
        "Jaket luar kabel dibersihkan dengan kain bersih",
        "Warna konektor RJ-45 transparan bening",
        "Kabel ditarik lurus di dalam pipa konduit"
      ],
      explanation: "Pemelintiran kawat berfungsi mereduksi crosstalk. Mengurai lilitan kawat terlalu panjang saat memasang jack RJ-45 akan merusak efek pembatalan derau dan memicu NEXT Fail.",
      quickTip: "Penyebab kegagalan uji crosstalk (NEXT Fail) = Mengurai lilitan kawat terlalu panjang."
    },
    {
      stimulus: "Sebuah kantor instansi pemerintah ingin menghubungkan 4 gedung dalam satu kawasan kompleks dengan persyaratan tidak boleh ada satu titik kegagalan (no single point of failure).",
      question: "Topologi jaringan antar-gedung yang paling tepat memenuhi kriteria toleransi kesalahan tinggi tersebut adalah...",
      correctText: "Topologi Mesh (Full Mesh atau Partial Mesh dengan redundansi link)",
      distractors: [
        "Topologi Bus Linier dengan kabel coaxial tunggal",
        "Topologi Star tanpa switch cadangan",
        "Topologi Daisy Chain berderet satu arah",
        "Topologi Point-to-Point tunggal tanpa cadangan"
      ],
      explanation: "Topologi Mesh menyediakan jalur koneksi alternatif langsung. Jika salah satu link antar-gedung terputus (misal terkena galian tanah), traffic otomatis dialihkan lewat gedung lain.",
      quickTip: "Koneksi antar-gedung tanpa single point of failure = Topologi Mesh redundan."
    },
    {
      stimulus: "Teknisi memasang kabel serat optik patch cord Single-Mode dari ODF ke port transceiver switch, namun lampu indikator link tidak menyala sama sekali.",
      question: "Pemeriksaan dasar yang paling pertama harus dilakukan teknisi pada kabel patch cord tersebut adalah...",
      correctText: "Memastikan jalur serat Transmit (TX) dan Receive (RX) tidak tertukar (polaritas terbalik) pada konektor duplex",
      distractors: [
        "Mencuci kabel di dalam ember air sabun",
        "Mengganti seluruh kabel power listrik gedung",
        "Memutar posisi antena router Wi-Fi 90 derajat",
        "Menghapus seluruh file dokumen di komputer server"
      ],
      explanation: "Pada patch cord optik duplex, port TX di pemancar harus terhubung ke port RX di penerima. Jika TX terhubung ke TX dan RX ke RX, link optik tidak akan pernah UP.",
      quickTip: "Link optik mati padahal kabel utuh = Periksa polaritas TX dan RX (jangan sampai tertukar)."
    },
    {
      stimulus: "Sebuah link antena VSAT Ku-Band di kantor cabang mengalami putus koneksi (link down) setiap kali turun hujan deras selama 30 menit, lalu kembali normal saat hujan reda.",
      question: "Analisis teknis yang paling tepat mengenai penyebab gangguan berkala tersebut adalah...",
      correctText: "Terjadi fenomena Rain Fade yang menyerap gelombang mikro frekuensi tinggi Ku-Band saat hujan lebat",
      distractors: [
        "Kabel modem di dalam ruangan terendam banjir setinggi 2 meter",
        "Satelit di orbit luar angkasa basah kuyup terkena hujan bumi",
        "Listrik genset kantor cabang padam karena tersambar petir",
        "Pengguna membuka situs web terlarang di komputer"
      ],
      explanation: "Frekuensi Ku-Band (12-14 GHz) mengalami redaman drastis akibat tetesan air hujan (rain fade). Solusinya adalah menaikkan power margin, memperbesar dish, atau beralih ke C-Band.",
      quickTip: "Koneksi VSAT Ku-Band putus saat hujan lebat = Fenomena Rain Fade."
    },
    {
      stimulus: "Di lingkungan bengkel mesin industri otomotif dengan banyak mesin las listrik dan motor induksi berkekuatan besar, kabel jaringan UTP biasa sering mengalami kerusakan data paket (CRC Error).",
      question: "Solusi penggantian media transmisi kabel tembaga yang paling tepat untuk mengatasi gangguan interferensi industri berat tersebut adalah...",
      correctText: "Mengganti kabel dengan jenis STP / S-FTP berpelindung logam dan memastikan sistem grounding terpasang sempurna",
      distractors: [
        "Mengganti kabel dengan kawat jemuran aluminium telanjang",
        "Menambah panjang kabel UTP hingga 200 meter",
        "Mengupas kulit jaket kabel UTP agar hawa panas keluar",
        "Memasang magnet kulkas di sepanjang kabel LAN"
      ],
      explanation: "Kabel S/FTP memiliki pelindung aluminium foil per pair dan anyaman tembaga terluar yang jika digrounding dengan baik akan memblokir interferensi elektromagnetik (EMI) mesin industri.",
      quickTip: "Area gangguan derau mesin pabrik = Kabel S/FTP (Shielded) dengan grounding baik."
    },
    {
      stimulus: "Sebuah stasiun radio komunikasi Point-to-Point 2.4 GHz di area perumahan padat sering mengalami packet loss tinggi meskipun kekuatan sinyal terukur kuat (-58 dBm).",
      question: "Penyebab paling mungkin dari gangguan koneksi pada sinyal kuat tersebut adalah...",
      correctText: "Tingginya tingkat kebisingan derau interferensi lingkungan (Noise Floor tinggi akibat kepadatan Wi-Fi perumahan)",
      distractors: [
        "Kekuatan baterai laptop teknisi melebihi 100%",
        "Frekuensi gelombang radio terserap oleh lantai keramik",
        "Kabel fiber optik di dalam tanah mengalami kebekuan",
        "Antena radio terpasang terlalu tinggi di awan"
      ],
      explanation: "Meskipun RSSI kuat (-58 dBm), jika noise floor lingkungan sangat tinggi (-65 dBm akibat ratusan AP tetangga di 2.4 GHz), maka nilai SNR menjadi sangat rendah (<10 dB), memicu packet loss parah.",
      quickTip: "Sinyal kuat tapi packet loss tinggi = Derau lingkungan (Noise Floor) tinggi (SNR rendah)."
    },
    {
      stimulus: "Teknisi memasang kabel drop optik FTTH ke rumah pelanggan dan melakukan penarikan dengan cara ditekuk patah mengitari sudut runcing kusen jendela.",
      question: "Dampak langsung yang terukur pada Optical Power Meter (OPM) di sisi pelanggan akibat tekukan tajam tersebut adalah...",
      correctText: "Terjadi lonjakan redaman macrobending yang membuat daya terima sinyal optik drop di bawah batas sensitivitas ONT",
      distractors: [
        "Daya optik otomatis naik menjadi sepuluh kali lipat lebih kuat",
        "Warna jaket kabel berubah warna menjadi hijau menyala",
        "Kabel mengeluarkan percikan api dan membakar kusen kayu",
        "Sinyal optik berubah menjadi sinyal gelombang radio FM"
      ],
      explanation: "Sudut tekukan tajam (macrobending) membuat berkas cahaya membias keluar menembus cladding, menimbulkan redaman sangat tinggi (bisa lebih dari 10 dB).",
      quickTip: "Tekukan tajam kabel optik di sudut kusen = Lonjakan redaman Macrobending."
    },
    {
      stimulus: "Sebuah perusahaan memiliki dua switch core yang dihubungkan dengan 4 kabel UTP Cat6 sekaligus untuk menambah kapasitas bandwidth, namun switch sering hang dan macet.",
      question: "Konfigurasi yang WAJIB diaktifkan pada port-port penghubung switch tersebut agar ke-4 kabel bekerja sebagai satu jalur agregasi tanpa memicu loop adalah...",
      correctText: "Mengaktifkan Link Aggregation Control Protocol (LACP / EtherChannel)",
      distractors: [
        "Mengaktifkan DHCP Server di ke-4 port",
        "Mengatur IP Address yang sama pada setiap port",
        "Menonaktifkan seluruh port switch",
        "Memasang konektor crossover di salah satu ujung saja"
      ],
      explanation: "Menghubungkan 4 kabel antar-switch tanpa LACP akan memicu switching loop jika STP mati, atau 3 kabel akan diblokir jika STP aktif. LACP menggabungkan ke-4 kabel menjadi satu pipa besar 4 Gbps.",
      quickTip: "4 kabel antar-switch agar tidak loop dan bandwidth berlipat = Konfigurasi LACP (EtherChannel)."
    },
    {
      stimulus: "Pada arsitektur jaringan sekolah, teknisi ingin memisahkan lalu lintas jaringan ruang guru, ruang laboratorium, dan jaringan tamu umum tanpa menambah switch fisik baru.",
      question: "Teknologi segmentasi jaringan logis yang paling tepat diterapkan pada switch yang sama adalah...",
      correctText: "Virtual Local Area Network (VLAN IEEE 802.1Q)",
      distractors: [
        "Power over Ethernet (PoE)",
        "Dynamic DNS Update",
        "Network Address Translation (NAT)",
        "Spanning Tree PortFast"
      ],
      explanation: "VLAN memungkinkan pemisahan domain broadcast secara logis pada satu switch fisik yang sama, meningkatkan keamanan dan efisiensi jaringan.",
      quickTip: "Memisahkan jaringan beda fungsi pada 1 switch fisik = Virtual LAN (VLAN)."
    },
    {
      stimulus: "Saat menghubungkan switch lantai 1 ke switch lantai 2 yang membawa beberapa data VLAN berbeda (VLAN Guru dan VLAN Siswa) melalui satu kabel penghubung tunggal.",
      question: "Tipe mode port switch yang harus dikonfigurasikan pada kabel penghubung antar-switch tersebut adalah...",
      correctText: "Mode Trunk (Trunking Port IEEE 802.1Q)",
      distractors: [
        "Mode Access Port tunggal",
        "Mode Console Auxiliary",
        "Mode Loopback Interface",
        "Mode Half Duplex Hub"
      ],
      explanation: "Port Trunk membawa frame dari banyak VLAN dengan menyematkan tag identitas VLAN ID (802.1Q) di header paket saat melintasi kabel antar-switch.",
      quickTip: "Kabel antar-switch yang membawa banyak VLAN = Port Mode Trunk."
    },
    {
      stimulus: "Kabel jaringan horizontal UTP yang ditarik melewati plafon ruangan pabrik ternyata diletakkan menempel sejajar persis dengan kabel transmisi listrik 380V motor mesin selama 40 meter.",
      question: "Masalah transmisi data yang timbul akibat pemasangan yang melanggar SOP jarak pemisah kabel tersebut adalah...",
      correctText: "Induksi interferensi elektromagnetik (EMI) dari kabel listrik merusak sinyal data, memicu tingginya frame corrupt dan drop packet",
      distractors: [
        "Kabel data akan menyedot arus listrik dan meledakkan komputer",
        "Kabel listrik akan otomatis terputus aliran dayanya",
        "Kecepatan transfer data bertambah cepat seiring tingginya tegangan",
        "Warna jaket kabel data akan menyatu dengan kabel listrik"
      ],
      explanation: "Arus bolak-balik (AC) tegangan tinggi memancarkan medan elektromagnetik kuat yang menginduksi tegangan liar ke kabel UTP, merusak frame data Ethernet.",
      quickTip: "Kabel UTP menempel kabel listrik industri = Gangguan induksi elektromagnetik (EMI) parah."
    },
    {
      stimulus: "Untuk menjamin kelangsungan koneksi internet kantor pusat perbankan (High Availability), perusahaan berlangganan dua ISP berbeda melalui dua media fisik terpisah.",
      question: "Kombinasi dua media fisik transmisi yang paling ideal untuk redundansi jalur (Failover) di kantor pusat perbankan adalah...",
      correctText: "Jalur utama menggunakan Kabel Fiber Optik Bawah Tanah (Duct) dan jalur cadangan menggunakan Radio Microwave / Satelit Nirkabel",
      distractors: [
        "Jalur utama dan cadangan ditarik dalam satu pipa paralon kecil yang sama",
        "Keduanya menggunakan kabel telepon tembaga dari tiang yang sama",
        "Menggunakan dua kabel USB flashdisk yang dicolokkan berdampingan",
        "Menggunakan dua kabel LAN UTP yang diikat lakban menjadi satu"
      ],
      explanation: "Prinsip diverse routing mensyaratkan media dan jalur fisik yang berbeda total. Jika kabel optik putus terkena galian alat berat, jalur radio nirkabel di udara tetap beroperasi normal.",
      quickTip: "Redundansi internet ideal = Jalur utama Fiber Optik bawah tanah + Jalur cadangan Radio nirkabel."
    },
    {
      stimulus: "Pada pengukuran kualitas sambungan serat optik menggunakan OTDR, grafik menunjukkan penurunan garis yang sangat curam di satu titik tanpa adanya lonjakan refleksi.",
      question: "Jenis kejadian (event) pada kabel serat optik yang ditunjukkan oleh grafik penurunan curam tanpa refleksi tersebut adalah...",
      correctText: "Non-Reflective Event (seperti Sambungan Fusion Splice atau Tekukan Macrobending)",
      distractors: [
        "Reflective Event (Konektor Mekanik)",
        "Ujung Terbuka Kabel Putus (Fiber End)",
        "Hubung Singkat Arus Listrik",
        "Tabrakan Paket Data (Collision)"
      ],
      explanation: "Fusion splice yang sempurna atau macrobending menyebabkan redaman (penurunan dB) tanpa memantulkan cahaya balik (non-reflective event), terlihat sebagai undakan turun pada OTDR.",
      quickTip: "Undakan turun tanpa lonjakan spike pada OTDR = Non-Reflective Event (Splice / Bending)."
    },
    {
      stimulus: "Seorang administrator jaringan menemukan bahwa pengguna di meja kerja nomor 12 tidak dapat terhubung ke server internal, sedangkan pengguna di meja nomor 11 dan 13 lancar.",
      question: "Urutan langkah isolasi troubleshooting yang paling efektif dan sistematis menurut metodologi Top-Down / Bottom-Up adalah...",
      correctText: "Memeriksa status fisik koneksi (kabel patch cord, lampu link LED LAN tester), lalu konfigurasi IP address meja 12, sebelum memeriksa server pusat",
      distractors: [
        "Langsung memformat ulang seluruh server database utama",
        "Membeli 50 unit router baru tanpa melakukan pengecekan kabel",
        "Mematikan pasokan listrik seluruh gedung kantor",
        "Melaporkan kerusakan satelit ke lembaga antariksa"
      ],
      explanation: "Troubleshooting terstruktur mengisolasi masalah dari layer fisik paling dekat dengan pengguna terdampak (kabel patch cord meja 12, link LED, IP configuration) sebelum mencurigai perangkat pusat.",
      quickTip: "Troubleshooting lokal: Cek fisik kabel & IP client meja terdampak terlebih dahulu."
    }
  ],
  mcma: [
    {
      stimulus: "Pemilihan media transmisi data jaringan bergantung pada jarak, lingkungan instalasi, dan kebutuhan bandwidth.",
      question: "Manakah skenario pemilihan media transmisi yang TEPAT dan efisien secara teknis? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Koneksi dari Wallplate ke PC pengguna di ruangan kantor menggunakan kabel UTP Cat6 (jarak < 5 meter)", isCorrect: true },
        { text: "Koneksi antar-gedung terpisah 4 km menggunakan kabel Fiber Optik Single-Mode", isCorrect: true },
        { text: "Koneksi ke pos pantau hutan terpencil tanpa jalur kabel menggunakan sistem Satelit VSAT", isCorrect: true },
        { text: "Koneksi antar-pulau terpisah 100 km menggunakan kabel UTP Cat5e tanpa repeater", isCorrect: false },
        { text: "Koneksi interkoneksi backbone data center 40 Gbps menggunakan kabel telepon 2-kawat RJ-11", isCorrect: false }
      ],
      explanation: "UTP Cat6 ideal untuk koneksi lokal meja kerja (<100m). Fiber SMF ideal untuk jarak kilometer. VSAT ideal untuk wilayah terpencil tanpa kabel. UTP tidak dapat menempuh 100 km dan RJ-11 tidak mendukung 40 Gbps.",
      quickTip: "Pilih media sesuai jarak: Meja = UTP; Antar-gedung km = Fiber Optik; Terpencil = Satelit."
    },
    {
      stimulus: "Penanganan insiden jaringan lumpuh akibat Broadcast Storm memerlukan tindakan cepat teknisi.",
      question: "Manakah tindakan teknis yang EFEKTIF untuk menghentikan dan mencegah Broadcast Storm di jaringan switch? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Mencabut sementara kabel loop yang menghubungkan dua port pada switch yang sama", isCorrect: true },
        { text: "Mengaktifkan protokol Spanning Tree Protocol (STP / RSTP) pada semua switch terkelola (managed switch)", isCorrect: true },
        { text: "Mengaktifkan fitur Storm Control pada port switch untuk membatasi ambang batas traffic broadcast", isCorrect: true },
        { text: "Membiarkan kabel loop terpasang dan menunggu switch terbakar habis", isCorrect: false },
        { text: "Mengganti seluruh monitor komputer siswa dengan layar sentuh", isCorrect: false }
      ],
      explanation: "Solusi broadcast storm: cabut kabel fisik loop, aktifkan STP/RSTP agar switch otomatis memblokir loop, dan terapkan Storm Control pada port.",
      quickTip: "Atasi Broadcast Storm: Cabut kabel loop, aktifkan STP, dan pasang Storm Control."
    },
    {
      stimulus: "Dalam arsitektur jaringan berkinerja tinggi, redundansi jalur kabel antar-switch harus dirancang tanpa menimbulkan tabrakan paket.",
      question: "Manakah teknologi yang digunakan untuk meningkatkan throughput sekaligus menyediakan failover antar-switch? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Link Aggregation Control Protocol (LACP IEEE 802.3ad / EtherChannel)", isCorrect: true },
        { text: "Rapid Spanning Tree Protocol (RSTP IEEE 802.1w)", isCorrect: true },
        { text: "Menonaktifkan semua fungsi keamanan port switch", isCorrect: false },
        { text: "Memotong kabel cadangan dengan gergaji besi", isCorrect: false },
        { text: "Mengatur switch beroperasi pada mode Hub setengah dupleks", isCorrect: false }
      ],
      explanation: "LACP menggabungkan kapasitas multi-link menjadi satu jalur besar ber-failover instan, sedangkan RSTP mencegah loop jika multi-link digunakan secara non-agregasi.",
      quickTip: "Redundansi dan agregasi link switch: LACP dan RSTP."
    },
    {
      stimulus: "Gejala penurunan kualitas sinyal Wi-Fi di area perkantoran bertingkat sering kali disebabkan oleh kesalahan penempatan Access Point.",
      question: "Manakah praktik penempatan dan konfigurasi Access Point yang SALAH (buruk) yang harus dihindari teknisi? (Pilihlah DUA tindakan yang salah!)",
      options: [
        { text: "Menempatkan Access Point di dalam lemari brankas logam tertutup rapat", isCorrect: true },
        { text: "Mengatur semua Access Point yang berdekatan pada kanal frekuensi 2.4 GHz yang sama (Co-Channel Interference parah)", isCorrect: true },
        { text: "Memasang Access Point di plafon tengah koridor ruangan yang terbuka", isCorrect: false },
        { text: "Menggunakan frekuensi 5 GHz untuk area ruangan yang membutuhkan bandwidth tinggi", isCorrect: false },
        { text: "Melakukan wireless site survey pemetaan sinyal sebelum pemasangan permanen", isCorrect: false }
      ],
      explanation: "Menaruh AP di dalam kotak logam memblokir gelombang radio, dan menyetel semua AP pada kanal yang sama menciptakan interferensi saluran (CCI) yang merusak performa.",
      quickTip: "Hindari kurungan logam dan penggunaan kanal frekuensi yang bertumpuk pada AP berdekatan."
    },
    {
      stimulus: "Troubleshooting kabel jaringan terstruktur gedung memerlukan pemahaman parameter pengukuran yang akurat.",
      question: "Manakah parameter hasil uji kabel LAN Cat6 yang mengindikasikan bahwa kabel dalam kondisi BAIK dan layak pakai? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Wiremap test menunjukkan pemetaan pin 1 sampai 8 lurus sempurna (Straight Pin-to-Pin Match)", isCorrect: true },
        { text: "Panjang kabel terukur 45 meter (masih di bawah batas maksimal 90 meter)", isCorrect: true },
        { text: "Hasil pengujian menunjukkan terjadi Split Pair pada pasangan kawat 3 dan 6", isCorrect: false },
        { text: "Nilai Return Loss bernilai 0 dB (seluruh energi sinyal memantul balik)", isCorrect: false },
        { text: "Lampu LED indikator nomor 2 dan 7 mati total saat pengujian wiremap", isCorrect: false }
      ],
      explanation: "Kabel yang baik memiliki wiremap lurus 1-8 utuh, panjang di bawah batas 90m permanent link, bebas split pair, dan return loss yang tinggi (dB besar menandakan pantulan kecil).",
      quickTip: "Kabel LAN prima: Wiremap lurus sempurna dan panjang dalam batas standar (<90m)."
    }
  ],
  tf: [
    {
      stimulus: "Analisis pemilihan media transmisi terestrial vs satelit.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pemilihan media jaringan!",
      statements: [
        { text: "Kabel serat optik menawarkan kapasitas bandwidth dan latensi yang jauh lebih unggul daripada transmisi satelit GEO.", correct: "B" },
        { text: "Sistem satelit VSAT sangat cocok dijadikan solusi utama untuk lokasi pulau terpencil di mana penarikan kabel laut tidak memungkinkan.", correct: "B" },
        { text: "Kabel UTP Cat6 dapat digunakan untuk menghubungkan dua kantor antar-pulau terpisah 50 km tanpa penguat sinyal.", correct: "S" }
      ],
      explanation: "Kabel UTP tembaga memiliki batas fisik mutlak 100 meter, tidak mungkin digunakan untuk jarak 50 kilometer.",
      quickTip: "Fiber optik unggul kecepatan dan latensi; VSAT solusi wilayah terpencil; UTP maksimal 100m."
    },
    {
      stimulus: "Penanganan insiden Broadcast Storm pada switch jaringan.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Broadcast Storm!",
      statements: [
        { text: "Menghubungkan dua port pada switch unmanaged dengan satu kabel patch cord dapat memicu terjadinya badai broadcast.", correct: "B" },
        { text: "Spanning Tree Protocol (STP) berfungsi mendeteksi loop Layer 2 dan otomatis memblokir port yang menyebabkan perputaran paket.", correct: "B" },
        { text: "Broadcast storm hanya terjadi pada jaringan nirkabel satelit dan tidak pernah bisa terjadi pada kabel LAN.", correct: "S" }
      ],
      explanation: "Broadcast storm adalah fenomena klasik pada jaringan switch kabel Ethernet (Layer 2) ketika terjadi topologi tertutup tanpa STP.",
      quickTip: "Switching loop pada kabel Ethernet memicu broadcast storm yang melumpuhkan jaringan."
    },
    {
      stimulus: "Penyebab tingginya redaman pada sambungan serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penanganan fiber optik!",
      statements: [
        { text: "Menekuk kabel fiber optik secara tajam melampaui batas bending radius akan menimbulkan lonjakan redaman macrobending.", correct: "B" },
        { text: "Debu mikro yang menempel pada ujung keramik ferrule konektor dapat memicu redaman insertion loss tinggi dan goresan fisik.", correct: "B" },
        { text: "Membersihkan ujung konektor fiber optik dengan kain basah berminyak dan air sabun adalah SOP yang dianjurkan industri.", correct: "S" }
      ],
      explanation: "Konektor serat optik hanya boleh dibersihkan menggunakan cairan khusus pembersih optik (alkohol isopropil 99%) dan kain pembersih optik bebas serat (lint-free wipe).",
      quickTip: "Pembersihan konektor optik wajib memakai alkohol isopropil 99% dan kain lint-free."
    },
    {
      stimulus: "Konfigurasi port Access dan port Trunk pada switch VLAN.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang VLAN dan port trunk!",
      statements: [
        { text: "Port Access biasanya dihubungkan ke perangkat akhir (PC, laptop, printer) dan hanya membawa satu VLAN saja.", correct: "B" },
        { text: "Port Trunk digunakan untuk menghubungkan switch ke switch lain dan membawa lalu lintas dari banyak VLAN sekaligus menggunakan tag 802.1Q.", correct: "B" },
        { text: "Port Trunk sama sekali tidak dapat dilewati oleh data VLAN lain selain VLAN 1 saja.", correct: "S" }
      ],
      explanation: "Fungsi utama port Trunk adalah membawa (multiplexing) seluruh lalu lintas VLAN yang diizinkan (allowed VLANs) menggunakan penandaan tag IEEE 802.1Q.",
      quickTip: "Port Access membawa 1 VLAN ke end-user; Port Trunk membawa banyak VLAN antar-switch."
    },
    {
      stimulus: "SOP penanganan insiden link radio Point-to-Point terputus.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai troubleshooting radio link!",
      statements: [
        { text: "Langkah awal saat link radio down adalah memeriksa ketersediaan daya listrik PoE injector dan lampu indikator perangkat radio.", correct: "B" },
        { text: "Pergeseran fisik arah antena akibat tiupan badai angin kencang dapat menyebabkan misalignment dan hilangnya sinyal.", correct: "B" },
        { text: "Jika link radio terputus, teknisi disarankan langsung menebang semua tiang pemancar tanpa melakukan diagnosa log perangkat.", correct: "S" }
      ],
      explanation: "SOP teknis mengharuskan diagnosa log, pengecekan daya PoE, dan verifikasi fisik alignment sebelum mengambil tindakan mekanis.",
      quickTip: "Troubleshooting radio: Periksa daya PoE, alignment arah antena, dan log perangkat."
    }
  ]
};

module.exports = {
  s11,
  s12,
  s13,
  s14
};
