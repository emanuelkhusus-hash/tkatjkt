// scripts/data_src/curated_all/modules/mod_s04_s06.js
// Sesi 4, 5, 6: K3LH Umum, K3 Ketinggian & Mini Boss 1

const s04 = {
  sessionId: "s04",
  pg: [
    {
      stimulus: "Di ruang data center, terdapat instalasi rak server dengan konsumsi daya listrik tinggi dan pendinginan udara presisi.",
      question: "Tindakan pencegahan bahaya listrik yang paling mendasar sesuai standar K3LH di ruang server adalah...",
      correctText: "Memastikan seluruh rak server dan perangkat aktif terhubung ke sistem pentanahan (grounding) dengan resistansi rendah (< 1 ohm)",
      distractors: ["Menyambung kabel listrik basah tanpa isolator", "Menumpuk kabel listrik telanjang di atas saluran air AC", "Menggunakan sekring yang diganti kawat tembaga tebal sembarangan", "Mematikan grounding agar tegangan listrik lebih hemat"],
      explanation: "Sistem grounding yang baik membuang arus bocor dan lonjakan induksi ke bumi guna melindungi nyawa teknisi dan peralatan elektronik.",
      quickTip: "Pencegahan sengatan listrik di data center = Grounding rak server yang andal (< 1 ohm)."
    },
    {
      stimulus: "Sistem sirkulasi pendingin ruangan data center modern diatur menggunakan tata letak lorong panas dan lorong dingin.",
      question: "Prinsip tata letak lorong dingin (Cold Aisle) dan lorong panas (Hot Aisle) dirancang dengan tujuan...",
      correctText: "Mengarahkan udara dingin ke bagian depan server (intake) dan membuang udara panas dari bagian belakang server (exhaust)",
      distractors: ["Mencampur udara panas dan dingin di dalam satu ruangan terbuka", "Meniupkan udara panas langsung ke arah prosesor server", "Menutup rapat ventilasi server menggunakan plastik perekat", "Mendinginkan lantai koridor luar gedung perkantoran"],
      explanation: "Hot Aisle / Cold Aisle memisahkan intake udara dingin (depan rak) dan exhaust udara panas (belakang rak) untuk efisiensi pendinginan optimal.",
      quickTip: "Hot/Cold Aisle: Udara dingin masuk depan rak (intake), udara panas keluar belakang (exhaust)."
    },
    {
      stimulus: "Percikan api terjadi pada stop kontak PDU (Power Distribution Unit) di dalam rak server yang berisi komponen sirkuit elektronik sensitif.",
      question: "Jenis Alat Pemadam Api Ringan (APAR) yang paling tepat dan tidak meninggalkan residu perusak sirkuit adalah...",
      correctText: "APAR Karbon Dioksida (CO2) atau Clean Agent Gas (FM-200 / Novec)",
      distractors: ["APAR Air Bertekanan (Water)", "APAR Busa Kimia Basah (Foam)", "Ember Berisi Lumpur dan Air Kotor", "Karung Goni Basah Berlumpur"],
      explanation: "APAR CO2 dan Clean Agent tidak menghantarkan arus listrik (non-conductive) dan tidak meninggalkan residu debu yang merusak komponen elektronik.",
      quickTip: "Kebakaran server/listrik = Gunakan APAR CO2 atau Clean Agent Gas (bebas residu)."
    },
    {
      stimulus: "Teknisi sedang melakukan pengupasan kabel serat optik untuk penyambungan fusi di atas meja kerja laboratorium.",
      question: "Bahaya fisik paling berbahaya dari sisa potongan ujung core serat optik (fiber shards) adalah...",
      correctText: "Pecahan kaca mikroskopis yang sangat tajam dapat menembus kulit, masuk ke pembuluh darah, atau terhirup ke paru-paru",
      distractors: ["Dapat meledak jika terkena sinar matahari", "Mengeluarkan racun gas sianida cair", "Mengandung aliran radiasi nuklir radioaktif", "Dapat menarik sambaran petir di dalam ruangan"],
      explanation: "Pecahan inti serat optik adalah kaca silika murni yang sangat tipis dan tak kasat mata; jika menusuk kulit dapat masuk ke aliran darah.",
      quickTip: "Pecahan kaca fiber optik sangat tajam, berbahaya bagi kulit dan mata."
    },
    {
      stimulus: "Saat bekerja dengan kabel serat optik yang terhubung ke perangkat pemancar optik (OLT / Transceiver SFP).",
      question: "Tindakan keselamatan K3 mutlak yang wajib dipatuhi oleh seluruh teknisi adalah...",
      correctText: "Dilarang keras menatap langsung lubang konektor atau ujung serat optik dengan mata telanjang",
      distractors: ["Wajib melihat ujung serat dari jarak 1 cm untuk mengecek cahaya", "Menerangi ujung serat menggunakan api korek gas", "Meniup ujung konektor dengan hembusan nafas basah", "Mencelupkan ujung kabel ke dalam air mineral"],
      explanation: "Sinar laser inframerah (1310/1550nm) tidak kasat mata oleh mata manusia, namun energinya dapat membakar retina secara permanen tanpa rasa sakit.",
      quickTip: "Dilarang menatap ujung serat optik aktif; laser inframerah merusak retina."
    },
    {
      stimulus: "Di lorong antar-rak server, teknisi sering kali menarik kabel patch cord sementara yang melintang di lantai jalan lintas orang.",
      question: "Bahaya K3 yang paling sering timbul akibat kabel berserakan di lantai lintasan adalah...",
      correctText: "Bahaya tersandung (trip hazard) yang berisiko mencederai orang dan mencabut kabel koneksi aktif",
      distractors: ["Kabel akan berubah menjadi kawat berduri", "Kabel akan memancarkan gelombang suara bising", "Lantai akan meleleh menjadi cairan panas", "Suhu ruangan seketika turun menjadi minus 50 derajat"],
      explanation: "Kabel berserakan menimbulkan risiko trip and fall (tersandung) bagi personil dan merusak konektor perangkat saat terinjak/tertarik.",
      quickTip: "Kabel berserakan di lantai menimbulkan bahaya tersandung (trip hazard)."
    },
    {
      stimulus: "Suhu standar operasional yang direkomendasikan oleh ASHRAE untuk ruang data center kelas enterprise berada pada kisaran...",
      question: "Berapakah rentang suhu udara intake server yang ideal untuk efisiensi dan keandalan perangkat?",
      correctText: "Sekitar 18°C hingga 27°C dengan kelembaban relatif 40% - 60%",
      distractors: ["Di atas 45°C hingga 60°C", "Minus 10°C hingga 0°C", "Suhu mendidih 100°C", "Bebas berapapun suhunya tanpa pendingin"],
      explanation: "Standar ASHRAE merekomendasikan suhu intake data center antara 18°C - 27°C guna mencegah overheating dan kelembaban kondensasi.",
      quickTip: "Suhu ideal data center: 18°C - 27°C dengan kelembaban 40-60%."
    },
    {
      stimulus: "Seorang administrator sistem menghabiskan waktu 8 jam di depan komputer untuk melakukan monitoring dan konfigurasi perangkat.",
      question: "Penerapan prinsip ergonomi kerja yang benar untuk mencegah gangguan otot dan tulang belakang (Musculoskeletal Disorders) adalah...",
      correctText: "Mengatur posisi monitor sejajar pandangan mata, kursi menopang punggung tegak, dan beristirahat peregangan berkala",
      distractors: ["Bekerja sambil tengkurap di lantai tanpa alas", "Menempatkan monitor di lantai sehingga leher menunduk tajam", "Duduk membungkuk tanpa sandaran kursi selama 8 jam nonstop", "Mengetik dengan posisi pergelangan tangan tertekuk ekstrem"],
      explanation: "Ergonomi kerja komputer meliputi posisi monitor sejajar mata, sandaran punggung ergonomis, kaki menapak rata, dan micro-breaks.",
      quickTip: "Ergonomi komputer: Monitor sejajar mata, punggung ditopang tegak, peregangan teratur."
    },
    {
      stimulus: "Ketika alarm kebakaran gedung data center berbunyi dan sistem pemadam otomatis gas clean agent mulai menghitung mundur aktivasi.",
      question: "Langkah evakuasi darurat yang wajib dilakukan oleh seluruh teknisi di dalam ruangan adalah...",
      correctText: "Segera keluar melalui pintu darurat menuju titik kumpul (assembly point) sebelum pelepasan gas pemadam berlangsung",
      distractors: ["Mengunci diri di dalam lemari rak server", "Mencari laptop pribadi yang tertinggal di bawah meja", "Merekam video kebakaran untuk diunggah ke media sosial", "Menghirup gas pemadam secara sengaja"],
      explanation: "Prosedur evakuasi darurat mewajibkan evakuasi cepat ke assembly point untuk mencegah sesak nafas akibat penurunan oksigen saat gas discharge.",
      quickTip: "Alarm kebakaran berbunyi = Segera evakuasi keluar menuju Assembly Point."
    },
    {
      stimulus: "Dalam kotak P3K di laboratorium jaringan, terdapat peralatan medis pertolongan pertama dasar.",
      question: "Peralatan medis yang wajib tersedia untuk menangani luka sayat kecil akibat pengupasan kabel atau serpihan kaca serat adalah...",
      correctText: "Povidone iodine (antiseptik), perban steril, plester cepat, dan pinset penjepit medis",
      distractors: ["Gunting pemotong dahan pohon", "Palu godam pemecah batu", "Cat minyak warna-warni", "Gergaji besi mesin"],
      explanation: "Pertolongan pertama luka sayatan memerlukan pinset steril (mengambil serpihan), antiseptik pembersih kuman, dan plester/perban steril.",
      quickTip: "Kotak P3K untuk luka sayat: Antiseptik, plester, perban steril, dan pinset."
    },
    {
      stimulus: "Seorang rekan teknisi tersengat aliran listrik AC dari casing server yang mengalami kebocoran fasa dan korban masih menempel pada sumber listrik.",
      question: "Tindakan penyelamatan pertama yang paling aman dan tepat sebelum menyentuh korban adalah...",
      correctText: "Memutus sakelar daya utama (MCB/PDU) atau melepaskan korban menggunakan benda isolator kering (kayu/plastik)",
      distractors: ["Menarik korban dengan tangan telanjang yang basah berkeringat", "Menyiram korban dengan seember air garam", "Memeluk korban agar aliran listrik terbagi dua", "Menunggu hingga korban terlepas dengan sendirinya"],
      explanation: "Menyentuh korban tersetrum dengan tangan telanjang dapat menyebabkan penolong ikut tersetrum; putus sumber daya atau gunakan isolator.",
      quickTip: "Penyelamatan korban tersetrum = Matikan MCB utama atau gunakan tongkat isolator kering."
    },
    {
      stimulus: "Limbah sisa potongan serat optik harus dibuang ke wadah khusus bertutup rapat yang memiliki label peringatan.",
      question: "Nama wadah pembuangan sisa pecahan kaca serat optik yang sesuai standar industri adalah...",
      correctText: "Fiber Disposal Unit / Fiber Trash Can bertutup pengaman",
      distractors: ["Kantong plastik belanjaan tipis terbuka", "Kotak bekal makan siang karyawan", "Wadah tempat sendok garpu kantin", "Laci meja belajar siswa"],
      explanation: "Fiber Trash Can dirancang khusus dengan lubang masuk berpengaman agar serpihan kaca tidak berhamburan ke udara atau tersentuh.",
      quickTip: "Wadah pembuangan sisa serat kaca = Fiber Trash Can bertutup pengaman."
    },
    {
      stimulus: "Kabel instalasi jaringan yang melintasi area plafon gedung wajib dipasang menggunakan pipa pelindung atau cable tray gantung.",
      question: "Tujuan pemasangan pipa pelindung (conduit) pada kabel instalasi plafon adalah...",
      correctText: "Melindungi kabel dari gigitan hama tikus, gesekan tajam rangka plafon, dan mencegah rambatan api",
      distractors: ["Menambah beban bobot plafon agar cepat runtuh", "Membuat kabel tidak bisa dialiri sinyal data", "Menghangatkan kabel agar cepat panas", "Sebagai tempat sarang burung di plafon"],
      explanation: "Pipa conduit melindungi integritas fisik kabel dari gigitan tikus (rodent), gesekan seng tajam, serta memberikan proteksi kebakaran.",
      quickTip: "Fungsi conduit di plafon: Melindungi kabel dari gigitan tikus & gesekan tajam."
    },
    {
      stimulus: "Penggunaan cairan kimia pembersih alkohol pada proses penyambungan serat optik memerlukan penanganan K3LH yang benar.",
      question: "Tingkat kemurnian alkohol yang diwajibkan untuk membersihkan core serat optik adalah...",
      correctText: "Alkohol Isopropil (IPA) dengan kemurnian 99% atau lebih tinggi",
      distractors: ["Alkohol medis 70% yang mengandung banyak kadar air", "Minyak goreng kelapa sawit", "Cairan pembersih lantai beraroma wangi", "Air sabun deterjen berbusa"],
      explanation: "Alkohol 99% (IPA) cepat menguap tanpa meninggalkan residu air atau minyak pada permukaan kaca silika sebelum fusi.",
      quickTip: "Pembersih serat optik = Alkohol Isopropil (IPA) 99% tanpa residu."
    },
    {
      stimulus: "Di ruang baterai UPS data center, terdapat puluhan aki basah / VRLA berkapasitas besar yang menyuplai daya cadangan.",
      question: "Risiko bahaya kimia dan gas yang wajib diwaspadai di ruang baterai UPS adalah...",
      correctText: "Potensi pelepasan gas hidrogen yang mudah terbakar dan tumpahan asam sulfat korosif",
      distractors: ["Gas helium yang membuat suara melengking", "Tumpahan air sirup manis mengundang semut", "Udara membeku menjadi es kristal", "Pancaran gelombang radio FM komersial"],
      explanation: "Proses pengisian aki melepaskan gas hidrogen mudah meledak dan mengandung asam sulfat yang sangat korosif pada kulit.",
      quickTip: "Bahaya ruang baterai UPS: Gas hidrogen mudah meledak & cairan asam korosif."
    },
    {
      stimulus: "Sebelum menyalakan server baru berdaya 1500 Watt, teknisi wajib menghitung beban total pada rangkaian stop kontak.",
      question: "Bahaya utama yang terjadi jika terlalu banyak stop kontak dipasang bertumpuk (overload) pada satu jalur kabel listrik adalah...",
      correctText: "Kabel mengalami panas berlebih (overheating), isolasi meleleh, dan memicu kebakaran listrik",
      distractors: ["Kecepatan transfer data internet meningkat 10 kali lipat", "Tagihan listrik otomatis menjadi gratis", "Lampu indikator server berubah menjadi warna pelangi", "Server menjadi kebal terhadap virus komputer"],
      explanation: "Beban listrik melebihi kapasitas arus kabel (ampacity) menimbulkan panas tinggi yang melelehkan PVC dan memicu korsleting api.",
      quickTip: "Beban stop kontak bertumpuk memicu panas berlebih (overheating) & kebakaran."
    },
    {
      stimulus: "SOP di laboratorium jaringan SMK mewajibkan setiap praktikan mengenakan sepatu kerja tertutup dengan sol karet tebal.",
      question: "Fungsi utama dari sepatu bersol karet dalam lingkungan praktikum jaringan dan kelistrikan adalah...",
      correctText: "Sebagai bahan isolator penahan arus listrik dan pelindung kaki dari kejatuhan perkakas berat",
      distractors: ["Agar bisa berlari kencang saat jam istirahat", "Sebagai hiasan mode pakaian sekolah", "Menghasilkan suara langkah kaki yang nyaring", "Membuat kaki terasa dingin di lantai"],
      explanation: "Sol karet bersifat dielektrik (isolator listrik) yang mencegah tubuh menjadi jalur arus ke bumi saat kontak tak sengaja.",
      quickTip: "Sepatu sol karet = Isolator pencegah sengatan listrik & pelindung benturan."
    },
    {
      stimulus: "Manajemen kabel (Cable Management) di bagian belakang rak server harus dipasang dengan pemisahan jarak antara jalur daya AC dan jalur kabel UTP.",
      question: "Alasan teknis pemisahan jalur kabel data UTP dari kabel daya listrik AC 220V adalah...",
      correctText: "Mencegah terjadinya induksi interferensi elektromagnetik (EMI) yang merusak kualitas transmisi data",
      distractors: ["Agar kabel data tidak merasa kepanasan oleh kabel listrik", "Kabel listrik bisa menyerap kuota internet kabel data", "Kabel data bisa menyedot daya listrik menjadi nol", "Agar teknisi mudah mengingat warna kabel saja"],
      explanation: "Arus bolak-balik (AC) menghasilkan medan magnet yang dapat menginduksi derau (noise EMI) pada sinyal data bertegangan rendah.",
      quickTip: "Pisahkan kabel data dan listrik untuk menghindari interferensi elektromagnetik (EMI)."
    },
    {
      stimulus: "Saat melakukan maintenance perangkat router inti pada rak tertinggi (ketinggian 2 meter di atas lantai data center).",
      question: "Alat bantu panjat yang paling aman dan stabil digunakan di dalam lorong data center adalah...",
      correctText: "Tangga lipat dua sisi (step ladder) berkaki karet anti-selip dengan kapasitas beban memadai",
      distractors: ["Menumpuk kardus bekas komputer setinggi 2 meter", "Berdiri di atas kursi putar beroda licin", "Memanjat pintu rak server yang tipis", "Menginjak kabel bundel yang menjuntai"],
      explanation: "Menggunakan kursi beroda atau tumpukan kardus adalah penyebab utama kecelakaan jatuh; gunakan step ladder bersertifikasi anti-selip.",
      quickTip: "Alat panjat rak server: Tangga lipat step ladder dengan kaki karet anti-selip."
    },
    {
      stimulus: "Setiap kecelakaan kerja atau nyaris celaka (Near Miss) di bengkel jaringan wajib dicatat dalam lembar laporan insiden.",
      question: "Tujuan utama pencatatan insiden Near Miss (nyaris celaka) dalam manajemen K3LH adalah...",
      correctText: "Mengevaluasi bahaya laten dan mengambil tindakan pencegahan sebelum terjadi kecelakaan fatal sesungguhnya",
      distractors: ["Mencari siswa yang bersalah untuk diberi hukuman fisik", "Mempermalukan korban di hadapan teman sekelasnya", "Menambah koleksi tumpukan kertas laporan tak terbaca", "Bahan untuk menghentikan seluruh kegiatan belajar selamanya"],
      explanation: "Prinsip Heinrich Triangle: Mencatat dan memperbaiki kondisi near miss secara efektif mencegah terjadinya insiden fatal di masa depan.",
      quickTip: "Tujuan lapor Near Miss: Evaluasi bahaya laten sebelum menjadi kecelakaan fatal."
    }
  ],
  mcma: [
    {
      stimulus: "Pencegahan bahaya kebakaran di fasilitas pusat data (Data Center) menuntut pemilihan sistem pemadam yang tepat dan aman bagi perangkat elektronik.",
      question: "Manakah jenis media pemadam api yang aman digunakan pada ruang server bertegangan listrik aktif tanpa merusak sirkuit? (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "APAR Gas Karbon Dioksida (CO2)", isCorrect: true },
        { text: "Sistem Gas Bersih (Clean Agent / FM-200 / Novec 1230)", isCorrect: true },
        { text: "APAR Gas Halotron I", isCorrect: true },
        { text: "APAR Cairan Busa Basah Kimia (Foam)", isCorrect: false },
        { text: "Selang Air Hidran Bertekanan Tinggi", isCorrect: false }
      ],
      explanation: "CO2, FM-200/Novec, dan Halotron adalah media pemadam non-konduktif dan bebas residu yang aman bagi perangkat elektronik.",
      quickTip: "Pemadam aman server: CO2, Clean Agent (FM-200/Novec), dan Halotron."
    },
    {
      stimulus: "Penanganan sisa limbah pengupasan dan pemotongan serat optik membutuhkan kepatuhan K3LH yang sangat ketat.",
      question: "Perlengkapan Alat Pelindung Diri (APD) dan perkakas wajib yang digunakan saat menangani serat optik telanjang adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Kacamata pelindung keselamatan (Safety Glasses) dengan pelindung samping", isCorrect: true },
        { text: "Pinset penjepit medis untuk mengambil serpihan serat kaca", isCorrect: true },
        { text: "Wadah pembuangan sisa serat khusus bertutup rapat (Fiber Trash Can)", isCorrect: true },
        { text: "Sarung tangan wol berbulu tebal yang mudah tersangkut serat", isCorrect: false },
        { text: "Pelampung rompi penyelamat air laut", isCorrect: false }
      ],
      explanation: "Safety glasses, pinset penjepit, dan fiber trash can adalah perlengkapan K3 mutlak saat terminasi fiber optik.",
      quickTip: "APD & alat terminasi optik: Kacamata safety, pinset medis, dan fiber trash can."
    },
    {
      stimulus: "Bahaya listrik di laboratorium komputer dapat dicegah melalui pemenuhan standarisasi infrastruktur daya.",
      question: "Standar keselamatan kelistrikan yang wajib dipenuhi pada ruang laboratorium jaringan meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Pemasangan sistem pentanahan (Grounding) dengan nilai tahanan tanah yang memenuhi syarat", isCorrect: true },
        { text: "Penggunaan pemutus sirkuit Residual Current Circuit Breaker (RCCB / ELCB) untuk proteksi arus bocor", isCorrect: true },
        { text: "Pemberian tanda bahaya dan pengunci (Lockout / Tagout) pada panel distribusi utama", isCorrect: true },
        { text: "Menghubungkan kabel ground langsung ke pipa gas elpiji dapur", isCorrect: false },
        { text: "Mengganti sakelar otomatis MCB dengan paku besi berkarat", isCorrect: false }
      ],
      explanation: "Standar proteksi listrik: Grounding terukur, ELCB/RCCB pendeteksi arus bocor, dan prosedur LOTO pada panel distribusi.",
      quickTip: "Proteksi listrik lab: Grounding terukur, RCCB/ELCB, dan Lockout/Tagout (LOTO)."
    },
    {
      stimulus: "Bekerja di lingkungan data center yang bising akibat ratusan kipas server berkecepatan tinggi memerlukan perlindungan pendengaran.",
      question: "Bahaya lingkungan kerja fisik di ruang data center yang wajib dimitigasi oleh teknisi meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Tingkat kebisingan akustik tinggi (Noise) dari deru kipas pendingin server", isCorrect: true },
        { text: "Suhu udara dingin ekstrem pada lorong dingin (Cold Aisle) jika terpapar lama", isCorrect: true },
        { text: "Bahaya radiasi laser tak kasat mata dari port modul optik aktif", isCorrect: true },
        { text: "Serangan binatang buas harimau di dalam ruang tertutup", isCorrect: false },
        { text: "Gelombang pasang tsunami di dalam rak server tertutup", isCorrect: false }
      ],
      explanation: "Bahaya data center: Kebisingan kipas (butuh earplug), hawa dingin lorong intake, dan radiasi laser serat optik.",
      quickTip: "Bahaya data center: Kebisingan akustik, suhu dingin lorong, dan laser tak kasat mata."
    },
    {
      stimulus: "Penyusunan tata letak kabel (Cable Management) di dalam rak server harus mempertimbangkan faktor keamanan dan kemudahan pemeliharaan.",
      question: "Manfaat langsung dari penerapan manajemen kabel yang rapi di rak server adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Menjaga kelancaran aliran sirkulasi udara pendingin melalui celah server", isCorrect: true },
        { text: "Mempercepat proses pelacakan dan penggantian kabel saat terjadi gangguan", isCorrect: true },
        { text: "Mencegah beban tarik mekanik berlebih yang dapat merusak port konektor RJ-45/SFP", isCorrect: true },
        { text: "Mengubah kabel tembaga biasa menjadi kabel emas murni secara kimiawi", isCorrect: false },
        { text: "Membuat seluruh server tidak memerlukan daya listrik sama sekali", isCorrect: false }
      ],
      explanation: "Manajemen kabel rapi menjaga airflow pendingin, mempercepat troubleshooting kabel, dan mencegah kerusakan port fisik.",
      quickTip: "Manfaat cable management: Airflow lancar, lacak gangguan cepat, cegah kerusakan port."
    }
  ],
  tf: [
    {
      stimulus: "Sinar laser pada jaringan komunikasi serat optik bekerja pada spektrum cahaya inframerah tak kasat mata.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang keselamatan bahaya radiasi optik!",
      statements: [
        { text: "Mata manusia tidak dapat melihat sinar laser 1310nm atau 1550nm sehingga refleks pupil mata tidak aktif saat terpapar.", correct: "B" },
        { text: "Melihat langsung ke dalam serat optik aktif selama beberapa detik sangat aman dan menyehatkan mata.", correct: "S" },
        { text: "Kamera sensor digital ponsel kadang dapat mendeteksi pendar cahaya inframerah sebagai alat bantu visual tak langsung.", correct: "B" }
      ],
      explanation: "Laser inframerah tidak terlihat oleh mata telanjang sehingga tidak memicu refleks mengedip; paparan langsung membakar retina.",
      quickTip: "Laser optik inframerah tidak terlihat mata manusia, sangat berbahaya bagi retina."
    },
    {
      stimulus: "Sistem grounding pada rak server berfungsi sebagai pelindung utama dari tegangan sentuh berbahaya.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai sistem pentanahan (grounding) data center!",
      statements: [
        { text: "Nilai resistansi pembumian grounding yang disyaratkan untuk fasilitas komputasi idealnya di bawah 1 ohm.", correct: "B" },
        { text: "Kabel grounding boleh dipotong dan disambungkan ke rangka kayu kusen pintu ruangan.", correct: "S" },
        { text: "Grounding yang baik melindungi komponen mikroelektronika server dari kerusakan akibat lonjakan elektrostatis (ESD).", correct: "B" }
      ],
      explanation: "Grounding harus terhubung ke batang tembaga bumi dengan resistansi < 1 ohm, bukan ke kayu isolator.",
      quickTip: "Grounding data center: Hambatan < 1 ohm, lindungi peralatan dari ESD & arus bocor."
    },
    {
      stimulus: "Penyusunan prosedur keselamatan kerja di laboratorium komputer dirancang untuk melindungi manusia, alat, dan lingkungan.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang budaya keselamatan kerja!",
      statements: [
        { text: "Makan dan minum diperbolehkan di atas keyboard server yang sedang beroperasi penuh.", correct: "S" },
        { text: "Setiap tumpahan cairan di dekat perangkat kelistrikan harus segera dimatikan dayanya dan dibersihkan.", correct: "B" },
        { text: "Peralatan perkakas yang memiliki isolasi pegangan rusak atau retak harus segera ditarik dari penggunaan.", correct: "B" }
      ],
      explanation: "Makan/minum di dekat server dilarang keras karena risiko tumpahan cairan memicu korsleting fatal.",
      quickTip: "Dilarang makan/minum di area server; tarik perkakas isolasi retak dari lab."
    },
    {
      stimulus: "Penggunaan tangga step ladder di lorong rak server memerlukan kehati-hatian tinggi.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penggunaan tangga kerja di ruang server!",
      statements: [
        { text: "Teknisi dilarang berdiri di anak tangga paling atas (top step) pada tangga lipat portabel.", correct: "B" },
        { text: "Tangga harus diletakkan pada permukaan lantai yang rata, bersih dari oli/air, dan memiliki sepatu karet utuh.", correct: "B" },
        { text: "Diperbolehkan melompat dari atas tangga ke lantai untuk menghemat waktu kerja.", correct: "S" }
      ],
      explanation: "Berdiri di top step menghilangkan tumpuan keseimbangan tubuh; melompat dari tangga sangat berbahaya.",
      quickTip: "Aturan tangga: Jangan berdiri di anak tangga paling atas, pastikan kaki karet anti-selip."
    },
    {
      stimulus: "Penanganan kecelakaan kerja memerlukan ketenangan dan tindakan yang tepat sesuai protokol medis darurat.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pertolongan pertama pada kecelakaan kerja!",
      statements: [
        { text: "Korban sengatan listrik yang tidak bernafas harus segera diberikan tindakan Resusitasi Jantung Paru (RJP/CPR) oleh personil terlatih.", correct: "B" },
        { text: "Sebelum menolong korban, penolong harus memastikan situasi di sekeliling korban telah aman dari sumber bahaya listrik aktif.", correct: "B" },
        { text: "Jika terjadi luka bakar akibat listrik, luka tersebut harus segera diolesi dengan pasta gigi tebal dan kecap.", correct: "S" },
        { text: "Mengoleskan pasta gigi pada luka bakar adalah mitos berbahaya yang dapat memicu infeksi jaringan kulit.", correct: "B" }
      ],
      explanation: "Amankan lokasi terlebih dahulu sebelum menolong; jangan oleskan pasta gigi/kecap pada luka bakar listrik.",
      quickTip: "Pertolongan listrik: Amankan area, lakukan CPR jika terlatih, jangan beri pasta gigi pada luka."
    }
  ]
};

module.exports = {
  s04
};
