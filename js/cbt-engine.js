/**
 * CBT ENGINE - SIMULASI TKA PUSMENDIK KEMENDIKDASMEN
 * Menangani:
 * 1. Auto-save ke localStorage (Tahan Reload / Refresh tanpa hilang data)
 * 2. Timer hitung mundur & auto-submit saat habis
 * 3. Navigasi soal (Prev, Next, Ragu-ragu, Jump via Panel Daftar Soal 1-30)
 * 4. Pengubah ukuran teks A- A A+
 * 5. Penilaian & KKM 70% (Lolos ➔ Sertifikat & Buka Sesi Selanjutnya, Tidak Lolos ➔ Remedial)
 * 6. Review & Pembahasan Soal Lengkap Pasca Ujian
 */

class CbtEngine {
  constructor() {
    this.storageKey = "TKA_ACTIVE_EXAM_STATE";
    this.historyKey = "TKA_USER_HISTORY";
    this.currentSession = null;
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { [qId]: answer }
    this.doubtfulQuestions = {}; // { [qId]: boolean }
    this.remainingSeconds = 25 * 60;
    this.timerInterval = null;
    this.isExamActive = false;

    // DOM Elements
    this.initElements();
    this.bindEvents();
    this.restoreFontSize();
  }

  initElements() {
    this.elHeaderControls = document.getElementById("headerCbtControls");
    this.elUserInfo = document.getElementById("headerUserInfo");
    this.elTimerDisplay = document.getElementById("timerDisplay");
    this.elTimerBox = document.getElementById("timerBox");

    this.elCurrentNum = document.getElementById("currentQuestionNumDisplay");
    this.elTotalNum = document.getElementById("totalQuestionsDisplay");
    this.elTypePill = document.getElementById("cbtQuestionTypePill");
    this.elQuestionText = document.getElementById("cbtQuestionText");
    this.elOptionsContainer = document.getElementById("cbtOptionsContainer");

    this.btnPrev = document.getElementById("btnPrevQuestion");
    this.btnNext = document.getElementById("btnNextQuestion");
    this.btnFinish = document.getElementById("btnFinishExam");
    this.checkRagu = document.getElementById("checkRaguRagu");

    this.elDrawer = document.getElementById("daftarSoalDrawer");
    this.elOverlay = document.getElementById("daftarSoalOverlay");
    this.btnToggleDrawer = document.getElementById("btnToggleDaftarSoal");
    this.btnCloseDrawer = document.getElementById("btnCloseDrawer");
    this.elGrid = document.getElementById("questionNumberGrid");
    this.elAnsweredCount = document.getElementById("answeredCountDisplay");
    this.btnDrawerSubmit = document.getElementById("btnDrawerSubmit");

    // Modal Konfirmasi Selesai Ujian
    this.modalConfirm = document.getElementById("finishConfirmModal");
    this.btnCancelConfirm = document.getElementById("btnCancelConfirm");
    this.btnCancelConfirmX = document.getElementById("btnCancelConfirmX");
    this.btnSubmitExamNow = document.getElementById("btnSubmitExamNow");
    this.elConfirmAnswered = document.getElementById("confirmAnsweredCount");
    this.elConfirmUnanswered = document.getElementById("confirmUnansweredCount");
    this.elConfirmDoubt = document.getElementById("confirmDoubtCount");
    this.elConfirmWarning = document.getElementById("confirmWarningNote");
    this.checkConfirmAgree = document.getElementById("checkConfirmAgreement");

    // Font Buttons
    this.btnFontSmall = document.getElementById("btnFontSmall");
    this.btnFontNormal = document.getElementById("btnFontNormal");
    this.btnFontLarge = document.getElementById("btnFontLarge");
  }

  bindEvents() {
    // Navigasi Bawah
    this.btnPrev.addEventListener("click", () => this.navigatePrev());
    this.btnNext.addEventListener("click", () => this.navigateNext());
    this.btnFinish.addEventListener("click", () => this.openFinishModal());
    this.btnDrawerSubmit.addEventListener("click", () => {
      this.closeDrawer();
      this.openFinishModal();
    });

    // Modal Konfirmasi Actions
    this.btnCancelConfirm.addEventListener("click", () => this.closeFinishModal());
    this.btnCancelConfirmX.addEventListener("click", () => this.closeFinishModal());
    this.modalConfirm.addEventListener("click", (e) => {
      if (e.target === this.modalConfirm) this.closeFinishModal();
    });

    this.checkConfirmAgree.addEventListener("change", (e) => {
      this.btnSubmitExamNow.disabled = !e.target.checked;
    });

    this.btnSubmitExamNow.addEventListener("click", () => {
      this.closeFinishModal();
      this.finishExam(false);
    });

    // Ragu-ragu Checkbox
    this.checkRagu.addEventListener("change", (e) => {
      const q = this.questions[this.currentIndex];
      if (!q) return;
      this.doubtfulQuestions[q.id] = e.target.checked;
      this.saveActiveExamState();
      this.updateGridStatus();
    });

    // Drawer Daftar Soal Toggle
    this.btnToggleDrawer.addEventListener("click", () => this.openDrawer());
    this.btnCloseDrawer.addEventListener("click", () => this.closeDrawer());
    this.elOverlay.addEventListener("click", () => this.closeDrawer());

    // Font Size Adjusters
    this.btnFontSmall.addEventListener("click", () => this.setFontSize("small"));
    this.btnFontNormal.addEventListener("click", () => this.setFontSize("normal"));
    this.btnFontLarge.addEventListener("click", () => this.setFontSize("large"));
  }

  // ================= FONT SIZE CONTROLS =================
  setFontSize(size) {
    document.body.classList.remove("font-size-small", "font-size-normal", "font-size-large");
    document.body.classList.add(`font-size-${size}`);
    
    [this.btnFontSmall, this.btnFontNormal, this.btnFontLarge].forEach(btn => {
      btn.classList.toggle("active", btn.dataset.size === size);
    });

    localStorage.setItem("TKA_FONT_PREFERENCE", size);
  }

  restoreFontSize() {
    const saved = localStorage.getItem("TKA_FONT_PREFERENCE") || "normal";
    this.setFontSize(saved);
  }

  // ================= MULAI ATAU PULIHKAN UJIAN =================
  startExam(sessionData, isNew = true) {
    this.currentSession = sessionData;
    this.questions = window.getQuestionsForSession(sessionData.id);
    this.elTotalNum.textContent = this.questions.length;

    if (isNew) {
      this.currentIndex = 0;
      this.userAnswers = {};
      this.doubtfulQuestions = {};
      this.remainingSeconds = (sessionData.durationMinutes || 25) * 60;
      this.saveActiveExamState();
    }

    this.isExamActive = true;
    this.elHeaderControls.style.display = "flex";
    this.elUserInfo.style.display = "none";

    this.buildQuestionGrid();
    this.renderCurrentQuestion();
    this.startTimer();
    this.updateGridStatus();
  }

  resumeActiveExamIfAny() {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return false;

    try {
      const data = JSON.parse(saved);
      if (data && data.sessionId && !data.isFinished) {
        const session = window.TKA_SESSIONS.find(s => s.id === data.sessionId);
        if (session) {
          this.currentSession = session;
          this.questions = window.getQuestionsForSession(session.id);
          this.currentIndex = data.currentIndex || 0;
          this.userAnswers = data.userAnswers || {};
          this.doubtfulQuestions = data.doubtfulQuestions || {};
          
          // Hitung waktu tersisa berdasarkan elapsed
          const elapsedSecs = Math.floor((Date.now() - data.lastSavedTimestamp) / 1000);
          this.remainingSeconds = Math.max(0, data.remainingSeconds - elapsedSecs);

          this.startExam(session, false);
          return true;
        }
      }
    } catch (e) {
      console.error("Gagal memulihkan sesi ujian:", e);
    }
    return false;
  }

  saveActiveExamState() {
    if (!this.currentSession || !this.isExamActive) return;
    const state = {
      sessionId: this.currentSession.id,
      currentIndex: this.currentIndex,
      userAnswers: this.userAnswers,
      doubtfulQuestions: this.doubtfulQuestions,
      remainingSeconds: this.remainingSeconds,
      lastSavedTimestamp: Date.now(),
      isFinished: false
    };
    localStorage.setItem(this.storageKey, JSON.stringify(state));
  }

  clearActiveExamState() {
    localStorage.removeItem(this.storageKey);
    this.isExamActive = false;
    clearInterval(this.timerInterval);
    this.elHeaderControls.style.display = "none";
    this.elUserInfo.style.display = "flex";
  }

  // ================= TIMER ENGINE =================
  startTimer() {
    clearInterval(this.timerInterval);
    this.updateTimerUI();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.remainingSeconds = 0;
        this.updateTimerUI();
        alert("Waktu pengerjaan telah habis! Sistem akan mengumpulkan jawaban Anda secara otomatis.");
        this.finishExam(true);
        return;
      }

      this.updateTimerUI();
      // Auto-save tiap 5 detik
      if (this.remainingSeconds % 5 === 0) {
        this.saveActiveExamState();
      }
    }, 1000);
  }

  updateTimerUI() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    this.elTimerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    this.elTimerBox.classList.remove("timer-warning", "timer-danger");
    if (this.remainingSeconds <= 120) {
      this.elTimerBox.classList.add("timer-danger");
    } else if (this.remainingSeconds <= 300) {
      this.elTimerBox.classList.add("timer-warning");
    }
  }

  // ================= TAMPILKAN SOAL =================
  renderCurrentQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    this.elCurrentNum.textContent = this.currentIndex + 1;

    // Badge Tipe Soal
    let typeName = "Pilihan Ganda";
    if (q.type === "pgk_mcma") typeName = "Pilihan Ganda Kompleks (Centang > 1)";
    if (q.type === "pgk_tf") typeName = "Kategori (Tabel Benar/Salah)";
    this.elTypePill.textContent = typeName;

    // Status Ragu-ragu Checkbox
    this.checkRagu.checked = !!this.doubtfulQuestions[q.id];

    // Konten Soal (Stimulus + Soal)
    let contentHtml = "";
    if (q.stimulus) {
      contentHtml += `
        <div class="stimulus-box">
          <div class="stimulus-tag">Wacana / Studi Kasus:</div>
          <div>${q.stimulus}</div>
        </div>
      `;
    }
    contentHtml += `<div class="question-prompt"><strong>${q.question}</strong></div>`;
    this.elQuestionText.innerHTML = contentHtml;

    // Render Opsi Jawaban sesuai Format Pusmendik
    this.renderOptions(q);

    // Update Navigasi Tombol Bawah
    this.btnPrev.disabled = this.currentIndex === 0;
    this.btnNext.disabled = this.currentIndex === this.questions.length - 1;
    this.btnFinish.style.display = "inline-flex";

    this.updateGridStatus();
    this.saveActiveExamState();
  }

  renderOptions(q) {
    this.elOptionsContainer.innerHTML = "";

    // 1. FORMAT PILIHAN GANDA TUNGGAL (PG)
    if (q.type === "pg") {
      const currentAns = this.userAnswers[q.id] || "";
      q.options.forEach(opt => {
        const item = document.createElement("div");
        item.className = `option-item ${currentAns === opt.id ? "selected" : ""}`;
        item.innerHTML = `
          <div class="option-letter-badge">${opt.id}</div>
          <div class="option-text-content">${opt.text}</div>
          <input type="radio" name="opt_${q.id}" value="${opt.id}" ${currentAns === opt.id ? "checked" : ""}>
        `;
        item.addEventListener("click", () => {
          this.userAnswers[q.id] = opt.id;
          this.renderOptions(q);
          this.updateGridStatus();
          this.saveActiveExamState();
        });
        this.elOptionsContainer.appendChild(item);
      });
    }

    // 2. FORMAT PILIHAN GANDA KOMPLEKS (PGK MCMA - Centang > 1)
    else if (q.type === "pgk_mcma") {
      const currentAnsArr = Array.isArray(this.userAnswers[q.id]) ? this.userAnswers[q.id] : [];
      q.options.forEach(opt => {
        const isChecked = currentAnsArr.includes(opt.id);
        const item = document.createElement("div");
        item.className = `option-item is-checkbox ${isChecked ? "selected" : ""}`;
        item.innerHTML = `
          <div class="option-letter-badge">${isChecked ? "✓" : opt.id}</div>
          <div class="option-text-content">${opt.text}</div>
          <input type="checkbox" value="${opt.id}" ${isChecked ? "checked" : ""}>
        `;
        item.addEventListener("click", () => {
          let updated = [...currentAnsArr];
          if (updated.includes(opt.id)) {
            updated = updated.filter(id => id !== opt.id);
          } else {
            updated.push(opt.id);
          }
          this.userAnswers[q.id] = updated;
          this.renderOptions(q);
          this.updateGridStatus();
          this.saveActiveExamState();
        });
        this.elOptionsContainer.appendChild(item);
      });
    }

    // 3. FORMAT TABEL PERNYATAAN BENAR / SALAH (PGK TF)
    else if (q.type === "pgk_tf") {
      const currentObj = this.userAnswers[q.id] || {};
      const wrapper = document.createElement("div");
      wrapper.className = "statement-table-wrapper";

      let tableHtml = `
        <table class="statement-table">
          <thead>
            <tr>
              <th>Pernyataan Kasus</th>
              <th class="col-choice">Benar</th>
              <th class="col-choice">Salah</th>
            </tr>
          </thead>
          <tbody>
      `;

      q.statements.forEach(st => {
        const stAns = currentObj[st.id] || "";
        tableHtml += `
          <tr>
            <td>${st.text}</td>
            <td class="col-choice">
              <span class="tf-radio-btn ${stAns === "B" ? "selected-true" : ""}" data-stid="${st.id}" data-val="B"></span>
            </td>
            <td class="col-choice">
              <span class="tf-radio-btn ${stAns === "S" ? "selected-false" : ""}" data-stid="${st.id}" data-val="S"></span>
            </td>
          </tr>
        `;
      });

      tableHtml += `</tbody></table>`;
      wrapper.innerHTML = tableHtml;

      // Event listener klik tombol radio tabel
      wrapper.querySelectorAll(".tf-radio-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const stId = btn.dataset.stid;
          const val = btn.dataset.val;
          const currentMap = this.userAnswers[q.id] || {};
          currentMap[stId] = val;
          this.userAnswers[q.id] = currentMap;
          this.renderOptions(q);
          this.updateGridStatus();
          this.saveActiveExamState();
        });
      });

      this.elOptionsContainer.appendChild(wrapper);
    }
  }

  // ================= NAVIGASI SOAL =================
  navigatePrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCurrentQuestion();
    }
  }

  navigateNext() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.renderCurrentQuestion();
      this.closeDrawer();
    }
  }

  // ================= DAFTAR SOAL (DRAWER / FLYOUT PANEL) =================
  buildQuestionGrid() {
    this.elGrid.innerHTML = "";
    this.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "btn-grid-num";
      btn.textContent = idx + 1;
      btn.id = `gridBtn_${idx}`;
      btn.addEventListener("click", () => this.jumpToQuestion(idx));
      this.elGrid.appendChild(btn);
    });
  }

  updateGridStatus() {
    let answeredCount = 0;

    this.questions.forEach((q, idx) => {
      const btn = document.getElementById(`gridBtn_${idx}`);
      if (!btn) return;

      btn.classList.remove("status-answered", "status-doubtful", "active-question");

      if (idx === this.currentIndex) {
        btn.classList.add("active-question");
      }

      const isDoubt = !!this.doubtfulQuestions[q.id];
      const isAnswered = this.checkIsAnswered(q);

      if (isAnswered) answeredCount++;

      if (isDoubt) {
        btn.classList.add("status-doubtful");
      } else if (isAnswered) {
        btn.classList.add("status-answered");
      }
    });

    this.elAnsweredCount.textContent = `${answeredCount} / ${this.questions.length} Terjawab`;
  }

  checkIsAnswered(q) {
    const ans = this.userAnswers[q.id];
    if (!ans) return false;
    if (q.type === "pg") return typeof ans === "string" && ans.length > 0;
    if (q.type === "pgk_mcma") return Array.isArray(ans) && ans.length > 0;
    if (q.type === "pgk_tf") {
      return typeof ans === "object" && Object.keys(ans).length === q.statements.length;
    }
    return false;
  }

  openDrawer() {
    this.updateGridStatus();
    this.elDrawer.classList.add("open");
    this.elOverlay.classList.add("active");
  }

  closeDrawer() {
    this.elDrawer.classList.remove("open");
    this.elOverlay.classList.remove("active");
  }

  // ================= KONFIRMASI SELESAI UJIAN (MODAL PUSMENDIK) =================
  openFinishModal() {
    let answeredCount = 0;
    let doubtfulCount = 0;

    this.questions.forEach(q => {
      if (this.checkIsAnswered(q)) answeredCount++;
      if (this.doubtfulQuestions[q.id]) doubtfulCount++;
    });

    const unansweredCount = this.questions.length - answeredCount;

    this.elConfirmAnswered.textContent = answeredCount;
    this.elConfirmUnanswered.textContent = unansweredCount;
    this.elConfirmDoubt.textContent = doubtfulCount;

    if (unansweredCount > 0 || doubtfulCount > 0) {
      this.elConfirmWarning.style.display = "block";
    } else {
      this.elConfirmWarning.style.display = "none";
    }

    // Default: Checkbox belum dicentang, tombol submit disabled sampai dicentang
    this.checkConfirmAgree.checked = false;
    this.btnSubmitExamNow.disabled = true;

    this.modalConfirm.style.display = "flex";
  }

  closeFinishModal() {
    this.modalConfirm.style.display = "none";
  }

  finishExam(isAuto = false) {
    clearInterval(this.timerInterval);

    // Hitung Skor
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    const reviewItems = [];

    this.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isAnswered = this.checkIsAnswered(q);

      let isCorrect = false;

      if (!isAnswered) {
        emptyCount++;
        wrongCount++;
      } else {
        if (q.type === "pg") {
          isCorrect = userAns === q.key;
        } else if (q.type === "pgk_mcma") {
          // Harus sama persis
          const sortedUser = [...userAns].sort();
          const sortedKey = [...q.key].sort();
          isCorrect = sortedUser.length === sortedKey.length && sortedUser.every((val, i) => val === sortedKey[i]);
        } else if (q.type === "pgk_tf") {
          isCorrect = q.statements.every(st => userAns[st.id] === st.correct);
        }

        if (isCorrect) correctCount++;
        else wrongCount++;
      }

      reviewItems.push({
        questionObj: q,
        userAns: userAns,
        isCorrect: isCorrect,
        isAnswered: isAnswered
      });
    });

    // Skala 0 - 100
    const rawScore = (correctCount / this.questions.length) * 100;
    const finalScore = Math.round(rawScore * 10) / 10;
    const isPassed = finalScore >= (this.currentSession.passingGrade || 70);

    // Simpan ke riwayat lokal user
    this.saveUserSessionResult(this.currentSession.id, finalScore, isPassed);

    // Hapus sesi aktif
    this.clearActiveExamState();

    // Trigger UI Hasil
    if (window.App) {
      window.App.showResultsView({
        session: this.currentSession,
        score: finalScore,
        correctCount: correctCount,
        wrongCount: wrongCount,
        emptyCount: emptyCount,
        isPassed: isPassed,
        reviewItems: reviewItems
      });
    }
  }

  saveUserSessionResult(sessionId, score, isPassed) {
    let history = {};
    try {
      history = JSON.parse(localStorage.getItem(this.historyKey) || "{}");
    } catch (e) {
      history = {};
    }

    const prevRecord = history[sessionId];
    const prevBestScore = prevRecord ? prevRecord.bestScore : 0;
    const bestScore = Math.max(prevBestScore, score);
    const passedStatus = (prevRecord && prevRecord.isPassed) || isPassed;

    // Tentukan bintang
    let stars = 0;
    if (bestScore >= 90) stars = 3;
    else if (bestScore >= 80) stars = 2;
    else if (bestScore >= 70) stars = 1;

    history[sessionId] = {
      sessionId: sessionId,
      lastScore: score,
      bestScore: bestScore,
      isPassed: passedStatus,
      stars: stars,
      lastCompletedAt: new Date().toISOString()
    };

    localStorage.setItem(this.historyKey, JSON.stringify(history));
  }
}

if (typeof window !== "undefined") {
  window.CbtEngine = CbtEngine;
}
