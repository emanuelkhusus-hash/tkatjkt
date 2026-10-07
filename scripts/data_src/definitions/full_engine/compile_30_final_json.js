// scripts/data_src/definitions/full_engine/compile_30_final_json.js
// COMPILER EKSEKUTIF UNTUK MERAKIT 30 SESI x 30 SOAL = 900 SOAL UNIK STANDAR PUSMENDIK
// Menghasilkan data/sessions/s01.json s.d. s30.json

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('../../sessions_plan');
const { buildQuestionsForSession } = require('./engine_core');

console.log("Inisialisasi compile_30_final_json.js...");
