// scripts/data_src/definitions/full_engine/dataset_builder/session_packs/pack_s23_s26.js
// Sesi 23: Alat Ukur Tembaga, Multimeter, LAN Tester & PoE Detector
// Sesi 24: Alat Ukur Optik Dasar: OPM (Optical Power Meter), Light Source (OLS) & VFL Laser
// Sesi 25: Operasional Fusion Splicer, Fiber Cleaver & Standarisasi Sambungan
// Sesi 26: Analisis Kurva OTDR (Optical Time Domain Reflectometer) & Event Loss
// Total 4 Sesi x 30 Soal = 120 Butir Soal Unik Standar Pusmendik

const s23 = {
  sessionId: "s23",
  pg: [
    {
      stimulus: "Wiremap LAN Cable Tester portabel yang terdiri dari unit Master dan Remote banyak digunakan untuk verifikasi kabel UTP setelah pemasangan konektor RJ-45.",
      question: "Fungsi utama dari Wiremap LAN Cable Tester adalah...",
      correctText: "Memverifikasi kontinuitas jalur elektrik dan kebenaran urutan nomor pin 1 sampai 8 dari ujung ke ujung",
      distractors: [
        "Mengukur kecepatan browsing internet dalam Gigabits per second",
        "Menghitung biaya pemakaian kuota data internet bulanan",
        "Menghapus virus dan malware di dalam hard disk komputer",
        "Menyambungkan kabel fiber optik menggunakan busur api listrik"
      ],
      explanation: "LAN Cable Tester memverifikasi kontinuitas elektrik dan pemetaan pin kawat 1-8 untuk mendeteksi kabel putus, korsleting, atau salah urutan pin.",
      quickTip: "Wiremap LAN Tester menguji kontinuitas fisik dan urutan pin 1-8 kabel UTP."
    },
    {
      stimulus: "Saat menguji kabel UTP straight-through dengan LAN tester, lampu nomor 1 pada Master menyala namun lampu nomor 1 dan 2 pada Remote menyala bersamaan.",
      question: "Jenis kerusakan fisik kabel yang ditunjukkan oleh indikasi dua lampu menyala serentak tersebut adalah...",
      correctText: "Short Circuit (Hubung Singkat / Korsleting antar-kawat)",
      distractors: [
        "Open Circuit (Kawat terputus)",
        "Reversed Pair (Pasangan terbalik)",
        "Split Pair (Pasangan terbelah)",
        "Good Cable (Kabel normal)"
      ],
      explanation: "Lampu LED yang menyala bersamaan menandakan konduktor tembaga antar-pin saling bersentuhan (short circuit) akibat isolator terkelupas atau terjepit.",
      quickTip: "Dua lampu LED menyala bersamaan di satu pin = Short Circuit (Korsleting)."
    },
    {
      stimulus: "Pada pengetesan kabel UTP, lampu LED pada Remote menyala dengan urutan: 1, 2, 6, 4, 5, 3, 7, 8 saat Master berjalan 1 sampai 8 berurutan.",
      question: "Jenis kesalahan terminasi kabel yang terjadi pada pin 3 dan pin 6 tersebut adalah...",
      correctText: "Crossed Pin / Miswire (Pin nomor 3 dan pin nomor 6 tertukar posisinya)",
      distractors: [
        "Open Circuit pada pin 3 dan 6",
        "Short Circuit pada pin 3 dan 6",
        "Grounding Error pada kabel",
        "Tegangan listrik petir masuk ke kabel"
      ],
      explanation: "Urutan pin yang melompat (3 dan 6 tertukar posisi nyala) menunjukkan kawat terpasang silang (miswired/crossed) pada konektor RJ-45.",
      quickTip: "Lampu LED menyala tidak berurutan menandakan pin tertukar (Crossed/Miswired)."
    },
    {
      stimulus: "Kondisi kesalahan pengkabelan di mana kontinuitas 1-8 menyala lurus sempurna pada tester LED biasa, namun terjadi lonjakan crosstalk (NEXT) parah akibat kawat dari pasangan pelintiran yang berbeda dipasangkan bersama disebut...",
      question: "Nama jenis gangguan terminasi tersembunyi tersebut adalah...",
      correctText: "Split Pair",
      distractors: [
        "Open Circuit",
        "Short Circuit",
        "Reversed Pin",
        "Ground Fault"
      ],
      explanation: "Split Pair terjadi saat kawat dari dua pasangan lilitan berbeda dipasangkan ke pin transmit/receive. Kontinuitas pin cocok 1-to-1 tetapi pembatalan derau hilang sehingga NEXT sangat tinggi.",
      quickTip: "Kontinuitas lolos tapi crosstalk parah karena salah pasang lilitan = Split Pair."
    },
    {
      stimulus: "Teknisi ingin melacak satu kabel LAN tertentu di antara ratusan kabel kusut di dalam rak patch panel tanpa harus menarik satu per satu kabel.",
      question: "Alat bantu pelacak rute kabel jaringan berbasis sinyal nada audio induksi tersebut adalah...",
      correctText: "Tone Generator and Probe (Cable Tracer / IntelliTone)",
      distractors: [
        "Multimeter Digital jarum",
        "Optical Time Domain Reflectometer",
        "Tang Crimping RJ-45",
        "Solder Listrik 60 Watt"
      ],
      explanation: "Tone Generator menginjeksi sinyal frekuensi radio/audio ke kabel, dan probe induktif mendengarkan nada dengung saat didekatkan ke kabel target di patch panel.",
      quickTip: "Melacak kabel di antara bundel kusut = Tone Generator & Probe (Cable Tracer)."
    },
    {
      stimulus: "Fitur penguji kabel profesional canggih yang mampu mengukur jarak lokasi kawat putus (misal: putus tepat di meter ke-42) menggunakan pantulan gelombang listrik adalah...",
      question: "Nama teknologi pengujian jarak refleksi domain waktu pada tembaga tersebut adalah...",
      correctText: "TDR (Time Domain Reflectometer)",
      distractors: [
        "OTDR (Optical Time Domain Reflectometer)",
        "PoE Detection Circuit",
        "Carrier Sense Multiple Access",
        "Auto-MDIX Circuit"
      ],
      explanation: "TDR mengirim pulsa listrik ke kabel tembaga dan mengukur waktu pantulannya untuk menghitung jarak presisi titik putus (open) atau korsleting (short).",
      quickTip: "Mengukur jarak lokasi kabel tembaga putus = TDR (Time Domain Reflectometer)."
    },
    {
      stimulus: "Perangkat Access Point nirkabel dan kamera IP CCTV modern sering ditenagai listrik langsung melalui kabel LAN menggunakan teknologi PoE.",
      question: "Kepanjangan dari akronim teknologi penyaluran daya listrik lewat kabel data tersebut adalah...",
      correctText: "PoE (Power over Ethernet)",
      distractors: [
        "Point of Entry",
        "Port of Execution",
        "Packet over Ethernet",
        "Protocol of Encapsulation"
      ],
      explanation: "PoE (Power over Ethernet) mengalirkan daya listrik arus searah (DC) bersamaan dengan sinyal data pada kabel twisted pair Ethernet standar.",
      quickTip: "PoE = Power over Ethernet."
    },
    {
      stimulus: "Sebelum mencolokkan laptop teknisi ke port kabel jaringan di dinding yang dicurigai dialiri daya listrik PoE aktif.",
      question: "Alat ukur praktis yang digunakan untuk mendeteksi keberadaan tegangan listrik PoE dan mengidentifikasi tipe standar PoE (802.3af/at/bt) adalah...",
      correctText: "PoE Detector / PoE Tester",
      distractors: [
        "Optical Power Meter",
        "Fiber Cleaver",
        "Tespen Listrik AC 220V biasa",
        "Obeng Plus Magnet"
      ],
      explanation: "PoE Tester mendeteksi voltase DC pada kabel LAN, mengidentifikasi mode pengiriman daya (Mode A / Mode B), dan memastikan port aman dicolokkan.",
      quickTip: "Mendeteksi tegangan daya listrik pada port kabel LAN = PoE Tester / Detector."
    },
    {
      stimulus: "Standar daya Power over Ethernet IEEE 802.3af (PoE Standar) mampu menyalurkan daya listrik maksimal dari switch (PSE) sebesar...",
      question: "Daya maksimum per port pada standar PoE IEEE 802.3af adalah...",
      correctText: "15,4 Watt per port (tegangan ~48V DC)",
      distractors: [
        "30 Watt per port (IEEE 802.3at PoE+)",
        "60-90 Watt per port (IEEE 802.3bt PoE++)",
        "500 Watt per port",
        "1 Watt per port"
      ],
      explanation: "IEEE 802.3af (PoE Tipe 1) menyediakan daya maksimal 15.4W pada sumber (PSE) dan minimal 12.95W pada perangkat penerima (PD).",
      quickTip: "Standar PoE 802.3af = 15.4 Watt per port."
    },
    {
      stimulus: "Standar PoE+ (IEEE 802.3at) dirancang untuk memberi daya pada perangkat dengan konsumsi listrik lebih besar seperti kamera CCTV PTZ (Pan-Tilt-Zoom).",
      question: "Daya maksimum yang mampu disalurkan oleh port switch berstandar PoE+ (IEEE 802.3at) adalah...",
      correctText: "30 Watt per port",
      distractors: [
        "15,4 Watt per port",
        "5 Watt per port",
        "100 Watt per port",
        "220 Watt per port"
      ],
      explanation: "IEEE 802.3at (PoE+) menggandakan kapasitas daya menjadi 30.0W pada PSE (minimal 25.5W di perangkat penerima).",
      quickTip: "Standar PoE+ 802.3at = 30 Watt per port."
    },
    {
      stimulus: "Teknisi menggunakan Multimeter Digital untuk mengukur tegangan adaptor power supply switch jaringan yang tertulis 'Output 12V DC'.",
      question: "Posisi selektor putar pada Multimeter yang tepat untuk mengukur tegangan catu daya DC tersebut adalah...",
      correctText: "V⎓ (DC Voltage / Tegangan Searah) pada skala 20V",
      distractors: [
        "V~ (AC Voltage / Tegangan Bolak-Balik)",
        "Ω (Ohm / Hambatan Resistansi)",
        "A~ (Arus Bolak-Balik AC)",
        "Hz (Frekuensi Gelombang)"
      ],
      explanation: "Tegangan adaptor searah diukur pada selektor DCV (V⎓) dengan batas ukur di atas 12V (skala 20V DC) untuk akurasi pembacaan.",
      quickTip: "Mengukur adaptor 12V = Selektor DC Voltage (V⎓) skala 20V."
    },
    {
      stimulus: "Sebelum menyalakan rack server baru, teknisi memeriksa tegangan jala-jala listrik PLN pada stopkontak dinding di ruang server.",
      question: "Posisi selektor putar Multimeter yang tepat untuk mengukur tegangan listrik PLN 220V adalah...",
      correctText: "V~ (AC Voltage / Tegangan Bolak-Balik) pada skala minimal 250V atau 750V",
      distractors: [
        "V⎓ (DC Voltage 20V)",
        "Pengujian Dioda Bunyi Buzzer",
        "Skala Hambatan 200 Ohm",
        "Arus DC Mikroampere (µA)"
      ],
      explanation: "Listrik PLN adalah arus bolak-balik (AC 220V) sehingga wajib diukur pada selektor ACV (V~) dengan batas ukur di atas 220V (misal skala 750V AC).",
      quickTip: "Mengukur listrik PLN 220V = Selektor AC Voltage (V~) skala >250V."
    },
    {
      stimulus: "Fitur pada Multimeter Digital yang mengeluarkan bunyi nada 'Bip' nyaring ketika kedua jarum probe dihubungkan (hambatan mendekati 0 Ohm) disebut...",
      question: "Nama fitur pengujian keterhubungan jalur kabel tersebut adalah...",
      correctText: "Continuity Test (Uji Kontinuitas dengan Buzzer)",
      distractors: [
        "Frequency Counter",
        "Capacitance Test",
        "Transistor HFE Test",
        "Temperature Probe"
      ],
      explanation: "Continuity test dengan buzzer berbunyi jika hambatan di bawah ~30-50 Ohm, sangat praktis untuk menguji kabel putus atau grounding tanpa melihat layar.",
      quickTip: "Uji keterhubungan kabel bersuara 'bip' = Continuity Test (Buzzer)."
    },
    {
      stimulus: "Teknisi ingin memastikan bahwa rangka besi kabinet Rack Server terhubung dengan baik ke sistem pentanahan (Grounding Rod) gedung.",
      question: "Pengujian cepat menggunakan multimeter digital yang dapat memastikan rangka rak terhubung ke ground adalah...",
      correctText: "Menggunakan mode Continuity Buzzer antara rangka logam rak server dan busbar tembaga grounding gedung",
      distractors: [
        "Mengukur tegangan baterai CMOS motherboard",
        "Menghubungkan probe ke layar monitor LCD",
        "Menghitung jumlah kabel LAN yang terpasang",
        "Mengukur suhu udara ruangan dengan termometer"
      ],
      explanation: "Jika buzzer berbunyi saat probe diletakkan di bodi rak dan terminal grounding, berarti jalur pentanahan tersambung utuh (kontinu).",
      quickTip: "Uji sambungan grounding rak server = Mode Continuity Buzzer Multimeter."
    },
    {
      stimulus: "Saat menggunakan multimeter digital jarum probe, colokan probe warna hitam dan warna merah memiliki posisi standar pada soket terminal multimeter.",
      question: "Soket terminal standar tempat menancapkan probe kabel hitam pada multimeter adalah...",
      correctText: "COM (Common / Ground)",
      distractors: [
        "V/Ω/mA",
        "10A High Current",
        "Output Audio",
        "Ext Probe"
      ],
      explanation: "Probe hitam selalu ditancapkan ke terminal COM (Common/Ground), sedangkan probe merah ditancapkan ke terminal V/Ω/Hz.",
      quickTip: "Probe hitam selalu di soket COM; probe merah di soket V/Ω."
    },
    {
      stimulus: "Alat ukur sertifikasi kabel LAN profesional (seperti Fluke DSX-8000) mampu mengukur parameter Insertion Loss dan NEXT hingga frekuensi 2 GHz.",
      question: "Tingkatan pengujian kabel jaringan tembaga yang paling tinggi dan diakui secara legal untuk garansi pabrik kabel 25 tahun adalah...",
      correctText: "Cable Certification (Sertifikasi Kelayakan Kabel TIA/ISO)",
      distractors: [
        "Cable Verification (hanya cek lampu LED)",
        "Cable Qualification (hanya uji ping paket)",
        "Visual Inspection mata telanjang",
        "Physical Weighting timbangan kabel"
      ],
      explanation: "Tiga tingkatan uji kabel tembaga: 1. Verification (LAN tester LED), 2. Qualification (throughput tester), 3. Certification (Fluke CableAnalyzer standar TIA/ISO).",
      quickTip: "Tingkatan uji tertinggi berstandar industri = Cable Certification."
    },
    {
      stimulus: "Pada pengetesan kontinuitas kabel UTP, jika kabel terputus di tengah jalan, nilai resistansi (Ohm) yang terbaca pada multimeter digital adalah...",
      question: "Indikasi pembacaan layar multimeter saat jalur konduktor terbuka/putus adalah...",
      correctText: "OL (Open Loop / Over Limit / Tak Terhingga)",
      distractors: [
        "0.00 Ohm (Hubung singkat)",
        "100.0 Ohm",
        "50.0 Ohm",
        "Nilai minus (-10 Ohm)"
      ],
      explanation: "'OL' pada multimeter berarti hambatan tak terhingga (open loop), menandakan sirkuit terbuka (kawat putus).",
      quickTip: "Kabel putus terbaca 'OL' (Open Loop / Tak Terhingga) pada multimeter."
    },
    {
      stimulus: "Dalam pengoperasian kabel LAN, PoE dapat disalurkan melalui mode Alternative A atau Alternative B pada kabel UTP 4-pair.",
      question: "Pada mode PoE Alternative B (Midspan), pasangan pin kabel yang digunakan untuk menyalurkan arus listrik DC adalah...",
      correctText: "Pin 4, 5 (+) dan Pin 7, 8 (-)",
      distractors: [
        "Pin 1, 2 (+) dan Pin 3, 6 (-)",
        "Pin 1, 3 (+) dan Pin 2, 6 (-)",
        "Pin 1, 8 (+) dan Pin 2, 7 (-)",
        "Hanya pin nomor 8 saja"
      ],
      explanation: "PoE Mode B (Alternative B) menggunakan pasangan kawat kosong (spare pairs) pada Fast Ethernet, yaitu pin 4, 5 (positif) dan pin 7, 8 (negatif).",
      quickTip: "PoE Mode B menyalurkan daya pada pin 4, 5 dan pin 7, 8."
    },
    {
      stimulus: "Perangkat injektor daya PoE eksternal yang dipasang di antara switch non-PoE dan perangkat Access Point disebut...",
      question: "Nama perangkat penyuntik daya listrik kabel LAN tersebut adalah...",
      correctText: "PoE Injector (Midspan Device)",
      distractors: [
        "PoE Splitter (Pemisah daya)",
        "PoE Extender",
        "Crimping Tool",
        "Keystone Jack"
      ],
      explanation: "PoE Injector menerima data dari switch non-PoE dan menyuntikkan daya listrik DC ke kabel LAN menuju Access Point atau IP Phone.",
      quickTip: "Penyuntik daya listrik ke kabel LAN = PoE Injector."
    },
    {
      stimulus: "Perangkat yang dipasang di sisi penerima untuk memisahkan kembali antara sinyal data LAN dan kabel daya DC untuk menyalakan perangkat non-PoE disebut...",
      question: "Nama perangkat pemisah daya tersebut adalah...",
      correctText: "PoE Splitter",
      distractors: [
        "PoE Injector",
        "PoE Switch",
        "LAN Tester",
        "Patch Panel"
      ],
      explanation: "PoE Splitter memisahkan kabel PoE menjadi satu colokan kabel data RJ-45 dan satu colokan power jack DC untuk perangkat yang belum mendukung PoE bawaan.",
      quickTip: "Pemisah daya dan data di sisi perangkat = PoE Splitter."
    }
  ],
  mcma: [
    {
      stimulus: "Jenis-jenis kesalahan fisik yang dapat dideteksi oleh Wiremap Cable Tester pada kabel twisted pair.",
      question: "Manakah yang TERMASUK jenis kegagalan terminasi kabel yang dapat diidentifikasi? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Open Circuit (salah satu kawat terputus)", isCorrect: true },
        { text: "Short Circuit (kawat konduktor saling bersentuhan korslet)", isCorrect: true },
        { text: "Crossed / Reversed Pair (urutan kawat terbalik/tertukar antar-pin)", isCorrect: true },
        { text: "Laser Beam Attenuation Loss", isCorrect: false },
        { text: "Radio Frequency Modulation Error", isCorrect: false }
      ],
      explanation: "Wiremap mendeteksi Open, Short, Crossed, Reversed, dan Split pair pada kabel tembaga. Laser dan RF adalah domain optik dan radio.",
      quickTip: "Kegagalan kabel tembaga: Open, Short, Reversed, Crossed, dan Split Pair."
    },
    {
      stimulus: "Penggunaan Multimeter Digital dalam instalasi dan perawatan perangkat jaringan.",
      question: "Manakah pengukuran yang DAPAT DILAKUKAN menggunakan Multimeter Digital? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Mengukur tegangan DC power supply adaptor router (skala V⎓)", isCorrect: true },
        { text: "Mengukur tegangan listrik PLN AC 220V pada stopkontak ruang server (skala V~)", isCorrect: true },
        { text: "Menguji kontinuitas keterhubungan kabel dan jalur grounding (fitur Buzzer Beep)", isCorrect: true },
        { text: "Mengukur kekuatan sinyal cahaya laser serat optik dalam satuan dBm", isCorrect: false },
        { text: "Membaca alamat IP address laptop siswa secara otomatis", isCorrect: false }
      ],
      explanation: "Multimeter mengukur besaran listrik (Tegangan AC/DC, Hambatan Ohm, Kontinuitas, Arus). Cahaya laser diukur dengan OPM, bukan multimeter.",
      quickTip: "Multimeter mengukur tegangan listrik AC/DC, hambatan, dan kontinuitas jalur."
    },
    {
      stimulus: "Teknologi Power over Ethernet (PoE) pada jaringan komputer.",
      question: "Manakah pernyataan yang BENAR mengenai teknologi PoE? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "PoE memungkinkan pengiriman daya listrik DC dan data secara bersamaan melalui satu kabel UTP", isCorrect: true },
        { text: "Standar IEEE 802.3at (PoE+) mampu menyalurkan daya hingga 30 Watt per port", isCorrect: true },
        { text: "Kabel PoE dialiri arus listrik tegangan tinggi 10.000 Volt yang mematikan", isCorrect: false },
        { text: "PoE hanya dapat digunakan pada kabel serat optik kaca", isCorrect: false },
        { text: "Semua laptop di dunia wajib dicas menggunakan kabel PoE LAN", isCorrect: false }
      ],
      explanation: "PoE mengalirkan daya DC (biasanya ~48V, aman) bersama data di kabel UTP tembaga, dengan daya hingga 30W pada PoE+ (802.3at).",
      quickTip: "PoE menyalurkan daya listrik DC dan data via kabel UTP (PoE+ hingga 30W)."
    },
    {
      stimulus: "Alat bantu kerja teknisi jaringan tembaga profesional di lapangan.",
      question: "Manakah pasangan alat kerja tembaga dan fungsinya yang BENAR? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Tone Generator and Probe berfungsi melacak kabel tertentu di antara tumpukan kabel kusut", isCorrect: true },
        { text: "TDR (Time Domain Reflectometer) berfungsi mendeteksi jarak lokasi kabel yang putus", isCorrect: true },
        { text: "Fusion Splicer berfungsi menjepit konektor RJ-45", isCorrect: false },
        { text: "LAN Tester LED berfungsi menyambung serat kaca dengan api listrik", isCorrect: false },
        { text: "Crimping Tool berfungsi mengukur tegangan listrik PLN 220V", isCorrect: false }
      ],
      explanation: "Tone Generator melacak kabel via nada audio, dan TDR mengukur jarak titik kabel putus. Fusion splicer adalah alat fiber optik, dan crimping tool adalah alat mekanik jepit RJ-45.",
      quickTip: "Tone Generator melacak kabel; TDR menghitung jarak titik putus."
    },
    {
      stimulus: "Penyebab kegagalan uji kelayakan kabel LAN pada instalasi gedung.",
      question: "Manakah kesalahan pengerjaan yang DAPAT MENYEBABKAN kabel LAN gagal uji tester? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Pisau kontak pin RJ-45 tidak ditekan cukup dalam saat crimping sehingga kawat tidak kontak", isCorrect: true },
        { text: "Urutan warna kawat tertukar antara pin 1 dan pin 2 saat terminasi", isCorrect: true },
        { text: "Kabel terjepit pintu besi atau tertusuk paku hingga konduktor tembaga di dalamnya putus", isCorrect: true },
        { text: "Menjaga batas panjang bentangan kabel di bawah 90 meter", isCorrect: false },
        { text: "Mengikuti standar warna TIA/EIA 568B di kedua ujung kabel", isCorrect: false }
      ],
      explanation: "Crimping longgar, urutan pin tertukar, dan kabel terjepit putus adalah penyebab utama kegagalan uji LAN tester.",
      quickTip: "Penyebab gagal uji: Crimping tidak tembus, pin tertukar, atau kawat putus terjepit."
    }
  ],
  tf: [
    {
      stimulus: "Penggunaan LAN Cable Tester LED.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai LAN Cable Tester!",
      statements: [
        { text: "Lampu LED 1 sampai 8 yang menyala berurutan bersamaan di Master dan Remote menunjukkan kabel straight-through berfungsi baik.", correct: "B" },
        { text: "Jika salah satu lampu LED pada remote mati, maka jalur kawat nomor tersebut mengalami kondisi Open (putus).", correct: "B" },
        { text: "LAN Tester LED baterai 9V sederhana mampu mengukur bandwidth kecepatan kabel dalam satuan Gigabits per second.", correct: "S" }
      ],
      explanation: "LAN tester LED sederhana hanya menguji kontinuitas kelistrikan fisik (wiremap), bukan mengukur kecepatan bandwidth data.",
      quickTip: "LAN tester LED hanya menguji kontinuitas jalur kawat pin 1-8."
    },
    {
      stimulus: "Penggunaan Multimeter Digital untuk pengujian tegangan.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai pengukuran multimeter!",
      statements: [
        { text: "Untuk mengukur stopkontak listrik PLN 220V, selektor multimeter harus diatur pada posisi AC Voltage (V~).", correct: "B" },
        { text: "Untuk mengukur tegangan adaptor power supply 12V, selektor harus diatur pada posisi DC Voltage (V⎓).", correct: "B" },
        { text: "Mengukur tegangan stopkontak PLN 220V pada posisi selektor Hambatan (Ohm/Buzzer) adalah tindakan yang aman dan dianjurkan.", correct: "S" }
      ],
      explanation: "Mengukur tegangan listrik pada mode Ohm/Buzzer akan langsung merusak multimeter (sekring putus atau terbakar) akibat korsleting internal.",
      quickTip: "Dilarang mengukur tegangan listrik PLN pada mode Ohm / Buzzer (multimeter bisa meledak/rusak)."
    },
    {
      stimulus: "Fitur deteksi kesalahan kabel tembaga berbasis TDR.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai teknologi TDR!",
      statements: [
        { text: "TDR (Time Domain Reflectometer) dapat mendeteksi jarak presisi titik kabel yang terputus di dalam dinding.", correct: "B" },
        { text: "TDR bekerja dengan memancarkan sinyal pulsa listrik dan mengukur jeda waktu pantulannya.", correct: "B" },
        { text: "TDR adalah alat pemotong kawat kabel tembaga otomatis dengan sensor panas.", correct: "S" }
      ],
      explanation: "TDR adalah instrumen pengujian elektronik berbasis refleksi gelombang, bukan alat pemotong fisik kabel.",
      quickTip: "TDR mengukur lokasi putusnya kawat via pantulan gelombang elektrik."
    },
    {
      stimulus: "Penyaluran daya listrik lewat Power over Ethernet (PoE).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai PoE!",
      statements: [
        { text: "Teknologi PoE meniadakan kebutuhan penarikan kabel listrik terpisah ke lokasi perangkat Access Point di plafon.", correct: "B" },
        { text: "PoE Tester dapat mendeteksi apakah suatu port kabel LAN dialiri tegangan PoE atau tidak.", correct: "B" },
        { text: "Mencolokkan laptop biasa ke port PoE switch standar IEEE 802.3af akan langsung membakar kartu jaringan laptop seketika.", correct: "S" }
      ],
      explanation: "Standar IEEE 802.3af/at memiliki mekanisme handshake pendeteksi beban resistif sebelum daya dialirkan, sehingga aman dicolokkan ke laptop non-PoE.",
      quickTip: "PoE standar IEEE 802.3af/at aman; daya hanya mengalir jika perangkat terdeteksi butuh PoE."
    },
    {
      stimulus: "Uji kontinuitas grounding rack server dengan multimeter buzzer.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang pengujian grounding!",
      statements: [
        { text: "Bunyi 'bip' pada multimeter menandakan hambatan antara rak dan kabel ground sangat rendah (tersambung baik).", correct: "B" },
        { text: "Grounding rack server yang baik melindungi perangkat dari kerusakan akibat lonjakan listrik induksi petir.", correct: "B" },
        { text: "Rack server data center tidak memerlukan kabel grounding sama sekali jika kabel LAN berwarna biru.", correct: "S" }
      ],
      explanation: "Seluruh rack server wajib terhubung ke grounding rod gedung demi keselamatan nyawa teknisi dan perlindungan dari lonjakan arus liar.",
      quickTip: "Grounding rack server wajib terpasang sempurna untuk keselamatan dan proteksi induksi."
    }
  ]
};

const s24 = {
  sessionId: "s24",
  pg: [
    {
      stimulus: "Visual Fault Locator (VFL) merupakan instrumen optik genggam berbentuk senter pena yang sangat sering digunakan oleh teknisi fiber optik di lapangan.",
      question: "Fungsi utama dari Visual Fault Locator (VFL Laser Senter Merah) adalah...",
      correctText: "Melacak kontinuitas inti serat dan mendeteksi titik tekukan ekstrem (macrobending) atau retakan kaca melalui pendaran cahaya merah tampak",
      distractors: [
        "Mengukur nilai redaman kabel dalam satuan desibel (dB)",
        "Melebur dua serat kaca menggunakan busur api listrik",
        "Menghitung alamat IP yang lewat di dalam serat optik",
        "Menyolder kawat tembaga kabel LAN ke konektor RJ-45"
      ],
      explanation: "VFL memancarkan laser merah tampak (panjang gelombang ~650 nm) yang akan berpendar keluar menembus jaket kabel jika terdapat serat kaca yang patah atau tertekuk tajam.",
      quickTip: "VFL = Laser merah tampak (650 nm) untuk melacak kontinuitas dan titik retak/patah pada serat."
    },
    {
      stimulus: "Laser yang dipancarkan oleh Visual Fault Locator (VFL) berada pada spektrum cahaya tampak yang dapat dilihat langsung oleh mata telanjang.",
      question: "Panjang gelombang cahaya tampak yang dipancarkan oleh VFL standar adalah...",
      correctText: "Sekitar 650 nanometer (nm) berwarna merah terang",
      distractors: [
        "1310 nanometer (nm) inframerah",
        "1550 nanometer (nm) inframerah",
        "850 nanometer (nm) inframerah dekat",
        "10 nanometer (nm) sinar X-ray"
      ],
      explanation: "VFL menggunakan dioda laser merah tampak pada panjang gelombang ~650 nm (cahaya merah) sehingga kebocoran cahaya pada serat kaca dapat dilihat langsung oleh mata.",
      quickTip: "Panjang gelombang laser VFL = 650 nm (cahaya merah tampak)."
    },
    {
      stimulus: "Meskipun cahaya VFL berada pada spektrum tampak, terdapat aturan keselamatan kerja K3 optik yang mutlak dilarang dilakukan oleh teknisi.",
      question: "Larangan keselamatan kerja utama saat mengoperasikan laser VFL maupun sumber cahaya optik lainnya adalah...",
      correctText: "Dilarang menatap langsung ke ujung konektor atau ujung serat optik yang sedang memancarkan laser",
      distractors: [
        "Dilarang menyalakan VFL jika teknisi mengenakan safety helmet",
        "Dilarang membawa VFL ke luar ruangan kantor",
        "Dilarang menyalakan VFL pada siang hari",
        "Dilarang menggunakan baterai alkaline pada VFL"
      ],
      explanation: "Energi laser yang terfokus ke retina mata dapat menyebabkan kebutaan permanen seketika tanpa rasa sakit karena retina tidak memiliki saraf perasa panas.",
      quickTip: "K3 Laser: Jangan pernah menatap langsung ke ujung konektor serat optik yang aktif!"
    },
    {
      stimulus: "Alat ukur Optical Power Meter (OPM) digunakan untuk mengukur kekuatan daya sinyal optik yang diterima.",
      question: "Satuan logaritmik mutlak yang digunakan pada layar OPM untuk menampilkan daya pancar cahaya terhadap referensi 1 miliwatt adalah...",
      correctText: "dBm (decibel-milliwatt)",
      distractors: [
        "dB (decibel relatif)",
        "Watt / Kilowatt",
        "Volt / Millivolt",
        "Ohm / Kiloohm"
      ],
      explanation: "dBm mengukur daya mutlak berbasis 1 mW (0 dBm = 1 mW). dB (tanpa huruf m) digunakan untuk menyatakan perbandingan redaman relatif (loss).",
      quickTip: "Satuan daya mutlak optik pada OPM = dBm; Satuan redaman relatif = dB."
    },
    {
      stimulus: "Pada skala logaritmik daya mutlak optik (dBm), nilai 0 dBm setara dengan daya fisik dalam satuan miliwatt sebesar...",
      question: "Nilai daya fisik yang setara dengan 0 dBm adalah...",
      correctText: "Tepat 1,0 miliwatt (1 mW)",
      distractors: [
        "0 miliwatt (0 mW)",
        "10 miliwatt (10 mW)",
        "100 miliwatt (100 mW)",
        "0,001 miliwatt"
      ],
      explanation: "Rumus dBm = 10 * log10 (P / 1 mW). Jika P = 1 mW, maka 10 * log10(1) = 0 dBm.",
      quickTip: "0 dBm setara dengan daya fisik tepat 1 mW."
    },
    {
      stimulus: "Jika daya sinyal cahaya yang diukur pada OPM mengalami kenaikan sebesar +10 dBm.",
      question: "Berapa kali lipat kenaikan daya fisik cahaya dalam skala linear miliwatt dari kenaikan +10 dBm tersebut?",
      correctText: "10 kali lipat lebih besar",
      distractors: [
        "2 kali lipat",
        "100 kali lipat",
        "1.000 kali lipat",
        "Sama saja tidak berubah"
      ],
      explanation: "Dalam skala logaritmik 10 log: penambahan +10 dB berarti daya dikali 10 (10 dBm = 10 mW; 20 dBm = 100 mW; 30 dBm = 1000 mW = 1 Watt).",
      quickTip: "Kenaikan +10 dB = Daya naik 10 kali lipat; Penurunan -3 dB = Daya berkurang separuh (50%)."
    },
    {
      stimulus: "Pada pengukuran di sisi pelanggan FTTH (roset / ONT), teknisi menggunakan Optical Power Meter untuk mengukur daya terima (Rx Power).",
      question: "Rentang nilai daya terima (Rx Power) yang optimal dan memenuhi standar kualitas layanan FTTH GPON adalah sekitar...",
      correctText: "-15 dBm sampai -24 dBm",
      distractors: [
        "+15 dBm sampai +30 dBm",
        "-35 dBm sampai -45 dBm",
        "0 dBm tepat",
        "-5 dBm sampai +5 dBm"
      ],
      explanation: "Standar daya terima ONT GPON yang baik adalah antara -15 dBm hingga -24 dBm. Di bawah -27 dBm koneksi rentan putus (LOS), sedangkan di atas -8 dBm receiver bisa rusak terbakar.",
      quickTip: "Daya terima normal ONT FTTH = antara -15 dBm s.d. -24 dBm."
    },
    {
      stimulus: "Pada pengukuran di sisi modem ONT pelanggan FTTH, layar OPM menunjukkan nilai daya terima sebesar -32,5 dBm, dan lampu indikator LOS pada modem berkedip merah.",
      question: "Analisis teknis yang paling tepat mengenai penyebab lampu LOS berkedip merah tersebut adalah...",
      correctText: "Daya terima sinyal cahaya optik terlalu lemah (redaman terlalu tinggi melampaui batas sensitivitas receiver ONT ~ -27 dBm)",
      distractors: [
        "Daya terima sinyal cahaya optik terlalu kuat dan merusak ONT",
        "Kabel listrik PLN pelanggan mengalami korsleting tegangan tinggi",
        "Komputer pelanggan terkena virus trojan berbahaya",
        "Koneksi internet sedang berjalan pada kecepatan 10 Gbps"
      ],
      explanation: "Sensitivitas penerima ONT GPON adalah sekitar -27 dBm. Nilai -32.5 dBm berada jauh di bawah ambang batas deteksi sehingga terjadi Loss of Signal (LOS).",
      quickTip: "Daya terima -32 dBm memicu alarm LOS (Loss of Signal) karena sinyal terlalu redup."
    },
    {
      stimulus: "Optical Light Source (OLS) merupakan perangkat pasangan kerja dari Optical Power Meter.",
      question: "Fungsi utama dari Optical Light Source (OLS) adalah...",
      correctText: "Memancarkan sinyal cahaya laser stabil dengan daya konstan pada panjang gelombang tertentu untuk pengujian redaman",
      distractors: [
        "Merekam video kondisi fisik kabel optik di bawah tanah",
        "Membersihkan ujung ferrule konektor dari butiran debu",
        "Memotong serat kaca menjadi serpihan kecil",
        "Mengubah sinyal optik menjadi tegangan listrik 220 Volt"
      ],
      explanation: "OLS memancarkan cahaya dengan daya keluaran yang sangat stabil (misal -5 dBm konstan) pada 1310/1550 nm untuk dijadikan sumber referensi ukur.",
      quickTip: "OLS memancarkan sinyal cahaya laser stabil dengan daya konstan."
    },
    {
      stimulus: "Metode standar industri untuk mengukur total redaman penyisipan (Insertion Loss) sebuah bentangan jalur kabel optik menggunakan kombinasi dua alat disebut...",
      question: "Pasangan alat ukur yang digunakan dalam pengujian Insertion Loss tersebut adalah...",
      correctText: "Optical Light Source (OLS) di sisi pengirim dan Optical Power Meter (OPM) di sisi penerima",
      distractors: [
        "Visual Fault Locator dan LAN Tester LED",
        "Multimeter Digital dan Tang Crimping RJ-45",
        "Fusion Splicer dan Obeng Plus",
        "Fiber Cleaver dan Tang Buaya"
      ],
      explanation: "Metode OLTS (Optical Loss Test Set) memanfaatkan OLS memancarkan daya konstan di satu ujung dan OPM mengukur sisa daya yang sampai di ujung lainnya.",
      quickTip: "Uji redaman total jalur (Insertion Loss) = Pasangan OLS dan OPM."
    },
    {
      stimulus: "Sebelum memulai pengukuran redaman kabel optik di lapangan dengan OLS dan OPM, teknisi menghubungkan kedua alat dengan satu kabel patch cord pendek lalu menekan tombol [REF] / [ZERO].",
      question: "Tujuan dari prosedur kalibrasi 'Set Reference' (Zeroing) tersebut adalah...",
      correctText: "Mengompensasi (mengeliminasi) redaman bawaan dari kabel patch cord referensi sehingga pengukuran hanya menghitung redaman kabel uji murni",
      distractors: [
        "Mengisi ulang daya baterai OLS dari baterai OPM",
        "Menghapus seluruh memori konfigurasi pabrik alat ukur",
        "Menyalakan lampu senter penerangan darurat",
        "Mengunci tombol alat agar tidak bisa ditekan lagi"
      ],
      explanation: "Set Reference menetapkan titik acuan 0.00 dB dengan mengurangkan redaman patch cord uji awal, sehingga hasil pembacaan berikutnya murni mewakili redaman kabel jaringan.",
      quickTip: "Set Reference pada OPM/OLS bertujuan menolkan redaman kabel jumper uji (titik 0 dB)."
    },
    {
      stimulus: "Pada pengukuran OPM, teknisi harus memilih kalibrasi panjang gelombang (wavelength calibration, tombol λ) yang sesuai dengan sumber cahaya yang diukur.",
      question: "Panjang gelombang standar yang harus dipilih pada OPM saat mengukur sinyal data hilir (downstream data) pada jaringan GPON FTTH adalah...",
      correctText: "1490 nanometer (nm)",
      distractors: [
        "850 nanometer (nm)",
        "650 nanometer (nm)",
        "1310 nanometer (nm)",
        "1550 nanometer (nm)"
      ],
      explanation: "Standar ITU-T G.984 GPON menggunakan 1490 nm untuk downstream data, 1310 nm untuk upstream data, dan 1550 nm untuk RF video broadcast.",
      quickTip: "Panjang gelombang downstream data GPON pada OPM = 1490 nm."
    },
    {
      stimulus: "Teknisi mengukur daya keluaran pemancar OLS sebesar -5,0 dBm pada satu ujung kabel. Di ujung penerima, OPM membaca daya sebesar -12,0 dBm.",
      question: "Berapakah total redaman (Total Insertion Loss) dari bentangan kabel optik tersebut?",
      correctText: "7,0 dB",
      distractors: [
        "-17,0 dB",
        "17,0 dB",
        "-7,0 dB",
        "60,0 dB"
      ],
      explanation: "Redaman Loss = Daya Masuk (Pin) - Daya Keluar (Pout) = (-5.0 dBm) - (-12.0 dBm) = +7.0 dB.",
      quickTip: "Loss = Pin - Pout: -5 dBm dikurangi -12 dBm = 7 dB."
    },
    {
      stimulus: "Komponen pasif Optical Splitter 1:8 digunakan di dalam kotak ODP FTTH untuk membagi satu serat masukan menjadi 8 serat keluaran ke pelanggan.",
      question: "Besarnya redaman teoritis yang dihasilkan oleh sebuah Optical Splitter pasif rasio 1:8 adalah sekitar...",
      correctText: "Sekitar 9,5 dB hingga 10,5 dB",
      distractors: [
        "Tepat 0 dB (tanpa redaman sama sekali)",
        "Sekitar 3,0 dB hingga 3,5 dB (Splitter 1:2)",
        "Sekitar 6,0 dB hingga 7,0 dB (Splitter 1:4)",
        "Sekitar 20 dB hingga 25 dB"
      ],
      explanation: "Tiap pembagian 1:2 menghasilkan redaman ~3 dB. Maka 1:8 (tiga tahap 1:2) menghasilkan redaman teoritis 3 x 3.5 dB = ~10.5 dB.",
      quickTip: "Redaman Optical Splitter: 1:2 ~ 3.5 dB; 1:4 ~ 7 dB; 1:8 ~ 10.5 dB; 1:16 ~ 14 dB."
    },
    {
      stimulus: "Komponen pasif Optical Splitter 1:16 digunakan pada jaringan distribusi fiber optik perumahan padat.",
      question: "Besarnya redaman teoritis yang dihasilkan oleh Optical Splitter rasio 1:16 adalah sekitar...",
      correctText: "Sekitar 13,5 dB hingga 14,5 dB",
      distractors: [
        "Sekitar 3,5 dB",
        "Sekitar 7,0 dB",
        "Sekitar 10,5 dB",
        "Sekitar 30,0 dB"
      ],
      explanation: "Splitter 1:16 adalah empat tingkat pembagian 1:2 (2^4 = 16), menghasilkan redaman rata-rata sekitar 14 dB.",
      quickTip: "Redaman Optical Splitter 1:16 = sekitar 14 dB."
    },
    {
      stimulus: "Teknisi mengukur sinyal laser yang keluar langsung dari modul transceiver SFP OLT di sentral CO sebelum masuk ke kabel distribusi.",
      question: "Nilai daya pancar keluaran (Tx Power) modul SFP GPON Class B+ yang normal terbaca pada OPM adalah sekitar...",
      correctText: "+1,5 dBm sampai +5,0 dBm",
      distractors: [
        "-25,0 dBm sampai -30,0 dBm",
        "+50,0 dBm sampai +100,0 dBm",
        "-50,0 dBm sampai -70,0 dBm",
        "0 dBm tepat tanpa toleransi"
      ],
      explanation: "Modul SFP GPON OLT Class B+ memancarkan daya positif sebesar +1.5 dBm hingga +5.0 dBm (Class C+ mencapai +3 hingga +7 dBm).",
      quickTip: "Tx Power modul SFP GPON OLT bernilai positif = sekitar +1.5 dBm s.d. +5 dBm."
    },
    {
      stimulus: "Pada ujung konektor serat optik terdapat penutup pelindung plastik kecil (Dust Cap) yang selalu terpasang dari pabrik.",
      question: "Fungsi utama dari pemasangan Dust Cap pada ujung ferrule konektor optik adalah...",
      correctText: "Melindungi permukaan ferrule dari kontaminasi partikel debu mikro, minyak tangan, dan goresan fisik",
      distractors: [
        "Mencegah kabel mengeluarkan arus listrik tegangan tinggi",
        "Mengubah warna cahaya laser menjadi warna pelangi",
        "Membuat kabel menjadi tahan terhadap air mendidih",
        "Meningkatkan kecepatan transfer data saat terpasang"
      ],
      explanation: "Partikel debu berukuran 1 mikron pada ferrule dapat menutupi core 9 mikron atau menggores kaca saat ditancapkan, memicu redaman tinggi. Dust cap wajib dipasang saat konektor tidak dicolokkan.",
      quickTip: "Dust Cap melindungi permukaan ujung konektor dari partikel debu dan goresan."
    },
    {
      stimulus: "Alat pembersih mekanik berbentuk pena (One-Click Fiber Cleaner) digunakan sebelum menancapkan konektor ke port adapter.",
      question: "Mekanisme kerja dari alat pembersih One-Click Cleaner tersebut adalah...",
      correctText: "Memutar pita kain mikrofiber bebas serat secara otomatis untuk menyapu bersih debu dan minyak pada ujung ferrule",
      distractors: [
        "Menyemprotkan air sabun cair bertekanan tinggi",
        "Membakar kotoran menggunakan api lilin",
        "Mengikis kaca ferrule dengan amplas besi kasar",
        "Menyedot debu dengan motor vacuum cleaner mini"
      ],
      explanation: "One-Click Cleaner memutar untaian benang pembersih mikrofiber kering (dry cleaning) dengan satu dorongan klik lembut tanpa merusak permukaan ferrule keramik.",
      quickTip: "One-Click Cleaner membersihkan ujung ferrule dengan putaran kain mikrofiber khusus."
    },
    {
      stimulus: "Mikroskop inspeksi serat optik digital (Fiber Video Microscope / Fiber Probe) digunakan untuk memeriksa kondisi permukaan ujung ferrule.",
      question: "Tujuan teknisi memeriksa ujung ferrule konektor menggunakan mikroskop serat optik sebelum penyambungan adalah...",
      correctText: "Memastikan tidak ada partikel debu, noda minyak, atau goresan retak pada area inti kaca (core) ferrule",
      distractors: [
        "Melihat apakah ada bakteri atau kuman yang menempel",
        "Menghitung jumlah bit data yang mengalir di kabel",
        "Melihat warna cat jaket luar kabel",
        "Mengetahui merk pabrik pembuat kabel"
      ],
      explanation: "Standar IEC 61300-3-35 mensyaratkan inspeksi visual mikroskop (Inspect Before You Connect) untuk memastikan core zona A bebas dari goresan dan kotoran.",
      quickTip: "Inspeksi mikroskop optik memastikan ferrule bersih dari goresan dan debu."
    },
    {
      stimulus: "Dalam penanganan limbah potongan serat kaca halus (fiber shards) sisa pemotongan konektor di meja kerja pengujian optik.",
      question: "SOP K3 yang BENAR dalam memperlakukan pecahan serat kaca optik adalah...",
      correctText: "Mengumpulkan pecahan kaca dengan pinset/selotip dan membuangnya ke dalam wadah tertutup khusus limbah tajam (Sharps Container)",
      distractors: [
        "Meniup pecahan kaca menggunakan hembusan napas ke udara ruangan",
        "Menyapu pecahan kaca ke lantai dengan telapak tangan telanjang",
        "Membuang pecahan kaca ke dalam kotak makanan atau cangkir minuman",
        "Membiarkan pecahan kaca berserakan di atas karpet laboratorium"
      ],
      explanation: "Serpihan kaca serat optik sangat tipis dan tajam; jika menembus kulit dapat masuk ke aliran darah atau terhirup ke paru-paru. Wajib dibuang ke wadah tertutup khusus limbah tajam.",
      quickTip: "Pecahan serat kaca wajib dibuang ke wadah tertutup khusus limbah tajam (Sharps Container)."
    }
  ],
  mcma: [
    {
      stimulus: "Karakteristik dan fungsi instrumen Visual Fault Locator (VFL).",
      question: "Manakah pernyataan yang BENAR mengenai Visual Fault Locator? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Memancarkan sinar laser merah tampak pada panjang gelombang sekitar 650 nm", isCorrect: true },
        { text: "Sangat efektif untuk mendeteksi titik tekukan ekstrem (macrobending) dan serat retak di dalam patch cord", isCorrect: true },
        { text: "Dilarang keras menatap langsung ke sumber pancaran sinar laser VFL dengan mata telanjang", isCorrect: true },
        { text: "Dapat mengukur besarnya redaman kabel dalam satuan desibel (dB) secara presisi", isCorrect: false },
        { text: "Digunakan untuk mengepres konektor RJ-45 ke kabel UTP", isCorrect: false }
      ],
      explanation: "VFL memancarkan laser merah tampak 650 nm untuk pelacakan visual tekukan/retak. VFL tidak mengukur angka dB (yang mengukur dB adalah OPM).",
      quickTip: "VFL: Laser merah 650 nm, mendeteksi tekukan/retakan visual, bahaya ditatap langsung."
    },
    {
      stimulus: "Penggunaan Optical Power Meter (OPM) dalam pemeliharaan jaringan optik.",
      question: "Manakah parameter dan fungsi yang TEPAT pada pengoperasian OPM? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Mengukur daya mutlak sinyal optik yang diterima dalam satuan dBm", isCorrect: true },
        { text: "Menyediakan pilihan kalibrasi panjang gelombang (seperti 850, 1310, 1490, dan 1550 nm)", isCorrect: true },
        { text: "Dapat digunakan bersama OLS untuk mengukur total insertion loss pada suatu bentangan kabel", isCorrect: true },
        { text: "Mampu menyambung dua ujung serat kaca yang terputus di dalam tanah", isCorrect: false },
        { text: "Menghitung jumlah paket ping yang hilang secara otomatis", isCorrect: false }
      ],
      explanation: "OPM mengukur daya optik (dBm), menyediakan pilihan panjang gelombang, dan berpasangan dengan OLS untuk mengukur loss. OPM bukan alat penyambung serat.",
      quickTip: "Fungsi OPM: Mengukur daya dBm, kalibrasi panjang gelombang, dan mengukur loss bersama OLS."
    },
    {
      stimulus: "Nilai redaman tipikal pada komponen pasif jaringan FTTH GPON.",
      question: "Manakah estimasi nilai redaman pasif berikut yang SESUAI dengan standar industri? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Optical Splitter 1:8 memiliki redaman rata-rata sekitar 10.5 dB", isCorrect: true },
        { text: "Optical Splitter 1:16 memiliki redaman rata-rata sekitar 14.0 dB", isCorrect: true },
        { text: "Satu sambungan fusion splice yang baik memiliki redaman rata-rata 15.0 dB", isCorrect: false },
        { text: "Kabel fiber Single-Mode 1 km pada 1310 nm memiliki redaman 50 dB", isCorrect: false },
        { text: "Optical Splitter 1:2 memiliki redaman 25.0 dB", isCorrect: false }
      ],
      explanation: "Splitter 1:8 ~ 10.5 dB; Splitter 1:16 ~ 14 dB. Sambungan fusion yang baik redamannya < 0.05 dB (bukan 15 dB). Kabel SMF 1 km redamannya ~0.35 dB.",
      quickTip: "Redaman splitter: 1:8 ~ 10.5 dB; 1:16 ~ 14 dB."
    },
    {
      stimulus: "SOP pembersihan dan perawatan konektor serat optik sebelum pengukuran.",
      question: "Manakah prosedur pembersihan konektor optik yang BENAR menurut standar K3? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menggunakan pembersih mikrofiber khusus seperti One-Click Cleaner atau kaset pembersih optik", isCorrect: true },
        { text: "Menggunakan alkohol isopropil dengan kemurnian tinggi 99% (IPA) jika menggunakan pembersih basah", isCorrect: true },
        { text: "Selalu menutup ujung konektor dengan Dust Cap bersih saat tidak terpasang ke adapter", isCorrect: true },
        { text: "Membersihkan ujung konektor dengan cara mengusapnya pada celana jeans atau kaos kerja", isCorrect: false },
        { text: "Meniup ujung ferrule konektor dengan ludah untuk melumasi kaca", isCorrect: false }
      ],
      explanation: "Pembersihan optik wajib memakai alat khusus mikrofiber/One-Click cleaner, alkohol isopropil 99%, dan dust cap. Mengusap ke baju atau meniup akan mengotori kaca dengan minyak dan air liur.",
      quickTip: "Pembersihan konektor: One-Click cleaner, alkohol 99%, dan pasang dust cap."
    },
    {
      stimulus: "Keselamatan kerja (K3) penanganan laser dan pecahan kaca serat optik.",
      question: "Manakah tindakan K3 yang WAJIB dipatuhi oleh teknisi fiber optik? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Menggunakan kacamata pelindung keselamatan (Safety Glasses) saat mengupas dan memotong serat optik", isCorrect: true },
        { text: "Menampung seluruh serpihan kaca serat sisa potongan ke dalam wadah pembuangan tertutup khusus", isCorrect: true },
        { text: "Makan dan minum sambil memotong serat kaca di atas meja kerja yang sama", isCorrect: false },
        { text: "Menggosok mata dengan tangan setelah memegang serpihan kaca serat optik", isCorrect: false },
        { text: "Menatap langsung ke lubang laser pemancar untuk memastikan lampunya hidup", isCorrect: false }
      ],
      explanation: "SOP K3 optik: Gunakan kacamata safety, buang serpihan kaca ke wadah khusus, dilarang makan/minum di area kerja potong kaca, dan jangan menatap laser.",
      quickTip: "K3 optik: Kacamata pelindung & wadah pembuangan serpihan kaca khusus."
    }
  ],
  tf: [
    {
      stimulus: "Karakteristik keselamatan laser Visual Fault Locator (VFL).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai instrumen VFL!",
      statements: [
        { text: "Sinar laser merah VFL dapat membantu teknisi menemukan kabel drop yang retak di dalam tiang atau roset.", correct: "B" },
        { text: "Menatap langsung sinar laser VFL ke dalam mata dapat merusak penglihatan retina secara permanen.", correct: "B" },
        { text: "Sinar laser VFL aman ditatap langsung dari jarak 1 cm karena cahayanya sama seperti senter mainan biasa.", correct: "S" }
      ],
      explanation: "Laser VFL adalah radiasi koheren terfokus yang sangat berbahaya jika mengenai retina mata secara langsung.",
      quickTip: "Dilarang menatap sinar laser optik langsung; berisiko kebutaan permanen."
    },
    {
      stimulus: "Perbedaan satuan ukur dBm dan dB pada pengujian optik.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang satuan optik!",
      statements: [
        { text: "Satuan dBm menyatakan nilai daya mutlak yang terukur relatif terhadap referensi 1 miliwatt.", correct: "B" },
        { text: "Satuan dB (decibel) menyatakan nilai redaman relatif atau perbandingan kehilangan daya sinyal.", correct: "B" },
        { text: "Nilai daya terima optik sebesar 0 dBm berarti kabel tersebut mati total tanpa ada daya cahaya sama sekali.", correct: "S" }
      ],
      explanation: "Nilai 0 dBm berarti dayanya tepat 1.0 miliwatt (bukan mati). Kabel yang mati tanpa daya memiliki nilai mendekati minus tak terhingga (<-60 dBm).",
      quickTip: "0 dBm = Tepat 1 miliwatt daya cahaya aktif (bukan mati)."
    },
    {
      stimulus: "Standar daya terima sinyal ONT pada jaringan FTTH GPON.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai daya terima ONT!",
      statements: [
        { text: "Daya terima normal pada modem ONT pelanggan GPON berada di rentang -15 dBm sampai -24 dBm.", correct: "B" },
        { text: "Jika daya terima terukur -30 dBm, modem ONT akan mengalami Loss of Signal (lampu LOS merah).", correct: "B" },
        { text: "Semakin rendah nilai dBm (misal -40 dBm), maka koneksi internet akan semakin kencang dan stabil.", correct: "S" }
      ],
      explanation: "Nilai -40 dBm berarti sinyal sangat redup (sangat lemah), jauh melampaui batas sensitivitas sehingga koneksi putus total.",
      quickTip: "Sinyal -40 dBm terlalu redup dan putus total (batas sensitivitas ONT ~ -27 dBm)."
    },
    {
      stimulus: "Metode pengukuran Insertion Loss dengan OLS dan OPM.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang kalibrasi OLS dan OPM!",
      statements: [
        { text: "Prosedur 'Set Reference' dilakukan untuk mengeliminasi redaman kabel jumper penguji dari hasil pengukuran.", correct: "B" },
        { text: "Nilai Insertion Loss dihitung dari selisih daya masuk pemancar dikurangi daya keluar di penerima.", correct: "B" },
        { text: "Pengukuran loss kabel optik dapat dilakukan akurat tanpa menyalakan sumber cahaya OLS.", correct: "S" }
      ],
      explanation: "Pengukuran insertion loss mutlak membutuhkan sumber cahaya stabil (OLS) yang aktif memancar di ujung kabel.",
      quickTip: "Pengukuran redaman kabel wajib menggunakan OLS yang aktif memancar."
    },
    {
      stimulus: "Penanganan serpihan kaca serat optik di laboratorium.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai limbah serat optik!",
      statements: [
        { text: "Serpihan kaca serat optik yang tertusuk ke dalam kulit sulit dilihat dan dapat menyebabkan infeksi serius.", correct: "B" },
        { text: "Teknisi wajib menyediakan wadah pembuangan tertutup khusus (Sharps Disposal Container) di meja kerja.", correct: "B" },
        { text: "Sisa serpihan kaca optik aman dibuang bebas di atas karpet lantai ruangan kelas.", correct: "S" }
      ],
      explanation: "Membuang serpihan kaca ke karpet sangat berbahaya karena dapat menusuk kaki atau terhirup siswa/teknisi lain.",
      quickTip: "Limbah serpihan kaca serat optik wajib dikumpulkan dan dibuang di wadah khusus limbah tajam."
    }
  ]
};

const s25 = {
  sessionId: "s25",
  pg: [
    {
      stimulus: "Fusion Splicer adalah instrumen berteknologi tinggi yang digunakan teknisi jaringan untuk menyambung dua ujung serat optik secara permanen.",
      question: "Prinsip kerja dasar dari mesin Fusion Splicer dalam menyatukan dua inti kaca serat optik adalah...",
      correctText: "Meleburkan kedua ujung inti kaca menggunakan loncatan bunga api listrik (electric arc discharge) pada suhu ribuan derajat Celsius",
      distractors: [
        "Merekatkan kedua ujung kaca menggunakan lem super glue silikon",
        "Menjepit kedua serat menggunakan tang buaya bertekanan tinggi",
        "Memanaskan kabel menggunakan korek api gas manual",
        "Mengikat kedua serat kaca menggunakan benang nilon aramid"
      ],
      explanation: "Fusion Splicer menggunakan loncatan busur api listrik tegangan tinggi antar dua elektroda untuk melebur kaca silika pada suhu ~2000°C sehingga menyatu mulus.",
      quickTip: "Fusion Splicer menyatukan inti kaca serat optik menggunakan busur api listrik (electric arc)."
    },
    {
      stimulus: "Mesin Fusion Splicer modern kelas atas menggunakan sistem penataan posisi serat berbasis sumbu inti kaca.",
      question: "Dua metode penjajaran (alignment) yang digunakan pada teknologi mesin Fusion Splicer adalah...",
      correctText: "Core Alignment (penjajaran sumbu inti kaca) dan Cladding Alignment (penjajaran lapisan kulit kaca)",
      distractors: [
        "Jacket Alignment dan Buffer Alignment",
        "USB Alignment dan Serial Alignment",
        "Analog Alignment dan Digital Alignment",
        "Laser Alignment dan LED Alignment"
      ],
      explanation: "Core Alignment menata serat berdasarkan sumbu inti kaca (paling presisi, redaman <0.02 dB), sedangkan Cladding Alignment menata berdasarkan kulit luar cladding 125 µm.",
      quickTip: "Dua metode alignment Fusion Splicer: Core Alignment (terbaik) dan Cladding Alignment."
    },
    {
      stimulus: "Tang pengupas serat optik profesional (Fiber Optic Stripper) memiliki tiga lubang berdiameter berbeda pada mata pisaunya.",
      question: "Fungsi dari lubang paling kecil (lubang ke-3) pada Fiber Stripper 3-lubang adalah...",
      correctText: "Mengupas lapisan pelindung primer (Primary Coating 250 µm) hingga menyisakan kaca telanjang (Cladding 125 µm)",
      distractors: [
        "Mengupas kulit jaket luar kabel hitam tebal (2-3 mm)",
        "Memotong kawat baja penggantung messenger wire",
        "Mengupas selongsong pipa loose tube plastik",
        "Menjepit pin konektor tembaga RJ-45"
      ],
      explanation: "Lubang terbesar mengupas jaket luar kabel (2-3mm), lubang tengah mengupas buffer (900µm), dan lubang terkecil mengupas coating 250µm hingga tersisa kaca murni 125µm.",
      quickTip: "Lubang terkecil stripper optik = Mengupas coating 250 µm menjadi bare fiber 125 µm."
    },
    {
      stimulus: "Setelah lapisan coating serat optik dikupas dengan stripper, permukaan kaca bare fiber harus segera dibersihkan dari sisa gel dan partikel debu.",
      question: "Cairan kimia standar industri yang wajib digunakan untuk membersihkan kaca serat optik sebelum pemotongan adalah...",
      correctText: "Alkohol Isopropil dengan kemurnian 99% (IPA - Isopropyl Alcohol)",
      distractors: [
        "Bensin pertalite atau solar",
        "Air mineral kemasan biasa",
        "Minyak goreng kelapa sawit",
        "Cairan pembersih lantai beraroma wangi"
      ],
      explanation: "Alkohol isopropil 99% murni cepat menguap tanpa meninggalkan residu air, minyak, atau kotoran pada permukaan kaca serat optik.",
      quickTip: "Pembersih kaca serat optik = Alkohol Isopropil 99% (IPA) dan kain lint-free."
    },
    {
      stimulus: "Kain atau tisu yang digunakan bersama alkohol isopropil untuk menyeka kaca serat optik harus memenuhi syarat bebas partikel debu.",
      question: "Nama jenis tisu atau kain pembersih khusus tersebut adalah...",
      correctText: "Lint-Free Wipes (Tisu Bebas Serat / Kimwipes)",
      distractors: [
        "Kertas koran bekas",
        "Tisu toilet kamar mandi",
        "Kain lap pel basah",
        "Kertas amplas kayu kasar"
      ],
      explanation: "Tisu biasa meninggalkan serpihan serat kayu mikroskopis pada kaca yang dapat terbakar menjadi jelaga saat proses fusion arc, memicu redaman tinggi.",
      quickTip: "Menyeka kaca optik wajib memakai tisu bebas serat (Lint-Free Wipes / Kimwipes)."
    },
    {
      stimulus: "Alat presisi tinggi yang digunakan untuk memotong ujung kaca serat optik dengan sudut potongan tegak lurus sempurna sebelum ditaruh di splicer adalah...",
      question: "Nama alat pemotong kaca presisi tinggi tersebut adalah...",
      correctText: "High Precision Fiber Cleaver",
      distractors: [
        "Gunting kawat seng",
        "Pisau cutter bangunan",
        "Gergaji besi mini",
        "Tang potong tembaga diagonal"
      ],
      explanation: "Fiber Cleaver menggunakan mata pisau tungsten/diamond berputar untuk menggores kaca dan mematahkannya secara presisi dengan sudut tegak lurus (< 1 derajat).",
      quickTip: "Memotong kaca serat optik dengan sudut tegak lurus presisi = Fiber Cleaver."
    },
    {
      stimulus: "Sudut potongan ujung kaca (cleave angle) yang dihasilkan oleh fiber cleaver harus sangat mendekati tegak lurus sempurna.",
      question: "Batas toleransi sudut pemotongan maksimal yang dipersyaratkan oleh mesin Fusion Splicer agar proses penyambungan diizinkan berjalan adalah...",
      correctText: "Sudut kemiringan maksimal di bawah 1,0 derajat (idealnya di bawah 0,5 derajat)",
      distractors: [
        "Sudut kemiringan 45 derajat",
        "Sudut kemiringan 90 derajat miring",
        "Sudut kemiringan 15 derajat",
        "Tidak ada batas toleransi sudut potongan"
      ],
      explanation: "Jika sudut potong di atas 1-2 derajat, mesin splicer akan menolak proses peleburan (muncul error: 'Cleave angle too large') karena akan menghasilkan redaman besar.",
      quickTip: "Sudut potong cleaver wajib tegak lurus: Maksimal di bawah 1 derajat."
    },
    {
      stimulus: "Komponen tabung pelindung sambungan serat optik yang terdiri dari selongsong panas-susut dan batang penguat baja tahan karat disebut...",
      question: "Nama komponen pelindung sambungan tersebut adalah...",
      correctText: "Protection Sleeve (Heat Shrink Splice Protector Sleeve)",
      distractors: [
        "Boot Connector Karet",
        "Keystone Modular Jack",
        "Cable Tie Nilon",
        "Spiral Wrapping Band"
      ],
      explanation: "Protection Sleeve melindungi titik leburan kaca yang rapuh dari patah fisik dan kelembapan setelah dipanaskan di oven pemanas splicer.",
      quickTip: "Pelindung sambungan leburan kaca serat = Protection Sleeve (Sleeve Protector)."
    },
    {
      stimulus: "Urutan langkah kerja (SOP) pemasangan Protection Sleeve pada proses penyambungan serat optik memiliki aturan mutlak yang tidak boleh terlewat.",
      question: "Kapan Protection Sleeve WAJIB dimasukkan ke dalam sehelai kabel serat optik?",
      correctText: "Wajib dimasukkan ke serat SEBELUM proses pengupasan, pemotongan, dan penyambungan dilakukan",
      distractors: [
        "Dimasukkan setelah kedua serat selesai dilebur menyatu",
        "Dimasukkan setelah kabel dipasang di rumah pelanggan",
        "Hanya dimasukkan jika hasil sambungan jelek",
        "Protection sleeve tidak perlu dimasukkan sama sekali"
      ],
      explanation: "Jika kedua serat sudah tersambung di mesin splicer, Protection Sleeve tidak akan bisa lagi dimasukkan kecuali sambungan dipotong ulang dari awal.",
      quickTip: "Ingat SOP: Masukkan Protection Sleeve sebelum mengupas dan memotong serat!"
    },
    {
      stimulus: "Setelah kedua serat selesai dilebur oleh busur api listrik, Protection Sleeve digeser menutupi titik sambungan lalu dimasukkan ke bagian pemanas splicer.",
      question: "Nama komponen pemanas pada mesin Fusion Splicer yang memanaskan sleeve agar menyusut rapat adalah...",
      correctText: "Heater Oven (Pemanas Tabung Shrink Sleeve)",
      distractors: [
        "V-Groove Holder",
        "Electrode Spark Gap",
        "Mikroskop Kamera Lensa",
        "Wind Protector Cover"
      ],
      explanation: "Heater oven memanaskan protection sleeve pada suhu ~180-200°C selama 15-30 detik hingga selongsong plastik menyusut rapat membungkus batang baja penguat.",
      quickTip: "Pemanas sleeve pada mesin splicer = Heater Oven."
    },
    {
      stimulus: "Bagian pada mesin Fusion Splicer berupa bantalan logam berlekuk presisi tinggi berbentuk huruf V tempat meletakkan serat kaca disebut...",
      question: "Nama komponen landasan penjajaran serat tersebut adalah...",
      correctText: "V-Groove (Alur V)",
      distractors: [
        "Oven Heater",
        "Cleaver Blade",
        "Stripper Notch",
        "Battery Pack"
      ],
      explanation: "V-Groove menahan dan menyejajarkan serat 125 mikron secara mekanis agar berada pada sumbu lurus sejajar elektroda.",
      quickTip: "Landasan presisi dudukan serat kaca di mesin splicer = V-Groove (Alur V)."
    },
    {
      stimulus: "Jika alur V-groove kotor terkena debu atau serpihan coating, posisi serat akan miring dan motor alignment splicer gagal menyejajarkan core.",
      question: "Alat bantu yang aman digunakan untuk membersihkan kotoran mikro pada alur V-Groove splicer adalah...",
      correctText: "Cotton bud (kapas pentol) yang dibasahi sedikit alkohol isopropil 99%",
      distractors: [
        "Jarum peniti besi berkarat",
        "Obeng minus tajam",
        "Ampelas besi kasar",
        "Sikat kawat baja"
      ],
      explanation: "V-groove adalah komponen optomekanik presisi; mengikisnya dengan logam tajam akan menggores alur V secara permanen. Gunakan cotton bud lembut beralkohol IPA.",
      quickTip: "Bersihkan V-Groove hanya dengan cotton bud beralkohol isopropil 99%."
    },
    {
      stimulus: "Dua batang jarum runcing di dalam ruang peleburan splicer yang menghasilkan percikan bunga api listrik bertegangan tinggi disebut...",
      question: "Nama komponen penghasil bunga api listrik tersebut adalah...",
      correctText: "Elektroda Pelebur (Arc Electrodes)",
      distractors: [
        "Mata Pisau Cleaver",
        "Lensa Kamera CMOS",
        "Heater Element",
        "Laser Diode Module"
      ],
      explanation: "Elektroda (terbuat dari tungsten berkemurnian tinggi) menghasilkan loncatan percikan plasma api listrik untuk menyatukan kaca.",
      quickTip: "Batang jarum pelebur serat optik di mesin splicer = Elektroda (Arc Electrodes)."
    },
    {
      stimulus: "Setelah ratusan kali proses penyambungan (biasanya sekitar 1.000 hingga 3.000 kali sambungan), elektroda splicer mengalami keausan dan oksidasi.",
      question: "Tindakan perawatan berkala yang harus dilakukan teknisi terhadap elektroda yang aus tersebut adalah...",
      correctText: "Melakukan proses Electrode Stabilization / Conditioning dan mengganti elektroda baru jika sudah mencapai batas siklus",
      distractors: [
        "Mengasah elektroda menggunakan batu asah kasar",
        "Mencuci elektroda dengan air sabun di bawah kran",
        "Menempelkan lem alteco pada ujung jarum elektroda",
        "Membiarkan elektroda terus dipakai selamanya"
      ],
      explanation: "Menu mesin splicer menyediakan fitur 'Stabilize Electrodes' dan indikator penghitung pemakaian (arc counter) yang memberi tahu kapan elektroda wajib diganti baru.",
      quickTip: "Elektroda wajib distabilisasi berkala dan diganti baru setelah ribuan kali penyambungan."
    },
    {
      stimulus: "Standar industri telekomunikasi (seperti Telkom Indonesia atau ITU-T) menetapkan batas maksimal nilai redaman sebuah sambungan fusion splice yang baik.",
      question: "Nilai redaman sambungan (Splice Loss) maksimal yang dapat diterima pada serat optik Single-Mode standar adalah...",
      correctText: "Maksimal di bawah 0,05 dB (rata-rata sambungan berkualitas prima bernilai 0,01 - 0,02 dB)",
      distractors: [
        "Maksimal 3,50 dB per sambungan",
        "Maksimal 10,0 dB per sambungan",
        "Harus tepat bernilai 0,0000 dB tanpa rugi sama sekali",
        "Maksimal 50,0 dB per sambungan"
      ],
      explanation: "Batas toleransi standar telko adalah < 0.05 dB per sambungan fusion splice (banyak teknisi menargetkan < 0.02 dB untuk link backbone prima).",
      quickTip: "Standar redaman sambungan fusion splice yang baik = di bawah 0.05 dB (rata-rata 0.02 dB)."
    },
    {
      stimulus: "Setelah proses peleburan busur api selesai, mesin Fusion Splicer secara otomatis melakukan uji mekanik dengan menarik kedua serat ke arah berlawanan.",
      question: "Nama pengujian tarikan fisik otomatis pada serat sambungan tersebut adalah...",
      correctText: "Tension Test (Uji Beban Tarik, umumnya sebesar 2 Newton / 200 gram)",
      distractors: [
        "Thermal Burn Test",
        "Voltage Drop Test",
        "Bending Radius Test",
        "Optical Reflection Test"
      ],
      explanation: "Tension test otomatis menarik serat sebesar ~2 N (sekitar 200 gram) untuk memastikan sambungan kaca kokoh dan tidak rapuh sebelum diangkat ke oven heater.",
      quickTip: "Uji tarikan otomatis setelah penyambungan di splicer = Tension Test (2 Newton)."
    },
    {
      stimulus: "Di layar monitor Fusion Splicer, teknisi dapat melihat tampilan gambar pembesaran serat optik secara vertikal dan horizontal melalui kamera mikroskopik.",
      question: "Dua sumbu pandangan kamera optik pada layar monitor splicer dikenal dengan nama...",
      correctText: "Sumbu X dan Sumbu Y (Tampilan X-View dan Y-View)",
      distractors: [
        "Sumbu Utara dan Sumbu Selatan",
        "Sumbu Alpha dan Sumbu Beta",
        "Sumbu Positif dan Sumbu Negatif",
        "Sumbu Frekuensi dan Sumbu Amplitudo"
      ],
      explanation: "Dua kamera mikroskop internal memproyeksikan citra serat dari sudut 90 derajat berbeda (sumbu X dan sumbu Y) untuk verifikasi penjajaran core.",
      quickTip: "Tampilan monitor kamera splicer = Sumbu X dan Sumbu Y (X/Y View)."
    },
    {
      stimulus: "Jika setelah proses penyambungan di layar monitor splicer terlihat gelembung udara (bubble) atau garis hitam tebal di titik leburan.",
      question: "Penyebab paling mungkin terjadinya cacat sambungan gelembung udara tersebut adalah...",
      correctText: "Permukaan ujung kaca kotor atau sudut potongan cleaver miring/retak sebelum dilebur",
      distractors: [
        "Tegangan listrik baterai laptop teknisi terlalu tinggi",
        "Warna cat jaket kabel yang disambung berbeda",
        "Kecepatan kipas angin di ruangan terlalu pelan",
        "Kabel fiber optik ditarik di bawah sinar matahari"
      ],
      explanation: "Kotoran debu yang tersisa atau permukaan potong yang bergerigi/miring menyebabkan udara terjebak saat busur api menyala, menghasilkan bubble dan redaman tinggi.",
      quickTip: "Gelembung udara pada leburan splice disebabkan oleh kaca kotor atau potongan cleaver cacat."
    },
    {
      stimulus: "Kotak tempat menata kelebihan panjang lingkaran serat optik (looping slack) dan menyimpan sambungan protection sleeve di dalam tiang atau ODP disebut...",
      question: "Nama nampan tempat penataan sambungan serat optik tersebut adalah...",
      correctText: "Splice Tray (Kaset Baki Sambungan Serat)",
      distractors: [
        "Patch Panel RJ-45",
        "Cable Trunking Duct",
        "Distribution Transformer",
        "Server Rack Rail"
      ],
      explanation: "Splice Tray menata loop cadangan serat dengan menjaga batas kelengkungan (bending radius) aman dan menyediakan slot klem penahan protection sleeve.",
      quickTip: "Baki tempat menata sambungan dan loop serat optik = Splice Tray."
    },
    {
      stimulus: "Saat menata kelebihan serat optik (slack) ke dalam Splice Tray, teknisi melingkarkan serat membentuk lingkaran oval dengan radius tertentu.",
      question: "Alasan teknis mengapa serat optik harus dilingkarkan dengan radius lengkung minimal 30 mm di dalam Splice Tray adalah...",
      correctText: "Mencegah terjadinya rugi-rugi redaman macrobending dan menghindari risiko serat kaca patah akibat tekukan berlebih",
      distractors: [
        "Membuat kabel terlihat rapi seperti obat nyamuk bakar",
        "Mengurangi pemakaian arus listrik baterai splicer",
        "Menaikkan kecepatan transmisi laser menjadi dua kali lipat",
        "Mencegah kabel dimakan serangga rayap"
      ],
      explanation: "Melipat serat melebihi batas kelengkungan aman (>30 mm radius) akan memicu macrobending loss dan risiko retak fatik pada kaca silika.",
      quickTip: "Looping di Splice Tray wajib menjaga radius lengkung aman (minimal 30 mm)."
    }
  ],
  mcma: [
    {
      stimulus: "Perlengkapan dan alat bantu yang WAJIB disiapkan sebelum melakukan penyambungan menggunakan Fusion Splicer.",
      question: "Manakah perkakas yang DIBUTUHKAN dalam proses persiapan penyambungan fiber optik? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Fiber Stripper 3-lubang (mengupas jaket, buffer, dan coating)", isCorrect: true },
        { text: "High Precision Fiber Cleaver (memotong ujung kaca serat tegak lurus)", isCorrect: true },
        { text: "Alkohol Isopropil 99% dan Tisu Lint-Free (membersihkan kaca sebelum dipotong)", isCorrect: true },
        { text: "Tang Crimping RJ-45 tembaga", isCorrect: false },
        { text: "Gergaji besi pemotong pipa paralon", isCorrect: false }
      ],
      explanation: "Alat persiapan penyambungan optik: Fiber Stripper 3-lubang, Alkohol IPA 99%, Tisu Lint-free, Fiber Cleaver, dan Protection Sleeve.",
      quickTip: "Peralatan persiapan splicing: Stripper, Alkohol IPA 99%, Tisu Lint-Free, dan Cleaver."
    },
    {
      stimulus: "Komponen utama yang terdapat pada mesin Fusion Splicer.",
      question: "Manakah komponen internal yang MERUPAKAN bagian dari mesin Fusion Splicer? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "V-Groove (landasan presisi penahan serat optik)", isCorrect: true },
        { text: "Arc Electrodes (elektroda penghasil bunga api listrik pelebur kaca)", isCorrect: true },
        { text: "Heater Oven (pemanas tabung pelindung protection sleeve)", isCorrect: true },
        { text: "Port RJ-11 kabel telepon analog", isCorrect: false },
        { text: "Kipas radiator pendingin mesin mobil", isCorrect: false }
      ],
      explanation: "Komponen splicer: V-Groove, Elektroda pelebur, Heater oven, Kamera mikroskop X/Y, dan motor penjajaran servo.",
      quickTip: "Bagian splicer: V-Groove, Elektroda, Heater Oven, dan Monitor X/Y."
    },
    {
      stimulus: "Standar mutu dan indikator keberhasilan proses sambungan serat optik.",
      question: "Manakah indikasi hasil sambungan fusion splice yang DIANGGAP BAIK menurut standar telko? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Estimasi redaman splice loss pada layar splicer di bawah 0.05 dB (misal 0.01 - 0.02 dB)", isCorrect: true },
        { text: "Garis sambungan terlihat rata, mulus, dan bebas dari gelembung udara pada monitor X/Y", isCorrect: true },
        { text: "Estimasi splice loss bernilai 15.0 dB dengan garis hitam tebal di tengah leburan", isCorrect: false },
        { text: "Serat optik langsung patah saat mesin melakukan tension test otomatis", isCorrect: false },
        { text: "Protection sleeve meleleh hangus terbakar di dalam oven pemanas", isCorrect: false }
      ],
      explanation: "Sambungan fusion berkualitas: loss < 0.05 dB, hasil leburan mulus tanpa gelembung/cacat, dan lolos uji tarikan (tension test).",
      quickTip: "Sambungan baik: Loss < 0.05 dB, leburan mulus tanpa cacat, lolos tension test."
    },
    {
      stimulus: "SOP penanganan dan fungsi Protection Sleeve pada sambungan optik.",
      question: "Manakah pernyataan yang BENAR mengenai Protection Sleeve? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Protection sleeve wajib dimasukkan ke serat sebelum serat dikupas dan dipotong", isCorrect: true },
        { text: "Di dalam protection sleeve terdapat batang baja tahan karat (strength rod) untuk menahan tekukan mekanis", isCorrect: true },
        { text: "Protection sleeve hanya boleh dipanaskan menggunakan korek api gas manual", isCorrect: false },
        { text: "Protection sleeve terbuat dari kaca silika murni yang mudah pecah", isCorrect: false },
        { text: "Protection sleeve boleh dihilangkan dan diganti dengan lakban kertas biasa", isCorrect: false }
      ],
      explanation: "Protection sleeve wajib dimasukkan sebelum memotong kabel, memiliki batang penguat baja di dalamnya, dan dipanaskan aman di heater oven splicer.",
      quickTip: "Protection sleeve punya batang penguat baja & wajib dipasang sebelum proses potong."
    },
    {
      stimulus: "Faktor-faktor yang dapat menyebabkan kegagalan proses penyambungan pada Fusion Splicer.",
      question: "Manakah faktor penyebab error penyambungan pada mesin splicer? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Sudut pemotongan cleaver terlalu miring melebihi batas toleransi 1-2 derajat (Cleave Angle Error)", isCorrect: true },
        { text: "Alur V-Groove kotor oleh debu atau serpihan coating sehingga posisi serat tidak sejajar", isCorrect: true },
        { text: "Elektroda kotor atau aus akibat telah melewati batas masa pakai ribuan kali sambungan", isCorrect: true },
        { text: "Teknisi mengenakan kacamata pelindung keselamatan kerja", isCorrect: false },
        { text: "Menggunakan alkohol isopropil berkemurnian tinggi 99%", isCorrect: false }
      ],
      explanation: "Penyebab error splicing: sudut potong miring (>1°), V-groove kotor, elektroda aus, atau serat berdebu.",
      quickTip: "Penyebab error splicer: Potongan cleaver miring, V-groove kotor, dan elektroda aus."
    }
  ],
  tf: [
    {
      stimulus: "Prinsip kerja peleburan kaca pada Fusion Splicer.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Fusion Splicer!",
      statements: [
        { text: "Fusion Splicer menyatukan inti kaca serat optik menggunakan loncatan bunga api listrik busur plasma.", correct: "B" },
        { text: "Metode Core Alignment memiliki tingkat presisi dan nilai redaman yang lebih baik dibanding Cladding Alignment.", correct: "B" },
        { text: "Dua serat optik dapat disambung permanen hanya dengan cara diikat simpul mati menggunakan tangan.", correct: "S" }
      ],
      explanation: "Serat kaca tidak bisa diikat simpul manual; kaca akan patah jika disimpul dan membutuhkan peleburan busur api presisi mikroskopis.",
      quickTip: "Serat kaca silika disambung permanen via peleburan busur api listrik mikroskopis."
    },
    {
      stimulus: "SOP penggunaan alat potong High Precision Fiber Cleaver.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Fiber Cleaver!",
      statements: [
        { text: "Fiber Cleaver menghasilkan sudut pemotongan kaca yang sangat tegak lurus (di bawah 1 derajat).", correct: "B" },
        { text: "Kaca serat optik harus dibersihkan dengan alkohol IPA 99% terlebih dahulu sebelum dipotong di cleaver.", correct: "B" },
        { text: "Fiber Cleaver dapat digantikan fungsinya dengan gunting kuku biasa tanpa mempengaruhi hasil redaman.", correct: "S" }
      ],
      explanation: "Gunting kuku akan meremukkan kaca silika menjadi serpihan hancur yang mustahil disambung di mesin splicer.",
      quickTip: "Hanya Fiber Cleaver yang mampu memotong kaca dengan sudut presisi tegak lurus."
    },
    {
      stimulus: "Prosedur pemasangan Protection Sleeve.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Protection Sleeve!",
      statements: [
        { text: "Protection Sleeve wajib dimasukkan ke dalam kabel sebelum proses pengupasan dan pemotongan serat dilakukan.", correct: "B" },
        { text: "Heater oven pada splicer memanaskan sleeve agar selongsong plastik menyusut membungkus titik sambungan secara rapat.", correct: "B" },
        { text: "Protection Sleeve dapat dimasukkan dengan mudah setelah kedua ujung serat dilebur menyatu di splicer.", correct: "S" }
      ],
      explanation: "Setelah kedua serat tersambung di kedua sisinya, tabung sleeve tidak akan bisa diselipkan lagi tanpa memutus kembali serat tersebut.",
      quickTip: "Selongsong Protection Sleeve wajib dipasang sebelum proses potong dan sambung."
    },
    {
      stimulus: "Standar nilai redaman sambungan (Splice Loss).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Splice Loss!",
      statements: [
        { text: "Batas toleransi maksimal redaman sambungan fusion splice standar industri telekomunikasi adalah di bawah 0.05 dB.", correct: "B" },
        { text: "Hasil sambungan yang sangat baik di lapangan umumnya memiliki nilai redaman sekitar 0.01 hingga 0.02 dB.", correct: "B" },
        { text: "Nilai redaman sambungan sebesar 5.0 dB adalah hasil yang sangat sempurna dan harus dipertahankan.", correct: "S" }
      ],
      explanation: "Redaman 5.0 dB adalah sambungan yang sangat buruk/rusak (seratus kali lebih buruk dari standar toleransi 0.05 dB) dan wajib dipotong sambung ulang.",
      quickTip: "Redaman 5.0 dB sangat buruk; sambungan wajib < 0.05 dB."
    },
    {
      stimulus: "Perawatan alur V-groove dan elektroda mesin splicer.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang perawatan splicer!",
      statements: [
        { text: "Alur V-groove yang kotor harus dibersihkan lembut menggunakan cotton bud beralkohol isopropil 99%.", correct: "B" },
        { text: "Elektroda pelebur wajib diganti baru setelah mencapai batas siklus pembakaran (arc count) rekomendasi pabrikan.", correct: "B" },
        { text: "Alur V-groove dianjurkan dikerik menggunakan ujung pisau cutter besi tajam setiap pagi.", correct: "S" }
      ],
      explanation: "Mengerik V-groove dengan pisau logam akan menggores permukaan presisi alur V secara permanen dan merusak splicer.",
      quickTip: "Dilarang mengerik V-groove dengan benda logam tajam; gunakan cotton bud lembut."
    }
  ]
};

const s26 = {
  sessionId: "s26",
  pg: [
    {
      stimulus: "Optical Time Domain Reflectometer (OTDR) adalah instrumen pengujian optik paling komprehensif yang digunakan untuk mengaudit dan melacak karakteristik kabel serat optik sepanjang puluhan kilometer.",
      question: "Prinsip kerja dasar dari instrumen OTDR dalam menganalisis kabel serat optik adalah...",
      correctText: "Memancarkan pulsa cahaya laser pendek ke dalam serat dan menangkap kembali sinyal hamburan balik (Rayleigh Backscattering) dan pantulan Fresnel terhadap waktu tempuh",
      distractors: [
        "Menghubungkan kabel ke sumber listrik arus bolak-balik 220V",
        "Merekam suara percakapan telepon yang lewat di kabel",
        "Mengukur berat fisik kabel optik menggunakan neraca pegas",
        "Memanaskan kabel optik dengan oven hingga suhu mendidih"
      ],
      explanation: "OTDR seperti radar optik: mengirim pulsa laser dan menganalisis intensitas cahaya pantul balik (Backscattering & Fresnel reflection) terhadap waktu tempuh untuk memetakan jarak dan redaman.",
      quickTip: "Prinsip OTDR = Radar optik berbasis Rayleigh Backscattering dan Fresnel Reflection."
    },
    {
      stimulus: "Hamburan balik alami yang terjadi di sepanjang silika serat optik akibat ketidakhomogenan mikroskopis kerapatan molekul kaca disebut...",
      question: "Nama fenomena hamburan cahaya yang menjadi dasar pembentukan garis kurva landai pada grafik OTDR adalah...",
      correctText: "Hamburan Rayleigh (Rayleigh Backscattering)",
      distractors: [
        "Pantulan Cermin Datar",
        "Efek Doppler Bunyi",
        "Radiasi Benda Hitam",
        "Induksi Elektromagnetik"
      ],
      explanation: "Rayleigh Backscattering adalah pantulan balik kontinu dari molekul silika yang membentuk garis miring menurun (atenuasi kontinu) pada grafik jejak OTDR.",
      quickTip: "Garis landai kurva OTDR terbentuk dari Hamburan Rayleigh (Rayleigh Backscattering)."
    },
    {
      stimulus: "Pantulan cahaya balik yang sangat kuat yang terjadi pada batas pertemuan antara kaca dan medium dengan indeks bias berbeda (seperti konektor mekanik atau ujung kabel terbuka berhadapan dengan udara) disebut...",
      question: "Nama jenis pantulan tajam tersebut adalah...",
      correctText: "Pantulan Fresnel (Fresnel Reflection)",
      distractors: [
        "Hamburan Rayleigh",
        "Dispersi Kromatik",
        "Atenuasi Macrobending",
        "Absorption Loss"
      ],
      explanation: "Fresnel Reflection terjadi akibat perbedaan indeks bias drastis (kaca n~1.47 vs udara n=1.0), menghasilkan lonjakan spike tajam ke atas pada grafik kurva OTDR.",
      quickTip: "Lonjakan tajam (spike) pada kurva OTDR berasal dari Pantulan Fresnel (Fresnel Reflection)."
    },
    {
      stimulus: "Pada kurva pengujian OTDR, terdapat area 'zona buta' di awal kabel tepat setelah konektor peluncur di mana OTDR belum dapat mendeteksi kejadian lain di dekatnya.",
      question: "Istilah teknis untuk zona buta pengukuran awal pada instrumen OTDR tersebut adalah...",
      correctText: "Dead Zone (Zona Mati)",
      distractors: [
        "Active Zone",
        "Bandwidth Gap",
        "Latency Delay",
        "Collision Domain"
      ],
      explanation: "Dead Zone adalah jarak di mana detektor penerima OTDR jenuh (tersilaukan) oleh pantulan Fresnel konektor awal dan membutuhkan waktu untuk pulih.",
      quickTip: "Area zona buta pengukuran di awal peluncuran OTDR = Dead Zone."
    },
    {
      stimulus: "Dead Zone pada OTDR dibagi menjadi dua jenis spesifikasi: Event Dead Zone (EDZ) dan Attenuation Dead Zone (ADZ).",
      question: "Definisi dari Event Dead Zone (EDZ) adalah...",
      correctText: "Jarak minimum di mana dua kejadian reflektif yang berdekatan masih dapat dideteksi dan dibedakan sebagai dua titik terpisah",
      distractors: [
        "Jarak maksimum kabel optik bisa dipasang di dalam tanah",
        "Waktu yang dibutuhkan teknisi untuk menyalakan OTDR",
        "Jarak antara tiang telepon pertama ke kantor pusat",
        "Batas kedalaman galian tanah kabel bawah tanah"
      ],
      explanation: "Event Dead Zone (EDZ) mengukur resolusi jarak terdekat antara dua event pantulan konektor agar tidak terbaca sebagai satu titik tumpang tindih.",
      quickTip: "Event Dead Zone (EDZ) = Jarak minimum untuk membedakan 2 kejadian reflektif berdekatan."
    },
    {
      stimulus: "Definisi dari Attenuation Dead Zone (ADZ) pada parameter teknis OTDR adalah...",
      question: "Karakteristik yang diukur oleh Attenuation Dead Zone (ADZ) adalah...",
      correctText: "Jarak minimum setelah titik reflektif hingga kurva kembali stabil sehingga pengukuran redaman event berikutnya dapat diukur secara akurat",
      distractors: [
        "Jarak kabel yang rusak terbakar petir",
        "Jumlah sambungan yang diizinkan dalam 1 kilometer",
        "Panjang maksimal kabel patch cord di ruang server",
        "Daya baterai OTDR saat digunakan di lapangan"
      ],
      explanation: "Attenuation Dead Zone (ADZ) selalu lebih panjang dari EDZ, mengukur kapan kurva pantulan telah kembali turun ke batas garis Rayleigh (biasanya pada titik 0.5 dB) untuk pengukuran loss akurat.",
      quickTip: "Attenuation Dead Zone (ADZ) = Jarak hingga kurva stabil untuk mengukur loss secara akurat."
    },
    {
      stimulus: "Untuk mengatasi masalah Event Dead Zone pada konektor pertama di ODF saat pengujian awal kabel, teknisi menambahkan gulungan kabel serat optik panjang di antara OTDR dan kabel uji.",
      question: "Nama kabel serat optik pengantar (panjang 500m hingga 1 km) yang digunakan sebagai kabel pancingan tersebut adalah...",
      correctText: "Launch Cable (Dummy Fiber Box / Kabel Peluncur)",
      distractors: [
        "Drop Cable FTTH 1-Core",
        "Patch Cord Simplex 1 Meter",
        "Kabel Listrik Rol Steker",
        "Kabel Coaxial RG-6"
      ],
      explanation: "Launch Cable (Dummy Fiber) menempatkan dead zone konektor awal di dalam kotak dummy fiber, sehingga konektor pertama ODF kabel uji dapat terukur karakteristik dan redamannya secara utuh.",
      quickTip: "Mengatasi dead zone konektor awal = Menggunakan Launch Cable (Dummy Fiber)."
    },
    {
      stimulus: "Saat mengatur parameter OTDR sebelum pengujian, parameter 'Pulse Width' (Lebar Pulsa Laser, diukur dalam satuan nanodetik / mikrodetik) harus disesuaikan.",
      question: "Pengaruh penggunaan parameter Pulse Width yang pendek (misalnya 5 ns atau 10 ns) pada hasil pengukuran OTDR adalah...",
      correctText: "Menghasilkan resolusi pembacaan yang sangat tinggi dengan Dead Zone yang sempit, namun daya jangkau jarak pengukuran menjadi pendek",
      distractors: [
        "Menghasilkan jangkauan jarak sangat jauh hingga 200 km",
        "Membuat layar OTDR menjadi mati seketika",
        "Mengubah kabel single-mode menjadi kabel multi-mode",
        "Menghilangkan semua data di memori internal alat"
      ],
      explanation: "Pulsa pendek menyuntikkan energi sedikit (jarak pendek), namun menghasilkan dead zone sangat sempit dan resolusi detail tinggi untuk mendeteksi event jarak dekat.",
      quickTip: "Pulse Width pendek = Resolusi tinggi, dead zone sempit, jarak jangkau pendek."
    },
    {
      stimulus: "Jika teknisi ingin menguji kabel backbone antar-kota yang panjangnya mencapai 80 kilometer menggunakan OTDR.",
      question: "Pengaturan Pulse Width yang paling tepat dipilih untuk menembus jarak sangat jauh tersebut adalah...",
      correctText: "Pulse Width lebar (misalnya 1.000 ns hingga 10.000 ns / 10 µs)",
      distractors: [
        "Pulse Width paling pendek 3 ns",
        "Pulse Width 0 ns",
        "Tidak menyetel pulse width sama sekali",
        "Menyalakan mode VFL senter"
      ],
      explanation: "Pulsa lebar menginjeksikan energi foton yang masif ke dalam serat sehingga sinyal hamburan balik mampu mencapai jarak puluhan kilometer, meski konsekuensinya dead zone melebar.",
      quickTip: "Jarak jauh puluhan km = Pulse Width lebar (1.000 - 10.000 ns)."
    },
    {
      stimulus: "Pada grafik kurva (trace) OTDR, terlihat lonjakan spike tajam ke atas yang diikuti penurunan garis kontinu ke arah bawah.",
      question: "Jenis kejadian (event) pada jalur serat optik yang diwakili oleh lonjakan spike tajam tersebut adalah...",
      correctText: "Reflective Event (seperti Konektor Mekanik, Sambungan Mekanik, atau Patch Panel)",
      distractors: [
        "Non-Reflective Event (Sambungan Fusion Splice sempurna)",
        "Atenuasi Alami Kaca Serat Optik",
        "Hubung Singkat Arus Listrik",
        "Pengisian Daya Baterai"
      ],
      explanation: "Reflective event timbul karena pantulan Fresnel pada sambungan konektor mekanik (SC/LC/FC), ditandai dengan spike tajam pada kurva.",
      quickTip: "Lonjakan spike ke atas pada kurva OTDR = Reflective Event (Konektor Mekanik)."
    },
    {
      stimulus: "Pada grafik kurva OTDR, terlihat adanya penurunan garis secara tiba-tiba (seperti anak tangga turun) tanpa adanya lonjakan spike pantulan ke atas sama sekali.",
      question: "Jenis kejadian (event) pada serat optik yang ditunjukkan oleh undakan turun tanpa spike tersebut adalah...",
      correctText: "Non-Reflective Event (seperti Sambungan Fusion Splice atau Tekukan Macrobending)",
      distractors: [
        "Konektor Mekanik SC yang terlepas",
        "Ujung Terbuka Serat Optik (Fiber End)",
        "Adaptor Power Supply Rusak",
        "Kecepatan Internet Meningkat"
      ],
      explanation: "Sambungan fusion splice yang dilebur menyatu atau tekukan macrobending menimbulkan redaman (loss) tanpa memantulkan cahaya balik (non-reflective event), terlihat sebagai undakan turun.",
      quickTip: "Undakan turun tanpa spike pada kurva OTDR = Non-Reflective Event (Fusion Splice / Bending)."
    },
    {
      stimulus: "Di bagian paling ujung kanan grafik kurva OTDR, terlihat lonjakan spike reflektif terakhir yang kemudian garisnya jatuh curam ke bawah menyentuh batas dasar derau (Noise Floor).",
      question: "Kejadian fisik pada kabel yang diidentifikasi oleh akhir kurva tersebut adalah...",
      correctText: "Fiber End (Ujung Akhir Kabel atau Titik Putus Kabel Total)",
      distractors: [
        "Konektor Patch Panel Pertama",
        "Sambungan Fusion Splice Pertama",
        "Modul SFP Pemancar Aktif",
        "Kabel Grounding Tanah"
      ],
      explanation: "Ujung akhir kabel yang berhadapan dengan udara menghasilkan pantulan Fresnel besar terakhir (4% refleksi), menandai total panjang bentangan kabel atau lokasi titik kabel putus.",
      quickTip: "Spike terakhir yang jatuh ke noise floor = Fiber End (Ujung kabel atau titik kabel putus)."
    },
    {
      stimulus: "Untuk membedakan apakah sebuah non-reflective event pada kurva OTDR disebabkan oleh sambungan fusion splice atau oleh tekukan kabel (macrobending).",
      question: "Metode pengujian cerdas yang dilakukan teknisi dengan memanfaatkan dua panjang gelombang adalah...",
      correctText: "Membandingkan kurva pada panjang gelombang 1310 nm dan 1550 nm; jika redaman melonjak drastis pada 1550 nm maka itu adalah Macrobending",
      distractors: [
        "Mematikan OTDR dan meniup kabel optik",
        "Mengganti kabel serat optik dengan kabel tembaga",
        "Mencuci kabel optik dengan air panas",
        "Menghubungkan kabel ke soket stopkontak listrik"
      ],
      explanation: "Panjang gelombang 1550 nm jauh lebih sensitif terhadap tekukan dibanding 1310 nm. Jika redaman di titik yang sama bernilai 0.05 dB pada 1310 nm tetapi melonjak jadi 2.5 dB pada 1550 nm, itu dipastikan Macrobending.",
      quickTip: "Mendeteksi Bending: Bandingkan 1310 vs 1550 nm; redaman pada 1550 nm akan melonjak drastis."
    },
    {
      stimulus: "Pada pengukuran OTDR, terkadang di titik sambungan fusion grafik justru tampak 'naik' ke atas (terlihat seolah-olah terjadi penguatan daya atau Gain).",
      question: "Penyebab fenomena 'Virtual Gainer' yang tampak aneh pada kurva OTDR tersebut adalah...",
      correctText: "Penyambungan dua kabel serat optik yang memiliki koefisien hamburan balik (Backscatter Coefficient) berbeda",
      distractors: [
        "Terdapat penguat amplifier tenaga nuklir di dalam kabel",
        "Mesin splicer menambahkan daya baterai ke dalam kaca",
        "Cahaya laser memantul kembali dari masa depan",
        "Kabel terkena sambaran petir saat diuji"
      ],
      explanation: "Jika serat kedua memiliki koefisien hamburan balik lebih besar daripada serat pertama, sinyal pantul yang kembali ke OTDR meningkat, menghasilkan ilusi 'gainer'.",
      quickTip: "Fenomena Gainer (kurva tampak naik) timbul karena perbedaan koefisien hamburan balik dua serat."
    },
    {
      stimulus: "Untuk menghilangkan kesalahan pembacaan fenomena 'Gainer' dan memperoleh nilai redaman sambungan yang sebenarnya.",
      question: "Metode pengukuran OTDR standar yang wajib dilakukan teknisi adalah...",
      correctText: "Melakukan pengujian dua arah (Bi-Directional Testing) dari kedua ujung kabel lalu merata-ratakan nilai redamannya",
      distractors: [
        "Memotong kabel di titik gainer dan membuangnya",
        "Mengurangi nilai pembacaan dengan angka 100 secara acak",
        "Mengganti OTDR dengan LAN tester baterai 9V",
        "Menonaktifkan layar monitor OTDR"
      ],
      explanation: "Bi-directional measurement menguji dari Titik A ke B (misal terbaca -0.1 dB gainer) dan dari Titik B ke A (terbaca +0.3 dB loss). Nilai riil = (-0.1 + 0.3)/2 = +0.1 dB loss sejati.",
      quickTip: "Mengatasi fenomena Gainer = Pengujian dua arah (Bi-Directional Average)."
    },
    {
      stimulus: "Indeks Bias Inti (Index of Refraction / IOR atau Group Index) merupakan parameter penting yang harus dimasukkan ke dalam pengaturan OTDR sebelum pengetesan.",
      question: "Akibat yang terjadi jika teknisi salah memasukkan nilai IOR pada pengaturan instrumen OTDR adalah...",
      correctText: "Perhitungan jarak lokasi kejadian (Distance Measurement) pada kabel menjadi tidak akurat (terjadi pergeseran meter/kilometer)",
      distractors: [
        "Kabel serat optik akan meleleh terbakar",
        "Baterai OTDR akan habis dalam hitungan detik",
        "Panjang gelombang laser otomatis berubah menjadi sinar rontgen",
        "OTDR tidak dapat memancarkan cahaya laser sama sekali"
      ],
      explanation: "Jarak pada OTDR dihitung dari rumus d = (c * t) / (2 * IOR). Jika IOR salah, perhitungan jarak lokasi event/kabel putus akan meleset dari lokasi riil di lapangan.",
      quickTip: "Nilai IOR yang salah menyebabkan perhitungan jarak meter/kilometer meleset."
    },
    {
      stimulus: "Nilai standar Indeks Bias (IOR) untuk serat optik Single-Mode silika (ITU-T G.652D) pada panjang gelombang 1310 nm biasanya bernilai sekitar...",
      question: "Nilai tipikal parameter IOR untuk serat optik silika standar adalah...",
      correctText: "Sekitar 1,4670 hingga 1,4685",
      distractors: [
        "1,0000 (Indeks bias ruang hampa)",
        "2,4200 (Indeks bias intan berlian)",
        "0,5000",
        "10,500"
      ],
      explanation: "Indeks bias silika kaca serat optik Single-Mode standar berkisar di angka 1.467 pada 1310 nm dan 1.468 pada 1550 nm.",
      quickTip: "Nilai tipikal IOR kaca serat optik = sekitar 1.468."
    },
    {
      stimulus: "Sebuah link kabel optik yang diuji dengan OTDR menunjukkan bahwa dari total panjang 15 kilometer, pada jarak meter ke-4.250 terdapat lonjakan reflektif tajam diikuti noise floor.",
      question: "Tindakan perbaikan di lapangan yang harus dilakukan tim pemeliharaan jaringan adalah...",
      correctText: "Mengarahkan tim teknisi lapangan menuju titik fisik koordinat 4,25 km dari sentral untuk memperbaiki kabel yang putus (Fiber Cut)",
      distractors: [
        "Mengganti seluruh kabel dari kilometer 0 hingga kilometer 15",
        "Menyalakan AC pendingin di ruang sentral lebih dingin",
        "Mengganti server komputer pelanggan",
        "Mengubah konfigurasi alamat IP router menjadi IPv6"
      ],
      explanation: "OTDR secara presisi menunjukkan bahwa kabel terputus (fiber cut) di jarak 4.250 meter, sehingga tim teknisi lapangan cukup mencari titik galian/tiang di jarak tersebut untuk disambung ulang.",
      quickTip: "OTDR menuntun teknisi tepat ke titik lokasi kabel putus di lapangan."
    },
    {
      stimulus: "Tingkat kemiringan garis kurva kontinu Rayleigh pada grafik OTDR menggambarkan besarnya koefisien redaman kabel per kilometer.",
      question: "Kemiringan garis kurva kabel Single-Mode yang normal dan sehat pada pengujian panjang gelombang 1310 nm adalah sekitar...",
      correctText: "Menurun sekitar 0,33 sampai 0,35 dB per kilometer",
      distractors: [
        "Menurun 5,0 dB per kilometer",
        "Garis mendatar lurus sempurna tanpa penurunan (0 dB/km)",
        "Garis menanjak naik ke atas",
        "Menurun 20,0 dB per kilometer"
      ],
      explanation: "Koefisien redaman alami silika G.652D pada 1310 nm adalah ~0.35 dB/km, terlihat sebagai garis miring menurun perlahan pada grafik OTDR.",
      quickTip: "Kemiringan kurva normal SMF pada 1310 nm = sekitar 0.35 dB/km."
    },
    {
      stimulus: "Teknisi ingin menyimpan dan mencetak laporan pengujian kurva OTDR untuk diserahkan sebagai dokumen As-Built Drawing kepada pemilik proyek.",
      question: "Format file standar internasional yang digunakan secara universal untuk menyimpan rekaman data jejak kurva OTDR adalah...",
      correctText: "Format File Telcordia/Bellcore (.SOR)",
      distractors: [
        "Format Gambar JPEG (.JPG)",
        "Format Dokumen Teks (.TXT)",
        "Format Audio Lagu (.MP3)",
        "Format Eksekusi Aplikasi (.EXE)"
      ],
      explanation: "Standar Bellcore/Telcordia SR-4731 mendefinisikan format file data jejak optik universal `.SOR` (Standard Optical Record) yang dapat dibuka di semua software analisa OTDR.",
      quickTip: "Format file standar industri kurva jejak OTDR = .SOR (Bellcore/Telcordia)."
    }
  ],
  mcma: [
    {
      stimulus: "Prinsip pemantulan dan hamburan cahaya yang menjadi dasar pembacaan instrumen OTDR.",
      question: "Manakah dua fenomena fisis yang dianalisis oleh OTDR untuk membentuk kurva grafik? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Hamburan Rayleigh (Rayleigh Backscattering) yang membentuk garis landai atenuasi kontinu", isCorrect: true },
        { text: "Pantulan Fresnel (Fresnel Reflection) yang membentuk lonjakan spike pada konektor dan ujung kabel", isCorrect: true },
        { text: "Induksi Gelombang Radio FM", isCorrect: false },
        { text: "Pemanasan Termal Gesekan Angin", isCorrect: false },
        { text: "Radiasi Nuklir Peluruhan Uranium", isCorrect: false }
      ],
      explanation: "OTDR menganalisis Rayleigh Backscattering (hamburan balik molekuler kontinu) dan Fresnel Reflection (pantulan bidang batas indeks bias).",
      quickTip: "Dua pilar sinyal OTDR: Rayleigh Backscattering dan Fresnel Reflection."
    },
    {
      stimulus: "Jenis-jenis kejadian (Events) yang teridentifikasi pada kurva jejak OTDR.",
      question: "Manakah pasangan antara tampilan grafik kurva OTDR dan jenis kejadiannya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Lonjakan spike tajam ke atas = Reflective Event (konektor mekanik atau mechanical splice)", isCorrect: true },
        { text: "Undakan turun tanpa lonjakan spike = Non-Reflective Event (fusion splice atau macrobending)", isCorrect: true },
        { text: "Spike tajam terakhir yang jatuh curam ke noise floor = Fiber End (ujung kabel atau kabel putus)", isCorrect: true },
        { text: "Garis landai menurun = Tabrakan paket data Layer 2", isCorrect: false },
        { text: "Layar berkedip warna warni = Virus komputer sedang menyerang", isCorrect: false }
      ],
      explanation: "Reflective = spike konektor; Non-reflective = undakan splice/bending; Fiber end = akhir bentangan kabel.",
      quickTip: "Kurva OTDR: Spike (Konektor), Undakan turun (Splice/Bending), Jatuh curam (Fiber End)."
    },
    {
      stimulus: "Parameter konfigurasi utama pada instrumen OTDR yang harus diatur sebelum memulai pengujian.",
      question: "Manakah parameter yang HARUS DIATUR teknisi pada menu instrumen OTDR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Panjang Gelombang (Wavelength, misal 1310 nm atau 1550 nm)", isCorrect: true },
        { text: "Lebar Pulsa (Pulse Width, misal 10 ns hingga 10 µs)", isCorrect: true },
        { text: "Jarak Rentang Pengukuran (Range / Distance Range)", isCorrect: true },
        { text: "Kecepatan Mengetik Keyboard", isCorrect: false },
        { text: "Tinggi Badan Teknisi Penguji", isCorrect: false }
      ],
      explanation: "Parameter utama setup OTDR: Wavelength (1310/1550nm), Pulse Width (durasi pulsa laser), Range (jarak ukur), IOR (indeks bias), dan Averaging Time.",
      quickTip: "Parameter setup OTDR: Wavelength, Pulse Width, Range, IOR, dan Waktu Ukur."
    },
    {
      stimulus: "Fungsi dan peran penggunaan Launch Cable (Dummy Fiber Box) pada pengukuran OTDR.",
      question: "Manakah manfaat dari penggunaan Launch Cable pada pengujian OTDR? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Mengeliminasi dampak Event Dead Zone pada konektor pertama sehingga konektor awal kabel uji dapat diukur utuh", isCorrect: true },
        { text: "Memungkinkan pengukuran kualitas dan nilai redaman insertion loss konektor input ODF", isCorrect: true },
        { text: "Menambah kecepatan internet pelanggan menjadi tidak terbatas", isCorrect: false },
        { text: "Mengubah kabel single-mode menjadi kabel tembaga LAN", isCorrect: false },
        { text: "Menghilangkan kebutuhan baterai pada OTDR", isCorrect: false }
      ],
      explanation: "Launch cable (500m-1km) merelokasi dead zone OTDR ke dalam kotak peluncur sehingga konektor pertama kabel uji dapat dianalisis secara akurat.",
      quickTip: "Launch Cable mengatasi dead zone awal dan mengukur konektor pertama ODF."
    },
    {
      stimulus: "Metode pembedaan antara cacat sambungan Fusion Splice dengan cacat Tekukan Macrobending menggunakan OTDR.",
      question: "Manakah pernyataan yang BENAR mengenai analisis bending pada OTDR? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Pengujian dilakukan dengan membandingkan kurva pada dua panjang gelombang: 1310 nm dan 1550 nm", isCorrect: true },
        { text: "Jika pada titik yang sama redaman melonjak jauh lebih besar pada 1550 nm dibanding pada 1310 nm, maka kejadian tersebut adalah Macrobending", isCorrect: true },
        { text: "Sambungan fusion splice normal akan selalu menghasilkan redaman 50 dB pada 1310 nm", isCorrect: false },
        { text: "Tekukan macrobending tidak akan terdeteksi sama sekali pada panjang gelombang 1550 nm", isCorrect: false },
        { text: "Cahaya 1550 nm kebal terhadap semua jenis tekukan kabel", isCorrect: false }
      ],
      explanation: "Macrobending sangat sensitif terhadap panjang gelombang yang lebih panjang (1550 nm). Perbedaan redaman drastis antara 1310 nm dan 1550 nm memastikan adanya tekukan kabel.",
      quickTip: "Identifikasi Macrobending: Redaman pada 1550 nm jauh lebih besar daripada 1310 nm."
    }
  ],
  tf: [
    {
      stimulus: "Prinsip kerja radar optik pada instrumen OTDR.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai OTDR!",
      statements: [
        { text: "OTDR memetakan jalur kabel optik berdasarkan analisis waktu tempuh pulsa laser pantul balik.", correct: "B" },
        { text: "OTDR dapat menunjukkan jarak presisi lokasi kabel yang putus dari sentral pengujian.", correct: "B" },
        { text: "OTDR bekerja dengan cara memancarkan gelombang suara ultrasonik ke dalam kabel tembaga.", correct: "S" }
      ],
      explanation: "OTDR adalah instrumen optik berbasis pulsa cahaya laser ke dalam serat kaca, bukan gelombang ultrasonik tembaga.",
      quickTip: "OTDR adalah instrumen radar pulsa laser optik ke dalam serat kaca."
    },
    {
      stimulus: "Konsep Dead Zone pada pembacaan instrumen OTDR.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Dead Zone!",
      statements: [
        { text: "Event Dead Zone adalah jarak minimum untuk membedakan dua pantulan reflektif berdekatan.", correct: "B" },
        { text: "Penggunaan Launch Cable (Dummy Fiber) dapat membantu mengatasi dead zone pada konektor awal kabel uji.", correct: "B" },
        { text: "Semakin lebar Pulse Width yang digunakan, maka Dead Zone pada OTDR akan menjadi semakin sempit.", correct: "S" }
      ],
      explanation: "Semakin LEBAR pulse width, maka Dead Zone akan semakin LEBAR (panjang). Untuk mempersempit dead zone, gunakan pulse width pendek.",
      quickTip: "Pulse width lebar membuat dead zone semakin lebar; pulse width pendek mempersempit dead zone."
    },
    {
      stimulus: "Analisis bentuk grafik kurva (trace) pada OTDR.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang kurva OTDR!",
      statements: [
        { text: "Konektor mekanik ditandai dengan lonjakan spike reflektif tajam ke atas pada kurva.", correct: "B" },
        { text: "Sambungan fusion splice yang baik ditandai dengan undakan penurunan garis tanpa spike pantulan.", correct: "B" },
        { text: "Ujung akhir kabel yang putus ditandai dengan kurva yang terus menanjak naik ke atas tanpa henti.", correct: "S" }
      ],
      explanation: "Ujung kabel yang putus ditandai dengan spike reflektif terakhir yang langsung jatuh curam ke bawah menyentuh noise floor.",
      quickTip: "Ujung kabel putus ditandai kurva yang jatuh curam menyentuh noise floor."
    },
    {
      stimulus: "Fenomena Virtual Gainer pada pengukuran sambungan serat optik.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang fenomena Gainer!",
      statements: [
        { text: "Fenomena Gainer terjadi saat dua serat yang memiliki koefisien backscattering berbeda disambungkan.", correct: "B" },
        { text: "Pengujian dua arah (Bi-Directional Testing) dan merata-ratakan nilai redaman adalah solusi standar untuk mengatasi gainer.", correct: "B" },
        { text: "Fenomena Gainer membuktikan bahwa kabel serat optik dapat menghasilkan energi listrik gratis.", correct: "S" }
      ],
      explanation: "Gainer hanyalah ilusi optik pembacaan instrumen akibat perbedaan kerapatan molekul hamburan silika dua pabrikan serat.",
      quickTip: "Gainer adalah efek perbedaan hamburan silika; diatasi dengan pengukuran dua arah (bi-directional)."
    },
    {
      stimulus: "Pengaruh pengaturan parameter Indeks Bias (IOR).",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai IOR pada OTDR!",
      statements: [
        { text: "Nilai parameter IOR yang tepat diperlukan agar perhitungan jarak meter lokasi kejadian akurat.", correct: "B" },
        { text: "Format file standar internasional untuk menyimpan rekaman kurva jejak OTDR adalah format .SOR.", correct: "B" },
        { text: "Mengubah nilai IOR pada menu OTDR akan merubah panjang fisik kabel di lapangan secara otomatis.", correct: "S" }
      ],
      explanation: "Panjang fisik kabel nyata tidak berubah; yang berubah hanyalah hasil perhitungan kalkulasi jarak pada software OTDR.",
      quickTip: "Pengaturan IOR mengatur akurasi kalkulasi jarak software OTDR, bukan mengubah fisik kabel."
    }
  ]
};

module.exports = {
  s23,
  s24,
  s25,
  s26
};
