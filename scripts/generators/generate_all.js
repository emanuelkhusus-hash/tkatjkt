// scripts/generators/generate_all.js
// Master Generator 900 Soal Unik TKA TJKT 2026
// Menjalankan pembuatan 30 file JSON sesi di folder data/sessions/

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('../data_src/sessions_plan');
const { createSessionQuestions } = require('./builder_util');

const outputDir = path.join(__dirname, '../../data/sessions');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("=== MEMULAI GENERASI 900 BUTIR SOAL TKA TJKT STANDAR PUSMENDIK ===");
console.log(`Target Direktori: ${outputDir}`);
