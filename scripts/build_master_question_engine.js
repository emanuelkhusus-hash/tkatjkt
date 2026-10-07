// scripts/build_master_question_engine.js
// SISTEM ENGINE OTOMATIS GENERATOR 900 SOAL UNIK STANDAR PUSMENDIK
// Menghasilkan 30 File JSON Terpisah di folder /data/sessions/ (s01.json s.d. s30.json)

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('./data_src/sessions_plan');
const { makePg, makeMcma, makeTf } = require('./generators/helpers');
const { createSessionQuestions } = require('./generators/builder_util');

console.log("=== SISTEM BUILD MASTER BANK SOAL 900 BUTIR PUSMENDIK ===");
