# Aplikasi Drilling CBT TKA - TJKT SMK Negeri 1 Giritontro 2026
### Dikembangkan oleh PM_Dev (prihmardoyo_developer)
> **PROGRAM TEST / DRILLING INTERNAL** • Standar Muatan SK BSKAP No 046/H/KR/2025

Aplikasi web simulasi Tes Kompetensi Akademik (TKA) kejuruan **Teknik Jaringan Komputer dan Telekomunikasi (TJKT)** berbasis web statis yang siap diunggah ke **GitHub Pages**.

---

## 🌟 Fitur Utama Sesuai Kebutuhan Drilling

1. **Tampilan Otentik Pusmendik Kemendikdasmen:**
   - Header resmi Tut Wuri Handayani, PUSMENDIK, dan tagline `#JUJUR,GEMBIRA`.
   - Timer hitung mundur dengan warna peringatan (*warning/danger*).
   - Pengatur ukuran huruf aksesibilitas (`A-`, `A`, `A+`).
   - Format 3 ragam soal resmi:
     - **Pilihan Ganda Biasa (1 pilihan)**
     - **Pilihan Ganda Kompleks (MCMA - centang > 1)**
     - **Kategori (Tabel Pernyataan Benar / Salah)**
   - Tombol navigasi bawah khas Pusmendik: `SOAL SEBELUMNYA` (navy), `RAGU-RAGU` (kuning centang), dan `SOAL BERIKUTNYA` / `SELESAI`.

2. **Tahan Reload / Refresh Halaman:**
   - Semua jawaban yang dipilih, status ragu-ragu, nomor soal aktif, dan sisa waktu tersimpan otomatis secara *real-time* di `localStorage`.
   - Jika siswa tidak sengaja me-refresh halaman atau browser HP tertutup, ujian akan langsung dipulihkan pada soal dan jawaban terakhir.

3. **Panel Soal (Lompat Soal 1 s.d. 30):**
   - Panel laci (*drawer flyout*) dengan grid 30 tombol nomor soal:
     - 🟦 **Biru Tua**: Sudah dijawab.
     - 🟨 **Kuning**: Ragu-ragu.
     - ⬜ **Putih**: Belum dijawab.
     - 🟡 **Border Emas**: Soal yang sedang aktif.

4. **15 Hari • 2 Sesi / Hari • 30 Soal / Sesi:**
   - Total **30 Sesi Terstruktur** mencakup 4 pilar BSKAP 046/2025 (Wawasan Profesi, K3LH Ketinggian & 5R, Transmisi Fiber & Tembaga, IP/Subnetting, Server/Linux VirtualBox, Alat Ukur OTDR/OPM, hingga Grand Final Boss Tryout).

5. **KKM 70% & Fitur Remedial:**
   - Nilai dihitung otomatis dalam skala 0 - 100.
   - **Jika Nilai < 70%**: Muncul tombol **"Kerjakan Ulang (Remedial Sesi Ini)"** dan sesi selanjutnya tetap terkunci.
   - **Jika Nilai >= 70%**: Sesi dinyatakan lolos (bintang 1–3) dan membuka sesi berikutnya.

6. **Sertifikat Kelulusan Digital (Bisa Dicetak / PDF):**
   - Siswa yang lulus KKM berhak membuka dan mencetak Sertifikat Kelulusan resmi lengkap dengan nama, NISN, skor, nomor registrasi unik, dan cap stempel kelulusan.

7. **Kunci Jawaban & Pembahasan Lengkap Pasca Submit:**
   - Menampilkan perbandingan jawaban siswa vs kunci resmi.
   - Pembahasan bahasa sederhana dan mudah dipahami anak SMK.
   - Dilengkapi *"Tips Cepat"* (jembatan keledai / trik mengingat materi industri).

8. **Penyimpanan Lokal (100% Mobile Friendly):**
   - Tidak memerlukan database server atau login rumit.
   - Seluruh data siswa dan riwayat kelulusan tersimpan di memori HP masing-masing.
   - Dilengkapi tombol **"Salin Rekap Nilai untuk Dikirim ke Guru via WhatsApp"**.

---

## 🚀 Cara Mengunggah ke GitHub Pages (Gratis & Cepat)

1. Buka [GitHub](https://github.com/) dan buat repository baru (misal: `tka-tjkt`).
2. Di folder komputer Anda, jalankan perintah git:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi Aplikasi Drilling TKA TJKT"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO.git
   git push -u origin main
   ```
3. Buka repository Anda di GitHub:
   - Klik tab **Settings** ➔ pilih menu **Pages** di sebelah kiri.
   - Pada bagian **Build and deployment** > **Branch**, pilih `main` dan folder `/(root)`.
   - Klik tombol **Save**.
4. Dalam 1-2 menit, website Anda sudah aktif di:
   `https://USERNAME-ANDA.github.io/NAMA-REPO/`
5. Bagikan tautan tersebut kepada seluruh siswa Anda!

---

## 💻 Cara Menjalankan di Komputer Lokal

Jika ingin mencoba secara lokal:
- Buka PowerShell di folder ini, lalu jalankan:
  ```powershell
  python -m http.server 8080
  ```
- Buka browser dan akses: `http://localhost:8080`
