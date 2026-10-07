// scripts/data_src/definitions/full_engine/dataset_builder/session_packs/pack_s19_s22.js
// Sesi 19: Pengoperasian & Konfigurasi Switch Serta Virtual LAN (VLAN 802.1Q)
// Sesi 20: Pengoperasian Router, Routing Statis/Dinamis & Network Address Translation (NAT)
// Sesi 21: Sistem Operasi Server, Perintah CLI Dasar & Manajemen Hak Akses
// Sesi 22: Virtualisasi Sistem (Hypervisor Type 1 & 2) Serta Layanan Server (DHCP, DNS, Web)
// Total 4 Sesi x 30 Soal = 120 Butir Soal Unik Standar Pusmendik

const s19 = {
  sessionId: "s19",
  pg: [
    {
      stimulus: "Switch jaringan bekerja dengan cara membaca dan mencatat alamat perangkat yang terhubung ke setiap port fisiknya.",
      question: "Tabel memori internal tempat switch menyimpan pemetaan antara port fisik dan alamat fisik kartu jaringan disebut...",
      correctText: "CAM Table (Content Addressable Memory) / MAC Address Table",
      distractors: [
        "Routing Table (Tabel Rute IP)",
        "DNS Cache Table",
        "ARP Cache Table Komputer",
        "DHCP Lease Table"
      ],
      explanation: "Switch menyimpan asosiasi antara MAC Address perangkat dan port fisik tempat frame tersebut masuk ke dalam MAC Address Table (CAM Table).",
      quickTip: "Tabel pemetaan port dan MAC address di switch = CAM Table / MAC Address Table."
    },
    {
      stimulus: "Ketika sebuah switch baru pertama kali dinyalakan dan menerima frame unicast dengan alamat tujuan MAC yang belum tercatat di dalam tabel MAC-nya.",
      question: "Tindakan yang dilakukan oleh switch terhadap frame unicast yang tujuannya belum dikenal (Unknown Unicast) tersebut adalah...",
      correctText: "Melakukan Flooding (meneruskan frame ke seluruh port aktif, kecuali port asal datangnya frame)",
      distractors: [
        "Langsung membuang (drop) frame tersebut ke tempat sampah memori",
        "Mengirimkan frame hanya ke port nomor 1 saja",
        "Mematikan daya listrik switch secara otomatis",
        "Mengubah alamat tujuan menjadi alamat MAC switch"
      ],
      explanation: "Jika MAC tujuan belum ada di tabel (unknown unicast), switch melakukan flooding ke semua port lain dalam broadcast domain yang sama untuk menemukan tujuannya.",
      quickTip: "MAC tujuan belum ada di tabel = Switch melakukan Flooding ke semua port."
    },
    {
      stimulus: "Pemisahan domain jaringan menjadi faktor penting dalam menganalisis kinerja dan potensi tabrakan data.",
      question: "Pernyataan yang BENAR mengenai Collision Domain dan Broadcast Domain pada sebuah switch unmanaged 24-port standar adalah...",
      correctText: "Memiliki 24 Collision Domain terpisah dan 1 Broadcast Domain tunggal",
      distractors: [
        "Memiliki 1 Collision Domain tunggal dan 24 Broadcast Domain terpisah",
        "Memiliki 1 Collision Domain dan 1 Broadcast Domain saja",
        "Memiliki 24 Collision Domain dan 24 Broadcast Domain",
        "Tidak memiliki Collision Domain maupun Broadcast Domain"
      ],
      explanation: "Setiap port switch memisahkan collision domain (24 collision domain), namun secara default seluruh port berada dalam satu broadcast domain yang sama.",
      quickTip: "Switch 24-port = 24 Collision Domain terpisah dan 1 Broadcast Domain bersama."
    },
    {
      stimulus: "Untuk memecah satu broadcast domain fisik menjadi beberapa broadcast domain logis pada switch yang sama digunakan teknologi Virtual LAN.",
      question: "Standar protokol internasional IEEE untuk penandaan identitas VLAN (VLAN Tagging) pada frame Ethernet adalah...",
      correctText: "IEEE 802.1Q (Dot1Q)",
      distractors: [
        "IEEE 802.11ax",
        "IEEE 802.3ad",
        "IEEE 802.1D",
        "IEEE 802.3af"
      ],
      explanation: "IEEE 802.1Q adalah standar industri untuk VLAN tagging yang menyisipkan 4-byte tag field ke dalam frame header Ethernet asli.",
      quickTip: "Standar VLAN Tagging = IEEE 802.1Q (Dot1Q)."
    },
    {
      stimulus: "Dalam header penandaan IEEE 802.1Q, dialokasikan sejumlah bit biner untuk field VLAN ID (VID).",
      question: "Jumlah bit yang dialokasikan untuk VLAN ID dan rentang nilai ID VLAN yang valid adalah...",
      correctText: "12 bit, dengan rentang ID dari 1 sampai 4094",
      distractors: [
        "8 bit, dengan rentang ID dari 1 sampai 255",
        "16 bit, dengan rentang ID dari 1 sampai 65535",
        "4 bit, dengan rentang ID dari 1 sampai 16",
        "32 bit, dengan rentang ID tak terbatas"
      ],
      explanation: "Field VID terdiri dari 12 bit (2^12 = 4096 nilai). ID 0 dan 4095 dicadangkan, sehingga rentang VLAN yang dapat digunakan adalah 1 hingga 4094.",
      quickTip: "VLAN ID = 12 bit (rentang nilai 1 s.d. 4094)."
    },
    {
      stimulus: "Port switch yang dihubungkan langsung ke perangkat akhir pengguna (seperti PC, laptop siswa, atau printer kantor) diatur pada mode port tertentu.",
      question: "Tipe mode antarmuka port switch yang hanya membawa data dari tepat satu VLAN tanpa menyertakan tag 802.1Q ke komputer adalah...",
      correctText: "Mode Access (Access Port)",
      distractors: [
        "Mode Trunk",
        "Mode Hybrid Promiscuous",
        "Mode Mirror Port",
        "Mode Stacking Port"
      ],
      explanation: "Access Port hanya menjadi anggota dari 1 VLAN dan mengirimkan frame untagged standar ke perangkat akhir yang tidak mengerti tag 802.1Q.",
      quickTip: "Port switch menuju komputer pengguna = Port Mode Access."
    },
    {
      stimulus: "Untuk menghubungkan dua switch yang membawa beberapa traffic VLAN berbeda melalui satu bentangan kabel patch cord tunggal.",
      question: "Tipe mode antarmuka port switch penghubung antar-switch tersebut harus diatur pada...",
      correctText: "Mode Trunk (Trunk Port)",
      distractors: [
        "Mode Access",
        "Mode Console",
        "Mode Loopback",
        "Mode Half Duplex"
      ],
      explanation: "Trunk Port berfungsi sebagai pipa pembawa banyak VLAN antar-switch (atau switch ke router) dengan menyematkan tag VLAN ID 802.1Q pada setiap frame.",
      quickTip: "Port penghubung antar-switch yang membawa multi-VLAN = Port Mode Trunk."
    },
    {
      stimulus: "Pada port trunk IEEE 802.1Q, terdapat satu VLAN khusus di mana lalu lintas datanya dilewatkan tanpa disematkan tag identitas (Untagged Frame).",
      question: "Istilah untuk VLAN default tanpa tag pada tautan trunk tersebut adalah...",
      correctText: "Native VLAN (secara default adalah VLAN 1)",
      distractors: [
        "Voice VLAN",
        "Management VLAN Khusus",
        "Super VLAN",
        "Private VLAN Isolated"
      ],
      explanation: "Native VLAN adalah VLAN pada trunk port yang frame-nya tidak diberi tag 802.1Q saat ditransmisikan (default-nya adalah VLAN 1).",
      quickTip: "VLAN yang lewat trunk tanpa tag = Native VLAN (default VLAN 1)."
    },
    {
      stimulus: "Perangkat komputer pada VLAN 10 (Siswa) tidak dapat berkomunikasi langsung dengan komputer pada VLAN 20 (Guru) pada switch yang sama tanpa perangkat Layer 3.",
      question: "Perangkat jaringan yang dibutuhkan untuk menghubungkan komunikasi antar-VLAN (Inter-VLAN Routing) adalah...",
      correctText: "Router (atau Switch Multilayer Layer 3)",
      distractors: [
        "Hub 8-port pasif",
        "Repeater penguat sinyal kabel",
        "Modem ADSL eksternal",
        "Antena grid nirkabel"
      ],
      explanation: "Karena tiap VLAN merupakan subnet dan broadcast domain yang berbeda, komunikasi antar-VLAN memerlukan fungsi perutean Layer 3 (Router atau Switch L3).",
      quickTip: "Menghubungkan antar-VLAN yang berbeda butuh Router atau Switch Layer 3."
    },
    {
      stimulus: "Metode routing antar-VLAN yang menggunakan satu router fisik tunggal dengan satu kabel fisik yang dihubungkan ke port trunk switch dinamakan...",
      question: "Nama metode inter-VLAN routing menggunakan sub-interface virtual pada router tersebut adalah...",
      correctText: "Router-on-a-Stick",
      distractors: [
        "Legacy Multi-Interface Routing",
        "Default Route Gateway",
        "Dynamic Source Routing",
        "Point-to-Point Tunnel"
      ],
      explanation: "Router-on-a-Stick membagi satu antarmuka fisik router menjadi beberapa sub-interface logis (misal g0/0.10 dan g0/0.20) dengan enkapsulasi dot1q.",
      quickTip: "Inter-VLAN routing 1 kabel ke router via sub-interface = Router-on-a-Stick."
    },
    {
      stimulus: "Pada konfigurasi sub-interface router Cisco untuk Router-on-a-Stick, perintah wajib untuk mengasosiasikan sub-interface dengan VLAN ID 10 adalah...",
      question: "Sintaks perintah CLI yang tepat pada sub-interface router tersebut adalah...",
      correctText: "encapsulation dot1Q 10",
      distractors: [
        "vlan access 10",
        "switchport mode trunk 10",
        "ip vlan route 10",
        "network 10.0.0.0 dot1q"
      ],
      explanation: "Perintah `encapsulation dot1Q 10` memberitahu router untuk memproses dan menandai frame yang keluar-masuk sub-interface tersebut dengan tag VLAN 10.",
      quickTip: "Sintaks sub-interface router: encapsulation dot1Q <vlan-id>."
    },
    {
      stimulus: "Pada Switch Multilayer (Layer 3 Switch), antarmuka logis IP gateway yang dibuat untuk mewakili tiap VLAN di dalam switch disebut...",
      question: "Nama antarmuka virtual perutean internal switch layer 3 tersebut adalah...",
      correctText: "SVI (Switched Virtual Interface) / Interface VLAN",
      distractors: [
        "Loopback Interface",
        "Serial Interface DCE",
        "Null Interface 0",
        "Tunnel GRE Interface"
      ],
      explanation: "SVI dikonfigurasi dengan perintah `interface vlan 10` lalu diberi `ip address`, bertindak sebagai default gateway lokal tanpa butuh router eksternal.",
      quickTip: "Gateway VLAN di dalam Switch Layer 3 = SVI (Switched Virtual Interface)."
    },
    {
      stimulus: "Fitur keamanan switch yang membatasi jumlah dan alamat MAC Address tertentu yang diizinkan terhubung ke sebuah port fisik disebut...",
      question: "Nama fitur penguncian MAC pada port switch tersebut adalah...",
      correctText: "Port Security",
      distractors: [
        "Spanning Tree Protocol",
        "DHCP Snooping",
        "Dynamic ARP Inspection",
        "Storm Control"
      ],
      explanation: "Port Security mengamankan port switch agar hanya dapat diakses oleh MAC address terdaftar (misal PC tertentu), dan memblokir port jika ada perangkat asing mencolokkan kabel.",
      quickTip: "Membatasi akses port hanya untuk MAC tertentu = Port Security."
    },
    {
      stimulus: "Saat terjadi pelanggaran (violation) pada Port Security di mana ada komputer asing tak dikenal dicolokkan ke port switch.",
      question: "Mode penanganan pelanggaran (violation mode) default pada switch Cisco yang langsung mematikan port (status err-disabled) dan mencatat log adalah...",
      correctText: "Shutdown Mode",
      distractors: [
        "Protect Mode",
        "Restrict Mode",
        "Ignore Mode",
        "Bypass Mode"
      ],
      explanation: "Mode `shutdown` langsung mematikan port (lampu port mati/oranye dan status err-disable), mengirim SNMP trap, dan mencatat pelanggaran di syslog.",
      quickTip: "Violation mode yang mematikan port seketika = Shutdown (err-disabled)."
    },
    {
      stimulus: "Fitur keamanan switch Layer 2 yang membedakan port terpercaya (trusted) tempat DHCP Server resmi berada dengan port pengguna (untrusted) untuk mencegah Rogue DHCP Server adalah...",
      question: "Nama fitur perlindungan terhadap server DHCP palsu tersebut adalah...",
      correctText: "DHCP Snooping",
      distractors: [
        "Dynamic ARP Inspection (DAI)",
        "IP Source Guard",
        "BPDU Guard",
        "Root Guard"
      ],
      explanation: "DHCP Snooping memblokir pesan DHCP Offer dari port 'untrusted', memastikan klien hanya mendapatkan IP dari DHCP server sah di port 'trusted'.",
      quickTip: "Mencegah DHCP Server palsu di jaringan switch = DHCP Snooping."
    },
    {
      stimulus: "Untuk mengamati dan menganalisis paket data yang lewat pada port tertentu menggunakan software Wireshark tanpa memutus koneksi.",
      question: "Fitur switch yang menggandakan seluruh traffic dari port sumber ke port monitor tujuan disebut...",
      correctText: "Port Mirroring (SPAN - Switch Port Analyzer)",
      distractors: [
        "Port Aggregation",
        "Port Forwarding",
        "Port Security",
        "Port Triggering"
      ],
      explanation: "Port Mirroring (SPAN) menyalin seluruh frame yang masuk/keluar dari port target ke port lain yang terhubung ke laptop teknisi penganalisis paket.",
      quickTip: "Menggandakan traffic port untuk analisa Wireshark = Port Mirroring (SPAN)."
    },
    {
      stimulus: "Protokol manajemen VLAN Cisco lawas yang menyinkronkan penambahan dan penghapusan database VLAN ke seluruh switch dalam satu domain VTP adalah...",
      question: "Nama protokol manajemen basis data VLAN tersebut adalah...",
      correctText: "VTP (VLAN Trunking Protocol)",
      distractors: [
        "STP (Spanning Tree Protocol)",
        "CDP (Cisco Discovery Protocol)",
        "LLDP (Link Layer Discovery Protocol)",
        "SNMP (Simple Network Management Protocol)"
      ],
      explanation: "VTP mendistribusikan informasi konfigurasi VLAN (VLAN database) di seluruh switch dalam domain VTP yang sama melalui port trunk.",
      quickTip: "Sinkronisasi database VLAN antar-switch = VTP (VLAN Trunking Protocol)."
    },
    {
      stimulus: "Sebuah port switch disetel pada mode Trunk. Namun administrator ingin membatasi hanya VLAN 10 dan VLAN 20 saja yang boleh melintasi kabel tersebut.",
      question: "Perintah CLI switch Cisco yang digunakan untuk membatasi VLAN pada trunk adalah...",
      correctText: "switchport trunk allowed vlan 10,20",
      distractors: [
        "switchport mode access vlan 10,20",
        "vlan filter 10 20",
        "no switchport vlan all",
        "traffic-filter vlan 10 20"
      ],
      explanation: "Perintah `switchport trunk allowed vlan` membatasi lalu lintas pada trunk sehingga hanya VLAN yang ditentukan yang diizinkan lewat.",
      quickTip: "Membatasi VLAN pada trunk: switchport trunk allowed vlan <daftar-vlan>."
    },
    {
      stimulus: "Teknisi ingin memeriksa tabel MAC address yang sedang aktif dipelajari oleh switch Cisco melalui console.",
      question: "Perintah privileged EXEC mode yang tepat untuk menampilkan tabel MAC tersebut adalah...",
      correctText: "show mac address-table (atau show mac-address-table)",
      distractors: [
        "show ip route",
        "show ip interface brief",
        "show vlan brief",
        "show running-config interface"
      ],
      explanation: "Perintah `show mac address-table` menampilkan daftar alamat MAC yang dipelajari, port asosiasinya, dan VLAN masing-masing.",
      quickTip: "Melihat tabel MAC di switch Cisco = show mac address-table."
    },
    {
      stimulus: "Teknisi ingin memverifikasi daftar VLAN yang sudah dibuat pada switch Cisco beserta port-port yang menjadi anggotanya.",
      question: "Perintah CLI ringkas yang paling tepat untuk melihat status ringkasan VLAN adalah...",
      correctText: "show vlan brief",
      distractors: [
        "show ip route",
        "show interfaces trunk",
        "show mac address-table",
        "show version"
      ],
      explanation: "Perintah `show vlan brief` menyajikan tabel ringkas seluruh VLAN ID, nama VLAN, status aktif, dan daftar port access anggota masing-masing VLAN.",
      quickTip: "Melihat ringkasan seluruh VLAN dan anggotanya = show vlan brief."
    }
  ],
  mcma: [
    {
      stimulus: "Karakteristik dan manfaat penerapan Virtual LAN (VLAN) pada switch terkelola.",
      question: "Manakah yang MERUPAKAN keuntungan utama dari penerapan VLAN? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Membatasi luas penyebaran badai broadcast (memecah Broadcast Domain)", isCorrect: true },
        { text: "Meningkatkan keamanan dengan mengisolasi traffic antar-kelompok pengguna secara logis", isCorrect: true },
        { text: "Menghemat biaya pengadaan switch fisik untuk membedakan departemen kantor", isCorrect: true },
        { text: "Menghilangkan kebutuhan kabel fiber optik di seluruh dunia", isCorrect: false },
        { text: "Menambah kapasitas daya listrik baterai laptop pengguna", isCorrect: false }
      ],
      explanation: "Keuntungan VLAN: Memecah broadcast domain, meningkatkan keamanan segmen, dan efisiensi biaya infrastruktur fisik.",
      quickTip: "Manfaat VLAN: Memperkecil broadcast domain, isolasi keamanan, dan hemat hardware."
    },
    {
      stimulus: "Perbedaan konfigurasi antara Port Access dan Port Trunk pada switch.",
      question: "Manakah pernyataan yang BENAR mengenai Port Access dan Port Trunk? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Port Access biasanya dihubungkan ke perangkat akhir pengguna dan tidak menambahkan tag 802.1Q pada frame", isCorrect: true },
        { text: "Port Trunk digunakan untuk koneksi antar-switch atau switch ke router dan membawa banyak VLAN bertag 802.1Q", isCorrect: true },
        { text: "Port Access dapat membawa hingga 50 VLAN sekaligus ke satu kartu jaringan komputer standar", isCorrect: false },
        { text: "Port Trunk selalu mematikan seluruh aliran data jaringan", isCorrect: false },
        { text: "Port Trunk wajib selalu dihubungkan langsung ke printer cetak kertas", isCorrect: false }
      ],
      explanation: "Port Access untuk end-device (untagged, 1 VLAN); Port Trunk untuk interkoneksi switch/router (tagged multi-VLAN).",
      quickTip: "Access = 1 VLAN untagged ke PC; Trunk = Multi-VLAN tagged antar-switch."
    },
    {
      stimulus: "Metode Inter-VLAN Routing untuk menghubungkan komunikasi antar-VLAN yang berbeda.",
      question: "Manakah metode resmi yang dapat digunakan untuk melakukan routing antar-VLAN? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Router-on-a-Stick menggunakan sub-interface virtual pada router dan trunk port switch", isCorrect: true },
        { text: "Switch Multilayer Layer 3 menggunakan Switched Virtual Interface (SVI)", isCorrect: true },
        { text: "Menghubungkan dua port access switch yang berbeda dengan kabel patch cord tanpa router", isCorrect: false },
        { text: "Memasang konektor BNC pada port USB komputer", isCorrect: false },
        { text: "Menyalakan fitur Bluetooth pada seluruh ponsel ruangan", isCorrect: false }
      ],
      explanation: "Inter-VLAN routing resmi dilakukan via Router-on-a-Stick atau Switch Multilayer L3 dengan SVI. Menyambung dua port beda VLAN dengan kabel fisik adalah praktik buruk yang merusak segmentasi.",
      quickTip: "Dua metode inter-VLAN routing: Router-on-a-Stick dan SVI Switch Layer 3."
    },
    {
      stimulus: "Mode pelanggaran (Violation Mode) pada fitur Port Security switch Cisco.",
      question: "Manakah opsi mode violation yang TERSEDIA pada konfigurasi Port Security? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Shutdown (mematikan port secara total ke status err-disabled dan mencatat log)", isCorrect: true },
        { text: "Restrict (membuang paket asing, menaikkan violation counter, dan mengirim log trap)", isCorrect: true },
        { text: "Protect (membuang paket asing tanpa mencatat log violation)", isCorrect: true },
        { text: "Destroy (meledakkan kartu jaringan asing)", isCorrect: false },
        { text: "Format (menghapus sistem operasi komputer penyusup)", isCorrect: false }
      ],
      explanation: "Tiga mode violation port security adalah: Shutdown (default), Restrict, dan Protect.",
      quickTip: "Tiga mode Port Security: Shutdown, Restrict, dan Protect."
    },
    {
      stimulus: "Mekanisme kerja internal switch jaringan saat memproses frame Ethernet.",
      question: "Manakah proses yang DILAKUKAN oleh switch jaringan Layer 2? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Mempelajari (learning) source MAC address dari frame yang masuk untuk memperbarui tabel CAM", isCorrect: true },
        { text: "Meneruskan (forwarding) frame langsung ke port tertentu jika destination MAC ada di tabel", isCorrect: true },
        { text: "Melakukan flooding frame broadcast ke seluruh port aktif dalam VLAN yang sama", isCorrect: true },
        { text: "Mengubah alamat IP pengirim secara otomatis menjadi IP Publik internet", isCorrect: false },
        { text: "Mengkompresi isi dokumen PDF yang dikirimkan oleh pengguna", isCorrect: false }
      ],
      explanation: "Fungsi dasar switch: Learning (mencatat source MAC), Forwarding (meneruskan jika ada di tabel), Flooding (jika unknown atau broadcast), dan Filtering.",
      quickTip: "Aktivitas dasar switch: Learning, Forwarding, Filtering, dan Flooding."
    }
  ],
  tf: [
    {
      stimulus: "Pemisahan domain collision dan broadcast pada switch.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai domain jaringan switch!",
      statements: [
        { text: "Setiap port fisik pada switch membentuk collision domain yang terisolasi mandiri.", correct: "B" },
        { text: "Secara default sebelum dikonfigurasi VLAN, seluruh port switch berada dalam satu broadcast domain yang sama.", correct: "B" },
        { text: "Switch 24-port secara default memiliki 24 broadcast domain yang berbeda.", correct: "S" }
      ],
      explanation: "Switch default hanya memiliki 1 broadcast domain untuk seluruh port; butuh konfigurasi VLAN untuk memecahnya.",
      quickTip: "Switch default = Banyak collision domain, tetapi hanya 1 broadcast domain."
    },
    {
      stimulus: "Penandaan frame IEEE 802.1Q pada port trunk.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang VLAN tagging!",
      statements: [
        { text: "Header tag IEEE 802.1Q disematkan pada frame saat melintasi port mode trunk.", correct: "B" },
        { text: "Frame yang melewati port mode access menuju komputer pengguna tidak memiliki tag 802.1Q (untagged).", correct: "B" },
        { text: "Kartu jaringan komputer biasa dapat membaca dan memproses 50 tag VLAN sekaligus tanpa driver khusus.", correct: "S" }
      ],
      explanation: "Kartu jaringan standar PC mengharapkan frame Ethernet standar untagged; tag 802.1Q dilepas oleh switch access port sebelum dikirim ke PC.",
      quickTip: "Port Access melepas tag 802.1Q agar PC dapat membaca frame normal."
    },
    {
      stimulus: "Konfigurasi Native VLAN pada trunk link.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Native VLAN!",
      statements: [
        { text: "Native VLAN adalah VLAN yang lalu lintas datanya dilewatkan tanpa tag (untagged) pada port trunk.", correct: "B" },
        { text: "Konfigurasi Native VLAN harus sama di kedua ujung switch yang terhubung kabel trunk (mencegah Native VLAN mismatch).", correct: "B" },
        { text: "Native VLAN wajib selalu bernilai angka 9999 dan tidak bisa diubah.", correct: "S" }
      ],
      explanation: "Default Native VLAN adalah VLAN 1 dan dapat diubah ke ID lain yang valid (1-4094). Angka 9999 tidak valid karena batas maksimal VID adalah 4094.",
      quickTip: "Native VLAN harus sama di kedua ujung trunk; default-nya VLAN 1."
    },
    {
      stimulus: "Kebutuhan perutean pada komunikasi antar-VLAN.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai komunikasi antar-VLAN!",
      statements: [
        { text: "Perangkat di VLAN 10 tidak dapat saling berkirim paket ke perangkat di VLAN 20 tanpa melewati perangkat Layer 3.", correct: "B" },
        { text: "Switch Layer 3 dapat merutekan paket antar-VLAN menggunakan interface SVI tanpa memerlukan router eksternal.", correct: "B" },
        { text: "Cukup dengan mengganti warna kabel LAN, komputer beda VLAN otomatis bisa langsung berkomunikasi tanpa router.", correct: "S" }
      ],
      explanation: "Perbedaan VLAN adalah perbedaan logis Layer 3 subnet yang mutlak membutuhkan mekanisme routing.",
      quickTip: "Beda VLAN wajib lewat routing Layer 3 (Router atau Switch L3 SVI)."
    },
    {
      stimulus: "Fitur keamanan Port Security pada switch.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Port Security!",
      statements: [
        { text: "Port Security dapat dikonfigurasikan untuk membatasi jumlah maksimum alamat MAC yang diizinkan pada suatu port.", correct: "B" },
        { text: "Mode violation shutdown akan menonaktifkan port (status err-disabled) jika ada MAC asing terdeteksi.", correct: "B" },
        { text: "Port Security secara otomatis akan menghapus seluruh data di hard disk pengguna penyusup.", correct: "S" }
      ],
      explanation: "Port Security hanya mematikan/membatasi port fisik switch jaringan, tidak memiliki akses ke hard disk komputer pengguna.",
      quickTip: "Port Security mengunci akses port switch, bukan memformat hard disk."
    }
  ]
};

const s20 = {
  sessionId: "s20",
  pg: [
    {
      stimulus: "Perangkat Router beroperasi pada Network Layer (Layer 3) dengan tugas pokok menghubungkan jaringan-jaringan yang berbeda.",
      question: "Dua fungsi utama yang dijalankan oleh router dalam jaringan komputer adalah...",
      correctText: "Menentukan jalur terbaik (Path Determination) dan meneruskan paket data antar-jaringan (Packet Forwarding)",
      distractors: [
        "Menghubungkan kabel monitor dan keyboard komputer",
        "Menjepit konektor RJ-45 dan mengupas kabel UTP",
        "Mengukur redaman kabel serat optik dalam dBm",
        "Mendinginkan suhu ruangan laboratorium komputer"
      ],
      explanation: "Fungsi utama router adalah Path Determination (menentukan rute terbaik menuju tujuan berdasarkan tabel routing) dan Forwarding (meneruskan paket ke antarmuka berikutnya).",
      quickTip: "Fungsi utama router = Menentukan rute terbaik (Path Determination) dan meneruskan paket (Forwarding)."
    },
    {
      stimulus: "Router mengambil keputusan penerusan paket berdasarkan informasi yang tersimpan di dalam memori internalnya.",
      question: "Daftar pemetaan jaringan tujuan, alamat gateway berikutnya (next-hop), dan antarmuka keluar pada router disebut...",
      correctText: "Routing Table (Tabel Routing)",
      distractors: [
        "ARP Table",
        "MAC Address Table",
        "DNS Cache",
        "DHCP Lease Table"
      ],
      explanation: "Routing Table berisi daftar jaringan tujuan (destination network), subnet mask, next-hop gateway IP, exit interface, dan nilai metrik rute.",
      quickTip: "Basis data rute tujuan pada router = Routing Table."
    },
    {
      stimulus: "Nilai tingkat keterpercayaan sumber rute yang digunakan router untuk memilih rute terbaik jika terdapat beberapa protokol yang menawarkan rute ke tujuan yang sama disebut...",
      question: "Parameter prioritas keterpercayaan rute tersebut adalah...",
      correctText: "Administrative Distance (AD)",
      distractors: [
        "Metric Cost",
        "Hop Count",
        "Bandwidth Delay",
        "Maximum Transmission Unit (MTU)"
      ],
      explanation: "Administrative Distance (AD) menentukan prioritas protokol: semakin kecil nilai AD, semakin dipercaya rute tersebut (Connected=0, Static=1, OSPF=110, RIP=120).",
      quickTip: "Tingkat kepercayaan sumber rute = Administrative Distance (semakin kecil semakin diprioritaskan)."
    },
    {
      stimulus: "Nilai Administrative Distance (AD) standar pada router Cisco untuk rute yang terhubung langsung (Directly Connected Network) adalah...",
      question: "Berapakah nilai AD untuk interface yang connected langsung tersebut?",
      correctText: "0",
      distractors: [
        "1",
        "90",
        "110",
        "120"
      ],
      explanation: "Directly Connected memiliki AD paling terpercaya, yaitu bernilai 0.",
      quickTip: "AD Directly Connected = 0."
    },
    {
      stimulus: "Administrator jaringan menambahkan rute manual pada router Cisco menggunakan perintah `ip route`.",
      question: "Nilai default Administrative Distance (AD) untuk rute statis (Static Route) pada router Cisco adalah...",
      correctText: "1",
      distractors: [
        "0",
        "5",
        "110",
        "120"
      ],
      explanation: "Static route memiliki nilai default AD sebesar 1, menjadikannya rute yang sangat dipercaya di atas protokol routing dinamis.",
      quickTip: "AD Static Route = 1."
    },
    {
      stimulus: "Sebuah rute statis cadangan (Floating Static Route) dikonfigurasi agar hanya aktif jika rute utama (misal OSPF dengan AD 110) mengalami kegagalan.",
      question: "Nilai Administrative Distance yang tepat dikonfigurasikan pada rute statis cadangan tersebut adalah...",
      correctText: "Lebih besar dari 110 (misalnya AD disetel bernilai 120 atau 130)",
      distractors: [
        "Tepat bernilai 1",
        "Bernilai 0",
        "Bernilai minus (-10)",
        "Lebih kecil dari 90"
      ],
      explanation: "Floating Static Route diberikan nilai AD lebih tinggi dari rute utama (misal AD 130 > OSPF 110). Rute ini akan 'mengapung' pasif dan otomatis muncul di tabel saat rute OSPF mati.",
      quickTip: "Floating Static Route dikonfigurasi dengan nilai AD lebih tinggi dari rute utama."
    },
    {
      stimulus: "Sebuah router kantor cabang perlu meneruskan seluruh paket internet yang tujuannya tidak terdaftar di tabel routing menuju router pusat ISP.",
      question: "Sintaks perintah CLI router Cisco untuk membuat Default Route (Gateway of Last Resort) menuju next-hop 192.168.1.1 adalah...",
      correctText: "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      distractors: [
        "ip route 255.255.255.255 255.255.255.255 192.168.1.1",
        "ip default-gateway 0.0.0.0",
        "route add internet 192.168.1.1",
        "router rip network 0.0.0.0"
      ],
      explanation: "Format rute statis: `ip route <network-tujuan> <subnet-mask> <ip-next-hop>`. Default route ditulis `0.0.0.0 0.0.0.0`.",
      quickTip: "Default Route = ip route 0.0.0.0 0.0.0.0 <next-hop>."
    },
    {
      stimulus: "Protokol routing dinamis dikelompokkan menjadi Interior Gateway Protocol (IGP) dan Exterior Gateway Protocol (EGP).",
      question: "Protokol routing standar industri yang digunakan untuk bertukar rute antar-Autonomous System (AS) di seluruh dunia internet publik adalah...",
      correctText: "BGP (Border Gateway Protocol)",
      distractors: [
        "OSPF (Open Shortest Path First)",
        "RIP (Routing Information Protocol)",
        "EIGRP (Enhanced Interior Gateway Routing Protocol)",
        "IS-IS (Intermediate System to Intermediate System)"
      ],
      explanation: "BGP adalah protokol EGP standar de facto yang menghubungkan ribuan Autonomous System penyedia layanan internet (ISP) di seluruh dunia.",
      quickTip: "Routing antar-AS skala internet global = BGP (Border Gateway Protocol)."
    },
    {
      stimulus: "Protokol routing dinamis OSPF (Open Shortest Path First) mengandalkan algoritma pencarian jalur terpendek.",
      question: "Nama algoritma matematis pohon pencarian jalur yang digunakan oleh OSPF adalah...",
      correctText: "Algoritma Dijkstra (Shortest Path First / SPF)",
      distractors: [
        "Algoritma Bellman-Ford",
        "Algoritma DUAL Diffusing Update",
        "Algoritma Brute Force",
        "Algoritma Bubble Sort"
      ],
      explanation: "OSPF adalah protokol Link-State yang menggunakan algoritma Dijkstra SPF untuk menghitung rute bebas loop dengan biaya terendah ke setiap node.",
      quickTip: "Algoritma OSPF = Dijkstra (Shortest Path First / SPF)."
    },
    {
      stimulus: "Parameter metrik yang digunakan oleh OSPF untuk menentukan rute terbaik didasarkan pada karakteristik link antarmuka.",
      question: "Metrik utama yang digunakan oleh OSPF adalah...",
      correctText: "Cost (berbanding terbalik dengan Bandwidth tautan: 10^8 / Bandwidth)",
      distractors: [
        "Hop Count (Jumlah lompatan router)",
        "Delay propagasi kabel",
        "Beban traffic (Load) antarmuka",
        "Reliability persentase kegagalan"
      ],
      explanation: "OSPF menghitung Metric Cost berdasarkan bandwidth antarmuka. Semakin besar bandwidth, semakin kecil nilai Cost-nya, dan semakin diprioritaskan jalurnya.",
      quickTip: "Metrik OSPF = Cost (dihitung dari Bandwidth antarmuka)."
    },
    {
      stimulus: "Dalam hierarki desain multi-area OSPF, seluruh area non-backbone wajib terhubung langsung ke satu area pusat utama.",
      question: "Nama dan nomor identitas area pusat tulang punggung (Backbone Area) pada OSPF adalah...",
      correctText: "Area 0 (Backbone Area)",
      distractors: [
        "Area 1 (Access Area)",
        "Area 10 (Distribution Area)",
        "Area 100 (Core Area)",
        "Area 255 (Global Area)"
      ],
      explanation: "OSPF mewajibkan adanya Area 0 (Backbone Area). Semua area OSPF lainnya (Area 1, Area 2, dst.) harus menempel langsung ke Area 0.",
      quickTip: "Area tulang punggung OSPF wajib ada = Area 0 (Backbone Area)."
    },
    {
      stimulus: "Router OSPF saling bertukar paket berkala untuk mendeteksi keberadaan tetangga (neighbor) dan memastikan link tetap hidup.",
      question: "Nama paket berkala yang dikirimkan setiap 10 detik sekali oleh router OSPF pada jaringan broadcast adalah...",
      correctText: "Hello Packet",
      distractors: [
        "LSU (Link State Update)",
        "LSA (Link State Advertisement)",
        "LSR (Link State Request)",
        "DBD (Database Description)"
      ],
      explanation: "OSPF Hello packet dikirim setiap 10 detik untuk membentuk relasi tetangga (adjacency) dan memeriksa status liveness tetangga.",
      quickTip: "Paket berkala pembentuk tetangga OSPF = Hello Packet."
    },
    {
      stimulus: "Protokol routing dinamis klasik RIP (Routing Information Protocol) menggunakan algoritma Distance Vector.",
      question: "Metrik yang digunakan oleh RIP untuk menentukan jalur terbaik menuju jaringan tujuan adalah...",
      correctText: "Hop Count (Jumlah router perantara yang dilompati)",
      distractors: [
        "Bandwidth link kabel",
        "Cost nilai rupiah lisensi",
        "Delay waktu tempuh milidetik",
        "MTU ukuran paket"
      ],
      explanation: "RIP hanya menghitung berapa banyak router (hop) yang dilalui. Jalur dengan jumlah hop paling sedikit akan dipilih sebagai rute terbaik.",
      quickTip: "Metrik protokol RIP = Hop Count (jumlah lompatan router)."
    },
    {
      stimulus: "Protokol RIP memiliki batasan jumlah maksimal router yang dapat dilalui sebelum suatu jaringan dinyatakan tidak dapat dijangkau (unreachable).",
      question: "Batas maksimal hop count pada protokol RIP dan nilai hop yang menyatakan tujuan unreachable adalah...",
      correctText: "Maksimal 15 hop, dan nilai 16 hop dianggap tak terjangkau (unreachable)",
      distractors: [
        "Maksimal 255 hop, dan 256 unreachable",
        "Maksimal 100 hop, dan 101 unreachable",
        "Maksimal 5 hop, dan 6 unreachable",
        "Tidak ada batasan hop count"
      ],
      explanation: "Batas maksimal RIP adalah 15 hop untuk mencegah perputaran paket tanpa akhir (count-to-infinity). Hop ke-16 dianggap tidak terjangkau (infinity).",
      quickTip: "Batas maksimal RIP = 15 Hop (16 Hop = Unreachable)."
    },
    {
      stimulus: "Teknologi Network Address Translation (NAT) jenis Masquerade sangat populer digunakan pada router MikroTik dan Linux kantor.",
      question: "Karakteristik teknis dari NAT Masquerade (Port Address Translation) adalah...",
      correctText: "Otomatis menggunakan alamat IP publik yang sedang aktif terpasang pada interface keluar tanpa perlu memasukkan IP publik secara statis",
      distractors: [
        "Membutuhkan 100 alamat IP publik statis untuk setiap komputer",
        "Hanya dapat bekerja jika internet menggunakan kabel telepon",
        "Mengubah data menjadi format gambar",
        "Mematikan fungsi firewall router secara total"
      ],
      explanation: "Action `masquerade` adalah varian PAT khusus untuk koneksi yang IP publiknya dinamis (seperti PPPoE/DHCP ISP): router otomatis meminjam IP interface keluar.",
      quickTip: "Masquerade = PAT dinamis yang otomatis memakai IP interface publik keluar."
    },
    {
      stimulus: "Sebuah server web lokal kantor memiliki alamat privat 192.168.1.100. Perusahaan ingin agar web server tersebut dapat diakses oleh publik internet melalui IP Publik 203.0.113.5 pada port 80.",
      question: "Fitur NAT yang memetakan port publik tertentu langsung ke IP privat dan port server internal disebut...",
      correctText: "Port Forwarding (Destination NAT / D-NAT)",
      distractors: [
        "Source NAT (S-NAT)",
        "Masquerade NAT",
        "IPsec Tunnel",
        "VLAN Access Port"
      ],
      explanation: "Port Forwarding (Destination NAT) mengubah alamat IP dan port tujuan dari paket luar yang masuk menuju ke IP server privat lokal.",
      quickTip: "Membuka akses server lokal agar bisa diakses dari internet = Port Forwarding (Dst-NAT)."
    },
    {
      stimulus: "Teknisi ingin memeriksa tabel routing aktif pada router Cisco melalui antarmuka CLI.",
      question: "Perintah privileged mode yang tepat untuk menampilkan seluruh daftar rute pada router Cisco adalah...",
      correctText: "show ip route",
      distractors: [
        "show ip interface brief",
        "show mac address-table",
        "show running-config router",
        "show arp"
      ],
      explanation: "Perintah `show ip route` menampilkan tabel perutean lengkap, termasuk kode sumber rute: C (Connected), S (Static), O (OSPF), R (RIP), D (EIGRP).",
      quickTip: "Melihat tabel routing di router Cisco = show ip route."
    },
    {
      stimulus: "Pada tabel routing sebuah router, di samping sebuah baris rute terdapat kode huruf penanda '[110/65]'.",
      question: "Arti dari angka 110 dan 65 pada penanda '[110/65]' tersebut adalah...",
      correctText: "110 adalah nilai Administrative Distance (OSPF) dan 65 adalah nilai Metrik Cost",
      distractors: [
        "110 adalah nomor port switch dan 65 adalah persentase CPU",
        "110 adalah nomor VLAN dan 65 adalah jumlah komputer",
        "110 adalah IP gateway dan 65 adalah detik sewa DHCP",
        "110 adalah kecepatan internet Mbps dan 65 adalah suhu derajat Celcius"
      ],
      explanation: "Format penulisan rute Cisco: `[Administrative Distance / Metric]`. 110 adalah AD standar OSPF dan 65 adalah total akumulasi cost ke tujuan.",
      quickTip: "Notasi [AD/Metrik]: [110/65] = AD 110 (OSPF) dan Metrik Cost 65."
    },
    {
      stimulus: "Teknisi ingin melihat status ringkas kondisi port interface (status Up/Down dan alamat IP yang terpasang) pada router Cisco.",
      question: "Perintah CLI paling populer dan efisien untuk memeriksa status antarmuka tersebut adalah...",
      correctText: "show ip interface brief",
      distractors: [
        "show ip route",
        "show controllers serial",
        "show arp",
        "show running-config"
      ],
      explanation: "Perintah `show ip interface brief` memberikan tabel rangkuman: nama interface, IP address, status status layer 1 (Status: Up/Down), dan layer 2 (Protocol: Up/Down).",
      quickTip: "Cek ringkasan IP dan status port router = show ip interface brief."
    },
    {
      stimulus: "Sebelum sebuah antarmuka fisik router Cisco dapat mulai aktif mengalirkan sinyal data, port harus dinyalakan dari status default shutdown pabrik.",
      question: "Perintah antarmuka wajib untuk mengaktifkan port router Cisco adalah...",
      correctText: "no shutdown",
      distractors: [
        "enable port",
        "turn on interface",
        "start link",
        "active all"
      ],
      explanation: "Secara default seluruh port interface router Cisco berada dalam kondisi `administratively down (shutdown)`. Perintah `no shutdown` membatalkannya dan mengaktifkan port.",
      quickTip: "Menyalakan port interface router Cisco = no shutdown."
    }
  ],
  mcma: [
    {
      stimulus: "Perbandingan karakteristik antara Routing Statis dan Routing Dinamis.",
      question: "Manakah pernyataan yang BENAR mengenai kelebihan Routing Statis? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Beban kerja prosesor (CPU) dan memori router sangat ringan karena tidak ada proses kalkulasi algoritma periodik", isCorrect: true },
        { text: "Lebih aman karena jalur ditentukan secara manual dan tidak memancarkan pesan iklan rute (routing update) ke jaringan", isCorrect: true },
        { text: "Sangat cocok untuk jaringan internet berskala raksasa dengan ribuan router", isCorrect: false },
        { text: "Dapat melakukan pengalihan jalur otomatis secara instan saat kabel utama putus tanpa konfigurasi tambahan", isCorrect: false },
        { text: "Tidak membutuhkan administrator jaringan sama sekali", isCorrect: false }
      ],
      explanation: "Routing statis hemat CPU/memori dan lebih aman dari spoofing rute, namun kelemahannya tidak otomatis dan sulit dikelola di jaringan besar.",
      quickTip: "Kelebihan Routing Statis: Hemat beban CPU & aman tanpa routing update."
    },
    {
      stimulus: "Nilai Administrative Distance (AD) standar pada sistem operasi router.",
      question: "Manakah pasangan antara sumber rute dan nilai AD standar yang BENAR pada router Cisco? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Directly Connected = AD 0", isCorrect: true },
        { text: "Static Route = AD 1", isCorrect: true },
        { text: "OSPF = AD 110", isCorrect: true },
        { text: "RIP = AD 1", isCorrect: false },
        { text: "Directly Connected = AD 120", isCorrect: false }
      ],
      explanation: "Connected = 0, Static = 1, EIGRP = 90, OSPF = 110, RIP = 120.",
      quickTip: "AD: Connected=0, Static=1, OSPF=110, RIP=120."
    },
    {
      stimulus: "Protokol routing dinamis OSPF (Open Shortest Path First).",
      question: "Manakah karakteristik dari protokol routing OSPF? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menggunakan algoritma Link-State Dijkstra (Shortest Path First)", isCorrect: true },
        { text: "Metrik perutean didasarkan pada Cost (akumulasi bandwidth link)", isCorrect: true },
        { text: "Mendukung desain jaringan hierarkis multi-area dengan Area 0 sebagai backbone", isCorrect: true },
        { text: "Membatasi ukuran jaringan maksimal hanya 15 router saja", isCorrect: false },
        { text: "Hanya mengirimkan update rute setiap 30 menit sekali secara lambat", isCorrect: false }
      ],
      explanation: "OSPF adalah link-state ber-algoritma Dijkstra, metrik Cost, dan desain multi-area (Area 0). Batas 15 hop adalah milik RIP.",
      quickTip: "Karakteristik OSPF: Link-State Dijkstra, metrik Cost, dan Area 0 Backbone."
    },
    {
      stimulus: "Implementasi teknologi Network Address Translation (NAT).",
      question: "Manakah tipe implementasi NAT yang umum digunakan dalam jaringan? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "PAT (Port Address Translation / NAT Overload / Masquerade) memetakan banyak IP privat ke satu IP publik", isCorrect: true },
        { text: "Destination NAT (Port Forwarding) memetakan port IP publik ke server lokal privat", isCorrect: true },
        { text: "Radio Frequency NAT untuk memodulasi gelombang suara", isCorrect: false },
        { text: "Laser Splicing NAT untuk menyambung serat kaca", isCorrect: false },
        { text: "Battery Charging NAT untuk mengisi daya ponsel", isCorrect: false }
      ],
      explanation: "Dua implementasi NAT esensial adalah PAT (Source NAT overload untuk outbound internet) dan Port Forwarding (Destination NAT untuk inbound server).",
      quickTip: "Dua tipe NAT utama: PAT/Masquerade (Outbound) dan Port Forwarding/Dst-NAT (Inbound)."
    },
    {
      stimulus: "Tugas dan fungsi perangkat Router dalam jaringan telekomunikasi.",
      question: "Manakah yang MERUPAKAN fungsi dari perangkat Router Layer 3? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menghubungkan jaringan-jaringan yang memiliki Network ID (subnet) berbeda", isCorrect: true },
        { text: "Memisahkan Broadcast Domain sehingga paket broadcast tidak meluas ke jaringan lain", isCorrect: true },
        { text: "Menentukan jalur terbaik meneruskan paket berdasarkan tabel routing", isCorrect: true },
        { text: "Mengubah dokumen Microsoft Word menjadi video", isCorrect: false },
        { text: "Mencegah korsleting listrik pada instalasi genset kantor", isCorrect: false }
      ],
      explanation: "Router memisahkan broadcast domain, menghubungkan subnet berbeda, dan merutekan paket berdasarkan rute terbaik.",
      quickTip: "Fungsi Router: Memisahkan broadcast domain, interkoneksi subnet, dan path determination."
    }
  ],
  tf: [
    {
      stimulus: "Pemisahan domain broadcast oleh perangkat Router.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Router dan Broadcast Domain!",
      statements: [
        { text: "Setiap antarmuka (interface) aktif pada router memisahkan broadcast domain secara mandiri.", correct: "B" },
        { text: "Secara default, router tidak meneruskan paket broadcast layer 2/3 melintasi antarmukanya.", correct: "B" },
        { text: "Router akan menyebarkan badai broadcast dari satu ruangan ke seluruh internet dunia.", correct: "S" }
      ],
      explanation: "Router bertindak sebagai pembatas broadcast (broadcast boundary); paket broadcast tidak diteruskan melintasi router.",
      quickTip: "Router memblokir dan menghentikan broadcast agar tidak menyebar ke jaringan lain."
    },
    {
      stimulus: "Prinsip nilai Administrative Distance (AD).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Administrative Distance!",
      statements: [
        { text: "Semakin kecil nilai Administrative Distance, maka sumber rute tersebut semakin dipercaya oleh router.", correct: "B" },
        { text: "Rute yang terhubung langsung (Directly Connected) memiliki nilai AD 0 (paling terpercaya).", correct: "B" },
        { text: "Rute dengan nilai AD 255 adalah rute paling sempurna dan paling diprioritaskan oleh router.", correct: "S" }
      ],
      explanation: "Nilai AD 255 menandakan rute tidak dipercaya sama sekali dan tidak akan pernah dimasukkan ke dalam tabel routing.",
      quickTip: "AD semakin kecil semakin dipercaya (AD 0 terbaik; AD 255 tidak dipercaya)."
    },
    {
      stimulus: "Default Route (0.0.0.0/0) pada router.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Default Route!",
      statements: [
        { text: "Default Route digunakan untuk meneruskan paket yang alamat tujuannya tidak cocok dengan baris rute lain di tabel routing.", correct: "B" },
        { text: "Pada router Cisco, default route dikonfigurasi dengan perintah: ip route 0.0.0.0 0.0.0.0 <next-hop>.", correct: "B" },
        { text: "Router yang tidak memiliki default route dan tidak mengenal tujuan paket akan menyimpan paket tersebut selamanya di hard disk.", correct: "S" }
      ],
      explanation: "Jika tujuan tidak ada di routing table dan tidak ada default route, router akan langsung membuang paket (packet dropped) dan mengirim pesan ICMP Destination Unreachable.",
      quickTip: "Paket tanpa rute dan tanpa default route akan langsung di-drop."
    },
    {
      stimulus: "Karakteristik protokol OSPF vs RIP.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang OSPF dan RIP!",
      statements: [
        { text: "OSPF memiliki waktu konvergensi yang jauh lebih cepat dibanding RIP.", correct: "B" },
        { text: "Protokol RIP dibatasi maksimal hanya 15 hop dan tidak cocok untuk jaringan berskala besar.", correct: "B" },
        { text: "OSPF menghitung jalur terbaik hanya berdasarkan jumlah hop lompatan kabel tanpa peduli kecepatan bandwidth.", correct: "S" }
      ],
      explanation: "OSPF memperhitungkan kecepatan bandwidth (Cost), bukan hop count. Yang hanya melihat hop count adalah RIP.",
      quickTip: "OSPF peduli bandwidth (Cost); RIP hanya menghitung lompatan router (Hop Count)."
    },
    {
      stimulus: "Fungsi Port Forwarding (Destination NAT).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Port Forwarding!",
      statements: [
        { text: "Port Forwarding memungkinkan server web di jaringan lokal privat dapat diakses dari internet publik.", correct: "B" },
        { text: "Port Forwarding mengubah alamat IP dan port tujuan dari paket luar yang masuk.", correct: "B" },
        { text: "Port Forwarding hanya dapat dijalankan jika komputer server dimatikan total.", correct: "S" }
      ],
      explanation: "Port Forwarding membutuhkan server internal dalam kondisi hidup dan layanannya (web/database/ssh) aktif mendengarkan port.",
      quickTip: "Port Forwarding mengarahkan traffic luar ke server lokal yang sedang aktif."
    }
  ]
};

const s21 = {
  sessionId: "s21",
  pg: [
    {
      stimulus: "Sistem operasi server berbasis Linux (seperti Debian, Ubuntu Server, atau Rocky Linux) mendominasi infrastruktur data center dunia.",
      question: "Ciri utama dari distribusi Linux Server edisi murni jika dibandingkan dengan edisi Desktop adalah...",
      correctText: "Secara default tidak menginstal antarmuka grafis (GUI) melainkan beroperasi penuh melalui Command Line Interface (CLI) untuk efisiensi sumber daya",
      distractors: [
        "Tidak bisa dihubungkan ke kabel jaringan internet sama sekali",
        "Wajib menggunakan monitor layar sentuh berukuran raksasa",
        "Hanya bisa dioperasikan menggunakan joystick game",
        "Mengharuskan pengguna membayar biaya lisensi per jam"
      ],
      explanation: "Linux Server beroperasi secara headless via CLI teks tanpa GUI desktop environment (GNOME/KDE) demi memaksimalkan alokasi CPU dan RAM untuk layanan server.",
      quickTip: "Linux Server beroperasi via CLI tanpa GUI desktop untuk efisiensi performa."
    },
    {
      stimulus: "Pengguna tertinggi yang memiliki hak akses mutlak tanpa batas (Superuser) pada sistem operasi Linux adalah...",
      question: "Nama akun administrator tertinggi pada sistem Linux tersebut adalah...",
      correctText: "root (dengan simbol prompt tanda pagar #)",
      distractors: [
        "Administrator (dengan simbol prompt C:\\>)",
        "guest (dengan simbol prompt ?)",
        "operator (dengan simbol prompt $)",
        "supervisor (dengan simbol prompt @)"
      ],
      explanation: "User `root` adalah superuser Linux dengan UID 0 dan simbol prompt `#`. Pengguna biasa memiliki simbol prompt `$`.",
      quickTip: "Superuser Linux = root (simbol prompt #); User biasa bersimbol $."
    },
    {
      stimulus: "Untuk menjalankan perintah administratif dengan hak istimewa superuser sementara waktu dari akun pengguna biasa, digunakan perintah awalan...",
      question: "Perintah awalan eskalasi hak istimewa tersebut adalah...",
      correctText: "sudo (Superuser Do)",
      distractors: [
        "runas",
        "admin",
        "execute",
        "login"
      ],
      explanation: "Perintah `sudo` (Superuser Do) memungkinkan pengguna yang terdaftar di file `/etc/sudoers` menjalankan perintah istimewa dengan aman.",
      quickTip: "Menjalankan perintah superuser dari user biasa = sudo."
    },
    {
      stimulus: "Perintah dasar Linux CLI yang digunakan untuk menampilkan direktori kerja tempat pengguna saat ini berada adalah...",
      question: "Perintah pengecekan direktori kerja aktif tersebut adalah...",
      correctText: "pwd (print working directory)",
      distractors: [
        "cd (change directory)",
        "ls (list directory)",
        "mkdir (make directory)",
        "whoami"
      ],
      explanation: "`pwd` singkatan dari Print Working Directory, mencetak path lengkap direktori yang sedang aktif di terminal.",
      quickTip: "Menampilkan lokasi direktori saat ini = pwd."
    },
    {
      stimulus: "Perintah Linux untuk berpindah ke direktori lain atau kembali ke direktori home pengguna adalah...",
      question: "Perintah navigasi pindah folder tersebut adalah...",
      correctText: "cd (change directory)",
      distractors: [
        "pwd",
        "mv",
        "cp",
        "rmdir"
      ],
      explanation: "Perintah `cd <nama_folder>` digunakan untuk berpindah direktori. Mengetik `cd ..` berpindah ke satu tingkat direktori di atasnya.",
      quickTip: "Pindah direktori = cd; naik satu level = cd .."
    },
    {
      stimulus: "Perintah untuk menampilkan daftar seluruh berkas dan folder di dalam sebuah direktori, termasuk berkas tersembunyi (hidden file diawali titik .), dengan format rincian lengkap adalah...",
      question: "Kombinasi perintah dan opsi parameter yang tepat adalah...",
      correctText: "ls -la (atau ls -al)",
      distractors: [
        "dir /w",
        "show files all",
        "cat -hidden",
        "tree -delete"
      ],
      explanation: "`ls -l` menampilkan format panjang (permissions, owner, size, date), dan `-a` menampilkan semua berkas termasuk file tersembunyi (`.bashrc`, dll.).",
      quickTip: "Melihat semua file detail termasuk file tersembunyi = ls -la."
    },
    {
      stimulus: "Perintah Linux untuk membuat direktori (folder) baru sekaligus beserta sub-direktori di dalamnya secara bertingkat adalah...",
      question: "Sintaks perintah pembuatan folder bertingkat tersebut adalah...",
      correctText: "mkdir -p (contoh: mkdir -p data/server/web)",
      distractors: [
        "touch -all",
        "rmdir -new",
        "create folder",
        "md /tree"
      ],
      explanation: "`mkdir -p` (parents) membuat direktori induk secara otomatis jika belum ada tanpa menghasilkan pesan error.",
      quickTip: "Membuat folder bertingkat = mkdir -p."
    },
    {
      stimulus: "Perintah Linux untuk menyalin (copy) sebuah direktori beserta seluruh isi berkas di dalamnya ke lokasi lain adalah...",
      question: "Perintah salin direktori rekursif yang tepat adalah...",
      correctText: "cp -r (atau cp -R)",
      distractors: [
        "copy -all",
        "mv -r",
        "duplicate -dir",
        "clone -folder"
      ],
      explanation: "`cp -r` (recursive) menyalin seluruh pohon direktori beserta sub-folder dan berkas di dalamnya.",
      quickTip: "Menyalin folder beserta isinya = cp -r."
    },
    {
      stimulus: "Perintah Linux untuk menghapus sebuah direktori dan seluruh isinya secara paksa tanpa meminta konfirmasi berulang adalah...",
      question: "Perintah penghapusan berkas rekursif paksa tersebut adalah...",
      correctText: "rm -rf (remove recursive force)",
      distractors: [
        "del /s /q",
        "erase -all",
        "rmdir -empty",
        "trash -clean"
      ],
      explanation: "`rm -r` menghapus secara rekursif dan `-f` (force) mengabaikan prompt konfirmasi. Perintah ini harus digunakan sangat hati-hati oleh root.",
      quickTip: "Menghapus folder dan isinya secara paksa = rm -rf."
    },
    {
      stimulus: "Editor teks berbasis antarmuka baris perintah (CLI) yang ramah bagi pemula dan bawaan pada sistem Debian/Ubuntu adalah...",
      question: "Nama program text editor CLI tersebut adalah...",
      correctText: "nano",
      distractors: [
        "Notepad.exe",
        "Microsoft Word",
        "Adobe Acrobat",
        "Google Docs"
      ],
      explanation: "`nano` adalah editor teks CLI sederhana dengan petunjuk tombol pintas (seperti Ctrl+O untuk menyimpan dan Ctrl+X untuk keluar) di bagian bawah layar.",
      quickTip: "Editor teks CLI ramah pemula di Linux = nano."
    },
    {
      stimulus: "Sistem inisialisasi dan pengelola layanan (service manager) standar pada sistem Linux modern saat ini adalah `systemd`.",
      question: "Perintah utama yang digunakan untuk mengelola status, menyalakan, mematikan, dan merestart service pada Linux berbasis systemd adalah...",
      correctText: "systemctl",
      distractors: [
        "service-manager",
        "taskmgr",
        "init.d-control",
        "app-manager"
      ],
      explanation: "`systemctl` digunakan untuk mengontrol service systemd (contoh: `systemctl start nginx`, `systemctl status bind9`, `systemctl enable ssh`).",
      quickTip: "Perintah pengelola service di Linux modern = systemctl."
    },
    {
      stimulus: "Teknisi selesai mengedit konfigurasi web server Apache dan ingin menerapkan perubahannya dengan menjalankan ulang layanan tersebut.",
      question: "Perintah systemctl yang tepat untuk merestart layanan Apache2 adalah...",
      correctText: "sudo systemctl restart apache2",
      distractors: [
        "sudo systemctl kill apache2",
        "sudo systemctl delete apache2",
        "sudo reboot apache2",
        "sudo systemctl off apache2"
      ],
      explanation: "Perintah `systemctl restart <nama-service>` mematikan dan langsung menyalakan kembali layanan terkait.",
      quickTip: "Merestart layanan server = systemctl restart <nama-service>."
    },
    {
      stimulus: "Agar sebuah layanan (misalnya SSH atau Web Server) otomatis berjalan saat server pertama kali booting atau restart dinyalakan.",
      question: "Perintah systemctl yang tepat untuk mengaktifkan autostart layanan saat booting adalah...",
      correctText: "sudo systemctl enable <nama-service>",
      distractors: [
        "sudo systemctl autostart <nama-service>",
        "sudo systemctl on <nama-service>",
        "sudo systemctl boot <nama-service>",
        "sudo systemctl run <nama-service>"
      ],
      explanation: "Perintah `systemctl enable` membuat symlink di direktori systemd target sehingga service otomatis dijalankan saat proses boot sistem.",
      quickTip: "Mengaktifkan service otomatis saat booting = systemctl enable."
    },
    {
      stimulus: "Pada sistem izin akses berkas Linux (File Permissions), hak akses dibagi menjadi 3 kategori entitas.",
      question: "Tiga kategori pengguna pemilik hak akses berkas dalam notasi ugo adalah...",
      correctText: "Owner (User / u), Group (g), dan Others (o)",
      distractors: [
        "Root, Admin, dan Guest",
        "Read, Write, dan Execute",
        "Client, Server, dan Gateway",
        "Public, Private, dan Protected"
      ],
      explanation: "Hak akses berkas Linux dikelompokkan untuk: Owner/User (pemilik berkas), Group (anggota grup pemilik), dan Others (semua pengguna lain di sistem).",
      quickTip: "Tiga entitas izin Linux: Owner (u), Group (g), Others (o)."
    },
    {
      stimulus: "Tiga jenis hak akses dasar pada sistem berkas Linux memiliki representasi nilai numerik oktal.",
      question: "Nilai angka bobot oktal untuk hak akses Read (baca), Write (tulis), dan Execute (eksekusi) adalah...",
      correctText: "Read = 4, Write = 2, Execute = 1",
      distractors: [
        "Read = 1, Write = 2, Execute = 4",
        "Read = 3, Write = 2, Execute = 1",
        "Read = 10, Write = 20, Execute = 30",
        "Read = 8, Write = 4, Execute = 2"
      ],
      explanation: "Sistem izin Linux menggunakan basis biner 3-bit: r=4 (bit 100), w=2 (bit 010), x=1 (bit 001). Total hak akses penuh rwx bernilai 4+2+1 = 7.",
      quickTip: "Nilai izin Linux: Read (4), Write (2), Execute (1)."
    },
    {
      stimulus: "Sebuah berkas skrip shell `backup.sh` memiliki izin akses `-rwxr-xr-x`.",
      question: "Nilai numerik oktal dari izin akses `-rwxr-xr-x` tersebut adalah...",
      correctText: "755",
      distractors: [
        "644",
        "777",
        "700",
        "600"
      ],
      explanation: "Owner `rwx` = 4+2+1 = 7; Group `r-x` = 4+0+1 = 5; Others `r-x` = 4+0+1 = 5. Nilainya adalah 755.",
      quickTip: "rwxr-xr-x = 755 (Owner bebas ubah/jalankan; orang lain hanya boleh baca & jalankan)."
    },
    {
      stimulus: "Sebuah berkas konfigurasi sensitif ingin diatur agar hanya pemiliknya (owner) saja yang bisa membaca dan menulis, sedangkan pengguna lain sama sekali tidak memiliki akses.",
      question: "Perintah chmod dengan nilai oktet yang tepat untuk skenario keamanan tersebut adalah...",
      correctText: "chmod 600 <nama-file>",
      distractors: [
        "chmod 777 <nama-file>",
        "chmod 755 <nama-file>",
        "chmod 644 <nama-file>",
        "chmod 000 <nama-file>"
      ],
      explanation: "Owner `rw-` = 4+2+0 = 6; Group `---` = 0; Others `---` = 0. Nilai 600 mengunci file agar hanya pemilik yang bisa mengaksesnya (standar kunci privat SSH `id_rsa`).",
      quickTip: "Izin privat hanya untuk pemilik = chmod 600."
    },
    {
      stimulus: "Pemberian izin `chmod 777` pada sebuah folder web server sering dianggap sebagai kesalahan fatal keamanan (security risk).",
      question: "Alasan mengapa `chmod 777` sangat berbahaya diterapkan pada server produksi adalah...",
      correctText: "Memberikan izin penuh (baca, tulis, eksekusi) kepada siapa saja termasuk penyusup atau malware dari luar untuk memodifikasi atau menghapus berkas",
      distractors: [
        "Membuat kabel LAN terbakar karena kelebihan beban arus",
        "Menghilangkan koneksi internet dari modem ISP",
        "Membatalkan lisensi sistem operasi Linux",
        "Membuat ukuran hard disk menyusut menjadi 0 byte"
      ],
      explanation: "Nilai 777 berarti `rwxrwxrwx` (semua orang bisa menulis/mengubah/menghapus/mengeksekusi), membuka celah eksploitasi web shell berbahaya.",
      quickTip: "Jangan gunakan chmod 777 di produksi; siapa pun bisa mengubah dan menghapus berkas!"
    },
    {
      stimulus: "Perintah Linux yang digunakan untuk mengubah kepemilikan pengguna (user owner) dan grup (group owner) dari suatu berkas atau direktori adalah...",
      question: "Perintah manajemen kepemilikan berkas tersebut adalah...",
      correctText: "chown (change owner, contoh: chown www-data:www-data /var/www)",
      distractors: [
        "chmod (change mode / permissions)",
        "passwd (change password)",
        "usermod (modify user account)",
        "whoami"
      ],
      explanation: "`chown` mengubah pemilik berkas (user dan group). `chmod` digunakan untuk mengubah hak akses izin berkas (permissions).",
      quickTip: "Ubah pemilik berkas = chown; Ubah hak akses izin = chmod."
    },
    {
      stimulus: "Teknisi ingin memeriksa alamat IP yang terpasang pada seluruh antarmuka jaringan di sistem Linux Debian modern melalui terminal CLI.",
      question: "Perintah CLI standar modern pada paket iproute2 untuk melihat daftar antarmuka dan IP address adalah...",
      correctText: "ip a (atau ip address show)",
      distractors: [
        "ipconfig /all (perintah Windows CMD)",
        "show ip route",
        "netstat -ip",
        "ping localhost"
      ],
      explanation: "Perintah `ip a` (ip address) adalah utilitas modern pengganti perintah usang `ifconfig` pada sistem operasi Linux.",
      quickTip: "Melihat IP antarmuka di Linux modern = ip a."
    }
  ],
  mcma: [
    {
      stimulus: "Perintah dasar pengelolaan berkas dan navigasi di terminal Linux CLI.",
      question: "Manakah pasangan antara perintah CLI Linux dan fungsinya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "pwd = menampilkan path direktori aktif saat ini (print working directory)", isCorrect: true },
        { text: "cd = berpindah antar-direktori (change directory)", isCorrect: true },
        { text: "mkdir -p = membuat direktori baru beserta sub-direktorinya secara bertingkat", isCorrect: true },
        { text: "rmdir = menyalin berkas ke hard disk eksternal", isCorrect: false },
        { text: "cp = menghapus seluruh partisi hard disk", isCorrect: false }
      ],
      explanation: "`pwd` menampilkan direktori kerja, `cd` berpindah direktori, dan `mkdir -p` membuat folder bertingkat.",
      quickTip: "pwd = lokasi direktori; cd = pindah folder; mkdir -p = buat folder bertingkat."
    },
    {
      stimulus: "Pengelolaan service pada Linux modern berbasis Systemd.",
      question: "Manakah perintah pengelolaan service yang VALID menggunakan perintah `systemctl`? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "systemctl status <service> (memeriksa kondisi hidup/matinya layanan)", isCorrect: true },
        { text: "systemctl restart <service> (menjalankan ulang layanan)", isCorrect: true },
        { text: "systemctl enable <service> (mengaktifkan layanan otomatis saat boot)", isCorrect: true },
        { text: "systemctl download <service> (membeli lisensi software di internet)", isCorrect: false },
        { text: "systemctl paint <service> (mengubah warna tampilan tombol keyboard)", isCorrect: false }
      ],
      explanation: "Perintah systemctl standar: `status`, `start`, `stop`, `restart`, `enable`, `disable`.",
      quickTip: "Operasi systemctl: status, restart, enable, start, stop."
    },
    {
      stimulus: "Sistem izin berkas oktal Linux (File Permissions).",
      question: "Manakah pernyataan yang BENAR mengenai perhitungan nilai izin berkas Linux? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Nilai bobot oktal dasar adalah Read = 4, Write = 2, dan Execute = 1", isCorrect: true },
        { text: "Izin akses 755 berarti Owner memiliki akses 7 (rwx), Group 5 (r-x), dan Others 5 (r-x)", isCorrect: true },
        { text: "Nilai izin maksimal sebuah berkas adalah 999", isCorrect: false },
        { text: "Izin akses 644 memungkinkan semua orang di internet mengubah isi berkas", isCorrect: false },
        { text: "Nilai Read bernilai 10 dan Write bernilai 20", isCorrect: false }
      ],
      explanation: "Oktal Linux berbasis r=4, w=2, x=1 (maksimal 7 per entitas). Izin 755 = rwxr-xr-x. Izin 644 hanya membolehkan owner menulis.",
      quickTip: "Read=4, Write=2, Execute=1. Total maksimal per entitas adalah 7 (rwx)."
    },
    {
      stimulus: "Perintah pengujian dan monitoring jaringan pada Linux.",
      question: "Manakah utilitas perintah CLI Linux yang digunakan untuk diagnosa jaringan? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "ip a (memeriksa konfigurasi antarmuka dan IP address)", isCorrect: true },
        { text: "ping (menguji konektivitas dan latensi respon paket ICMP)", isCorrect: true },
        { text: "ss -tuln (melihat daftar port layanan yang sedang mendengarkan/listening)", isCorrect: true },
        { text: "format c: /q (memformat disk)", isCorrect: false },
        { text: "calc.exe (kalkulator)", isCorrect: false }
      ],
      explanation: "`ip a`, `ping`, dan `ss -tuln` (atau `netstat`) adalah utilitas diagnosa jaringan utama di Linux.",
      quickTip: "Alat jaringan Linux: ip a, ping, ss/netstat, dan traceroute."
    },
    {
      stimulus: "Manajemen pengguna dan keamanan sistem operasi Linux.",
      question: "Manakah praktik keamanan akun Linux server yang DIANJURKAN? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Menonaktifkan login langsung root via SSH (PermitRootLogin no) dan menggunakan user biasa dengan sudo", isCorrect: true },
        { text: "Menggunakan autentikasi berbasis kunci SSH (SSH Key-based authentication) dibanding password biasa", isCorrect: true },
        { text: "Menyetel password akun root menjadi '123456' agar mudah diingat", isCorrect: false },
        { text: "Memberikan hak chmod 777 ke seluruh direktori root sistem (/)", isCorrect: false },
        { text: "Membagikan username dan password root ke seluruh media sosial", isCorrect: false }
      ],
      explanation: "Best practice keamanan Linux Server: Nonaktifkan login langsung root di SSH, gunakan otentikasi SSH Key pair, dan batasi izin sudo.",
      quickTip: "Amankan Linux: Matikan login SSH root langsung & gunakan autentikasi SSH Key."
    }
  ],
  tf: [
    {
      stimulus: "Karakteristik Linux Server tanpa antarmuka grafis (Headless Server).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Linux Server!",
      statements: [
        { text: "Sebagian besar sistem operasi Linux server beroperasi murni melalui CLI tanpa GUI untuk menghemat konsumsi memori dan CPU.", correct: "B" },
        { text: "Pengelolaan Linux server jarak jauh umumnya dilakukan melalui koneksi remote SSH port 22.", correct: "B" },
        { text: "Linux server tidak dapat berfungsi sama sekali jika tidak dipasangi mouse kabel USB.", correct: "S" }
      ],
      explanation: "Linux server headless beroperasi tanpa mouse, keyboard fisik, atau monitor langsung, dikelola lewat terminal SSH.",
      quickTip: "Linux server beroperasi headless via SSH tanpa butuh mouse atau GUI."
    },
    {
      stimulus: "Peran pengguna 'root' pada sistem operasi Linux.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang user root!",
      statements: [
        { text: "Pengguna root memiliki hak akses tak terbatas untuk mengubah dan menghapus berkas apapun di sistem Linux.", correct: "B" },
        { text: "Perintah `sudo` digunakan oleh pengguna biasa untuk mengeksekusi instruksi administratif.", correct: "B" },
        { text: "Sistem Linux akan selalu menolak perintah root jika perintah tersebut dapat merusak sistem.", correct: "S" }
      ],
      explanation: "Linux akan mengeksekusi perintah root tanpa ragu (termasuk perintah fatal seperti `rm -rf /`), itulah mengapa akses root harus sangat hati-hati.",
      quickTip: "Root memiliki kekuasaan mutlak di Linux; perintah salah dapat langsung merusak sistem."
    },
    {
      stimulus: "Aturan izin berkas Linux dan nilai oktal.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai izin berkas Linux!",
      statements: [
        { text: "Nilai izin numerik oktal dihitung dari penjumlahan: Read (4), Write (2), dan Execute (1).", correct: "B" },
        { text: "Izin akses 644 berarti pemilik (owner) dapat membaca dan menulis (rw-), sedangkan orang lain hanya dapat membaca (r--).", correct: "B" },
        { text: "Izin akses 777 adalah pengaturan paling aman yang sangat direkomendasikan untuk seluruh file website.", correct: "S" }
      ],
      explanation: "Izin 777 adalah celah bahaya besar yang dilarang pada server produksi karena memberi izin ubah ke semua orang.",
      quickTip: "644 standar file aman; 777 sangat tidak aman."
    },
    {
      stimulus: "Perintah manajemen berkas dan folder Linux.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang perintah Linux!",
      statements: [
        { text: "Perintah `cp -r` digunakan untuk menyalin direktori beserta seluruh sub-direktorinya secara rekursif.", correct: "B" },
        { text: "Perintah `nano` adalah program editor teks berbasis terminal yang digunakan untuk menyunting konfigurasi.", correct: "B" },
        { text: "Perintah `rm -rf` digunakan untuk mengunduh film dari internet ke dalam server.", correct: "S" }
      ],
      explanation: "`rm -rf` adalah perintah menghapus berkas/folder secara paksa dan permanen, bukan perintah unduh.",
      quickTip: "rm -rf menghapus berkas secara paksa, bukan mengunduh data."
    },
    {
      stimulus: "Pengendalian service dengan systemctl.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang systemctl!",
      statements: [
        { text: "Perintah `systemctl restart nginx` akan mematikan lalu menyalakan kembali service Nginx.", correct: "B" },
        { text: "Perintah `systemctl enable ssh` memastikan service SSH otomatis berjalan saat server pertama kali dinyalakan.", correct: "B" },
        { text: "Service di Linux hanya bisa dimatikan dengan mencabut kabel listrik server langsung dari stopkontak dinding.", correct: "S" }
      ],
      explanation: "Layanan dapat dimatikan dengan aman melalui perintah `systemctl stop <service>` tanpa harus mencabut kabel listrik.",
      quickTip: "Matikan service secara aman via perintah: systemctl stop <service>."
    }
  ]
};

const s22 = {
  sessionId: "s22",
  pg: [
    {
      stimulus: "Virtualisasi memungkinkan beberapa sistem operasi (Virtual Machine / VM) berjalan secara bersamaan di atas satu mesin perangkat keras fisik tunggal.",
      question: "Lapisan software pengelola virtualisasi yang mengalokasikan sumber daya fisik (CPU, RAM, Storage) ke masing-masing VM disebut...",
      correctText: "Hypervisor (Virtual Machine Monitor / VMM)",
      distractors: [
        "Web Server Daemon",
        "Compiler Assembler",
        "Database Engine",
        "Cable Certifier"
      ],
      explanation: "Hypervisor (VMM) adalah software atau firmware yang mengabstraksi perangkat keras fisik dan mengatur eksekusi beberapa mesin virtual secara terisolasi.",
      quickTip: "Pengelola mesin virtual di atas hardware = Hypervisor (VMM)."
    },
    {
      stimulus: "Hypervisor dikelompokkan menjadi dua arsitektur utama: Type 1 dan Type 2.",
      question: "Karakteristik arsitektur dari Hypervisor Type 1 (Bare-Metal Hypervisor) adalah...",
      correctText: "Berjalan langsung di atas perangkat keras fisik server tanpa membutuhkan sistem operasi perantara (host OS)",
      distractors: [
        "Berjalan sebagai program aplikasi di dalam sistem operasi Windows Desktop",
        "Hanya bisa dijalankan di smartphone ponsel genggam",
        "Membutuhkan kabel tembaga coaxial untuk menyalakannya",
        "Hanya dapat digunakan untuk bermain video game online"
      ],
      explanation: "Hypervisor Type 1 (contoh: Proxmox VE, VMware ESXi, Microsoft Hyper-V Server) diinstal langsung di atas bare-metal hardware tanpa OS perantara untuk efisiensi data center.",
      quickTip: "Hypervisor Type 1 (Bare-Metal) = Berjalan langsung di atas hardware tanpa OS inang."
    },
    {
      stimulus: "Hypervisor Type 2 (Hosted Hypervisor) banyak digunakan oleh siswa di laboratorium sekolah untuk simulasi belajar.",
      question: "Contoh software Hypervisor Type 2 yang berjalan di atas sistem operasi host desktop (seperti Windows 10/11 atau macOS) adalah...",
      correctText: "Oracle VM VirtualBox dan VMware Workstation",
      distractors: [
        "VMware ESXi Bare-Metal",
        "Proxmox VE Enterprise",
        "Citrix Hypervisor XenServer",
        "KVM RedHat Enterprise Bare-Metal"
      ],
      explanation: "Oracle VirtualBox dan VMware Workstation berjalan sebagai aplikasi di dalam OS host desktop (Type 2 / Hosted).",
      quickTip: "Contoh Hypervisor Type 2 = VirtualBox dan VMware Workstation."
    },
    {
      stimulus: "Saat membuat Virtual Hard Disk baru di VirtualBox, pengguna diberikan pilihan antara 'Dynamically Allocated' dan 'Fixed Size'.",
      question: "Kelebihan utama memilih tipe disk 'Dynamically Allocated' adalah...",
      correctText: "Hanya menggunakan ruang penyimpanan hard disk fisik secara bertahap sesuai data riil yang terisi di dalam VM",
      distractors: [
        "Langsung memotong ruang hard disk fisik sebesar 100 GB seketika",
        "Membuat kecepatan transfer data lebih cepat daripada kecepatan cahaya",
        "Membuat mesin virtual kebal terhadap serangan virus selamanya",
        "Dapat berjalan tanpa memerlukan memori RAM"
      ],
      explanation: "Dynamically allocated disk awalnya berukuran sangat kecil pada host dan hanya akan membesar secara fleksibel seiring bertambahnya data di dalam VM.",
      quickTip: "Dynamically Allocated = Disk bertambah besar sesuai isi data riil di dalam VM."
    },
    {
      stimulus: "Saat mencoba menyalakan mesin virtual 64-bit di VirtualBox, muncul pesan error 'VT-x / AMD-V is not available in your system'.",
      question: "Langkah perbaikan yang harus dilakukan teknisi untuk mengatasi masalah tersebut adalah...",
      correctText: "Masuk ke menu BIOS/UEFI komputer fisik host dan mengaktifkan (Enable) fitur Intel Virtualization Technology (VT-x) atau AMD-V",
      distractors: [
        "Mengganti kabel monitor komputer dengan kabel HDMI baru",
        "Menghapus seluruh file Windows di drive C:",
        "Menambah panjang kabel LAN komputer menjadi 50 meter",
        "Membersihkan keyboard komputer menggunakan kuas"
      ],
      explanation: "Virtualisasi hardware 64-bit membutuhkan instruksi VT-x (Intel) atau AMD-V (AMD) yang harus diaktifkan pada pengaturan BIOS/UEFI motherboard host.",
      quickTip: "Error VT-x / AMD-V = Aktifkan Intel Virtualization / AMD-V di BIOS/UEFI host."
    },
    {
      stimulus: "Pada pengaturan jaringan VirtualBox, mode 'Bridged Adapter' menghubungkan kartu jaringan virtual VM langsung ke kartu jaringan fisik host.",
      question: "Karakteristik konektivitas mesin virtual saat menggunakan mode 'Bridged Adapter' adalah...",
      correctText: "VM seolah-olah menjadi perangkat komputer nyata yang menancap langsung di switch fisik yang sama dan mendapatkan IP dari DHCP jaringan lokal",
      distractors: [
        "VM terisolasi total dan tidak dapat mengakses perangkat apapun di dunia",
        "VM hanya bisa berkomunikasi dengan komputer host saja",
        "IP address VM otomatis sama persis dengan IP komputer host sehingga terjadi konflik",
        "VM tidak membutuhkan kartu jaringan virtual"
      ],
      explanation: "Bridged Adapter menjembatani VM langsung ke jaringan fisik, memungkinkan perangkat luar di LAN mengakses VM selayaknya PC fisik mandiri.",
      quickTip: "Mode Bridged Adapter = VM menjadi perangkat mandiri satu segmen dengan LAN fisik."
    },
    {
      stimulus: "Mode jaringan VirtualBox di mana VM dapat mengakses internet keluar melalui IP host tetapi perangkat luar dari LAN tidak dapat mengakses ke dalam VM secara langsung adalah...",
      question: "Nama mode jaringan bawaan (default) VirtualBox tersebut adalah...",
      correctText: "Mode NAT (Network Address Translation)",
      distractors: [
        "Mode Bridged Adapter",
        "Mode Internal Network",
        "Mode Host-Only Adapter",
        "Mode Generic Driver"
      ],
      explanation: "Mode default NAT mengisolasi VM di balik router virtual VirtualBox (biasanya ber-IP 10.0.2.15), mengizinkan akses keluar ke internet via koneksi host.",
      quickTip: "Mode default VirtualBox (VM dapat internet, aman terisolasi dari luar) = Mode NAT."
    },
    {
      stimulus: "Dalam praktikum laboratorium, siswa ingin menghubungkan 3 mesin virtual Linux dalam satu jaringan terisolasi tertutup tanpa akses dari luar dan tanpa akses ke internet.",
      question: "Mode jaringan VirtualBox yang paling tepat untuk skenario laboratorium terisolasi tersebut adalah...",
      correctText: "Mode Internal Network",
      distractors: [
        "Mode Bridged Adapter",
        "Mode NAT",
        "Mode Cloud Network",
        "Mode Promiscuous Unrestricted"
      ],
      explanation: "Mode Internal Network menciptakan switch virtual internal yang menghubungkan VM satu sama lain di host yang sama tanpa koneksi ke fisik luar atau internet.",
      quickTip: "Komunikasi murni antar-VM terisolasi total dari luar = Mode Internal Network."
    },
    {
      stimulus: "Layanan Dynamic Host Configuration Protocol (DHCP) Server bertugas mengalokasikan alamat IP otomatis ke perangkat klien.",
      question: "Empat tahapan proses negosiasi pemberian alamat IP antara klien dan DHCP Server (dikenal dengan singkatan DORA) secara berurutan adalah...",
      correctText: "Discover -> Offer -> Request -> Acknowledge",
      distractors: [
        "Demand -> Order -> Receive -> Accept",
        "Detect -> Open -> Route -> Allocate",
        "Drop -> Over -> Reset -> Allow",
        "Download -> Output -> Read -> Apply"
      ],
      explanation: "Proses DORA: 1. DHCP Discover (klien mencari server via broadcast), 2. DHCP Offer (server menawarkan IP), 3. DHCP Request (klien meminta IP tersebut), 4. DHCP Ack (server mengonfirmasi sewa IP).",
      quickTip: "Tahapan negosiasi DHCP = DORA (Discover, Offer, Request, Acknowledge)."
    },
    {
      stimulus: "Pada tahap awal proses DORA, komputer klien yang baru menyala dan belum memiliki alamat IP mengirimkan pesan pencarian DHCP Server ke jaringan.",
      question: "Pesan pencarian awal dari klien tersebut adalah...",
      correctText: "DHCP Discover (dikirim secara broadcast ke 255.255.255.255)",
      distractors: [
        "DHCP Offer",
        "DHCP Request",
        "DHCP Acknowledge",
        "DHCP Release"
      ],
      explanation: "Klien yang belum punya IP memancarkan paket broadcast DHCP Discover (source 0.0.0.0, dest 255.255.255.255) untuk menemukan DHCP server di jaringan.",
      quickTip: "Pesan pertama klien mencari server DHCP = DHCP Discover (Broadcast)."
    },
    {
      stimulus: "Nomor port protokol UDP standar yang digunakan dalam komunikasi layanan DHCP pada tumpukan protokol TCP/IP adalah...",
      question: "Port server dan port klien untuk DHCPv4 adalah...",
      correctText: "Port UDP 67 (DHCP Server) dan Port UDP 68 (DHCP Client)",
      distractors: [
        "Port TCP 80 dan TCP 443",
        "Port UDP 53 dan TCP 53",
        "Port TCP 21 dan TCP 20",
        "Port TCP 25 dan TCP 110"
      ],
      explanation: "DHCP Server mendengarkan query pada port UDP 67, dan klien menerima balasan pada port UDP 68.",
      quickTip: "Port DHCP: Server = UDP 67; Klien = UDP 68."
    },
    {
      stimulus: "Pada server Linux Debian, paket perangkat lunak standar yang paling banyak digunakan untuk menyediakan layanan DHCP Server tradisional adalah...",
      question: "Nama paket software DHCP server resmi tersebut adalah...",
      correctText: "isc-dhcp-server",
      distractors: [
        "apache2-server",
        "bind9-dns",
        "openssh-server",
        "samba-common"
      ],
      explanation: "`isc-dhcp-server` (Internet Systems Consortium) adalah daemon DHCP server standar industri di Debian/Ubuntu dengan file konfigurasi `/etc/dhcp/dhcpd.conf`.",
      quickTip: "Paket DHCP server di Linux Debian = isc-dhcp-server."
    },
    {
      stimulus: "Layanan Domain Name System (DNS) menggunakan berbagai tipe rekaman (Resource Records) untuk memetakan nama domain ke alamat tertentu.",
      question: "Tipe rekaman DNS (DNS Record) standar yang memetakan nama host domain ke alamat IPv4 32-bit adalah...",
      correctText: "A Record (Address Record)",
      distractors: [
        "AAAA Record (IPv6 Record)",
        "CNAME Record (Canonical Name / Alias)",
        "MX Record (Mail Exchange)",
        "PTR Record (Pointer Reverse)"
      ],
      explanation: "Rekaman 'A' memetakan nama domain ke alamat IPv4 (contoh: `portal.smk.id. IN A 192.168.1.10`).",
      quickTip: "DNS memetakan domain ke IPv4 = A Record; ke IPv6 = AAAA Record."
    },
    {
      stimulus: "Tipe rekaman DNS yang memetakan nama domain ke alamat IPv6 128-bit adalah...",
      question: "Nama tipe rekaman DNS untuk IPv6 tersebut adalah...",
      correctText: "AAAA Record (Quad-A Record)",
      distractors: [
        "A Record",
        "TXT Record",
        "NS Record",
        "SOA Record"
      ],
      explanation: "Rekaman 'AAAA' (Quad-A) menyimpan alamat IPv6 128-bit untuk sebuah nama domain.",
      quickTip: "Pemetaan domain ke alamat IPv6 = AAAA Record (Quad-A)."
    },
    {
      stimulus: "Sebuah institusi ingin membuat nama alias (nama panggilan alternatif) untuk server web mereka, misalnya `www.sekolah.sch.id` merujuk ke nama utama `sekolah.sch.id`.",
      question: "Tipe rekaman DNS yang digunakan untuk membuat nama alias tersebut adalah...",
      correctText: "CNAME Record (Canonical Name)",
      distractors: [
        "A Record",
        "MX Record",
        "PTR Record",
        "NS Record"
      ],
      explanation: "CNAME (Canonical Name) membuat alias yang mengarahkan satu nama domain ke nama domain kanonikal lainnya.",
      quickTip: "Nama alias pada DNS = CNAME Record (Canonical Name)."
    },
    {
      stimulus: "Tipe rekaman DNS yang menentukan server pengelola surat elektronik (email server) yang bertanggung jawab menerima email untuk sebuah domain adalah...",
      question: "Nama tipe rekaman DNS email tersebut adalah...",
      correctText: "MX Record (Mail Exchange)",
      distractors: [
        "A Record",
        "SOA Record",
        "SRV Record",
        "PTR Record"
      ],
      explanation: "MX Record (Mail Exchange) mengarahkan pengiriman email ke mail server resmi domain beserta nilai prioritasnya.",
      quickTip: "Pengarah server email domain = MX Record (Mail Exchange)."
    },
    {
      stimulus: "Proses resolusi kebalikan di mana sistem mencari nama domain berdasarkan alamat IP yang diketahui (Reverse Lookup) menggunakan tipe rekaman...",
      question: "Nama tipe rekaman pencarian balik tersebut adalah...",
      correctText: "PTR Record (Pointer Record)",
      distractors: [
        "A Record",
        "CNAME Record",
        "MX Record",
        "TXT Record"
      ],
      explanation: "PTR Record (Pointer) digunakan pada zona reverse DNS (`in-addr.arpa`) untuk menerjemahkan IP address kembali menjadi nama host domain.",
      quickTip: "Reverse DNS lookup (IP ke nama domain) = PTR Record."
    },
    {
      stimulus: "Paket perangkat lunak server DNS paling populer dan menjadi standar industri di sistem operasi Linux adalah...",
      question: "Nama paket software server DNS tersebut adalah...",
      correctText: "BIND9 (Berkeley Internet Name Domain version 9)",
      distractors: [
        "Apache HTTP Server",
        "Nginx Engine",
        "ProFTPD Server",
        "MySQL Database"
      ],
      explanation: "BIND9 adalah implementasi software DNS Server terlengkap dan paling banyak digunakan di Linux (konfigurasi utama di `/etc/bind/named.conf`).",
      quickTip: "Software DNS server standar di Linux = BIND9."
    },
    {
      stimulus: "Pada server web Apache2 di Linux Debian/Ubuntu, direktori sistem default tempat menyimpan berkas-berkas halaman web (HTML/PHP) adalah...",
      question: "Lokasi direktori document root default web server tersebut adalah...",
      correctText: "/var/www/html/",
      distractors: [
        "/etc/apache2/",
        "/home/desktop/",
        "/usr/bin/web/",
        "/root/public_html/"
      ],
      explanation: "Secara default konfigurasi Apache (`000-default.conf`) menempatkan document root di folder `/var/www/html/`.",
      quickTip: "Direktori file web default Apache = /var/www/html/."
    },
    {
      stimulus: "Fitur pada web server Apache atau Nginx yang memungkinkan satu mesin server fisik tunggal menjalankan beberapa website dengan nama domain berbeda sekaligus adalah...",
      question: "Nama teknologi pengelolaan multi-domain pada satu server tersebut adalah...",
      correctText: "Virtual Host (VHost)",
      distractors: [
        "Virtual LAN (VLAN)",
        "Virtual Private Network (VPN)",
        "Virtual Memory",
        "Virtual Desktop"
      ],
      explanation: "Virtual Host (VHost) memungkinkan server web membedakan permintaan situs berdasarkan header `Host:` HTTP, melayani website berbeda (misal `smk.id` dan `osis.smk.id`) pada 1 server.",
      quickTip: "Menjalankan banyak website beda domain di 1 server = Virtual Host (VHost)."
    }
  ],
  mcma: [
    {
      stimulus: "Klasifikasi Hypervisor Type 1 (Bare-Metal) vs Type 2 (Hosted).",
      question: "Manakah pernyataan yang BENAR mengenai arsitektur Hypervisor? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Hypervisor Type 1 berjalan langsung di atas hardware tanpa sistem operasi host (contoh: Proxmox VE dan VMware ESXi)", isCorrect: true },
        { text: "Hypervisor Type 2 berjalan sebagai aplikasi di atas sistem operasi host desktop (contoh: VirtualBox dan VMware Workstation)", isCorrect: true },
        { text: "Hypervisor Type 1 memiliki efisiensi performa dan kestabilan yang lebih tinggi untuk level data center", isCorrect: true },
        { text: "VirtualBox adalah contoh Hypervisor Type 1 Bare-Metal yang tidak membutuhkan OS Windows/Linux", isCorrect: false },
        { text: "Hypervisor Type 1 hanya bisa digunakan jika server dimatikan total", isCorrect: false }
      ],
      explanation: "Type 1 (Bare-metal): Proxmox, ESXi, Hyper-V Server. Type 2 (Hosted): VirtualBox, Workstation. Type 1 lebih efisien untuk server data center.",
      quickTip: "Type 1 = Bare-metal (Proxmox/ESXi); Type 2 = Hosted di atas OS desktop (VirtualBox)."
    },
    {
      stimulus: "Mode adaptor jaringan virtual pada Oracle VM VirtualBox.",
      question: "Manakah pasangan mode jaringan VirtualBox dan karakteristiknya yang BENAR? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Bridged Adapter: VM terhubung langsung ke switch LAN fisik dan memperoleh IP satu segmen dengan host", isCorrect: true },
        { text: "Internal Network: VM terhubung ke switch virtual tertutup hanya antar-VM di host yang sama tanpa akses luar", isCorrect: true },
        { text: "Mode NAT: membuat VM otomatis terbakar jika terhubung ke internet", isCorrect: false },
        { text: "Bridged Adapter: memutus seluruh kabel fisik di gedung kantor", isCorrect: false },
        { text: "Internal Network: menghubungkan VM ke jaringan satelit luar angkasa NASA", isCorrect: false }
      ],
      explanation: "Bridged Adapter menjembatani VM ke LAN fisik nyata. Internal Network mengisolasi komunikasi tertutup antar-VM di host lokal.",
      quickTip: "Bridged Adapter = Satu segmen dengan LAN fisik; Internal Network = Komunikasi antar-VM tertutup."
    },
    {
      stimulus: "Empat tahapan proses negosiasi IP pada protokol DHCP (DORA).",
      question: "Manakah paket yang TERLIBAT dalam proses negosiasi DORA DHCP? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "DHCP Discover (klien memancarkan broadcast mencari DHCP server)", isCorrect: true },
        { text: "DHCP Offer (server menawarkan alamat IP dan parameter jaringan)", isCorrect: true },
        { text: "DHCP Request (klien mengajukan permintaan sewa IP yang ditawarkan)", isCorrect: true },
        { text: "DHCP Overload (router meledak karena kelebihan paket)", isCorrect: false },
        { text: "DHCP Splicing (melebur kabel fiber optik)", isCorrect: false }
      ],
      explanation: "DORA terdiri dari: Discover (klien), Offer (server), Request (klien), dan Acknowledge (server).",
      quickTip: "Empat tahap DHCP: Discover, Offer, Request, Acknowledge."
    },
    {
      stimulus: "Tipe rekaman Resource Record pada server DNS BIND9.",
      question: "Manakah pasangan tipe DNS Record dan fungsinya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "A Record memetakan nama domain ke alamat IPv4 32-bit", isCorrect: true },
        { text: "AAAA Record memetakan nama domain ke alamat IPv6 128-bit", isCorrect: true },
        { text: "MX Record menentukan server email (Mail Exchange) untuk pengiriman surat", isCorrect: true },
        { text: "CNAME Record mematikan seluruh koneksi internet", isCorrect: false },
        { text: "PTR Record digunakan untuk mencetak dokumen di printer", isCorrect: false }
      ],
      explanation: "A = IPv4, AAAA = IPv6, MX = Mail server, CNAME = Alias, PTR = Reverse lookup IP to domain.",
      quickTip: "DNS Records: A (IPv4), AAAA (IPv6), MX (Email), CNAME (Alias), PTR (Reverse)."
    },
    {
      stimulus: "Layanan server web Apache2 dan Nginx pada infrastruktur Linux.",
      question: "Manakah konfigurasi standar yang TEPAT pada server web berbasis Linux? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Layanan web standar mendengarkan port TCP 80 (HTTP) dan port TCP 443 (HTTPS terenkripsi)", isCorrect: true },
        { text: "Virtual Host digunakan untuk menjalankan beberapa domain website berbeda pada satu server yang sama", isCorrect: true },
        { text: "Berkas HTML web wajib ditaruh di dalam direktori tempat sampah recycle bin", isCorrect: false },
        { text: "Server web tidak membutuhkan sistem operasi apapun untuk bekerja", isCorrect: false },
        { text: "Port HTTPS standar berjalan pada port UDP 53", isCorrect: false }
      ],
      explanation: "Web server beroperasi di TCP 80 (HTTP) dan TCP 443 (HTTPS), serta memanfaatkan Virtual Host untuk multi-domain.",
      quickTip: "Web server: Port 80 (HTTP) / 443 (HTTPS) dan fitur Virtual Host."
    }
  ],
  tf: [
    {
      stimulus: "Perbedaan arsitektur Hypervisor Type 1 dan Type 2.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai virtualisasi!",
      statements: [
        { text: "Hypervisor Type 1 diinstal langsung di atas hardware bare-metal tanpa sistem operasi perantara.", correct: "B" },
        { text: "Oracle VM VirtualBox adalah contoh Hypervisor Type 2 yang berjalan di atas OS host Windows atau Linux.", correct: "B" },
        { text: "Hypervisor Type 1 hanya bisa menjalankan satu mesin virtual saja seumur hidup.", correct: "S" }
      ],
      explanation: "Hypervisor Type 1 (seperti Proxmox atau ESXi) dirancang untuk menjalankan puluhan hingga ratusan VM secara bersamaan di server enterprise.",
      quickTip: "Hypervisor Type 1 bare-metal melayani banyak VM sekaligus di data center."
    },
    {
      stimulus: "Pengaturan fitur Virtualisasi Hardware di BIOS host.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang VT-x dan AMD-V!",
      statements: [
        { text: "Fitur Intel VT-x atau AMD-V harus diaktifkan pada pengaturan BIOS/UEFI motherboard host untuk mendukung VM 64-bit.", correct: "B" },
        { text: "Jika fitur virtualisasi di BIOS dinonaktifkan, VirtualBox tidak dapat menjalankan sistem operasi tamu 64-bit.", correct: "B" },
        { text: "Mengaktifkan VT-x di BIOS akan menyebabkan processor meleleh dan hang permanen.", correct: "S" }
      ],
      explanation: "VT-x / AMD-V adalah instruksi perangkat keras resmi processor Intel dan AMD untuk akselerasi virtualisasi yang aman dan efisien.",
      quickTip: "Aktifkan VT-x/AMD-V di BIOS untuk mengizinkan akselerasi mesin virtual 64-bit."
    },
    {
      stimulus: "Mode jaringan Bridged Adapter pada mesin virtual.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Bridged Adapter!",
      statements: [
        { text: "Dengan Bridged Adapter, mesin virtual mendapatkan alamat IP dari DHCP server yang sama dengan komputer host fisiknya.", correct: "B" },
        { text: "Komputer lain di jaringan LAN fisik dapat mengakses layanan web server di dalam VM ber-mode Bridged secara langsung.", correct: "B" },
        { text: "Mode Bridged Adapter memutuskan sambungan kartu jaringan fisik dari kabel LAN.", correct: "S" }
      ],
      explanation: "Bridged Adapter menunggangi kartu jaringan fisik untuk menjembatani lalu lintas VM ke kabel LAN.",
      quickTip: "Bridged Adapter menempatkan VM setara dengan PC fisik di switch jaringan."
    },
    {
      stimulus: "Proses DORA pada layanan DHCP Server.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai alur kerja DHCP!",
      statements: [
        { text: "Pesan DHCP Discover dikirimkan oleh klien ke alamat broadcast jaringan.", correct: "B" },
        { text: "Pesan DHCP Acknowledge (ACK) adalah konfirmasi final dari server bahwa alamat IP telah resmi disewakan kepada klien.", correct: "B" },
        { text: "DHCP Server menggunakan protokol TCP port 80 untuk menyewakan alamat IP.", correct: "S" }
      ],
      explanation: "DHCP beroperasi menggunakan protokol UDP (port 67 server dan port 68 client), bukan TCP 80.",
      quickTip: "DHCP memakai UDP port 67/68, dengan konfirmasi akhir di DHCP Ack."
    },
    {
      stimulus: "Fungsi rekaman A Record dan AAAA Record pada DNS Server.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai rekaman DNS!",
      statements: [
        { text: "A Record memetakan nama domain ke alamat IPv4 (contoh: 192.168.1.1).", correct: "B" },
        { text: "AAAA Record memetakan nama domain ke alamat IPv6 (contoh: 2001:db8::1).", correct: "B" },
        { text: "DNS Server bertugas mengompresi ukuran hard disk komputer pengguna secara online.", correct: "S" }
      ],
      explanation: "DNS bertugas menerjemahkan nama domain ke alamat IP (resolusi nama), bukan mengompresi hard disk.",
      quickTip: "A = IPv4; AAAA = IPv6. DNS adalah layanan penerjemah nama domain."
    }
  ]
};

module.exports = {
  s19,
  s20,
  s21,
  s22
};
