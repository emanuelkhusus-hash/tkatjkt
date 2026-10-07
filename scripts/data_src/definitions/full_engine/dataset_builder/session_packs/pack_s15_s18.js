// scripts/data_src/definitions/full_engine/dataset_builder/session_packs/pack_s15_s18.js
// Sesi 15: Pengalamatan IPv4, Kelas Alamat & Alamat Khusus
// Sesi 16: Perhitungan Subnetting CIDR, VLSM & Optimasi Alokasi IP
// Sesi 17: Pengalamatan IPv6, Struktur Format & Mekanisme Transisi
// Sesi 18: Prinsip Dasar Model 7 Layer OSI & Protokol Arsitektur TCP/IP
// Total 4 Sesi x 30 Soal = 120 Butir Soal Unik Standar Pusmendik

const s15 = {
  sessionId: "s15",
  pg: [
    {
      stimulus: "Pengalamatan IPv4 merupakan protokol jaringan layer 3 yang paling banyak digunakan dalam arsitektur TCP/IP saat ini.",
      question: "Panjang total format bit biner dan pembagian oktet desimal bertitik (dotted decimal) pada alamat IPv4 adalah...",
      correctText: "32 bit yang terbagi menjadi 4 oktet (masing-masing 8 bit)",
      distractors: [
        "64 bit yang terbagi menjadi 8 oktet",
        "128 bit yang terbagi menjadi 16 heksadesimal",
        "16 bit yang terbagi menjadi 2 blok",
        "256 bit yang terbagi menjadi 32 byte"
      ],
      explanation: "IPv4 memiliki panjang 32 bit, dikelompokkan menjadi 4 oktet (masing-masing 8 bit bernilai desimal 0 hingga 255) dipisahkan tanda titik.",
      quickTip: "Format IPv4 = 32 bit, 4 oktet bernilai 0-255."
    },
    {
      stimulus: "Pada sistem pengalamatan kelas tradisional (Classful Addressing), alamat IP dikelompokkan berdasarkan rentang oktet pertama.",
      question: "Rentang desimal pada oktet pertama untuk alamat IPv4 Kelas A adalah...",
      correctText: "1 sampai 126",
      distractors: [
        "128 sampai 191",
        "192 sampai 223",
        "224 sampai 239",
        "240 sampai 255"
      ],
      explanation: "Kelas A memiliki bit pertama '0', mencakup rentang 1 hingga 126 pada oktet pertama, dengan default subnet mask 255.0.0.0 (/8).",
      quickTip: "Oktet pertama IPv4: Kelas A = 1-126; Kelas B = 128-191; Kelas C = 192-223."
    },
    {
      stimulus: "Alamat IPv4 Kelas B dirancang untuk jaringan berskala menengah hingga besar dengan kapasitas hingga 65.534 host.",
      question: "Rentang desimal pada oktet pertama untuk alamat IPv4 Kelas B adalah...",
      correctText: "128 sampai 191",
      distractors: [
        "1 sampai 126",
        "192 sampai 223",
        "224 sampai 239",
        "127 sampai 128"
      ],
      explanation: "Kelas B diawali dengan bit biner '10', mencakup 128 hingga 191, dengan default subnet mask 255.255.0.0 (/16).",
      quickTip: "Kelas B = 128 sampai 191 pada oktet pertama."
    },
    {
      stimulus: "Alamat IPv4 Kelas C sangat umum digunakan pada jaringan skala kecil seperti laboratorium sekolah atau perkantoran.",
      question: "Rentang desimal pada oktet pertama dan default subnet mask untuk alamat IPv4 Kelas C adalah...",
      correctText: "192 sampai 223 dengan default subnet mask 255.255.255.0 (/24)",
      distractors: [
        "1 sampai 126 dengan subnet mask 255.0.0.0",
        "128 sampai 191 dengan subnet mask 255.255.0.0",
        "224 sampai 239 dengan subnet mask 255.255.255.255",
        "240 sampai 255 dengan subnet mask 0.0.0.0"
      ],
      explanation: "Kelas C diawali bit '110', rentang oktet 192-223, default mask 255.255.255.0 (/24) melayani hingga 254 host per jaringan.",
      quickTip: "Kelas C = 192 sampai 223 (mask /24)."
    },
    {
      stimulus: "Alamat IPv4 Kelas D (rentang oktet pertama 224 sampai 239) dialokasikan secara khusus oleh IANA untuk fungsi tertentu.",
      question: "Tujuan pemanfaatan khusus dari blok alamat IPv4 Kelas D adalah...",
      correctText: "Komunikasi Multicast (pengiriman paket satu ke kelompok tertentu)",
      distractors: [
        "Host komputer pengguna jaringan rumahan",
        "Eksperimen riset dan penelitian militer di masa depan",
        "Alamat loopback pengujian internal kartu jaringan",
        "Alamat kartu Wi-Fi laptop secara otomatis"
      ],
      explanation: "Kelas D (224.0.0.0 hingga 239.255.255.255) digunakan untuk traffic Multicast seperti protokol routing OSPF (224.0.0.5) dan streaming video.",
      quickTip: "Kelas D (224-239) = Khusus komunikasi Multicast."
    },
    {
      stimulus: "Standar RFC 1918 menetapkan rentang alamat IP Privat yang tidak dapat dirutekan secara langsung di internet publik (Non-Routable).",
      question: "Rentang alamat IP Privat yang dialokasikan untuk Kelas C menurut RFC 1918 adalah...",
      correctText: "192.168.0.0 sampai 192.168.255.255 (prefix /16)",
      distractors: [
        "10.0.0.0 sampai 10.255.255.255",
        "172.16.0.0 sampai 172.31.255.255",
        "169.254.0.0 sampai 169.254.255.255",
        "127.0.0.0 sampai 127.255.255.255"
      ],
      explanation: "Rentang IP Privat Kelas C adalah 192.168.0.0/16 (mencakup 256 blok subnet kelas C dari 192.168.0.x hingga 192.168.255.x).",
      quickTip: "IP Privat Kelas C = 192.168.0.0 s.d. 192.168.255.255."
    },
    {
      stimulus: "Sebuah perusahaan skala enterprise membutuhkan alamat IP Privat Kelas A untuk menampung ratusan ribu workstation di seluruh cabangnya.",
      question: "Rentang blok alamat IP Privat Kelas A yang didefinisikan dalam RFC 1918 adalah...",
      correctText: "10.0.0.0 sampai 10.255.255.255 (prefix /8)",
      distractors: [
        "172.16.0.0 sampai 172.31.255.255",
        "192.168.0.0 sampai 192.168.255.255",
        "11.0.0.0 sampai 11.255.255.255",
        "1.0.0.0 sampai 1.255.255.255"
      ],
      explanation: "Blok IP Privat Kelas A adalah 10.0.0.0/8, menyediakan 16.777.214 host privat yang bebas digunakan di jaringan lokal.",
      quickTip: "IP Privat Kelas A = 10.0.0.0/8 (10.0.0.0 s.d. 10.255.255.255)."
    },
    {
      stimulus: "Rentang alamat IP Privat Kelas B sering digunakan pada institusi pendidikan dan kantor menengah.",
      question: "Rentang blok alamat IP Privat Kelas B menurut RFC 1918 adalah...",
      correctText: "172.16.0.0 sampai 172.31.255.255 (prefix /12, total 16 blok kelas B)",
      distractors: [
        "172.0.0.0 sampai 172.255.255.255",
        "172.16.0.0 sampai 172.16.255.255 saja",
        "192.168.16.0 sampai 192.168.31.255",
        "10.16.0.0 sampai 10.31.255.255"
      ],
      explanation: "IP Privat Kelas B mencakup 16 blok kontigu dari 172.16.0.0 hingga 172.31.255.255 (prefix 172.16.0.0/12).",
      quickTip: "IP Privat Kelas B = 172.16.0.0 s.d. 172.31.255.255."
    },
    {
      stimulus: "Seorang teknisi melakukan pengujian internal stack protokol TCP/IP pada komputer tanpa menghubungkan kabel LAN atau Wi-Fi.",
      question: "Alamat IP Loopback standar yang digunakan untuk menguji fungsionalitas software stack TCP/IP lokal pada komputer adalah...",
      correctText: "127.0.0.1 (blok 127.0.0.0/8)",
      distractors: [
        "0.0.0.0",
        "255.255.255.255",
        "192.168.1.1",
        "10.0.0.1"
      ],
      explanation: "Blok 127.0.0.0/8 (paling umum 127.0.0.1 atau localhost) adalah alamat loopback untuk memverifikasi bahwa tumpukan protokol TCP/IP lokal berfungsi normal.",
      quickTip: "Tes internal TCP/IP lokal komputer = Ping 127.0.0.1 (Loopback Address)."
    },
    {
      stimulus: "Sebuah komputer laptop yang disetel mode otomatis (DHCP) gagal menerima respon penawaran IP dari server DHCP di jaringan.",
      question: "Sistem operasi Windows akan memberikan alamat darurat otomatis dari rentang APIPA (Automatic Private IP Addressing), yaitu...",
      correctText: "169.254.0.1 sampai 169.254.255.254 (blok 169.254.0.0/16)",
      distractors: [
        "192.168.1.100 sampai 192.168.1.200",
        "10.10.10.1 sampai 10.10.10.254",
        "127.0.0.1 sampai 127.0.0.254",
        "224.0.0.1 sampai 224.0.0.254"
      ],
      explanation: "Jika DHCP server tidak merespon, sistem operasi otomatis mengalokasikan alamat Link-Local APIPA dari blok 169.254.0.0/16 (indikasi bahwa DHCP server gagal/mati).",
      quickTip: "IP berawalan 169.254.x.x menandakan gagal mendapat IP dari DHCP (APIPA)."
    },
    {
      stimulus: "Pada tabel routing sebuah router gateway, terdapat rute penampung yang mengarahkan semua lalu lintas yang tidak dikenal menuju ke internet.",
      question: "Notasi alamat IP dan subnet mask untuk Default Route (Gateway of Last Resort) adalah...",
      correctText: "0.0.0.0/0 (IP 0.0.0.0 dengan Netmask 0.0.0.0)",
      distractors: [
        "255.255.255.255/32",
        "127.0.0.1/8",
        "192.168.1.1/24",
        "10.0.0.0/8"
      ],
      explanation: "Default Route direpresentasikan dengan 0.0.0.0/0 (seluruh bit nol), yang mencakup semua kemungkinan tujuan paket data.",
      quickTip: "Default route = 0.0.0.0/0 (Gateway of Last Resort)."
    },
    {
      stimulus: "Paket data yang ditujukan ke seluruh host yang berada di segmen jaringan lokal yang sama tanpa diteruskan melintasi router.",
      question: "Alamat Limited Broadcast (Local Broadcast) standar yang digunakan adalah...",
      correctText: "255.255.255.255",
      distractors: [
        "0.0.0.0",
        "127.0.0.1",
        "192.168.1.0",
        "224.0.0.1"
      ],
      explanation: "Alamat 255.255.255.255 adalah broadcast terbatas lokal (limited broadcast) yang diterima semua host di broadcast domain lokal dan dihentikan oleh router.",
      quickTip: "Alamat broadcast lokal seluruh segmen = 255.255.255.255."
    },
    {
      stimulus: "Sebuah alamat IPv4 terdiri dari dua bagian logis pembagian bit.",
      question: "Dua bagian pembentuk identitas dalam sebuah alamat IP adalah...",
      correctText: "Network ID (Porsi Jaringan) dan Host ID (Porsi Perangkat)",
      distractors: [
        "User ID dan Password ID",
        "MAC ID dan Serial ID",
        "Port ID dan Socket ID",
        "Domain ID dan Web ID"
      ],
      explanation: "Subnet mask memisahkan alamat IP menjadi Network ID (menentukan di jaringan mana host berada) dan Host ID (identitas unik host di jaringan tersebut).",
      quickTip: "Alamat IP terbagi menjadi Network ID dan Host ID."
    },
    {
      stimulus: "Dua komputer pada jaringan lokal dikonfigurasi dengan alamat IP: Komputer A = 192.168.1.10/24 dan Komputer B = 192.168.2.10/24.",
      question: "Apakah kedua komputer tersebut dapat saling berkomunikasi secara langsung tanpa melalui perangkat Router Layer 3?",
      correctText: "Tidak bisa, karena keduanya berada pada Network ID yang berbeda (192.168.1.0 vs 192.168.2.0)",
      distractors: [
        "Bisa, karena nomor host keduanya sama-sama 10",
        "Bisa, karena sama-sama menggunakan kabel UTP Cat6",
        "Bisa, asalkan kedua komputer dinyalakan serempak",
        "Bisa, karena subnet mask keduanya sama-sama /24"
      ],
      explanation: "Karena prefix /24 mencakup 3 oktet pertama, Network ID Komputer A adalah 192.168.1.0 sedangkan Komputer B adalah 192.168.2.0. Perbedaan Network ID mewajibkan adanya Router.",
      quickTip: "Beda Network ID membutuhkan Router untuk saling berkomunikasi."
    },
    {
      stimulus: "Teknologi penerjemahan alamat jaringan (Network Address Translation / NAT) banyak diimplementasikan pada router penghubung internet kantor.",
      question: "Fungsi utama dari teknologi NAT pada router adalah...",
      correctText: "Menerjemahkan banyak alamat IP Privat lokal menjadi satu atau beberapa alamat IP Publik yang terdaftar resmi di internet",
      distractors: [
        "Mengubah data teks menjadi gelombang radio FM",
        "Mematikan virus komputer di hard disk pengguna",
        "Mempercepat putaran kipas pendingin casing server",
        "Mengganti sistem operasi Linux menjadi Windows"
      ],
      explanation: "NAT memungkinkan ribuan perangkat ber-IP privat di jaringan lokal dapat mengakses internet secara bersamaan menggunakan satu IP publik provider.",
      quickTip: "NAT menerjemahkan IP Privat lokal menjadi IP Publik internet."
    },
    {
      stimulus: "Salah satu varian NAT yang paling populer memetakan ribuan IP Privat ke satu IP Publik tunggal dengan memanfaatkan nomor port layer 4.",
      question: "Nama teknologi varian NAT berbasis pemetaan port tersebut adalah...",
      correctText: "PAT (Port Address Translation) / NAT Overload",
      distractors: [
        "Static NAT 1-to-1",
        "Dynamic NAT Pool",
        "VLAN Trunking",
        "Split Horizon"
      ],
      explanation: "PAT (sering disebut NAT Overload atau Masquerade) membedakan koneksi ribuan host privat berdasarkan nomor source port unik pada satu IP publik.",
      quickTip: "Banyak IP privat ke 1 IP publik via nomor port = PAT / NAT Overload (Masquerade)."
    },
    {
      stimulus: "Organisasi nirlaba internasional yang bertanggung jawab mengoordinasikan alokasi global alamat IP dan sistem nomor otonom (AS Number) adalah...",
      question: "Nama badan pengelola sumber daya penomoran internet global tersebut adalah...",
      correctText: "IANA (Internet Assigned Numbers Authority) di bawah ICANN",
      distractors: [
        "IEEE (Institute of Electrical and Electronics Engineers)",
        "TIA (Telecommunications Industry Association)",
        "ISO (International Organization for Standardization)",
        "FCC (Federal Communications Commission)"
      ],
      explanation: "IANA bertanggung jawab atas alokasi global blok alamat IP dan mendelegasikannya ke Regional Internet Registries (RIR, seperti APNIC untuk Asia Pasifik).",
      quickTip: "Pengelola alokasi global alamat IP sedunia = IANA / ICANN."
    },
    {
      stimulus: "Untuk wilayah Asia Pasifik (termasuk Indonesia), registri regional yang mendistribusikan blok alamat IP publik ke ISP lokal adalah...",
      question: "Nama Regional Internet Registry (RIR) wilayah Asia Pasifik adalah...",
      correctText: "APNIC (Asia-Pacific Network Information Centre)",
      distractors: [
        "ARIN (Amerika Utara)",
        "RIPE NCC (Eropa & Timur Tengah)",
        "LACNIC (Amerika Latin)",
        "AFRINIC (Afrika)"
      ],
      explanation: "APNIC melayani kawasan Asia Pasifik. Di Indonesia, ISP memperoleh IP publik melalui APNIC atau IDNIC (APJII).",
      quickTip: "Registri IP wilayah Asia Pasifik = APNIC."
    },
    {
      stimulus: "Alamat IP publik yang diberikan ISP kepada pelanggan korporasi yang nilainya tetap dan tidak pernah berubah setiap kali router restart disebut...",
      question: "Tipe alokasi alamat IP publik permanen tersebut adalah...",
      correctText: "IP Statis (Static IP)",
      distractors: [
        "IP Dinamis (Dynamic IP)",
        "IP APIPA",
        "IP Loopback",
        "IP Anycast"
      ],
      explanation: "IP Statis diatur secara manual dan tidak berubah, sangat dibutuhkan untuk server web, server email, CCTV online, atau VPN kantor.",
      quickTip: "Alamat IP permanen yang tidak berubah saat restart = IP Statis."
    },
    {
      stimulus: "Alamat IP publik yang diberikan ISP kepada pelanggan perumahan di mana alamat dapat berganti secara otomatis saat koneksi modem terputus dan tersambung kembali disebut...",
      question: "Tipe alokasi alamat IP yang berubah secara periodik tersebut adalah...",
      correctText: "IP Dinamis (Dynamic IP)",
      distractors: [
        "IP Statis",
        "IP Multicast",
        "IP Broadcast",
        "IP Gateway"
      ],
      explanation: "IP Dinamis dialokasikan secara sementara dari pool penyedia ISP menggunakan protokol DHCP/PPPoE untuk menghemat alokasi persediaan IPv4.",
      quickTip: "Alamat IP yang berubah berganti secara otomatis = IP Dinamis."
    }
  ],
  mcma: [
    {
      stimulus: "Standar RFC 1918 menetapkan 3 blok rentang alamat IPv4 Privat untuk penggunaan jaringan lokal.",
      question: "Manakah yang TERMASUK blok alamat IPv4 Privat menurut standar RFC 1918? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "10.0.0.0 s.d. 10.255.255.255 (Blok /8)", isCorrect: true },
        { text: "172.16.0.0 s.d. 172.31.255.255 (Blok /12)", isCorrect: true },
        { text: "192.168.0.0 s.d. 192.168.255.255 (Blok /16)", isCorrect: true },
        { text: "8.8.8.0 s.d. 8.8.8.255 (DNS Google Publik)", isCorrect: false },
        { text: "1.1.1.0 s.d. 1.1.1.255 (DNS Cloudflare Publik)", isCorrect: false }
      ],
      explanation: "Tiga rentang IP privat resmi RFC 1918 adalah 10.0.0.0/8, 172.16.0.0/12, dan 192.168.0.0/16. Alamat 8.8.8.8 dan 1.1.1.1 adalah IP publik internet.",
      quickTip: "Tiga blok IP Privat RFC 1918: 10.x.x.x, 172.16-31.x.x, dan 192.168.x.x."
    },
    {
      stimulus: "Alamat IPv4 memiliki beberapa alamat khusus yang dicadangkan untuk fungsi tertentu.",
      question: "Manakah pasangan alamat IP dan fungsi khusus yang BENAR? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "127.0.0.1 berfungsi sebagai alamat Loopback lokal pengujian software stack TCP/IP", isCorrect: true },
        { text: "169.254.x.x berfungsi sebagai alamat darurat APIPA saat klien gagal menghubungi DHCP", isCorrect: true },
        { text: "0.0.0.0 berfungsi sebagai alamat kartu Wi-Fi tercepat di dunia", isCorrect: false },
        { text: "255.255.255.255 berfungsi sebagai alamat web server rahasia", isCorrect: false },
        { text: "192.168.1.1 wajib selalu menjadi alamat satu-satunya di internet", isCorrect: false }
      ],
      explanation: "127.0.0.1 adalah loopback adapter internal; 169.254.x.x adalah APIPA saat DHCP gagal.",
      quickTip: "127.0.0.1 = Loopback test internal; 169.254.x.x = APIPA gagal DHCP."
    },
    {
      stimulus: "Klasifikasi kelas IPv4 tradisional (Classful) membagi alamat berdasarkan nilai oktet pertamanya.",
      question: "Manakah klasifikasi kelas alamat IPv4 yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Kelas A: Oktet pertama 1 s.d. 126 (Default mask /8)", isCorrect: true },
        { text: "Kelas B: Oktet pertama 128 s.d. 191 (Default mask /16)", isCorrect: true },
        { text: "Kelas C: Oktet pertama 192 s.d. 223 (Default mask /24)", isCorrect: true },
        { text: "Kelas D: Oktet pertama 1 s.d. 50", isCorrect: false },
        { text: "Kelas E: Oktet pertama 51 s.d. 100", isCorrect: false }
      ],
      explanation: "Kelas A = 1-126, Kelas B = 128-191, Kelas C = 192-223, Kelas D = 224-239 (multicast), Kelas E = 240-255 (eksperimen).",
      quickTip: "Kelas A (1-126), Kelas B (128-191), Kelas C (192-223)."
    },
    {
      stimulus: "Dalam sebuah subnet jaringan IPv4, ada dua alamat yang TIDAK BOLEH dikonfigurasikan ke perangkat komputer pengguna.",
      question: "Dua alamat yang dicadangkan dan tidak boleh dipakai oleh host komputer adalah... (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Alamat Network ID (seluruh bit host bernilai biner 0)", isCorrect: true },
        { text: "Alamat Broadcast ID (seluruh bit host bernilai biner 1)", isCorrect: true },
        { text: "Alamat Host Pertama (seluruh bit host bernilai biner 00000001)", isCorrect: false },
        { text: "Alamat Default Gateway (biasanya IP pertama atau terakhir yang usable)", isCorrect: false },
        { text: "Alamat DNS Server lokal", isCorrect: false }
      ],
      explanation: "Network ID digunakan untuk mewakili identitas subnet, sedangkan Broadcast ID digunakan untuk memanggil seluruh host dalam subnet. Keduanya tidak boleh dipasang pada PC.",
      quickTip: "Dua alamat yang tidak boleh dipakai host: Network ID dan Broadcast ID."
    },
    {
      stimulus: "Penerapan NAT (Network Address Translation) memiliki dampak positif dan batasan fungsionalitas.",
      question: "Manakah manfaat dari penerapan teknologi NAT pada router gateway? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Menghemat ketersediaan alamat IPv4 publik yang sangat terbatas di dunia", isCorrect: true },
        { text: "Meningkatkan keamanan internal jaringan karena IP privat tidak terekspos langsung ke internet", isCorrect: true },
        { text: "Memungkinkan ribuan komputer lokal berbagi satu koneksi internet publik ISP", isCorrect: true },
        { text: "Membuat kabel LAN yang putus bisa tersambung otomatis secara nirkabel", isCorrect: false },
        { text: "Menghilangkan kebutuhan kartu jaringan fisik pada komputer", isCorrect: false }
      ],
      explanation: "NAT menghemat IPv4 publik, menyembunyikan topologi IP internal (keamanan terselubung), dan memungkinkan pemakaian bersama IP publik ISP.",
      quickTip: "Manfaat NAT: Menghemat IP publik, keamanan internal, dan sharing koneksi internet."
    }
  ],
  tf: [
    {
      stimulus: "Struktur dan panjang format alamat IPv4.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai alamat IPv4!",
      statements: [
        { text: "Alamat IPv4 memiliki panjang total 32 bit yang dipisahkan menjadi 4 oktet desimal bertitik.", correct: "B" },
        { text: "Nilai desimal terbesar yang mungkin ada pada satu oktet IPv4 adalah 255 (berasal dari 8 bit angka biner 1).", correct: "B" },
        { text: "Alamat IP seperti 192.168.1.300 adalah contoh alamat IPv4 yang valid dan benar.", correct: "S" }
      ],
      explanation: "Nilai maksimal tiap oktet adalah 255 (karena 8 bit biner). Angka 300 tidak valid pada alamat IPv4.",
      quickTip: "Oktet IPv4 maksimal bernilai 255; angka di atas 255 adalah alamat tidak valid."
    },
    {
      stimulus: "Karakteristik perutean IP Publik vs IP Privat.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang IP Publik dan IP Privat!",
      statements: [
        { text: "Alamat IP Privat dapat digunakan secara bebas di jaringan lokal tanpa perlu mendaftar ke badan internet IANA.", correct: "B" },
        { text: "Alamat IP Privat tidak dapat dirutekan (non-routable) langsung di jaringan internet publik.", correct: "B" },
        { text: "Router backbone internet di seluruh dunia akan dengan senang hati meneruskan paket dengan tujuan 192.168.1.1 ke seluruh benua.", correct: "S" }
      ],
      explanation: "Router penyedia internet publik (ISP) akan membuang (drop) paket dengan alamat tujuan IP privat RFC 1918.",
      quickTip: "IP Privat di-drop oleh router internet publik; butuh NAT untuk online."
    },
    {
      stimulus: "Fungsi alamat Loopback dan APIPA.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai alamat khusus!",
      statements: [
        { text: "Perintah 'ping 127.0.0.1' dapat berhasil meskipun kabel jaringan LAN dicabut dari komputer.", correct: "B" },
        { text: "Komputer yang memperoleh IP 169.254.x.x menandakan komputer gagal berkomunikasi dengan server DHCP.", correct: "B" },
        { text: "Alamat APIPA 169.254.x.x dapat digunakan langsung untuk browsing internet membuka Google.", correct: "S" }
      ],
      explanation: "APIPA hanya memungkinkan komunikasi darurat antar-host dalam satu link lokal tanpa akses gateway internet.",
      quickTip: "APIPA tidak punya gateway; tidak bisa digunakan untuk internetan."
    },
    {
      stimulus: "Peran Subnet Mask dalam membedakan Network ID dan Host ID.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang subnet mask!",
      statements: [
        { text: "Subnet mask digunakan oleh perangkat untuk memisahkan porsi Network ID dan porsi Host ID.", correct: "B" },
        { text: "Komputer dengan IP 192.168.1.5/24 dan 192.168.1.20/24 berada pada satu Network ID yang sama (192.168.1.0).", correct: "B" },
        { text: "Komputer dengan Network ID yang berbeda dapat saling bertukar data langsung tanpa membutuhkan Router.", correct: "S" }
      ],
      explanation: "Komputer pada Network ID yang berbeda mutlak membutuhkan Router Layer 3 untuk merutekan paket antar-jaringan.",
      quickTip: "Komunikasi antar-Network ID yang berbeda wajib melalui Router."
    },
    {
      stimulus: "Fungsi dan cara kerja Network Address Translation (NAT).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang NAT!",
      statements: [
        { text: "NAT Overload (PAT) menggunakan nomor port layer 4 untuk melacak koneksi dari ribuan klien internal.", correct: "B" },
        { text: "NAT memungkinkan satu kantor dengan ratusan karyawan cukup berlangganan 1 alamat IP Publik dari ISP.", correct: "B" },
        { text: "NAT adalah teknologi pengganti kabel fiber optik untuk memperkuat sinyal cahaya.", correct: "S" }
      ],
      explanation: "NAT adalah fitur software perutean Layer 3/4 router, bukan media kabel transmisi fisik.",
      quickTip: "NAT adalah mekanisme translasi IP logis pada router, bukan media fisik kabel."
    }
  ]
};

const s16 = {
  sessionId: "s16",
  pg: [
    {
      stimulus: "Sistem pengalamatan modern menggunakan Classless Inter-Domain Routing (CIDR) dengan tanda garis miring (slash notation).",
      question: "Arti dari notasi prefix /26 pada alamat IP 192.168.10.0/26 adalah...",
      correctText: "Terdapat 26 bit biner bernilai angka 1 pada subnet mask (255.255.255.192)",
      distractors: [
        "Jaringan tersebut hanya boleh menampung maksimal 26 unit komputer",
        "Kabel LAN yang digunakan harus memiliki 26 pasang kawat tembaga",
        "Kecepatan transfer data dibatasi maksimal 26 Megabits per detik",
        "Alamat IP tersebut dibuat pada tanggal 26"
      ],
      explanation: "Prefix /26 berarti 26 bit pertama dari 32 bit subnet mask bernilai biner 1 (11111111.11111111.11111111.11000000 = 255.255.255.192).",
      quickTip: "Notasi /26 = 26 bit bernilai 1 pada subnet mask (255.255.255.192)."
    },
    {
      stimulus: "Konversi notasi CIDR prefix ke nilai desimal subnet mask merupakan keahlian dasar penting teknisi jaringan.",
      question: "Nilai desimal subnet mask yang setara dengan prefix CIDR /28 adalah...",
      correctText: "255.255.255.240",
      distractors: [
        "255.255.255.128 (/25)",
        "255.255.255.192 (/26)",
        "255.255.255.224 (/27)",
        "255.255.255.248 (/29)"
      ],
      explanation: "Prefix /28 memiliki 4 bit host (11110000 pada oktet ke-4). Nilai desimal oktet ke-4 adalah 128 + 64 + 32 + 16 = 240.",
      quickTip: "Prefix /28 = 255.255.255.240."
    },
    {
      stimulus: "Untuk menghitung jumlah alamat IP host valid yang dapat digunakan (usable host) pada suatu subnet, digunakan rumus 2^y - 2.",
      question: "Alasan mengapa pada rumus perhitungan jumlah host harus dikurangi 2 (angka -2) adalah...",
      correctText: "Karena alamat pertama dialokasikan untuk Network ID dan alamat terakhir dialokasikan untuk Broadcast ID",
      distractors: [
        "Untuk mencadangkan alamat server Windows dan server Linux",
        "Dipotong untuk biaya pajak lisensi perangkat jaringan",
        "Sebagai cadangan jika ada dua kabel LAN yang putus",
        "Aturan acak tanpa alasan teknis"
      ],
      explanation: "Alamat pertama (semua bit host 0) adalah Network ID dan alamat terakhir (semua bit host 1) adalah Broadcast ID, keduanya tidak boleh dipasang pada perangkat pengguna.",
      quickTip: "Dikurangi 2 karena alamat pertama = Network ID dan alamat terakhir = Broadcast ID."
    },
    {
      stimulus: "Sebuah laboratorium komputer baru membutuhkan alokasi subnet yang dapat menampung tepat 28 unit komputer siswa dan 1 printer jaringan (total 29 host).",
      question: "Prefix subnet mask terkecil yang paling efisien dan mencukupi untuk kebutuhan 29 host tersebut adalah...",
      correctText: "/27 (menyediakan 30 usable host)",
      distractors: [
        "/28 (hanya menyediakan 14 usable host)",
        "/29 (hanya menyediakan 6 usable host)",
        "/26 (menyediakan 62 usable host, terlalu boros)",
        "/30 (hanya menyediakan 2 usable host)"
      ],
      explanation: "/27 memiliki 5 bit host (2^5 - 2 = 32 - 2 = 30 usable host), sangat pas dan paling efisien untuk menampung 29 host.",
      quickTip: "29 host butuh minimal 30 usable host = Prefix /27."
    },
    {
      stimulus: "Dua router kantor dihubungkan secara langsung melalui sambungan serial kabel Point-to-Point (hanya membutuhkan tepat 2 alamat IP host).",
      question: "Prefix CIDR standar yang paling hemat dan paling tepat digunakan untuk tautan Point-to-Point antar-router adalah...",
      correctText: "/30 (Subnet mask 255.255.255.252)",
      distractors: [
        "/24 (Subnet mask 255.255.255.0)",
        "/28 (Subnet mask 255.255.255.240)",
        "/29 (Subnet mask 255.255.255.248)",
        "/26 (Subnet mask 255.255.255.192)"
      ],
      explanation: "/30 memiliki 2 bit host (2^2 = 4 total IP, 4 - 2 = 2 usable host), sempurna untuk link Point-to-Point antar dua router tanpa membuang IP.",
      quickTip: "Link Point-to-Point antar 2 router = Prefix /30 (2 usable host)."
    },
    {
      stimulus: "Diberikan sebuah alamat IP: 192.168.10.75 dengan subnet mask 255.255.255.224 (/27).",
      question: "Berapakah alamat Network ID dari subnet tempat alamat IP tersebut berada?",
      correctText: "192.168.10.64",
      distractors: [
        "192.168.10.0",
        "192.168.10.32",
        "192.168.10.96",
        "192.168.10.70"
      ],
      explanation: "Subnet mask /27 memiliki magic number kelipatan = 256 - 224 = 32. Kelipatan blok subnet: 0, 32, 64, 96... Karena 75 berada di antara 64 dan 95, maka Network ID-nya adalah 192.168.10.64.",
      quickTip: "Magic number /27 adalah 32. Blok: 0, 32, 64, 96. Angka 75 masuk di blok 192.168.10.64."
    },
    {
      stimulus: "Melanjutkan analisis subnet pada alamat IP 192.168.10.75/27 dengan Network ID 192.168.10.64.",
      question: "Berapakah alamat Broadcast ID untuk blok subnet tersebut?",
      correctText: "192.168.10.95",
      distractors: [
        "192.168.10.65",
        "192.168.10.94",
        "192.168.10.96",
        "192.168.10.255"
      ],
      explanation: "Subnet berikutnya dimulai pada 192.168.10.96. Maka alamat Broadcast dari subnet sebelumnya adalah tepat 1 angka sebelum subnet berikutnya, yaitu 192.168.10.95.",
      quickTip: "Broadcast ID adalah angka tepat sebelum blok subnet berikutnya: 96 - 1 = 95."
    },
    {
      stimulus: "Pada subnet 192.168.10.64/27 dengan Broadcast ID 192.168.10.95.",
      question: "Rentang alamat IP yang sah (usable IP range) yang dapat dikonfigurasikan ke komputer pengguna adalah...",
      correctText: "192.168.10.65 sampai 192.168.10.94",
      distractors: [
        "192.168.10.64 sampai 192.168.10.95",
        "192.168.10.1 sampai 192.168.10.30",
        "192.168.10.66 sampai 192.168.10.96",
        "192.168.10.0 sampai 192.168.10.254"
      ],
      explanation: "Rentang host usable berada di antara Network ID (+1) dan Broadcast ID (-1), yaitu dari 192.168.10.65 hingga 192.168.10.94 (total 30 host).",
      quickTip: "Rentang usable = Network + 1 s.d. Broadcast - 1 (65 s.d. 94)."
    },
    {
      stimulus: "Sebuah blok IP 192.168.1.0/24 akan dipecah menjadi beberapa subnet menggunakan prefix /26.",
      question: "Berapa banyak subnet baru yang terbentuk dari pemecahan blok /24 menjadi /26 tersebut?",
      correctText: "4 subnet baru",
      distractors: [
        "2 subnet",
        "8 subnet",
        "16 subnet",
        "64 subnet"
      ],
      explanation: "Bit subnet yang dipinjam = 26 - 24 = 2 bit. Jumlah subnet = 2^2 = 4 subnet (blok .0, .64, .128, .192).",
      quickTip: "Pinjam 2 bit (24 ke 26) = 2^2 = 4 subnet baru."
    },
    {
      stimulus: "Teknik pembagian subnet dengan menggunakan panjang subnet mask yang bervariasi (berbeda-beda) sesuai kebutuhan riil tiap departemen disebut...",
      question: "Nama metodologi penghematan alokasi IP bertingkat tersebut adalah...",
      correctText: "VLSM (Variable Length Subnet Masking)",
      distractors: [
        "FLSM (Fixed Length Subnet Masking)",
        "DNS (Domain Name System)",
        "DHCP Relay Agent",
        "BGP Autonomous System"
      ],
      explanation: "VLSM memungkinkan administrator membagi ruang alamat IP menjadi beberapa subnet dengan ukuran prefix berbeda-beda guna memaksimalkan efisiensi alokasi.",
      quickTip: "Subnetting dengan prefix bervariasi sesuai kebutuhan = VLSM."
    },
    {
      stimulus: "Dalam merancang skema VLSM untuk beberapa departemen dengan kebutuhan jumlah host yang berbeda-beda.",
      question: "Aturan urutan alokasi terbaik yang harus diterapkan administrator jaringan agar alokasi subnet terstruktur rapi dan tidak tumpang tindih adalah...",
      correctText: "Mengurutkan dan mengalokasikan subnet dari kebutuhan jumlah host TERBESAR terlebih dahulu ke yang terkecil",
      distractors: [
        "Mengalokasikan dari kebutuhan jumlah host terkecil ke yang terbesar",
        "Mengalokasikan secara acak tanpa memperhatikan jumlah host",
        "Memberikan seluruh IP ke satu departemen saja",
        "Menggunakan prefix /30 untuk seluruh komputer kantor"
      ],
      explanation: "Best practice VLSM mewajibkan alokasi blok dimulai dari kebutuhan host terbesar guna menghindari fragmentasi ruang alamat IP.",
      quickTip: "Urutan pengerjaan VLSM: Mulai dari kebutuhan host TERBESAR ke terkecil."
    },
    {
      stimulus: "Sebuah kantor membutuhkan alokasi subnet untuk 50 komputer staf. Administrator memilih subnet mask /26 (255.255.255.192).",
      question: "Berapa banyak alamat IP usable yang tersisa (cadangan ekspansi) pada subnet tersebut setelah 50 komputer terpasang?",
      correctText: "12 alamat IP cadangan (62 usable host - 50 terpakai)",
      distractors: [
        "14 alamat IP",
        "2 alamat IP",
        "25 alamat IP",
        "Tidak ada cadangan sama sekali"
      ],
      explanation: "Prefix /26 menyediakan 2^6 - 2 = 64 - 2 = 62 usable host. Jika 50 IP dipakai, tersisa 62 - 50 = 12 IP cadangan.",
      quickTip: "Usable /26 adalah 62. Dikurangi 50 terpakai = sisa 12 IP."
    },
    {
      stimulus: "Diberikan alamat IP: 10.50.120.10/29 pada port antarmuka router.",
      question: "Berapa jumlah total IP address (termasuk network dan broadcast) dalam satu blok subnet /29?",
      correctText: "8 alamat IP (6 usable host)",
      distractors: [
        "4 alamat IP",
        "16 alamat IP",
        "32 alamat IP",
        "64 alamat IP"
      ],
      explanation: "/29 menyisakan 3 bit host (32 - 29 = 3 bit host). Total IP = 2^3 = 8 IP, dengan usable host = 8 - 2 = 6 host.",
      quickTip: "Prefix /29 = Total 8 IP, dengan 6 host yang bisa dipakai."
    },
    {
      stimulus: "Subnet mask 255.255.255.248 (/29) memiliki nilai 'Magic Number' kelipatan interval antar-subnet.",
      question: "Nilai interval lompatan (Magic Number) untuk subnet mask 255.255.255.248 adalah...",
      correctText: "8",
      distractors: [
        "4",
        "16",
        "32",
        "64"
      ],
      explanation: "Magic Number dihitung dari 256 dikurangi nilai oktet mask terakhir: 256 - 248 = 8.",
      quickTip: "Magic number /29 = 256 - 248 = 8."
    },
    {
      stimulus: "Pada alamat IP 172.16.5.0/28, berapa alamat Broadcast ID dari blok subnet tersebut?",
      question: "Alamat broadcast yang benar untuk subnet 172.16.5.0/28 adalah...",
      correctText: "172.16.5.15",
      distractors: [
        "172.16.5.14",
        "172.16.5.16",
        "172.16.5.31",
        "172.16.5.255"
      ],
      explanation: "Magic number /28 = 16 (256 - 240 = 16). Blok pertama: Network 172.16.5.0, Subnet berikutnya 172.16.5.16. Maka Broadcast ID = 172.16.5.15.",
      quickTip: "Network 172.16.5.0/28 memiliki Broadcast ID 172.16.5.15."
    },
    {
      stimulus: "Seorang teknisi memasang IP 192.168.1.127 dengan subnet mask 255.255.255.128 (/25) pada kartu jaringan komputer Windows.",
      question: "Respon yang diberikan oleh sistem operasi saat konfigurasi tersebut disimpan adalah...",
      correctText: "Sistem operasi menolak dan menampilkan pesan error karena 192.168.1.127 adalah alamat Broadcast ID dari subnet tersebut",
      distractors: [
        "Sistem operasi menerima dan koneksi berjalan lancar",
        "Komputer langsung merestart secara otomatis",
        "Subnet mask otomatis berubah menjadi /24",
        "Layar monitor berubah menjadi hitam putih"
      ],
      explanation: "Pada /25, blok pertama adalah .0 s.d. .127. Angka .127 adalah Broadcast ID dari subnet tersebut sehingga dilarang dipasang pada host.",
      quickTip: "192.168.1.127/25 adalah Broadcast ID, ditolak oleh OS jika dipasang ke PC."
    },
    {
      stimulus: "Berapa banyak subnet yang dapat dibuat dari satu blok jaringan Kelas C (/24) jika disubnetting menggunakan subnet mask 255.255.255.240 (/28)?",
      question: "Jumlah subnet baru yang terbentuk adalah...",
      correctText: "16 subnet",
      distractors: [
        "4 subnet",
        "8 subnet",
        "32 subnet",
        "64 subnet"
      ],
      explanation: "Dari /24 ke /28 meminjam 4 bit (28 - 24 = 4). Jumlah subnet = 2^4 = 16 subnet.",
      quickTip: "Meminjam 4 bit (/24 ke /28) = 2^4 = 16 subnet."
    },
    {
      stimulus: "Berapa jumlah host usable per subnet pada hasil subnetting /28 tersebut?",
      question: "Jumlah komputer yang dapat dipasang pada setiap subnet /28 adalah...",
      correctText: "14 host usable",
      distractors: [
        "16 host",
        "30 host",
        "6 host",
        "2 host"
      ],
      explanation: "Sisa bit host = 32 - 28 = 4 bit. Jumlah usable host = 2^4 - 2 = 16 - 2 = 14 host.",
      quickTip: "Usable host /28 = 2^4 - 2 = 14 host."
    },
    {
      stimulus: "Pada standar RFC 3021, diperkenalkan penggunaan subnet mask /31 (255.255.255.254) khusus untuk tautan Point-to-Point antar-router.",
      question: "Keuntungan teknis utama dari implementasi prefix /31 pada link Point-to-Point router adalah...",
      correctText: "Menghemat 50% alamat IP dibanding /30 karena meniadakan kebutuhan Network ID dan Broadcast ID terpisah",
      distractors: [
        "Menaikkan kecepatan transfer kabel menjadi 10 kali lipat",
        "Menghilangkan kebutuhan kabel fiber optik",
        "Memungkinkan router bekerja tanpa listrik",
        "Dapat menghubungkan hingga 100 router sekaligus"
      ],
      explanation: "RFC 3021 memungkinkan link point-to-point hanya menggunakan tepat 2 alamat IP (misal .0 dan .1) tanpa membuang IP untuk network dan broadcast.",
      quickTip: "RFC 3021 (/31) menghemat IP pada link Point-to-Point (hanya butuh 2 IP)."
    },
    {
      stimulus: "Sebuah host komputer memiliki konfigurasi IP: 10.10.10.10/32.",
      question: "Arti dari konfigurasi prefix /32 (subnet mask 255.255.255.255) adalah...",
      correctText: "Alamat IP host tunggal (Single Host Route), umum digunakan pada interface Loopback router",
      distractors: [
        "Subnet yang dapat menampung 32 unit komputer",
        "Alamat jaringan internet dunia internasional",
        "Subnet yang rusak dan tidak dapat membaca data",
        "Alamat gateway darurat modem"
      ],
      explanation: "Prefix /32 memiliki seluruh bit bernilai 1 (255.255.255.255), mewakili tepat satu alamat host tunggal (host route / loopback IP router).",
      quickTip: "Prefix /32 = Host tunggal (Single Host Route / Loopback IP)."
    }
  ],
  mcma: [
    {
      stimulus: "Perhitungan subnetting berbasis Classless Inter-Domain Routing (CIDR).",
      question: "Manakah pasangan antara notasi prefix CIDR dan nilai desimal subnet mask yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "/25 setara dengan subnet mask 255.255.255.128", isCorrect: true },
        { text: "/26 setara dengan subnet mask 255.255.255.192", isCorrect: true },
        { text: "/30 setara dengan subnet mask 255.255.255.252", isCorrect: true },
        { text: "/27 setara dengan subnet mask 255.255.255.254", isCorrect: false },
        { text: "/29 setara dengan subnet mask 255.255.255.240", isCorrect: false }
      ],
      explanation: "/25 = .128, /26 = .192, /27 = .224 (bukan .254), /29 = .248 (bukan .240), /30 = .252.",
      quickTip: "/25=.128, /26=.192, /27=.224, /28=.240, /29=.248, /30=.252."
    },
    {
      stimulus: "Karakteristik subnetting menggunakan Variable Length Subnet Masking (VLSM).",
      question: "Manakah pernyataan yang BENAR mengenai keunggulan dan metode VLSM? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "VLSM mengurangi pemborosan alamat IP dengan menyesuaikan ukuran subnet sesuai kebutuhan nyata", isCorrect: true },
        { text: "Perancangan VLSM sebaiknya dimulai dari alokasi subnet dengan kebutuhan host terbanyak terlebih dahulu", isCorrect: true },
        { text: "VLSM mewajibkan seluruh ruangan kantor menggunakan subnet mask /24 yang seragam", isCorrect: false },
        { text: "VLSM hanya bisa diterapkan jika semua komputer menggunakan sistem operasi Mac OS", isCorrect: false },
        { text: "VLSM tidak mendukung penggunaan router Cisco", isCorrect: false }
      ],
      explanation: "VLSM sangat fleksibel, menghemat IP dengan menyesuaikan prefix tiap subnet, dan harus dirancang mulai dari kebutuhan host terbesar.",
      quickTip: "VLSM menghemat IP dengan prefix fleksibel; alokasikan dari kebutuhan terbesar."
    },
    {
      stimulus: "Diberikan blok subnet: 192.168.1.128/26.",
      question: "Manakah parameter jaringan yang BENAR mengenai blok subnet 192.168.1.128/26? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Alamat Network ID adalah 192.168.1.128", isCorrect: true },
        { text: "Alamat Broadcast ID adalah 192.168.1.191", isCorrect: true },
        { text: "Rentang host usable adalah dari 192.168.1.129 hingga 192.168.1.190", isCorrect: true },
        { text: "Alamat 192.168.1.191 boleh dipasang pada kartu jaringan PC siswa", isCorrect: false },
        { text: "Kapasitas host usable pada subnet ini adalah tepat 128 komputer", isCorrect: false }
      ],
      explanation: "/26 memiliki magic number 64. Blok .128 s.d. .191: Network .128, Broadcast .191, Usable .129 s.d. .190 (62 host). .191 adalah Broadcast sehingga tidak boleh dipasang ke PC.",
      quickTip: "192.168.1.128/26: Network=.128, Broadcast=.191, Usable=.129-.190 (62 host)."
    },
    {
      stimulus: "Kebutuhan perancangan subnetting untuk kantor cabang dengan berbagai tipe tautan.",
      question: "Manakah pemilihan prefix CIDR yang TEPAT dan efisien untuk skenario berikut? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Link Point-to-Point antar-dua router menggunakan prefix /30 (2 usable host)", isCorrect: true },
        { text: "Ruang server berisi 10 unit server menggunakan prefix /28 (14 usable host)", isCorrect: true },
        { text: "Ruang meeting berisi 50 laptop menggunakan prefix /29 (6 usable host)", isCorrect: false },
        { text: "Jaringan 2 unit printer menggunakan prefix /24 (254 usable host, sangat boros)", isCorrect: false },
        { text: "Gedung dengan 100 PC menggunakan prefix /27 (hanya 30 host, tidak cukup)", isCorrect: false }
      ],
      explanation: "2 router pas pakai /30 (2 host); 10 server pas pakai /28 (14 host). 50 laptop tidak muat di /29 (cuma 6 host). 100 PC tidak muat di /27 (cuma 30 host).",
      quickTip: "Link 2 router = /30; 10 host = /28."
    },
    {
      stimulus: "Rumus matematis dasar dalam kalkulasi subnetting IPv4.",
      question: "Manakah formula matematis yang BENAR dalam konsep subnetting? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Jumlah total IP dalam subnet = 2^y (di mana y adalah jumlah bit host yang tersisa)", isCorrect: true },
        { text: "Jumlah host usable = 2^y - 2 (dikurangi 2 untuk Network ID dan Broadcast ID)", isCorrect: true },
        { text: "Jumlah subnet yang terbentuk = 2 * x", isCorrect: false },
        { text: "Subnet mask /24 selalu memiliki 1000 host usable", isCorrect: false },
        { text: "Jumlah host usable selalu ganjil pada setiap subnet", isCorrect: false }
      ],
      explanation: "Total IP = 2^y, Usable host = 2^y - 2. Jumlah subnet adalah 2^x (bukan 2*x). Usable host selalu bernilai genap.",
      quickTip: "Rumus dasar: Total IP = 2^y; Usable host = 2^y - 2."
    }
  ],
  tf: [
    {
      stimulus: "Prinsip dasar perhitungan prefix CIDR.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai notasi CIDR!",
      statements: [
        { text: "Semakin besar angka prefix CIDR (misal /24 ke /30), maka jumlah host yang dapat ditampung semakin sedikit.", correct: "B" },
        { text: "Subnet mask /24 menyediakan 254 alamat host yang dapat dikonfigurasikan ke komputer.", correct: "B" },
        { text: "Subnet mask /30 dapat menampung hingga 30 komputer pengguna sekaligus.", correct: "S" }
      ],
      explanation: "Prefix /30 hanya menyediakan 2 usable host (2^2 - 2 = 2), bukan 30 host.",
      quickTip: "Prefix /30 hanya untuk 2 host (link point-to-point)."
    },
    {
      stimulus: "Penentuan Network ID dan Broadcast ID.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang identitas subnet!",
      statements: [
        { text: "Alamat IP 192.168.1.0/24 adalah Network ID dan tidak boleh dipasang pada kartu jaringan PC.", correct: "B" },
        { text: "Alamat IP 192.168.1.255/24 adalah Broadcast ID untuk seluruh host di subnet tersebut.", correct: "B" },
        { text: "Komputer diizinkan menggunakan alamat Broadcast ID sebagai alamat IP asalkan koneksinya cepat.", correct: "S" }
      ],
      explanation: "Broadcast ID tidak pernah boleh dipasang sebagai alamat IP host pada antarmuka komputer manapun.",
      quickTip: "Network ID dan Broadcast ID mutlak dilarang dipasang pada komputer."
    },
    {
      stimulus: "Metode Variable Length Subnet Masking (VLSM).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang VLSM!",
      statements: [
        { text: "VLSM memungkinkan penggunaan panjang prefix yang berbeda dalam satu sistem jaringan yang sama.", correct: "B" },
        { text: "Dalam perancangan VLSM, alokasi blok harus dimulai dari kebutuhan host terbesar menuju yang terkecil.", correct: "B" },
        { text: "VLSM hanya bisa digunakan pada jaringan yang tidak memiliki router.", correct: "S" }
      ],
      explanation: "VLSM mutlak membutuhkan router dan protokol routing classless (seperti OSPF atau EIGRP) untuk merutekan subnet ber-mask beda.",
      quickTip: "VLSM butuh router dengan protokol routing classless."
    },
    {
      stimulus: "Konsep Magic Number dalam subnetting cepat.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai Magic Number!",
      statements: [
        { text: "Magic Number dihitung dengan rumus: 256 dikurangi nilai oktet subnet mask aktif.", correct: "B" },
        { text: "Nilai Magic Number menentukan interval lompatan alamat Network ID antar-subnet.", correct: "B" },
        { text: "Magic Number untuk subnet mask 255.255.255.192 (/26) adalah 128.", correct: "S" }
      ],
      explanation: "Untuk mask 255.255.255.192, Magic Number = 256 - 192 = 64 (bukan 128).",
      quickTip: "Magic number /26 = 256 - 192 = 64."
    },
    {
      stimulus: "Efisiensi alokasi subnet pada tautan router.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang alokasi subnet link router!",
      statements: [
        { text: "Menggunakan subnet mask /24 untuk menghubungkan 2 router Point-to-Point sangat memboroskan alokasi IP (menyia-nyiakan 252 IP).", correct: "B" },
        { text: "Penggunaan subnet mask /30 adalah praktik standar yang efisien untuk link antar-router.", correct: "B" },
        { text: "Link antar dua router wajib menggunakan subnet mask /16 agar paket data tidak hilang.", correct: "S" }
      ],
      explanation: "Menggunakan /16 (65.534 host) untuk dua router adalah pemborosan IP yang sangat parah dan melanggar prinsip desain jaringan.",
      quickTip: "Link antar 2 router cukup /30 (2 IP), jangan pakai /24 apalagi /16."
    }
  ]
};

const s17 = {
  sessionId: "s17",
  pg: [
    {
      stimulus: "Protokol IPv6 dikembangkan oleh IETF untuk mengatasi masalah habisnya persediaan alamat IPv4 di seluruh dunia.",
      question: "Panjang total format bit biner dan representasi penulisan standar pada alamat IPv6 adalah...",
      correctText: "128 bit yang ditulis dalam 8 grup heksadesimal 16-bit (hextet) dipisahkan tanda titik dua (:)",
      distractors: [
        "32 bit yang ditulis dalam 4 oktet desimal dipisahkan tanda titik",
        "64 bit yang ditulis dalam 8 grup biner dipisahkan tanda koma",
        "256 bit yang ditulis dalam 16 karakter alfabet",
        "1024 bit yang ditulis dalam satu baris teks tanpa spasi"
      ],
      explanation: "IPv6 memiliki panjang 128 bit, direpresentasikan dalam 8 hextet heksadesimal 16-bit (masing-masing 4 digit heksadesimal 0-F) dipisahkan tanda colon (:).",
      quickTip: "Format IPv6 = 128 bit, 8 grup heksadesimal dipisahkan tanda titik dua (:)."
    },
    {
      stimulus: "Standar RFC 5952 menetapkan aturan resmi untuk menyingkat penulisan alamat IPv6 agar lebih ringkas dan mudah dibaca.",
      question: "Dua aturan utama yang diperbolehkan dalam penyingkatan alamat IPv6 adalah...",
      correctText: "Menghilangkan angka nol di depan (leading zeros) dan mengganti rangkaian blok nol berurutan dengan tanda double colon (::) satu kali saja",
      distractors: [
        "Menghapus seluruh angka ganjil dan mengganti semua huruf menjadi huruf besar",
        "Mengganti tanda titik dua menjadi tanda titik seperti IPv4",
        "Menggunakan tanda double colon (::) sebanyak mungkin di setiap blok nol",
        "Menghapus 4 blok pertama dan hanya menulis 4 blok terakhir"
      ],
      explanation: "Aturan RFC 5952: 1. Hilangkan leading zeros dalam tiap hextet (misal 0042 -> 42), 2. Ganti blok nol berurutan terpanjang dengan '::' (hanya boleh digunakan tepat SATU KALI dalam satu alamat).",
      quickTip: "Singkat IPv6: Hapus leading zeros & pakai double colon (::) maksimal 1 kali."
    },
    {
      stimulus: "Diberikan sebuah alamat IPv6 lengkap: 2001:0db8:0000:0000:0000:0000:1428:57ab.",
      question: "Bentuk penyingkatan yang paling tepat dan sah menurut standar RFC 5952 adalah...",
      correctText: "2001:db8::1428:57ab",
      distractors: [
        "2001:db8:0:0:0:0:1428:57ab",
        "2001:0db8::1428:57ab",
        "2001::db8::1428:57ab",
        "2001:db8:0::1428:57ab"
      ],
      explanation: "Leading zero pada '0db8' dihilangkan menjadi 'db8'. Rangkaian 4 blok '0000:0000:0000:0000' dikompresi menjadi '::'. Hasilnya: 2001:db8::1428:57ab.",
      quickTip: "2001:0db8:0000:0000:0000:0000:1428:57ab disingkat menjadi 2001:db8::1428:57ab."
    },
    {
      stimulus: "Alamat IPv6 publik yang dapat dirutekan secara global di jaringan internet (padanan IP Publik IPv4) disebut Global Unicast Address (GUA).",
      question: "Prefix rentang alamat IPv6 Global Unicast Address (GUA) yang dialokasikan oleh IANA saat ini adalah...",
      correctText: "2000::/3 (rentang heksadesimal 2000:: hingga 3fff::)",
      distractors: [
        "fe80::/10",
        "fc00::/7",
        "ff00::/8",
        "::1/128"
      ],
      explanation: "GUA dialokasikan dari blok 2000::/3 (tiga bit pertama '001'), yang mencakup seluruh alamat publik dari 2000:: hingga 3FFF:FFFF:... di internet.",
      quickTip: "IPv6 Publik Global (GUA) = Prefix 2000::/3 (diawali angka 2 atau 3)."
    },
    {
      stimulus: "Setiap antarmuka perangkat yang mengaktifkan protokol IPv6 secara otomatis menghasilkan sebuah alamat lokal untuk komunikasi dalam satu segmen jaringan fisik.",
      question: "Nama tipe alamat IPv6 lokal otomatis tersebut beserta prefix standarnya adalah...",
      correctText: "Link-Local Address (LLA) dengan prefix fe80::/10",
      distractors: [
        "Global Unicast Address (GUA) dengan prefix 2000::/3",
        "Unique Local Address (ULA) dengan prefix fc00::/7",
        "Multicast Address dengan prefix ff00::/8",
        "Loopback Address dengan prefix ::1/128"
      ],
      explanation: "Link-Local Address (fe80::/10, rentang fe80:: hingga febf::) wajib ada di setiap antarmuka IPv6 untuk pertukaran paket router discovery dan tetangga lokal (NDP).",
      quickTip: "IPv6 Link-Local Address = diawali fe80:: (prefix fe80::/10)."
    },
    {
      stimulus: "Alamat IPv6 yang setara dengan alamat IP Privat RFC 1918 pada IPv4 (digunakan di jaringan lokal perusahaan tanpa rute internet publik) adalah...",
      question: "Nama tipe alamat IPv6 privat lokal tersebut adalah...",
      correctText: "Unique Local Address (ULA) dengan prefix fc00::/7 (umumnya fd00::/8)",
      distractors: [
        "Global Unicast Address (GUA)",
        "Link-Local Address (LLA)",
        "Anycast Address",
        "Broadcast Address"
      ],
      explanation: "Unique Local Address (ULA) memiliki prefix fc00::/7 (kebanyakan implementasi menggunakan fd00::/8), bertindak sebagai alamat privat internal perusahaan.",
      quickTip: "Padanan IP Privat di IPv6 = Unique Local Address (ULA / fd00::/8)."
    },
    {
      stimulus: "Pengujian internal terhadap software stack IPv6 pada komputer lokal menggunakan alamat loopback khusus.",
      question: "Penulisan alamat Loopback standar pada protokol IPv6 adalah...",
      correctText: "::1 (atau ::1/128)",
      distractors: [
        "127.0.0.1",
        "::0/128",
        "fe80::1",
        "2001::1"
      ],
      explanation: "Di IPv6, alamat loopback ditulis sebagai 0000:0000:0000:0000:0000:0000:0000:0001, disingkat menjadi ::1 (padanan 127.0.0.1 pada IPv4).",
      quickTip: "Loopback IPv6 = ::1 (atau ::1/128)."
    },
    {
      stimulus: "Alamat default route atau rute penampung yang mewakili seluruh alamat internet (padanan 0.0.0.0/0 pada IPv4) dalam format IPv6 adalah...",
      question: "Penulisan Default Route pada tabel routing IPv6 adalah...",
      correctText: "::/0",
      distractors: [
        "::1/128",
        "fe80::/0",
        "2000::/0",
        "ffff::/0"
      ],
      explanation: "::/0 (unspecified address dengan prefix 0 bit) merepresentasikan seluruh jaringan di tabel routing IPv6 (Gateway of Last Resort).",
      quickTip: "Default Route IPv6 = ::/0."
    },
    {
      stimulus: "Pada arsitektur IPv6, salah satu jenis komunikasi transmisi paket tradisional telah dihapuskan secara permanen.",
      question: "Tipe transmisi paket pada IPv4 yang TIDAK LAGI ADA di dalam protokol IPv6 adalah...",
      correctText: "Broadcast",
      distractors: [
        "Unicast",
        "Multicast",
        "Anycast",
        "Point-to-Point"
      ],
      explanation: "IPv6 meniadakan Broadcast untuk menghindari pemborosan bandwidth dan gangguan interupsi pada host. Fungsi broadcast digantikan sepenuhnya oleh Multicast dan Anycast.",
      quickTip: "IPv6 TIDAK MEMILIKI Broadcast; digantikan oleh Multicast dan Anycast."
    },
    {
      stimulus: "Paket IPv6 yang dikirimkan ke satu alamat namun diteruskan oleh jaringan menuju ke antarmuka perangkat terdekat (nearest) yang memiliki alamat tersebut dinamakan...",
      question: "Nama tipe alamat IPv6 tersebut adalah...",
      correctText: "Anycast Address",
      distractors: [
        "Broadcast Address",
        "Loopback Address",
        "Link-Local Address",
        "APIPA Address"
      ],
      explanation: "Anycast menetapkan satu alamat IP yang sama ke beberapa server/router berbeda di berbagai lokasi geografis; paket akan dirutekan ke lokasi terdekat menurut metrik routing.",
      quickTip: "Kirim paket ke server terdekat dengan alamat sama = Anycast Address."
    },
    {
      stimulus: "Seluruh alamat Multicast pada IPv6 memiliki tanda pengenal blok prefix khusus.",
      question: "Prefix standar untuk seluruh alamat Multicast pada protokol IPv6 adalah...",
      correctText: "ff00::/8",
      distractors: [
        "fe80::/10",
        "2000::/3",
        "fc00::/7",
        "::1/128"
      ],
      explanation: "Alamat IPv6 yang diawali dengan 'ff' (prefix ff00::/8) adalah alamat Multicast (contoh: ff02::1 untuk all-nodes, ff02::2 untuk all-routers).",
      quickTip: "IPv6 Multicast selalu diawali 'ff' (prefix ff00::/8)."
    },
    {
      stimulus: "Alamat Multicast IPv6 khusus yang dikirimkan untuk mencapai seluruh perangkat (all nodes) dalam satu link lokal adalah...",
      question: "Alamat IPv6 all-nodes multicast tersebut adalah...",
      correctText: "ff02::1",
      distractors: [
        "ff02::2 (All Routers)",
        "ff02::5 (OSPF Routers)",
        "::1",
        "fe80::1"
      ],
      explanation: "ff02::1 adalah alamat multicast untuk seluruh node/host di link lokal (padanan lokal dari 255.255.255.255).",
      quickTip: "Multicast ke seluruh perangkat lokal (all-nodes) = ff02::1."
    },
    {
      stimulus: "Metode otomatis di mana antarmuka membuat alamat IPv6 Link-Local 64-bit Interface ID dari 48-bit MAC Address fisik perangkat dinamakan...",
      question: "Nama metode standar IEEE pembuatan Interface ID tersebut adalah...",
      correctText: "Metode EUI-64 (Extended Unique Identifier 64-bit)",
      distractors: [
        "Metode DHCPv4 Relay",
        "Metode NAT Masquerade",
        "Metode CSMA/CD",
        "Metode OSPF Neighbor"
      ],
      explanation: "EUI-64 menyisipkan 16-bit nilai heksadesimal 'FFFE' di tengah 48-bit MAC Address (antara byte ke-3 dan ke-4) dan membalik bit Universal/Local ke-7.",
      quickTip: "Membuat Interface ID dari MAC address dengan menyisipkan FFFE = Metode EUI-64."
    },
    {
      stimulus: "Pada proses pembentukan Interface ID menggunakan metode EUI-64, nilai heksadesimal 16-bit yang disisipkan di tengah-tengah alamat MAC adalah...",
      question: "Nilai heksadesimal sisipan standar EUI-64 tersebut adalah...",
      correctText: "FFFE (atau FF:FE)",
      distractors: [
        "AAAA",
        "0000",
        "FFFF",
        "1234"
      ],
      explanation: "EUI-64 menyisipkan FFFE di tengah 48-bit MAC address (misal MAC 00:11:22:33:44:55 menjadi 00:11:22:FF:FE:33:44:55).",
      quickTip: "Nilai yang disisipkan pada EUI-64 selalu FFFE."
    },
    {
      stimulus: "Pada masa transisi dari IPv4 ke IPv6, terdapat metode di mana perangkat router dan server menjalankan tumpukan protokol IPv4 dan IPv6 secara bersamaan di antarmuka yang sama.",
      question: "Nama strategi transisi berdampingan tersebut adalah...",
      correctText: "Dual Stack",
      distractors: [
        "Tunneling 6to4",
        "NAT64 / DNS64",
        "Header Stripping",
        "Classful Proxy"
      ],
      explanation: "Dual Stack mengaktifkan stack IPv4 dan IPv6 secara independen dan simultan pada satu perangkat antarmuka, memungkinkan komunikasi lancar ke kedua jenis jaringan.",
      quickTip: "Menjalankan IPv4 dan IPv6 bersamaan di satu perangkat = Dual Stack."
    },
    {
      stimulus: "Metode transisi di mana paket data IPv6 dibungkus (dienkapsulasi) di dalam paket IPv4 agar dapat melewati jaringan infrastruktur internet lama yang masih berbasis IPv4 disebut...",
      question: "Nama metode pembungkusan paket lintas generasi tersebut adalah...",
      correctText: "Tunneling (seperti 6in4, 6to4, atau Teredo)",
      distractors: [
        "Dual Stack",
        "NAT64",
        "Subnetting VLSM",
        "MAC Learning"
      ],
      explanation: "Tunneling membungkus payload paket IPv6 ke dalam header paket IPv4 sehingga router perantara IPv4 dapat meneruskannya sebagai paket IPv4 biasa.",
      quickTip: "Paket IPv6 dibungkus di dalam IPv4 melewati jaringan lama = Tunneling."
    },
    {
      stimulus: "Metode transisi yang memungkinkan klien murni IPv6 dapat berkomunikasi langsung dengan server yang hanya mendukung IPv4 adalah...",
      question: "Nama teknologi translasi protokol antargenerasi tersebut adalah...",
      correctText: "NAT64 dan DNS64",
      distractors: [
        "Dual Stack",
        "EUI-64",
        "Spanning Tree",
        "EtherChannel"
      ],
      explanation: "NAT64 menerjemahkan header IPv6 menjadi IPv4 (dan sebaliknya), bekerja sama dengan DNS64 yang mensintesis rekaman AAAA dari rekaman A IPv4.",
      quickTip: "Translasi klien IPv6 ke server IPv4 = NAT64 / DNS64."
    },
    {
      stimulus: "Protokol pada IPv6 yang menggantikan fungsi ARP (Address Resolution Protocol) pada IPv4 untuk menemukan MAC Address tetangga dalam satu segmen jaringan adalah...",
      question: "Nama protokol penemu tetangga pada IPv6 tersebut adalah...",
      correctText: "NDP (Neighbor Discovery Protocol) berbasis pesan ICMPv6",
      distractors: [
        "RARP (Reverse ARP)",
        "DHCPv4 Snooping",
        "RIPv2 Routing",
        "IGMP Snooping"
      ],
      explanation: "NDP memanfaatkan pesan ICMPv6 Neighbor Solicitation (NS) dan Neighbor Advertisement (NA) untuk memetakan alamat link-layer tanpa menggunakan broadcast.",
      quickTip: "Pengganti ARP di IPv6 = NDP (Neighbor Discovery Protocol berbasis ICMPv6)."
    },
    {
      stimulus: "Fitur pada IPv6 yang memungkinkan perangkat klien mendapatkan alamat IPv6 secara otomatis dari router lokal tanpa membutuhkan server DHCP disebut...",
      question: "Nama fitur konfigurasi mandiri tanpa server tersebut adalah...",
      correctText: "SLAAC (Stateless Address Autoconfiguration)",
      distractors: [
        "Stateful DHCPv6",
        "Static Manual Assignment",
        "APIPA Fallback",
        "WPS Push Button"
      ],
      explanation: "SLAAC mendengarkan pesan Router Advertisement (RA) dari router lokal untuk memperoleh prefix jaringan, lalu klien membuat Interface ID-nya sendiri secara mandiri.",
      quickTip: "Konfigurasi otomatis IPv6 tanpa server DHCP = SLAAC (Stateless Autoconfig)."
    },
    {
      stimulus: "Ukuran Minimum Transmission Unit (MTU) terkecil yang diwajibkan oleh standar spesifikasi IPv6 agar paket tidak dipecah sembarangan adalah...",
      question: "Batas ukuran MTU minimum wajib pada seluruh link jaringan IPv6 adalah...",
      correctText: "1.280 byte",
      distractors: [
        "576 byte",
        "1.500 byte",
        "9.000 byte",
        "64 byte"
      ],
      explanation: "Spesifikasi IPv6 (RFC 8200) mewajibkan setiap link mendukung MTU minimal 1.280 byte. Router di jalur perantara dilarang melakukan fragmentasi paket (fragmentasi hanya boleh di sisi pengirim).",
      quickTip: "MTU minimum wajib pada link IPv6 = 1.280 byte."
    }
  ],
  mcma: [
    {
      stimulus: "Struktur dan format pengalamatan IPv6.",
      question: "Manakah pernyataan yang BENAR mengenai karakteristik alamat IPv6? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "IPv6 memiliki panjang total 128 bit yang terbagi menjadi 8 blok heksadesimal", isCorrect: true },
        { text: "Tanda double colon (::) hanya boleh digunakan tepat satu kali dalam satu alamat IPv6", isCorrect: true },
        { text: "IPv6 tidak mengenal lagi konsep transmisi paket Broadcast", isCorrect: true },
        { text: "Setiap blok hextet pada IPv6 bernilai desimal antara 0 sampai 255", isCorrect: false },
        { text: "Alamat IPv6 harus selalu ditulis menggunakan huruf kapital saja", isCorrect: false }
      ],
      explanation: "IPv6 memiliki 128 bit, '::' maksimal 1 kali, dan tidak memiliki broadcast. Nilai per hextet adalah 16-bit heksadesimal (0000-FFFF, bukan desimal 0-255). Huruf bisa besar atau kecil (RFC 5952 menyarankan huruf kecil).",
      quickTip: "IPv6: 128 bit, 8 hextet, '::' hanya 1 kali, tanpa broadcast."
    },
    {
      stimulus: "Klasifikasi tipe alamat IPv6 berdasarkan fungsinya.",
      question: "Manakah pasangan antara prefix IPv6 dan fungsinya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "2000::/3 adalah Global Unicast Address (GUA untuk internet publik)", isCorrect: true },
        { text: "fe80::/10 adalah Link-Local Address (LLA untuk komunikasi satu segmen)", isCorrect: true },
        { text: "ff00::/8 adalah Multicast Address", isCorrect: true },
        { text: "fc00::/7 adalah Global Broadcast Internet", isCorrect: false },
        { text: "::1/128 adalah alamat gateway default internet", isCorrect: false }
      ],
      explanation: "2000::/3 = GUA (publik); fe80::/10 = LLA (lokal); ff00::/8 = Multicast. fc00::/7 adalah Unique Local (privat). ::1/128 adalah Loopback.",
      quickTip: "2000::/3 (GUA), fe80::/10 (LLA), ff00::/8 (Multicast)."
    },
    {
      stimulus: "Strategi transisi dari jaringan IPv4 menuju jaringan IPv6.",
      question: "Manakah metode transisi IPv4 ke IPv6 yang diakui standar industri? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Dual Stack (menjalankan IPv4 dan IPv6 secara paralel pada perangkat)", isCorrect: true },
        { text: "Tunneling (membungkus paket IPv6 di dalam payload paket IPv4)", isCorrect: true },
        { text: "Translation / NAT64 (menerjemahkan header paket IPv6 ke IPv4)", isCorrect: true },
        { text: "Modulasi Gelombang AM / FM Radio", isCorrect: false },
        { text: "Pemotongan kabel fisik menjadi separuh panjang", isCorrect: false }
      ],
      explanation: "Tiga pilar transisi IPv6 adalah Dual Stack, Tunneling (6to4, 6in4, Teredo), dan Translation (NAT64/DNS64).",
      quickTip: "Tiga teknik transisi IPv6: Dual Stack, Tunneling, dan Translation (NAT64)."
    },
    {
      stimulus: "Penyingkatan alamat IPv6 sesuai standar resmi RFC 5952.",
      question: "Manakah contoh penyingkatan alamat IPv6 yang SAH dan benar? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "fe80:0000:0000:0000:0000:0000:0000:0001 disingkat menjadi fe80::1", isCorrect: true },
        { text: "2001:0db8:0000:0000:0001:0000:0000:0001 disingkat menjadi 2001:db8::1:0:0:1", isCorrect: true },
        { text: "2001:0db8:0000:0000:0001:0000:0000:0001 disingkat menjadi 2001:db8::1::1 (menggunakan dua kali ::)", isCorrect: false },
        { text: "fe80:0000:0000:0001 disingkat menjadi fe80:1", isCorrect: false },
        { text: "0000:0000:0000:0000:0000:0000:0000:0000 disingkat menjadi 0", isCorrect: false }
      ],
      explanation: "Tanda '::' hanya boleh dipakai satu kali. Penggunaan '::' dua kali dalam satu alamat adalah kesalahan fatal karena ambigu.",
      quickTip: "Dilarang memakai tanda '::' lebih dari satu kali dalam satu alamat IPv6."
    },
    {
      stimulus: "Protokol Neighbor Discovery Protocol (NDP) pada IPv6.",
      question: "Manakah fungsi yang dijalankan oleh protokol NDP pada IPv6? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Menemukan MAC Address tetangga (menggantikan fungsi ARP IPv4)", isCorrect: true },
        { text: "Menemukan router lokal dan memperoleh parameter jaringan (Router Discovery / SLAAC)", isCorrect: true },
        { text: "Membeli paket kuota internet provider secara otomatis", isCorrect: false },
        { text: "Menghapus virus di sistem operasi komputer", isCorrect: false },
        { text: "Menghitung kecepatan putaran hard disk", isCorrect: false }
      ],
      explanation: "NDP bertugas melakukan resolusi alamat MAC tetangga (menggantikan ARP) dan menemukan router default lokal (Router Solicitation / Advertisement).",
      quickTip: "NDP menggantikan fungsi ARP dan menangani Router Discovery / SLAAC."
    }
  ],
  tf: [
    {
      stimulus: "Format dan panjang alamat IPv6.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang IPv6!",
      statements: [
        { text: "IPv6 memiliki ruang alamat sebesar 128 bit, jauh melampaui kapasitas 32 bit IPv4.", correct: "B" },
        { text: "Tanda double colon (::) hanya boleh ditulis maksimal satu kali dalam sebuah alamat IPv6.", correct: "B" },
        { text: "Alamat IPv6 ditulis menggunakan angka desimal dari 0 sampai 999.", correct: "S" }
      ],
      explanation: "IPv6 ditulis dalam format heksadesimal (0 sampai F), bukan desimal.",
      quickTip: "IPv6 memakai heksadesimal (0-F) sepanjang 128 bit."
    },
    {
      stimulus: "Ketiadaan pesan Broadcast di IPv6.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai tipe transmisi IPv6!",
      statements: [
        { text: "Protokol IPv6 tidak memiliki konsep pengiriman pesan Broadcast.", correct: "B" },
        { text: "Fungsi pemanggilan ke seluruh perangkat di IPv6 digantikan oleh mekanisme Multicast all-nodes (ff02::1).", correct: "B" },
        { text: "Alamat broadcast pada IPv6 ditulis dengan notasi ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff.", correct: "S" }
      ],
      explanation: "Tidak ada alamat broadcast di IPv6 sama sekali; ffff:... bukan alamat broadcast.",
      quickTip: "IPv6 bebas broadcast; digantikan oleh Multicast."
    },
    {
      stimulus: "Penggunaan alamat Link-Local (fe80::/10).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Link-Local Address!",
      statements: [
        { text: "Alamat Link-Local selalu diawali dengan prefix fe80::/10.", correct: "B" },
        { text: "Alamat Link-Local hanya berlaku dalam satu segmen jaringan lokal dan tidak diteruskan oleh router.", correct: "B" },
        { text: "Alamat Link-Local fe80:: dapat digunakan untuk mengakses server Google langsung di internet.", correct: "S" }
      ],
      explanation: "Link-Local tidak dapat dirutekan melintasi router dan tidak bisa digunakan untuk internet publik.",
      quickTip: "Link-Local (fe80::) hanya untuk komunikasi lokal satu segmen link."
    },
    {
      stimulus: "Metode pembentukan Interface ID menggunakan EUI-64.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang EUI-64!",
      statements: [
        { text: "Metode EUI-64 menyisipkan nilai FFFE di tengah-tengah alamat MAC fisik 48-bit.", correct: "B" },
        { text: "Bit ke-7 (Universal/Local bit) dibalik statusnya pada pembentukan EUI-64.", correct: "B" },
        { text: "Metode EUI-64 mewajibkan teknisi mengetik password Wi-Fi secara manual.", correct: "S" }
      ],
      explanation: "EUI-64 adalah algoritma matematis otomatis pembentukan Interface ID dari MAC address hardware.",
      quickTip: "EUI-64 otomatis menyisipkan FFFE dan membalik bit ke-7 MAC address."
    },
    {
      stimulus: "Strategi transisi Dual Stack IPv4 dan IPv6.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang Dual Stack!",
      statements: [
        { text: "Pada mode Dual Stack, kartu jaringan komputer memiliki konfigurasi alamat IPv4 dan alamat IPv6 sekaligus.", correct: "B" },
        { text: "Perangkat Dual Stack dapat berkomunikasi dengan host IPv4 murni maupun host IPv6 murni tanpa konversi header.", correct: "B" },
        { text: "Mengaktifkan Dual Stack akan menyebabkan komputer meledak karena korsleting protokol.", correct: "S" }
      ],
      explanation: "Dual Stack adalah metode transisi resmi yang aman dan paling umum diterapkan oleh ISP dan korporasi modern.",
      quickTip: "Dual Stack mengoperasikan IPv4 dan IPv6 secara berdampingan tanpa masalah."
    }
  ]
};

const s18 = {
  sessionId: "s18",
  pg: [
    {
      stimulus: "Model referensi Open Systems Interconnection (OSI) yang dirumuskan oleh ISO membagi komunikasi jaringan menjadi 7 lapisan terstruktur.",
      question: "Urutan 7 lapisan OSI Model dari lapisan paling bawah (Layer 1) hingga lapisan paling atas (Layer 7) adalah...",
      correctText: "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      distractors: [
        "Application, Presentation, Session, Transport, Network, Data Link, Physical",
        "Physical, Network, Data Link, Transport, Session, Presentation, Application",
        "Data Link, Physical, Network, Transport, Application, Presentation, Session",
        "Physical, Data Link, Transport, Network, Session, Presentation, Application"
      ],
      explanation: "Urutan dari Layer 1 ke 7: Physical (1), Data Link (2), Network (3), Transport (4), Session (5), Presentation (6), Application (7). Jembatan keledai: Please Do Not Throw Sausage Pizza Away.",
      quickTip: "OSI Layer 1-7: Physical, Data Link, Network, Transport, Session, Presentation, Application."
    },
    {
      stimulus: "Model arsitektur protokol internet TCP/IP (sering disebut DoD Model) memiliki jumlah lapisan yang lebih ringkas dibanding model OSI.",
      question: "Empat lapisan pada model TCP/IP dari lapisan bawah ke atas adalah...",
      correctText: "Network Access, Internet, Transport, Application",
      distractors: [
        "Physical, Data Link, Network, Application",
        "Hardware, Software, Interface, User",
        "Link, IP, TCP, Web",
        "Media, Routing, Protocol, Service"
      ],
      explanation: "Model 4-Layer TCP/IP memadatkan Physical dan Data Link menjadi Network Access Layer, Network menjadi Internet Layer, Transport tetap Transport, serta Session-Presentation-Application dipadatkan menjadi Application Layer.",
      quickTip: "4 Layer TCP/IP: Network Access, Internet, Transport, Application."
    },
    {
      stimulus: "Proses penambahan informasi header pada tiap lapisan saat data menuruni tumpukan protokol dari aplikasi ke media kabel disebut...",
      question: "Istilah untuk pembungkusan data bertingkat tersebut adalah...",
      correctText: "Enkapsulasi (Encapsulation)",
      distractors: [
        "Dekapsulasi (Decapsulation)",
        "Modulasi (Modulation)",
        "Kompresi (Compression)",
        "Fragmentasi (Fragmentation)"
      ],
      explanation: "Enkapsulasi membungkus data dengan header di setiap layer: Data -> Segment (Transport) -> Packet (Network) -> Frame (Data Link) -> Bits (Physical).",
      quickTip: "Pembungkusan data saat dikirim = Enkapsulasi; Pembongkaran saat diterima = Dekapsulasi."
    },
    {
      stimulus: "Setiap lapisan dalam model jaringan memiliki sebutan unit data protokol (Protocol Data Unit / PDU) masing-masing.",
      question: "Nama unit PDU yang digunakan pada Transport Layer (Layer 4) adalah...",
      correctText: "Segment (atau Datagram pada UDP)",
      distractors: [
        "Packet (Network Layer)",
        "Frame (Data Link Layer)",
        "Bits (Physical Layer)",
        "Raw Data (Application Layer)"
      ],
      explanation: "PDU per layer: Layer 4 = Segment, Layer 3 = Packet, Layer 2 = Frame, Layer 1 = Bits.",
      quickTip: "PDU Layer 4 = Segment; Layer 3 = Packet; Layer 2 = Frame; Layer 1 = Bits."
    },
    {
      stimulus: "Lapisan yang bertanggung jawab mengatur transmisi bit biner mentah melalui media fisik kabel tembaga, fiber optik, atau gelombang radio adalah...",
      question: "Nama lapisan terendah (Layer 1) pada model OSI tersebut adalah...",
      correctText: "Physical Layer",
      distractors: [
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Application Layer"
      ],
      explanation: "Physical Layer (Layer 1) menangani tegangan listrik, sinyal optik, pulsa radio, konektor (RJ-45), jenis kabel, dan laju bit transmisi data.",
      quickTip: "Kabel, tegangan listrik, dan bit biner mentah = Physical Layer (Layer 1)."
    },
    {
      stimulus: "Perangkat switch jaringan standar beroperasi pada lapisan yang memanfaatkan alamat fisik MAC Address 48-bit dan pengecekan kesalahan CRC.",
      question: "Lapisan model OSI tempat switch beroperasi mengelola frame data tersebut adalah...",
      correctText: "Data Link Layer (Layer 2)",
      distractors: [
        "Physical Layer (Layer 1)",
        "Network Layer (Layer 3)",
        "Transport Layer (Layer 4)",
        "Session Layer (Layer 5)"
      ],
      explanation: "Data Link Layer (Layer 2) bertanggung jawab atas pengalamatan fisik (MAC Address), pembentukan Frame, kendali akses media (MAC), dan deteksi error (FCS/CRC).",
      quickTip: "MAC Address, Frame, dan Switch = Data Link Layer (Layer 2)."
    },
    {
      stimulus: "Alamat fisik kartu jaringan (MAC Address) terdiri dari format bilangan heksadesimal dengan panjang bit tertentu.",
      question: "Panjang bit dan struktur penulisan dari MAC Address (Media Access Control) adalah...",
      correctText: "48 bit (6 byte heksadesimal, misal 00:1A:2B:3C:4D:5E)",
      distractors: [
        "32 bit (4 byte)",
        "64 bit (8 byte)",
        "128 bit (16 byte)",
        "16 bit (2 byte)"
      ],
      explanation: "MAC Address memiliki panjang 48 bit: 24 bit pertama adalah kode pabrikan (OUI - Organizationally Unique Identifier), dan 24 bit terakhir adalah nomor seri kartu antarmuka jaringan.",
      quickTip: "MAC Address = 48 bit (6 pasang heksadesimal)."
    },
    {
      stimulus: "Pada Data Link Layer, di akhir setiap frame Ethernet disematkan kode Frame Check Sequence (FCS) untuk memeriksa apakah data rusak selama transmisi.",
      question: "Algoritma matematis yang digunakan untuk menghitung nilai pemeriksaan integritas frame tersebut adalah...",
      correctText: "CRC (Cyclic Redundancy Check)",
      distractors: [
        "MD5 Hashing",
        "RSA 2048-bit",
        "AES 256-bit",
        "SHA-1 Checksum"
      ],
      explanation: "Pengirim menghitung nilai CRC dari bit frame dan menaruhnya di FCS. Penerima menghitung ulang CRC; jika tidak cocok, frame dibuang karena korup.",
      quickTip: "Deteksi kerusakan frame pada Data Link Layer = CRC (Cyclic Redundancy Check)."
    },
    {
      stimulus: "Lapisan pada model OSI yang bertanggung jawab atas pengalamatan logis (IP Address) dan penentuan rute terbaik (Path Determination / Routing) adalah...",
      question: "Nama lapisan tempat router bekerja tersebut adalah...",
      correctText: "Network Layer (Layer 3)",
      distractors: [
        "Data Link Layer",
        "Transport Layer",
        "Session Layer",
        "Presentation Layer"
      ],
      explanation: "Network Layer (Layer 3) menangani pengalamatan logis (IPv4/IPv6), perutean paket melintasi multi-jaringan (Router), dan protokol kendali ICMP/ARP.",
      quickTip: "IP Address, Paket, dan Router = Network Layer (Layer 3)."
    },
    {
      stimulus: "Pada Transport Layer (Layer 4), terdapat dua protokol utama yang memiliki karakteristik keandalan yang sangat bertolak belakang.",
      question: "Dua protokol utama pada Transport Layer tersebut adalah...",
      correctText: "TCP (Transmission Control Protocol) dan UDP (User Datagram Protocol)",
      distractors: [
        "IP dan ICMP",
        "HTTP dan HTTPS",
        "Ethernet dan Wi-Fi",
        "ARP dan RARP"
      ],
      explanation: "TCP (connection-oriented, andal, berurutan) dan UDP (connectionless, cepat, tanpa jaminan) adalah dua protokol dominan di Transport Layer.",
      quickTip: "Dua protokol utama Layer 4 = TCP dan UDP."
    },
    {
      stimulus: "Protokol TCP memastikan keandalan transmisi dengan melakukan negosiasi tiga langkah sebelum data mulai dikirimkan.",
      question: "Nama proses negosiasi pembukaan koneksi tiga langkah pada TCP tersebut adalah...",
      correctText: "Three-Way Handshake (SYN -> SYN-ACK -> ACK)",
      distractors: [
        "Four-Way Termination (FIN-ACK)",
        "CSMA/CA RTS-CTS",
        "DORA DHCP Negotiation",
        "ICMP Echo Request-Reply"
      ],
      explanation: "TCP Three-Way Handshake: Klien mengirim SYN (Synchronize), Server membalas SYN-ACK, Klien mengonfirmasi dengan ACK (Acknowledge) sebelum data dialirkan.",
      quickTip: "Pembukaan koneksi andal TCP = Three-Way Handshake (SYN, SYN-ACK, ACK)."
    },
    {
      stimulus: "Aplikasi percakapan suara (VoIP), siaran langsung video (live streaming), dan game online memilih menggunakan protokol UDP dibanding TCP.",
      question: "Alasan utama aplikasi real-time lebih menyukai UDP daripada TCP adalah...",
      correctText: "UDP memiliki overhead header sangat kecil dan tidak melakukan retransmisi paket yang hilang sehingga latensinya sangat rendah",
      distractors: [
        "UDP menjamin 100% tidak ada paket yang hilang di jalan",
        "UDP secara otomatis mengenkripsi data dengan standar militer",
        "UDP hanya bisa berjalan di kabel fiber optik",
        "UDP menghasilkan kualitas gambar video 4K secara ajaib"
      ],
      explanation: "UDP bersifat connectionless tanpa overhead acknowledgement dan tanpa retransmisi. Keterlambatan akibat retransmisi TCP justru akan merusak kelancaran streaming real-time.",
      quickTip: "UDP dipilih untuk live streaming/game karena cepat dan minim latensi (tanpa retransmisi)."
    },
    {
      stimulus: "Transport Layer menggunakan nomor Port (Port Numbers) 16-bit untuk mengarahkan data ke aplikasi yang tepat di dalam komputer.",
      question: "Nomor port standar yang digunakan oleh protokol transfer web aman HTTPS (Hypertext Transfer Protocol Secure) adalah...",
      correctText: "Port 443",
      distractors: [
        "Port 80 (HTTP biasa)",
        "Port 21 (FTP)",
        "Port 22 (SSH)",
        "Port 53 (DNS)"
      ],
      explanation: "Port 443 adalah port standar untuk koneksi web terenkripsi SSL/TLS (HTTPS). Port 80 adalah HTTP tanpa enkripsi.",
      quickTip: "HTTPS = Port 443; HTTP = Port 80."
    },
    {
      stimulus: "Protokol komunikasi remote console aman terenkripsi yang menggantikan Telnet tanpa enkripsi beroperasi pada port standar...",
      question: "Nomor port default untuk layanan SSH (Secure Shell) adalah...",
      correctText: "Port 22",
      distractors: [
        "Port 23 (Telnet)",
        "Port 25 (SMTP)",
        "Port 110 (POP3)",
        "Port 3389 (RDP)"
      ],
      explanation: "SSH berjalan pada port 22 secara terenkripsi, menggantikan protokol Telnet (port 23) yang rentan penyadapan karena mengirim teks polos.",
      quickTip: "SSH = Port 22; Telnet = Port 23."
    },
    {
      stimulus: "Layanan sistem penamaan domain (Domain Name System / DNS) bertugas menerjemahkan nama domain (seperti www.smk.sch.id) menjadi alamat IP.",
      question: "Nomor port standar yang digunakan oleh protokol DNS adalah...",
      correctText: "Port 53 (UDP dan TCP)",
      distractors: [
        "Port 67",
        "Port 68",
        "Port 80",
        "Port 443"
      ],
      explanation: "DNS beroperasi pada port 53 (kebanyakan query cepat menggunakan UDP 53, sedangkan transfer zona menggunakan TCP 53).",
      quickTip: "DNS = Port 53."
    },
    {
      stimulus: "Lapisan pada model OSI yang bertanggung jawab mengatur, mempertahankan, dan menyinkronkan dialog sesi komunikasi antar-aplikasi adalah...",
      question: "Nama lapisan ke-5 (Layer 5) pada model OSI tersebut adalah...",
      correctText: "Session Layer",
      distractors: [
        "Transport Layer",
        "Presentation Layer",
        "Application Layer",
        "Network Layer"
      ],
      explanation: "Session Layer (Layer 5) mengelola pendirian, penjagaan dialog, token checkpointing, dan penutupan sesi komunikasi antar-aplikasi.",
      quickTip: "Pengelola pembukaan dan penutupan dialog sesi = Session Layer (Layer 5)."
    },
    {
      stimulus: "Lapisan model OSI yang menangani pemformatan representasi data (seperti konversi ASCII, kompresi JPEG/MP3, dan enkripsi SSL/TLS) adalah...",
      question: "Nama lapisan ke-6 (Layer 6) pada model OSI tersebut adalah...",
      correctText: "Presentation Layer",
      distractors: [
        "Application Layer",
        "Session Layer",
        "Transport Layer",
        "Physical Layer"
      ],
      explanation: "Presentation Layer (Layer 6) bertindak sebagai penerjemah data jaringan, menangani sintaks, kompresi data, serta enkripsi/dekripsi keamanan (TLS/SSL).",
      quickTip: "Enkripsi, kompresi, dan format representasi data = Presentation Layer (Layer 6)."
    },
    {
      stimulus: "Lapisan tertinggi (Layer 7) pada model OSI yang menyediakan antarmuka langsung bagi program aplikasi pengguna (seperti web browser, email client) adalah...",
      question: "Nama lapisan ke-7 model OSI tersebut adalah...",
      correctText: "Application Layer",
      distractors: [
        "Presentation Layer",
        "Session Layer",
        "Transport Layer",
        "User Interface Layer"
      ],
      explanation: "Application Layer (Layer 7) berisi protokol-protokol layanan jaringan tingkat tinggi seperti HTTP, HTTPS, FTP, DNS, DHCP, dan SMTP.",
      quickTip: "Protokol layanan tingkat pengguna (HTTP, DNS, DHCP, FTP) = Application Layer (Layer 7)."
    },
    {
      stimulus: "Protokol Address Resolution Protocol (ARP) beroperasi di antara Layer 2 dan Layer 3 untuk memetakan alamat jaringan.",
      question: "Fungsi utama dari protokol ARP pada jaringan lokal adalah...",
      correctText: "Mengetahui alamat fisik MAC Address dari sebuah host yang diketahui alamat IP-nya",
      distractors: [
        "Mengetahui nama domain dari sebuah alamat IP publik",
        "Mengubah kabel tembaga menjadi kabel serat optik",
        "Mematikan daya listrik komputer yang tidak aktif",
        "Mengukur kecepatan koneksi internet provider"
      ],
      explanation: "Sebelum mengirim frame ke tujuan lokal, host mengirim ARP Request broadcast: 'Siapa pemilik IP ini? Beritahu MAC address-mu ke saya'.",
      quickTip: "ARP mencari MAC Address berdasarkan IP Address yang diketahui."
    },
    {
      stimulus: "Perintah diagnosa jaringan 'ping' dan 'traceroute' memanfaatkan pesan kendali pada Network Layer.",
      question: "Protokol pelaporan kendali dan pesan kesalahan (error reporting) tersebut adalah...",
      correctText: "ICMP (Internet Control Message Protocol)",
      distractors: [
        "IGMP (Internet Group Management Protocol)",
        "SNMP (Simple Network Management Protocol)",
        "SMTP (Simple Mail Transfer Protocol)",
        "BGP (Border Gateway Protocol)"
      ],
      explanation: "ICMP (RFC 792) bertugas melaporkan masalah rute dan mengirim pesan Echo Request / Echo Reply yang digunakan oleh utilitas ping.",
      quickTip: "Perintah ping memanfaatkan protokol ICMP (Echo Request & Reply)."
    }
  ],
  mcma: [
    {
      stimulus: "Model 7 Lapisan OSI membagi fungsi jaringan secara spesifik.",
      question: "Manakah pasangan antara nomor layer OSI, nama layer, dan fungsinya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Layer 1 = Physical Layer (transmisi bit biner mentah melalui sinyal kabel/radio)", isCorrect: true },
        { text: "Layer 2 = Data Link Layer (pengalamatan MAC Address dan pembentukan Frame)", isCorrect: true },
        { text: "Layer 3 = Network Layer (pengalamatan logis IP Address dan perutean Paket)", isCorrect: true },
        { text: "Layer 4 = Application Layer (antarmuka penampil video)", isCorrect: false },
        { text: "Layer 7 = Physical Layer (colokan konektor listrik)", isCorrect: false }
      ],
      explanation: "Layer 1 = Physical, Layer 2 = Data Link, Layer 3 = Network, Layer 4 = Transport, Layer 7 = Application.",
      quickTip: "Layer 1=Physical, Layer 2=Data Link, Layer 3=Network, Layer 4=Transport, Layer 7=Application."
    },
    {
      stimulus: "Perbandingan karakteristik protokol Transport Layer: TCP vs UDP.",
      question: "Manakah pernyataan yang BENAR mengenai perbedaan TCP dan UDP? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "TCP bersifat Connection-Oriented dan menjamin pengiriman paket secara andal (reliable)", isCorrect: true },
        { text: "UDP bersifat Connectionless, tidak melakukan retransmisi, sehingga cocok untuk video streaming dan VoIP", isCorrect: true },
        { text: "UDP selalu melakukan proses Three-Way Handshake sebelum mengirimkan paket data", isCorrect: false },
        { text: "TCP sama sekali tidak memiliki mekanisme pengecekan paket yang hilang", isCorrect: false },
        { text: "UDP hanya bisa digunakan pada koneksi internet kabel serat optik", isCorrect: false }
      ],
      explanation: "TCP connection-oriented ber-handshake dan ber-retransmisi. UDP connectionless tanpa handshake dan tanpa retransmisi sehingga berlatensi sangat rendah.",
      quickTip: "TCP: connection-oriented & andal; UDP: connectionless & cepat."
    },
    {
      stimulus: "Nomor port layanan aplikasi populer pada tumpukan protokol TCP/IP.",
      question: "Manakah pasangan nama protokol dan nomor port standarnya yang BENAR? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "HTTP = Port 80", isCorrect: true },
        { text: "HTTPS = Port 443", isCorrect: true },
        { text: "SSH = Port 22", isCorrect: true },
        { text: "DNS = Port 8080", isCorrect: false },
        { text: "FTP = Port 443", isCorrect: false }
      ],
      explanation: "HTTP = 80, HTTPS = 443, SSH = 22. DNS adalah port 53 (bukan 8080), FTP adalah port 20/21 (bukan 443).",
      quickTip: "HTTP=80, HTTPS=443, SSH=22, DNS=53."
    },
    {
      stimulus: "Sebutan Protocol Data Unit (PDU) pada proses enkapsulasi bertingkat.",
      question: "Manakah pasangan nama lapisan dan sebutan PDU yang BENAR? (Pilihlah DUA jawaban yang benar!)",
      options: [
        { text: "Data Link Layer = Frame", isCorrect: true },
        { text: "Network Layer = Packet", isCorrect: true },
        { text: "Physical Layer = Segment", isCorrect: false },
        { text: "Transport Layer = Bits", isCorrect: false },
        { text: "Application Layer = Frame", isCorrect: false }
      ],
      explanation: "PDU Layer 2 = Frame; Layer 3 = Packet; Layer 4 = Segment; Layer 1 = Bits.",
      quickTip: "Layer 2 = Frame; Layer 3 = Packet; Layer 4 = Segment; Layer 1 = Bits."
    },
    {
      stimulus: "Tugas dan fungsi penting yang dijalankan pada Data Link Layer (Layer 2).",
      question: "Manakah fungsi yang MERUPAKAN tanggung jawab Data Link Layer? (Pilihlah TIGA jawaban yang benar!)",
      options: [
        { text: "Penyematan alamat fisik MAC Address pengirim dan penerima", isCorrect: true },
        { text: "Pendeteksian kesalahan frame menggunakan kode CRC / Frame Check Sequence (FCS)", isCorrect: true },
        { text: "Kendali akses media transmisi bersama (Media Access Control)", isCorrect: true },
        { text: "Penentuan rute routing melintasi banyak ISP dunia", isCorrect: false },
        { text: "Penerjemahan nama domain website menjadi IP Address", isCorrect: false }
      ],
      explanation: "Layer 2 bertanggung jawab atas MAC address, framing, deteksi error (CRC), dan kendali akses media (CSMA/CD). Routing adalah tugas Layer 3, dan DNS adalah tugas Layer 7.",
      quickTip: "Fungsi Layer 2: MAC Address, deteksi error CRC, dan kendali akses media."
    }
  ],
  tf: [
    {
      stimulus: "Urutan 7 Lapisan pada Model Referensi OSI.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai lapisan OSI!",
      statements: [
        { text: "Physical Layer adalah Layer 1 (lapisan terbawah) dan Application Layer adalah Layer 7 (lapisan teratas).", correct: "B" },
        { text: "Switch Layer 2 beroperasi di Data Link Layer, sedangkan Router beroperasi di Network Layer.", correct: "B" },
        { text: "Kabel UTP dan konektor RJ-45 beroperasi pada Application Layer (Layer 7).", correct: "S" }
      ],
      explanation: "Kabel dan konektor fisik adalah komponen Physical Layer (Layer 1), bukan Application Layer.",
      quickTip: "Kabel dan konektor berada di Physical Layer (Layer 1)."
    },
    {
      stimulus: "Perbedaan protokol TCP dan UDP pada Transport Layer.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai TCP dan UDP!",
      statements: [
        { text: "TCP menjamin pengiriman paket data menggunakan nomor urut (sequence number) dan acknowledgement.", correct: "B" },
        { text: "UDP tidak melakukan retransmisi paket data yang hilang di jalan.", correct: "B" },
        { text: "Aplikasi download file penting seperti software installer sebaiknya menggunakan UDP tanpa pengecekan kesalahan.", correct: "S" }
      ],
      explanation: "Download file penting mutlak membutuhkan TCP agar file yang diunduh tidak korup jika ada paket yang hilang.",
      quickTip: "Download file butuh keandalan TCP; streaming real-time memakai UDP."
    },
    {
      stimulus: "Proses enkapsulasi dan dekapsulasi data jaringan.",
      question: "Tentukan kebenaran dari pernyataan berikut tentang perpindahan data antar-layer!",
      statements: [
        { text: "Saat data dikirim, data menuruni layer dari Application menuju Physical dengan penambahan header (Enkapsulasi).", correct: "B" },
        { text: "Saat data diterima, penerima melepas header satu per satu dari Physical naik ke Application (Dekapsulasi).", correct: "B" },
        { text: "Paket data bergerak langsung dari browser pengirim ke browser penerima secara gaib tanpa melewati kabel fisik.", correct: "S" }
      ],
      explanation: "Data wajib melalui tumpukan layer hingga menjadi sinyal fisik (bits) di Layer 1 sebelum dapat merambat ke penerima.",
      quickTip: "Pengiriman data menuruni layer (Enkapsulasi); penerimaan data menaiki layer (Dekapsulasi)."
    },
    {
      stimulus: "Fungsi protokol Address Resolution Protocol (ARP).",
      question: "Tentukan kebenaran dari pernyataan berikut tentang protokol ARP!",
      statements: [
        { text: "ARP digunakan untuk mencari MAC Address perangkat tujuan berdasarkan IP Address yang diketahui.", correct: "B" },
        { text: "Pesan ARP Request dikirimkan secara broadcast ke seluruh perangkat dalam segmen jaringan lokal.", correct: "B" },
        { text: "ARP digunakan untuk mengubah kata sandi Wi-Fi secara otomatis.", correct: "S" }
      ],
      explanation: "ARP adalah protokol resolusi alamat hardware, bukan alat pengubah sandi Wi-Fi.",
      quickTip: "ARP memetakan IP Address ke MAC Address melalui ARP Request broadcast."
    },
    {
      stimulus: "Nomor port standar protokol jaringan pada Transport Layer.",
      question: "Tentukan kebenaran dari pernyataan berikut mengenai nomor port layanan!",
      statements: [
        { text: "Layanan web tanpa enkripsi HTTP standar menggunakan port 80.", correct: "B" },
        { text: "Layanan web terenkripsi HTTPS standar menggunakan port 443.", correct: "B" },
        { text: "Layanan remote console aman SSH standar menggunakan port 80.", correct: "S" }
      ],
      explanation: "SSH menggunakan port 22. Port 80 adalah untuk HTTP web server.",
      quickTip: "HTTP = Port 80; HTTPS = Port 443; SSH = Port 22."
    }
  ]
};

module.exports = {
  s15,
  s16,
  s17,
  s18
};
