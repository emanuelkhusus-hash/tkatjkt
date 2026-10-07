// scripts/data_src/definitions/full_engine/dataset_builder/session_packs/pack_s27_s30.js
// Sesi 27: Tryout Prediksi TKA Pusmendik Paket A (Integrasi 4 Elemen)
// Sesi 28: Tryout Prediksi TKA Pusmendik Paket B (Penalaran & Studi Kasus)
// Sesi 29: Tryout Prediksi TKA Pusmendik Paket C (Ketajaman Teknis & Troubleshooting)
// Sesi 30: THE GRAND FINAL BOSS: Simulasi Penuh TKA Kemendikdasmen RI 2026
// Total 4 Sesi x 30 Soal = 120 Butir Soal Unik Standar Pusmendik

const s27 = {
  sessionId: "s27",
  pg: [
    {
      stimulus: "Seorang teknisi baru di ISP ditugaskan memelihara perangkat jaringan dan server, memantau utilisasi link, serta mengelola trouble ticket penanganan gangguan.",
      question: "Peran profesi kerja yang paling sesuai dengan ruang lingkup tugas tersebut adalah...",
      correctText: "Network Operation Center (NOC) Engineer",
      distractors: [
        "Digital Content Strategist",
        "Frontend UI Designer",
        "Staff Keuangan Payroll",
        "Operator Perakitan Mesin"
      ],
      explanation: "NOC Engineer bertanggung jawab atas pemantauan link jaringan, analisis log perangkat, manajemen trouble ticket, dan eskalasi penanganan gangguan.",
      quickTip: "Memantau dashboard link jaringan dan trouble ticket = NOC Engineer."
    },
    {
      stimulus: "Saat bekerja memasang kabel fiber optik udara di dekat kabel listrik tegangan menengah PLN pada ketinggian 6 meter.",
      question: "Alat Pelindung Diri (APD) dan peralatan kerja isolasi yang WAJIB digunakan teknisi untuk mencegah sengatan listrik adalah...",
      correctText: "Full body harness dengan dual lanyard, safety helmet berisolasi listrik, safety shoes, dan tangga isolator berbahan fiberglass",
      distractors: [
        "Tangga lipat aluminium tipis tanpa sepatu karet",
        "Sandal jepit santai dan sarung tangan kain basah",
        "Jas hujan plastik tipis dan topi koboi kain",
        "Tali tambang rami pengikat tanpa tali pengaman"
      ],
      explanation: "Di dekat kabel listrik, wajib menggunakan tangga fiberglass non-konduktif serta APD lengkap (body harness, helm bersertifikasi isolasi listrik, dan safety shoes).",
      quickTip: "Bekerja di dekat listrik: Gunakan tangga fiberglass dan APD isolasi listrik lengkap."
    },
    {
      stimulus: "Kabel UTP Cat6 sepanjang 75 meter menghubungkan switch lantai ke komputer kasir. Saat diuji dengan kabel tester profesional, terukur atenuasi normal namun crosstalk tinggi (NEXT Fail).",
      question: "Tindakan perbaikan terminasi konektor RJ-45 yang paling tepat untuk mengatasi kegagalan uji tersebut adalah...",
      correctText: "Memotong konektor lama dan memasang konektor baru dengan memastikan lilitan kawat diurai seminimal mungkin (di bawah 13 mm)",
      distractors: [
        "Mengganti seluruh kabel dengan kabel telepon 2-kawat",
        "Menyambung kabel dengan cara diplintir isolasi kabel",
        "Mencuci kabel di dalam larutan air deterjen",
        "Menarik kabel sekencang mungkin hingga kawat menegang"
      ],
      explanation: "NEXT Fail disebabkan lilitan kawat diurai terlalu panjang saat crimping. Solusinya memasang ulang konektor dengan menjaga lilitan rapat hingga dekat pin.",
      quickTip: "Atasi NEXT Fail: Terminasi ulang konektor RJ-45 dengan lilitan seminimal mungkin (<13 mm)."
    },
    {
      stimulus: "Kabel serat optik Single-Mode (ITU-T G.652D) memiliki koefisien redaman alami sebesar 0.35 dB/km pada panjang gelombang 1310 nm.",
      question: "Berapa perkiraan total redaman serat optik murni (fiber attenuation) untuk bentangan kabel sepanjang 20 kilometer tanpa memperhitungkan konektor?",
      correctText: "7,0 dB (berasal dari 20 km x 0,35 dB/km)",
      distractors: [
        "3,5 dB",
        "14,0 dB",
        "20,0 dB",
        "0,7 dB"
      ],
      explanation: "Total redaman kabel = panjang (km) x koefisien redaman (dB/km) = 20 x 0.35 = 7.0 dB.",
      quickTip: "Redaman kabel optik 20 km pada 1310 nm = 20 x 0.35 = 7.0 dB."
    },
    {
      stimulus: "Sebuah kantor memiliki alokasi blok IP 192.168.50.0/24 dan ingin membaginya ke dalam subnet yang masing-masing dapat menampung maksimal 14 unit komputer.",
      question: "Prefix subnet mask yang paling tepat dan hemat untuk kebutuhan 14 host per subnet tersebut adalah...",
      correctText: "/28 (Subnet mask 255.255.255.240)",
      distractors: [
        "/27 (30 host usable)",
        "/29 (6 host usable)",
        "/30 (2 host usable)",
        "/26 (62 host usable)"
      ],
      explanation: "/28 memiliki 4 bit host (2^4 - 2 = 14 usable host), sangat pas dan paling efisien untuk kebutuhan tepat 14 komputer.",
      quickTip: "14 host usable = Prefix /28 (2^4 - 2 = 14 host)."
    },
    {
      stimulus: "Pada subnet 192.168.50.32/28, berapa alamat Broadcast ID untuk blok jaringan tersebut?",
      question: "Alamat broadcast yang benar untuk subnet 192.168.50.32/28 adalah...",
      correctText: "192.168.50.47",
      distractors: [
        "192.168.50.46",
        "192.168.50.48",
        "192.168.50.63",
        "192.168.50.255"
      ],
      explanation: "Magic number /28 = 16. Subnet berikutnya adalah 192.168.50.48. Maka broadcast subnet sebelumnya adalah 192.168.50.47.",
      quickTip: "Broadcast ID /28 dari blok .32 adalah 32 + 16 - 1 = 47."
    },
    {
      stimulus: "Di switch terkelola, port nomor 1 sampai 10 dimasukkan ke dalam VLAN 10 (Siswa) dan port 11 sampai 20 dimasukkan ke VLAN 20 (Guru).",
      question: "Jika komputer di port 1 mengirimkan frame broadcast ARP, port manakah yang akan menerima frame broadcast tersebut?",
      correctText: "Hanya port 2 sampai 10 yang berada dalam VLAN 10 yang sama",
      distractors: [
        "Seluruh port 1 sampai 24 di switch tersebut",
        "Hanya port 11 sampai 20 pada VLAN 20",
        "Tidak ada port yang menerima sama sekali",
        "Frame broadcast langsung dikirim ke internet publik"
      ],
      explanation: "VLAN mengisolasi broadcast domain. Frame broadcast dari anggota VLAN 10 hanya akan diteruskan ke port lain yang berada dalam VLAN 10.",
      quickTip: "Broadcast VLAN hanya disebarkan ke port dalam VLAN yang sama."
    },
    {
      stimulus: "Untuk menghubungkan VLAN 10 dan VLAN 20 yang berada pada switch dengan satu router Cisco menggunakan konsep Router-on-a-Stick.",
      question: "Konfigurasi port switch yang terhubung langsung ke router tersebut harus disetel pada mode...",
      correctText: "Mode Trunk (IEEE 802.1Q)",
      distractors: [
        "Mode Access",
        "Mode Console",
        "Mode Shutdown",
        "Mode Loopback"
      ],
      explanation: "Koneksi dari switch ke router pada Router-on-a-Stick wajib ber-mode Trunk agar mampu membawa frame dari multi-VLAN bertag 802.1Q.",
      quickTip: "Koneksi Router-on-a-Stick dari switch ke router = Port Mode Trunk."
    },
    {
      stimulus: "Teknisi mengukur daya terima optik pada modem ONT pelanggan FTTH menggunakan OPM pada panjang gelombang 1490 nm dan terbaca nilai -21,5 dBm.",
      question: "Kesimpulan teknis mengenai status kualitas sinyal optik yang diterima pelanggan tersebut adalah...",
      correctText: "Kualitas sinyal sangat baik dan normal (berada dalam standar optimal -15 dBm s.d. -24 dBm)",
      distractors: [
        "Sinyal terlalu lemah dan koneksi akan sering putus (LOS)",
        "Sinyal terlalu kuat dan dapat membakar receiver ONT",
        "Kabel serat optik terputus di tengah jalan",
        "Perangkat OPM mengalami kerusakan internal"
      ],
      explanation: "Nilai -21.5 dBm berada di tengah-tengah rentang ideal daya terima ONT GPON (-15 s.d. -24 dBm), menjamin kestabilan layanan internet.",
      quickTip: "Nilai -21.5 dBm adalah sinyal optik prima berstandar telko."
    },
    {
      stimulus: "Saat melakukan pengujian kurva OTDR pada kabel sepanjang 10 km, teknisi melihat undakan penurunan garis sebesar 0,02 dB pada jarak 3,4 km tanpa adanya spike lonjakan pantulan.",
      question: "Kejadian fisik yang ditunjukkan oleh undakan penurunan non-reflektif tersebut adalah...",
      correctText: "Sambungan peleburan Fusion Splice berkualitas prima",
      distractors: [
        "Konektor mekanik SC yang kotor berdebu",
        "Ujung akhir kabel yang putus total",
        "Kabel mengalami korsleting tegangan tinggi",
        "Kabel ditarik melintasi medan magnet trafo"
      ],
      explanation: "Non-reflective event dengan loss sangat kecil (<0.05 dB, yaitu 0.02 dB) adalah ciri khas sambungan fusion splice yang dieksekusi dengan sempurna.",
      quickTip: "Undakan turun 0.02 dB tanpa spike pada OTDR = Sambungan Fusion Splice prima."
    },
    {
      stimulus: "Administrator server Linux ingin mengubah hak akses berkas skrip `deploy.sh` agar pemilik dapat membaca, menulis, dan mengeksekusi, sedangkan grup dan pengguna lain hanya dapat membaca dan mengeksekusi.",
      question: "Perintah chmod dengan nilai oktal yang tepat untuk skenario tersebut adalah...",
      correctText: "chmod 755 deploy.sh",
      distractors: [
        "chmod 777 deploy.sh",
        "chmod 644 deploy.sh",
        "chmod 600 deploy.sh",
        "chmod 700 deploy.sh"
      ],
      explanation: "Owner (rwx=7), Group (r-x=5), Others (r-x=5). Perintahnya adalah `chmod 755 deploy.sh`.",
      quickTip: "Owner rwx (7), Group r-x (5), Others r-x (5) = chmod 755."
    },
    {
      stimulus: "Pada virtualisasi server laboratorium, teknisi ingin membuat mesin virtual (VM) Debian Server yang dapat diakses langsung oleh seluruh komputer di jaringan LAN fisik sekolah seolah-olah server fisik terpisah.",
      question: "Mode adaptor jaringan VirtualBox yang harus dipilih untuk VM tersebut adalah...",
      correctText: "Bridged Adapter",
      distractors: [
        "NAT (Network Address Translation)",
        "Internal Network",
        "Host-Only Adapter",
        "Not Attached"
      ],
      explanation: "Bridged Adapter menjembatani antarmuka virtual VM ke switch fisik LAN sekolah sehingga VM mendapatkan IP satu segmen dan dapat diakses langsung.",
      quickTip: "VM dapat diakses dari jaringan fisik luar = Mode Bridged Adapter."
    },
    {
      stimulus: "Teknisi jaringan mengonfigurasi rute statis pada router Cisco menuju jaringan 10.10.20.0/24 melalui alamat router tetangga 192.168.1.2.",
      question: "Perintah sintaks konfigurasi global yang tepat adalah...",
      correctText: "ip route 10.10.20.0 255.255.255.0 192.168.1.2",
      distractors: [
        "ip route 192.168.1.2 255.255.255.0 10.10.20.0",
        "route add 10.10.20.0 mask 255.255.255.0 192.168.1.2",
        "router static 10.10.20.0/24 gateway 192.168.1.2",
        "ip default-network 10.10.20.0 192.168.1.2"
      ],
      explanation: "Sintaks rute statis Cisco: `ip route <network-tujuan> <subnet-mask> <ip-next-hop>`.",
      quickTip: "Sintaks rute statis: ip route 10.10.20.0 255.255.255.0 192.168.1.2."
    },
    {
      stimulus: "Dalam arsitektur model 7 lapis OSI, enkripsi data SSL/TLS, konversi format karakter ASCII, dan kompresi file dijalankan pada...",
      question: "Nama lapisan model OSI yang menangani pemformatan dan enkripsi tersebut adalah...",
      correctText: "Presentation Layer (Layer 6)",
      distractors: [
        "Application Layer (Layer 7)",
        "Session Layer (Layer 5)",
        "Transport Layer (Layer 4)",
        "Network Layer (Layer 3)"
      ],
      explanation: "Presentation Layer (Layer 6) bertugas menangani sintaks, representasi format data, kompresi, dan enkripsi/dekripsi keamanan data.",
      quickTip: "Enkripsi SSL/TLS dan format representasi data = Presentation Layer (Layer 6)."
    },
    {
      stimulus: "Dua switch lawas dihubungkan menggunakan dua kabel patch cord sekaligus tanpa mengaktifkan protokol STP (Spanning Tree Protocol).",
      question: "Akibat langsung yang terjadi pada jaringan switch tersebut adalah...",
      correctText: "Terjadi perputaran frame tanpa henti (Switching Loop) yang memicu Broadcast Storm dan melumpuhkan jaringan",
      distractors: [
        "Bandwidth jaringan otomatis berlipat ganda 100 kali lipat",
        "Kabel patch cord otomatis meleleh terbakar api",
        "Komputer klien langsung berubah alamat menjadi IPv6",
        "Switch otomatis mengunduh update software terbaru"
      ],
      explanation: "Loop fisik pada Layer 2 tanpa STP menyebabkan frame broadcast berputar tiada henti (broadcast storm), menghabiskan seluruh kapasitas switch.",
      quickTip: "Kabel ganda antar-switch tanpa STP memicu Broadcast Storm."
    },
    {
      stimulus: "Penulisan penyingkatan alamat IPv6 resmi menurut standar RFC 5952 untuk alamat: `fe80:0000:0000:0000:020c:29ff:fe3d:12a4`.",
      question: "Bentuk penyingkatan yang paling tepat adalah...",
      correctText: "fe80::20c:29ff:fe3d:12a4",
      distractors: [
        "fe80:::20c:29ff:fe3d:12a4",
        "fe80:0:0:0:20c:29ff:fe3d:12a4",
        "fe80::020c:29ff:fe3d:12a4",
        "fe80::20c::fe3d:12a4"
      ],
      explanation: "Empat blok nol berurutan diganti '::', dan leading zero '020c' dihilangkan menjadi '20c'. Hasilnya: `fe80::20c:29ff:fe3d:12a4`.",
      quickTip: "Singkat IPv6: kompresi nol dengan '::' dan hapus leading zero."
    },
    {
      stimulus: "SOP penyambungan serat optik mengharuskan teknisi memasukkan Protection Sleeve pada serat.",
      question: "Kapan waktu yang paling tepat untuk memasukkan tabung Protection Sleeve tersebut?",
      correctText: "Sebelum serat optik dikupas lapisan coating-nya dan dipotong di cleaver",
      distractors: [
        "Setelah kedua serat selesai dilebur menyatu di splicer",
        "Setelah kabel dipasang di dinding rumah pelanggan",
        "Protection sleeve tidak wajib dipasang jika kabel tebal",
        "Dimasukkan setelah kabel ditarik melintasi jalan raya"
      ],
      explanation: "Protection sleeve wajib diselipkan ke serat sebelum proses potong dan lebur; tidak bisa dimasukkan setelah kedua serat menyatu.",
      quickTip: "Selipkan protection sleeve SEBELUM memotong dan melebur serat."
    },
    {
      stimulus: "Pada penataan ruang server data center, konsep pemisahan lorong rak server dingin dan lorong panas diterapkan untuk efisiensi pendinginan.",
      question: "Nama konsep manajemen tata udara server tersebut adalah...",
      correctText: "Hot Aisle / Cold Aisle Containment",
      distractors: [
        "Cross Flow Air Duct",
        "Open Room Cooling",
        "Ceiling Fan Exhaust",
        "Submerged Water Cooling"
      ],
      explanation: "Lorong dingin (Cold Aisle) memasok udara sejuk dari lantai ke bagian depan server, dan lorong panas (Hot Aisle) membuang panas dari belakang server ke pendingin.",
      quickTip: "Tata udara server data center = Hot Aisle / Cold Aisle."
    },
    {
      stimulus: "Saat menguji kabel UTP straight-through dengan wiremap tester, lampu indikator remote menunjukkan urutan 1-8 menyala bergantian sinkron.",
      question: "Kesimpulan dari hasil pengujian kabel tersebut adalah...",
      correctText: "Kabel dalam kondisi normal, kontinuitas pin 1 sampai 8 lurus sempurna",
      distractors: [
        "Kabel mengalami korsleting pada seluruh pin",
        "Kabel terputus di dalam konektor",
        "Kabel berjenis crossover silang",
        "Kabel salah standar pengkabelan"
      ],
      explanation: "Nyala sinkron dan berurutan dari pin 1 sampai 8 membuktikan kabel straight-through terminasi dengan benar tanpa putus atau korslet.",
      quickTip: "LED 1-8 nyala berurutan bersamaan = Kabel normal straight-through."
    },
    {
      stimulus: "Seorang administrator web server mendapati bahwa port 80 pada server Linux-nya tidak dapat dinyalakan karena muncul error 'Address already in use'.",
      question: "Perintah CLI Linux yang tepat untuk memeriksa proses atau layanan apa yang sedang menduduki port 80 adalah...",
      correctText: "sudo ss -tulnp | grep :80 (atau netstat -tulnp | grep :80)",
      distractors: [
        "sudo rm -rf /var/www",
        "sudo ping localhost:80",
        "sudo chmod 777 :80",
        "sudo traceroute 80"
      ],
      explanation: "Perintah `ss -tulnp` (atau `netstat`) menampilkan daftar port yang sedang listening beserta Process ID (PID) dan nama program yang menggunakannya.",
      quickTip: "Melihat aplikasi yang menduduki port di Linux = ss -tulnp (atau netstat)."
    }
  ],
  mcma: [
    {
      stimulus: "Integrasi kompetensi media transmisi kabel tembaga dan serat optik.",
      question: "Manakah pernyataan yang BENAR mengenai perbedaan kabel UTP dan Fiber Optik? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Kabel UTP memiliki batas bentangan maksimal 100 meter, sedangkan Fiber Optik Single-Mode mampu menjangkau puluhan kilometer", isCorrect: true },
        { text: "Fiber optik sepenuhnya kebal terhadap interferensi gelombang elektromagnetik (EMI) dan sambaran petir", isCorrect: true },
        { text: "Kabel UTP dapat menyalurkan sinyal cahaya laser berdaya tinggi", isCorrect: false },
        { text: "Kabel fiber optik menghantarkan arus listrik DC untuk menyalakan komputer", isCorrect: false },
        { text: "Kabel UTP harus selalu disambung menggunakan mesin Fusion Splicer", isCorrect: false }
      ],
      explanation: "UTP dibatasi 100m, memakai sinyal listrik, dan rentan EMI. Fiber optik memakai cahaya silika, kebal EMI, dan mampu menempuh jarak puluhan km.",
      quickTip: "UTP maksimal 100m; Fiber optik kebal EMI dan jangkauan puluhan km."
    },
    {
      stimulus: "Peralatan pengujian dan penyambungan serat optik standar industri.",
      question: "Manakah pasangan alat kerja optik dan fungsinya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Visual Fault Locator (VFL) melacak kontinuitas serat menggunakan laser merah tampak 650 nm", isCorrect: true },
        { text: "Optical Power Meter (OPM) mengukur kekuatan daya sinyal optik yang diterima dalam satuan dBm", isCorrect: true },
        { text: "High Precision Fiber Cleaver memotong ujung kaca serat optik dengan sudut tegak lurus presisi", isCorrect: true },
        { text: "Fusion Splicer digunakan untuk menjepit konektor RJ-45 tembaga", isCorrect: false },
        { text: "One-Click Cleaner digunakan untuk memotong kabel fiber optik", isCorrect: false }
      ],
      explanation: "VFL = laser merah pelacak kontinuitas; OPM = pengukur daya dBm; Fiber Cleaver = pemotong kaca sudut tegak lurus.",
      quickTip: "Alat optik: VFL (laser merah), OPM (daya dBm), Cleaver (potong tegak lurus)."
    },
    {
      stimulus: "Arsitektur jaringan dan konfigurasi VLAN pada switch.",
      question: "Manakah ketentuan konfigurasi VLAN yang TEPAT? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Port Access membawa tepat 1 VLAN tanpa tag 802.1Q menuju perangkat akhir pengguna", isCorrect: true },
        { text: "Port Trunk membawa banyak VLAN bertag 802.1Q antar-switch atau switch ke router", isCorrect: true },
        { text: "VLAN ID valid berkisar antara 1 sampai 4094 menurut standar IEEE 802.1Q", isCorrect: true },
        { text: "Komputer beda VLAN dapat saling berkomunikasi langsung tanpa melewati perangkat Layer 3", isCorrect: false },
        { text: "Port Trunk hanya boleh digunakan untuk kabel telepon kabel tembaga analog", isCorrect: false }
      ],
      explanation: "Port Access membawa 1 VLAN untagged, Port Trunk membawa multi-VLAN tagged 802.1Q, rentang VID 1-4094. Komunikasi beda VLAN wajib lewat Layer 3.",
      quickTip: "Ketentuan VLAN: Access (1 VLAN untagged), Trunk (Multi-VLAN tagged 802.1Q, VID 1-4094)."
    },
    {
      stimulus: "Pengalamatan IPv4 dan efisiensi alokasi subnetting.",
      question: "Manakah pernyataan yang BENAR mengenai subnetting IPv4? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Subnet mask /30 (255.255.255.252) menyediakan tepat 2 alamat host usable untuk link Point-to-Point router", isCorrect: true },
        { text: "Alamat Network ID dan Broadcast ID dilarang dipasang pada kartu jaringan komputer pengguna", isCorrect: true },
        { text: "Subnet mask /24 hanya dapat menampung maksimal 24 unit komputer", isCorrect: false },
        { text: "Alamat IP 127.0.0.1 adalah alamat publik router gateway internet dunia", isCorrect: false },
        { text: "Alamat IP privat RFC 1918 dapat dirutekan langsung di internet tanpa bantuan NAT", isCorrect: false }
      ],
      explanation: "Prefix /30 menyediakan 2 usable host untuk link point-to-point. Network ID dan Broadcast ID tidak boleh dipasang pada PC host.",
      quickTip: "Prefix /30 = 2 host link router; Network dan Broadcast ID dilarang dipasang ke PC."
    },
    {
      stimulus: "Sistem operasi Linux Server dan manajemen layanan sistem.",
      question: "Manakah perintah administrasi Linux yang TEPAT fungsinya? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "`systemctl restart bind9` digunakan untuk menjalankan ulang layanan DNS Server", isCorrect: true },
        { text: "`chown www-data:www-data /var/www/html` digunakan untuk mengubah pemilik direktori web ke user www-data", isCorrect: true },
        { text: "`chmod 777` adalah pengaturan paling aman yang wajib dipasang di semua file server", isCorrect: false },
        { text: "`pwd` digunakan untuk mematikan komputer server seketika", isCorrect: false },
        { text: "`ip a` digunakan untuk menghapus seluruh hard disk server", isCorrect: false }
      ],
      explanation: "`systemctl restart bind9` merestart DNS service, dan `chown` mengubah pemilik user/group file web. Izin 777 tidak aman, `pwd` melihat direktori, `ip a` melihat IP.",
      quickTip: "systemctl restart me-refresh service; chown mengubah kepemilikan file/folder."
    }
  ],
  tf: [
    {
      stimulus: "Prinsip pemisahan domain collision dan broadcast.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai domain jaringan!",
      statements: [
        { text: "Setiap port pada switch jaringan memisahkan collision domain secara mandiri.", correct: "B" },
        { text: "Router memisahkan broadcast domain sehingga paket broadcast tidak meluas ke jaringan luar.", correct: "B" },
        { text: "Hub pasif mampu memisahkan broadcast domain menjadi 8 bagian berbeda.", correct: "S" }
      ],
      explanation: "Hub berada di Layer 1, seluruh portnya berbagi satu collision domain dan satu broadcast domain.",
      quickTip: "Switch memisahkan collision domain; Router memisahkan broadcast domain."
    },
    {
      stimulus: "Karakteristik keselamatan kerja penanganan serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai K3 serat optik!",
      statements: [
        { text: "Menatap langsung ke ujung serat optik aktif dapat menyebabkan kerusakan permanen pada retina mata.", correct: "B" },
        { text: "Limbah serpihan kaca serat optik wajib ditampung dalam wadah pembuangan tertutup khusus.", correct: "B" },
        { text: "Serpihan kaca serat optik aman ditelan jika tercampur dengan makanan di ruang lab.", correct: "S" }
      ],
      explanation: "Serpihan kaca serat optik sangat berbahaya jika tertelan atau menusuk organ dalam tubuh; dilarang makan/minum di area kerja potong serat.",
      quickTip: "Patuhi K3 optik: Jangan menatap laser dan amankan limbah serpihan kaca tajam."
    },
    {
      stimulus: "Perhitungan kalkulasi alokasi subnetting.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai kalkulasi subnetting!",
      statements: [
        { text: "Subnet mask 255.255.255.192 setara dengan notasi prefix CIDR /26.", correct: "B" },
        { text: "Jumlah host usable pada subnet mask /26 adalah 62 host (berasal dari 64 dikurangi 2).", correct: "B" },
        { text: "Subnet mask /26 dapat menampung hingga 500 komputer pengguna.", correct: "S" }
      ],
      explanation: "Prefix /26 menyisakan 6 bit host, kapasitasnya maksimal 2^6 - 2 = 62 host, tidak bisa menampung 500 komputer.",
      quickTip: "/26 = mask 255.255.255.192 dengan kapasitas 62 host usable."
    },
    {
      stimulus: "Mekanisme pengoperasian Virtual LAN (VLAN).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai VLAN!",
      statements: [
        { text: "VLAN membagi switch fisik menjadi beberapa jaringan logis yang terisolasi satu sama lain.", correct: "B" },
        { text: "Komunikasi antar-VLAN yang berbeda memerlukan bantuan perutean dari Router atau Switch Layer 3.", correct: "B" },
        { text: "VLAN hanya bisa dibuat jika kabel yang digunakan adalah kabel listrik bertegangan 380 Volt.", correct: "S" }
      ],
      explanation: "VLAN adalah fitur logis software switch pada kabel Ethernet data standar, bukan kabel listrik tegangan tinggi.",
      quickTip: "VLAN adalah segmentasi logis Layer 2 switch; komunikasi antar-VLAN butuh Layer 3."
    },
    {
      stimulus: "Analisis grafik kurva hasil pengujian OTDR.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang pembacaan OTDR!",
      statements: [
        { text: "Sambungan fusion splice yang baik ditandai dengan undakan penurunan garis tanpa lonjakan spike pantulan.", correct: "B" },
        { text: "Konektor mekanik ditandai dengan adanya lonjakan spike tajam ke atas akibat pantulan Fresnel.", correct: "B" },
        { text: "OTDR bekerja dengan cara memancarkan gelombang suara ultrasonik ke dalam kabel pipa air.", correct: "S" }
      ],
      explanation: "OTDR memancarkan pulsa laser optik ke dalam inti serat kaca silika, bukan gelombang suara ke pipa air.",
      quickTip: "OTDR menganalisis pulsa laser optik: Spike (Konektor), Undakan turun (Splice/Bending)."
    }
  ]
};

const s28 = {
  sessionId: "s28",
  pg: [
    {
      stimulus: "Penyedia layanan internet (ISP) terikat kontrak Service Level Agreement (SLA) 99.5% ketersediaan layanan jaringan per bulan dengan klien perbankan.",
      question: "Jika dalam satu bulan (720 jam) terjadi gangguan total selama 8 jam, apakah SLA 99.5% tersebut tercapai?",
      correctText: "Tidak tercapai, karena toleransi downtime maksimal pada SLA 99.5% adalah 3.6 jam per bulan (ketersediaan riil hanya 98.88%)",
      distractors: [
        "Tercapai, karena 8 jam masih di bawah batas toleransi 24 jam",
        "Tercapai, karena gangguan terjadi di malam hari",
        "Tercapai, asalkan teknisi meminta maaf secara tertulis",
        "SLA tidak ada hubungannya dengan durasi waktu gangguan"
      ],
      explanation: "Downtime maksimal pada SLA 99.5% per bulan (720 jam) adalah (100% - 99.5%) x 720 jam = 0.005 x 720 = 3.6 jam. Downtime 8 jam melanggar batas SLA.",
      quickTip: "SLA 99.5% batas downtime maksimal hanya 3.6 jam per bulan."
    },
    {
      stimulus: "Dua teknisi tower sedang melakukan instalasi antena radio Point-to-Point di puncak menara SST setinggi 45 meter. Tiba-tiba terdengar suara gemuruh petir dan mendung hitam pekat mendekat.",
      question: "Tindakan K3 yang PALING TEPAT dan wajib segera diambil oleh teknisi di ketinggian adalah...",
      correctText: "Segera menghentikan seluruh pekerjaan dan turun dari menara menuju tempat perlindungan yang aman di darat sebelum hujan dan petir melanda",
      distractors: [
        "Terus melanjutkan pekerjaan hingga antena terpasang selesai",
        "Berpegangan erat pada ujung tiang penangkal petir menara",
        "Membuka seluruh pakaian dan helm pengaman",
        "Berlindung di bawah payung besi di atas puncak menara"
      ],
      explanation: "SOP K3 Ketinggian mewajibkan evakuasi turun seketika saat cuaca buruk (hujan/petir/angin kencang) karena menara baja adalah sasaran utama sambaran petir.",
      quickTip: "Cuaca buruk/petir mendekat saat di tower: Segera hentikan pekerjaan dan turun evakuasi!"
    },
    {
      stimulus: "Sebuah link radio nirkabel Point-to-Point 5 GHz antar-gedung berjarak 3 km yang semula memiliki throughput 150 Mbps tiba-tiba anjlok menjadi 10 Mbps saat jam kerja sibuk, dengan sinyal RSSI tetap kuat (-55 dBm).",
      question: "Penyebab paling mungkin dari penurunan drastis performa nirkabel tersebut adalah...",
      correctText: "Terjadi Co-Channel Interference yang parah akibat adanya pemancar radio lain di sekitar lokasi yang menggunakan frekuensi kanal yang sama persis",
      distractors: [
        "Kabel listrik PLN di gedung mengalami kenaikan voltase",
        "Warna cat antena radio pudar terkena sinar matahari",
        "Komputer klien terlalu banyak membuka file Microsoft Excel",
        "Ketinggian menara radio berkurang akibat gravitasi bumi"
      ],
      explanation: "Sinyal RSSI kuat namun throughput anjlok dan noise tinggi adalah gejala klasik interferensi kanal (Co-Channel Interference). Solusinya adalah memindai frekuensi (frequency scan) dan berpindah ke kanal bersih.",
      quickTip: "Sinyal kuat tapi throughput anjlok drastis = Interferensi kanal frekuensi yang bertumpuk."
    },
    {
      stimulus: "Pada penarikan kabel drop optik FTTH ke rumah pelanggan sepanjang 120 meter, setelah selesai dipasang lampu LOS pada modem ONT berkedip merah. Pengukuran OPM di roset terbaca -34 dBm, padahal di port ODP tiang terukur -19 dBm.",
      question: "Perbedaan redaman sebesar 15 dB pada kabel drop 120 meter tersebut kemungkinan besar disebabkan oleh...",
      correctText: "Kabel drop mengalami tekukan tajam (macrobending) saat diikat kencang pada tiang atau terjepit sudut kusen pintu",
      distractors: [
        "Kabel drop terkena hembusan angin sepoi-sepoi di tiang",
        "Panjang kabel 120 meter terlalu panjang melebihi kapasitas optik",
        "Warna jaket hitam kabel drop menyerap terlalu banyak panas",
        "Modem ONT pelanggan belum dibayar biaya langganannya"
      ],
      explanation: "Kabel sepanjang 120m seharusnya hanya memiliki loss kabel ~0.04 dB. Selisih 15 dB membuktikan terjadi macrobending ekstrem (terjepit/tertekuk tajam) atau sambungan konektor rusak.",
      quickTip: "Redaman drop cable melonjak 15 dB menandakan kabel tertekuk tajam (macrobending) atau terjepit."
    },
    {
      stimulus: "Laboratorium komputer sekolah mengalami insiden di mana semua komputer tiba-tiba kehilangan koneksi internet dan mendapatkan alamat IP aneh `192.168.100.x` dengan gateway `192.168.100.1`, padahal server sekolah menggunakan segmen `10.10.1.x`.",
      question: "Penyebab insiden jaringan tersebut dan langkah pencegahan teknis yang paling tepat pada switch adalah...",
      correctText: "Ada siswa yang mencolokkan router Wi-Fi pribadi (Rogue DHCP Server); mitigasinya adalah mengaktifkan fitur DHCP Snooping pada switch",
      distractors: [
        "Kabel backbone fiber optik putus; solusinya mengganti kabel dengan tembaga",
        "Server Linux sekolah terkena petir; solusinya mematikan genset",
        "Konektor RJ-45 kotor; solusinya mencuci switch dengan air sabun",
        "Sistem operasi Windows kadaluarsa; solusinya menginstal ulang semua PC"
      ],
      explanation: "Insiden Rogue DHCP Server terjadi ketika ada DHCP server liar membagikan IP salah ke klien. Solusinya mengaktifkan DHCP Snooping di switch untuk memblokir DHCP offer liar.",
      quickTip: "Klien dapat IP salah dari router liar = Rogue DHCP; atasi dengan DHCP Snooping di switch."
    },
    {
      stimulus: "Sebuah gedung perkantoran 4 lantai memiliki 200 karyawan yang terbagi dalam 4 departemen: Keuangan (30 host), Pemasaran (50 host), IT (20 host), dan Tamu (60 host). Perusahaan memiliki blok IP 192.168.1.0/24.",
      question: "Metode perancangan alokasi pengalamatan IP yang paling efisien agar tidak terjadi pemborosan alamat dan setiap departemen terisolasi keamanannya adalah...",
      correctText: "Menerapkan Variable Length Subnet Masking (VLSM) yang dipadukan dengan segmentasi Virtual LAN (VLAN)",
      distractors: [
        "Memberikan seluruh karyawan hak akses IP publik statis dari provider",
        "Menghubungkan seluruh 200 komputer menggunakan satu kabel coaxial bus",
        "Menggunakan 4 switch unmanaged tanpa pembagian subnet dan tanpa router",
        "Mematikan seluruh komputer karyawan dan beralih ke mesin tik manual"
      ],
      explanation: "Kombinasi VLSM (menyesuaikan ukuran subnet sesuai kebutuhan departemen) dan VLAN (mengisolasi traffic per departemen di switch) adalah solusi arsitektur terbaik.",
      quickTip: "Segmentasi departemen efisien = Kombinasi VLSM dan VLAN."
    },
    {
      stimulus: "Saat menghubungkan switch Core ke switch Distribution di ruang server, teknisi mengaktifkan protokol RSTP (Rapid Spanning Tree Protocol).",
      question: "Keuntungan utama menggunakan RSTP dibandingkan STP klasik (802.1D) saat salah satu kabel penghubung putus adalah...",
      correctText: "Waktu pemulihan jalur cadangan (konvergensi failover) berlangsung sangat cepat di bawah 1 hingga 2 detik",
      distractors: [
        "Kabel yang putus otomatis menyambung kembali secara fisik",
        "Kecepatan transfer data switch otomatis naik menjadi 1 Terabits",
        "RSTP tidak membutuhkan daya listrik untuk beroperasi",
        "RSTP menghilangkan kebutuhan alamat IP pada router"
      ],
      explanation: "RSTP (802.1w) memangkas waktu konvergensi dari 30-50 detik pada STP klasik menjadi kurang dari 1-2 detik berkat mekanisme handshake proposal-agreement.",
      quickTip: "Keunggulan RSTP = Konvergensi failover super cepat di bawah 2 detik."
    },
    {
      stimulus: "Teknisi melakukan pengujian pada sambungan kabel drop FTTH menggunakan VFL (senter laser merah). Saat laser dinyalakan di ujung konektor SC, terlihat pendaran cahaya merah terang memancar menembus jaket hitam kabel pada jarak 5 cm dari konektor.",
      question: "Kesimpulan diagnosa fisik yang dapat dipastikan dari pendaran cahaya merah tersebut adalah...",
      correctText: "Serat kaca di dalam kabel mengalami retak atau patah fisik tepat pada titik 5 cm tersebut",
      distractors: [
        "Kabel optik bekerja dengan performa transfer data 100% sempurna",
        "Cahaya laser sedang mengisi daya baterai modem ONT",
        "Kabel optik terlindung dari gangguan elektromagnetik",
        "Konektor optik sedang melakukan negosiasi kecepatan link"
      ],
      explanation: "Cahaya VFL yang berpendar menembus jaket menandakan inti kaca retak atau patah total sehingga berkas sinar bocor keluar dari serat.",
      quickTip: "Pendaran laser merah menembus jaket kabel = Serat kaca patah / retak fisik."
    },
    {
      stimulus: "Di ruang data center, suhu lorong dingin (cold aisle) terukur 21°C sementara suhu lorong panas (hot aisle) terukur 34°C. Server rackmount terpasang rapi dengan blanking panel pada slot kosong.",
      question: "Tujuan pemasangan penutup slot kosong (Blanking Panel) pada rak server data center adalah...",
      correctText: "Mencegah udara panas dari belakang server berputar kembali masuk ke bagian depan server (resirkulasi udara panas)",
      distractors: [
        "Mencegah teknisi melihat isi komponen di dalam server",
        "Sebagai tempat menempelkan stiker hiasan dinding",
        "Menambah berat rak server agar tidak terbang tertiup angin",
        "Menyerap radiasi suara bising kipas pendingin"
      ],
      explanation: "Blanking panel menutup celah kosong pada rak server untuk mencegah udara buangan panas (hot exhaust) memutar balik ke saluran hisap dingin (cold intake).",
      quickTip: "Blanking panel rak server mencegah resirkulasi udara panas ke lorong dingin."
    },
    {
      stimulus: "Sebuah kantor mengalami masalah di mana koneksi internet sering putus-nyambung setiap beberapa menit. Saat teknisi memeriksa log router, ditemukan ribuan entri: `ARP collision detected: IP 192.168.1.1 is claimed by MAC a4:b2:c1:00:11:22 and MAC 00:15:5d:aa:bb:cc`.",
      question: "Jenis insiden jaringan yang sedang terjadi berdasarkan pesan log tersebut adalah...",
      correctText: "Terjadi IP Conflict pada alamat Default Gateway (atau ada serangan ARP Spoofing / Poisoning)",
      distractors: [
        "Kabel fiber optik bawah tanah dimakan tikus",
        "Suhu processor router terlalu dingin di bawah 0°C",
        "Lampu indikator power switch mati total",
        "Sistem operasi komputer klien meminta ganti password"
      ],
      explanation: "Dua MAC address berbeda yang mengklaim IP yang sama (terutama IP gateway) menandakan konflik IP statis atau adanya indikasi serangan Man-in-the-Middle (ARP Spoofing).",
      quickTip: "Log ARP collision pada IP gateway = Indikasi IP Conflict atau serangan ARP Spoofing."
    },
    {
      stimulus: "Perusahaan menghubungkan kantor pusat dan gudang logistik yang berjarak 500 meter menggunakan kabel UTP Cat6 yang ditarik menyeberangi lapangan terbuka di atas tiang tanpa pelindung petir.",
      question: "Risiko teknis terbesar yang mengancam perangkat switch di kedua ujung kabel akibat pemasangan tersebut saat musim hujan adalah...",
      correctText: "Kerusakan port switch terbakar akibat induksi tegangan tinggi sambaran petir tidak langsung (Lightning Surge Induction)",
      distractors: [
        "Kabel UTP akan berubah warna menjadi kuning keemasan",
        "Data internet akan mengalir terlalu cepat hingga meledak",
        "Kecepatan transfer data otomatis turun menjadi 1 bit per detik",
        "Komputer server akan otomatis menginstal aplikasi game"
      ],
      explanation: "Bentangan kabel tembaga outdoor tanpa pelindung bertindak sebagai antena penangkap induksi petir, merusak sirkuit elektronik switch. Solusi ideal antar-gedung adalah kabel fiber optik dielektrik.",
      quickTip: "Bentangan kabel tembaga outdoor antar-gedung rawan rusak induksi petir; gunakan Fiber Optik!"
    },
    {
      stimulus: "Dua router dihubungkan melalui tautan serial kabel Point-to-Point. Teknisi mengalokasikan subnet 10.0.0.0/30.",
      question: "Jika Router A menggunakan alamat IP 10.0.0.1/30, maka alamat IP yang WAJIB dipasang pada port Router B yang terhubung langsung adalah...",
      correctText: "10.0.0.2/30",
      distractors: [
        "10.0.0.3/30 (Alamat Broadcast)",
        "10.0.0.0/30 (Alamat Network)",
        "10.0.0.4/30 (Subnet berikutnya)",
        "10.0.0.1/30 (Konflik IP sama)"
      ],
      explanation: "Subnet 10.0.0.0/30 hanya memiliki dua IP usable: 10.0.0.1 (Router A) dan 10.0.0.2 (Router B). 10.0.0.0 adalah Network ID dan 10.0.0.3 adalah Broadcast ID.",
      quickTip: "Pasangan link /30: Jika satu ujung .1, maka ujung pasangannya wajib .2."
    },
    {
      stimulus: "Seorang teknisi memeriksa konektor fiber optik SC/UPC baru menggunakan mikroskop video serat optik sebelum menancapkannya ke port ODF.",
      question: "Jika di layar mikroskop terlihat lingkaran core di tengah bersih mulus tanpa noda, namun di area luar cladding terdapat sedikit bintik debu.",
      correctText: "Tetap wajib dibersihkan menggunakan pembersih optik (One-Click cleaner) hingga seluruh permukaan ferrule bersih sebelum dicolokkan",
      distractors: [
        "Boleh langsung dicolokkan tanpa dibersihkan karena core masih bersih",
        "Konektor harus langsung dibuang ke tempat sampah karena sudah cacat",
        "Ferrule harus diamplas dengan amplas besi kasar",
        "Ujung konektor harus dijilat dengan air liur"
      ],
      explanation: "Debu di area cladding dapat berpindah ke core saat konektor ditancapkan dan ditekan di dalam adapter mating sleeve, memicu redaman atau goresan permanen.",
      quickTip: "Prinsip IEC 61300-3-35: Seluruh permukaan ferrule harus bersih sebelum ditancapkan."
    },
    {
      stimulus: "Di sebuah switch Cisco, teknisi menjalankan perintah `show interfaces trunk` dan mendapati baris: `Port Fa0/24 Mode: on Encapsulation: 802.1q Status: trunking Native VLAN: 1`.",
      question: "Arti dari informasi status tersebut adalah...",
      correctText: "Port FastEthernet 0/24 aktif sebagai port trunk IEEE 802.1Q yang membawa banyak VLAN dengan Native VLAN nomor 1",
      distractors: [
        "Port FastEthernet 0/24 rusak dan mati total",
        "Port FastEthernet 0/24 hanya bisa digunakan oleh 1 unit komputer saja",
        "Port FastEthernet 0/24 sedang terserang virus trojan",
        "Port FastEthernet 0/24 menolak seluruh paket internet"
      ],
      explanation: "Output tersebut menunjukkan port Fa0/24 sukses dikonfigurasi sebagai port Trunk 802.1Q aktif dengan Native VLAN default 1.",
      quickTip: "show interfaces trunk memverifikasi port trunk 802.1Q yang aktif dan Native VLAN-nya."
    },
    {
      stimulus: "Dalam pengoperasian jaringan Linux Server, administrator ingin memastikan bahwa hanya port 22 (SSH), port 80 (HTTP), dan port 443 (HTTPS) saja yang terbuka ke publik internet.",
      question: "Perangkat lunak firewall bawaan Linux yang paling umum dikonfigurasi untuk menyaring dan membatasi port lalu lintas paket tersebut adalah...",
      correctText: "iptables / UFW (Uncomplicated Firewall) atau nftables",
      distractors: [
        "Apache2 Web Server",
        "BIND9 DNS Daemon",
        "OpenSSH Client",
        "Samba File Share"
      ],
      explanation: "UFW (Uncomplicated Firewall) atau iptables/nftables adalah subsistem penyaring paket (packet filtering firewall) standar pada kernel Linux.",
      quickTip: "Pengelola firewall port di Linux = UFW / iptables / nftables."
    },
    {
      stimulus: "Teknisi melakukan sambungan fusion splice antara serat optik pabrikan A dan serat optik pabrikan B. Saat diuji dengan OTDR dari sisi A ke B, grafik menunjukkan undakan 'naik' sebesar -0,08 dB (Gainer).",
      question: "Langkah verifikasi mutlak yang harus dilakukan teknisi untuk membuktikan nilai redaman sejati dari sambungan tersebut adalah...",
      correctText: "Melakukan pengujian balik dari sisi B ke A, lalu merata-ratakan kedua nilai pengukuran (Bi-Directional Measurement)",
      distractors: [
        "Memotong kabel dan membuangnya ke sungai",
        "Menganggap kabel tersebut menghasilkan energi listrik gratis",
        "Mematikan mesin OTDR dan menggantinya dengan tespen",
        "Menulis di laporan bahwa kabel memiliki daya tak terbatas"
      ],
      explanation: "Virtual Gainer terjadi karena perbedaan koefisien backscatter. Pengukuran dua arah (Bi-Directional) dan menghitung nilai rata-rata adalah satu-satunya metode valid standar ITU-T.",
      quickTip: "Gainer pada OTDR wajib diverifikasi dengan pengukuran dua arah (Bi-Directional Average)."
    },
    {
      stimulus: "Pada sebuah router kantor, pengguna mengeluh tidak bisa mengakses website tertentu melalui nama domain (misal `www.smk.id`), namun jika mengetikkan alamat IP `103.150.10.5` di browser, website terbuka lancar.",
      question: "Analisis teknis yang paling tepat mengenai penyebab gangguan tersebut adalah...",
      correctText: "Terjadi kegagalan konfigurasi atau gangguan pada DNS Server (Name Resolution Failure)",
      distractors: [
        "Kabel LAN di komputer pengguna putus total",
        "Kartu jaringan komputer pengguna rusak terbakar",
        "Router gateway kantor mati kehabisan daya listrik",
        "Seluruh jaringan internet dunia sedang padam"
      ],
      explanation: "Bisa akses via IP namun gagal via nama domain adalah indikasi pasti masalah DNS (Domain Name System). Solusinya memeriksa IP DNS server di komputer/DHCP.",
      quickTip: "Bisa buka IP tapi tidak bisa buka nama domain = Masalah pada DNS Server."
    },
    {
      stimulus: "Saat bekerja di tiang kabel udara FTTH, seorang teknisi mendapati kabel drop optik terkelupas jaket luarnya akibat gesekan dahan pohon yang bergoyang tertiup angin.",
      question: "Tindakan preventif terbaik saat perbaikan kabel udara yang melintasi pepohonan adalah...",
      correctText: "Memangkas dahan pohon yang bergesekan dan memasang pipa pelindung spiral (Spiral Wrap / Protection Tube) pada kabel di area gesekan",
      distractors: [
        "Membiarkan kabel tetap bergesekan hingga putus dengan sendirinya",
        "Menebang seluruh hutan kota tanpa izin dinas lingkungan",
        "Mengikat kabel drop optik ke kabel listrik PLN telanjang",
        "Melapisi kabel dengan lem kertas kantor"
      ],
      explanation: "SOP pemeliharaan kabel udara mensyaratkan pemasangan spiral wrapping/pelindung gesekan pada area rintangan pohon serta pemangkasan dahan pengganggu.",
      quickTip: "Cegah gesekan kabel di pohon: Pasang spiral wrapping pelindung dan pangkas dahan."
    },
    {
      stimulus: "Teknisi menggunakan perintah `traceroute` (atau `tracert` di Windows) untuk melacak rute paket dari komputer sekolah menuju server pusat Ujian Nasional.",
      question: "Mekanisme kerja protokol jaringan yang dimanfaatkan oleh utilitas traceroute untuk mendeteksi setiap hop router di sepanjang jalur adalah...",
      correctText: "Memanipulasi nilai TTL (Time to Live) paket IP secara bertahap (mulai dari TTL=1, 2, 3...) dan mendengarkan pesan balasan ICMP Time Exceeded",
      distractors: [
        "Mengirimkan virus perusak ke setiap router",
        "Menyalakan kamera CCTV di setiap persimpangan jalan",
        "Membaca nomor seri kartu garansi router",
        "Mengukur arus listrik kabel menggunakan multimeter"
      ],
      explanation: "Traceroute menaikkan nilai TTL dari 1 ke atas. Setiap router mengurangi TTL sebesar 1; saat TTL=0 router membuang paket dan mengirim ICMP Time Exceeded (Tipe 11).",
      quickTip: "Traceroute bekerja dengan memanipulasi nilai TTL (Time to Live) dan balasan ICMP Time Exceeded."
    },
    {
      stimulus: "Sebelum menandatangani berita acara serah terima pekerjaan instalasi jaringan LAN gedung 3 lantai, pengawas proyek meminta bukti uji kelayakan kabel terstruktur.",
      question: "Dokumen resmi standar yang harus dilampirkan teknisi sebagai bukti bahwa seluruh titik kabel UTP lolos uji sertifikasi parameter NEXT, Return Loss, dan Insertion Loss adalah...",
      correctText: "Laporan Hasil Uji Sertifikasi Fluke CableAnalyzer (Certificate of Compliance / Test Report Sheet)",
      distractors: [
        "Struk nota pembelian konektor RJ-45 dari toko material",
        "Foto selfie teknisi memegang tang crimping di depan rak",
        "Kwitansi pembayaran makan siang tim teknisi",
        "Daftar nomor telepon seluruh karyawan gedung"
      ],
      explanation: "Sertifikasi kabel gedung terstruktur dibuktikan dengan laporan uji digital alat ukur level sertifikasi (seperti Fluke DSX CableAnalyzer) per titik kabel.",
      quickTip: "Bukti uji kelayakan instalasi kabel gedung = Laporan Uji Fluke Cable Analyzer."
    }
  ],
  mcma: [
    {
      stimulus: "Evaluasi penerapan K3 dan budaya kerja 5R di laboratorium jaringan komputer.",
      question: "Manakah tindakan di laboratorium jaringan yang MENCERMINKAN budaya kerja industri 5R dan K3? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menata kabel di rak server menggunakan manajemen kabel horizontal (Cable Management) dan labeling rapi (Rapi / Seiton)", isCorrect: true },
        { text: "Mengumpulkan serpihan kaca serat optik sisa potongan ke dalam wadah khusus limbah tajam (Resik & K3)", isCorrect: true },
        { text: "Menyingkirkan perangkat rusak yang tidak terpakai dari meja kerja ke gudang penyimpanan (Ringkas / Seiri)", isCorrect: true },
        { text: "Membiarkan kabel power 220V berserakan melintang di lantai koridor pintu lab", isCorrect: false },
        { text: "Menaruh cangkir kopi panas di atas switch core yang sedang menyala", isCorrect: false }
      ],
      explanation: "Penerapan 5R: Ringkas (singkirkan yang tidak perlu), Rapi (manajemen kabel & labeling), Resik (bersihkan limbah serpihan kaca). Menaruh kopi di atas switch atau kabel melintang melanggar K3.",
      quickTip: "Penerapan 5R & K3: Labeling rapi, buang limbah kaca ke wadah khusus, dan singkirkan barang rusak."
    },
    {
      stimulus: "Troubleshooting konektivitas jaringan komputer menggunakan utilitas CLI.",
      question: "Manakah utilitas perintah diagnosa jaringan dan fungsi utamanya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "`ping` digunakan untuk menguji keterjangkauan host dan mengukur waktu latensi bolak-balik (RTT)", isCorrect: true },
        { text: "`traceroute` (atau `tracert`) digunakan untuk melacak jalur rute lompatan router menuju tujuan", isCorrect: true },
        { text: "`nslookup` (atau `dig`) digunakan untuk menguji query resolusi nama domain DNS Server", isCorrect: true },
        { text: "`format c:` digunakan untuk mempercepat koneksi Wi-Fi", isCorrect: false },
        { text: "`cd` digunakan untuk mengukur daya laser optik dalam dBm", isCorrect: false }
      ],
      explanation: "Ping (uji konektivitas RTT), Traceroute (lacak hop router), Nslookup/Dig (uji DNS).",
      quickTip: "Utilitas diagnosa: Ping (konektivitas), Traceroute (jalur hop), Nslookup (DNS)."
    },
    {
      stimulus: "Parameter keselamatan kerja bekerja di ketinggian (Working at Heights) pada tiang FTTH.",
      question: "Manakah ketentuan K3 bekerja di ketinggian yang WAJIB dipatuhi teknisi? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Wajib menggunakan Full Body Harness dengan tali ganda pengait (Dual Lanyard) yang dikaitkan ke titik angkur kokoh", isCorrect: true },
        { text: "Memasang rambu peringatan kerja dan safety cone di area bawah tiang pinggir jalan raya", isCorrect: true },
        { text: "Boleh memanjat tiang tanpa helm keselamatan jika cuaca sedang panas terik", isCorrect: false },
        { text: "Dianjurkan melepas tali harness saat berada di puncak tiang agar lebih leluasa bergerak", isCorrect: false },
        { text: "Memanjat tiang diperbolehkan saat terjadi badai petir lebat", isCorrect: false }
      ],
      explanation: "SOP K3 ketinggian: Full body harness dengan dual lanyard wajib terpasang 100% tie-off, dan pasang safety cone di zona bawah kerja.",
      quickTip: "K3 Ketinggian: Full Body Harness dual lanyard dan safety cone di area kerja jalan."
    },
    {
      stimulus: "Analisis kejadian (Event) pada kurva pembacaan instrumen OTDR.",
      question: "Manakah karakteristik kejadian kurva OTDR yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Konektor mekanik menghasilkan spike pantulan Fresnel tajam (Reflective Event)", isCorrect: true },
        { text: "Sambungan peleburan fusion splice menghasilkan undakan penurunan loss tanpa spike (Non-Reflective Event)", isCorrect: true },
        { text: "Ujung kabel putus ditandai dengan penurunan curam kurva menyentuh batas noise floor (Fiber End)", isCorrect: true },
        { text: "Tekukan kabel macrobending menghasilkan lonjakan kenaikan daya sebesar +50 dBm", isCorrect: false },
        { text: "Kurva OTDR yang lurus mendatar menandakan kabel serat optik putus total", isCorrect: false }
      ],
      explanation: "Spike = Reflective (konektor); Undakan turun = Non-Reflective (splice); Jatuh ke noise floor = Fiber End.",
      quickTip: "Kurva OTDR: Spike (Konektor), Undakan turun (Splice), Jatuh ke dasar (Ujung kabel/Putus)."
    },
    {
      stimulus: "Konfigurasi keamanan port dan layanan server jaringan.",
      question: "Manakah langkah pengamanan infrastruktur jaringan yang TEPAT? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Mengaktifkan fitur DHCP Snooping pada switch untuk mencegah peredaran IP dari Rogue DHCP Server", isCorrect: true },
        { text: "Menggunakan otentikasi SSH Key pair dan menonaktifkan permit root login pada server Linux", isCorrect: true },
        { text: "Memberikan izin `chmod 777` pada seluruh file dan folder server produksi", isCorrect: false },
        { text: "Mematikan fungsi Spanning Tree Protocol pada seluruh switch terkelola", isCorrect: false },
        { text: "Menggunakan kata sandi 'admin' untuk akun root semua router", isCorrect: false }
      ],
      explanation: "Praktik keamanan esensial: DHCP Snooping di switch dan SSH key-based authentication tanpa direct root login di Linux.",
      quickTip: "Amankan jaringan: Aktifkan DHCP Snooping dan gunakan SSH Key pair tanpa direct root."
    }
  ],
  tf: [
    {
      stimulus: "Perhitungan Service Level Agreement (SLA) jaringan.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai SLA!",
      statements: [
        { text: "SLA adalah dokumen komitmen resmi tingkat ketersediaan dan kualitas layanan antara ISP dan pelanggan.", correct: "B" },
        { text: "Downtime selama 10 jam dalam satu bulan melanggar batas toleransi SLA 99.5%.", correct: "B" },
        { text: "SLA 100% menjamin bahwa petir tidak akan pernah menyambar menara telekomunikasi.", correct: "S" }
      ],
      explanation: "Petir adalah bencana alam (force majeure); SLA adalah komitmen waktu operasional sistem dan kompensasi penanganan insiden.",
      quickTip: "SLA mengatur komitmen uptime operasional dan batas toleransi downtime layanan."
    },
    {
      stimulus: "Penanganan interferensi frekuensi radio nirkabel.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai link radio!",
      statements: [
        { text: "Kanal frekuensi 2.4 GHz lebih rentan terhadap interferensi kepadatan sinyal dibanding pita 5 GHz.", correct: "B" },
        { text: "Pemindaian spektrum frekuensi (Spectrum Analyzer) membantu teknisi menemukan kanal frekuensi yang bersih bebas derau.", correct: "B" },
        { text: "Interferensi gelombang radio nirkabel dapat diatasi dengan cara mengecat antena radio dengan cat minyak.", correct: "S" }
      ],
      explanation: "Mengecat antena tidak menghilangkan interferensi radio elektromagnetik; solusinya adalah berpindah ke kanal frekuensi yang bersih.",
      quickTip: "Interferensi radio diatasi dengan mengganti kanal frekuensi ke saluran yang bersih."
    },
    {
      stimulus: "Pengaruh tekukan macrobending pada serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Macrobending!",
      statements: [
        { text: "Tekukan tajam pada kabel drop fiber optik dapat menyebabkan lonjakan redaman hingga puluhan desibel.", correct: "B" },
        { text: "Redaman akibat macrobending jauh lebih besar terukur pada panjang gelombang 1550 nm dibanding pada 1310 nm.", correct: "B" },
        { text: "Kabel serat optik Single-Mode dianjurkan ditekuk patah 90 derajat agar sinyal cahaya berputar lebih cepat.", correct: "S" }
      ],
      explanation: "Menekuk kabel serat optik secara tajam merusak sudut pantulan total dan menyebabkan kebocoran sinyal cahaya yang parah.",
      quickTip: "Dilarang menekuk kabel serat optik secara tajam (cegah macrobending loss)."
    },
    {
      stimulus: "Mekanisme perlindungan loop Layer 2 dengan RSTP.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai protokol RSTP!",
      statements: [
        { text: "RSTP (IEEE 802.1w) memiliki waktu konvergensi jauh lebih cepat dibanding STP standar 802.1D.", correct: "B" },
        { text: "RSTP mencegah terjadinya badai broadcast (broadcast storm) pada topologi switch dengan link redundan.", correct: "B" },
        { text: "RSTP berfungsi memberikan alamat IP secara otomatis ke printer kantor.", correct: "S" }
      ],
      explanation: "Pemberian IP otomatis adalah fungsi DHCP Server, bukan Rapid Spanning Tree Protocol (RSTP).",
      quickTip: "RSTP mencegah switching loop dan broadcast storm dengan konvergensi cepat."
    },
    {
      stimulus: "Prinsip pengujian rute dengan utilitas Traceroute.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Traceroute!",
      statements: [
        { text: "Traceroute memanfaatkan pengurangan nilai Time to Live (TTL) paket IP di setiap router perantara.", correct: "B" },
        { text: "Pesan balasan ICMP Time Exceeded digunakan untuk mengidentifikasi alamat IP dari router yang dilintasi.", correct: "B" },
        { text: "Traceroute hanya dapat berjalan jika seluruh kabel jaringan di dunia dilepas.", correct: "S" }
      ],
      explanation: "Traceroute mutlak membutuhkan koneksi jaringan aktif untuk mengirimkan probe paket ke router-router perantara.",
      quickTip: "Traceroute melacak rute via manipulasi TTL dan pesan ICMP Time Exceeded."
    }
  ]
};

const s29 = {
  sessionId: "s29",
  pg: [
    {
      stimulus: "Teknisi jaringan menangkap lalu lintas paket menggunakan software Wireshark pada saat komputer klien mencoba browsing ke website bank.",
      question: "Proses jabat tangan awal yang harus terlihat pada analisis paket TCP sebelum data HTTP/HTTPS mulai mengalir adalah...",
      correctText: "Paket [SYN] dari klien, diikuti [SYN, ACK] dari server, dan diakhiri [ACK] dari klien (TCP Three-Way Handshake)",
      distractors: [
        "Paket [FIN], [ACK], [RST]",
        "Paket DHCP Discover dan DHCP Offer",
        "Paket ARP Request dan ARP Reply",
        "Paket ICMP Echo Request dan Echo Reply"
      ],
      explanation: "Setiap koneksi TCP diawali dengan Three-Way Handshake: SYN -> SYN/ACK -> ACK untuk menyinkronkan nomor urut (sequence number).",
      quickTip: "Koneksi TCP diawali: SYN -> SYN-ACK -> ACK (Three-Way Handshake)."
    },
    {
      stimulus: "Saat menganalisis paket Wireshark pada jaringan yang lambat, teknisi melihat banyak paket berwarna hitam bertuliskan `[TCP Retransmission]` dan `[TCP Dup ACK]`.",
      question: "Arti dari indikator teknis paket tersebut dalam diagnosa performa jaringan adalah...",
      correctText: "Terjadi kehilangan paket data (Packet Loss) atau kemacetan antrean (congestion) pada jalur jaringan sehingga pengirim harus mengirim ulang segmen data",
      distractors: [
        "Kecepatan jaringan sedang berada pada kondisi puncak maksimal",
        "Kartu jaringan komputer pengirim menghasilkan energi listrik gratis",
        "Kabel fiber optik diubah menjadi kabel tembaga secara otomatis",
        "Semua server di internet sedang melakukan pencadangan data serentak"
      ],
      explanation: "TCP Retransmission terjadi ketika pengirim tidak menerima ACK tepat waktu (timeout) akibat paket drop di jalan, mengindikasikan packet loss atau kongesti link.",
      quickTip: "TCP Retransmission di Wireshark mengindikasikan adanya Packet Loss atau kongesti jaringan."
    },
    {
      stimulus: "Seorang teknisi melakukan pengujian konektivitas menggunakan perintah `ping 192.168.1.1` dan menerima pesan respon: `Reply from 192.168.1.254: Destination host unreachable`.",
      question: "Arti teknis dari pesan respon 'Destination host unreachable' tersebut adalah...",
      correctText: "Router gateway perantara (192.168.1.254) tidak memiliki jalur rute atau gagal melakukan resolusi ARP ke alamat tujuan 192.168.1.1",
      distractors: [
        "Komputer pengirim tidak memiliki kartu jaringan fisik",
        "Kabel listrik monitor komputer pengirim terlepas dari stopkontak",
        "Paket berhasil sampai ke tujuan dan dibalas dalam 0 milidetik",
        "Sistem operasi komputer tujuan sedang mengunduh video game"
      ],
      explanation: "'Destination host unreachable' dikirimkan oleh router perantara yang memberitahukan bahwa ia tidak dapat menemukan jalur atau tidak ada respon ARP dari host tujuan di subnet lokal.",
      quickTip: "'Destination host unreachable' berarti router gateway tidak menemukan rute/host tujuan."
    },
    {
      stimulus: "Berbeda dengan kasus sebelumnya, saat melakukan `ping 8.8.8.8` teknisi menerima pesan respon: `Request timed out (RTO)` sebanyak 4 kali.",
      question: "Penyebab paling mungkin dari respon 'Request timed out' pada pengujian ping adalah...",
      correctText: "Paket berhasil dikirim keluar namun tidak ada balasan dari tujuan dalam batas waktu tunggu (akibat firewall memblokir ICMP atau putus jalur di remote)",
      distractors: [
        "Kabel LAN di komputer pengirim terlepas dari soket RJ-45",
        "Protokol TCP/IP lokal di komputer pengirim rusak total",
        "Komputer pengirim kehabisan memori RAM",
        "Layar monitor komputer pengirim mengalami mati lampu"
      ],
      explanation: "'Request timed out' berarti paket telah terkirim keluar, tetapi dalam batas waktu (default 4 detik) tidak ada balasan ICMP Echo Reply (sering kali diblokir firewall tujuan).",
      quickTip: "'Request timed out' berarti tidak ada paket balasan yang kembali dalam batas waktu tunggu."
    },
    {
      stimulus: "Teknisi memasang Access Point Wi-Fi baru di kantor cabang. Klien dapat terhubung ke Wi-Fi dan mendapat IP, namun saat membuka website apapun muncul error browser: `DNS_PROBE_FINISHED_NXDOMAIN`.",
      question: "Penyebab dari pesan error tersebut dan langkah perbaikan yang tepat adalah...",
      correctText: "Pengaturan DNS Server pada DHCP server salah atau tidak dapat dihubungi; solusinya mengonfigurasikan alamat DNS publik yang valid (seperti 8.8.8.8 atau 1.1.1.1)",
      distractors: [
        "Kabel listrik Access Point terbalik kutub positif dan negatifnya",
        "Kabel serat optik bawah tanah mengalami patah total",
        "Antena Access Point harus diarahkan menghadap ke arah kiblat",
        "Pengguna harus menghapus seluruh file dokumen di komputer"
      ],
      explanation: "NXDOMAIN (Non-Existent Domain) menandakan query DNS gagal diselesaikan. Mengarahkan DNS ke server terpercaya (misal 8.8.8.8 atau 1.1.1.1) akan memulihkan resolusi nama.",
      quickTip: "Error NXDOMAIN = Masalah resolusi nama pada DNS Server."
    },
    {
      stimulus: "Sebuah server database MySQL di kantor tiba-tiba tidak dapat diakses dari aplikasi web. Saat teknisi memeriksa port layanan di Linux menggunakan perintah `ss -tulnp`, tidak terlihat adanya proses yang mendengarkan port 3306.",
      question: "Langkah diagnosa dan perbaikan pertama yang harus dilakukan teknisi pada server Linux tersebut adalah...",
      correctText: "Memeriksa status layanan menggunakan `systemctl status mysql` dan menyalakan kembali layanan dengan `sudo systemctl start mysql`",
      distractors: [
        "Langsung memformat ulang seluruh hard disk server Linux",
        "Mengganti seluruh kabel power supply genset gedung",
        "Membeli 10 unit server baru dari toko komputer",
        "Mematikan pasokan listrik seluruh gedung kantor"
      ],
      explanation: "Jika port 3306 tidak listening, berarti service MySQL/MariaDB sedang mati (inactive/failed). Cek statusnya via `systemctl status` dan jalankan via `systemctl start`.",
      quickTip: "Service database tidak listening di port: Cek `systemctl status` dan jalankan via `systemctl start`."
    },
    {
      stimulus: "Pengguna di kantor mengeluh bahwa setiap kali printer jaringan di lantai 2 dinyalakan, komputer staf administrasi tiba-tiba kehilangan koneksi internet dan muncul notifikasi: 'There is an IP address conflict with another system on the network'.",
      question: "Langkah mitigasi permanen yang paling tepat untuk mengatasi konflik IP tersebut adalah...",
      correctText: "Memastikan printer menggunakan IP statis di luar rentang pool alokasi DHCP atau membuat DHCP Reservation khusus berdasarkan MAC address printer",
      distractors: [
        "Membuang printer jaringan ke tempat sampah",
        "Mematikan komputer staf administrasi selamanya",
        "Mengganti kabel printer dengan kabel telepon tipis",
        "Mengubah warna kertas printer menjadi merah"
      ],
      explanation: "IP conflict terjadi saat perangkat ber-IP statis manual bertabrakan dengan IP yang dibagikan otomatis oleh DHCP server. Solusinya buat reservasi DHCP atau pisahkan range IP statis.",
      quickTip: "Atasi IP conflict printer: Beri IP di luar DHCP pool atau buat DHCP Reservation."
    },
    {
      stimulus: "Teknisi melakukan pengetesan kabel UTP Cat6 sepanjang 60 meter menggunakan LAN cable tester LED sederhana. Lampu 1 sampai 8 menyala lurus normal. Namun saat dipasang ke port Gigabit switch, koneksi hanya terbaca '100 Mbps Fast Ethernet' dan tidak mau naik ke 1 Gbps.",
      question: "Penyebab paling mungkin mengapa kartu jaringan gagal bernegosiasi ke kecepatan 1 Gbps tersebut adalah...",
      correctText: "Salah satu pin antara pin 4, 5, 7, atau 8 memiliki kontak tembaga yang buruk (resistansi tinggi/longgar) sehingga switch turun otomatis ke mode 100 Mbps",
      distractors: [
        "Panjang kabel 60 meter melebihi batas kabel tembaga 10 meter",
        "Warna konektor RJ-45 tidak cocok dengan warna casing switch",
        "Komputer pengguna kekurangan kapasitas memori hard disk",
        "Kabel UTP harus dibasahi dengan air sebelum dicolokkan"
      ],
      explanation: "Fast Ethernet 100 Mbps hanya butuh pin 1,2,3,6. Gigabit Ethernet butuh seluruh 8 pin sehat. Jika pin 4,5,7,8 longgar/kontak buruk, link downspeed ke 100 Mbps.",
      quickTip: "Gigabit turun ke 100 Mbps = Masalah kontak pada pin 4, 5, 7, atau 8."
    },
    {
      stimulus: "Pada router MikroTik kantor, administrator melihat lonjakan beban CPU hingga 100% dan grafik traffic interface WAN penuh dengan jutaan paket SYN kecil dari ribuan alamat IP acak menuju port 80 server web internal.",
      question: "Jenis insiden serangan siber yang sedang melanda router kantor tersebut adalah...",
      correctText: "Serangan SYN Flood (DDoS - Distributed Denial of Service pada Layer 4 TCP)",
      distractors: [
        "Serangan Malware Ransomware enkripsi file",
        "Serangan Phishing pencurian email",
        "Kerusakan mekanis kabel serat optik bawah tanah",
        "Korsleting arus listrik pada baterai UPS"
      ],
      explanation: "SYN Flood membanjiri target dengan paket TCP SYN tanpa menyelesaikan 3-way handshake, menghabiskan memori tabel koneksi (connection tracking) dan membebani CPU router.",
      quickTip: "Jutaan paket TCP SYN membanjiri port hingga CPU 100% = Serangan SYN Flood DDoS."
    },
    {
      stimulus: "Untuk memitigasi serangan SYN Flood pada firewall router, langkah penanganan yang dapat dikonfigurasikan adalah...",
      question: "Fitur keamanan firewall yang efektif meredam serangan SYN flood adalah...",
      correctText: "Mengaktifkan fitur SYN Cookies dan membatasi laju koneksi baru (Connection Rate Limit) pada firewall",
      distractors: [
        "Mencabut seluruh kabel grounding penangkal petir",
        "Menghapus seluruh file sistem operasi router",
        "Mengganti seluruh monitor komputer dengan layar sentuh",
        "Menurunkan kecepatan kipas casing server"
      ],
      explanation: "SYN Cookies menunda alokasi memori tabel koneksi sampai paket ACK valid diterima, dan rate limiting membatasi frekuensi paket SYN per detik dari sumber.",
      quickTip: "Mitigasi SYN Flood: Aktifkan SYN Cookies dan batasi Connection Rate Limit di firewall."
    },
    {
      stimulus: "Saat melakukan pengujian OTDR pada serat optik 12 core, core nomor 5 menunjukkan kurva yang jatuh ke noise floor pada jarak 850 meter, sementara core 1, 2, 3, dan 4 berjalan normal hingga 12 kilometer.",
      question: "Kesimpulan diagnosa teknis mengenai kondisi core nomor 5 tersebut adalah...",
      correctText: "Hanya serat optik core nomor 5 yang putus/patah di titik 850 meter (Single Core Cut), sedangkan kabel multi-core utama masih utuh",
      distractors: [
        "Seluruh kabel 12 core terputus total ditebang orang di 850 meter",
        "Instrumen OTDR mengalami kerusakan layar LCD",
        "Satelit di orbit luar angkasa mengalami gangguan cuaca",
        "Panjang gelombang 1310 nm tidak bisa digunakan untuk core nomor 5"
      ],
      explanation: "Jika hanya satu core yang putus di 850m sementara core lain lolos normal ke 12 km, berarti terjadi kerusakan terlokalisir pada core tersebut (misal terjepit saat penataan di closure/tray).",
      quickTip: "Satu core putus di jarak dekat sementara core lain normal = Kerusakan lokal pada single core."
    },
    {
      stimulus: "Seorang administrator memeriksa berkas log otentikasi Linux di `/var/log/auth.log` dan menemukan ribuan baris: `Failed password for invalid user admin from 203.0.113.88 port 48212 ssh2` setiap beberapa detik.",
      question: "Analisis keamanan mengenai log tersebut dan tindakan mitigasi terbaik adalah...",
      correctText: "Server sedang mengalami serangan SSH Brute Force login; mitigasinya adalah menginstal fail2ban, mengubah port default SSH, dan beralih ke autentikasi SSH Key",
      distractors: [
        "Server sedang melakukan sinkronisasi jam otomatis NTP",
        "Sistem Linux sedang mengunduh pembaruan kernel resmi",
        "Pengguna yang sah sedang lupa password laptop",
        "Kabel keyboard komputer server sedang macet"
      ],
      explanation: "Pesan failed password berulang dari IP publik luar adalah ciri serangan brute force kamus SSH. Fail2ban otomatis memblokir IP penyerang setelah beberapa kali gagal.",
      quickTip: "Ribuan failed password di auth.log = Serangan SSH Brute Force; tangkal dengan Fail2ban & SSH Key."
    },
    {
      stimulus: "Sebuah switch Cisco yang mengaktifkan Port Security pada port Fa0/5 tiba-tiba mematikan port tersebut (lampu LED menyala oranye padat) saat staf magang mencolokkan laptop pribadinya.",
      question: "Status antarmuka yang akan terlihat saat teknisi menjalankan perintah `show interface fa0/5` adalah...",
      correctText: "FastEthernet0/5 is down, line protocol is down (err-disabled)",
      distractors: [
        "FastEthernet0/5 is up, line protocol is up",
        "FastEthernet0/5 is administratively down",
        "FastEthernet0/5 is testing, line protocol is loopback",
        "FastEthernet0/5 is deleted"
      ],
      explanation: "Pelanggaran MAC pada port security mode shutdown menempatkan interface ke status `err-disabled`. Untuk memulihkannya, lakukan `shutdown` lalu `no shutdown` setelah perangkat asing dicabut.",
      quickTip: "Pelanggaran Port Security membuat interface berstatus err-disabled."
    },
    {
      stimulus: "Untuk memulihkan port switch yang berstatus `err-disabled` setelah laptop asing dicabut pada kasus di atas.",
      question: "Kombinasi perintah konfigurasi antarmuka yang harus diketikkan teknisi pada port tersebut adalah...",
      correctText: "shutdown, diikuti oleh no shutdown",
      distractors: [
        "enable, diikuti reload",
        "write erase, diikuti reboot",
        "no port-security, diikuti exit",
        "ip address dhcp, diikuti no shut"
      ],
      explanation: "Siklus perintah `shutdown` lalu `no shutdown` me-reset state mesin port dari kondisi err-disabled kembali ke kondisi operasional aktif.",
      quickTip: "Memulihkan port err-disabled: Masuk interface lalu ketik shutdown kemudian no shutdown."
    },
    {
      stimulus: "Karyawan di kantor cabang mengeluh tidak bisa mengakses internet. Teknisi menjalankan perintah `ip route` pada router cabang dan melihat tabel routing kosong tanpa rute `0.0.0.0/0`.",
      question: "Dampak dari hilangnya rute 0.0.0.0/0 pada router kantor cabang tersebut adalah...",
      correctText: "Router tidak tahu ke mana harus meneruskan paket data yang tujuannya ke internet sehingga semua paket internet di-drop seketika",
      distractors: [
        "Router akan secara cerdas menebak jalur terbaik ke internet",
        "Router akan menyiarkan paket data melalui speaker audio",
        "Seluruh komputer karyawan otomatis mati listrik",
        "Koneksi internet justru menjadi dua kali lipat lebih cepat"
      ],
      explanation: "Default route (0.0.0.0/0) adalah gerbang penampung seluruh traffic ke internet (Gateway of Last Resort). Tanpa rute ini, router langsung membuang paket.",
      quickTip: "Tanpa Default Route (0.0.0.0/0), router membuang seluruh paket yang tujuannya ke internet."
    },
    {
      stimulus: "Teknisi menguji sambungan kabel serat optik menggunakan OTDR. Hasil grafik menunjukkan nilai Insertion Loss sambungan sebesar 0.85 dB di titik fusion splice kilometer ke-2.",
      question: "Berdasarkan standar industri telekomunikasi (toleransi splice loss maksimal 0.05 dB), rekomendasi tindakan teknis yang harus diambil adalah...",
      correctText: "Sambungan tersebut cacat (tidak memenuhi standar) dan harus dipotong lalu disambung ulang menggunakan fusion splicer",
      distractors: [
        "Sambungan tersebut sangat bagus dan harus dipertahankan selamanya",
        "Menambahkan lem alteco di luar kabel untuk menurunkan redaman",
        "Mengabaikan hasil ukur karena 0.85 dB tidak berpengaruh apa-apa",
        "Mengganti seluruh kabel sepanjang 2 kilometer"
      ],
      explanation: "Nilai loss 0.85 dB pada fusion splice sangat buruk (standar < 0.05 dB), biasanya disebabkan kaca kotor, sudut cleave miring, atau misalignment.",
      quickTip: "Splice loss 0.85 dB melanggar standar (>0.05 dB); wajib dipotong dan disambung ulang."
    },
    {
      stimulus: "Pada pengetesan jaringan Wi-Fi menggunakan aplikasi Wi-Fi Analyzer di ponsel, terdeteksi ada 8 Access Point tetangga yang seluruhnya menggunakan pita 2.4 GHz pada Kanal 6.",
      question: "Tindakan optimasi pengaturan radio yang paling tepat diambil administrator jaringan sekolah untuk Access Point-nya adalah...",
      correctText: "Memindahkan kanal operasional AP sekolah ke Kanal 1 atau Kanal 11 yang bersih dari tumpang tindih",
      distractors: [
        "Ikut menyetel AP sekolah pada Kanal 6 agar kompak dengan tetangga",
        "Menyetel AP sekolah pada Kanal 5 atau Kanal 7",
        "Mematikan password keamanan Wi-Fi sekolah",
        "Membeli antena radio pemancar FM komersial"
      ],
      explanation: "Menghindari Kanal 6 yang padat dan berpindah ke kanal non-overlapping lain yang bersih (Kanal 1 atau 11) akan melipatgandakan throughput dan mengeliminasi Co-Channel Interference.",
      quickTip: "Kanal 6 padat: Pindahkan AP ke Kanal 1 atau Kanal 11 yang lebih bersih."
    },
    {
      stimulus: "Sebuah server web Apache di Linux gagal start saat dijalankan dengan perintah `systemctl start apache2`. Di terminal muncul pesan: `Job for apache2.service failed because the control process exited with error code. See 'systemctl status apache2.service' and 'journalctl -xeu apache2.service' for details`.",
      question: "Perintah diagnosa cepat khusus sintaks konfigurasi Apache yang dapat langsung menunjukkan baris file konfigurasi yang salah ketik (syntax error) adalah...",
      correctText: "apache2ctl configtest (atau apachectl -t)",
      distractors: [
        "rm -rf /etc/apache2",
        "ping apache2",
        "chmod 777 /var/log",
        "cat /etc/passwd"
      ],
      explanation: "`apache2ctl configtest` (atau `apachectl -t`) memeriksa seluruh file konfigurasi Apache dan melaporkan baris persis di mana terjadi kesalahan sintaks.",
      quickTip: "Uji sintaks konfigurasi Apache = apache2ctl configtest."
    },
    {
      stimulus: "Komputer klien Windows tidak dapat mengakses internet. Saat teknisi memeriksa dengan perintah `ipconfig`, IP yang tertera adalah `169.254.45.10` dengan subnet mask `255.255.0.0` dan Default Gateway kosong.",
      question: "Berdasarkan alamat IP tersebut, akar permasalahan konektivitas yang dialami komputer klien adalah...",
      correctText: "Komputer gagal berkomunikasi dengan DHCP Server (mendapatkan alamat darurat APIPA)",
      distractors: [
        "Komputer berhasil mendapatkan IP publik super cepat dari ISP",
        "Kabel serat optik di motherboard komputer mengalami kebocoran laser",
        "Kartu grafis VGA komputer mengalami kehabisan memori",
        "Sistem operasi Windows sedang terkunci oleh ransomware"
      ],
      explanation: "Alamat 169.254.x.x adalah APIPA (Automatic Private IP Addressing) yang diberikan Windows saat permintaan DHCP Discover tidak mendapat respon dari DHCP Server.",
      quickTip: "IP 169.254.x.x (APIPA) = Komputer gagal terhubung ke DHCP Server."
    },
    {
      stimulus: "Teknisi ingin memeriksa tabel pemetaan alamat IP ke MAC Address yang sedang aktif disimpan di memori komputer Windows untuk mendeteksi potensi duplikasi IP.",
      question: "Perintah Command Prompt (CMD) yang digunakan untuk melihat tabel ARP cache lokal tersebut adalah...",
      correctText: "arp -a",
      distractors: [
        "ipconfig /all",
        "netstat -r",
        "route print",
        "nslookup local"
      ],
      explanation: "Perintah `arp -a` menampilkan seluruh entri tabel ARP (pemetaan IP address ke MAC address fisik) yang sedang tersimpan di cache komputer.",
      quickTip: "Melihat tabel ARP di komputer = arp -a."
    }
  ],
  mcma: [
    {
      stimulus: "Analisis paket dan troubleshooting menggunakan Wireshark.",
      question: "Manakah gejala gangguan jaringan yang DAPAT DITUNJUKKAN melalui analisis paket Wireshark? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Tingginya persentase TCP Retransmission yang menandakan adanya packet loss pada link jaringan", isCorrect: true },
        { text: "Banyaknya paket broadcast ARP Request berulang tanpa adanya jawaban ARP Reply (host mati/salah IP)", isCorrect: true },
        { text: "Adanya banjir frame broadcast secara simultan yang mengindikasikan Switching Loop (Broadcast Storm)", isCorrect: true },
        { text: "Kabel tembaga di dalam dinding kekurangan tegangan oli pelumas", isCorrect: false },
        { text: "Suhu udara ruangan server terlalu dingin di bawah standar", isCorrect: false }
      ],
      explanation: "Wireshark mendeteksi retransmisi paket (loss), kegagalan ARP (host mati), dan badai broadcast (switching loop). Wireshark tidak mengukur oli atau suhu fisik ruangan.",
      quickTip: "Wireshark mendeteksi: TCP Retransmission (packet loss), kegagalan ARP, dan badai broadcast loop."
    },
    {
      stimulus: "Troubleshooting kegagalan resolusi nama Domain Name System (DNS).",
      question: "Manakah langkah diagnosa dan perbaikan yang TEPAT saat komputer tidak bisa membuka situs web via nama domain? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Melakukan pengujian resolusi nama domain menggunakan utilitas `nslookup <nama_domain>`", isCorrect: true },
        { text: "Memeriksa konfigurasi DNS Server di kartu jaringan atau mengganti DNS ke resolver publik (8.8.8.8 / 1.1.1.1)", isCorrect: true },
        { text: "Menghapus seluruh file sistem di direktori C:\\Windows\\System32", isCorrect: false },
        { text: "Mengganti monitor komputer dengan layar proyektor bioskop", isCorrect: false },
        { text: "Mematikan sambungan kabel LAN dari komputer", isCorrect: false }
      ],
      explanation: "Diagnosa DNS dilakukan dengan `nslookup` dan memeriksa atau mengganti IP DNS server pada pengaturan TCP/IP.",
      quickTip: "Troubleshooting DNS: Gunakan nslookup dan cek/ganti IP resolver DNS."
    },
    {
      stimulus: "Penanganan insiden keamanan jaringan dan serangan Denial of Service (DoS).",
      question: "Manakah tindakan teknis yang EFEKTIF untuk meredam serangan banjir traffic (Flooding Attack) pada router? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menerapkan aturan Rate Limiting pada firewall untuk membatasi jumlah koneksi baru per detik", isCorrect: true },
        { text: "Mengaktifkan fitur SYN Cookies untuk menangkal serangan TCP SYN Flood", isCorrect: true },
        { text: "Memblokir (Drop/Blackhole) alamat IP sumber penyerang yang teridentifikasi di firewall filter", isCorrect: true },
        { text: "Menonaktifkan seluruh sistem pengamanan firewall router", isCorrect: false },
        { text: "Membagikan akun username dan password router ke forum terbuka", isCorrect: false }
      ],
      explanation: "Mitigasi DoS/DDoS pada router: Rate limiting, SYN cookies, dan pemblokiran IP penyerang di firewall filter.",
      quickTip: "Meredam DoS: Rate limiting, SYN cookies, dan blokir IP penyerang di firewall."
    },
    {
      stimulus: "Troubleshooting kecepatan tautan kabel tembaga (Gigabit turun ke Fast Ethernet).",
      question: "Manakah faktor yang MENYEBABKAN koneksi kabel LAN Cat6 turun otomatis dari 1 Gbps menjadi 100 Mbps? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Terjadi masalah kontak elektrik (longgar atau putus) pada salah satu kawat pin 4, 5, 7, atau 8 pada konektor RJ-45", isCorrect: true },
        { text: "Port switch atau kartu jaringan diatur secara manual (hard-coded) pada mode 100 Mbps Full Duplex", isCorrect: true },
        { text: "Kabel LAN dicolokkan ke stopkontak listrik PLN 220 Volt", isCorrect: false },
        { text: "Kabel UTP ditarik di dalam pipa konduit PVC tertutup", isCorrect: false },
        { text: "Warna jaket pelindung kabel UTP berwarna abu-abu", isCorrect: false }
      ],
      explanation: "Gigabit butuh seluruh 8 pin sehat. Jika pin 4,5,7,8 longgar/putus, atau auto-negotiation dimatikan ke 100 Mbps, link akan turun ke 100 Mbps.",
      quickTip: "Link turun ke 100 Mbps: Kontak pin 4,5,7,8 buruk atau pengaturan port dipaksa 100 Mbps."
    },
    {
      stimulus: "Pengoperasian dan pemeriksaan kesehatan layanan di Linux Server.",
      question: "Manakah perintah Linux CLI yang DIGUNAKAN untuk memeriksa status dan port layanan jaringan? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "`systemctl status <service>` untuk memeriksa apakah layanan sedang aktif (active/running) atau mati", isCorrect: true },
        { text: "`ss -tulnp` untuk memeriksa daftar nomor port yang sedang aktif mendengarkan koneksi (Listening Ports)", isCorrect: true },
        { text: "`rm -rf *` untuk menghitung jumlah port jaringan yang terbuka", isCorrect: false },
        { text: "`shutdown -h now` untuk mempercepat pemrosesan data paket", isCorrect: false },
        { text: "`cat /dev/null` untuk menambah kapasitas bandwidth internet provider", isCorrect: false }
      ],
      explanation: "`systemctl status` memeriksa hidup/matinya service, dan `ss -tulnp` memeriksa port listening dan PID program terkait.",
      quickTip: "Pemeriksaan layanan Linux: `systemctl status` dan `ss -tulnp` (cek port)."
    }
  ],
  tf: [
    {
      stimulus: "Perbedaan respon pengujian ping: Unreachable vs Timed Out.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pengujian ping!",
      statements: [
        { text: "'Destination host unreachable' menandakan router pengirim/perantara tidak menemukan jalur rute ke alamat tujuan.", correct: "B" },
        { text: "'Request timed out' menandakan paket terkirim keluar namun tidak ada paket balasan yang diterima kembali dalam batas waktu.", correct: "B" },
        { text: "'Request timed out' membuktikan bahwa seluruh jaringan internet dunia sedang kiamat.", correct: "S" }
      ],
      explanation: "RTO sering kali hanya karena firewall memblokir ICMP atau host tujuan sibuk/putus lokal, bukan kiamat internet global.",
      quickTip: "Unreachable = Rute tidak ada; Timed Out = Tidak ada balasan dalam batas waktu."
    },
    {
      stimulus: "Mekanisme terjadinya konflik IP address di jaringan lokal.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai IP Conflict!",
      statements: [
        { text: "IP Conflict terjadi jika dua perangkat di jaringan lokal yang sama dikonfigurasi dengan alamat IP yang identik.", correct: "B" },
        { text: "Membuat DHCP Reservation pada server DHCP dapat mencegah terjadinya konflik IP pada perangkat penting.", correct: "B" },
        { text: "Dua komputer dengan IP yang sama persis dapat browsing internet bersamaan dengan kecepatan dua kali lipat.", correct: "S" }
      ],
      explanation: "Konflik IP menyebabkan koneksi kedua komputer macet/terputus-putus akibat tabrakan tabel ARP di switch dan router.",
      quickTip: "Konflik IP menyebabkan koneksi macet; cegah dengan DHCP Reservation."
    },
    {
      stimulus: "Analisis log keamanan pada sistem operasi Linux Server.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang log keamanan Linux!",
      statements: [
        { text: "Berkas `/var/log/auth.log` mencatat riwayat upaya autentikasi login pengguna di sistem Linux.", correct: "B" },
        { text: "Banyaknya kegagalan login SSH dari alamat IP asing mengindikasikan adanya serangan brute force password.", correct: "B" },
        { text: "Sistem Linux akan meledak jika ada pengguna yang salah mengetikkan password 3 kali.", correct: "S" }
      ],
      explanation: "Linux hanya mencatat kegagalan di auth.log dan menolak login; alat seperti fail2ban dapat dikonfigurasikan untuk memblokir IP tersebut.",
      quickTip: "auth.log merekam upaya login; serangan brute force ditandai ribuan failed login."
    },
    {
      stimulus: "Karakteristik status port switch 'err-disabled'.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang status err-disabled!",
      statements: [
        { text: "Port switch berstatus 'err-disabled' menandakan port dinonaktifkan otomatis oleh fitur keamanan seperti Port Security.", correct: "B" },
        { text: "Untuk mengaktifkan kembali port err-disabled, teknisi dapat mengetikkan perintah `shutdown` lalu `no shutdown`.", correct: "B" },
        { text: "Port berstatus err-disabled dapat diperbaiki dengan cara memukul switch menggunakan palu besi.", correct: "S" }
      ],
      explanation: "Memukul switch akan merusak perangkat keras; pemulihan err-disabled dilakukan melalui perintah CLI `shutdown` lalu `no shutdown`.",
      quickTip: "Pulihkan err-disabled via CLI: shutdown lalu no shutdown."
    },
    {
      stimulus: "Penyebab alamat IP darurat APIPA (169.254.x.x).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang alamat APIPA!",
      statements: [
        { text: "Komputer Windows otomatis mengalokasikan alamat APIPA 169.254.x.x jika gagal berkomunikasi dengan DHCP Server.", correct: "B" },
        { text: "Komputer dengan alamat IP APIPA tidak memiliki Default Gateway sehingga tidak dapat mengakses internet.", correct: "B" },
        { text: "Alamat APIPA 169.254.x.x adalah alamat IP publik berkecepatan tinggi yang diberikan gratis oleh Google.", correct: "S" }
      ],
      explanation: "APIPA adalah alamat link-local darurat otomatis komputer Windows saat DHCP gagal, bukan IP publik dari Google.",
      quickTip: "APIPA 169.254.x.x adalah alamat darurat kegagalan DHCP tanpa akses gateway internet."
    }
  ]
};

const s30 = {
  sessionId: "s30",
  pg: [
    {
      stimulus: "Sebuah perusahaan penyedia infrastruktur telekomunikasi skala nasional membuka rekrutmen untuk posisi yang bertugas merancang topologi jaringan FTTH, menghitung optical link budget, dan memetakan penempatan ODC/ODP.",
      question: "Profesi di bidang TJKT yang paling tepat untuk menjalankan tanggung jawab teknis tersebut adalah...",
      correctText: "Fiber Optic Network Planner",
      distractors: [
        "Database Administrator",
        "Frontend Web Developer",
        "Staff Entri Data Pergudangan",
        "Graphic Animator 3D"
      ],
      explanation: "Network Planner merancang rute kabel, menghitung redaman link budget, dan menentukan letak splitter ODC/ODP dalam perencanaan jaringan FTTH.",
      quickTip: "Merancang rute, link budget, dan posisi ODC/ODP = Network Planner."
    },
    {
      stimulus: "Pada penanganan insiden kabel udara putus di jalan raya, tim teknisi di lapangan wajib menerapkan prosedur K3 umum dan K3 ketinggian.",
      question: "Tindakan pertama yang WAJIB dilakukan sebelum teknisi menaiki tangga isolator di pinggir jalan raya adalah...",
      correctText: "Memasang rambu keselamatan kerja, safety cone pengaman lalu lintas, dan memeriksa APD (Full Body Harness & Helm)",
      distractors: [
        "Langsung memanjat tiang tanpa memasang rambu pengaman jalan",
        "Menelepon seluruh pelanggan untuk meminta uang kompensasi",
        "Menyalakan rokok di samping tangki bensin mobil operasional",
        "Mematikan seluruh lampu penerangan jalan raya kota"
      ],
      explanation: "SOP K3 mengharuskan barikade zona kerja (safety cone/rambu jalan) dan inspeksi APD sebelum pekerjaan dimulai guna melindungi pekerja dan pengguna jalan.",
      quickTip: "SOP K3 awal: Pasang safety cone, barikade zona kerja, dan periksa APD."
    },
    {
      stimulus: "Standar pengkabelan TIA/EIA 568B digunakan secara luas untuk terminasi kabel UTP RJ-45.",
      question: "Urutan warna kawat kabel pada pin 1 sampai pin 8 menurut standar TIA/EIA 568B adalah...",
      correctText: "Putih Oranye, Oranye, Putih Hijau, Biru, Putih Biru, Hijau, Putih Cokelat, Cokelat",
      distractors: [
        "Putih Hijau, Hijau, Putih Oranye, Biru, Putih Biru, Oranye, Putih Cokelat, Cokelat",
        "Putih Biru, Biru, Putih Oranye, Hijau, Putih Hijau, Oranye, Putih Cokelat, Cokelat",
        "Oranye, Putih Oranye, Hijau, Putih Hijau, Biru, Putih Biru, Cokelat, Putih Cokelat",
        "Putih Cokelat, Cokelat, Putih Hijau, Hijau, Putih Oranye, Oranye, Putih Biru, Biru"
      ],
      explanation: "568B: Pin 1-2 (Putih Oranye-Oranye), Pin 3 (Putih Hijau), Pin 4-5 (Biru-Putih Biru), Pin 6 (Hijau), Pin 7-8 (Putih Cokelat-Cokelat).",
      quickTip: "568B: Pasangan Oranye di awal (Putih Oranye, Oranye) dan Hijau terbelah oleh Biru."
    },
    {
      stimulus: "Perambatan gelombang cahaya di dalam inti kaca serat optik tanpa bocor keluar didasari oleh prinsip fisika optik.",
      question: "Prinsip dasar yang memungkinkan cahaya merambat sepanjang puluhan kilometer di dalam core serat optik adalah...",
      correctText: "Pemantulan Internal Total (Total Internal Reflection) karena indeks bias core lebih besar dari cladding",
      distractors: [
        "Induksi Medan Elektromagnetik Kawat Faraday",
        "Difraksi Celah Sempit Fresnel",
        "Polarisasi Sinar X-Ray Ruang Hampa",
        "Efek Fotolistrik Logam Silika"
      ],
      explanation: "Total Internal Reflection terjadi jika cahaya merambat dari medium lebih rapat (core n1) ke medium kurang rapat (cladding n2) dengan sudut datang melebihi sudut kritis.",
      quickTip: "Cahaya merambat di dalam fiber optik karena Pemantulan Internal Total (Core n1 > Cladding n2)."
    },
    {
      stimulus: "Kabel serat optik Single-Mode Fiber (SMF) dan Multi-Mode Fiber (MMF) memiliki karakteristik fisik yang berbeda.",
      question: "Ukuran diameter inti (core) dan warna jaket standar pada kabel patch cord Single-Mode Fiber adalah...",
      correctText: "Core berdiameter 9 mikron (µm) dengan jaket pelindung berwarna Kuning",
      distractors: [
        "Core berdiameter 50 mikron (µm) dengan jaket berwarna Aqua",
        "Core berdiameter 62.5 mikron (µm) dengan jaket berwarna Oranye",
        "Core berdiameter 125 mikron (µm) dengan jaket berwarna Hitam",
        "Core berdiameter 250 mikron (µm) dengan jaket berwarna Merah"
      ],
      explanation: "Single-Mode memiliki core kecil ~9 µm (cladding 125 µm, notasi 9/125) dengan jaket warna kuning standar industri.",
      quickTip: "Single-Mode Fiber (SMF) = Core 9 µm, Jaket Kuning."
    },
    {
      stimulus: "Konektor serat optik tipe SC/APC memiliki permukaan ferrule yang dipoles miring dengan sudut kemiringan 8 derajat.",
      question: "Warna standar bodi konektor APC dan keunggulan utamanya dibanding konektor UPC (biru) adalah...",
      correctText: "Warna Hijau, dengan keunggulan Optical Return Loss sangat tinggi (pantulan balik minimal > 60 dB)",
      distractors: [
        "Warna Biru, dengan keunggulan harga jauh lebih murah",
        "Warna Kuning, dengan keunggulan tahan api 1000 derajat",
        "Warna Hitam, dengan keunggulan tidak membutuhkan perawatan",
        "Warna Oranye, dengan keunggulan bisa dipakai untuk kabel tembaga"
      ],
      explanation: "Konektor APC selalu berwarna hijau, ferrule miring 8 derajat menghasilkan return loss luar biasa (>60 dB) yang sangat ideal untuk sinyal RF video/GPON.",
      quickTip: "Konektor APC = Warna Hijau, ferrule miring 8 derajat, Return Loss > 60 dB."
    },
    {
      stimulus: "Pada pita frekuensi Wi-Fi 2.4 GHz, lebar kanal standar adalah 20 MHz dengan jarak pemisah tertentu.",
      question: "Tiga saluran (channel) yang tidak saling tumpang tindih (non-overlapping channels) pada pita 2.4 GHz adalah...",
      correctText: "Kanal 1, Kanal 6, dan Kanal 11",
      distractors: [
        "Kanal 1, Kanal 2, dan Kanal 3",
        "Kanal 2, Kanal 4, dan Kanal 6",
        "Kanal 3, Kanal 6, dan Kanal 9",
        "Kanal 5, Kanal 10, dan Kanal 15"
      ],
      explanation: "Hanya kanal 1, 6, dan 11 yang memiliki jarak pemisah spektral 25 MHz sehingga tidak saling menginterferensi pada pita 2.4 GHz.",
      quickTip: "Tiga kanal 2.4 GHz bebas tumpang tindih = Kanal 1, 6, dan 11."
    },
    {
      stimulus: "Sistem komunikasi satelit geostasioner (GEO) menempatkan satelit pada ketinggian sekitar 36.000 km di atas garis khatulistiwa bumi.",
      question: "Dampak inheren dari jarak tempuh sinyal bumi-satelit bolak-balik pada internet satelit GEO adalah...",
      correctText: "Latensi waktu tempuh bolak-balik (Round Trip Time / RTT) yang relatif tinggi sekitar 500 sampai 700 milidetik",
      distractors: [
        "Latensi super rendah di bawah 1 milidetik",
        "Sinyal internet hanya bisa menyala di siang hari",
        "Kabel serat optik di bumi harus diputus seluruhnya",
        "Kecepatan transfer data dibatasi maksimal 1 bit per jam"
      ],
      explanation: "Jarak tempuh bolak-balik ~144.000 km dengan kecepatan cahaya menghasilkan delay propagasi teoritis minimal ~500 ms RTT pada satelit GEO.",
      quickTip: "Satelit GEO memiliki latensi tinggi sekitar 500-700 ms RTT."
    },
    {
      stimulus: "Rumus matematis untuk menghitung jumlah tautan link fisik kabel langsung pada topologi jaringan Full Mesh dengan n unit router adalah...",
      question: "Rumus perhitungan kabel Full Mesh tersebut adalah...",
      correctText: "n * (n - 1) / 2",
      distractors: [
        "n * 2",
        "n * (n + 1)",
        "n kuadrat (n^2)",
        "2 pangkat n (2^n)"
      ],
      explanation: "Topologi Full Mesh menghubungkan tiap simpul ke seluruh simpul lainnya dengan rumus N(N-1)/2.",
      quickTip: "Rumus kabel Full Mesh = n * (n - 1) / 2."
    },
    {
      stimulus: "Sebuah bank ingin menghubungkan 6 kantor cabang utama secara Full Mesh langsung antar-router.",
      question: "Berapa banyak tautan link fisik yang harus disediakan penyedia jaringan?",
      correctText: "15 link (berasal dari 6 * 5 / 2)",
      distractors: [
        "6 link",
        "12 link",
        "30 link",
        "36 link"
      ],
      explanation: "Menggunakan rumus: 6 * (6 - 1) / 2 = 6 * 5 / 2 = 15 link kabel.",
      quickTip: "6 router Full Mesh = 6 * 5 / 2 = 15 link."
    },
    {
      stimulus: "Diberikan alamat IP: 172.16.10.100 dengan subnet mask 255.255.255.224 (/27).",
      question: "Berapakah alamat Network ID dari subnet tempat alamat IP tersebut berada?",
      correctText: "172.16.10.96",
      distractors: [
        "172.16.10.0",
        "172.16.10.64",
        "172.16.10.128",
        "172.16.10.90"
      ],
      explanation: "Magic number /27 = 256 - 224 = 32. Kelipatan blok subnet: 0, 32, 64, 96, 128... Angka 100 berada di antara 96 dan 127. Maka Network ID = 172.16.10.96.",
      quickTip: "Magic number /27 adalah 32. Blok: 0, 32, 64, 96. Angka 100 masuk blok 172.16.10.96."
    },
    {
      stimulus: "Melanjutkan analisis pada subnet 172.16.10.96/27.",
      question: "Berapakah alamat Broadcast ID dari blok subnet tersebut?",
      correctText: "172.16.10.127",
      distractors: [
        "172.16.10.126",
        "172.16.10.128",
        "172.16.10.255",
        "172.16.10.100"
      ],
      explanation: "Subnet berikutnya dimulai pada 172.16.10.128. Maka alamat broadcast subnet sebelumnya adalah 128 - 1 = 172.16.10.127.",
      quickTip: "Broadcast ID adalah angka sebelum blok berikutnya: 128 - 1 = 127."
    },
    {
      stimulus: "Pada subnet 172.16.10.96/27, rentang host usable yang dapat dipasang pada komputer adalah...",
      question: "Rentang alamat host yang sah untuk subnet tersebut adalah...",
      correctText: "172.16.10.97 sampai 172.16.10.126 (total 30 usable host)",
      distractors: [
        "172.16.10.96 sampai 172.16.10.127",
        "172.16.10.1 sampai 172.16.10.30",
        "172.16.10.98 sampai 172.16.10.128",
        "172.16.10.0 sampai 172.16.10.254"
      ],
      explanation: "Rentang usable host: Network ID + 1 (97) hingga Broadcast ID - 1 (126). Total 30 host.",
      quickTip: "Rentang usable: Network+1 s.d. Broadcast-1 = 97 s.d. 126."
    },
    {
      stimulus: "Penulisan penyingkatan alamat IPv6 resmi menurut standar RFC 5952 untuk alamat: `2001:0db8:0000:0000:0000:0000:0000:0001`.",
      question: "Bentuk penyingkatan yang paling benar adalah...",
      correctText: "2001:db8::1",
      distractors: [
        "2001:db8:0:0:0:0:0:1",
        "2001:0db8::1",
        "2001::db8::1",
        "2001:db8::0001"
      ],
      explanation: "Hapus leading zero '0db8' -> 'db8'. Kompresi rangkaian nol '0000:...:0000' -> '::'. Hapus leading zero '0001' -> '1'. Hasil: 2001:db8::1.",
      quickTip: "2001:0db8:0000:0000:0000:0000:0000:0001 disingkat menjadi 2001:db8::1."
    },
    {
      stimulus: "Tumpukan protokol TCP/IP membagi fungsi jaringan ke dalam 4 lapisan terstruktur.",
      question: "Urutan 4 lapisan model TCP/IP dari lapisan paling bawah ke paling atas adalah...",
      correctText: "Network Access, Internet, Transport, Application",
      distractors: [
        "Physical, Data Link, Network, Application",
        "Application, Transport, Internet, Network Access",
        "Hardware, Software, Interface, Network",
        "Link, Routing, Session, Presentation"
      ],
      explanation: "Model 4-Layer TCP/IP: Network Access Layer (Layer 1/2), Internet Layer (Layer 3), Transport Layer (Layer 4), dan Application Layer (Layer 5/6/7).",
      quickTip: "4 Layer TCP/IP: Network Access, Internet, Transport, Application."
    },
    {
      stimulus: "Pada switch terkelola, port yang dihubungkan ke komputer pengguna hanya membawa 1 VLAN tanpa tag (untagged frame).",
      question: "Tipe mode antarmuka port switch tersebut adalah...",
      correctText: "Mode Access (Access Port)",
      distractors: [
        "Mode Trunk",
        "Mode Console",
        "Mode Mirror",
        "Mode Stack"
      ],
      explanation: "Access Port ditujukan untuk perangkat akhir pengguna (PC/printer), hanya membawa 1 VLAN dalam bentuk untagged frame.",
      quickTip: "Port switch ke komputer pengguna = Port Mode Access."
    },
    {
      stimulus: "Nilai default Administrative Distance (AD) untuk rute statis (Static Route) pada router Cisco adalah...",
      question: "Berapakah nilai AD rute statis tersebut?",
      correctText: "1",
      distractors: [
        "0 (Directly Connected)",
        "90 (EIGRP)",
        "110 (OSPF)",
        "120 (RIP)"
      ],
      explanation: "Static route memiliki nilai AD default sebesar 1, sangat dipercaya di atas protokol routing dinamis.",
      quickTip: "Administrative Distance rute statis = 1."
    },
    {
      stimulus: "Pada sistem operasi Linux Debian/Ubuntu Server, direktori document root default tempat meletakkan file web HTML/PHP Apache adalah...",
      question: "Lokasi direktori web server default tersebut adalah...",
      correctText: "/var/www/html/",
      distractors: [
        "/etc/apache2/",
        "/home/desktop/",
        "/usr/bin/web/",
        "/root/public/"
      ],
      explanation: "Document root default Apache web server di Debian/Ubuntu terletak di `/var/www/html/`.",
      quickTip: "Folder web root default Apache Linux = /var/www/html/."
    },
    {
      stimulus: "Alat pengujian serat optik yang memancarkan sinar laser merah tampak pada panjang gelombang 650 nm untuk melacak kontinuitas core dan mendeteksi tekukan tajam/retak adalah...",
      question: "Nama instrumen laser merah tersebut adalah...",
      correctText: "Visual Fault Locator (VFL)",
      distractors: [
        "Optical Power Meter (OPM)",
        "Optical Light Source (OLS)",
        "Fiber Cleaver",
        "Wiremap LAN Tester"
      ],
      explanation: "Visual Fault Locator (VFL) menggunakan laser merah tampak 650 nm untuk inspeksi visual patahan dan macrobending serat kaca.",
      quickTip: "Laser merah tampak pelacak patahan serat = Visual Fault Locator (VFL)."
    },
    {
      stimulus: "Pada kurva grafik pengujian OTDR, terdapat lonjakan spike tajam ke atas yang diikuti penurunan garis kontinu.",
      question: "Jenis kejadian (event) pada jalur serat optik yang ditunjukkan oleh spike tajam tersebut adalah...",
      correctText: "Reflective Event (seperti Konektor Mekanik SC/LC atau sambungan mekanik)",
      distractors: [
        "Non-Reflective Event (Sambungan Fusion Splice)",
        "Atenuasi Alami Kaca Serat Optik",
        "Kabel Listrik Hubung Singkat",
        "Ujung Kabel Tembaga Terbuka"
      ],
      explanation: "Reflective event dihasilkan oleh pantulan Fresnel pada sambungan konektor mekanik berhadapan, terlihat sebagai spike ke atas pada kurva OTDR.",
      quickTip: "Lonjakan spike pada kurva OTDR = Reflective Event (Konektor Mekanik)."
    }
  ],
  mcma: [
    {
      stimulus: "Integrasi kompetensi media transmisi dan standarisasi kabel.",
      question: "Manakah pernyataan yang BENAR mengenai media transmisi jaringan? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Standar TIA/EIA 568B diawali dengan kawat Putih Oranye dan Oranye pada pin 1 dan 2", isCorrect: true },
        { text: "Kabel Single-Mode Fiber memiliki jaket warna kuning dan diameter core sekitar 9 mikron", isCorrect: true },
        { text: "Konektor tipe SC/APC ditandai dengan bodi berwarna hijau dan sudut kemiringan 8 derajat", isCorrect: true },
        { text: "Kabel UTP Cat6 dapat digunakan menghubungkan antar-benua sejauh 5.000 km tanpa repeater", isCorrect: false },
        { text: "Kabel serat optik menghantarkan arus listrik 220V untuk menyalakan monitor", isCorrect: false }
      ],
      explanation: "568B diawali putih oranye/oranye, SMF core 9µm berjaket kuning, SC/APC berwarna hijau miring 8°. UTP dibatasi 100m dan fiber optik tidak menghantarkan listrik.",
      quickTip: "568B (Putih Oranye/Oranye), SMF (9µm/Kuning), SC/APC (Hijau/8 derajat)."
    },
    {
      stimulus: "Pengoperasian perangkat switch, VLAN, dan routing Layer 3.",
      question: "Manakah konsep jaringan yang BENAR mengenai arsitektur LAN? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "VLAN membagi broadcast domain fisik menjadi beberapa broadcast domain logis", isCorrect: true },
        { text: "Port Mode Trunk membawa banyak VLAN menggunakan penandaan tag IEEE 802.1Q", isCorrect: true },
        { text: "Komunikasi antar-VLAN yang berbeda memerlukan perangkat Layer 3 (Router atau Switch L3)", isCorrect: true },
        { text: "Port Mode Access wajib digunakan untuk menghubungkan dua switch core backbone", isCorrect: false },
        { text: "VLAN ID valid berkisar antara angka 10.000 hingga 99.000", isCorrect: false }
      ],
      explanation: "VLAN memecah broadcast domain, trunk membawa multi-VLAN tagged 802.1Q, inter-VLAN butuh Layer 3. Range VID hanya 1-4094.",
      quickTip: "VLAN memecah broadcast domain; Trunk membawa tagged multi-VLAN; Inter-VLAN butuh L3."
    },
    {
      stimulus: "Pengalamatan IPv4 dan perhitungan subnetting berbasis CIDR.",
      question: "Manakah parameter subnetting yang BENAR untuk subnet 192.168.10.64/26? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Subnet mask desimalnya adalah 255.255.255.192", isCorrect: true },
        { text: "Alamat Broadcast ID subnet tersebut adalah 192.168.10.127", isCorrect: true },
        { text: "Alamat 192.168.10.127 boleh dipasang pada komputer siswa", isCorrect: false },
        { text: "Subnet tersebut menyediakan 254 host usable", isCorrect: false },
        { text: "Network ID subnet tersebut adalah 192.168.10.0", isCorrect: false }
      ],
      explanation: "/26 = 255.255.255.192. Blok .64 s.d. .127: Network .64, Broadcast .127, Usable .65 s.d. .126 (62 host).",
      quickTip: "192.168.10.64/26: Mask=255.255.255.192, Broadcast=192.168.10.127 (62 host)."
    },
    {
      stimulus: "Pengoperasian instrumen ukur optik dan standar mutu sambungan.",
      question: "Manakah parameter pengukuran optik yang SESUAI dengan standar industri telekomunikasi? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Daya terima normal pada modem ONT pelanggan GPON berada di rentang -15 dBm sampai -24 dBm", isCorrect: true },
        { text: "Batas toleransi maksimal redaman sebuah sambungan fusion splice yang baik adalah di bawah 0.05 dB", isCorrect: true },
        { text: "Daya terima -35 dBm pada ONT menandakan sinyal sangat sempurna tanpa redaman", isCorrect: false },
        { text: "Optical Splitter 1:8 memiliki redaman rata-rata tepat 0 dB tanpa rugi daya", isCorrect: false },
        { text: "Nilai redaman sambungan fusion splice normal adalah 25 dB per sambungan", isCorrect: false }
      ],
      explanation: "Rx Power ONT normal: -15 s.d. -24 dBm. Redaman fusion splice standar: < 0.05 dB (rata-rata 0.02 dB).",
      quickTip: "Standar optik: Rx ONT normal (-15 s.d. -24 dBm); Splice loss prima (<0.05 dB)."
    },
    {
      stimulus: "Administrasi sistem operasi Linux Server dan izin akses berkas.",
      question: "Manakah perintah administrasi Linux yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "`chmod 755 <berkas>` memberikan izin rwxr-xr-x (Owner 7, Group 5, Others 5)", isCorrect: true },
        { text: "`systemctl restart <layanan>` mematikan lalu menyalakan kembali layanan server", isCorrect: true },
        { text: "`ip a` menampilkan daftar konfigurasi antarmuka dan alamat IP di Linux modern", isCorrect: true },
        { text: "`chown` digunakan untuk mengubah panjang kabel LAN secara otomatis", isCorrect: false },
        { text: "`nano` adalah program untuk menghapus partisi hard disk secara paksa", isCorrect: false }
      ],
      explanation: "chmod 755 (rwxr-xr-x), systemctl restart (me-refresh service), ip a (cek konfigurasi IP antarmuka).",
      quickTip: "Perintah esensial Linux: chmod 755, systemctl restart, dan ip a."
    }
  ],
  tf: [
    {
      stimulus: "Prinsip pemisahan domain pada switch dan router.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai domain jaringan!",
      statements: [
        { text: "Setiap port pada switch jaringan memisahkan collision domain.", correct: "B" },
        { text: "Router memisahkan broadcast domain sehingga frame broadcast tidak meluas ke jaringan lain.", correct: "B" },
        { text: "Hub pasif mampu memecah broadcast domain menjadi 24 subnet yang terisolasi.", correct: "S" }
      ],
      explanation: "Hub Layer 1 tidak memisahkan collision domain maupun broadcast domain sama sekali.",
      quickTip: "Switch memisahkan collision domain; Router memisahkan broadcast domain."
    },
    {
      stimulus: "Karakteristik keselamatan kerja penanganan sinar laser optik.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang K3 laser optik!",
      statements: [
        { text: "Menatap langsung ke ujung konektor serat optik yang memancarkan laser dapat merusak retina mata secara permanen.", correct: "B" },
        { text: "Pecahan kaca serat optik wajib ditampung ke dalam wadah tertutup khusus limbah tajam.", correct: "B" },
        { text: "Sinar laser serat optik telekomunikasi aman ditatap langsung dari jarak dekat tanpa pelindung mata.", correct: "S" }
      ],
      explanation: "Dilarang keras menatap ujung laser optik secara langsung karena dapat menyebabkan kebutaan permanen seketika.",
      quickTip: "Patuhi K3 laser optik: Jangan pernah menatap langsung ke ujung serat aktif!"
    },
    {
      stimulus: "Perhitungan kalkulasi alokasi subnetting IPv4.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai subnetting!",
      statements: [
        { text: "Subnet mask 255.255.255.252 (/30) menyediakan tepat 2 alamat host usable.", correct: "B" },
        { text: "Alamat Network ID dan Broadcast ID tidak boleh dipasang pada kartu jaringan komputer pengguna.", correct: "B" },
        { text: "Subnet mask /30 dapat menampung hingga 100 komputer pengguna sekaligus.", correct: "S" }
      ],
      explanation: "Prefix /30 hanya menyediakan tepat 2 usable host untuk link point-to-point.",
      quickTip: "Prefix /30 menyediakan tepat 2 host usable untuk link Point-to-Point."
    },
    {
      stimulus: "Konfigurasi port Access dan port Trunk pada switch VLAN.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang port switch!",
      statements: [
        { text: "Port Access membawa tepat 1 VLAN tanpa tag 802.1Q ke komputer pengguna.", correct: "B" },
        { text: "Port Trunk membawa banyak VLAN menggunakan penandaan tag IEEE 802.1Q antar-switch.", correct: "B" },
        { text: "Port Trunk hanya boleh digunakan untuk kabel pengisi daya ponsel USB.", correct: "S" }
      ],
      explanation: "Port Trunk adalah antarmuka jaringan data Ethernet berkecepatan tinggi antar-switch atau switch ke router.",
      quickTip: "Port Access membawa 1 VLAN untagged; Port Trunk membawa multi-VLAN tagged 802.1Q."
    },
    {
      stimulus: "Analisis grafik kurva hasil pengujian OTDR.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai kurva OTDR!",
      statements: [
        { text: "Konektor mekanik menghasilkan spike pantulan Fresnel tajam (Reflective Event).", correct: "B" },
        { text: "Sambungan fusion splice yang baik menghasilkan undakan penurunan garis tanpa spike pantulan.", correct: "B" },
        { text: "Ujung kabel yang putus ditandai dengan garis kurva yang terus menanjak naik ke atas tanpa henti.", correct: "S" }
      ],
      explanation: "Ujung kabel putus ditandai dengan spike reflektif terakhir yang langsung jatuh curam ke batas dasar noise floor.",
      quickTip: "Kurva OTDR: Spike (Konektor), Undakan turun (Splice), Jatuh ke noise floor (Ujung kabel/Putus)."
    }
  ]
};

module.exports = {
  s27,
  s28,
  s29,
  s30
};
