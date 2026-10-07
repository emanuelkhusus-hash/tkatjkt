// scripts/data_src/definitions/full_engine/dataset_builder/session_packs/pack_s08_s10.js
// Sesi 8: Standarisasi Terminasi TIA/EIA 568A, 568B & Pengujian Kabel
// Sesi 9: Konsep Dasar & Struktur Fisis Fiber Optik
// Sesi 10: Karakteristik Single-Mode (SMF) vs Multi-Mode (MMF) & Redaman Optik
// Total 3 Sesi x 30 Soal = 90 Butir Soal Unik Standar Pusmendik

const s08 = {
  sessionId: "s08",
  pg: [
    {
      stimulus: "Standar pengkabelan TIA/EIA 568B banyak digunakan di Indonesia untuk terminasi kabel UTP RJ-45.",
      question: "Urutan warna kabel pada pin 1 hingga pin 8 menurut standar TIA/EIA 568B adalah...",
      correctText: "Putih Oranye, Oranye, Putih Hijau, Biru, Putih Biru, Hijau, Putih Cokelat, Cokelat",
      distractors: [
        "Putih Hijau, Hijau, Putih Oranye, Biru, Putih Biru, Oranye, Putih Cokelat, Cokelat",
        "Putih Biru, Biru, Putih Oranye, Hijau, Putih Hijau, Oranye, Putih Cokelat, Cokelat",
        "Putih Cokelat, Cokelat, Putih Hijau, Hijau, Putih Oranye, Oranye, Putih Biru, Biru",
        "Oranye, Putih Oranye, Hijau, Putih Hijau, Biru, Putih Biru, Cokelat, Putih Cokelat"
      ],
      explanation: "Standar TIA/EIA 568B diawali dengan pasangan warna oranye: Putih Oranye (pin 1), Oranye (pin 2), Putih Hijau (pin 3), Biru (pin 4), Putih Biru (pin 5), Hijau (pin 6), Putih Cokelat (pin 7), Cokelat (pin 8).",
      quickTip: "568B: Putih Oranye - Oranye di awal, Hijau terbelah oleh Biru."
    },
    {
      stimulus: "Pada standar TIA/EIA 568A, susunan warna memiliki perbedaan pasangan warna utama dengan 568B.",
      question: "Urutan warna kabel pada pin 1 dan pin 2 menurut standar TIA/EIA 568A adalah...",
      correctText: "Putih Hijau dan Hijau",
      distractors: [
        "Putih Oranye dan Oranye",
        "Putih Biru dan Biru",
        "Putih Cokelat dan Cokelat",
        "Hijau dan Putih Hijau"
      ],
      explanation: "Standar 568A menukar posisi pasangan hijau dan oranye dari 568B. Pin 1-2 pada 568A adalah Putih Hijau dan Hijau.",
      quickTip: "568A diawali oleh pasangan Hijau (Putih Hijau, Hijau)."
    },
    {
      stimulus: "Teknisi menghubungkan sebuah komputer kerja (PC) langsung ke port access pada switch jaringan menggunakan kabel UTP.",
      question: "Tipe pengkabelan yang tepat digunakan untuk menghubungkan dua perangkat berbeda fungsi (PC ke Switch) tersebut adalah...",
      correctText: "Straight-Through Cable",
      distractors: [
        "Crossover Cable",
        "Rollover Console Cable",
        "Loopback Cable",
        "Null Modem Cable"
      ],
      explanation: "Kabel Straight-Through (kedua ujung sama, misal 568B ke 568B) digunakan untuk menghubungkan perangkat berbeda jenis seperti PC ke Switch atau Switch ke Router.",
      quickTip: "Perangkat beda layer (PC ke Switch) = Kabel Straight-Through."
    },
    {
      stimulus: "Dua switch lawas yang belum mendukung fitur otomatisasi port akan dihubungkan secara cascade satu sama lain.",
      question: "Tipe pengkabelan yang harus digunakan jika kedua ujung perangkat sejenis (Switch ke Switch) belum memiliki Auto-MDIX adalah...",
      correctText: "Crossover Cable",
      distractors: [
        "Straight-Through Cable",
        "Coaxial 50 Ohm",
        "Kabel Fiber Optik Simplex",
        "Kabel Telepon RJ-11"
      ],
      explanation: "Kabel Crossover (ujung satu 568A, ujung lain 568B) menukar pin Transmit (1,2) dan Receive (3,6) agar dua perangkat sejenis dapat berkomunikasi.",
      quickTip: "Perangkat sejenis tanpa Auto-MDIX = Kabel Crossover."
    },
    {
      stimulus: "Port switch modern masa kini dapat otomatis mendeteksi apakah kabel yang dicolokkan bertipe Straight-Through atau Crossover.",
      question: "Nama fitur kecerdasan antarmuka port jaringan yang menangani penyesuaian otomatis polaritas pin TX/RX tersebut adalah...",
      correctText: "Auto-MDIX (Automatic Medium-Dependent Interface Crossover)",
      distractors: [
        "Auto-Negotiation Speed 100/1000",
        "Power over Ethernet (PoE)",
        "Spanning Tree Protocol (STP)",
        "Quality of Service (QoS)"
      ],
      explanation: "Auto-MDIX secara otomatis mendeteksi pasangan kabel transmit dan receive serta membalik fungsi pin internal switch jika diperlukan.",
      quickTip: "Deteksi otomatis tipe kabel Straight/Cross = Auto-MDIX."
    },
    {
      stimulus: "Saat memasang konektor RJ-45, seorang teknisi mengurai lilitan kawat tembaga terlalu panjang (lebih dari 3 cm) sebelum memasukkannya ke pin.",
      question: "Dampak teknis buruk yang timbul pada transmisi sinyal data akibat penguraian lilitan yang terlalu panjang tersebut adalah...",
      correctText: "Meningkatnya derau interferensi silang (Near-End Crosstalk / NEXT) dan penurunan kualitas sinyal",
      distractors: [
        "Arus listrik PLN masuk membakar switch",
        "Kabel tidak bisa dialiri data sama sekali secara permanen",
        "Kabel menjadi meleleh karena panas lilitan",
        "Bandwidth jaringan otomatis bertambah dua kali lipat"
      ],
      explanation: "Standar TIA mensyaratkan lilitan kawat tidak boleh diurai lebih dari 0.5 inci (13 mm) dari konektor untuk mempertahankan kekebalan terhadap crosstalk.",
      quickTip: "Uraian kawat terlalu panjang memicu lonjakan Crosstalk (NEXT)."
    },
    {
      stimulus: "Alat tangan mekanik khusus yang berfungsi menjepit pin tembaga konektor RJ-45 ke kawat inti kabel UTP sekaligus mengunci kabel jaket disebut...",
      question: "Nama perkakas tangan wajib bagi teknisi jaringan tersebut adalah...",
      correctText: "Crimping Tool (Tang Crimping)",
      distractors: [
        "Tang Buaya Pemotong Pipa",
        "Obeng Plus Presisi",
        "Solder Listrik 40 Watt",
        "Impact Punch Down Tool"
      ],
      explanation: "Crimping tool menekan bilah kontak emas RJ-45 agar menembus isolator kawat tembaga dan mengunci selongsong plastik penahan kabel.",
      quickTip: "Menjepit konektor RJ-45 ke kabel UTP = Tang Crimping (Crimping Tool)."
    },
    {
      stimulus: "Pada instalasi rack server gedung, kabel solid UTP diterminasi di bagian belakang Patch Panel menggunakan konektor blok IDC (Insulation Displacement Connector).",
      question: "Alat penekan kawat berpegas yang memotong sisa ujung kawat tembaga sekaligus menancapkannya ke blok IDC adalah...",
      correctText: "Punch Down Tool (Impact Tool)",
      distractors: [
        "Tang Kombinasi 8 Inci",
        "Cutter Pisau Lipat",
        "Kunci Inggris Baja",
        "Heat Gun Pemanas"
      ],
      explanation: "Punch Down Tool (sering disebut krone tool) menekan kawat ke celah pisau IDC dan memotong kelebihan kabel dalam satu gerakan tekan berpegas.",
      quickTip: "Terminasi kabel ke Patch Panel / Keystone = Punch Down Tool."
    },
    {
      stimulus: "Setelah membuat kabel LAN, teknisi menggunakan Wiremap LAN Cable Tester yang terdiri dari unit Master dan unit Remote.",
      question: "Kondisi urutan nyala lampu indikator LED 1 sampai 8 pada Master dan Remote yang menunjukkan kabel straight-through berfungsi sempurna adalah...",
      correctText: "Lampu 1 hingga 8 menyala berurutan secara serempak dan beriringan antara Master dan Remote",
      distractors: [
        "Hanya lampu pin 1 dan 8 yang menyala",
        "Lampu menyala acak berkedip cepat tanpa urutan",
        "Seluruh lampu padam total saat kabel ditancapkan",
        "Lampu Master menyala 1-8 tetapi Remote padam semua"
      ],
      explanation: "Kabel straight yang benar akan menyalakan LED 1 s.d. 8 secara sinkron dan berurutan dari pin 1 sampai pin 8 di kedua unit tester.",
      quickTip: "LAN Tester normal Straight = LED 1 s.d. 8 menyala berurutan bersamaan."
    },
    {
      stimulus: "Pada pengetesan kabel LAN dengan tester, lampu LED nomor 3 pada remote tidak menyala sama sekali sementara pin lainnya menyala berurutan.",
      question: "Jenis kerusakan fisik kabel yang terjadi pada pin nomor 3 tersebut adalah...",
      correctText: "Open Circuit (Kawat Putus / Tidak Terhubung)",
      distractors: [
        "Short Circuit (Hubung Singkat)",
        "Reversed Pair (Kawat Terbalik)",
        "Split Pair (Pasangan Terbelah)",
        "Crossed Over (Kabel Silang)"
      ],
      explanation: "Lampu LED yang mati menandakan jalur konduktor kawat terputus (open pair), bisa karena kawat putus di tengah atau pin konektor belum tertancap sempurna.",
      quickTip: "Lampu LED pin mati = Open (Kawat putus / tidak kontak)."
    },
    {
      stimulus: "Saat kabel LAN diuji, lampu LED nomor 1 dan nomor 2 menyala bersamaan di saat nomor 1 aktif, menandakan terjadi kebocoran arus antar-kawat.",
      question: "Istilah untuk gangguan di mana dua konduktor kawat saling bersentuhan tanpa hambatan adalah...",
      correctText: "Short Circuit (Hubung Singkat)",
      distractors: [
        "Attenuation Loss",
        "Open Circuit",
        "Crosstalk",
        "Dispersion"
      ],
      explanation: "Short circuit terjadi ketika tembaga dari dua kawat berbeda saling bersentuhan akibat isolasi terkelupas atau pin konektor terjepit miring.",
      quickTip: "Dua lampu LED menyala bersamaan = Short (Korsleting kawat)."
    },
    {
      stimulus: "Pada pengujian kabel UTP Cat5e untuk koneksi Fast Ethernet 100 Mbps (100BASE-TX), hanya 4 pin yang aktif digunakan mentransmisikan data.",
      question: "Nomor-nomor pin pada soket RJ-45 yang aktif membawa sinyal transmit dan receive pada Fast Ethernet adalah...",
      correctText: "Pin 1, 2, 3, dan 6",
      distractors: [
        "Pin 1, 2, 7, dan 8",
        "Pin 4, 5, 6, dan 7",
        "Pin 2, 4, 6, dan 8",
        "Pin 1, 3, 5, dan 7"
      ],
      explanation: "Fast Ethernet 100BASE-TX menggunakan pin 1 dan 2 sebagai TX (+/-) serta pin 3 dan 6 sebagai RX (+/-). Pin 4, 5, 7, dan 8 tidak digunakan untuk data.",
      quickTip: "Fast Ethernet 100 Mbps hanya menggunakan pin 1, 2, 3, dan 6."
    },
    {
      stimulus: "Pada teknologi Gigabit Ethernet (1000BASE-T), seluruh pasang kawat di dalam kabel UTP Cat5e/Cat6 difungsikan penuh.",
      question: "Jumlah pasang kawat (pairs) yang bekerja mentransmisikan data secara simultan pada kecepatan Gigabit Ethernet adalah...",
      correctText: "4 pasang kawat (seluruh 8 kawat tembaga)",
      distractors: [
        "1 pasang kawat saja",
        "2 pasang kawat saja",
        "3 pasang kawat saja",
        "5 pasang kawat tembaga"
      ],
      explanation: "1000BASE-T menggunakan ke-4 pasang kawat secara full duplex (250 Mbps per pasangan kawat x 4 pasangan = 1000 Mbps = 1 Gbps).",
      quickTip: "Gigabit Ethernet (1 Gbps) membutuhkan ke-4 pasang kawat (8 pin) aktif."
    },
    {
      stimulus: "Seorang teknisi melakukan konfigurasi kabel konsol rollover RJ-45 ke DB-9 serial untuk mengonfigurasi router Cisco secara langsung melalui port AUX/Console.",
      question: "Karakteristik penyusunan kawat pada kabel tipe Rollover adalah...",
      correctText: "Urutan pin di ujung pertama dibalik persis secara terbalik di ujung kedua (Pin 1 ke Pin 8, Pin 2 ke Pin 7, dst.)",
      distractors: [
        "Mengikuti standar TIA/EIA 568A di kedua sisinya",
        "Hanya menukar pin 1 dengan pin 2",
        "Menyambungkan seluruh pin ganjil saja",
        "Hanya menggunakan kawat tanpa pembungkus jaket"
      ],
      explanation: "Kabel rollover membalik urutan secara simetris: 1 ke 8, 2 ke 7, 3 ke 6, 4 ke 5, 5 ke 4, 6 ke 3, 7 ke 2, 8 ke 1.",
      quickTip: "Kabel Rollover (Console) = Urutan pin dibalik persis 1 ke 8, 2 ke 7, dst."
    },
    {
      stimulus: "Sertifikasi kelayakan instalasi kabel tembaga gedung memerlukan alat ukur canggih yang mampu mengukur parameter NEXT, Return Loss, dan Propagation Delay.",
      question: "Perangkat ukur profesional berstandar industri untuk sertifikasi kelayakan kabel LAN tersebut adalah...",
      correctText: "Cable Analyzer / Cable Certifier (contoh: Fluke DSX CableAnalyzer)",
      distractors: [
        "LAN Tester baterai 9V sederhana",
        "Tespen listrik rumah tangga",
        "Termometer inframerah",
        "Tang ampere AC/DC"
      ],
      explanation: "Cable Certifier menguji seluruh parameter elektrikal frekuensi tinggi kabel (NEXT, FEXT, Return Loss, Insertion Loss, Panjang) untuk sertifikasi standar ISO/TIA.",
      quickTip: "Sertifikasi kelayakan kabel komprehensif = Fluke Cable Analyzer."
    },
    {
      stimulus: "Fenomena di mana sebagian energi sinyal listrik memantul kembali ke arah pengirim akibat ketidakcocokan impedansi (impedance mismatch) pada kabel disebut...",
      question: "Nama parameter pengujian kualitas transmisi tembaga tersebut adalah...",
      correctText: "Return Loss",
      distractors: [
        "Bending Radius",
        "Jitter Delay",
        "Optical Attenuation",
        "Grounding Resistance"
      ],
      explanation: "Return Loss mengukur rasio daya pantul sinyal terhadap daya yang dikirimkan. Semakin besar nilai return loss (dalam dB), semakin baik kabel tersebut.",
      quickTip: "Pantulan energi sinyal akibat ketidaksesuaian impedansi = Return Loss."
    },
    {
      stimulus: "Komponen pasif berupa stopkontak modular jaringan dinding tempat pengguna menancapkan kabel patch cord komputer menuju rack server disebut...",
      question: "Nama komponen modul antarmuka dinding tersebut adalah...",
      correctText: "Wallplate dengan Modular Keystone Jack RJ-45",
      distractors: [
        "Fitting Lampu Plafon",
        "Saklar Ganda AC",
        "MCB Box Sekring",
        "Sleeve Protection Tabung"
      ],
      explanation: "Keystone Jack RJ-45 dipasang pada bingkai wallplate di dinding ruangan untuk menyediakan titik koneksi jaringan permanen bagi pengguna.",
      quickTip: "Konektor RJ-45 dinding ruangan = Keystone Jack pada Wallplate."
    },
    {
      stimulus: "Dalam struktur perkabelan horizontal terstruktur gedung (Structured Cabling System), terdapat batas panjang maksimal saluran Channel Link.",
      question: "Distribusi alokasi panjang kabel maksimal 100 meter yang dianjurkan oleh standar TIA/EIA adalah...",
      correctText: "90 meter kabel solid permanen (Horizontal Cable) + 10 meter total kabel patch cord fleksibel",
      distractors: [
        "50 meter kabel solid + 50 meter kabel patch cord",
        "10 meter kabel solid + 90 meter kabel patch cord",
        "70 meter kabel solid + 30 meter kabel patch cord",
        "100 meter kabel solid tanpa boleh ada patch cord"
      ],
      explanation: "Standar TIA menetapkan Permanent Link maksimal 90 meter ditambah total 10 meter patch cord (5m di area kerja, 5m di ruang telekomunikasi) = 100 meter Channel.",
      quickTip: "Struktur 100m Channel = 90 meter kabel permanen + 10 meter patch cord."
    },
    {
      stimulus: "Kabel UTP yang dipasang di dalam instalasi dinding permanen menggunakan jenis konduktor kawat padat (Solid Core), sedangkan kabel patch cord menggunakan jenis serabut (Stranded Core).",
      question: "Alasan utama penggunaan kawat konduktor serabut (Stranded) pada kabel patch cord adalah...",
      correctText: "Memiliki fleksibilitas tinggi sehingga tidak mudah patah saat sering ditekuk dan dipindah-pindah",
      distractors: [
        "Memiliki hambatan listrik jauh lebih rendah dari tembaga padat",
        "Dapat menahan tegangan petir jutaan volt",
        "Membuat kabel menjadi anti air tanpa pembungkus jaket",
        "Dapat mengalirkan data dengan kecepatan cahaya laser"
      ],
      explanation: "Stranded conductor terdiri dari untaian kawat tembaga tipis yang sangat lentur, ideal untuk patch cord yang sering bergerak, meskipun memiliki redaman sedikit lebih tinggi.",
      quickTip: "Patch cord pakai Stranded Core agar lentur dan tidak gampang patah."
    },
    {
      stimulus: "Saat memasang jack RJ-45, selubung jaket luar kabel (outer jacket) harus ikut masuk ke dalam badan konektor sebelum dicrimping.",
      question: "Tujuan teknis memasukkan jaket kabel ke dalam konektor hingga terjepit baji pengunci (strain relief) adalah...",
      correctText: "Mencegah tarikan mekanik kabel membebani langsung sambungan kawat kecil pada pin pin konektor",
      distractors: [
        "Agar konektor bertambah berat",
        "Menghindari kebocoran arus listrik ke casing komputer",
        "Membuat warna kabel tidak terlihat dari luar",
        "Mencegah konektor terkena debu ruangan"
      ],
      explanation: "Baji pengunci (strain relief clip) pada konektor RJ-45 menjepit jaket kabel agar tekanan tarik fisik ditahan oleh jaket luar, bukan oleh kawat tembaga halus di pin.",
      quickTip: "Jaket kabel wajib terjepit di dalam RJ-45 sebagai strain relief pelindung tarikan."
    }
  ],
  mcma: [
    {
      stimulus: "Teknisi jaringan hendak memilih perkabelan yang tepat untuk menghubungkan perangkat-perangkat di laboratorium komputer sekolah.",
      question: "Manakah kombinasi koneksi berikut yang secara standar membutuhkan kabel Straight-Through (pada port non-auto MDIX)? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Koneksi dari PC Client menuju Port Switch Access", isCorrect: true },
        { text: "Koneksi dari Port FastEthernet Switch menuju Port Router", isCorrect: true },
        { text: "Koneksi langsung dari PC Client ke PC Client lain", isCorrect: false },
        { text: "Koneksi langsung dari Switch lama ke Switch lama lain", isCorrect: false },
        { text: "Koneksi langsung dari Router ke Router lain", isCorrect: false }
      ],
      explanation: "Straight-Through menghubungkan perangkat beda layer: PC ke Switch, dan Switch ke Router. Hubungan PC ke PC, Switch ke Switch, dan Router ke Router membutuhkan Crossover.",
      quickTip: "Straight-Through = PC ke Switch dan Switch ke Router."
    },
    {
      stimulus: "Seorang teknisi memeriksa kerusakan kabel LAN menggunakan Cable Wiremap Tester.",
      question: "Manakah dari indikasi berikut yang tergolong gangguan fisik pada kabel twisted pair? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Open Circuit (salah satu kawat putus di tengah jalur)", isCorrect: true },
        { text: "Short Circuit (kawat tembaga beda pin saling bersentuhan)", isCorrect: true },
        { text: "Reversed Pair (urutan kawat pada pasangan tertentu tertukar)", isCorrect: true },
        { text: "Full Duplex Connection (transmisi kirim dan terima berjalan serentak)", isCorrect: false },
        { text: "Gigabit Link Established (koneksi sukses beroperasi 1000 Mbps)", isCorrect: false }
      ],
      explanation: "Gangguan fisik kabel mencakup Open (terputus), Short (korsleting), dan Reversed/Crossed (urutan pin tertukar). Full duplex dan Gigabit link adalah kondisi operasional normal.",
      quickTip: "Gangguan kabel = Open, Short, dan Reversed/Crossed pair."
    },
    {
      stimulus: "Standarisasi TIA/EIA 568A dan 568B menetapkan pemetaan warna kabel twisted pair 8-pin.",
      question: "Manakah pernyataan yang BENAR mengenai urutan warna pin pada kabel LAN? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Pada standar 568B, pin 1 dan 2 adalah Putih Oranye dan Oranye", isCorrect: true },
        { text: "Pada kedua standar (568A dan 568B), pin 7 dan 8 selalu Putih Cokelat dan Cokelat", isCorrect: true },
        { text: "Pada standar 568A, pin 1 dan 2 adalah Putih Biru dan Biru", isCorrect: false },
        { text: "Pada standar 568B, pin 4 dan 5 adalah Hijau dan Putih Hijau", isCorrect: false },
        { text: "Pin 3 pada standar 568B adalah Putih Oranye", isCorrect: false }
      ],
      explanation: "Pada 568B, pin 1-2 adalah Putih Oranye - Oranye. Pada kedua standar 568A maupun 568B, pin 7-8 tidak pernah berubah posisinya (selalu Putih Cokelat - Cokelat) dan pin 4-5 selalu Biru - Putih Biru.",
      quickTip: "Pin 4,5 (Biru/Putih Biru) dan pin 7,8 (Putih Cokelat/Cokelat) identik di 568A & 568B."
    },
    {
      stimulus: "Alat pengujian kabel jaringan memiliki tingkatan fungsi yang berbeda dari yang paling sederhana hingga level sertifikasi.",
      question: "Manakah alat yang umum digunakan dalam pengujian dan terminasi kabel UTP di lapangan? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Wiremap Continuity Tester (memeriksa kontinuitas jalur pin 1-8)", isCorrect: true },
        { text: "Crimping Tool (mengepres konektor RJ-45 ke kabel)", isCorrect: true },
        { text: "Punch Down Tool (menancapkan kabel ke patch panel)", isCorrect: true },
        { text: "Optical Power Meter (mengukur daya laser kabel serat optik)", isCorrect: false },
        { text: "Fusion Splicer (melebur serat kaca dengan busur api listrik)", isCorrect: false }
      ],
      explanation: "Wiremap tester, Crimping tool, dan Punch down tool adalah alat kerja kabel tembaga UTP. OPM dan Fusion Splicer adalah alat khusus untuk fiber optik.",
      quickTip: "Alat kabel tembaga: Wiremap Tester, Crimping Tool, Punch Down Tool."
    },
    {
      stimulus: "Dalam instalasi terstruktur, kabel horizontal Cat6 menghubungkan rak server ke meja pengguna.",
      question: "Manakah ketentuan teknis yang HARUS dipatuhi saat menggelar kabel UTP di gedung? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Panjang total Channel Link dari switch ke komputer maksimal 100 meter", isCorrect: true },
        { text: "Kabel tidak boleh ditekuk melebihi batas kelengkungan minimal (bend radius)", isCorrect: true },
        { text: "Jalur kabel harus menjaga jarak pemisah dari kabel listrik tegangan tinggi PLN", isCorrect: true },
        { text: "Kabel UTP harus diikat kawat besi telanjang sekencang mungkin hingga gepeng", isCorrect: false },
        { text: "Uraian lilitan kawat saat terminasi konektor boleh mencapai 10 cm", isCorrect: false }
      ],
      explanation: "Ketentuan instalasi UTP: jarak maks 100m, menjaga bend radius (min 4x diameter kabel), dan menjaga jarak dari kabel listrik untuk mencegah induksi EMI. Mengikat terlalu kencang atau mengurai lilitan terlalu panjang akan merusak kualitas transmisi.",
      quickTip: "SOP UTP: Max 100m, jaga bend radius, jauhkan dari medan listrik tegangan tinggi."
    }
  ],
  tf: [
    {
      stimulus: "Penerapan standar warna kabel Straight-Through dan Crossover.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pengkabelan TIA/EIA!",
      statements: [
        { text: "Kabel Straight-Through dibuat dengan kedua ujung kabel menggunakan standar yang sama (misal 568B di kedua ujung).", correct: "B" },
        { text: "Kabel Crossover dibuat dengan satu ujung berstandar 568A dan ujung lainnya berstandar 568B.", correct: "B" },
        { text: "Jika kedua ujung kabel dipasang dengan standar 568A, kabel tersebut menjadi kabel Crossover.", correct: "S" }
      ],
      explanation: "Kedua ujung 568A tetap merupakan Straight-Through. Kabel Crossover mensyaratkan satu ujung 568A dan ujung satunya 568B.",
      quickTip: "Ujung sama (568B-568B atau 568A-568A) = Straight; Beda (568A-568B) = Cross."
    },
    {
      stimulus: "Karakteristik teknis port jaringan modern dengan dukungan Auto-MDIX.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai teknologi Auto-MDIX!",
      statements: [
        { text: "Auto-MDIX memungkinkan dua switch modern saling terhubung normal menggunakan kabel Straight-Through.", correct: "B" },
        { text: "Dengan Auto-MDIX aktif, switch dapat otomatis menukar jalur transmisi TX dan RX di level sirkuit port.", correct: "B" },
        { text: "Auto-MDIX hanya dapat berfungsi jika kabel yang digunakan adalah kabel fiber optik.", correct: "S" }
      ],
      explanation: "Auto-MDIX adalah teknologi port Ethernet berbasis kabel tembaga twisted pair (RJ-45) yang mendeteksi konfigurasi pin secara otomatis.",
      quickTip: "Auto-MDIX bekerja pada port Ethernet kabel tembaga RJ-45."
    },
    {
      stimulus: "Pengujian kontinuitas kabel LAN menggunakan LAN Tester LED.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang pembacaan indikator LAN Tester!",
      statements: [
        { text: "Jika lampu LED nomor 5 pada master menyala tetapi pada remote mati, maka jalur kawat nomor 5 mengalami open circuit.", correct: "B" },
        { text: "Kondisi di mana lampu remote menyala dengan urutan 3, 6, 1, 4, 5, 2, 7, 8 menunjukkan kabel memiliki crossed pin.", correct: "B" },
        { text: "LAN tester murah baterai 9V mampu mengukur bandwidth kecepatan kabel dalam satuan Gigabits per second.", correct: "S" }
      ],
      explanation: "LAN tester LED sederhana hanya menguji kontinuitas elektrik dan pemetaan pin (wiremap), bukan mengukur kecepatan bandwidth atau data rate kabel.",
      quickTip: "LAN tester sederhana hanya menguji jalur koneksi fisik (wiremap continuity)."
    },
    {
      stimulus: "SOP pemasangan konektor RJ-45 menggunakan crimping tool.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang teknik crimping kabel UTP!",
      statements: [
        { text: "Kawat tembaga harus dipotong rata sebelum dimasukkan ke dalam lubang pin konektor RJ-45.", correct: "B" },
        { text: "Jaket pelindung luar kabel harus ikut terjepit di dalam badan konektor RJ-45.", correct: "B" },
        { text: "Kawat tembaga harus dikupas isolator per warnanya dengan korek api sebelum dicrimping ke RJ-45.", correct: "S" }
      ],
      explanation: "Pisau kontak RJ-45 didesain menusuk menembus isolator warna kawat (insulation piercing), sehingga kawat tidak boleh dikupas manual.",
      quickTip: "Kawat warna tidak boleh dikupas; pin RJ-45 otomatis menusuk isolator saat dicrimp."
    },
    {
      stimulus: "Spesifikasi panjang kabel LAN dan batas toleransi transmisi sinyal.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai batasan bentangan kabel UTP!",
      statements: [
        { text: "Standar TIA/EIA 568 menetapkan batas bentangan kabel horisontal permanen maksimal 90 meter.", correct: "B" },
        { text: "Jika kabel UTP ditarik melebihi panjang 100 meter, atenuasi sinyal akan meningkat dan memicu packet loss.", correct: "B" },
        { text: "Menambah panjang kabel UTP hingga 300 meter dapat dilakukan tanpa membutuhkan repeater atau switch tambahan.", correct: "S" }
      ],
      explanation: "Kabel tembaga UTP Ethernet dibatasi 100 meter total. Melebihi 100 meter membutuhkan switch/repeater penguat sinyal.",
      quickTip: "Batas maksimal kabel UTP = 100 meter tanpa repeater."
    }
  ]
};

const s09 = {
  sessionId: "s09",
  pg: [
    {
      stimulus: "Prinsip dasar transmisi cahaya di dalam inti kaca serat optik mengandalkan sifat pembiasan dan pemantulan gelombang elektromagnetik.",
      question: "Prinsip fisika optik yang mendasari perambatan cahaya di dalam core kabel fiber optik tanpa bocor keluar adalah...",
      correctText: "Pemantulan Internal Total (Total Internal Reflection)",
      distractors: [
        "Induksi Medan Magnetik Faraday",
        "Efek Fotolistrik Einstein",
        "Polarisasi Cahaya Terbuka",
        "Difraksi Celah Tunggal"
      ],
      explanation: "Total Internal Reflection terjadi ketika cahaya merambat dari medium lebih rapat (core) menuju medium kurang rapat (cladding) dengan sudut datang melebihi sudut kritis.",
      quickTip: "Cahaya merambat di dalam fiber optik karena Pemantulan Internal Total."
    },
    {
      stimulus: "Agar fenomena pemantulan internal total dapat berlangsung sempurna di dalam serat optik, terdapat syarat indeks bias antara lapisan core dan cladding.",
      question: "Hubungan indeks bias yang mutlak harus dipenuhi pada struktur serat optik adalah...",
      correctText: "Indeks bias core (n1) harus selalu lebih besar daripada indeks bias cladding (n2)",
      distractors: [
        "Indeks bias core (n1) harus selalu lebih kecil daripada indeks bias cladding (n2)",
        "Indeks bias core dan cladding harus sama persis nilainya (n1 = n2)",
        "Indeks bias core harus bernilai 0 (ruang hampa udara)",
        "Indeks bias cladding harus bernilai negatif"
      ],
      explanation: "Cahaya hanya dapat memantul total jika merambat di medium dengan indeks bias lebih tinggi (core, n1 ~ 1.47) yang dikelilingi medium indeks bias lebih rendah (cladding, n2 ~ 1.45).",
      quickTip: "Syarat pantulan total: Indeks bias Core (n1) > Cladding (n2)."
    },
    {
      stimulus: "Penampang melintang sehelai serat optik terdiri dari beberapa lapisan konsentris.",
      question: "Lapisan terluar dari kaca serat optik yang berfungsi memantulkan kembali berkas cahaya ke dalam inti inti adalah...",
      correctText: "Cladding",
      distractors: [
        "Outer Jacket Polyethylene",
        "Aramid Yarn (Kevlar)",
        "Central Strength Member",
        "Thixotropic Jelly Compound"
      ],
      explanation: "Cladding adalah lapisan kaca pembungkus yang mengelilingi core dengan indeks bias lebih rendah, bertugas menjaga cahaya tetap terperangkap di dalam core.",
      quickTip: "Lapisan kaca pemantul cahaya = Cladding."
    },
    {
      stimulus: "Standar internasional industri telekomunikasi (ITU-T) menetapkan ukuran diameter lapisan cladding pada serat optik telekomunikasi.",
      question: "Ukuran standar diameter luar lapisan cladding untuk serat optik kaca telekomunikasi (baik Single-Mode maupun Multi-Mode) adalah...",
      correctText: "125 mikrometer (µm)",
      distractors: [
        "9 mikrometer (µm)",
        "50 mikrometer (µm)",
        "250 mikrometer (µm)",
        "900 mikrometer (µm)"
      ],
      explanation: "Standar diameter cladding serat optik telekomunikasi adalah 125 µm. Yang membedakan SMF dan MMF adalah diameter core-nya.",
      quickTip: "Diameter Cladding standar serat optik selalu 125 µm."
    },
    {
      stimulus: "Lapisan pelindung primer berbahan plastik polimer akrilat yang langsung melapisi permukaan kaca cladding setelah penarikan serat di pabrik disebut...",
      question: "Nama lapisan pelindung primer yang memiliki diameter luar standar 250 mikrometer (µm) tersebut adalah...",
      correctText: "Coating (Primary Buffer Coating)",
      distractors: [
        "Core Silika",
        "Armor Baja Pita",
        "Loose Tube Gel",
        "Ripcord Benang Penarik"
      ],
      explanation: "Primary coating berdiameter 250 µm melindungi kaca rapuh dari goresan mekanis, kelembapan, dan gesekan saat proses manufaktur dan instalasi.",
      quickTip: "Pelindung primer kaca berukuran 250 µm = Coating (Primary Buffer)."
    },
    {
      stimulus: "Serat optik menawarkan berbagai keunggulan signifikan dibandingkan media kabel tembaga twisted pair.",
      question: "Keunggulan utama fiber optik yang membuatnya sangat aman dipasang di dekat jalur listrik tegangan tinggi dan daerah rawan petir adalah...",
      correctText: "Kebal terhadap interferensi gelombang elektromagnetik (EMI) dan tidak menghantarkan arus listrik",
      distractors: [
        "Dapat ditekuk patah hingga 180 derajat tanpa putus",
        "Harganya jauh lebih murah daripada seutas tali plastik",
        "Bisa disambung hanya dengan cara diplintir memakai tang",
        "Memancarkan cahaya penerangan ruangan yang sangat terang"
      ],
      explanation: "Karena terbuat dari kaca murni dielektrik, serat optik tidak menghantarkan arus listrik dan sepenuhnya kebal terhadap interferensi elektromagnetik (EMI) serta induksi petir.",
      quickTip: "Fiber optik kebal terhadap induksi listrik dan derau elektromagnetik (EMI)."
    },
    {
      stimulus: "Cahaya yang digunakan dalam transmisi serat optik telekomunikasi berada pada spektrum inframerah dekat (Near Infrared), bukan cahaya tampak.",
      question: "Alasan utama penggunaan panjang gelombang inframerah (1310 nm dan 1550 nm) pada serat optik silika adalah...",
      correctText: "Kaca silika memiliki tingkat atenuasi (redaman kehilangan daya) paling rendah pada panjang gelombang tersebut",
      distractors: [
        "Panjang gelombang tersebut dapat dilihat langsung oleh mata telanjang",
        "Cahaya inframerah memiliki kecepatan rambat melebihi kecepatan cahaya",
        "Harga perangkat pemancar inframerah paling murah dibanding lampu senter",
        "Inframerah tidak membutuhkan sumber daya listrik sama sekali"
      ],
      explanation: "Silika murni memiliki jendela transmisi (transmission windows) dengan redaman optik minimal di rentang inframerah (terendah pada 1550 nm ~0.2 dB/km).",
      quickTip: "Inframerah (1310/1550 nm) digunakan karena redaman atenuasi kaca silika paling minimal."
    },
    {
      stimulus: "Kabel fiber optik outdoor yang dipasang di bawah tanah atau di udara membutuhkan komponen penguat untuk menahan beban tarikan mekanis.",
      question: "Bahan serat sintetis sintetis berdaya tahan tarik sangat tinggi yang digunakan sebagai pelindung beban tarik kabel optik adalah...",
      correctText: "Aramid Yarn (Kevlar)",
      distractors: [
        "Kawat Tembaga Lunak",
        "Benang Wol Rajut",
        "Serat Sabut Kelapa",
        "Karet Gelang Sintetis"
      ],
      explanation: "Aramid yarn (Kevlar) memiliki kekuatan tarik sangat tinggi (tensile strength) dan bobot ringan, melindungi serat kaca dari regangan saat ditarik di tiang atau pipa duct.",
      quickTip: "Serat sintetis penahan beban tarik kabel fiber = Aramid Yarn (Kevlar)."
    },
    {
      stimulus: "Pada kabel fiber optik tipe Loose Tube, di dalam pipa longgar yang berisi serat optik diisi senyawa zat khusus.",
      question: "Fungsi dari cairan jeli pelindung (Thixotropic Jelly) di dalam tabung loose tube adalah...",
      correctText: "Mencegah masuknya rembesan air/kelembapan dan meredam getaran mekanis",
      distractors: [
        "Sebagai pelumas agar serat kaca bisa berputar kencang",
        "Untuk mendinginkan kaca agar tidak meleleh kepanasan",
        "Sebagai zat pewarna untuk membedakan urutan kabel",
        "Sebagai bahan bakar cadangan jika terjadi pemadaman listrik"
      ],
      explanation: "Jeli gel bersifat water-blocking, mencegah rembesan air yang dapat membekukan dan mematahkan serat kaca (microbending) saat suhu dingin.",
      quickTip: "Gel jeli di dalam loose tube berfungsi memblokir air dan kelembapan."
    },
    {
      stimulus: "Saat melakukan penarikan kabel fiber optik di lapangan, teknisi harus memperhatikan batas radius pembengkokan kabel.",
      question: "Akibat fisik yang terjadi pada sinyal transmisi jika kabel fiber optik dibengkokkan secara berlebihan melebihi batas minimum kelengkungannya adalah...",
      correctText: "Terjadi rugi-rugi redaman tinggi (Bending Loss) akibat cahaya bocor menembus cladding",
      distractors: [
        "Cahaya di dalam kabel akan berbalik arah menabrak pemancar laser",
        "Kecepatan sinyal cahaya melambat menjadi setara arus listrik",
        "Kabel akan langsung meledak mengeluarkan percikan api",
        "Sinyal data berubah menjadi sinyal radio analog FM"
      ],
      explanation: "Tekukan ekstrem (macrobending) membuat sudut datang cahaya menjadi lebih kecil daripada sudut kritis, menyebabkan cahaya bocor keluar dari core ke cladding.",
      quickTip: "Tekukan kabel melebihi batas memicu kebocoran cahaya (Bending Loss)."
    },
    {
      stimulus: "Kabel fiber optik luar ruangan (Outdoor Cable) memiliki berbagai macam jenis konstruksi sesuai metode pemasangannya.",
      question: "Kabel udara yang dirancang menyatu dengan kawat baja penggantung berkekuatan tinggi membentuk penampang angka 8 disebut...",
      correctText: "Figure-8 Aerial Cable (dengan Steel Messenger Wire)",
      distractors: [
        "Armored Direct Buried Cable",
        "Indoor Simplex Patch Cord",
        "Ribbon Cable Data Center",
        "Submarine Underwater Cable"
      ],
      explanation: "Kabel Figure-8 memiliki kawat baja penggantung (messenger wire) terintegrasi pada jaketnya untuk menahan bentangan kabel antar-tiang.",
      quickTip: "Kabel udara dengan kawat penggantung berbentuk angka 8 = Kabel Figure-8."
    },
    {
      stimulus: "Dalam kabel tanah tanam langsung (Direct Buried Cable), kabel rentan terhadap gigitan hewan pengerat (tikus) dan tekanan beban batu/tanah.",
      question: "Lapisan pelindung logam baja bergelombang yang disematkan di dalam jaket kabel tanah disebut...",
      correctText: "Armored Steel Tape (Pelindung Lapis Baja)",
      distractors: [
        "Kain Kassa Katun",
        "Lapisan Foil Timah Makanan",
        "Busa Spons Peredam",
        "Lem Silikon Transparan"
      ],
      explanation: "Armoring berupa pita baja bergelombang (corrugated steel tape) memberikan ketahanan mekanis terhadap kompresi beban tanah dan gigitan hewan pengerat.",
      quickTip: "Kabel tanam tanah dilindungi lapisan baja anti-tikus = Armored Cable."
    },
    {
      stimulus: "Dalam sehelai tabung loose tube terdapat kode warna internasional standar TIA/EIA-598 untuk mengidentifikasi urutan nomor serat optik.",
      question: "Warna serat optik nomor 1 dan nomor 2 menurut standar urutan warna TIA/EIA-598 adalah...",
      correctText: "Biru dan Oranye",
      distractors: [
        "Hijau dan Cokelat",
        "Abu-abu dan Putih",
        "Merah dan Hitam",
        "Kuning dan Ungu"
      ],
      explanation: "Urutan standar 12 warna TIA/EIA-598: 1-Biru, 2-Oranye, 3-Hijau, 4-Cokelat, 5-Abu-abu, 6-Putih, 7-Merah, 8-Hitam, 9-Kuning, 10-Ungu, 11-Pink, 12-Toska.",
      quickTip: "Kode warna fiber 1-4: Biru, Oranye, Hijau, Cokelat (BOH Cok)."
    },
    {
      stimulus: "Mengacu pada urutan kode warna internasional TIA/EIA-598 yang terdiri dari 12 warna baku.",
      question: "Warna serat optik pada urutan nomor 3 dan nomor 4 adalah...",
      correctText: "Hijau dan Cokelat",
      distractors: [
        "Biru dan Oranye",
        "Merah dan Hitam",
        "Kuning dan Ungu",
        "Putih dan Abu-abu"
      ],
      explanation: "Serat optik nomor 3 berwarna Hijau dan nomor 4 berwarna Cokelat.",
      quickTip: "Serat nomor 3 = Hijau, Serat nomor 4 = Cokelat."
    },
    {
      stimulus: "Serat optik nomor 12 (terakhir dalam satu tabung loose tube standar 12-core) memiliki warna penanda khas.",
      question: "Warna serat optik pada nomor urut ke-12 menurut standar TIA/EIA-598 adalah...",
      correctText: "Aqua / Toska (Turquoise)",
      distractors: [
        "Pink / Merah Muda (Nomor 11)",
        "Violet / Ungu (Nomor 10)",
        "Kuning (Nomor 9)",
        "Hitam (Nomor 8)"
      ],
      explanation: "Urutan 9: Kuning, 10: Violet/Ungu, 11: Rose/Pink, 12: Aqua/Toska.",
      quickTip: "Warna serat nomor 11 = Pink, nomor 12 = Toska/Aqua."
    },
    {
      stimulus: "Dalam penanganan kabel fiber optik, terdapat benang kuat di bawah lapisan jaket yang dapat ditarik untuk membelah jaket tanpa merusak serat di dalamnya.",
      question: "Nama komponen benang pembelah jaket kabel tersebut adalah...",
      correctText: "Ripcord",
      distractors: [
        "Messenger Wire",
        "Central Strength Member",
        "Buffer Tube",
        "Patch Cord"
      ],
      explanation: "Ripcord adalah benang nilon/poliester berkekuatan tinggi yang ditarik untuk memotong membujur jaket kabel luar secara rapi saat proses pengupasan.",
      quickTip: "Benang pembelah jaket kabel optik = Ripcord."
    },
    {
      stimulus: "Batang padat non-konduktif di bagian pusat sumbu kabel fiber optik (sering terbuat dari Fiber Reinforced Plastic / FRP) disebut...",
      question: "Fungsi dari Central Strength Member (CSM) pada konstruksi kabel optik adalah...",
      correctText: "Menjaga kekakuan struktural kabel agar tidak menekuk patah dan menahan beban tarik aksial",
      distractors: [
        "Mengalirkan daya listrik 220V untuk menyalakan router",
        "Sebagai saluran pembuangan air hujan di dalam kabel",
        "Untuk menyalurkan gelombang radio antena FM",
        "Sebagai tempat penyimpanan file data darurat"
      ],
      explanation: "Central Strength Member (CSM) memberikan kekakuan struktural pada inti kabel multi-tube dan menahan gaya regang sepanjang kabel.",
      quickTip: "Inti pengaku di pusat kabel optik = Central Strength Member (CSM / FRP)."
    },
    {
      stimulus: "Bahan dasar utama yang digunakan untuk membuat kaca core dan cladding serat optik telekomunikasi modern adalah...",
      question: "Senyawa kimia kemurnian tinggi pembentuk kaca serat optik tersebut adalah...",
      correctText: "Silika (Silikon Dioksida / SiO2)",
      distractors: [
        "Tembaga Murni (Cu)",
        "Aluminium Oksida (Al2O3)",
        "Polivinil Klorida (PVC)",
        "Baja Karbon Tinggi (Fe-C)"
      ],
      explanation: "Kaca optik terbuat dari silika ultra-murni (SiO2) yang didoping dengan germanium dioksida (GeO2) pada bagian core untuk menaikkan indeks biasnya.",
      quickTip: "Bahan pembuat kaca serat optik = Silika murni (SiO2)."
    },
    {
      stimulus: "Perbedaan waktu kedatangan berbagai berkas cahaya di ujung penerima akibat menempuh lintasan jarak yang berbeda di dalam core disebut...",
      question: "Nama fenomena pelebaran pulsa cahaya yang membatasi bandwidth transmisi serat optik tersebut adalah...",
      correctText: "Dispersi Modal (Modal Dispersion)",
      distractors: [
        "Atenuasi Radiasi",
        "Refleksi Fresnel",
        "Crosstalk Kapasitif",
        "Polarisasi Faraday"
      ],
      explanation: "Dispersi modal terjadi pada serat berinti besar (multi-mode) karena cahaya merambat lewat ratusan sudut mode berbeda yang sampai ke ujung dalam waktu tidak bersamaan.",
      quickTip: "Pelebaran pulsa cahaya akibat variasi lintasan mode = Dispersi Modal."
    },
    {
      stimulus: "Pada transmisi optik jarak jauh, terjadi pelebaran pulsa akibat kecepatan rambat cahaya berbeda untuk setiap spektrum panjang gelombang yang dipancarkan sumber optik.",
      question: "Nama jenis dispersi yang terjadi baik pada serat Single-Mode maupun Multi-Mode tersebut adalah...",
      correctText: "Dispersi Kromatik (Chromatic Dispersion)",
      distractors: [
        "Dispersi Modal",
        "Polarization Loss",
        "Insertion Loss",
        "Return Loss"
      ],
      explanation: "Dispersi kromatik timbul karena sumber cahaya memancarkan spektrum dengan panjang gelombang berbeda-beda yang merambat dengan kecepatan sedikit berbeda di dalam silika.",
      quickTip: "Pelebaran pulsa akibat spektrum panjang gelombang berbeda = Dispersi Kromatik."
    }
  ],
  mcma: [
    {
      stimulus: "Serat optik memiliki struktur berlapis untuk menjaga integritas transmisi cahaya dan kekuatan mekanis.",
      question: "Manakah lapisan yang TERMASUK dalam struktur anatomi dasar sehelai serat optik kaca? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Core (inti kaca tempat merambatnya gelombang cahaya)", isCorrect: true },
        { text: "Cladding (lapisan kaca pembungkus pemantul cahaya)", isCorrect: true },
        { text: "Primary Coating / Buffer (pelindung permukaan kaca)", isCorrect: true },
        { text: "RJ-45 Copper Pin (konektor 8-pin tembaga)", isCorrect: false },
        { text: "Twisted Conductor Pair (pasangan kawat terpelintir)", isCorrect: false }
      ],
      explanation: "Anatomi dasar serat optik terdiri dari Core, Cladding, dan Coating. Pin RJ-45 dan twisted pair adalah bagian dari kabel tembaga LAN.",
      quickTip: "Tiga lapisan utama serat optik: Core, Cladding, dan Coating."
    },
    {
      stimulus: "Jendela transmisi optik (Optical Transmission Windows) dipilih berdasarkan tingkat redaman (atenuasi) terendah silika.",
      question: "Manakah panjang gelombang yang UMUM digunakan sebagai jendela transmisi komunikasi serat optik inframerah? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "850 nm (digunakan pada jaringan Multi-Mode jarak pendek)", isCorrect: true },
        { text: "1310 nm (redaman rendah dan dispersi mendekati nol pada SMF)", isCorrect: true },
        { text: "1550 nm (redaman paling terendah ~0.2 dB/km untuk jarak jauh)", isCorrect: true },
        { text: "100 nm (spektrum radiasi sinar ultraviolet berbahaya)", isCorrect: false },
        { text: "10.000 nm (spektrum radiasi termal panas tinggi)", isCorrect: false }
      ],
      explanation: "Tiga jendela transmisi standar telekomunikasi adalah 850 nm (MMF), 1310 nm (SMF), dan 1550 nm (SMF jarak jauh / DWDM).",
      quickTip: "Tiga jendela optik utama: 850 nm, 1310 nm, dan 1550 nm."
    },
    {
      stimulus: "Standar kode warna 12 serat optik TIA/EIA-598 digunakan teknisi saat melakukan penyambungan.",
      question: "Manakah pasangan nomor dan warna serat optik yang BENAR menurut standar TIA/EIA-598? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Nomor 1 = Biru (Blue)", isCorrect: true },
        { text: "Nomor 2 = Oranye (Orange)", isCorrect: true },
        { text: "Nomor 5 = Abu-abu (Slate / Grey)", isCorrect: true },
        { text: "Nomor 3 = Hitam (Black)", isCorrect: false },
        { text: "Nomor 4 = Kuning (Yellow)", isCorrect: false }
      ],
      explanation: "Urutan TIA/EIA-598: 1-Biru, 2-Oranye, 3-Hijau, 4-Cokelat, 5-Abu-abu. Hitam adalah nomor 8 dan Kuning adalah nomor 9.",
      quickTip: "1: Biru, 2: Oranye, 3: Hijau, 4: Cokelat, 5: Abu-abu."
    },
    {
      stimulus: "Fiber optik memiliki keunggulan fisis yang jauh melampaui kabel tembaga.",
      question: "Manakah dari faktor berikut yang merupakan KEUNGGULAN serat optik dibandingkan kabel tembaga UTP? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Kapasitas bandwidth data yang sangat tinggi (hingga Terabits per detik)", isCorrect: true },
        { text: "Jangkauan transmisi sinyal sangat jauh puluhan kilometer tanpa repeater", isCorrect: true },
        { text: "Kabel sangat tahan dan elastis jika ditarik dengan traktor alat berat", isCorrect: false },
        { text: "Dapat disambung dengan mudah menggunakan lem kertas biasa", isCorrect: false },
        { text: "Kabel dapat berfungsi menyalurkan tenaga listrik 220V ke rumah tangga", isCorrect: false }
      ],
      explanation: "Keunggulan utama fiber optik adalah kapasitas transmisi bandwidth yang masif dan kemampuan jangkauan puluhan kilometer dengan redaman sangat kecil.",
      quickTip: "Keunggulan fiber optik: Bandwidth masif dan jangkauan puluhan km tanpa repeater."
    },
    {
      stimulus: "Konstruksi kabel serat optik luar ruangan (outdoor) dirancang tahan terhadap kondisi alam ekstrem.",
      question: "Manakah komponen perlindungan fisik yang TERDAPAT pada kabel fiber optik outdoor jenis Loose Tube? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Water-blocking Jelly / Water-swellable Yarn (penahan masuknya air)", isCorrect: true },
        { text: "Central Strength Member (batang pengaku FRP di pusat kabel)", isCorrect: true },
        { text: "Corrugated Steel Armor (pelindung pita baja tahan benturan/hewan)", isCorrect: true },
        { text: "RJ-45 Modular Plug (konektor jepit komputer)", isCorrect: false },
        { text: "Ferrite Core Toroid Ring (cincin peredam frekuensi radio)", isCorrect: false }
      ],
      explanation: "Kabel outdoor memiliki jelly anti-air, CSM (pengaku), dan steel tape armor (baja pelindung). RJ-45 adalah konektor kabel tembaga.",
      quickTip: "Perlindungan kabel outdoor: Jeli anti-air, Central Strength Member, dan Steel Armor."
    }
  ],
  tf: [
    {
      stimulus: "Prinsip pemantulan internal total (Total Internal Reflection) dalam transmisi serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penjalaran cahaya dalam serat optik!",
      statements: [
        { text: "Pemantulan internal total terjadi karena indeks bias lapisan core dibuat lebih besar dibanding lapisan cladding.", correct: "B" },
        { text: "Sudut datang berkas cahaya ke dinding cladding harus lebih besar daripada sudut kritis agar tidak terjadi pembiasan keluar.", correct: "B" },
        { text: "Cahaya di dalam fiber optik merambat dengan cara memantul pada lapisan jaket plastik hitam terluar kabel.", correct: "S" }
      ],
      explanation: "Cahaya memantul pada batas antara Core dan Cladding kaca, bukan pada jaket plastik luar kabel.",
      quickTip: "Cahaya memantul pada batas Core dan Cladding kaca."
    },
    {
      stimulus: "Dimensi fisik standar serat optik telekomunikasi.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai ukuran diameter lapisan serat optik!",
      statements: [
        { text: "Diameter lapisan cladding serat optik standar telekomunikasi adalah 125 mikron (µm).", correct: "B" },
        { text: "Diameter pelindung primer (primary coating) yang melindungi kaca adalah sekitar 250 mikron (µm).", correct: "B" },
        { text: "Diameter inti (core) serat optik Single-Mode berukuran 125 mikron (µm).", correct: "S" }
      ],
      explanation: "Diameter core Single-Mode sangat kecil yaitu sekitar 8 hingga 10 µm (standar 9 µm). Yang berukuran 125 µm adalah diameter cladding.",
      quickTip: "Core SMF = 9 µm; Cladding = 125 µm; Coating = 250 µm."
    },
    {
      stimulus: "Kode warna urutan 12 serat optik berdasarkan standar TIA/EIA-598.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang urutan warna serat optik!",
      statements: [
        { text: "Serat optik nomor 1 selalu diawali dengan warna Biru.", correct: "B" },
        { text: "Serat optik nomor 2 berwarna Oranye dan nomor 3 berwarna Hijau.", correct: "B" },
        { text: "Serat optik nomor 4 berwarna Hitam.", correct: "S" }
      ],
      explanation: "Serat nomor 4 berwarna Cokelat. Warna Hitam berada pada urutan nomor 8.",
      quickTip: "Urutan 1-4: Biru, Oranye, Hijau, Cokelat."
    },
    {
      stimulus: "Karakteristik kebal interferensi gelombang elektromagnetik serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai sifat isolator listrik serat optik!",
      statements: [
        { text: "Kabel serat optik tidak memancarkan radiasi elektromagnetik sehingga sangat sulit disadap secara nirkabel.", correct: "B" },
        { text: "Kabel serat optik bebas dari masalah ground loop dan aman digelar berdampingan dengan jalur transmisi tegangan tinggi PLN.", correct: "B" },
        { text: "Jika terkena induksi medan magnet trafo besar, kecepatan internet pada fiber optik akan turun drastis.", correct: "S" }
      ],
      explanation: "Sinyal cahaya di dalam silika tidak terpengaruh sama sekali oleh medan magnet trafo maupun induksi listrik.",
      quickTip: "Fiber optik 100% imun terhadap interferensi elektromagnetik dan medan magnet."
    },
    {
      stimulus: "Ketahanan mekanis dan batas kelengkungan (bending) kabel optik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penanganan fisik kabel serat optik!",
      statements: [
        { text: "Menekuk kabel fiber optik melebihi radius batas lengkung minimum akan menyebabkan lonjakan redaman macrobending.", correct: "B" },
        { text: "Serat kaca yang terlipat hingga patah harus disambung ulang menggunakan fusion splicer atau konektor mekanik.", correct: "B" },
        { text: "Kabel fiber optik boleh diikat kencang dengan kawat bendrat menggunakan tang hingga jaket kabel berlekuk tajam.", correct: "S" }
      ],
      explanation: "Mengikat fiber optik terlalu kencang dengan kawat bendrat akan menimbulkan microbending dan berisiko mematahkan inti kaca.",
      quickTip: "Gunakan kabel ties dengan kekencangan wajar; jangan mengikat kawat tajam pada fiber."
    }
  ]
};

const s10 = {
  sessionId: "s10",
  pg: [
    {
      stimulus: "Dalam jaringan telekomunikasi, serat optik diklasifikasikan menjadi dua jenis utama berdasarkan jalur perambatan cahayanya.",
      question: "Dua jenis utama kabel serat optik tersebut adalah...",
      correctText: "Single-Mode Fiber (SMF) dan Multi-Mode Fiber (MMF)",
      distractors: [
        "Unshielded Fiber dan Shielded Fiber",
        "Category 5e Fiber dan Category 6 Fiber",
        "Coaxial Fiber dan Twisted Fiber",
        "Digital Fiber dan Analog Fiber"
      ],
      explanation: "Serat optik diklasifikasikan menjadi Single-Mode (merambatkan satu mode berkas cahaya sejajar sumbu) dan Multi-Mode (merambatkan banyak mode berkas cahaya).",
      quickTip: "Dua tipe utama serat optik = Single-Mode Fiber (SMF) dan Multi-Mode Fiber (MMF)."
    },
    {
      stimulus: "Single-Mode Fiber (SMF) memiliki ukuran inti kaca yang sangat kecil dibanding Multi-Mode Fiber.",
      question: "Ukuran diameter inti (core) standar pada kabel Single-Mode Fiber (ITU-T G.652) adalah...",
      correctText: "Sekitar 8 hingga 10 mikrometer (standar umum 9 µm)",
      distractors: [
        "50 mikrometer (µm)",
        "62.5 mikrometer (µm)",
        "125 mikrometer (µm)",
        "250 mikrometer (µm)"
      ],
      explanation: "Core SMF berdiameter sekitar 9 µm dengan cladding 125 µm (notasi 9/125 µm), memungkinkan hanya satu gelombang cahaya merambat lurus tanpa dispersi modal.",
      quickTip: "Diameter Core Single-Mode (SMF) = 9 µm (notasi 9/125 µm)."
    },
    {
      stimulus: "Multi-Mode Fiber (MMF) memiliki diameter core yang jauh lebih besar sehingga dapat dilalui banyak lintasan berkas cahaya secara bersamaan.",
      question: "Dua ukuran diameter inti (core) yang umum digunakan pada kabel Multi-Mode Fiber tipe OM1 hingga OM4 adalah...",
      correctText: "50 mikrometer (µm) dan 62.5 mikrometer (µm)",
      distractors: [
        "9 mikrometer dan 125 mikrometer",
        "100 mikrometer dan 200 mikrometer",
        "5 mikrometer dan 10 mikrometer",
        "1 mikrometer dan 2 mikrometer"
      ],
      explanation: "MMF menggunakan core berdiameter 62.5 µm (OM1) atau 50 µm (OM2, OM3, OM4) dengan cladding 125 µm (notasi 50/125 atau 62.5/125 µm).",
      quickTip: "Diameter Core Multi-Mode (MMF) = 50 µm atau 62.5 µm."
    },
    {
      stimulus: "Untuk membedakan jenis kabel patch cord fiber optik di lapangan, pabrikan menerapkan standarisasi warna jaket pelindung luar (jacket color code).",
      question: "Warna standar jaket pelindung pada kabel patch cord Single-Mode Fiber (SMF) adalah...",
      correctText: "Kuning (Yellow)",
      distractors: [
        "Oranye (Orange)",
        "Aqua / Biru Laut (Toska)",
        "Abu-abu Gelap (Dark Grey)",
        "Hitam Pekat (Jet Black)"
      ],
      explanation: "Kabel patch cord Single-Mode selalu menggunakan warna jaket kuning. MMF OM1/OM2 berwarna oranye, sedangkan MMF OM3/OM4 berwarna aqua/toska.",
      quickTip: "Kabel patch cord Single-Mode (SMF) berwarna Kuning."
    },
    {
      stimulus: "Kabel patch cord Multi-Mode Fiber standar laser-optimized (OM3 dan OM4) yang banyak digunakan di data center memiliki warna khas.",
      question: "Warna standar jaket pelindung kabel patch cord Multi-Mode tipe OM3 dan OM4 adalah...",
      correctText: "Aqua / Hijau Kebiruan (Toska)",
      distractors: [
        "Kuning Terang",
        "Oranye Klasik",
        "Merah Marun",
        "Putih Bersih"
      ],
      explanation: "OM3 dan OM4 menggunakan warna Aqua (toska) untuk menandakan kabel MMF berkecepatan 10G/40G/100G berbasis laser VCSEL 850 nm.",
      quickTip: "Kabel patch cord MMF OM3/OM4 berwarna Aqua / Toska."
    },
    {
      stimulus: "Sumber cahaya yang digunakan untuk mentransmisikan data pada kabel Single-Mode Fiber membutuhkan presisi dan daya tembus jarak jauh.",
      question: "Jenis sumber pemancar optik yang digunakan pada sistem transmisi Single-Mode Fiber adalah...",
      correctText: "Laser Dioda (Laser Diode / LD)",
      distractors: [
        "Lampu Pijar Wolfram",
        "LED Biasa (Light Emitting Diode)",
        "Lampu Neon Fluorescent",
        "Lilin Parafin Inframerah"
      ],
      explanation: "SMF membutuhkan sinar laser koheren berdaya tinggi (Laser Diode) dengan spektrum sempit agar dapat masuk ke dalam core kecil 9 µm dan menempuh jarak jauh.",
      quickTip: "Sumber cahaya Single-Mode = Laser Dioda (LD)."
    },
    {
      stimulus: "Jaringan serat optik Multi-Mode biasanya digunakan untuk kebutuhan jaringan jarak pendek seperti interkoneksi server di data center atau kampus.",
      question: "Jarak jangkau transmisi efektif maksimal kabel Multi-Mode Fiber tanpa pengulang sinyal (repeater) umumnya dibatasi hingga...",
      correctText: "Maksimal sekitar 300 hingga 550 meter (di bawah 2 kilometer)",
      distractors: [
        "Maksimal 100 kilometer",
        "Maksimal 40 kilometer",
        "Hanya 10 meter saja",
        "Bisa mencapai 1.000 kilometer melintasi benua"
      ],
      explanation: "Akibat dispersi modal yang tinggi pada core lebar, sinyal MMF mengalami pelebaran pulsa sehingga jaraknya terbatas di bawah 550 meter pada Gigabit/10G.",
      quickTip: "Jarak efektif Multi-Mode (MMF) terbatas di bawah 550 meter (area lokal/data center)."
    },
    {
      stimulus: "Untuk menghubungkan kota-kota antar-provinsi atau jaringan backbone antar-negara, operator telekomunikasi selalu memilih kabel Single-Mode Fiber.",
      question: "Jarak jangkau transmisi optik Single-Mode Fiber (SMF) dapat mencapai jarak puluhan kilometer tanpa repeater karena...",
      correctText: "Tidak memiliki dispersi modal dan memiliki koefisien atenuasi redaman yang sangat rendah",
      distractors: [
        "Kabelnya dialiri arus listrik penguat 10.000 Volt",
        "Core kabel dilapisi cermin perak murni",
        "Menggunakan kawat tembaga cadangan di dalamnya",
        "Cahayanya tidak pernah memantul sama sekali"
      ],
      explanation: "Karena hanya ada satu mode sinar (single-mode), dispersi modal bernilai nol. Redaman silika pada 1550 nm sangat rendah (~0.2 dB/km), memungkinkan jarak 40-80 km.",
      quickTip: "SMF dipakai jarak jauh (puluhan km) karena bebas dispersi modal & redaman sangat kecil."
    },
    {
      stimulus: "Tingkat redaman (atenuasi) pada serat optik diukur dalam satuan decibel per kilometer (dB/km).",
      question: "Nilai rata-rata redaman kabel Single-Mode Fiber pada panjang gelombang 1550 nm adalah sekitar...",
      correctText: "0,20 dB/km",
      distractors: [
        "3,0 dB/km",
        "10,0 dB/km",
        "0,0001 dB/km",
        "25,0 dB/km"
      ],
      explanation: "Pada jendela ketiga 1550 nm, redaman silika berada pada titik terendah teoritisnya, yaitu sekitar 0.18 hingga 0.22 dB/km.",
      quickTip: "Redaman SMF pada 1550 nm = sekitar 0.20 dB/km (redaman paling minimal)."
    },
    {
      stimulus: "Pada panjang gelombang 1310 nm, kabel Single-Mode Fiber memiliki nilai redaman sedikit lebih tinggi dibanding pada 1550 nm.",
      question: "Nilai rata-rata redaman kabel Single-Mode Fiber pada panjang gelombang 1310 nm adalah sekitar...",
      correctText: "0,35 dB/km",
      distractors: [
        "0,05 dB/km",
        "2,50 dB/km",
        "5,00 dB/km",
        "12,0 dB/km"
      ],
      explanation: "Pada jendela kedua 1310 nm, redaman rata-rata SMF adalah sekitar 0.33 hingga 0.38 dB/km, dengan keunggulan dispersi kromatik mendekati nol.",
      quickTip: "Redaman SMF pada 1310 nm = sekitar 0.35 dB/km."
    },
    {
      stimulus: "Konektor fiber optik jenis SC (Subscriber Connector / Standard Connector) banyak digunakan pada perangkat ODF dan OLT jaringan FTTH.",
      question: "Karakteristik mekanisme penguncian dan bentuk fisik konektor SC adalah...",
      correctText: "Bentuk penampang persegi (kotak) dengan mekanisme dorong-tarik (push-pull lock)",
      distractors: [
        "Bentuk silinder bundar dengan sistem ulir putar baut",
        "Bentuk bayonet putar setengah lingkaran mirip konektor BNC",
        "Bentuk kecil persegi panjang mirip soket USB flashdisk",
        "Bentuk pipih segitiga dengan klip penjepit"
      ],
      explanation: "Konektor SC memiliki housing plastik persegi berukuran 2.5 mm ferrule dengan mekanisme push-pull yang cepat dan presisi saat dicolokkan.",
      quickTip: "Konektor SC = Berbentuk kotak / persegi, mekanisme push-pull."
    },
    {
      stimulus: "Konektor optik LC (Lucent Connector) berukuran kecil (Small Form Factor) sangat mendominasi perangkat switch data center dan modul transceiver SFP/SFP+.",
      question: "Karakteristik fisik dari konektor fiber optik tipe LC adalah...",
      correctText: "Ukuran ferrule kecil 1,25 mm dengan klip pengunci mirip konektor RJ-45",
      distractors: [
        "Menggunakan sistem pengunci baut ulir logam 5 mm",
        "Memiliki pengait bayonet putar setengah putaran",
        "Bentuk bulat besar dengan ferrule keramik 3 mm",
        "Hanya dapat digunakan untuk kabel tembaga"
      ],
      explanation: "Konektor LC dirancang dengan ferrule kompak 1.25 mm dan tab kait penekan pengunci mirip RJ-45, sangat hemat ruang pada panel switch berdensitas tinggi.",
      quickTip: "Konektor LC = Ukuran mini (1.25 mm ferrule), ada klip pengait mirip RJ-45 (pada modul SFP)."
    },
    {
      stimulus: "Konektor tipe FC (Ferrule Connector / Fiber Channel) sering ditemukan pada instrumen alat ukur OTDR dan OPM laboratorium.",
      question: "Karakteristik mekanisme penguncian konektor optik tipe FC adalah...",
      correctText: "Bodi logam bundar dengan sistem pengencang ulir putar (screw-on threaded metal body)",
      distractors: [
        "Plastik kotak dengan sistem dorong tarik",
        "Klip plastik fleksibel kecil",
        "Magnet tempel tanpa kunci mekanik",
        "Pengikat kawat solder permanen"
      ],
      explanation: "Konektor FC memiliki bodi logam silindris yang dikencangkan dengan cara diputar (screw threaded), sangat kokoh dan stabil terhadap getaran.",
      quickTip: "Konektor FC = Bodi logam bulat dengan pengunci ulir putar (screw thread)."
    },
    {
      stimulus: "Konektor ST (Straight Tip) adalah salah satu jenis konektor optik generasi awal yang banyak digunakan pada instalasi jaringan kampus lawas.",
      question: "Mekanisme penguncian khas yang digunakan oleh konektor ST adalah...",
      correctText: "Mekanisme bayonet putar setengah lingkaran (twist-lock bayonet mount)",
      distractors: [
        "Mekanisme push-pull kotak",
        "Mekanisme ulir baut panjang",
        "Mekanisme magnetik snap",
        "Mekanisme kait geser ganda"
      ],
      explanation: "Konektor ST berbentuk silinder dengan mekanisme kunci bayonet BNC-style (dorong lalu putar seperempat putaran untuk mengunci).",
      quickTip: "Konektor ST = Bulat dengan pengunci bayonet putar (BNC style)."
    },
    {
      stimulus: "Ujung keramik (ferrule) konektor serat optik dipoles dengan tingkat kelengkungan dan sudut tertentu untuk meminimalkan pantulan cahaya balik (back reflection).",
      question: "Dua tipe pemolesan ferrule yang paling umum digunakan pada jaringan FTTH dan telekomunikasi adalah...",
      correctText: "UPC (Ultra Physical Contact) dan APC (Angled Physical Contact)",
      distractors: [
        "STP (Shielded Twisted) dan UTP (Unshielded Twisted)",
        "FTP (Foiled Twisted) dan HTTP (Hypertext Transfer)",
        "BNC (Bayonet Neill) dan SMA (SubMiniature A)",
        "VGA (Video Graphics) dan HDMI (High Definition)"
      ],
      explanation: "UPC memiliki ujung ferrule bulat rata dengan return loss -50 dB. APC dipoles miring dengan sudut 8 derajat dengan return loss luar biasa -60 dB.",
      quickTip: "Dua tipe polesan ferrule konektor: UPC (rata/biru) dan APC (miring/hijau)."
    },
    {
      stimulus: "Warna bodi konektor optik menjadi penanda visual internasional untuk membedakan tipe pemolesan ferrule.",
      question: "Warna standar pada bodi konektor dan boot untuk tipe pemolesan UPC (Ultra Physical Contact) adalah...",
      correctText: "Biru (Blue)",
      distractors: [
        "Hijau (Green)",
        "Merah (Red)",
        "Kuning (Yellow)",
        "Hitam (Black)"
      ],
      explanation: "Konektor UPC (Ultra Physical Contact) ditandai dengan bodi berwarna biru (contoh: SC/UPC, LC/UPC).",
      quickTip: "Konektor tipe UPC berwarna Biru."
    },
    {
      stimulus: "Konektor dengan tipe pemolesan APC (Angled Physical Contact) memiliki sudut kemiringan 8 derajat pada permukaan ferrule-nya.",
      question: "Warna standar internasional untuk konektor tipe pemolesan APC adalah...",
      correctText: "Hijau (Green)",
      distractors: [
        "Biru (Blue)",
        "Kuning (Yellow)",
        "Putih (White)",
        "Oranye (Orange)"
      ],
      explanation: "Konektor APC selalu berwarna hijau (contoh: SC/APC pada drop cable dan ODP FTTH) untuk mencegah tertukar dengan konektor UPC.",
      quickTip: "Konektor tipe APC berwarna Hijau."
    },
    {
      stimulus: "Konektor APC (Angled Physical Contact) memiliki ujung ferrule miring 8 derajat yang memantulkan cahaya pantul keluar ke arah cladding.",
      question: "Keunggulan utama pemolesan APC dibandingkan UPC yang membuatnya wajib digunakan pada sinyal RF Video TV Kabel dan sistem GPON adalah...",
      correctText: "Nilai Optical Return Loss (ORL) yang jauh lebih baik (mencapai -60 dB atau lebih tinggi), sehingga hampir tidak ada pantulan balik ke pemancar",
      distractors: [
        "Kabel tidak perlu disambung menggunakan alat las optik",
        "Harganya seratus kali lebih murah daripada konektor biasa",
        "Bisa langsung dihubungkan ke soket listrik stopkontak dinding",
        "Menghilangkan kebutuhan kabel pelindung luar"
      ],
      explanation: "Sudut 8 derajat pada APC mengarahkan pantulan cahaya langsung ke dinding cladding sehingga tidak kembali memantul ke pemancar laser (Return Loss > 60 dB).",
      quickTip: "Konektor APC (Hijau) unggul dalam meminimalkan pantulan balik (Return Loss > 60 dB)."
    },
    {
      stimulus: "Seorang teknisi pemula mencoba menancapkan konektor patch cord SC/APC (hijau) langsung ke port adapter SC/UPC (biru) pada perangkat converter.",
      question: "Konsekuensi teknis yang terjadi jika konektor APC dihubungkan paksa dengan konektor UPC adalah...",
      correctText: "Terjadi celah udara (air gap) yang menimbulkan redaman insertion loss sangat tinggi dan berisiko menggores merusak permukaan ferrule",
      distractors: [
        "Konektor akan langsung menyatu meleleh menjadi satu bagian",
        "Sinyal internet akan otomatis naik menjadi dua kali lipat",
        "Perangkat converter langsung terbakar mengeluarkan asap",
        "Tidak ada dampak sama sekali karena semua konektor optik identik"
      ],
      explanation: "Permukaan ferrule miring 8 derajat (APC) jika bertemu permukaan bulat rata (UPC) tidak akan menempel presisi, menyebabkan air gap, redaman tinggi, dan kerusakan fisik ferrule.",
      quickTip: "Jangan mencampur konektor Hijau (APC) dan Biru (UPC); redaman tinggi dan ferrule rusak!"
    },
    {
      stimulus: "Dalam terminologi kabel patch cord fiber optik, terdapat notasi seperti SC-LC SMF Duplex 3M.",
      question: "Arti dari istilah Duplex pada spesifikasi kabel patch cord tersebut adalah...",
      correctText: "Kabel terdiri dari dua utas serat optik terpisah (satu jalur transmit / TX dan satu jalur receive / RX)",
      distractors: [
        "Kabel hanya memiliki satu helai serat optik tunggal",
        "Kabel memiliki dua lapis pelindung baja tahan peluru",
        "Kabel dapat digunakan dua kali saja lalu harus dibuang",
        "Kabel memiliki panjang ganda melebihi standar"
      ],
      explanation: "Patch cord Duplex terdiri dari sepasang kabel optik yang digabung berdampingan (zipcord) untuk menyediakan jalur komunikasi dua arah simultan (TX dan RX).",
      quickTip: "Simplex = 1 helai kabel; Duplex = 2 helai kabel (jalur TX dan RX)."
    }
  ],
  mcma: [
    {
      stimulus: "Karakteristik antara Single-Mode Fiber (SMF) dan Multi-Mode Fiber (MMF) memiliki perbedaan mendasar.",
      question: "Manakah pernyataan yang BENAR mengenai perbandingan karakteristik SMF dan MMF? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Diameter core SMF (sekitar 9 µm) jauh lebih kecil daripada diameter core MMF (50/62.5 µm)", isCorrect: true },
        { text: "SMF menggunakan sumber cahaya Laser Dioda, sedangkan MMF umumnya menggunakan LED atau VCSEL", isCorrect: true },
        { text: "SMF dirancang untuk transmisi jarak jauh puluhan kilometer karena tidak mengalami dispersi modal", isCorrect: true },
        { text: "Jaket patch cord kabel SMF standar berwarna oranye terang", isCorrect: false },
        { text: "MMF memiliki jarak jangkau hingga 100 kilometer tanpa menggunakan repeater", isCorrect: false }
      ],
      explanation: "SMF memiliki core kecil (9 µm), memakai laser, dan bebas dispersi modal untuk jarak jauh. Jaket SMF berwarna kuning (bukan oranye). Jarak MMF terbatas di bawah 550m.",
      quickTip: "SMF: Core 9 µm, sumber laser, jarak jauh, jaket kuning."
    },
    {
      stimulus: "Teknisi jaringan harus mampu mengenali berbagai jenis konektor serat optik di ruang data center.",
      question: "Manakah yang TERMASUK jenis konektor fisik kabel serat optik berstandar industri? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "SC (Subscriber Connector - bentuk kotak dorong-tarik)", isCorrect: true },
        { text: "LC (Lucent Connector - bentuk mini untuk port SFP)", isCorrect: true },
        { text: "FC (Fiber Connector - bentuk silinder logam berulir)", isCorrect: true },
        { text: "RJ-45 (Registered Jack 8P8C untuk kabel tembaga LAN)", isCorrect: false },
        { text: "BNC 50 Ohm (Bayonet Neill-Concelman untuk kabel coaxial)", isCorrect: false }
      ],
      explanation: "SC, LC, dan FC adalah konektor standar fiber optik. RJ-45 adalah konektor kabel tembaga UTP, dan BNC adalah konektor kabel coaxial.",
      quickTip: "Konektor optik utama: SC, LC, FC, ST."
    },
    {
      stimulus: "Tipe pemolesan ferrule konektor optik menentukan besarnya daya pantulan cahaya balik (optical return loss).",
      question: "Manakah pernyataan yang BENAR mengenai konektor UPC dan APC? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Konektor tipe UPC ditandai dengan bodi berwarna biru", isCorrect: true },
        { text: "Konektor tipe APC memiliki sudut ferrule miring 8 derajat dan ditandai bodi berwarna hijau", isCorrect: true },
        { text: "Konektor UPC dan APC boleh ditancapkan langsung satu sama lain tanpa adaptor khusus", isCorrect: false },
        { text: "Konektor APC memiliki tingkat pantulan balik (return loss) yang jauh lebih buruk daripada UPC", isCorrect: false },
        { text: "Konektor APC selalu berwarna oranye dan hanya digunakan pada kabel multi-mode", isCorrect: false }
      ],
      explanation: "UPC berwarna biru dengan ferrule bulat rata. APC berwarna hijau dengan ferrule miring 8 derajat yang menghasilkan return loss sangat baik (> 60 dB). Keduanya tidak boleh digabung langsung.",
      quickTip: "UPC = Biru (rata); APC = Hijau (miring 8 derajat)."
    },
    {
      stimulus: "Parameter atenuasi (redaman) serat optik bervariasi bergantung pada panjang gelombang operasional transmisi.",
      question: "Manakah nilai atenuasi serat optik Single-Mode standar yang TEPAT di lapangan? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Redaman pada panjang gelombang 1310 nm adalah sekitar 0.35 dB/km", isCorrect: true },
        { text: "Redaman pada panjang gelombang 1550 nm adalah sekitar 0.20 dB/km (paling rendah)", isCorrect: true },
        { text: "Redaman pada panjang gelombang 1550 nm mencapai 15 dB per meter", isCorrect: false },
        { text: "Redaman serat optik Single-Mode selalu bernilai tepat 0 dB/km (tanpa rugi daya)", isCorrect: false },
        { text: "Redaman kabel fiber optik semakin mengecil jika kabel ditekuk patah", isCorrect: false }
      ],
      explanation: "Atenuasi standar SMF (G.652D) adalah ~0.35 dB/km pada 1310 nm dan ~0.20 dB/km pada 1550 nm.",
      quickTip: "Redaman SMF: 1310 nm = 0.35 dB/km; 1550 nm = 0.20 dB/km."
    },
    {
      stimulus: "Pada perancangan jaringan serat optik FTTH (Fiber To The Home), pemilihan komponen pasif sangat menentukan performa redaman total.",
      question: "Manakah komponen dan konfigurasi yang TEPAT digunakan pada instalasi FTTH modern? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menggunakan kabel drop fiber optik jenis Single-Mode (G.657 tahan tekukan)", isCorrect: true },
        { text: "Menggunakan konektor SC/APC (hijau) pada port ODP dan roset pelanggan", isCorrect: true },
        { text: "Menghitung total optical link budget agar daya terima (Rx Power) di ONT berada dalam batas aman", isCorrect: true },
        { text: "Menggunakan kabel UTP Cat5e untuk bentangan outdoor antar-tiang sejauh 20 kilometer", isCorrect: false },
        { text: "Memasang konektor SC/UPC (biru) langsung ke adapter SC/APC (hijau) tanpa konverter", isCorrect: false }
      ],
      explanation: "FTTH memanfaatkan kabel Single-Mode G.657 bend-insensitive, konektor SC/APC hijau (return loss tinggi untuk video/RF), dan perhitungan optical link budget yang cermat.",
      quickTip: "FTTH memakai SMF G.657, konektor SC/APC (hijau), dan perhitungan link budget teliti."
    }
  ],
  tf: [
    {
      stimulus: "Karakteristik fisik kabel serat optik Single-Mode vs Multi-Mode.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai SMF dan MMF!",
      statements: [
        { text: "Single-Mode Fiber memiliki diameter inti (core) lebih kecil dibanding Multi-Mode Fiber.", correct: "B" },
        { text: "Kabel patch cord Single-Mode standar dapat dibedakan secara visual dari jaketnya yang berwarna kuning.", correct: "B" },
        { text: "Multi-Mode Fiber memiliki jarak jangkau transmisi yang lebih jauh daripada Single-Mode Fiber.", correct: "S" }
      ],
      explanation: "Single-Mode Fiber memiliki jarak jangkau puluhan kilometer, jauh melampaui Multi-Mode Fiber yang terbatas hanya beberapa ratus meter.",
      quickTip: "SMF memiliki jarak jangkau jauh (puluhan km); MMF hanya untuk jarak pendek (<550m)."
    },
    {
      stimulus: "Karakteristik panjang gelombang dan atenuasi pada serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang redaman optik!",
      statements: [
        { text: "Redaman pada panjang gelombang 1550 nm lebih rendah daripada redaman pada 1310 nm.", correct: "B" },
        { text: "Pada serat optik silika, jendela 1550 nm sangat ideal digunakan untuk transmisi jaringan backbone jarak jauh.", correct: "B" },
        { text: "Nilai redaman kabel serat optik dinyatakan dalam satuan Megawatt per meter persegi.", correct: "S" }
      ],
      explanation: "Nilai redaman (atenuasi) kabel serat optik dinyatakan dalam satuan decibel per kilometer (dB/km).",
      quickTip: "Satuan redaman fiber optik adalah dB/km."
    },
    {
      stimulus: "Konektor serat optik tipe SC dan LC pada perangkat jaringan.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang konektor optik!",
      statements: [
        { text: "Konektor tipe SC memiliki bentuk bodi persegi (kotak) dengan sistem pengunci push-pull.", correct: "B" },
        { text: "Konektor tipe LC berukuran kecil dan banyak digunakan pada modul transceiver SFP switch.", correct: "B" },
        { text: "Konektor LC dan SC memiliki ukuran ferrule keramik yang sama persis sehingga dapat saling bertukar tanpa adapter.", correct: "S" }
      ],
      explanation: "Konektor SC memiliki ferrule 2.5 mm, sedangkan LC memiliki ferrule 1.25 mm. Keduanya tidak dapat saling ditancapkan tanpa adapter konverter.",
      quickTip: "Ferrule SC = 2.5 mm; Ferrule LC = 1.25 mm (berbeda ukuran)."
    },
    {
      stimulus: "Pembedaan konektor tipe pemolesan UPC dan APC.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai kode warna ferrule!",
      statements: [
        { text: "Konektor tipe UPC diberi kode warna biru pada bodinya.", correct: "B" },
        { text: "Konektor tipe APC diberi kode warna hijau dan memiliki ujung ferrule dengan sudut kemiringan 8 derajat.", correct: "B" },
        { text: "Konektor APC dan UPC dapat ditancapkan bersamaan tanpa menimbulkan redaman tambahan.", correct: "S" }
      ],
      explanation: "Menyambungkan konektor APC dan UPC menimbulkan air gap besar yang menghasilkan redaman sangat tinggi dan dapat merusak permukaan ferrule.",
      quickTip: "Konektor Biru (UPC) dan Hijau (APC) tidak boleh dipasangkan langsung."
    },
    {
      stimulus: "Penggunaan serat optik pada infrastruktur data center modern.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang instalasi data center!",
      statements: [
        { text: "Kabel Multi-Mode tipe OM3 dan OM4 berjaket warna Aqua banyak digunakan untuk interkoneksi 10G/40G jarak pendek antar-rak server.", correct: "B" },
        { text: "Patch cord Duplex memiliki dua helai serat optik yang dipadukan untuk transmisi data kirim (TX) dan terima (RX).", correct: "B" },
        { text: "Data center skala besar saat ini sudah meninggalkan fiber optik dan beralih sepenuhnya ke kabel telepon tembaga RJ-11.", correct: "S" }
      ],
      explanation: "Data center modern sangat bergantung pada fiber optik berkecepatan tinggi (10G, 40G, 100G, 400G); kabel RJ-11 adalah kabel telepon analog lawas.",
      quickTip: "Data center memanfaatkan fiber optik OM3/OM4/Single-Mode berdensitas tinggi."
    }
  ]
};

module.exports = {
  s08,
  s09,
  s10
};
