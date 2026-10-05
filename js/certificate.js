/**
 * CERTIFICATE MODULE - SERTIFIKAT KELULUSAN DRILLING TKA TJKT
 * Mengelola pembuatan, penampilan, dan pencetakan Sertifikat Kelulusan Resmi
 */

class CertificateManager {
  constructor() {
    this.modalOverlay = document.getElementById("certModalOverlay");
    this.btnClose = document.getElementById("btnCloseCert");
    this.btnPrint = document.getElementById("btnPrintCert");

    // Certificate fields
    this.elRegNumber = document.getElementById("certRegNumber");
    this.elStudentName = document.getElementById("certStudentName");
    this.elStudentNisn = document.getElementById("certStudentNisn");
    this.elSessionTitle = document.getElementById("certSessionTitle");
    this.elScoreDisplay = document.getElementById("certScoreDisplay");
    this.elStarRating = document.getElementById("certStarRating");
    this.elDateDisplay = document.getElementById("certDateDisplay");

    this.bindEvents();
  }

  bindEvents() {
    this.btnClose.addEventListener("click", () => this.close());
    this.btnPrint.addEventListener("click", () => this.printCertificate());
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) {
        this.close();
      }
    });
  }

  open(certData) {
    const student = certData.student || { name: "Siswa TJKT", nisn: "-" };
    const session = certData.session || { title: "Drilling Sesi", code: "H01-S1" };
    const score = certData.score || 85.0;

    // Nomor Registrasi Unik
    const now = new Date();
    const dateFormatted = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const regNo = `PMDEV-TJKT/${now.getFullYear()}/${session.code}-${Math.floor(1000 + Math.random() * 9000)}`;

    this.elRegNumber.textContent = `No. Registrasi: ${regNo}`;
    this.elStudentName.textContent = (student.name || "SISWA TJKT").toUpperCase();
    this.elStudentNisn.textContent = `NISN: ${student.nisn || "-"} • TJKT SMK NEGERI 1 GIRITONTRO 2026`;
    this.elSessionTitle.textContent = `${session.code}: ${session.title.toUpperCase()}`;
    this.elScoreDisplay.textContent = Number(score).toFixed(1);

    // Rating Bintang
    let starText = "⭐⭐⭐ SANGAT MEMUASKAN";
    if (score < 80) starText = "⭐ MEMENUHI KKM";
    else if (score < 90) starText = "⭐⭐ MEMUASKAN";
    this.elStarRating.textContent = starText;

    this.elDateDisplay.textContent = dateFormatted;

    this.modalOverlay.style.display = "flex";
  }

  close() {
    this.modalOverlay.style.display = "none";
  }

  printCertificate() {
    window.print();
  }
}

if (typeof window !== "undefined") {
  window.CertificateManager = CertificateManager;
}
