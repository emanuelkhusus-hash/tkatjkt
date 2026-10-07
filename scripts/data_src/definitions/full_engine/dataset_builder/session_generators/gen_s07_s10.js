// scripts/data_src/definitions/full_engine/dataset_builder/session_generators/gen_s07_s10.js
// Sesi 7 s.d. Sesi 10 (Media Transmisi Tembaga, UTP, Standar 568A/B, Fiber Optik Dasar, SMF vs MMF)
// 4 Sesi x 30 Soal = 120 Soal Unik

const gen_s07 = {
  sessionId: "s07",
  pg: [
    {
      stimulus: "Kabel Twisted Pair (UTP) banyak digunakan pada instalasi Local Area Network (LAN). Di dalamnya terdapat 4 pasang kawat tembaga yang saling dipelintir (twisted).",
      question: "Tujuan fisis utama dari teknik pemelintiran (twisting) pada pasangan kawat kabel UTP adalah...",
      correctText: "Membatalkan interferensi elektromagnetik dan mengurangi crosstalk (derau sinyal antar-kabel)",
      distractors: ["Agar kabel terlihat lebih artistik dan fleksibel", "Membuat kabel tahan terhadap air hujan lebat", "Meningkatkan daya tahan terhadap gigitan rayap", "Mengurangi pemakaian bahan tembaga pabrikan"],
      explanation: "Pemelintiran kawat menciptakan pembatalan interferensi fase (cancellation effect) yang mereduksi crosstalk (NEXT/FEXT) dan derau elektromagnetik luar.",
      quickTip: "Pemelintiran (twisting) kawat UTP berfungsi mereduksi crosstalk dan induksi elektromagnetik (EMI)."
    },
    {
      stimulus: "Standar industri IEEE 802.3 dan TIA/EIA 568 menetapkan batas panjang maksimal bentangan horizontal kabel twisted pair tembaga.",
      question: "Batas panjang maksimal bentangan kabel tembaga (Channel Link) dari switch ke workstation tanpa penguat sinyal adalah...",
      correctText: "Maksimal 100 meter (90 meter kabel solid permanen + 10 meter kabel patch cord fleksibel)",
      distractors: ["Maksimal 500 meter", "Maksimal 1.000 meter (1 km)", "Maksimal 25 meter saja", "Maksimal 2.000 meter"],
      explanation: "Batas Channel Link UTP adalah 100m (90m horizontal solid core + 10m total stranded patch cord) untuk menjaga batas toleransi atenuasi sinyal.",
      quickTip: "Batas panjang bentangan kabel tembaga UTP = 100 Meter."
    },
    {
      stimulus: "Kabel twisted pair kategori Cat6 dirancang memiliki performa lebih tinggi dibandingkan pendahulunya Cat5e.",
      question: "Karakteristik spesifikasi bandwidth frekuensi operasional standar pada kabel UTP Cat6 adalah...",
      correctText: "Mencapai 250 MHz dan mendukung kecepatan data hingga 10 Gbps pada jarak terbatas (hingga 37-55 meter)",
      distractors: ["Hanya mencapai 16 MHz untuk kecepatan 10 Mbps", "Mencapai 1.000 GHz untuk sinar laser", "Hanya mencapai 100 kHz untuk telegraf", "Mencapai 500 Terahertz"],
      explanation: "Cat5e memiliki bandwidth 100 MHz (1 Gbps), sedangkan Cat6 memiliki bandwidth 250 MHz dan mendukung 10GBASE-T pada jarak pendek.",
      quickTip: "Cat6 = Bandwidth 250 MHz, kecepatan hingga 10 Gbps jarak pendek."
    },
    {
      stimulus: "Di lingkungan pabrik dengan mesin industri bertegangan tinggi yang memancarkan derau elektromagnetik kuat.",
      question: "Jenis kabel twisted pair berpelindung yang memiliki foil aluminium pembungkus tiap pasangan kawat dan anyaman kawat luar adalah...",
      correctText: "S/FTP (Shielded Foiled Twisted Pair) atau STP",
      distractors: ["UTP (Unshielded Twisted Pair)", "Kabel telepon pipih 2 kawat", "Kabel pita kelabu komputer lama", "Kabel speaker audio tipis"],
      explanation: "S/FTP menggunakan pelindung foil pada setiap pasang kawat dan anyaman logam terluar (braided shield) untuk perlindungan maksimal dari EMI industri.",
      quickTip: "Kabel tahan derau elektromagnetik pabrik = STP / S/FTP (Shielded)."
    },
    {
      stimulus: "Pada penampang kabel UTP Cat6, sering ditemukan struktur plastik berbentuk tanda tambah (+) di bagian tengah di antara 4 pasangan kawat.",
      question: "Fungsi dari struktur plastik pemisah (Cross Separator / Spline) tersebut adalah...",
      correctText: "Mempertahankan pemisahan fisik antar-pasangan kawat untuk meminimalkan crosstalk internal (Near-End Crosstalk / NEXT)",
      distractors: ["Sebagai sumbu kompor minyak darurat", "Untuk mengalirkan arus listrik cadangan", "Sebagai tempat menyuntikkan lem perekat", "Hanya sebagai pengisi ruang kosong tanpa fungsi"],
      explanation: "Spline menjaga jarak fisik konstan antar-pasangan kawat sehingga secara drastis mengurangi interferensi silang (NEXT).",
      quickTip: "Spline (+) pada Cat6 berfungsi memisahkan pasangan kawat untuk mengurangi NEXT."
    },
    {
      stimulus: "Fenomena pelemahan kekuatan amplitudo sinyal listrik saat merambat sepanjang kabel tembaga disebut...",
      question: "Istilah teknis untuk penurunan kekuatan sinyal akibat resistansi tembaga tersebut adalah...",
      correctText: "Atenuasi (Attenuation / Insertion Loss)",
      distractors: ["Amplifikasi Sinyal", "Modulasi Digital", "Refraksi Optik", "Resonansi Bunyi"],
      explanation: "Atenuasi adalah penurunan daya sinyal listrik berbanding lurus dengan panjang kabel yang dilalui.",
      quickTip: "Pelemahan daya sinyal sepanjang kabel = Atenuasi."
    },
    {
      stimulus: "Konektor modular standar yang digunakan untuk mengakhiri (terminasi) kabel twisted pair 8 kawat pada kartu jaringan Ethernet adalah...",
      question: "Nama tipe konektor modular 8 posisi 8 kontak (8P8C) tersebut adalah...",
      correctText: "Konektor RJ-45",
      distractors: ["Konektor RJ-11 (Telepon 4-pin)", "Konektor BNC (Coaxial)", "Konektor HDMI (Video)", "Konektor USB Type-C"],
      explanation: "Konektor RJ-45 (Registered Jack 45) adalah konektor standar 8P8C untuk kabel jaringan Ethernet.",
      quickTip: "Konektor modular kabel LAN 8-pin = RJ-45."
    },
    {
      stimulus: "Kabel UTP yang ditarik secara permanen di dalam dinding atau pipa ducting gedung biasanya memiliki inti konduktor kawat tunggal padat.",
      question: "Tipe konduktor tembaga padat untuk instalasi permanen dinding tersebut dinamakan...",
      correctText: "Solid Core Conductor Cable",
      distractors: ["Stranded Cable (Serabut Lentur)", "Liquid Core Cable (Cairan)", "Optic Hollow Cable (Kosong)", "Carbon Powder Cable (Bubuk)"],
      explanation: "Solid core memiliki resistansi lebih rendah dan performa jarak jauh lebih baik untuk kabel instalasi permanen di dinding/plafon.",
      quickTip: "Kabel instalasi permanen dinding/plafon = Solid Core Cable."
    },
    {
      stimulus: "Sebaliknya, kabel patch cord pendek (1-3 meter) yang menghubungkan komputer ke stop kontak dinding (outlet) sering ditekuk dan digerakkan.",
      question: "Tipe konduktor yang tepat untuk kabel patch cord fleksibel tersebut adalah...",
      correctText: "Stranded Conductor Cable (Kawat Serabut Fleksibel)",
      distractors: ["Kawat baja tunggal kaku", "Pipa aluminium tebal", "Kawat tembaga solid getas", "Batang besi cor"],
      explanation: "Stranded core terdiri dari pilinan kawat tembaga serabut halus sehingga sangat fleksibel dan tahan terhadap tekukan berulang.",
      quickTip: "Patch cord fleksibel yang sering ditekuk = Stranded Cable (Serabut)."
    },
    {
      stimulus: "Parameter pengujian kabel yang mengukur perbedaan waktu tiba (time difference) sinyal antara pasangan kawat tercepat dan terlambat disebut...",
      question: "Nama parameter perbedaan waktu rambat sinyal tersebut adalah...",
      correctText: "Propagation Delay Skew (Delay Skew)",
      distractors: ["Bit Error Rate", "Return Loss", "Resistance Ohm", "Capacitance Farad"],
      explanation: "Delay skew timbul karena panjang pelintiran tiap pasang kawat sedikit berbeda sehingga waktu rambat sinyal memiliki selisih waktu tiba.",
      quickTip: "Selisih waktu rambat antar pasangan kawat = Delay Skew."
    },
    {
      stimulus: "Kabel jaringan Cat6a (Augmented) dikembangkan untuk menjamin transmisi kecepatan 10 Gigabit Ethernet (10GBASE-T).",
      question: "Jarak maksimal transmisi 10 Gbps penuh yang didukung oleh kabel Cat6a adalah...",
      correctText: "100 meter penuh dengan bandwidth operasional hingga 500 MHz",
      distractors: ["Hanya 10 meter", "500 meter", "1 kilometer", "15 meter saja"],
      explanation: "Cat6a beroperasi pada frekuensi 500 MHz dan mampu membawa trafik 10 Gbps hingga jarak 100 meter penuh tanpa degradasi.",
      quickTip: "Cat6a = 500 MHz, mendukung 10 Gbps hingga 100 meter penuh."
    },
    {
      stimulus: "Gangguan interferensi yang ditimbulkan oleh sinyal kabel jaringan tetangga yang berada dalam satu bundel kabel yang sama dinamakan...",
      question: "Istilah untuk crosstalk antar-kabel bersebelahan dalam bundel pipa tersebut adalah...",
      correctText: "Alien Crosstalk (ANEXT / AFEXT)",
      distractors: ["Thermal Noise", "Cosmic Ray Noise", "Ground Loop", "Harmonic Audio"],
      explanation: "Alien Crosstalk adalah kopling interferensi elektromagnetik dari kabel lain yang berdekatan dalam satu tray/bundel.",
      quickTip: "Interferensi antar-kabel dalam satu bundel = Alien Crosstalk (ANEXT)."
    },
    {
      stimulus: "Kabel jaringan luar ruangan (Outdoor UTP Cable) memerlukan lapisan jaket pelindung khusus yang tahan cuaca ekstrem.",
      question: "Material jaket kabel luar ruangan yang tahan terhadap sinar ultraviolet matahari dan kelembaban tanah adalah...",
      correctText: "Polyethylene (PE) Jacket dengan lapisan pelindung UV dan water-blocking gel/tape",
      distractors: ["PVC tipis dalam ruangan", "Kertas tisu pembungkus", "Karet spons empuk", "Kain katun tipis"],
      explanation: "Jaket PE (Polyethylene) tahan cuaca luar ruangan dan radiasi UV matahari, sedangkan PVC indoor akan retak rapuh jika terpapar matahari.",
      quickTip: "Kabel outdoor wajib jaket PE (Polyethylene) tahan cuaca dan sinar UV."
    },
    {
      stimulus: "Pada pengujian kabel LAN berkecepatan tinggi, diukur rasio sinyal yang dipantulkan kembali ke pengirim akibat ketidakcocokan impedansi (impedance mismatch).",
      question: "Parameter pantulan sinyal balik tersebut dikenal sebagai...",
      correctText: "Return Loss",
      distractors: ["Insertion Loss", "Crosstalk Margin", "Wiremap Continuity", "Resistance Ratio"],
      explanation: "Return Loss mengukur daya sinyal yang memantul kembali akibat diskontinuitas impedansi kabel atau terminasi konektor yang buruk.",
      quickTip: "Daya sinyal yang terpantul balik akibat impedansi = Return Loss."
    },
    {
      stimulus: "Nilai impedansi karakteristik standar untuk seluruh kabel twisted pair jaringan Ethernet (Cat5e/Cat6/Cat6a) adalah...",
      question: "Berapakah nilai impedansi standar kabel jaringan komputer tersebut?",
      correctText: "100 Ohm (toleransi ±15 Ohm)",
      distractors: ["50 Ohm (kabel koaksial tipis radio)", "75 Ohm (kabel antena TV)", "1.000 Ohm", "0 Ohm"],
      explanation: "Standar industri IEEE 802.3 menetapkan kabel balanced twisted pair memiliki impedansi karakteristik nominal 100 Ohm.",
      quickTip: "Impedansi karakteristik standar kabel UTP = 100 Ohm."
    },
    {
      stimulus: "Kabel UTP yang dipasang melintasi ruang sirkulasi udara plafon (Plenum Space) wajib memenuhi standar ketahanan api gedung.",
      question: "Kategori rating jaket kabel yang menghasilkan asap minim dan tidak melepaskan gas beracun saat terbakar adalah...",
      correctText: "CMP (Communications Plenum) / LSZH (Low Smoke Zero Halogen)",
      distractors: ["CMR (Riser biasa)", "CM (General Purpose)", "Flammable Plastic", "Kertas lilin bakar"],
      explanation: "Kabel CMP / LSZH tahan api dan menghasilkan asap sangat rendah tanpa halogen beracun untuk ruang sirkulasi udara darurat.",
      quickTip: "Kabel ruang sirkulasi udara plafon = CMP / LSZH (Low Smoke Zero Halogen)."
    },
    {
      stimulus: "Dalam kabel UTP 4 pasang, setiap pasang kawat diidentifikasi dengan kombinasi warna dasar dan garis putih.",
      question: "Empat warna dasar standar pasangan kawat kabel twisted pair adalah...",
      correctText: "Biru, Orange, Hijau, dan Cokelat",
      distractors: ["Merah, Kuning, Hitam, dan Putih", "Ungu, Emas, Perak, dan Abu-abu", "Pink, Cyan, Magenta, dan Kuning", "Hitam, Cokelat, Merah, dan Oranye"],
      explanation: "4 warna dasar kabel jaringan Ethernet: Biru (Pair 1), Orange (Pair 2), Hijau (Pair 3), dan Cokelat (Pair 4).",
      quickTip: "4 Pasang kawat UTP: Biru, Orange, Hijau, dan Cokelat."
    },
    {
      stimulus: "Teknologi Power over Ethernet (PoE) memungkinkan penyaluran daya listrik DC dan data digital secara bersamaan melalui satu kabel UTP.",
      question: "Standar IEEE resmi untuk PoE dasar (802.3af) dan PoE+ (802.3at) mampu menyalurkan daya hingga...",
      correctText: "Hingga 15.4 Watt (802.3af) dan hingga 30 Watt (802.3at) pada tegangan nominal ~48V DC",
      distractors: ["Hingga 10.000 Watt tegangan AC 220V", "Hanya 0.1 Watt baterai kancing", "100 Kilowatt gardu listrik", "Daya listrik 0 Watt"],
      explanation: "IEEE 802.3af menyalurkan 15.4W dan 802.3at (PoE+) menyalurkan 30W pada tegangan 48V DC untuk access point dan IP camera.",
      quickTip: "PoE 802.3af = 15.4 Watt; PoE+ 802.3at = 30 Watt (48V DC)."
    },
    {
      stimulus: "Pengupasan jaket luar kabel UTP tidak boleh memotong atau menggores tembaga di dalam pasangan kawat.",
      question: "Alat pengupas jaket kabel jaringan yang dapat disetel kedalaman pisaunya secara presisi adalah...",
      correctText: "Rotary Cable Stripper / UTP Stripper Tool",
      distractors: ["Pisau daging dapur tumpul", "Gunting kuku jari", "Palu pemecah batu", "Gergaji kayu"],
      explanation: "Rotary cable stripper mengiris jaket luar tanpa menyentuh atau melukai isolasi kawat tembaga di dalamnya.",
      quickTip: "Alat kupas jaket kabel UTP = Rotary Cable Stripper."
    },
    {
      stimulus: "Penggunaan kabel UTP Cat5e pada jaringan Gigabit Ethernet (1000BASE-T) memanfaatkan seluruh kawat tembaga.",
      question: "Berapa jumlah pasang kawat (pairs) yang aktif mentransmisikan data pada standar 1000BASE-T?",
      correctText: "Seluruh 4 pasang kawat (8 pin) secara simultan dua arah (Full Duplex)",
      distractors: ["Hanya 1 pasang kawat (2 pin)", "Hanya 2 pasang kawat (4 pin)", "Hanya 3 pasang kawat", "Tidak menggunakan kawat sama sekali"],
      explanation: "1000BASE-T (Gigabit) menggunakan seluruh 4 pasang kawat secara dua arah, berbeda dengan Fast Ethernet (100BASE-TX) yang hanya menggunakan 2 pasang.",
      quickTip: "Gigabit Ethernet (1000BASE-T) memakai ke-4 pasang kawat (8 pin) full duplex."
    }
  ],
  mcma: [
    {
      stimulus: "Kabel twisted pair tembaga memiliki variasi konstruksi pelindung (shielding) sesuai kebutuhan medan elektromagnetik.",
      question: "Manakah tipe kabel jaringan di bawah ini yang memiliki lapisan pelindung logam terhadap interferensi elektromagnetik? (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "STP (Shielded Twisted Pair)", isCorrect: true },
        { text: "FTP (Foiled Twisted Pair)", isCorrect: true },
        { text: "S/FTP (Shielded Foiled Twisted Pair)", isCorrect: true },
        { text: "UTP (Unshielded Twisted Pair)", isCorrect: false },
        { text: "Flat Ribbon Cable komputer lama", isCorrect: false }
      ],
      explanation: "STP, FTP, dan S/FTP memiliki pelindung logam pembungkus kawat; UTP tidak memiliki pelindung logam (Unshielded).",
      quickTip: "Kabel berpelindung logam: STP, FTP, dan S/FTP."
    },
    {
      stimulus: "Perbandingan spesifikasi teknis antara kabel Cat5e, Cat6, dan Cat6a menentukan kecepatan infrastruktur jaringan gedung.",
      question: "Pernyataan yang BENAR mengenai perbandingan performa kabel twisted pair adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Cat5e memiliki frekuensi operasional 100 MHz dan dirancang untuk 1 Gbps", isCorrect: true },
        { text: "Cat6 memiliki frekuensi operasional 250 MHz dan mendukung 10 Gbps pada jarak terbatas", isCorrect: true },
        { text: "Cat6a memiliki frekuensi 500 MHz dan mendukung 10 Gbps hingga jarak 100 meter penuh", isCorrect: true },
        { text: "Cat5e memiliki kecepatan lebih tinggi daripada Cat6a pada jarak 100 meter", isCorrect: false },
        { text: "Cat6 tidak bisa digunakan untuk koneksi 1 Gbps sama sekali", isCorrect: false }
      ],
      explanation: "Cat5e = 100MHz (1G), Cat6 = 250MHz (10G jarak pendek), Cat6a = 500MHz (10G 100m penuh).",
      quickTip: "Frekuensi: Cat5e (100MHz) < Cat6 (250MHz) < Cat6a (500MHz)."
    },
    {
      stimulus: "Teknologi Power over Ethernet (PoE) memberikan fleksibilitas pemasangan perangkat tanpa tarikan kabel stop kontak terpisah.",
      question: "Perangkat jaringan yang umumnya dapat ditenagai menggunakan kabel UTP melalui teknologi PoE adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Wireless Access Point (WAP)", isCorrect: true },
        { text: "IP Security Camera (CCTV IP)", isCorrect: true },
        { text: "Voice over IP Phone (VoIP Deskphone)", isCorrect: true },
        { text: "Mesin pendingin udara gedung (AC 5 PK)", isCorrect: false },
        { text: "Genset diesel pembangkit listrik", isCorrect: false }
      ],
      explanation: "PoE mentenagai perangkat jaringan berdaya rendah hingga menengah: Access Point, IP Camera, dan VoIP Phone.",
      quickTip: "Perangkat bertenaga PoE: Access Point, IP Camera, dan IP Phone."
    },
    {
      stimulus: "Faktor lingkungan dapat mempengaruhi kualitas transmisi sinyal data pada kabel tembaga.",
      question: "Penyebab utama yang dapat menurunkan performa atau merusak transmisi kabel UTP meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Bentangan kabel melebihi batas 100 meter tanpa repeater atau switch perantara", isCorrect: true },
        { text: "Kabel diletakkan sejajar berhimpitan dengan kabel daya listrik AC tegangan tinggi tanpa jarak bebas", isCorrect: true },
        { text: "Tekukan kabel yang terlalu tajam melampaui batas minimum bending radius", isCorrect: true },
        { text: "Kabel dipasang di dalam pipa conduit plastik yang bersih dan kering", isCorrect: false },
        { text: "Ujung kabel diterminasi rapi dengan konektor RJ-45 berkualitas tinggi", isCorrect: false }
      ],
      explanation: "Panjang > 100m, induksi kabel listrik berhimpitan, dan tekukan tajam merusak karakteristik transmisi kabel UTP.",
      quickTip: "Penyebab degradasi UTP: Jarak > 100m, induksi kabel listrik berhimpitan, tekukan tajam."
    },
    {
      stimulus: "Komponen instalasi kabel terstruktur (Structured Cabling System) di ruang server menggunakan standar industri.",
      question: "Komponen perangkat pasif yang digunakan dalam terminasi kabel tembaga gedung meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Patch Panel 24 / 48 Port di rak server", isCorrect: true },
        { text: "Keystone Jack RJ-45 modular pada stop kontak dinding (Faceplate)", isCorrect: true },
        { text: "Kabel Patch Cord untuk interkoneksi perangkat", isCorrect: true },
        { text: "Antena parabola satelit diameter 3 meter", isCorrect: false },
        { text: "Mesin pelebur kaca laser fusi", isCorrect: false }
      ],
      explanation: "Sistem kabel terstruktur tembaga: Patch Panel, Keystone Jack, Faceplate, dan Patch Cord.",
      quickTip: "Komponen pasif kabel tembaga: Patch Panel, Keystone Jack, dan Patch Cord."
    }
  ],
  tf: [
    {
      stimulus: "Kabel twisted pair tembaga memiliki keterbatasan fisis jarak bentangan transmisi sinyal listrik.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai jarak jangkau kabel UTP!",
      statements: [
        { text: "Batas bentangan kabel tembaga UTP dari switch ke PC adalah 100 meter tanpa bantuan perangkat aktif.", correct: "B" },
        { text: "Kabel UTP Cat6 dapat mentransmisikan data sejauh 10 kilometer tanpa mengalami pelemahan sinyal.", correct: "S" },
        { text: "Jika jarak antar gedung mencapai 500 meter, media kabel serat optik lebih direkomendasikan daripada UTP.", correct: "B" }
      ],
      explanation: "Kabel UTP tembaga terbatas 100 meter; jarak di atas 100 meter wajib menggunakan kabel serat optik atau switch repeater.",
      quickTip: "Kabel UTP maksimal 100 meter; jarak > 100 meter gunakan Fiber Optik."
    },
    {
      stimulus: "Pemelintiran (Twisting) kawat pada kabel UTP memiliki standar rasio putaran per meter yang berbeda untuk tiap pasang.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang struktur pemelintiran kawat!",
      statements: [
        { text: "Tiap pasang kawat (pair) pada kabel Cat6 dipelintir dengan jumlah lilitan per meter yang sengaja dibuat berbeda.", correct: "B" },
        { text: "Perbedaan rasio lilitan antar-pasangan kawat bertujuan mencegah terjadinya crosstalk silang internal.", correct: "B" },
        { text: "Membuka lilitan kawat kabel UTP sepanjang 10 cm sebelum konektor RJ-45 dapat meningkatkan kecepatan transfer data.", correct: "S" }
      ],
      explanation: "Membuka lilitan kabel terlalu panjang merusak cancellation effect dan memicu crosstalk fatal; buka lilitan maksimal 1,3 cm (0.5 inch).",
      quickTip: "Buka lilitan UTP maksimal 1,3 cm; lilitan beda rasio mencegah crosstalk."
    },
    {
      stimulus: "Perlindungan kabel terhadap interferensi elektromagnetik (EMI) di lingkungan industri.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai kabel berpelindung STP/FTP!",
      statements: [
        { text: "Kabel STP wajib memiliki kawat tiris (Drain Wire) yang dihubungkan ke sistem pembumian (grounding) pelindung.", correct: "B" },
        { text: "Kabel STP yang pelindungnya tidak digroundkan dengan benar dapat berfungsi seperti antena penangkap derau.", correct: "B" },
        { text: "Kabel UTP biasa tanpa pelindung lebih kebal terhadap derau motor listrik daripada kabel STP berpelindung.", correct: "S" }
      ],
      explanation: "Kabel berpelindung (STP) wajib dihubungkan ke ground; tanpa grounding, pelindung logam justru bertindak sebagai antena derau.",
      quickTip: "Pelindung kabel STP wajib dihubungkan ke Grounding melalui Drain Wire."
    },
    {
      stimulus: "Teknologi Fast Ethernet (100BASE-TX) dan Gigabit Ethernet (1000BASE-T) memiliki perbedaan penggunaan pin kawat.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang pemanfaatan pin kawat kabel UTP!",
      statements: [
        { text: "Fast Ethernet 100 Mbps hanya menggunakan 2 pasang kawat (Pin 1, 2 untuk Transmit dan Pin 3, 6 untuk Receive).", correct: "B" },
        { text: "Gigabit Ethernet 1 Gbps membutuhkan ke-4 pasang kawat (seluruh 8 pin) untuk beroperasi normal.", correct: "B" },
        { text: "Jika pin 4, 5, 7, atau 8 putus pada kabel LAN, koneksi Gigabit Ethernet akan tetap berjalan pada kecepatan 1 Gbps.", correct: "S" }
      ],
      explanation: "Jika salah satu dari pin 4, 5, 7, 8 putus, kartu jaringan akan turun negosiasi otomatis (downspeed) ke Fast Ethernet 100 Mbps.",
      quickTip: "100 Mbps pakai pin 1, 2, 3, 6; Gigabit butuh seluruh 8 pin aktif."
    },
    {
      stimulus: "Penyusunan kabel horizontal pada sistem pengkabelan terstruktur gedung bertingkat.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai instalasi kabel jaringan gedung!",
      statements: [
        { text: "Kabel instalasi permanen di dalam plafon menggunakan tipe kabel padat (Solid Conductor).", correct: "B" },
        { text: "Kabel patch cord fleksibel (Stranded) dihubungkan dari wallplate ke komputer pengguna.", correct: "B" },
        { text: "Kabel UTP boleh ditarik sekencang-kencangnya hingga kawat tembaganya meregang mengecil tanpa batas beban tarik.", correct: "S" }
      ],
      explanation: "Beban tarik maksimal kabel UTP 4-pair adalah 25 lbs (110 Newton); tarikan berlebih merusak pelintiran dan impedansi tembaga.",
      quickTip: "Beban tarik UTP maksimal 110 Newton (25 lbs) agar tidak meregang rusak."
    }
  ]
};

module.exports = {
  gen_s07
};
