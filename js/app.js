/**
 * MAIN APP CONTROLLER - DRILLING TKA TJKT PUSMENDIK
 * Menghubungkan Router, Data Sesi, CBT Engine, Profil Siswa, dan Sertifikat
 */

class AppController {
  constructor() {
    this.profileKey = "TKA_STUDENT_PROFILE";
    this.historyKey = "TKA_USER_HISTORY";

    this.studentProfile = this.loadStudentProfile();
    this.userHistory = this.loadUserHistory();
    this.selectedSession = null;
    this.currentToken = "";
    this.lastResultData = null;

    // Inisialisasi sub-modul
    this.cbtEngine = new window.CbtEngine();
    this.certificateManager = new window.CertificateManager();

    this.initDom();
    this.bindEvents();
    this.renderProfileUI();
    this.renderSessionsRoadmap();

    // Periksa apakah ada ujian aktif yang belum selesai (Tahan Reload)
    const hasResumed = this.cbtEngine.resumeActiveExamIfAny();
    if (hasResumed) {
      this.showView("viewCbt");
    } else {
      this.showView("viewPortal");
    }
  }

  initDom() {
    // Views
    this.views = {
      portal: document.getElementById("viewPortal"),
      konfirmasi: document.getElementById("viewKonfirmasi"),
      cbt: document.getElementById("viewCbt"),
      result: document.getElementById("viewResult")
    };

    // Header & Profile elements
    this.elHeaderStudentName = document.getElementById("headerStudentName");
    this.elProfileNameDisplay = document.getElementById("profileNameDisplay");
    this.elProfileNisnDisplay = document.getElementById("profileNisnDisplay");
    this.elProfileUnlockedCount = document.getElementById("profileUnlockedCount");
    this.btnEditProfile = document.getElementById("btnEditProfile");
    this.btnShareGuru = document.getElementById("btnShareGuru");
    this.btnResetCache = document.getElementById("btnResetCache");

    // Modal Profile
    this.modalProfile = document.getElementById("profileEditModal");
    this.btnCloseProfileModal = document.getElementById("btnCloseProfileModal");
    this.btnCancelProfileModal = document.getElementById("btnCancelProfileModal");
    this.btnSaveProfileModal = document.getElementById("btnSaveProfileModal");
    this.modalInputName = document.getElementById("modalInputName");
    this.modalInputNisn = document.getElementById("modalInputNisn");

    // Days Container
    this.daysContainer = document.getElementById("daysListContainer");

    // Konfirmasi Screen elements
    this.elGeneratedToken = document.getElementById("displayGeneratedToken");
    this.btnRefreshToken = document.getElementById("btnRefreshToken");
    this.inputSiswaNama = document.getElementById("inputSiswaNama");
    this.inputSiswaNisn = document.getElementById("inputSiswaNisn");
    this.displaySesiTitle = document.getElementById("displaySesiTitle");
    this.inputTokenVerify = document.getElementById("inputTokenVerify");
    this.btnBackToPortal = document.getElementById("btnBackToPortal");
    this.btnStartCbt = document.getElementById("btnStartCbt");

    // Result Screen elements
    this.elResultSessionTitle = document.getElementById("resultSessionTitle");
    this.elResultStudentName = document.getElementById("resultStudentName");
    this.elResultScoreValue = document.getElementById("resultScoreValue");
    this.elScoreCircle = document.getElementById("scoreCircle");
    this.elResultVerdict = document.getElementById("resultVerdict");
    this.elStatCorrect = document.getElementById("statCorrect");
    this.elStatWrong = document.getElementById("statWrong");
    this.elStatEmpty = document.getElementById("statEmpty");
    this.btnRemedial = document.getElementById("btnRemedial");
    this.btnOpenCert = document.getElementById("btnOpenCert");
    this.btnNextSession = document.getElementById("btnNextSession");
    this.btnReturnToHome = document.getElementById("btnReturnToHome");
    this.elPembahasanList = document.getElementById("pembahasanListContainer");
  }

  bindEvents() {
    // Profile Modal
    this.btnEditProfile.addEventListener("click", () => this.openProfileModal());
    this.btnCloseProfileModal.addEventListener("click", () => this.closeProfileModal());
    this.btnCancelProfileModal.addEventListener("click", () => this.closeProfileModal());
    this.btnSaveProfileModal.addEventListener("click", () => this.saveProfileModal());

    // Share WA Guru
    this.btnShareGuru.addEventListener("click", () => this.shareProgressToGuru());

    // Reset Progress
    this.btnResetCache.addEventListener("click", () => this.resetAllProgress());

    // Konfirmasi Screen
    this.btnRefreshToken.addEventListener("click", () => this.generateRandomToken());
    this.btnBackToPortal.addEventListener("click", () => this.showView("viewPortal"));
    this.btnStartCbt.addEventListener("click", () => this.handleStartCbtValidation());

    // Result Screen Actions
    this.btnReturnToHome.addEventListener("click", () => {
      this.renderProfileUI();
      this.renderSessionsRoadmap();
      this.showView("viewPortal");
    });

    this.btnRemedial.addEventListener("click", () => {
      if (this.lastResultData && this.lastResultData.session) {
        this.openKonfirmasiForSession(this.lastResultData.session);
      }
    });

    this.btnOpenCert.addEventListener("click", () => {
      if (this.lastResultData) {
        this.certificateManager.open({
          student: this.studentProfile,
          session: this.lastResultData.session,
          score: this.lastResultData.score
        });
      }
    });

    this.btnNextSession.addEventListener("click", () => {
      if (this.lastResultData && this.lastResultData.session) {
        const next = this.findNextSession(this.lastResultData.session.id);
        if (next) {
          this.openKonfirmasiForSession(next);
        } else {
          alert("Selamat! Anda telah menyelesaikan seluruh 30 Sesi Drilling TKA TJKT!");
          this.showView("viewPortal");
        }
      }
    });
  }

  // ================= VIEW NAVIGATION =================
  showView(viewId) {
    Object.values(this.views).forEach(el => {
      if (el) el.classList.remove("active");
    });

    if (this.views[viewId.replace("view", "").toLowerCase()]) {
      this.views[viewId.replace("view", "").toLowerCase()].classList.add("active");
    }

    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ================= PROFIL SISWA & LOCALSTORAGE =================
  loadStudentProfile() {
    try {
      const data = localStorage.getItem(this.profileKey);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return { name: "Peserta TKA TJKT", nisn: "" };
  }

  loadUserHistory() {
    try {
      const data = localStorage.getItem(this.historyKey);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {};
  }

  renderProfileUI() {
    this.studentProfile = this.loadStudentProfile();
    const hasName = this.studentProfile.name && this.studentProfile.name !== "Peserta TKA TJKT";

    this.elHeaderStudentName.textContent = this.studentProfile.name || "Siswa TJKT";
    this.elProfileNameDisplay.textContent = this.studentProfile.name || "Belum Diatur (Klik Edit)";
    this.elProfileNisnDisplay.textContent = this.studentProfile.nisn || "Belum Diisi";

    // Hitung sesi lulus
    this.userHistory = this.loadUserHistory();
    const completedCount = Object.values(this.userHistory).filter(h => h.isPassed).length;
    this.elProfileUnlockedCount.textContent = `${completedCount} / 30 Sesi Selesai`;
  }

  openProfileModal() {
    this.modalInputName.value = this.studentProfile.name || "";
    this.modalInputNisn.value = this.studentProfile.nisn || "";
    this.modalProfile.style.display = "flex";
  }

  closeProfileModal() {
    this.modalProfile.style.display = "none";
  }

  saveProfileModal() {
    const nameVal = this.modalInputName.value.trim();
    const nisnVal = this.modalInputNisn.value.trim();

    if (!nameVal) {
      alert("Silakan masukkan nama lengkap siswa.");
      return;
    }

    this.studentProfile = {
      name: nameVal,
      nisn: nisnVal
    };

    localStorage.setItem(this.profileKey, JSON.stringify(this.studentProfile));
    this.renderProfileUI();
    this.closeProfileModal();
  }

  // ================= RENDERING ROADMAP 15 HARI =================
  renderSessionsRoadmap() {
    this.daysContainer.innerHTML = "";
    this.userHistory = this.loadUserHistory();

    const daysMap = {};
    window.TKA_SESSIONS.forEach(s => {
      if (!daysMap[s.day]) daysMap[s.day] = [];
      daysMap[s.day].push(s);
    });

    Object.keys(daysMap).forEach((dayNumStr, idx) => {
      const dayNum = parseInt(dayNumStr);
      const sessionsInDay = daysMap[dayNum];

      const dayCard = document.createElement("div");
      // Buka otomatis hari ke-1 atau hari yang sedang aktif
      dayCard.className = `day-group-card ${idx === 0 ? "open" : ""}`;

      // Hitung progress hari ini
      const passedInDay = sessionsInDay.filter(s => {
        const h = this.userHistory[s.id];
        return h && h.isPassed;
      }).length;

      dayCard.innerHTML = `
        <div class="day-header" onclick="this.parentElement.classList.toggle('open')">
          <div class="day-title-meta">
            <span class="day-pill">HARI ${dayNum}</span>
            <span class="day-title-text">${sessionsInDay[0].title.split("&")[0]} & Evaluasi</span>
          </div>
          <div class="day-progress-badge">
            <span class="progress-text">${passedInDay} / ${sessionsInDay.length} Tuntas</span>
            <span class="day-accordion-chevron">▼</span>
          </div>
        </div>
        <div class="day-sessions-body" id="dayBody_${dayNum}"></div>
      `;

      this.daysContainer.appendChild(dayCard);
      const dayBody = dayCard.querySelector(`#dayBody_${dayNum}`);

      // Render Session Cards
      sessionsInDay.forEach(session => {
        const card = this.createSessionCard(session);
        dayBody.appendChild(card);
      });
    });
  }

  createSessionCard(session) {
    const card = document.createElement("div");
    const historyItem = this.userHistory[session.id];
    const isCompleted = historyItem && historyItem.isPassed;
    const isLocked = this.checkIsSessionLocked(session);

    let statusClass = "status-unlocked";
    if (isLocked) statusClass = "status-locked";
    if (isCompleted) statusClass = "status-completed";

    card.className = `session-card ${statusClass}`;

    let starsHtml = "";
    if (isCompleted) {
      const starsCount = historyItem.stars || 1;
      starsHtml = "⭐".repeat(starsCount);
    }

    let actionBtnHtml = "";
    if (isLocked) {
      actionBtnHtml = `<button class="btn-session-action btn-locked" disabled>🔒 Selesaikan Sesi Sebelumnya</button>`;
    } else if (isCompleted) {
      actionBtnHtml = `
        <div class="session-score-banner">Nilai Terbaik: ${historyItem.bestScore} / 100 ${starsHtml}</div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-session-action btn-retake" style="flex: 1;">🔄 Ulangi Sesi</button>
          <button class="btn-session-action btn-show-cert" style="flex: 1; background: #0284c7; color: #ffffff; border: none;">🎓 Sertifikat</button>
        </div>
      `;
    } else {
      actionBtnHtml = `<button class="btn-session-action btn-start">🚀 Mulai Drilling Sesi Ini</button>`;
    }

    card.innerHTML = `
      <div class="session-top">
        <span class="session-badge-code">${session.code}</span>
        <span class="session-stars">${starsHtml}</span>
      </div>
      <div>
        <h4 class="session-title">${session.title}</h4>
        <p style="font-size: 0.8rem; color: #64748b; margin-top: 4px;">${session.description}</p>
      </div>
      <div class="session-meta-info">
        <span class="session-meta-tag">📝 30 Soal</span>
        <span class="session-meta-tag">⏱️ 25 Menit</span>
        <span class="session-meta-tag">🎯 KKM 70%</span>
      </div>
      ${actionBtnHtml}
    `;

    // Klik tombol aksi
    if (!isLocked) {
      const btnStartOrRetake = card.querySelector(".btn-start, .btn-retake");
      if (btnStartOrRetake) {
        btnStartOrRetake.addEventListener("click", () => this.openKonfirmasiForSession(session));
      }

      const btnCert = card.querySelector(".btn-show-cert");
      if (btnCert) {
        btnCert.addEventListener("click", (e) => {
          e.stopPropagation();
          this.certificateManager.open({
            student: this.studentProfile,
            session: session,
            score: historyItem.bestScore
          });
        });
      }
    }

    return card;
  }

  checkIsSessionLocked(session) {
    // Sesi 1 selalu terbuka
    if (!session.prerequisiteId) return false;
    // Cek apakah prasyarat sudah lulus KKM
    const prereq = this.userHistory[session.prerequisiteId];
    return !(prereq && prereq.isPassed);
  }

  findNextSession(currentSessionId) {
    const currentIndex = window.TKA_SESSIONS.findIndex(s => s.id === currentSessionId);
    if (currentIndex >= 0 && currentIndex < window.TKA_SESSIONS.length - 1) {
      return window.TKA_SESSIONS[currentIndex + 1];
    }
    return null;
  }

  // ================= KONFIRMASI PESERTA SCREEN =================
  openKonfirmasiForSession(session) {
    this.selectedSession = session;
    this.generateRandomToken();

    this.inputSiswaNama.value = this.studentProfile.name && this.studentProfile.name !== "Peserta TKA TJKT" ? this.studentProfile.name : "";
    this.inputSiswaNisn.value = this.studentProfile.nisn || "";
    this.displaySesiTitle.textContent = `${session.code} - ${session.title} (${session.questionCount} Soal)`;
    this.inputTokenVerify.value = "";

    this.showView("viewKonfirmasi");
  }

  generateRandomToken() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let token = "";
    for (let i = 0; i < 6; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.currentToken = token;
    this.elGeneratedToken.textContent = token;
  }

  handleStartCbtValidation() {
    const nama = this.inputSiswaNama.value.trim();
    const nisn = this.inputSiswaNisn.value.trim();
    const tokenInput = this.inputTokenVerify.value.trim().toUpperCase();

    if (!nama) {
      alert("Nama lengkap peserta wajib diisi sebelum memulai ujian.");
      this.inputSiswaNama.focus();
      return;
    }

    if (tokenInput !== this.currentToken) {
      alert(`Kode token tidak sesuai. Silakan ketik token [${this.currentToken}] yang tertera di kotak kuning.`);
      this.inputTokenVerify.focus();
      return;
    }

    // Update profil
    this.studentProfile.name = nama;
    this.studentProfile.nisn = nisn;
    localStorage.setItem(this.profileKey, JSON.stringify(this.studentProfile));
    this.renderProfileUI();

    // Jalankan CBT Engine
    this.showView("viewCbt");
    this.cbtEngine.startExam(this.selectedSession, true);
  }

  // ================= TAMPILKAN HASIL & PEMBAHASAN LENGKAP =================
  showResultsView(resultData) {
    this.lastResultData = resultData;
    this.renderProfileUI();

    const session = resultData.session;
    const score = resultData.score;
    const isPassed = resultData.isPassed;

    this.elResultSessionTitle.textContent = `Hasil Drilling: ${session.code} - ${session.title}`;
    this.elResultStudentName.textContent = `Nama Siswa: ${(this.studentProfile.name || "Peserta Ujian").toUpperCase()} (NISN: ${this.studentProfile.nisn || "-"})`;
    this.elResultScoreValue.textContent = score;

    this.elStatCorrect.textContent = resultData.correctCount;
    this.elStatWrong.textContent = resultData.wrongCount;
    this.elStatEmpty.textContent = resultData.emptyCount;

    // Lingkaran Skor
    this.elScoreCircle.classList.remove("circle-pass", "circle-fail");
    this.elResultVerdict.classList.remove("pass", "fail");

    if (isPassed) {
      this.elScoreCircle.classList.add("circle-pass");
      this.elResultVerdict.classList.add("pass");
      let stars = "⭐";
      if (score >= 90) stars = "⭐⭐⭐";
      else if (score >= 80) stars = "⭐⭐";
      this.elResultVerdict.textContent = `SELAMAT, ANDA LOLOS KKM! ${stars}`;

      this.btnRemedial.style.display = "none";
      this.btnOpenCert.style.display = "inline-flex";
      this.btnNextSession.style.display = "inline-flex";
    } else {
      this.elScoreCircle.classList.add("circle-fail");
      this.elResultVerdict.classList.add("fail");
      this.elResultVerdict.textContent = `NILAI BELUM MENCAPAI KKM 70% (REMEDIAL DIBUTUHKAN)`;

      this.btnRemedial.style.display = "inline-flex";
      this.btnOpenCert.style.display = "none";
      this.btnNextSession.style.display = "none";
    }

    // Render Pembahasan Soal Lengkap
    this.renderReviewItems(resultData.reviewItems);

    this.showView("viewResult");
  }

  renderReviewItems(items) {
    this.elPembahasanList.innerHTML = "";

    items.forEach((item, idx) => {
      const q = item.questionObj;
      const isCorrect = item.isCorrect;
      const isAnswered = item.isAnswered;

      const card = document.createElement("div");
      card.className = `pembahasan-item ${isCorrect ? "status-is-correct" : "status-is-wrong"}`;

      let userAnsText = "- (Tidak Dijawab)";
      let keyAnsText = "";

      if (q.type === "pg") {
        if (isAnswered) {
          const opt = q.options.find(o => o.id === item.userAns);
          userAnsText = opt ? `(${opt.id}) ${opt.text}` : item.userAns;
        }
        const keyOpt = q.options.find(o => o.id === q.key);
        keyAnsText = keyOpt ? `(${keyOpt.id}) ${keyOpt.text}` : q.key;
      } else if (q.type === "pgk_mcma") {
        if (isAnswered && Array.isArray(item.userAns)) {
          userAnsText = item.userAns.map(id => {
            const o = q.options.find(x => x.id === id);
            return o ? `[${o.id}]` : id;
          }).join(", ");
        }
        keyAnsText = q.key.map(id => {
          const o = q.options.find(x => x.id === id);
          return o ? `[${o.id}]` : id;
        }).join(", ");
      } else if (q.type === "pgk_tf") {
        if (isAnswered) {
          userAnsText = Object.entries(item.userAns).map(([stId, val]) => `${stId}: ${val === "B" ? "Benar" : "Salah"}`).join(" | ");
        }
        keyAnsText = q.statements.map(st => `${st.id}: ${st.correct === "B" ? "Benar" : "Salah"}`).join(" | ");
      }

      card.innerHTML = `
        <div class="pembahasan-top-meta">
          <span class="pembahasan-num">Nomor ${idx + 1} (${q.type === "pg" ? "Pilihan Ganda" : q.type === "pgk_mcma" ? "Pilihan Ganda Kompleks" : "Kategori Benar/Salah"})</span>
          <span class="pembahasan-status-tag ${isCorrect ? "correct" : "wrong"}">
            ${isCorrect ? "✓ JAWABAN BENAR" : "✗ BELUM TEPAT"}
          </span>
        </div>

        <div class="pembahasan-q-text">
          ${q.stimulus ? `<p style="color: #64748b; font-style: italic; margin-bottom: 6px;">[Wacana: ${q.stimulus}]</p>` : ""}
          <strong>${q.question}</strong>
        </div>

        <div class="comparison-box">
          <div class="answer-row user-ans">
            <span class="label">Jawaban Siswa:</span>
            <span class="val ${isCorrect ? "val-correct" : "val-wrong"}">${userAnsText}</span>
          </div>
          <div class="answer-row key-ans">
            <span class="label">Kunci Jawaban Resmi:</span>
            <span class="val">${keyAnsText}</span>
          </div>
        </div>

        <div class="explanation-box">
          <div class="explanation-title">💡 Pembahasan Konsep:</div>
          <div>${q.explanation || "Pembahasan materi mengacu pada standar BSKAP No 046/2025."}</div>
        </div>

        ${q.quickTip ? `
          <div class="quick-tip-box">
            <div class="quick-tip-title">⚡ Tips Cepat:</div>
            <div>${q.quickTip}</div>
          </div>
        ` : ""}
      `;

      this.elPembahasanList.appendChild(card);
    });
  }

  // ================= REKAP & BAGIKAN KE GURU (WHATSAPP) =================
  shareProgressToGuru() {
    this.userHistory = this.loadUserHistory();
    const completedList = Object.values(this.userHistory).filter(h => h.isPassed);

    const nama = this.studentProfile.name || "Siswa TJKT";
    const nisn = this.studentProfile.nisn || "-";

    let message = `*LAPORAN DRILLING TKA TJKT 2026*\n`;
    message += `Sekolah: *SMK Negeri 1 Giritontro*\n`;
    message += `Nama Siswa: *${nama}*\n`;
    message += `NISN: *${nisn}*\n`;
    message += `Kelas: XII TJKT\n`;
    message += `Total Sesi Lolos: *${completedList.length} dari 30 Sesi*\n\n`;
    message += `*Rincian Sesi yang Telah Tuntas:*\n`;

    completedList.forEach(item => {
      const s = window.TKA_SESSIONS.find(x => x.id === item.sessionId);
      if (s) {
        message += `• ${s.code}: Skor ${item.bestScore} (${"⭐".repeat(item.stars || 1)})\n`;
      }
    });

    message += `\n_Aplikasi PM_Dev (prihmardoyo_developer) • SMK Negeri 1 Giritontro_`;

    // Salin ke Clipboard & tawarkan buka WhatsApp
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(() => {
        const openWa = confirm("Rekap nilai berhasil disalin ke papan klip (clipboard)!\n\nApakah Anda ingin langsung membuka WhatsApp untuk mengirimkannya kepada Guru?");
        if (openWa) {
          const encoded = encodeURIComponent(message);
          window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
        }
      }).catch(() => {
        this.fallbackShareWa(message);
      });
    } else {
      this.fallbackShareWa(message);
    }
  }

  fallbackShareWa(text) {
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
  }

  resetAllProgress() {
    const conf = confirm("PERINGATAN!\nApakah Anda yakin ingin menghapus seluruh riwayat pengerjaan sesi di perangkat ini?\n\nSemua bintang dan skor akan di-reset dari awal.");
    if (conf) {
      localStorage.removeItem(this.historyKey);
      localStorage.removeItem("TKA_ACTIVE_EXAM_STATE");
      this.userHistory = {};
      this.renderProfileUI();
      this.renderSessionsRoadmap();
      alert("Seluruh progres berhasil di-reset ke awal.");
    }
  }
}

// Inisialisasi saat window dimuat
window.addEventListener("DOMContentLoaded", () => {
  window.App = new AppController();
});
