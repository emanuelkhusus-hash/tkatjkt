// scripts/data_src/sessions_plan.js
// Rencana Topik 30 Sesi TKA TJKT Berdasarkan Matriks Pusmendik

const SESSIONS_PLAN = [
  // --- ELEMEN 1: WAWASAN DUNIA KERJA TJKT ---
  {
    id: "s01",
    day: 1,
    sessionNum: 1,
    elemen: "Wawasan Dunia Kerja TJKT",
    title: "Jenis Profesi dan Jabatan Kerja Bidang Jaringan & Telekomunikasi",
    subTopics: [
      "Network Administrator & Network Engineer",
      "System Administrator & DevOps Engineer",
      "Fiber Optic Planner, Drafter & Surveyor",
      "NOC Engineer & Field Technician",
      "Cybersecurity Analyst & Penetration Tester",
      "Cloud Architect & Virtualization Specialist",
      "Wireless & Microwave Transmission Engineer",
      "VSAT Satellite Ground Station Engineer",
      "IT Support Helpdesk Tier 1-3 & Service Desk",
      "Technopreneur Solusi Jaringan & CCTV Mandiri"
    ]
  },
  {
    id: "s02",
    day: 1,
    sessionNum: 2,
    elemen: "Wawasan Dunia Kerja TJKT",
    title: "Alur Kerja, Proses Bisnis ISP/Telco & Perkembangan Industri Modern",
    subTopics: [
      "Perencanaan Jaringan: Site Survey, Feasibility Study & Link Budget",
      "Pelaksanaan: Deployment, Rollout & Quality Control (QC)",
      "Pelaporan & Handover Dokumen As-Built Drawing",
      "Service Level Agreement (SLA), MTTR, dan MTTF",
      "Siklus Trouble Ticket & Eskalasi Insiden di NOC",
      "Evolusi Teknologi Seluler (2G/3G hingga 4G LTE & 5G NR)",
      "Transformasi IPv4 ke IPv6 dan Network Virtualization (SDN/NFV)",
      "Konvergensi Internet of Things (IoT) & Smart Infrastructure",
      "Cloud Computing (IaaS, PaaS, SaaS) & Edge Computing",
      "Keamanan Siber: Regulasi PDP & Budaya Zero-Trust"
    ]
  },
  {
    id: "s03",
    day: 2,
    sessionNum: 1,
    elemen: "Wawasan Dunia Kerja TJKT",
    title: "Etos Kerja, Budaya Industri 5R & Komunikasi Profesional",
    subTopics: [
      "Prinsip Ringkas (Seiri) di Laboratorium & Gudang Perangkat Jaringan",
      "Prinsip Rapi (Seiton) Pengaturan Rack Server & Labeling Kabel",
      "Prinsip Resik (Seiso) Kebersihan Patch Panel & Area Kerja Splicing",
      "Prinsip Rawat (Seiketsu) Standarisasi SOP Perawatan Berkala",
      "Prinsip Rajin (Shitsuke) Kedisiplinan Kerja & Dokumentasi",
      "Etika Komunikasi dengan Pelanggan & Laporan Kerja Shift",
      "Kerjasama Tim (Teamwork) pada Proyek Gelaran Kabel FTTH",
      "Penyelesaian Masalah (Problem Solving) & Root Cause Analysis (RCA)",
      "Manajemen Waktu & Penanganan Deadline Proyek Telko",
      "Integritas & Kerahasiaan Data Pelanggan (NDS / NDA)"
    ]
  },
  {
    id: "s04",
    day: 2,
    sessionNum: 2,
    elemen: "Kecakapan Kerja Dasar (Basic Job Skills) & K3BK",
    title: "Keselamatan, Kesehatan Kerja & Lingkungan Hidup (K3LH) Umum & Lab Jaringan",
    subTopics: [
      "Identifikasi Bahaya Listrik AC/DC pada Rak Server & UPS",
      "Pencegahan Bahaya Tersandung Kabel & Manajemen Cable Tray",
      "Sirkulasi Udara (Hot Aisle / Cold Aisle) & Suhu Ideal Data Center",
      "Alat Pemadam Api Ringan (APAR): Jenis CO2 & Clean Agent Gas",
      "Bahaya Menatap Ujung Serat Optik Aktif (Laser Tak Kasat Mata)",
      "Penanganan Limbah Pecahan Kaca Serat Optik (Fiber Shards)",
      "Ergonomi Bekerja dengan Komputer & Posisi Tubuh di Depan Rak",
      "Prosedur Evakuasi Darurat & Titik Kumpul (Assembly Point)",
      "Penggunaan Kotak P3K & Pertolongan Pertama Sengatan Listrik",
      "Manajemen Waktu Efisien & Analisis Faktor Keterlambatan Tugas"
    ]
  },
  {
    id: "s05",
    day: 3,
    sessionNum: 1,
    elemen: "Kecakapan Kerja Dasar & K3BK",
    title: "K3 Ketinggian (Working at Heights) & Gelaran Kabel Udara FTTH",
    subTopics: [
      "Regulasi K3 Ketinggian di atas 1.8 Meter (Permenaker No. 9/2016)",
      "Penggunaan Full Body Harness & Pemasangan Dual Lanyard",
      "Inspeksi Safety Helmet, Safety Shoes, dan Sarung Tangan Kerja",
      "Penggunaan Tangga Isolator Fiberglass di Dekat Kabel Listrik PLN",
      "SOP Sudut Kemiringan Tangga (Rasio 4:1) & Pengikatan ke Tiang",
      "Pemasangan Rambu K3, Safety Cone & Barricade Tape di Jalan Raya",
      "Prosedur Bekerja di Tiang Bersama (Joint Pole) Telkom - PLN",
      "Penanganan Cuaca Buruk (Hujan, Petir, Angin Kencang) Saat di Ketinggian",
      "Komunikasi Ground Crew & Rigger di Ketinggian",
      "SOP Evakuasi Darurat Korban Tersangkut di Tiang / Menara"
    ]
  },
  {
    id: "s06",
    day: 3,
    sessionNum: 2,
    elemen: "Mini Boss Challenge (Integrasi Elemen 1 & K3BK)",
    title: "Mini Boss 1: Studi Kasus Wawasan Kerja, K3BK & SOP Layanan Industri",
    subTopics: [
      "Studi Kasus 1: Insiden Putusnya Kabel Fiber Udara Tertabrak Truk",
      "Studi Kasus 2: Penanganan Korsleting PDU di Data Center Tier 2",
      "Studi Kasus 3: Keterlambatan Rollout Proyek Akibat Pelanggaran SOP K3",
      "Studi Kasus 4: Restorasi Link Backbone ISP Menjelang Batas Akhir SLA",
      "Studi Kasus 5: Penerapan 5R pada Restrukturisasi Ruang Server Utama",
      "Studi Kasus 6: Pemilihan Solusi Perangkat & Anggaran untuk Kantor Cabang",
      "Studi Kasus 7: Audit Kelayakan APD & Tangga Lapangan Tim Fiber Optik",
      "Studi Kasus 8: Analisis Faktor Keterlambatan Instalasi Home Pass Pelanggan",
      "Studi Kasus 9: Etika Penanganan Keluhan Gangguan Internet VIP Client",
      "Studi Kasus 10: Rencana Usaha Mandiri Teknisi Jaringan (Technopreneur)"
    ]
  },

  // --- ELEMEN 3: MEDIA DAN JARINGAN TELEKOMUNIKASI ---
  {
    id: "s07",
    day: 4,
    sessionNum: 1,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Media Transmisi Kabel Tembaga (Twisted Pair UTP/STP/FTP)",
    subTopics: [
      "Karakteristik Kabel Twisted Pair Kategori Cat5e, Cat6, dan Cat6a",
      "Fungsi Lilitan Pasangan Kawat (Twisting) Terhadap Crosstalk (NEXT/FEXT)",
      "Perbedaan UTP (Unshielded) vs STP/FTP (Foil & Braid Shielding)",
      "Batas Panjang Maksimal Bentangan Kabel Tembaga (100 Meter)",
      "Komponen Patch Cord, Solid Cable, Patch Panel & Keystone Jack",
      "Konektor RJ-45, Modular Plug & Boot Cover",
      "Efek Attenuasi, Insertion Loss & Return Loss pada Kabel Tembaga",
      "Pengaruh Interferensi Gelombang Elektromagnetik (EMI/RFI)",
      "Standar Frekuensi Bandwidth Kabel (100 MHz hingga 500 MHz)",
      "Pertimbangan Biaya, Fleksibilitas & Kebutuhan Kecepatan Jaringan"
    ]
  },
  {
    id: "s08",
    day: 4,
    sessionNum: 2,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Standarisasi Terminasi TIA/EIA 568A, 568B & Pengujian Kabel",
    subTopics: [
      "Urutan Warna Standar TIA/EIA 568A Pin 1 s.d. 8",
      "Urutan Warna Standar TIA/EIA 568B Pin 1 s.d. 8",
      "Konfigurasi Kabel Straight-Through & Penggunaannya (PC ke Switch)",
      "Konfigurasi Kabel Crossover & Auto MDI/MDIX Modern",
      "Teknik Pengupasan Jaket Luar & Crimping Presisi dengan Tang Crimping",
      "Identifikasi Kesalahan Terminasi: Open, Short, Miswire, Reversed",
      "Fenomena Split Pair dan Dampaknya pada Packet Loss Jaringan",
      "Metode Pengujian Pin-to-Pin dengan Wiremap Cable Tester",
      "Standarisasi Grounding pada Kabel Berpelindung (STP/FTP)",
      "SOP Dokumentasi Labeling Kabel Sesuai Standar TIA-606"
    ]
  },
  {
    id: "s09",
    day: 5,
    sessionNum: 1,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Konsep Dasar & Struktur Fisis Fiber Optik",
    subTopics: [
      "Struktur Lapisan Serat Optik: Core, Cladding, Coating, Strength Member, Jacket",
      "Hukum Snellius & Prinsip Pemantulan Internal Total (Total Internal Reflection)",
      "Syarat Mutlak Indeks Bias: n_core > n_cladding",
      "Kecepatan Cahaya dalam Medium Kaca Silika vs Vakum",
      "Kelebihan Fiber Optik: Kebal EMI, Bandwidth Raksasa, Jarak Jauh",
      "Jenis Kabel Fiber: Loose Tube (Outdoor/Duct/Aerial) vs Tight Buffer (Indoor)",
      "Konstruksi Kabel Drop Optik (Figure-8 & Flat Drop) untuk FTTH",
      "Karakteristik Armor Logam (Corrugated Steel) & Anti-Rodent",
      "Kode Warna Serat Optik 12 Warna (TIA-598) Bagian Tube & Core",
      "Batas Radius Tekukan Kabel (Minimum Bending Radius) & Macro Bending"
    ]
  },
  {
    id: "s10",
    day: 5,
    sessionNum: 2,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Karakteristik Single-Mode (SMF) vs Multi-Mode (MMF) & Redaman Optik",
    subTopics: [
      "Single-Mode Fiber (SMF) Karakteristik: Core ~9 µm, Sumber Cahaya Laser",
      "Multi-Mode Fiber (MMF) Karakteristik: Core 50/62.5 µm, Sumber LED/VCSEL",
      "Dispersi Modal (Modal Dispersion) pada MMF vs Dispersi Kromatik pada SMF",
      "Panjang Gelombang Standar Telekomunikasi (850nm, 1310nm, 1490nm, 1550nm)",
      "Jendela Transmisi Optik (Optical Windows) & Kurva Penyerapan OH- (Water Peak)",
      "Faktor Redaman: Absorpsi Kaca Silika, Hamburan Rayleigh (Rayleigh Scattering)",
      "Jenis Konektor Optik: SC, LC, FC, ST & Karakteristik Fisiknya",
      "Tipe Polishing Ujung Konektor: PC, UPC (Biru) vs APC Sudut 8 Derajat (Hijau)",
      "Return Loss & Insertion Loss pada Konektor UPC (-50dB) vs APC (-65dB)",
      "Rumus Dasar Perhitungan Optical Link Budget Jaringan FTTH"
    ]
  },
  {
    id: "s11",
    day: 6,
    sessionNum: 1,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Transmisi Nirkabel (Wireless LAN) & Standar IEEE 802.11",
    subTopics: [
      "Spektrum Frekuensi ISM 2.4 GHz vs U-NII 5 GHz (Jarak vs Throughput)",
      "Kanal Non-Overlapping Frekuensi 2.4 GHz (Kanal 1, 6, dan 11)",
      "Karakteristik Saluran 5 GHz (Kanal 36-165, DFS & TPC)",
      "Evolusi Standar Wi-Fi: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), 802.11ax (Wi-Fi 6)",
      "Teknologi MIMO (Multiple Input Multiple Output) & Beamforming",
      "Penyebab Redaman Nirkabel: Redaman Dinding, Refleksi, Difraksi, Interferensi",
      "Pola Radiasi Antena: Antena Omnidirectional vs Antena Directional (Grid/Patch)",
      "Topologi WLAN: Ad-Hoc (IBSS), Infrastructure (BSS), dan Extended (ESS)",
      "Keamanan Nirkabel: Open, WEP (Insecure), WPA2-PSK (AES), WPA3 (SAE)",
      "Site Survey Wi-Fi: Heatmap Sinyal RSSI (dBm) & Signal-to-Noise Ratio (SNR)"
    ]
  },
  {
    id: "s12",
    day: 6,
    sessionNum: 2,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Komunikasi Gelombang Mikro (Microwave Link), Seluler & Satelit VSAT",
    subTopics: [
      "Karakteristik Gelombang Mikro Terestrial (Point-to-Point & Point-to-Multipoint)",
      "Syarat Line of Sight (LOS) & Perhitungan Daerah Fresnel (Fresnel Zone Clearance)",
      "Pengaruh Cuaca: Rain Fade pada Frekuensi Tinggi (>10 GHz)",
      "Arsitektur Jaringan Seluler: BTS/NodeB/eNodeB/gNodeB, Backhaul & Core Network",
      "Komunikasi Satelit Geostasioner (GEO): Prinsip Uplink & Downlink Transponder",
      "Frekuensi Satelit: C-Band (Tahan Hujan) vs Ku-Band (Bandwidth Tinggi)",
      "Latensi Transmisi Satelit (~500 ms RTT) & Dampaknya pada Aplikasi Real-Time",
      "Komponen Stasiun Bumi VSAT: Antena Dish, ODU (BUC & LNB), Modem IDU",
      "Penggunaan Microwave Link sebagai Redundansi / Backup Jalur Fiber Optik",
      "Perbandingan Biaya Operasional (OPEX) & Penggelaran (CAPEX) Antar-Media"
    ]
  },
  {
    id: "s13",
    day: 7,
    sessionNum: 1,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Topologi Fisik & Logika Serta Arsitektur Jaringan Telekomunikasi",
    subTopics: [
      "Karakteristik & Kelemahan Topologi Bus (Terminator & Single Point of Failure)",
      "Karakteristik Topologi Ring & Mekanisme Token Ring",
      "Karakteristik Topologi Star dengan Sentral Switch (Skalabilitas & Isolasi Fault)",
      "Karakteristik Topologi Mesh Penuh (Full Mesh) vs Parsial (Redundansi Tinggi)",
      "Topologi Tree / Hirarkis untuk Jaringan Skala Menengah ke Besar",
      "Model Jaringan Hirarkis 3 Layer Cisco: Core, Distribution, Access",
      "Fungsi Core Layer: Switching Kecepatan Tinggi Tanpa Filter Rumit",
      "Fungsi Distribution Layer: Routing, Policy Firewall, QoS, Agregasi VLAN",
      "Fungsi Access Layer: Port Security, PoE, Sambungan End-Device",
      "Analisis Pemilihan Arsitektur Jaringan: Kinerja, Biaya & Keandalan"
    ]
  },
  {
    id: "s14",
    day: 7,
    sessionNum: 2,
    elemen: "Mini Boss Challenge (Media Transmisi & Topologi)",
    title: "Mini Boss 2: Analisis Pemilihan Media, Topologi & Troubleshooting Transmisi",
    subTopics: [
      "Kasus 1: Perancangan Jaringan Kampus Terdistribusi (Fiber Antar-Gedung)",
      "Kasus 2: Koneksi Wilayah Terpencil Kepulauan (Pemilihan Satelit vs Radio)",
      "Kasus 3: Troubleshooting Degradasi Kecepatan UTP Melebihi Jarak 100 Meter",
      "Kasus 4: Analisis Interferensi Wi-Fi pada Area Gudang Pabrik Logam",
      "Kasus 5: Mengatasi Redaman Tinggi Sambungan Fiber Optik di Lapangan",
      "Kasus 6: Redundansi Jalur Kantor Pusat Menggunakan Dual Link (FO + PTP)",
      "Kasus 7: Analisis Biaya CAPEX/OPEX untuk Solusi ISP Desa",
      "Kasus 8: Kerusakan Port Switch Akibat Induksi Petir pada Kabel Outdoor",
      "Kasus 9: Pengaruh Obstruksi Bukit pada Daerah Fresnel Gelombang Mikro",
      "Kasus 10: Pemilihan Topologi Terbaik untuk Sistem Transaksi Perbankan 99.99%"
    ]
  },

  // --- ELEMEN 3 (LANJUTAN): PROTOKOL, OSI, IP & ROUTING ---
  {
    id: "s15",
    day: 8,
    sessionNum: 1,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Pengalamatan IPv4, Kelas Alamat & Alamat Khusus",
    subTopics: [
      "Format Struktur 32-Bit IPv4 & Notasi Dotted Decimal",
      "Pembagian Kelas IPv4 Tradisional (Kelas A, B, C, D Multicast, E Riset)",
      "Rentang IPv4 Privat RFC 1918 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)",
      "Perbedaan Karakteristik IP Publik (Routable Internet) vs IP Privat",
      "Alamat Loopback 127.0.0.1 untuk Pengujian Internal TCP/IP Stack",
      "Alamat Otomatis APIPA (Automatic Private IP Addressing: 169.254.0.0/16)",
      "Penyebab PC Mendapatkan Alamat APIPA (DHCP Server Tidak Merespons)",
      "Konsep Network Address (Identitas Jaringan) & Broadcast Address",
      "Default Subnet Mask (/8 untuk Kelas A, /16 Kelas B, /24 Kelas C)",
      "Aturan Alamat Host yang Valid (Rumus 2^h - 2)"
    ]
  },
  {
    id: "s16",
    day: 8,
    sessionNum: 2,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Perhitungan Subnetting CIDR, VLSM & Optimasi Alokasi IP",
    subTopics: [
      "Konsep Classless Inter-Domain Routing (CIDR) Prefix /24 hingga /30",
      "Tabel Konversi Prefix CIDR ke Subnet Mask Desimal",
      "Perhitungan Jumlah Subnet & Jumlah Host Valid per Subnet",
      "Menentukan Network ID, Rentang IP Host Usable, dan Broadcast ID",
      "Teknik Cepat Menghitung Alamat Subnet Berdasarkan Nilai Magic Number",
      "Penggunaan Subnet /30 untuk Link Point-to-Point Antar Router (2 Host)",
      "Penggunaan Subnet /29, /28, /27 untuk Segmen Departemen Kantor",
      "Metodologi Variable Length Subnet Masking (VLSM) dari Kebutuhan Terbesar",
      "Mencegah Pemborosan Alokasi IP Publik dan Efisiensi IP Privat",
      "Analisis Overlapping IP Address dan Dampak Konflik Jaringan"
    ]
  },
  {
    id: "s17",
    day: 9,
    sessionNum: 1,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Pengalamatan IPv6, Struktur Format & Mekanisme Transisi",
    subTopics: [
      "Format Struktur 128-Bit IPv6 dalam 8 Blok Heksadesimal",
      "Aturan Penyingkatan IPv6: Menghapus Nol di Depan & Menggunakan Double Colon (::)",
      "Struktur Global Unicast Address (2000::/3) untuk Rute Publik",
      "Struktur Link-Local Address (fe80::/10) untuk Komunikasi Segmen Lokal",
      "Unique Local Address (fc00::/7) sebagai Padanan IP Privat",
      "Alamat Multicast (ff00::/8) Menggantikan Broadcast di IPv6",
      "Alamat Loopback IPv6 (::1/128) dan Unspecified Address (::/128)",
      "Mekanisme Autokonfigurasi Bebas Status (SLAAC) & DHCPv6",
      "Metode Transisi IPv6: Dual-Stack (Menjalankan IPv4 & IPv6 Bersamaan)",
      "Metode Transisi: Tunneling (6to4, Teredo) & Translasi NAT64/DNS64"
    ]
  },
  {
    id: "s18",
    day: 9,
    sessionNum: 2,
    elemen: "Media dan Jaringan Telekomunikasi",
    title: "Prinsip Dasar Model 7 Layer OSI & Protokol Arsitektur TCP/IP",
    subTopics: [
      "7 Layer OSI: Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Model 4 Layer TCP/IP: Network Access, Internet, Transport, Application",
      "Proses Enkapsulasi & Dekapsulasi Data: Data -> Segment -> Packet -> Frame -> Bits",
      "Data Link Layer: Fungsi MAC Address (48-bit), Framing, Error Detection (CRC)",
      "Network Layer: Fungsi IP Address, Logika Routing, ICMP & ARP",
      "Transport Layer: Karakteristik TCP (Connection-Oriented, 3-Way Handshake, Reliable)",
      "Transport Layer: Karakteristik UDP (Connectionless, Low Latency, Unreliable/Best-Effort)",
      "Nomor Port Populer: HTTP (80), HTTPS (443), SSH (22), DNS (53), DHCP (67/68)",
      "Presentation Layer: Enkripsi SSL/TLS, Kompresi & Format Data (ASCII/JPEG)",
      "Pemecahan Masalah (Troubleshooting) Jaringan Berbasis Pendekatan Layer OSI"
    ]
  },
  {
    id: "s19",
    day: 10,
    sessionNum: 1,
    elemen: "Kecakapan Kerja Dasar: Perangkat Keras & Konfigurasi",
    title: "Pengoperasian & Konfigurasi Switch Serta Virtual LAN (VLAN 802.1Q)",
    subTopics: [
      "Prinsip Kerja Switch: MAC Address Table Learning, Forwarding, Filtering, Flooding",
      "Perbedaan Collision Domain (per port switch) vs Broadcast Domain",
      "Konsep Virtual LAN (VLAN): Segmentasi Jaringan Logis Tanpa Menambah Kabel",
      "Standar IEEE 802.1Q VLAN Tagging (VLAN ID 1 s.d. 4094)",
      "Mode Port Access (Menghubungkan ke PC/Printer, Untagged Frame)",
      "Mode Port Trunk (Menghubungkan Antar-Switch / Switch ke Router, Tagged Frame)",
      "Native VLAN & Pertimbangan Keamanannya",
      "Inter-VLAN Routing dengan Pendekatan Router-on-a-Stick (Sub-Interface)",
      "Inter-VLAN Routing Menggunakan Switch Multilayer (Layer 3 Switch SVI)",
      "Troubleshooting VLAN: Port Berada di VLAN Salah, Tagging Mismatch"
    ]
  },
  {
    id: "s20",
    day: 10,
    sessionNum: 2,
    elemen: "Kecakapan Kerja Dasar: Perangkat Keras & Konfigurasi",
    title: "Pengoperasian Router, Routing Statis/Dinamis & Network Address Translation (NAT)",
    subTopics: [
      "Fungsi Router: Memisahkan Broadcast Domain & Menentukan Jalur Terbaik (Path Determination)",
      "Tabel Routing: Network Tujuan, Next-Hop Gateway, Interface Keluar, Nilai Metrik",
      "Default Route (0.0.0.0/0 atau Gateway of Last Resort)",
      "Routing Statis: Konfigurasi, Kelebihan (Aman/Ringan) & Kelemahan (Tidak Otomatis)",
      "Routing Dinamis: Konsep Protokol Interior Gateway Protocol (OSPF, RIP, EIGRP)",
      "Prinsip Kerja OSPF: Link-State Advertisement (LSA), Area 0 Backbone, Metrik Cost",
      "Network Address Translation (NAT): Menghubungkan Banyak IP Privat ke IP Publik",
      "Source NAT (Masquerade): Translasi Alamat Sumber Paket Keluar Internet",
      "Destination NAT (Port Forwarding): Membuka Port Server Lokal ke Internet Publik",
      "Troubleshooting Konektivitas: Ping RTO, Hop Loop, Kesalahan Gateway"
    ]
  },

  // --- ELEMEN 2 (LANJUTAN): SISTEM OPERASI, VIRTUALISASI & SERVER ---
  {
    id: "s21",
    day: 11,
    sessionNum: 1,
    elemen: "Kecakapan Kerja Dasar: Perangkat Keras, OS & Virtualisasi",
    title: "Sistem Operasi Server, Perintah CLI Dasar & Manajemen Hak Akses",
    subTopics: [
      "Perbedaan Sistem Operasi Server (Linux Debian/Ubuntu Server, Windows Server) vs Desktop",
      "Perintah Dasar Linux CLI: Navigasi (cd, pwd, ls), File (cp, mv, rm, mkdir, cat, nano)",
      "Manajemen Service Server: systemctl (start, stop, restart, enable, status)",
      "Manajemen Pengguna (User) & Grup: useradd, passwd, usermod, groupadd",
      "Izin Akses File Linux (Permissions): Read (4), Write (2), Execute (1), chmod & chown",
      "Konfigurasi Antarmuka Jaringan Statis Linux (/etc/netplan atau /etc/network/interfaces)",
      "Perintah Diagnostik Jaringan CLI: ip addr, ping, traceroute, netstat/ss, curl",
      "Firewall Dasar Linux: iptables & UFW (Uncomplicated Firewall) Buka/Tutup Port",
      "Prosedur Backup & Restore Data Server Menggunakan tar, rsync, scp",
      "SOP Pembaruan Paket Sistem Operasi (apt update && apt upgrade) Secara Aman"
    ]
  },
  {
    id: "s22",
    day: 11,
    sessionNum: 2,
    elemen: "Kecakapan Kerja Dasar: Virtualisasi & Server Layanan Jaringan",
    title: "Virtualisasi Sistem (Hypervisor Type 1 & 2) Serta Layanan Server (DHCP, DNS, Web)",
    subTopics: [
      "Konsep Virtualisasi: Bare-Metal Type 1 (Proxmox/ESXi) vs Hosted Type 2 (VirtualBox/VMware)",
      "Manajemen VM: Alokasi RAM, vCPU, Virtual Hard Disk (VDI/VMDK Dynamic vs Fixed)",
      "Troubleshooting VirtualBox: Error 'Insufficient Disk Space', VT-x/AMD-V Disabled di BIOS",
      "Mode Jaringan VirtualBox: NAT, Bridged Adapter, Internal Network, Host-Only",
      "Prinsip Layanan DHCP Server & 4 Tahapan DORA (Discover, Offer, Request, Acknowledge)",
      "Konfigurasi DHCP Scope, IP Lease Time, Default Gateway & DNS Options",
      "Prinsip Layanan DNS Server: Forward Lookup (Domain ke IP) & Reverse Lookup (IP ke Domain)",
      "Tipe Record DNS: A Record (IPv4), AAAA (IPv6), CNAME (Alias), MX (Mail)",
      "Prinsip Web Server (Apache/Nginx): Konfigurasi Virtual Host & Direktori Web",
      "Remote Akses Server Aman Menggunakan SSH (Port 22, Autentikasi Kunci Publik/Privat)"
    ]
  },

  // --- ELEMEN 4: PENGGUNAAN ALAT UKUR JARINGAN & PEMELIHARAAN ---
  {
    id: "s23",
    day: 12,
    sessionNum: 1,
    elemen: "Penggunaan Alat Ukur Jaringan",
    title: "Alat Ukur Tembaga, Multimeter, LAN Tester & PoE Detector",
    subTopics: [
      "Fungsi & Prosedur Penggunaan Wiremap LAN Tester (Master Unit & Remote Unit)",
      "Membaca Urutan Lampu Indikator LED 1-8 pada LAN Tester (Kabel Normal vs Rusak)",
      "Mendeteksi Kawat Terbalik (Reversed), Kawat Putus (Open), dan Hubung Singkat (Short)",
      "Penggunaan Multimeter Digital: Mengukur Tegangan AC/DC Power Supply Jaringan",
      "Penggunaan Multimeter Buzzer Continuity Test untuk Menguji Jalur Grounding Rack",
      "Penggunaan Tone Generator & Probe (Tracer) untuk Melacak Kabel di Plafon/Patch Panel",
      "Penggunaan PoE Detector untuk Memeriksa Ketersediaan Daya 48V pada Port Switch PoE",
      "SOP Kalibrasi, Perawatan Baterai 9V & Pembersihan Pin RJ-45 LAN Tester",
      "Penyimpanan Alat Ukur Tembaga: Suhu Ruang Kering & Menghindari Kelembaban Tinggi",
      "Pencatatan Lembar Kerja Pengujian Validasi Kabel Sesuai SOP Industri"
    ]
  },
  {
    id: "s24",
    day: 12,
    sessionNum: 2,
    elemen: "Penggunaan Alat Ukur Jaringan",
    title: "Alat Ukur Optik Dasar: OPM (Optical Power Meter), Light Source (OLS) & VFL Laser",
    subTopics: [
      "Fungsi Optical Power Meter (OPM) Mengukur Daya Pancar Sinyal Cahaya (dBm)",
      "Fungsi Optical Light Source (OLS) Mengirim Sinyal Cahaya Stabil dengan Panjang Gelombang Tertentu",
      "Prosedur Pengujian Insertion Loss Total Menggunakan Pasangan OLS dan OPM",
      "Perbedaan Skala Logaritmik Daya Mutlak (dBm) vs Skala Relatif Redaman (dB)",
      "Pemilihan Panjang Gelombang Pengujian pada OPM (850, 1310, 1490, 1550 nm)",
      "Standar Nilai Redaman Normal Sinyal Terima pada Port ONT Pelanggan (-18 s.d. -24 dBm)",
      "Fungsi Visual Fault Locator (VFL / Senter Laser Merah 650 nm)",
      "Prosedur Mengidentifikasi Core Patah / Bending Menggunakan VFL",
      "SOP Keselamatan Mutlak: Dilarang Menatap Lubang Konektor VFL / Port OLT dengan Mata Langsung",
      "Pembersihan Ujung Konektor Menggunakan Optical Fiber Cleaning Cassette / Kimwipes & Alkohol 99%"
    ]
  },
  {
    id: "s25",
    day: 13,
    sessionNum: 1,
    elemen: "Penggunaan Alat Ukur Jaringan",
    title: "Operasional Fusion Splicer, Fiber Cleaver & Standarisasi Sambungan",
    subTopics: [
      "Fungsi Fusion Splicer: Menyambung Dua Inti Kaca Serat Optik Menggunakan Loncatan Bunga Api Listrik",
      "Fungsi Fiber Stripper 3 Lubang (Mengupas Jaket Luar, Tight Buffer, dan Cladding Coating)",
      "Fungsi High Precision Fiber Cleaver: Memotong Ujung Kaca Serat Optik dengan Sudut Tegak Lurus (< 1 Derajat)",
      "Prosedur Pembersihan Core Kaca dengan Alkohol Isopropil 99% Setelah Pengupasan",
      "SOP Memasang Protection Sleeve (Pelindung Sambungan Serat) Sebelum Proses Penyambungan",
      "Prosedur Penempatan Core pada V-Groove Fusion Splicer & Penutupan Wind Protector",
      "Tahapan Splicer: Otomatis Alignment Core-to-Core, Pemanasan Arc Discharge, Estimasi Nilai Loss",
      "Standar Maksimal Redaman Sambungan Splicing Sesuai Standar Industri (Maksimal <= 0.05 dB per Joint)",
      "Proses Pemanasan Heater Sleeve (Oven Splicer) & Penempatan di Splice Tray OTB/ODC/Closure",
      "Pemeliharaan Splicer: Membersihkan Lensa Mikroskop, V-Groove dengan Cotton Swab, dan Kalibrasi Arc Electrode"
    ]
  },
  {
    id: "s26",
    day: 13,
    sessionNum: 2,
    elemen: "Penggunaan Alat Ukur Jaringan",
    title: "Analisis Kurva OTDR (Optical Time Domain Reflectometer) & Event Loss",
    subTopics: [
      "Prinsip Kerja OTDR: Memancarkan Pulsa Cahaya & Menangkap Pantulan Balik (Backscattering & Fresnel Reflection)",
      "Parameter Pengaturan OTDR: Panjang Gelombang (1310/1550nm), Pulse Width, Range Jarak, Aquisition Time",
      "Konsep Dead Zone: Event Dead Zone (Jarak Minimum Deteksi Dua Event Berdekatan)",
      "Konsep Attenuation Dead Zone (Jarak Minimum Hingga Pengukuran Redaman Kembali Akurat)",
      "Karakteristik Event Reflektif pada Kurva OTDR: Lonjakan Spike (Konektor Mekanik, Sambungan Udara, Ujung Kabel)",
      "Karakteristik Event Non-Reflektif pada Kurva OTDR: Penurunan Tangga Turun (Fusion Splice, Macro Bending)",
      "Mendeteksi Bending: Perbedaan Nilai Loss pada Pengujian 1310nm vs 1550nm (1550nm Lebih Sensitif Bending)",
      "Membaca Titik Putus Kabel Fiber (Fiber Cut) Berdasarkan Jarak Kilometer pada Display OTDR",
      "Penggunaan Launch Fiber / Dummy Fiber untuk Mengeliminasi Dead Zone Konektor Awal",
      "Penyimpanan OTDR: Menjaga Suhu Ruangan Stabil, Hindari Guncangan, dan Sertifikasi Kalibrasi Tahunan"
    ]
  },

  // --- ELEMEN SIMULASI KOMPREHENSIF (TRYOUT NASIONAL) ---
  {
    id: "s27",
    day: 14,
    sessionNum: 1,
    elemen: "Simulasi Ujian Nasional TKA",
    title: "Tryout Prediksi TKA Pusmendik Paket A (Integrasi 4 Elemen)",
    subTopics: [
      "Soal Simulasi Gabungan: Wawasan Profesi TJKT & Etos Kerja Industri",
      "Soal Simulasi Gabungan: K3LH Bekerja di Ketinggian & Manajemen Data Center",
      "Soal Simulasi Gabungan: Karakteristik Kabel UTP/STP & Standar 568B",
      "Soal Simulasi Gabungan: Struktur Fiber Optik SMF/MMF & Perhitungan Link Budget",
      "Soal Simulasi Gabungan: Subnetting IPv4 CIDR /28 dan /30",
      "Soal Simulasi Gabungan: Prinsip 7 Layer OSI & Port TCP/IP",
      "Soal Simulasi Gabungan: Konfigurasi VLAN 802.1Q & Inter-VLAN Routing",
      "Soal Simulasi Gabungan: Operasional Server Linux CLI & VirtualBox",
      "Soal Simulasi Gabungan: Pengukuran Daya Sinyal OPM & Nilai Standar Loss ONT",
      "Soal Simulasi Gabungan: Prosedur Splicing & Standar Redaman Sambungan <= 0.05 dB"
    ]
  },
  {
    id: "s28",
    day: 14,
    sessionNum: 2,
    elemen: "Simulasi Ujian Nasional TKA",
    title: "Tryout Prediksi TKA Pusmendik Paket B (Penalaran & Studi Kasus)",
    subTopics: [
      "Studi Kasus Penalaran: Eskalasi Tiket Gangguan ISP Sesuai Standar SLA 99.9%",
      "Studi Kasus Penalaran: Investigasi Penyebab Kecelakaan Kerja Teknisi Tiang Ketinggian",
      "Studi Kasus Penalaran: Gangguan Loop Jaringan Akibat Duplikasi Port Tanpa STP",
      "Studi Kasus Penalaran: Redaman Tinggi Jalur Distribusi FTTH Akibat Macro Bending di Tiang",
      "Studi Kasus Penalaran: Analisis Paket Hilang (Packet Loss) pada Link Radio Microwave Saat Hujan Deras",
      "Studi Kasus Penalaran: Desain Subnetting VLSM untuk Jaringan Rumah Sakit 4 Lantai",
      "Studi Kasus Penalaran: Kegagalan Resolusi Nama Domain pada Klien Akibat Salah Konfigurasi DNS",
      "Studi Kasus Penalaran: Kegagalan Akses Web Server di Balik NAT Router (Masalah Port Forwarding)",
      "Studi Kasus Penalaran: Membaca Grafik OTDR untuk Menentukan Titik Galian yang Merusak Kabel Fiber",
      "Studi Kasus Penalaran: Analisis Efisiensi Waktu Kerja Teknisi Lapangan Berdasarkan SOP Industri"
    ]
  },
  {
    id: "s29",
    day: 15,
    sessionNum: 1,
    elemen: "Simulasi Ujian Nasional TKA",
    title: "Tryout Prediksi TKA Pusmendik Paket C (Ketajaman Teknis & Troubleshooting)",
    subTopics: [
      "Troubleshooting Tingkat Lanjut: Analisis Wireshark Packet Header & TCP Handshake",
      "Troubleshooting Tingkat Lanjut: Indikasi Masalah Hardware vs Masalah Konfigurasi Software",
      "Troubleshooting Tingkat Lanjut: Mengatasi Error 'Host Unreachable' vs 'Request Timed Out'",
      "Troubleshooting Tingkat Lanjut: Mengidentifikasi Rogue DHCP Server yang Mengganggu Jaringan Kantor",
      "Troubleshooting Tingkat Lanjut: Mitigasi Serangan DoS Sederhana pada Router MikroTik/Linux",
      "Troubleshooting Tingkat Lanjut: Pengujian Redaman Kabel Tembaga Terhadap Kebisingan Motor Listrik",
      "Troubleshooting Tingkat Lanjut: Analisis Kerusakan Core Optik Menggunakan Kombinasi VFL & OTDR",
      "Troubleshooting Tingkat Lanjut: Perbaikan Sambungan Fusion Splicer dengan Tampilan Gelembung / Garis Hitam",
      "Troubleshooting Tingkat Lanjut: Kalibrasi Ulang Alat Ukur yang Terkena Pengaruh Kelembaban Ekstrem",
      "Troubleshooting Tingkat Lanjut: Rekomendasi Solusi Upgrade Jaringan Berbasis Analisis Biaya & Keandalan"
    ]
  },
  {
    id: "s30",
    day: 15,
    sessionNum: 2,
    elemen: "The Grand Final Boss",
    title: "THE GRAND FINAL BOSS: Simulasi Penuh TKA Kemendikdasmen RI 2026",
    subTopics: [
      "Evaluasi Puncak: 30 Butir Soal Representasi Utuh Standar Pusmendik Kemendikdasmen",
      "Kombinasi Sempurna Level Kognitif L1 (Pemahaman Teori), L2 (Penerapan Konfigurasi), L3 (Penalaran & Analisis)",
      "Format Resmi 20 Pilihan Ganda Tunggal + 5 PGK MCMA (Multi-Select) + 5 PGK Benar/Salah",
      "Cakupan Menyeluruh: Wawasan Profesi, K3BK, Media Transmisi, Perangkat Jaringan, Server & Alat Ukur",
      "Batas Waktu Standar Ujian Asli Pusmendik (25 Menit Pengerjaan Penuh)",
      "Pengujian Kesiapan Mental & Kecepatan Pengambilan Keputusan Teknis",
      "Standar Kelulusan KKM 70% Menentukan Hak Mendapatkan Sertifikat Kelulusan Resmi SMKN 1 Giritontro",
      "Review Menyeluruh Kunci Jawaban Resmi, Alasan Pembahasan Industri, dan Tips Cepat",
      "Penyerahan Rekapitulasi Nilai Akhir ke Guru Pembimbing via WhatsApp",
      "Kelulusan Paripurna Program Drilling 15 Hari TKA TJKT 2026"
    ]
  }
];

module.exports = {
  SESSIONS_PLAN
};
