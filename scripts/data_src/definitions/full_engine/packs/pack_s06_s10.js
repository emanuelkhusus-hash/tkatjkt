// scripts/data_src/definitions/full_engine/packs/pack_s06_s10.js
// Sesi 6 s.d. Sesi 10 (Total 5 Sesi x 30 Soal = 150 Soal Unik)
// s06: Mini Boss 1 (Integrasi Wawasan Kerja & K3BK)
// s07: Karakteristik Kabel Twisted Pair (UTP/STP/Cat5e/Cat6/Cat6a)
// s08: Standarisasi Terminasi TIA/EIA 568A, 568B & Pengujian Wiremap
// s09: Struktur Dasar & Prinsip Fisis Cahaya Serat Optik (TIR & Indeks Bias)
// s10: Single-Mode vs Multi-Mode Fiber & Analisis Redaman Link Budget

const pack = {};

// ----------------- SESI 06: Mini Boss 1 (Integrasi Wawasan Kerja & K3BK) -----------------
pack["s06"] = {
  sessionId: "s06",
  pg: [
    {
      stimulus: "Sebuah truk kontainer bertinggi 4,8 meter menabrak kabel drop optik udara yang melintang di jalan raya karena kabel kendur di bawah 4 meter.",
      question: "Penyebab utama kegagalan instalasi pada kasus tersebut berdasarkan standar konstruksi telekomunikasi adalah...",
      correctText: "Pelanggaran standar clearance height kabel menyeberang jalan raya yang seharusnya minimal 5,5 hingga 6 meter",
      distractors: ["Kabel optik tidak dicat dengan warna merah menyala", "Kabel optik tidak dialiri tegangan listrik PLN", "Truk dilarang melintas di jalan raya manapun", "Kabel optik seharusnya dipasang setinggi 50 meter"],
      explanation: "Standar bentangan kabel di atas jalan raya umum wajib memiliki clearance minimal 5,5 - 6 meter agar tidak tersangkut kendaraan besar.",
      quickTip: "Clearance kabel jalan raya = Minimal 5,5 - 6 meter."
    },
    {
      stimulus: "Di ruang data center tier-2, terjadi alarm asap dari dalam rak server. Teknisi melihat salah satu teknisi magang hendak menyiramkan air dari ember pembersih lantai.",
      question: "Tindakan mitigasi kritis yang harus segera dilakukan oleh supervisor adalah...",
      correctText: "Mencegah penyiraman air seketika, mengaktifkan APAR CO2/Clean Agent, dan mengevakuasi ruangan",
      distractors: ["Membiarkan air disiramkan agar api cepat padam", "Menambahkan sabun cuci ke dalam ember air", "Menyuruh anak magang menuangkan minyak goreng", "Mengunci pintu data center dari luar"],
      explanation: "Air adalah konduktor listrik yang dapat memicu sengatan mematikan bagi penolong dan merusak total seluruh sirkuit server aktif.",
      quickTip: "Kebakaran sirkuit listrik aktif dilarang keras disiram air; gunakan APAR CO2/Gas."
    },
    {
      stimulus: "Teknisi proyek instalasi FO di lapangan terlambat menyelesaikan target harian karena harus bolak-balik ke kantor mengambil tangga fiberglass yang tertinggal.",
      question: "Kelemahan alur manajemen kerja yang terjadi pada insiden tersebut terletak pada...",
      correctText: "Ketiadaan checklist verifikasi logistik dan perkakas pra-keberangkatan kerja lapangan",
      distractors: ["Kecepatan mobil dinas yang terlalu lambat", "Kondisi jalan raya yang terlalu mulus", "Warna tangga yang kurang cerah", "Harga tangga yang terlalu mahal"],
      explanation: "Checklist pra-keberangkatan menjamin seluruh perkakas kerja, APD, dan material telah lengkap di mobil sebelum tim meluncur ke lokasi.",
      quickTip: "Checklist perkakas pra-keberangkatan mencegah pemborosan waktu kerja."
    },
    {
      stimulus: "Pelanggan korporat komplain keras karena jaringan internet kantornya mati selama 3 jam, melampaui batas SLA bulanan.",
      question: "Langkah etika bisnis dan pemulihan kepercayaan yang wajib ditempuh pihak ISP adalah...",
      correctText: "Menerbitkan laporan Root Cause Analysis (RCA) resmi dan memberikan kompensasi kredit restitusi sesuai klausul SLA",
      distractors: ["Menyalahkan pelanggan karena menggunakan internet terlalu banyak", "Memblokir nomor telepon pimpinan perusahaan pelanggan", "Menolak memberikan penjelasan teknis", "Mengirimkan tagihan denda tambahan kepada pelanggan"],
      explanation: "Profesionalitas ISP diwujudkan dengan transparansi laporan RCA dan kepatuhan pembayaran restitusi pinalti SLA.",
      quickTip: "Pelanggaran SLA diselesaikan dengan laporan RCA transparan dan restitusi biaya."
    },
    {
      stimulus: "Penyusunan kabel di laboratorium jaringan sekolah sangat semrawut, bercampur antara kabel LAN aktif, kabel adaptor putus, dan sampah bungkus makanan.",
      question: "Urutan langkah penataan yang benar berdasarkan kaidah 5R adalah...",
      correctText: "Seiri (Singkirkan sampah & kabel rusak) -> Seiton (Tata kabel rapi & beri label) -> Seiso (Bersihkan ruangan) -> Seiketsu (Bakukan SOP) -> Shitsuke (Biasakan disiplin)",
      distractors: ["Shitsuke -> Seiso -> Seiton -> Seiri -> Seiketsu", "Langsung mengecat dinding tanpa membersihkan sampah", "Menutup semua kabel dengan terpal hitam", "Membakar seluruh laboratorium"],
      explanation: "Urutan 5R baku adalah 1. Ringkas (Seiri), 2. Rapi (Seiton), 3. Resik (Seiso), 4. Rawat (Seiketsu), 5. Rajin (Shitsuke).",
      quickTip: "Urutan 5R: Ringkas -> Rapi -> Resik -> Rawat -> Rajin."
    },
    {
      stimulus: "Seorang teknisi tiang mengalami kecelakaan terpeleset dari tangga karena tangga disandarkan dengan sudut 45 derajat di atas tanah licin tanpa diikat.",
      question: "Faktor penyebab utama terjadinya kecelakaan tersebut adalah...",
      correctText: "Pelanggaran rasio sudut kemiringan tangga (seharusnya 4:1) dan kelalaian melakukan pengikatan (ladder tie-off)",
      distractors: ["Tangga terbuat dari material yang terlalu kuat", "Teknisi menggunakan sepatu keselamatan bersol karet", "Cuaca di lokasi terlalu cerah dan hangat", "Tiang telepon terlalu tegak lurus"],
      explanation: "Sudut 45 derajat terlalu landai sehingga pangkal tangga mudah meluncur ke belakang; tangga wajib rasio 4:1 dan diikat pada tiang.",
      quickTip: "Sudut tangga terlalu landai (< 4:1) dan tanpa tie-off memicu tangga meluncur jatuh."
    },
    {
      stimulus: "Di ruang NOC, sistem NMS mendeteksi link backbone terputus pada pukul 02:00 dini hari. Petugas shift malam tertidur pulas dan baru merespons pada pukul 06:00 pagi.",
      question: "Pelanggaran etos kerja dan operasional yang terjadi pada kasus di atas adalah...",
      correctText: "Pelanggaran integritas tugas jaga 24/7 dan kegagalan respons time eskalasi insiden kritis",
      distractors: ["Penghematan daya listrik monitor NOC", "Penerapan jam tidur sehat karyawan", "Efisiensi pemakaian kuota data NMS", "Kepatuhan terhadap jam istirahat normal"],
      explanation: "Petugas jaga shift NOC wajib siaga memantau alarm 24/7; kelalaian merespons alarm melanggar SOP operasional industri.",
      quickTip: "NOC shift wajib siaga 24/7 memantau alarm dan merespons tiket seketika."
    },
    {
      stimulus: "Sisa potongan serat optik berceceran di lantai laboratorium setelah ujian praktik dan ada siswa yang menginjaknya tanpa alas kaki.",
      question: "Koreksi prosedur K3 yang wajib diberlakukan di laboratorium adalah...",
      correctText: "Wajib menggunakan wadah Fiber Trash Can tertutup dan mewajibkan seluruh siswa memakai sepatu tertutup di lab",
      distractors: ["Membiarkan siswa berjalan tanpa alas kaki", "Menyapu serpihan kaca dengan sapu lidi kasar", "Meniup serpihan kaca ke sudut ruangan", "Menyiram lantai dengan air sabun"],
      explanation: "Serat kaca mikroskopis wajib dibuang ke Fiber Trash Can dan lab mewajibkan sepatu pelindung tertutup.",
      quickTip: "Limbah serat kaca wajib dibuang ke Fiber Trash Can; dilarang tanpa alas kaki di lab."
    },
    {
      stimulus: "Perusahaan merencanakan pemasangan link komunikasi antara kantor pusat dan gudang berjarak 300 meter tanpa halangan.",
      question: "Pilihan media transmisi kabel yang paling tepat, kebal induksi petir luar ruangan, dan mendukung kecepatan 10 Gbps adalah...",
      correctText: "Kabel Serat Optik Single-Mode / Multi-Mode Outdoor",
      distractors: ["Kabel UTP Cat5e tanpa pelindung", "Kabel telepon tembaga 2 kawat", "Kabel audio jack 3.5mm", "Kabel antena televisi koaksial tua"],
      explanation: "Kabel UTP tembaga terbatas 100 meter dan rentan petir; jarak 300 meter outdoor wajib menggunakan Fiber Optic yang kebal petir.",
      quickTip: "Jarak > 100 meter antar-gedung wajib Fiber Optik (kebal induksi petir & loss rendah)."
    },
    {
      stimulus: "Seorang konsultan IT diminta merancang sistem jaringan untuk UMKM dengan anggaran sangat terbatas namun membutuhkan koneksi andal.",
      question: "Prinsip etika profesional yang harus diterapkan konsultan tersebut adalah...",
      correctText: "Merancang solusi yang optimal sesuai skala anggaran dan kebutuhan riil tanpa memaksakan merk termahal demi keuntungan pribadi",
      distractors: ["Mengharuskan klien membeli server mainframe miliaran rupiah", "Menjual perangkat rongsokan yang rusak agar sering diservis", "Menolak melayani klien yang memiliki modal kecil", "Menyalin data bisnis klien dan menjualnya ke kompetitor"],
      explanation: "Konsultan beretika memberikan solusi yang tepat guna dan proporsional terhadap anggaran tanpa konflik kepentingan finansial.",
      quickTip: "Etika konsultan: Solusi tepat guna sesuai kebutuhan dan anggaran riil klien."
    },
    {
      stimulus: "Saat menaiki tiang, teknisi merasakan tiang besi sedikit bergetar dan mengeluarkan percikan api kecil di dasar tanah akibat kebocoran arus tiang PJU.",
      question: "Tindakan K3 seketika yang wajib diambil sebelum memanjat adalah...",
      correctText: "Menguji tegangan tiang menggunakan tespen / voltage detector dan segera melaporkan ke pihak PLN",
      distractors: ["Memeluk tiang besi dengan kedua tangan kosong", "Menyiram tiang dengan air garam", "Mengabaikan getaran dan tetap memanjat", "Menempelkan lidah ke tiang untuk mengetes listrik"],
      explanation: "Tiang bersama sering kali teraliri arus bocor penerangan jalan (PJU); uji tegangan tiang adalah SOP mutlak sebelum disentuh.",
      quickTip: "Uji tegangan tiang dengan Voltage Detector sebelum memanjat untuk deteksi arus bocor."
    },
    {
      stimulus: "Penyusunan laporan pekerjaan (Work Order Report) yang diserahkan ke pelanggan korporat harus memuat informasi teknis yang akurat.",
      question: "Informasi teknis yang wajib disertakan pada dokumen penutupan tiket instalasi jaringan adalah...",
      correctText: "Hasil pengujian performa (Throughput, Latency, Loss) dan tanda tangan serah terima kedua belah pihak",
      distractors: ["Nomor rekening bank pribadi teknisi", "Foto makanan saat makan siang", "Daftar film favorit supervisor", "Surat izin sakit teknisi"],
      explanation: "Dokumen serah terima memuat data hasil pengujian performa jaringan terukur dan otorisasi persetujuan pelanggan.",
      quickTip: "Dokumen penutupan tiket: Data uji performa jaringan & tanda tangan serah terima."
    },
    {
      stimulus: "Di area lab komputer, seorang siswa menemukan kabel power monitor yang terkelupas tembaganya dan isolasinya meleleh.",
      question: "Sikap tanggap K3 yang benar dari siswa tersebut adalah...",
      correctText: "Mencabut steker dari stop kontak secara hati-hati, melapor ke guru pembimbing, dan memberi tanda bahaya pada kabel",
      distractors: ["Menyentuh tembaga kabel untuk mengetes apakah ada listriknya", "Menutup kabel yang terkelupas dengan tisu basah", "Mencolokkan kabel kembali ke stop kontak", "Menyembunyikan kabel di dalam tas teman"],
      explanation: "Kabel isolasi rusak harus segera diputus sumber dayanya, diberi label isolasi bahaya, dan diganti baru.",
      quickTip: "Kabel terkelupas: Cabut dari stop kontak, beri penandaan bahaya, dan laporkan."
    },
    {
      stimulus: "Seorang teknisi jaringan diminta atasan untuk memalsukan data pengukuran redaman kabel optik agar proyek dinyatakan lulus audit.",
      question: "Keputusan etika profesi yang benar dari teknisi tersebut adalah...",
      correctText: "Menolak memalsukan data pengukuran secara tegas dan menyampaikan konsekuensi risiko teknis kerusakan jaringan di kemudian hari",
      distractors: ["Menuruti perintah atasan dan mengubah angka hasil ukur di Excel", "Meminta bayaran uang suap lebih besar untuk memalsukan data", "Menghapus seluruh file hasil ukur dari memori alat OTDR", "Menyalahkan alat ukur yang dianggap terlalu jujur"],
      explanation: "Integritas profesional melarang pemalsuan data teknis; data palsu dapat memicu kegagalan sistem dan tuntutan hukum perdata/pidana.",
      quickTip: "Integritas profesional: Menolak pemalsuan data uji secara tegas demi keandalan sistem."
    },
    {
      stimulus: "Pekerjaan instalasi fiber optik di ketinggian tiang di depan pertokoan memicu keluhan dari pemilik toko karena menghalangi pintu masuk.",
      question: "Kecakapan komunikasi publik yang harus ditunjukkan oleh tim teknisi adalah...",
      correctText: "Menyampaikan permohonan maaf dengan sopan, menjelaskan durasi estimasi pekerjaan, dan mengatur posisi tangga seminimal mungkin mengganggu",
      distractors: ["Memarahi pemilik toko dan mengancam memutus jaringan teleponnya", "Memasang tiang tepat di tengah pintu masuk toko dengan sengaja", "Mengabaikan pemilik toko dan menyalakan musik speaker kencang", "Melempar material kotoran ke teras toko"],
      explanation: "Teknisi lapangan mewakili citra perusahaan; komunikasi sopan dan tata letak yang memperhatikan kepentingan publik adalah etika dasar.",
      quickTip: "Komunikasi publik: Santun, empati, jelaskan durasi kerja, dan minimalkan gangguan akses."
    },
    {
      stimulus: "Dalam sebuah tim proyek, terjadi perdebatan sengit mengenai metode penarikan kabel apakah manual atau menggunakan mesin winch.",
      question: "Cara penyelesaian konflik teknis yang paling konstruktif dalam tim kerja adalah...",
      correctText: "Melakukan musyawarah teknis berbasis standar batas kuat tarik kabel (Max Tensile Strength) yang tertera di datasheet pabrikan",
      distractors: ["Adu fisik antar anggota tim di lapangan", "Melakukan lempar koin secara acak", "Memutuskan berdasarkan siapa yang memiliki suara paling keras", "Membatalkan seluruh proyek seketika"],
      explanation: "Keputusan teknis harus disandarkan pada spesifikasi pabrikan (datasheet) untuk menjamin batas mekanis kabel tidak terlampaui.",
      quickTip: "Penyelesaian perbedaan teknis: Rujuk datasheet spesifikasi batas mekanis pabrikan."
    },
    {
      stimulus: "Bekerja di dalam ruang tertutup manhole bawah tanah (Confined Space) untuk menyambung kabel fiber optik memiliki bahaya tersembunyi.",
      question: "Prosedur keselamatan K3 mutlak sebelum teknisi masuk ke dalam manhole bawah tanah adalah...",
      correctText: "Melakukan pengujian gas berbahaya (H2S, CO, Methane) dengan Multi-Gas Detector dan melakukan ventilasi udara paksa (Blower)",
      distractors: ["Langsung melompat ke dalam manhole tanpa penerangan", "Menyalakan korek api di dalam manhole untuk melihat isi ruangan", "Menutup lubang manhole rapat-rapat saat ada orang di dalam", "Menuangkan bensin ke dalam manhole"],
      explanation: "Manhole dapat mengumpulkan gas beracun mematikan dan kekurangan oksigen; wajib uji gas detector dan ventilasi blower sebelum masuk.",
      quickTip: "Confined space / Manhole: Uji Multi-Gas Detector & pasang blower ventilasi udara."
    },
    {
      stimulus: "Seorang teknisi ISP mendapati rekannya memanjat tiang setinggi 6 meter tanpa mengenakan Full Body Harness dan helm.",
      question: "Kewajiban keselamatan kerja yang harus diambil teknisi tersebut terhadap rekannya adalah...",
      correctText: "Menghentikan rekan kerja tersebut (Stop Work Authority) dan memintanya memakai APD lengkap sebelum melanjutkan",
      distractors: ["Merekam video rekannya untuk ditertawakan di media sosial", "Membiarkannya karena itu urusan pribadi masing-masing", "Menggoyangkan tangga agar rekannya cepat selesai", "Menyemangati rekannya untuk memanjat lebih tinggi lagi"],
      explanation: "Prinsip Stop Work Authority memberikan hak dan kewajiban bagi setiap personil untuk menghentikan tindakan tidak aman (unsafe act).",
      quickTip: "Stop Work Authority: Wajib hentikan rekan yang bekerja tanpa APD demi keselamatan nyawa."
    },
    {
      stimulus: "Dokumen serah terima instalasi ODP di tiang wajib melampirkan foto geotagging koordinat GPS lokasi fisik.",
      question: "Tujuan pencatatan titik koordinat GPS pada aset jaringan telekomunikasi adalah...",
      correctText: "Memasukkan data aset ke sistem Geographic Information System (GIS) agar posisi ODP mudah dilacak saat pemeliharaan",
      distractors: ["Agar tiang bisa dipantau oleh teleskop antariksa", "Sebagai syarat untuk menjual tiang ke pedagang barang bekas", "Agar tiang terlihat indah di layar peta game", "Tidak memiliki fungsi teknis sama sekali"],
      explanation: "Data koordinat GPS diintegrasikan ke sistem inventaris GIS/OSS untuk memudahkan teknisi maintenance menemukan lokasi aset.",
      quickTip: "Koordinat GPS ODP diintegrasikan ke sistem GIS untuk memudahkan pemeliharaan."
    },
    {
      stimulus: "Setelah jam kerja berakhir pada pukul 17:00, teknisi mendapati pintu kabinet ODC (Optical Distribution Cabinet) pinggir jalan lupa terkunci.",
      question: "Sikap tanggung jawab profesional yang wajib dilakukan teknisi tersebut adalah...",
      correctText: "Mengunci kembali pintu kabinet ODC secara rapat demi melindungi ratusan sambungan fiber optik di dalamnya dari sabotase/cuaca",
      distractors: ["Membiarkan pintu terbuka agar terkena angin malam", "Mengambil kabel di dalamnya untuk dibawa pulang", "Merusak kunci pintu dengan palu besi", "Mengabaikannya karena jam kerja sudah selesai"],
      explanation: "ODC memuat interkoneksi ratusan pelanggan; membiarkannya terbuka berisiko kemasukan air hujan, debu, atau perusakan vandalisme.",
      quickTip: "Integritas aset: Selalu pastikan kabinet ODC terkunci rapat terlindung dari cuaca."
    }
  ],
  mcma: [
    {
      stimulus: "Insiden kecelakaan kerja di tiang jalan raya sering diakibatkan oleh kombinasi berbagai faktor kegagalan K3.",
      question: "Faktor-faktor yang tergolong dalam tindakan tidak aman (Unsafe Action) pada pekerjaan tiang adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Bekerja di atas tiang tanpa memasang pengait lanyard ke struktur tiang", isCorrect: true },
        { text: "Melemparkan perkakas tang dan palu ke teknisi yang berada di atas tiang", isCorrect: true },
        { text: "Menggunakan tangga aluminium di dekat bentangan kabel tegangan tinggi PLN", isCorrect: true },
        { text: "Mengenakan helm keselamatan dengan chin strap terkunci rapat", isCorrect: false },
        { text: "Memasang traffic cone dan barikade peringatan di sekitar tangga", isCorrect: false }
      ],
      explanation: "Bekerja tanpa lanyard, melempar alat, dan memakai tangga aluminium dekat listrik adalah contoh fatal Unsafe Action.",
      quickTip: "Unsafe Action: Tanpa lanyard, melempar perkakas, pakai tangga aluminium dekat listrik."
    },
    {
      stimulus: "SOP penanganan ruang tertutup bawah tanah (Manhole Fiber Optic) menuntut pengawasan ketat keselamatan.",
      question: "Prosedur keselamatan yang wajib diterapkan saat bekerja di dalam manhole kabel adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Memeriksa kadar gas beracun dan oksigen menggunakan Multi-Gas Detector", isCorrect: true },
        { text: "Memasang sistem ventilasi udara paksa (Blower) untuk sirkulasi oksigen segar", isCorrect: true },
        { text: "Menempatkan petugas pengawas (Standby Person) di bibir manhole sepanjang waktu pekerjaan", isCorrect: true },
        { text: "Menyalakan rokok di dalam manhole untuk menghangatkan badan", isCorrect: false },
        { text: "Mengunci penutup manhole dari luar saat teknisi masih bekerja di dalam", isCorrect: false }
      ],
      explanation: "Standar ruang tertutup: Deteksi gas, ventilasi blower udara, dan pengawas siaga di luar manhole.",
      quickTip: "SOP Manhole: Deteksi gas, blower ventilasi, dan standby person di luar lubang."
    },
    {
      stimulus: "Penerapan etika profesi teknologi informasi memandu teknisi dalam bersikap di hadapan pelanggan dan rekan kerja.",
      question: "Prinsip etika profesi yang wajib dijunjung tinggi oleh teknisi jaringan meliputi... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Menjaga kerahasiaan konfigurasi sistem dan data pribadi pengguna (Kerahasiaan/Confidentiality)", isCorrect: true },
        { text: "Menolak segala bentuk suap atau gratifikasi yang melanggar integritas (Anti-Korupsi)", isCorrect: true },
        { text: "Menyampaikan laporan hasil pengujian teknis secara jujur dan transparan (Integritas/Kejujuran)", isCorrect: true },
        { text: "Menjual password router pelanggan kepada pesaing bisnis", isCorrect: false },
        { text: "Memasang program virus perusak pada komputer klien", isCorrect: false }
      ],
      explanation: "Pilar etika profesi: Kerahasiaan data (confidentiality), integritas laporan teknis, dan integritas anti-gratifikasi.",
      quickTip: "Etika profesi IT: Kerahasiaan data, integritas laporan, dan anti-gratifikasi."
    },
    {
      stimulus: "Peralatan keselamatan kerja di ketinggian harus diperiksa dan dirawat secara berkala agar tidak mengalami degradasi kualitas.",
      question: "Langkah pemeliharaan yang benar untuk Full Body Harness adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Membersihkan tali webbing menggunakan air sabun netral dan mengeringkannya di tempat teduh berangin", isCorrect: true },
        { text: "Menyimpan harness di tempat kering, bersih, dan terhindar dari paparan sinar UV matahari langsung", isCorrect: true },
        { text: "Menjauhkan harness dari zat kimia asam baterai, minyak pelumas korosif, dan sumber panas api", isCorrect: true },
        { text: "Menjemur harness di atas api unggun agar cepat kering", isCorrect: false },
        { text: "Melumuri webbing harness dengan cairan asam sulfat", isCorrect: false }
      ],
      explanation: "Harness dirawat dengan air sabun netral, diangin-anginkan di tempat teduh, dan dijauhkan dari bahan kimia keras serta radiasi UV berlebih.",
      quickTip: "Perawatan harness: Sabun netral, keringkan di tempat teduh, jauhkan dari zat kimia asam."
    },
    {
      stimulus: "Penyusunan rencana kerja penarikan kabel telekomunikasi membutuhkan koordinasi antardivisi yang solid.",
      question: "Dokumen teknis yang wajib disiapkan sebelum pelaksanaan konstruksi penggelaran kabel di lapangan adalah... (Pilihlah DUA atau TIGA jawaban yang benar)",
      options: [
        { text: "Surat Perintah Kerja (SPK / Work Order) resmi dari manajemen proyek", isCorrect: true },
        { text: "Gambar Rencana Desain Rute Kabel (Design Route Drawing) dan titik penempatan tiang", isCorrect: true },
        { text: "Izin kerja lingkungan / izin pemanfaatan jalur jalan dari instansi berwenang (RoW)", isCorrect: true },
        { text: "Kuitansi pembelian pakaian santai akhir pekan", isCorrect: false },
        { text: "Tiket nonton bioskop pimpinan proyek", isCorrect: false }
      ],
      explanation: "Konstruksi legal membutuhkan SPK resmi, gambar rencana rute desain, dan izin penggunaan ruang jalan (RoW).",
      quickTip: "Dokumen legal lapangan: SPK proyek, gambar rute desain, dan izin jalan (RoW)."
    }
  ],
  tf: [
    {
      stimulus: "Bekerja di dekat bentangan kabel listrik PLN menuntut jarak bebas aman (Minimum Approach Distance).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang keselamatan di dekat jaringan listrik!",
      statements: [
        { text: "Teknisi telekomunikasi dilarang mendekati kabel listrik tegangan menengah (TM 20 kV) dalam jarak kurang dari 2 meter.", correct: "B" },
        { text: "Kabel udara telekomunikasi boleh dililitkan langsung pada kabel listrik telanjang PLN.", correct: "S" },
        { text: "Tangga fiberglass merupakan standar wajib saat bekerja pada tiang yang berbagi jalur dengan jaringan listrik.", correct: "B" }
      ],
      explanation: "Jarak aman terhadap kabel TM 20 kV minimal 2 meter; kabel telekomunikasi dilarang kontak langsung dengan kabel listrik.",
      quickTip: "Jarak aman listrik TM 20 kV minimal 2 meter; tangga fiberglass isolator mutlak."
    },
    {
      stimulus: "Etika penanganan komplain pelanggan menentukan reputasi penyedia jasa internet.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai komunikasi layanan pelanggan!",
      statements: [
        { text: "Teknisi harus memberikan penjelasan teknis dengan bahasa yang sopan dan mudah dipahami tanpa merendahkan pelanggan.", correct: "B" },
        { text: "Jika pelanggan mengeluh, teknisi boleh langsung mematikan sambungan telepon agar masalah dianggap selesai.", correct: "S" },
        { text: "Teknisi wajib mengonfirmasi bahwa koneksi internet telah berfungsi normal kembali sebelum meninggalkan rumah pelanggan.", correct: "B" }
      ],
      explanation: "Pelayanan profesional mengedepankan kesantunan, komunikasi jelas, dan verifikasi kepuasan pelanggan sebelum berpamitan.",
      quickTip: "Pelayanan pelanggan: Santun, komunikatif, dan verifikasi fungsi sebelum berpamitan."
    },
    {
      stimulus: "Manajemen waktu kerja teknisi menentukan ketercapaian target instalasi tepat waktu.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai faktor keterlambatan instalasi!",
      statements: [
        { text: "Menyiapkan dan mengisi daya baterai perkakas mesin fusion splicer pada malam hari mencegah kendala di lapangan.", correct: "B" },
        { text: "Tiba di lokasi instalasi tanpa mengonfirmasi keberadaan pelanggan di rumah sering memicu waktu tunggu sia-sia.", correct: "B" },
        { text: "Tidak membawa cadangan konektor dan patch cord selalu mempercepat penyelesaian instalasi.", correct: "S" }
      ],
      explanation: "Konfirmasi janji temu dengan pelanggan dan kelengkapan material cadangan mencegah pemborosan waktu tunggu di lokasi.",
      quickTip: "Konfirmasi pelanggan & bawa material cadangan untuk mencegah keterlambatan tugas."
    },
    {
      stimulus: "Prinsip Stop Work Authority memberikan hak keselamatan bagi seluruh personil di lapangan.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai penerapan Stop Work Authority!",
      statements: [
        { text: "Setiap pekerja berhak menghentikan pekerjaan jika melihat kondisi bahaya yang mengancam nyawa tanpa takut dihukum.", correct: "B" },
        { text: "Pekerjaan hanya boleh dihentikan jika ada perintah tertulis resmi bermeterai dari menteri.", correct: "S" },
        { text: "Setelah pekerjaan dihentikan, investigasi bahaya harus dilakukan dan dihilangkan sebelum pekerjaan dilanjutkan kembali.", correct: "B" }
      ],
      explanation: "Stop Work Authority adalah hak setiap pekerja untuk menghentikan bahaya seketika tanpa prosedur birokrasi berbelit.",
      quickTip: "Stop Work Authority: Hak setiap pekerja menghentikan pekerjaan bahaya seketika."
    },
    {
      stimulus: "Pemeliharaan preventif (Preventive Maintenance) bertujuan mencegah timbulnya kerusakan tak terduga pada jaringan.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang pemeliharaan berkala infrastruktur jaringan!",
      statements: [
        { text: "Pembersihan debu pada kipas rak server secara berkala mencegah terjadinya panas berlebih (overheating).", correct: "B" },
        { text: "Pemeliharaan preventif hanya membuang-buang anggaran perusahaan dan tidak memiliki nilai guna.", correct: "S" },
        { text: "Inspeksi visual kekencangan sabuk pengikat tiang ODP mencegah kotak distribusi jatuh ke jalan raya.", correct: "B" }
      ],
      explanation: "Preventive maintenance mencegah downtime mahal dan kecelakaan fatal pada fasilitas luar ruangan (ODP/tiang).",
      quickTip: "Preventive maintenance: Pembersihan debu & cek tiang mencegah kerusakan fatal sistem."
    }
  ]
};

module.exports = pack;
