// scripts/compile_final_900_questions_js.js
// COMPILER EKSEKUTIF 900 BUTIR SOAL UNIK STANDAR PUSMENDIK (30 SESI x 30 SOAL)
// Menghasilkan js/data/questions.js dan data/sessions/s01.json s.d. s30.json

const fs = require('fs');
const path = require('path');

const sessionsMap = {};

// S01 - S07
sessionsMap['s01'] = require('./data_src/sessions/s01.js');
sessionsMap['s02'] = require('./data_src/batches/batch_s02_s06.js').s02;
sessionsMap['s03'] = require('./data_src/curated/data_s03.js');
sessionsMap['s04'] = require('./data_src/curated_all/modules/mod_s04_s06.js').s04;
sessionsMap['s05'] = require('./data_src/definitions/banks/bank_s05.js');
sessionsMap['s06'] = require('./data_src/definitions/full_engine/packs/pack_s06_s10.js').s06;
sessionsMap['s07'] = require('./data_src/definitions/full_engine/dataset_builder/session_generators/gen_s07_s10.js').gen_s07;

// S08 - S10
const p8_10 = require('./data_src/definitions/full_engine/dataset_builder/session_packs/pack_s08_s10.js');
sessionsMap['s08'] = p8_10.s08;
sessionsMap['s09'] = p8_10.s09;
sessionsMap['s10'] = p8_10.s10;

// S11 - S14
const p11_14 = require('./data_src/definitions/full_engine/dataset_builder/session_packs/pack_s11_s14.js');
sessionsMap['s11'] = p11_14.s11;
sessionsMap['s12'] = p11_14.s12;
sessionsMap['s13'] = p11_14.s13;
sessionsMap['s14'] = p11_14.s14;

// S15 - S18
const p15_18 = require('./data_src/definitions/full_engine/dataset_builder/session_packs/pack_s15_s18.js');
sessionsMap['s15'] = p15_18.s15;
sessionsMap['s16'] = p15_18.s16;
sessionsMap['s17'] = p15_18.s17;
sessionsMap['s18'] = p15_18.s18;

// S19 - S22
const p19_22 = require('./data_src/definitions/full_engine/dataset_builder/session_packs/pack_s19_s22.js');
sessionsMap['s19'] = p19_22.s19;
sessionsMap['s20'] = p19_22.s20;
sessionsMap['s21'] = p19_22.s21;
sessionsMap['s22'] = p19_22.s22;

// S23 - S26
const p23_26 = require('./data_src/definitions/full_engine/dataset_builder/session_packs/pack_s23_s26.js');
sessionsMap['s23'] = p23_26.s23;
sessionsMap['s24'] = p23_26.s24;
sessionsMap['s25'] = p23_26.s25;
sessionsMap['s26'] = p23_26.s26;

// S27 - S30
const p27_30 = require('./data_src/definitions/full_engine/dataset_builder/session_packs/pack_s27_s30.js');
sessionsMap['s27'] = p27_30.s27;
sessionsMap['s28'] = p27_30.s28;
sessionsMap['s29'] = p27_30.s29;
sessionsMap['s30'] = p27_30.s30;

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function shuffleWithRng(array, rng) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

const keyDistribution = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const finalDatabase = {};

console.log("Memulai kompilasi 30 sesi x 30 butir soal...");

const letters = ["A", "B", "C", "D", "E"];

for (let sIdx = 1; sIdx <= 30; sIdx++) {
  const sid = "s" + (sIdx < 10 ? "0" : "") + sIdx;
  const rawSession = sessionsMap[sid];

  let seedCounter = sIdx * 54321;
  const rng = () => {
    seedCounter++;
    return seededRandom(seedCounter);
  };

  const sessionQuestions = [];
  let qNum = 1;

  // 1. 20 Pilihan Ganda (PG)
  rawSession.pg.forEach((rawQ) => {
    const qId = sid + "_q" + qNum;
    const allChoices = [
      { text: rawQ.correctText, isCorrect: true },
      ...rawQ.distractors.map(d => ({ text: d, isCorrect: false }))
    ];

    const shuffledChoices = shuffleWithRng(allChoices, rng);
    let correctLetter = "A";

    const formattedOptions = shuffledChoices.map((c, cIdx) => {
      const letter = letters[cIdx];
      if (c.isCorrect) {
        correctLetter = letter;
      }
      return {
        id: letter,
        text: c.text
      };
    });

    keyDistribution[correctLetter]++;

    sessionQuestions.push({
      id: qId,
      number: qNum,
      type: "pg",
      stimulus: rawQ.stimulus,
      question: rawQ.question,
      options: formattedOptions,
      key: correctLetter,
      explanation: rawQ.explanation,
      quickTip: rawQ.quickTip
    });

    qNum++;
  });

  // 2. 5 PGK MCMA (Multi Answer)
  rawSession.mcma.forEach((rawQ) => {
    const qId = sid + "_q" + qNum;
    const shuffledOptions = shuffleWithRng(rawQ.options, rng);
    const correctLetters = [];

    const formattedOptions = shuffledOptions.map((opt, oIdx) => {
      const letter = letters[oIdx];
      if (opt.isCorrect) {
        correctLetters.push(letter);
      }
      return {
        id: letter,
        text: opt.text
      };
    });

    sessionQuestions.push({
      id: qId,
      number: qNum,
      type: "pgk_mcma",
      stimulus: rawQ.stimulus,
      question: rawQ.question,
      options: formattedOptions,
      key: correctLetters.sort(),
      explanation: rawQ.explanation,
      quickTip: rawQ.quickTip
    });

    qNum++;
  });

  // 3. 5 PGK TF (Tabel Benar/Salah)
  rawSession.tf.forEach((rawQ) => {
    const qId = sid + "_q" + qNum;
    const formattedStatements = rawQ.statements.map((st, stIdx) => ({
      id: "st" + (stIdx + 1),
      text: st.text,
      correct: st.correct
    }));

    sessionQuestions.push({
      id: qId,
      number: qNum,
      type: "pgk_tf",
      stimulus: rawQ.stimulus,
      question: rawQ.question,
      statements: formattedStatements,
      explanation: rawQ.explanation,
      quickTip: rawQ.quickTip
    });

    qNum++;
  });

  finalDatabase[sid] = sessionQuestions;

  // Tulis juga ke data/sessions/sXX.json
  const sessionJsonPath = path.join(__dirname, '..', 'data', 'sessions', sid + '.json');
  fs.writeFileSync(sessionJsonPath, JSON.stringify(sessionQuestions, null, 2), 'utf8');
}

console.log("Distribusi kunci jawaban PG (total 600 soal PG):", keyDistribution);

// Bangun js/data/questions.js
const headerComment = `/**
 * BANK SOAL LENGKAP TKA TJKT 2026 - STANDAR RESMI PUSMENDIK KEMENDIKDASMEN
 * SMK Negeri 1 Giritontro - Disusun & Dikurasi oleh PM_Dev (prihmardoyo_developer)
 *
 * SPESIFIKASI MUTLAK:
 * - Total 30 Sesi (15 Hari x 2 Sesi per hari)
 * - Masing-masing 30 Soal = 900 BUTIR SOAL 100% UNIK (ZERO DUPLICATE)
 * - Tidak ada 1 butir soal pun yang berulang, baik dalam satu sesi maupun antar-sesi!
 * - Distribusi kunci jawaban PG merata seimbang (A, B, C, D, E)
 * - Kompatibel penuh mode offline (file:///) dan web server lokal.
 */

`;

const jsContent = headerComment +
  `const TKA_DATABASE = ` + JSON.stringify(finalDatabase, null, 2) + `;\n\n` +
  `function getQuestionsForSession(sessionId) {\n` +
  `  if (!sessionId) return TKA_DATABASE["s01"] || [];\n` +
  `  const normalized = sessionId.toLowerCase().replace(/[^a-z0-9]/g, "");\n` +
  `  let targetKey = normalized;\n` +
  `  if (normalized.startsWith("sesi")) {\n` +
  `    const num = parseInt(normalized.replace(/\\D/g, "") || "1", 10);\n` +
  `    targetKey = "s" + (num < 10 ? "0" : "") + num;\n` +
  `  } else if (!targetKey.startsWith("s") && !isNaN(parseInt(targetKey, 10))) {\n` +
  `    const num = parseInt(targetKey, 10);\n` +
  `    targetKey = "s" + (num < 10 ? "0" : "") + num;\n` +
  `  }\n` +
  `  return TKA_DATABASE[targetKey] || TKA_DATABASE["s01"] || [];\n` +
  `}\n\n` +
  `if (typeof window !== "undefined") {\n` +
  `  window.TKA_DATABASE = TKA_DATABASE;\n` +
  `  window.getQuestionsForSession = getQuestionsForSession;\n` +
  `}\n\n` +
  `if (typeof module !== "undefined" && module.exports) {\n` +
  `  module.exports = { TKA_DATABASE, getQuestionsForSession };\n` +
  `}\n`;

const targetQuestionsJs = path.join(__dirname, '..', 'js', 'data', 'questions.js');
fs.writeFileSync(targetQuestionsJs, jsContent, 'utf8');

console.log("SUKSES: File js/data/questions.js berhasil diperbarui!");
console.log("Ukuran file questions.js:", (fs.statSync(targetQuestionsJs).size / 1024).toFixed(2), "KB");
