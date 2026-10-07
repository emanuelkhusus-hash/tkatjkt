// scripts/data_src/definitions/banks/bank_s05.js
// Sesi 5: K3 Ketinggian & Gelaran Kabel Udara FTTH
module.exports = {
  sessionId: "s05",
  pg: [
    {
      stimulus: "Sesuai Peraturan Menteri Ketenagakerjaan (Permenaker) No. 9 Tahun 2016, pekerjaan yang dilakukan pada permukaan tanah/lantai dengan perbedaan elevasi tertentu wajib menerapkan standar K3 Bekerja pada Ketinggian.",
      question: "Batas minimum ketinggian elevasi kerja yang mewajibkan penerapan proteksi jatuh sesuai regulasi tersebut adalah...",
      correctText: "Ketinggian 1,8 meter atau lebih di atas permukaan tanah/lantai",
      distractors: ["Ketinggian 10 meter atau lebih", "Ketinggian 50 cm atau lebih", "Ketinggian 20 meter saja", "Ketinggian 100 meter di atas awan"],
      explanation: "Permenaker No. 9/2016 menetapkan batas bekerja pada ketinggian adalah perbedaan elevasi 1,8 meter atau lebih.",
      quickTip: "Batas regulasi K3 Ketinggian = 1,8 meter ke atas."
    },
    {
      stimulus: "Seorang teknisi FTTH hendak memanjat tiang tumpu setinggi 7 meter di pinggir jalan raya untuk memasang Optical Distribution Point (ODP).",
      question: "Perlengkapan Alat Pelindung Diri (APD) penahan jatuh perorangan utama yang wajib dikenakan di tubuh teknisi adalah...",
      correctText: "Full Body Harness lengkap dengan tali penopang (Work Positioning Belt) dan dual lanyard berpengait karabiner",
      distractors: ["Sabuk pinggang kulit harian untuk celana", "Jaket kain tebal biasa", "Kacamata hitam gaya santai", "Rompi kain tanpa pengait tali"],
      explanation: "Full Body Harness menyebarkan gaya hentakan ke paha, dada, dan panggul saat terjatuh; sabuk pinggang biasa dilarang karena dapat mencederai tulang belakang.",
      quickTip: "APD utama ketinggian = Full Body Harness dengan dual lanyard & karabiner."
    },
    {
      stimulus: "Sebelum memanjat tiang, teknisi menempatkan tangga lipat geser (extension ladder) pada permukaan tanah dan menyandarkannya ke tiang telepon.",
      question: "Rasio perbandingan sudut kemiringan penempatan tangga yang aman dan stabil sesuai standar K3 adalah...",
      correctText: "Rasio 4:1 (Untuk setiap 4 meter ketinggian vertikal, jarak dasar tangga berjarak 1 meter dari tiang)",
      distractors: ["Rasio 1:1 (Sudut 45 derajat terlalu landai)", "Rasio 10:1 (Tangga tegak lurus 90 derajat berisiko terjungkal ke belakang)", "Rasio 1:4 (Tangga hampir rata dengan tanah)", "Rasio 20:1 (Tangga menempel rapat vertikal tanpa kemiringan)"],
      explanation: "Rasio 4:1 menghasilkan sudut kemiringan sekitar 75 derajat yang merupakan sudut tumpuan optimal tangga terhadap beban dan gesekan.",
      quickTip: "Sudut tangga aman = Rasio 4:1 (75 derajat)."
    },
    {
      stimulus: "Di area jalan raya yang ramai kendaraan, tiang telepon yang akan dipanjat berada tepat di tepi bahu jalan.",
      question: "Prosedur keselamatan lingkungan kerja publik yang wajib dipasang di sekitar area tangga sebelum teknisi mulai memanjat adalah...",
      correctText: "Memasang kerucut lalu lintas (Traffic Cones), pita pembatas (Barricade Tape), dan rambu peringatan pekerjaan jalan",
      distractors: ["Menutup seluruh jalan tol provinsi tanpa izin", "Membiarkan area terbuka tanpa penanda agar tidak mencolok", "Menyuruh rekan kerja melempar batu ke kendaraan yang lewat", "Menyalakan kembang api di tengah jalan raya"],
      explanation: "Traffic cone dan barikade memberi peringatan visual dini kepada pengemudi kendaraan agar menjaga jarak dari area tangga teknisi.",
      quickTip: "Pengamanan jalan raya: Pasang traffic cone, barricade tape, dan rambu kerja."
    },
    {
      stimulus: "Teknisi mendapati bahwa tiang tumpu telekomunikasi yang akan dipanjat posisinya sangat dekat dengan kabel Saluran Udara Tegangan Rendah (SUTR) PLN 220/380V.",
      question: "Material tangga yang mutlak diwajibkan untuk digunakan teknisi guna mencegah bahaya sengatan listrik induksi adalah...",
      correctText: "Tangga berbahan serat kaca (Fiberglass) yang bersifat isolator listrik",
      distractors: ["Tangga aluminium konduktor murni", "Tangga pipa besi baja galvanis", "Tangga berantai kawat tembaga", "Tangga pelat seng tipis"],
      explanation: "Fiberglass adalah material non-konduktif (isolator) yang tidak menghantarkan arus listrik jika terjadi sentuhan tak sengaja dengan kabel PLN.",
      quickTip: "Kerja dekat kabel listrik = Gunakan tangga Fiberglass (isolator listrik)."
    },
    {
      stimulus: "Helm keselamatan (Safety Helmet) yang digunakan untuk pekerjaan di ketinggian tiang dan menara memiliki spesifikasi khusus.",
      question: "Fitur pada safety helmet yang wajib dikunci rapat di bawah dagu saat memanjat tiang adalah...",
      correctText: "Tali dagu pengikat (Chin Strap) 4 titik agar helm tidak terlepas saat teknisi menengadah atau terjadi benturan",
      distractors: ["Kaca mata renang", "Penutup telinga kedap suara musik", "Topi koboi bertepi lebar", "Kain penutup wajah cadar"],
      explanation: "Chin strap memastikan helm tetap terpasang kokoh melindungi tempurung kepala saat bergerak aktif di ketinggian tiang.",
      quickTip: "Helm ketinggian wajib dilengkapi Chin Strap (tali dagu pengikat kokoh)."
    },
    {
      stimulus: "Saat teknisi berada di puncak tiang setinggi 7 meter dan membutuhkan perkakas tang crimping yang tertinggal di bawah.",
      question: "Metode pemindahan perkakas dari teknisi pendamping (ground crew) ke teknisi di atas tiang yang benar sesuai SOP adalah...",
      correctText: "Menggunakan tas perkakas yang ditarik ke atas menggunakan tali katrol (Handline / Tool Bag)",
      distractors: ["Melemparkan tang besi sekuat tenaga ke arah teknisi di atas tiang", "Menyuruh teknisi di atas tiang melompat turun mengambil tang lalu naik lagi", "Menembakkan perkakas menggunakan ketapel panah", "Menggantungkan tang pada layang-layang"],
      explanation: "Melempar alat ke ketinggian dilarang keras karena risiko meleset dan mencederai kepala; wajib gunakan handline dan tool bag.",
      quickTip: "Kirim perkakas ke atas tiang wajib menggunakan tali katrol (handline) & tool bag."
    },
    {
      stimulus: "Kabel drop optik (Drop Cable Figure-8) ditarik melintasi jalan raya antar-tiang tumpu.",
      question: "Standar jarak bebas minimum (Clearance Height) bentangan kabel telekomunikasi di atas jalan raya umum adalah sekitar...",
      correctText: "Minimal 5,5 hingga 6 meter agar tidak tersangkut kendaraan truk atau bus beratap tinggi",
      distractors: ["Cukup 1,5 meter setinggi dada orang dewasa", "Minimal 50 meter di atas awan", "Dibiarkan menyentuh aspal jalan raya", "Cukup 2 meter setinggi atap mobil sedan pendek"],
      explanation: "Clearance kabel menyeberang jalan raya minimal 5,5 - 6 meter untuk mencegah tersangkut bak truk kontainer atau bus pariwisata.",
      quickTip: "Clearance kabel di atas jalan raya = Minimal 5,5 s.d. 6 meter."
    },
    {
      stimulus: "Sebelum menaiki tangga yang disandarkan pada tiang beton di pinggir jalan raya.",
      question: "Langkah pengikatan tangga (Ladder Tie-Off) yang benar sesuai SOP K3 adalah...",
      correctText: "Mengikat bagian atas dan bawah tangga ke tiang menggunakan tali pengikat (webbing / lashing strap) agar tangga tidak bergeser",
      distractors: ["Membiarkan tangga bersandar bebas tanpa diikat sama sekali", "Mengganjal kaki tangga dengan sandal jepit bekas", "Melumuri tiang dengan minyak pelumas agar licin", "Menempelkan tangga menggunakan permen karet"],
      explanation: "Ladder tie-off mengamankan tangga dari bahaya tergelincir atau terpuntir akibat angin kencang atau gerakan tubuh teknisi.",
      quickTip: "Ladder tie-off = Ikat kuat bagian atas dan bawah tangga ke tiang."
    },
    {
      stimulus: "Saat bekerja di ketinggian tiang, langit tiba-tiba mendung gelap disertai angin kencang dan suara kilat petir menyambar.",
      question: "Keputusan K3 yang wajib diambil seketika oleh tim kerja lapangan adalah...",
      correctText: "Segera menghentikan seluruh pekerjaan, turun dari tiang secara hati-hati, dan mencari tempat perlindungan yang aman",
      distractors: ["Terus memanjat tiang hingga ke ujung paling runcing sambil memegang besi", "Mengibarkan bendera logam tinggi di atas tiang", "Duduk santai di atas tiang sambil menunggu hujan reda", "Menantang petir untuk membuktikan keberanian teknisi"],
      explanation: "Tiang dan kabel di ruang terbuka sangat rentan terhadap sambaran petir langsung dan hempasan angin kencang; wajib segera turun.",
      quickTip: "Cuaca buruk & petir = Hentikan pekerjaan seketika dan segera turun dari tiang."
    },
    {
      stimulus: "Kabel drop optik memiliki kawat baja penegang (Messenger Wire / Steel Wire) di samping serat kacanya pada konstruksi Figure-8.",
      question: "Fungsi kawat baja penegang pada kabel udara drop fiber optik adalah...",
      correctText: "Menahan gaya tarik mekanik bentangan udara agar inti serat kaca di dalamnya tidak meregang dan putus",
      distractors: ["Sebagai penghantar daya listrik 220V ke rumah pelanggan", "Sebagai saluran pembuangan air hujan", "Untuk mendengarkan gelombang siaran radio FM", "Hanya sebagai hiasan agar kabel terlihat tebal"],
      explanation: "Messenger wire menopang beban mekanik bentangan antar-tiang sehingga serat kaca bebas dari beban tarikan (tension-free).",
      quickTip: "Messenger wire figure-8 berfungsi menahan beban tarikan mekanik bentangan kabel udara."
    },
    {
      stimulus: "Klem pengikat kabel drop optik yang dipasang pada tiang tumpu menggunakan penjepit berbentuk baji (wedge clamp).",
      question: "Perangkat aksesoris tiang yang menjepit kawat baja kabel drop ke bracket tiang dikenal sebagai...",
      correctText: "Drop Cable Tension Clamp / Wedge Clamp (Clamp S)",
      distractors: ["Paku payung seng", "Karet gelang elastis", "Isolasi kertas bening", "Kawat bendrat berkarat"],
      explanation: "Tension clamp (Clamp S) menjepit messenger wire secara friksional untuk menahan tarikan kabel drop pada bracket tiang.",
      quickTip: "Aksesoris penarik kabel drop ke tiang = Tension Clamp / Clamp S."
    },
    {
      stimulus: "Teknisi di atas tiang menggunakan lanyard penahan jatuh yang dilengkapi peredam kejut (Energy Absorber).",
      question: "Fungsi utama dari komponen Energy Absorber (Peredam Kejut) pada tali lanyard adalah...",
      correctText: "Menyerap gaya kejut kinetik saat jatuh hingga di bawah 6 kN untuk mencegah cedera patah tulang panggul/tulang belakang",
      distractors: ["Membuat teknisi memantul-mantul seperti mainan trampolin", "Mengubah tali menjadi parasut terbang", "Mengeluarkan suara sirine ambulans otomatis", "Menyimpan daya listrik baterai telepon pintar"],
      explanation: "Energy absorber meredam deselerasi kejut tubuh teknisi di bawah 6 kilonewton (standar OSHA/EN355) agar organ vital tidak remuk.",
      quickTip: "Energy Absorber = Meredam gaya hentakan jatuh di bawah 6 kN."
    },
    {
      stimulus: "Saat bekerja pada tiang, terdapat peran teknisi pembantu yang berdiri di bawah tanah (Ground Crew / Groundman).",
      question: "Peran utama seorang groundman dalam operasional keselamatan K3 di lokasi tiang adalah...",
      correctText: "Mengawasi lalu lintas jalan, memegang dasar tangga, mengamankan zona jatuh, dan siap melakukan respon darurat",
      distractors: ["Membaca novel santai di warung kopi seberang jalan", "Meninggalkan lokasi untuk menonton bioskop", "Memejamkan mata agar tidak melihat teknisi di atas", "Mengemudikan mobil dinas jalan-jalan tanpa tujuan"],
      explanation: "Groundman bertindak sebagai pengawas keselamatan (Safety Watcher), pengendali lalu lintas, dan first responder jika terjadi insiden.",
      quickTip: "Peran Groundman: Pengawas keselamatan zona bawah, penjaga tangga, dan respon darurat."
    },
    {
      stimulus: "Sebelum mengenakan Full Body Harness, teknisi wajib melakukan inspeksi visual pra-pakai (Pre-Use Inspection).",
      question: "Kondisi fisik webbing harness yang mengindikasikan bahwa harness tersebut TIDAK LAYAK pakai dan harus diafkir adalah...",
      correctText: "Terdapat serat webbing yang robek, jahitan utama terburai, atau gesper logam mengalami retak/karat parah",
      distractors: ["Warna tali harness terlihat cerah dan bersih", "Label sertifikasi pabrik masih terpasang rapi", "Jahitan benang terikat rapat dan kuat", "Gesper logam mengunci dengan mulus dan presisi"],
      explanation: "Webbing yang robek atau gesper retak berisiko putus fatal saat menahan beban kejut tubuh manusia; wajib langsung dimusnahkan.",
      quickTip: "Harness afkir: Webbing robek, jahitan terurai, gesper retak/berkarat parah."
    },
    {
      stimulus: "SOP pemasangan ODP (Optical Distribution Point) pada tiang beton mengharuskan penggunaan sabuk plat logam anti-karat.",
      question: "Material sabuk plat logam yang dikencangkan menggunakan alat banding tool pada tiang adalah...",
      correctText: "Stainless Steel Banding Strap dengan buckle pengunci",
      distractors: ["Tali rafia plastik merah", "Lakban kertas cokelat", "Benang jahit pakaian", "Kawat kasa nyamuk"],
      explanation: "Stainless steel strap tahan terhadap cuaca panas dan hujan selama bertahun-tahun tanpa lapuk atau putus di tiang outdoor.",
      quickTip: "Pengikat ODP di tiang beton = Stainless Steel Banding Strap."
    },
    {
      stimulus: "Saat menaiki tangga tiang, teknisi wajib mempertahankan kontak fisik tubuh dengan anak tangga setiap saat.",
      question: "Aturan keselamatan memanjat tangga yang baku dikenal sebagai prinsip...",
      correctText: "Three Points of Contact (Tiga Titik Tumpu: Dua Tangan Satu Kaki atau Dua Kaki Satu Tangan)",
      distractors: ["Zero Point of Contact (Melompat tanpa berpegangan)", "One Point of Contact (Hanya bertumpu pada satu ujung jari)", "Four Limb Flying (Kedua tangan dan kaki lepas bersamaan)", "Sleeping Contact (Memanjat sambil memejamkan mata)"],
      explanation: "Three Points of Contact memastikan tubuh selalu memiliki segitiga tumpuan stabil yang mencegah terpeleset saat bergerak naik/turun.",
      quickTip: "Prinsip memanjat tangga = Three Points of Contact (3 titik tumpu)."
    },
    {
      stimulus: "Ketinggian tiang telekomunikasi di area perumahan residensial umumnya menggunakan tiang besi atau tiang beton prategang.",
      question: "Ukuran standar ketinggian tiang distribusi akses FTTH yang umum digunakan oleh provider telekomunikasi di Indonesia adalah...",
      correctText: "Tiang 7 meter dan tiang 9 meter (dengan kedalaman tanam tanah 1/6 panjang tiang)",
      distractors: ["Tiang 1 meter setinggi meja belajar", "Tiang 100 meter setinggi Monumen Nasional", "Tiang 50 meter setinggi menara transmisi tegangan ekstra tinggi", "Tiang 50 cm seukuran patok tanah pekarangan"],
      explanation: "Tiang akses distribusi FTTH standar memiliki panjang 7m atau 9m, dengan kedalaman tanam tanah minimal 1/6 dari panjang tiang.",
      quickTip: "Tiang distribusi FTTH standar = 7 meter atau 9 meter (tanam 1/6 bagian)."
    },
    {
      stimulus: "Jika terjadi kecelakaan kerja di mana seorang teknisi tergantung pingsan pada harness di atas tiang setelah tersengat listrik kabel penerangan jalan.",
      question: "Sindrom medis berbahaya yang mengancam nyawa korban akibat darah terjebak di tungkai kaki saat tergantung pasif di harness adalah...",
      correctText: "Suspension Trauma (Harness Hang Syndrome)",
      distractors: ["Flu burung musiman", "Demam berdarah dengue", "Sakit gigi berlubang", "Rabun jauh mata"],
      explanation: "Suspension trauma terjadi saat tali harness menekan pembuluh darah vena femoralis paha, memicu penumpukan darah di kaki dan henti jantung dalam 10-15 menit.",
      quickTip: "Bahaya tergantung pasif di harness = Suspension Trauma (harus dievakuasi cepat < 15 menit)."
    },
    {
      stimulus: "Penggunaan sarung tangan kerja saat menarik kabel drop optik di tiang bertujuan melindungi telapak tangan.",
      question: "Karakteristik sarung tangan yang tepat untuk teknisi penarik kabel serat optik adalah...",
      correctText: "Sarung tangan berlapis poliuretan / nitril dengan cengkeraman anti-slip dan tahan abrasi mekanik",
      distractors: ["Sarung tangan plastik tipis pembungkus makanan gorengan", "Sarung tangan wol rajut longgar yang licin", "Sarung tangan besi perang abad pertengahan yang kaku", "Sarung tangan tinju berbusa tebal"],
      explanation: "Sarung tangan nitril/PU memberikan sensitivitas jari yang baik, cengkeraman kuat pada kabel licin, serta melindungi kulit dari luka gesek.",
      quickTip: "Sarung tangan teknisi kabel: Nitril / PU anti-slip dan tahan abrasi."
    }
  ],
  mcma: [
    {
      stimulus: "Pekerjaan penarikan kabel fiber optik di ketinggian tiang pinggir jalan raya memiliki risiko bahaya ganda (jatuh dari ketinggian dan tertabrak kendaraan).",
      question: "Manakah perlengkapan Alat Pelindudng Diri (APD) dan keselamatan kerja yang WAJIB digunakan oleh teknisi tiang? (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Full Body Harness lengkap dengan work positioning lanyard", isCorrect: true },
        { text: "Safety Helmet dengan tali dagu (chin strap) terkunci", isCorrect: true },
        { text: "Rompi keselamatan visibilitas tinggi (High-Visibility Reflective Vest)", isCorrect: true },
        { text: "Sandal jepit santai karet tipis", isCorrect: false },
        { text: "Jas hujan plastik kresek tanpa ventilasi", isCorrect: false }
      ],
      explanation: "Harness, helm dengan chin strap, dan rompi reflektif adalah APD mutlak untuk keselamatan ketinggian dan visibilitas di jalan raya.",
      quickTip: "APD tiang jalan raya: Full Body Harness, Safety Helmet + Chin Strap, Rompi Reflektif."
    },
    {
      stimulus: "Pemilihan tangga kerja untuk pemeliharaan kabel di tiang bersama (Joint Pole) memerlukan evaluasi material yang teliti.",
      question: "Karakteristik tangga yang memenuhi persyaratan keselamatan kerja di dekat jaringan kelistrikan adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Terbuat dari bahan isolator serat kaca (Fiberglass Non-Conductive)", isCorrect: true },
        { text: "Dilengkapi sepatu karet penopang anti-selip (Slip-Resistant Rubber Feet) yang masih tebal", isCorrect: true },
        { text: "Memiliki tali pengikat puncak tangga (Pole Grip Strap) yang mencengkeram lekukan tiang", isCorrect: true },
        { text: "Terbuat dari logam aluminium murni yang menghantarkan arus listrik dengan cepat", isCorrect: false },
        { text: "Memiliki anak tangga yang licin berlumur oli mesin", isCorrect: false }
      ],
      explanation: "Tangga kerja listrik wajib fiberglass non-konduktif, memiliki sepatu karet anti-selip, dan pengikat lekuk tiang (pole grip).",
      quickTip: "Syarat tangga tiang listrik: Fiberglass isolator, sepatu karet anti-selip, pole grip strap."
    },
    {
      stimulus: "Penerapan prosedur pemasangan kerucut lalu lintas (Traffic Cone) di lokasi kerja tiang pinggir jalan raya diatur untuk melindungi pekerja.",
      question: "Fungsi dan tata letak traffic cone di area kerja penggelaran kabel tiang meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Membentuk zona transisi dan penyaluran arus lalu lintas menjauh dari dasar tangga teknisi", isCorrect: true },
        { text: "Memberikan peringatan visual jarak jauh bagi pengendara kendaraan bermotor", isCorrect: true },
        { text: "Melindungi personil groundman dan peralatan kerja dari bahaya tabrakan kendaraan", isCorrect: true },
        { text: "Sebagai tempat membuang puntung rokok dan sampah makanan", isCorrect: false },
        { text: "Sebagai bahan mainan lempar tangkap saat jam kerja", isCorrect: false }
      ],
      explanation: "Traffic cone berfungsi mengarahkan arus lalu lintas menjauh dari tangga, memberi peringatan dini, dan melindungi zona kerja dasar.",
      quickTip: "Fungsi traffic cone: Zona penyalur lalu lintas, peringatan dini visual, lindungi area tangga."
    },
    {
      stimulus: "Teknik menaiki dan menuruni tangga tiang menuntut kedisiplinan gerak fisik tubuh teknisi.",
      question: "Praktek keselamatan yang benar saat menaiki tangga tiang adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Selalu menghadap ke arah tangga saat naik maupun turun", isCorrect: true },
        { text: "Menjaga tiga titik tumpu (Three Points of Contact) pada anak tangga setiap saat", isCorrect: true },
        { text: "Membawa perkakas dalam tas punggung atau kantong pinggang, bukan dipegang di tangan saat memanjat", isCorrect: true },
        { text: "Menaiki tangga sambil membelakangi anak tangga", isCorrect: false },
        { text: "Meluncur cepat turun ke bawah dengan kedua tangan dilepas", isCorrect: false }
      ],
      explanation: "Naik/turun tangga wajib menghadap tangga, menjaga 3 titik tumpu, dan kedua tangan bebas dari membawa beban lepas.",
      quickTip: "Aturan tangga: Hadap tangga, 3 titik kontak, tangan bebas dari beban bawaan."
    },
    {
      stimulus: "Evakuasi korban tergantung di ketinggian menuntut respon cepat sebelum terjadinya fatalitas suspension trauma.",
      question: "Tindakan penyelamatan darurat yang wajib dikuasai tim penolong saat korban tergantung di tiang adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Menghubungi layanan panggilan darurat medis (Ambulans 118/112) seketika", isCorrect: true },
        { text: "Menurunkan korban ke permukaan tanah sesegera mungkin (< 15 menit) menggunakan tali evakuasi", isCorrect: true },
        { text: "Memposisikan korban sadar dalam posisi setengah duduk (W-Position) dan tidak langsung membaringkannya telentang rata", isCorrect: true },
        { text: "Membiarkan korban tergantung hingga esok hari", isCorrect: false },
        { text: "Memotong tali penahan saat korban masih berada 7 meter di atas tanpa penopang bawah", isCorrect: false }
      ],
      explanation: "Evakuasi wajib < 15 menit untuk cegah henti jantung; posisikan setengah duduk (W-position) saat di bawah untuk cegah reflow syndrome.",
      quickTip: "Evakuasi suspension trauma: Turunkan < 15 menit, posisikan setengah duduk (W-position)."
    }
  ],
  tf: [
    {
      stimulus: "Full Body Harness harus dikencangkan dengan pas di tubuh agar dapat berfungsi menahan jatuh secara optimal.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penyetelan Full Body Harness!",
      statements: [
        { text: "Tali paha (leg straps) harus disetel pas sehingga satu telapak tangan rata masih dapat diselipkan di antara tali dan paha.", correct: "B" },
        { text: "Harness boleh dipasang sangat longgar hingga gesper dada berada di bawah pusar.", correct: "S" },
        { text: "D-Ring utama penahan jatuh pada punggung (Dorsal D-Ring) harus berada tepat di antara kedua tulang belikat.", correct: "B" }
      ],
      explanation: "Tali paha diukur pas selebar tangan; Dorsal D-Ring wajib berada tepat di antara kedua tulang belikat.",
      quickTip: "Setelan harness: Tali paha pas satu telapak tangan, Dorsal D-Ring di tengah tulang belikat."
    },
    {
      stimulus: "Penggunaan tangga konduktif logam di dekat tiang listrik dilarang keras oleh standar K3.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai bahaya kelistrikan pada pekerjaan tiang!",
      statements: [
        { text: "Tangga aluminium dapat menghantarkan arus listrik mematikan jika menyentuh kabel listrik kupas PLN.", correct: "B" },
        { text: "Tangga fiberglass aman digunakan di dekat kabel listrik karena material serat kaca tidak menghantarkan listrik.", correct: "B" },
        { text: "Teknisi boleh menyentuh kabel listrik PLN asalkan menggunakan sandal jepit basah.", correct: "S" }
      ],
      explanation: "Aluminium adalah konduktor berbahaya; tangga fiberglass isolator mutlak digunakan dekat instalasi PLN.",
      quickTip: "Aluminium dilarang dekat listrik PLN; fiberglass wajib sebagai isolator."
    },
    {
      stimulus: "Penempatan tangga harus memperhatikan stabilitas tumpuan di permukaan tanah.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai prosedur penempatan tangga kerja!",
      statements: [
        { text: "Tangga tidak boleh diletakkan di atas tanah lunak berlumpur tanpa papan landasan penopang yang rata.", correct: "B" },
        { text: "Ujung atas tangga harus menjulang minimal 1 meter (3 anak tangga) melebihi titik tumpuan pendaratan.", correct: "B" },
        { text: "Mengganjal salah satu kaki tangga yang timpang menggunakan batu bulat licin adalah tindakan yang aman.", correct: "S" }
      ],
      explanation: "Mengganjal kaki tangga dengan batu bulat sangat berbahaya dan memicu tangga roboh; ujung atas tangga harus lebih 1 meter.",
      quickTip: "Tangga stabil: Tanah padat rata, ujung lebih 1 meter, dilarang ganjal dengan batu licin."
    },
    {
      stimulus: "Prinsip kerja di ketinggian mengutamakan pencegahan jatuh aktif (Fall Arrest System).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai sistem proteksi jatuh!",
      statements: [
        { text: "Dual lanyard memungkinkan teknisi tetap terhubung 100% (100% Tie-Off) saat berpindah rintangan di tiang.", correct: "B" },
        { text: "Karabiner pengait boleh dibiarkan terbuka kuncinya tanpa diputar sekrup pengamannya.", correct: "S" },
        { text: "Titik jangkar pengait (Anchor Point) harus mampu menahan beban statis minimal 15 kN (sekitar 1,5 ton).", correct: "B" }
      ],
      explanation: "Dual lanyard menjamin 100% tie-off (selalu ada 1 pengait terpasang); karabiner wajib terkunci sekrupnya; anchor point minimal 15 kN.",
      quickTip: "100% Tie-Off dengan dual lanyard; karabiner wajib terkunci; jangkar beban >= 15 kN."
    },
    {
      stimulus: "Kondisi cuaca merupakan faktor kritis dalam keselamatan pekerjaan tiang telekomunikasi.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai batas aman bekerja di tiang luar ruangan!",
      statements: [
        { text: "Kecepatan angin di atas 30 km/jam membahayakan keseimbangan teknisi di atas tiang.", correct: "B" },
        { text: "Saat hujan lebat, tangga dan tiang beton menjadi sangat licin sehingga memicu bahaya terpeleset jatuh.", correct: "B" },
        { text: "Teknisi diwajibkan tetap memanjat tiang saat petir menggelegar demi mengejar bonus insentif cepat.", correct: "S" }
      ],
      explanation: "Angin kencang dan hujan membuat tiang licin serta memicu sengatan petir; pekerjaan wajib dihentikan tanpa kompromi.",
      quickTip: "Hujan, angin kencang, dan petir = Dilarang keras memanjat tiang."
    }
  ]
};
