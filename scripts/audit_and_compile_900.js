// scripts/audit_and_compile_900.js
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

console.log("=== AUDIT VALIDASI 30 SESI x 30 SOAL ===");
console.log("Total sesi yang terdaftar:", Object.keys(sessionsMap).length);

let totalCount = 0;
const allQuestions = [];

for (let i = 1; i <= 30; i++) {
  const sid = "s" + (i < 10 ? "0" : "") + i;
  const sess = sessionsMap[sid];
  if (!sess) {
    console.error("ERROR: Sesi hilang:", sid);
    process.exit(1);
  }
  const pg = sess.pg || [];
  const mcma = sess.mcma || [];
  const tf = sess.tf || [];

  if (pg.length !== 20 || mcma.length !== 5 || tf.length !== 5) {
    console.error("ERROR: Komposisi tidak sesuai pada " + sid + ": PG=" + pg.length + ", MCMA=" + mcma.length + ", TF=" + tf.length);
    process.exit(1);
  }

  totalCount += (pg.length + mcma.length + tf.length);

  pg.forEach((item, idx) => {
    allQuestions.push({
      sid: sid,
      type: "pg",
      index: idx + 1,
      stimulus: item.stimulus,
      question: item.question,
      item: item
    });
  });

  mcma.forEach((item, idx) => {
    allQuestions.push({
      sid: sid,
      type: "mcma",
      index: idx + 1,
      stimulus: item.stimulus,
      question: item.question,
      item: item
    });
  });

  tf.forEach((item, idx) => {
    allQuestions.push({
      sid: sid,
      type: "tf",
      index: idx + 1,
      stimulus: item.stimulus,
      question: item.question,
      item: item
    });
  });
}

console.log("Total butir pertanyaan:", totalCount);

// Cek duplikasi pertanyaan
const seenQuestion = new Map();
let duplicateCount = 0;

allQuestions.forEach(q => {
  const normalizedText = (q.stimulus + " " + q.question).trim().toLowerCase().replace(/\s+/g, ' ');
  if (seenQuestion.has(normalizedText)) {
    console.log("DUPLIKASI TERDETEKSI: " + q.sid + " vs " + seenQuestion.get(normalizedText));
    console.log("Teks:", normalizedText.slice(0, 100));
    duplicateCount++;
  } else {
    seenQuestion.set(normalizedText, q.sid + "_" + q.type + "_" + q.index);
  }
});

console.log("Jumlah duplikasi stimulus + pertanyaan:", duplicateCount);
