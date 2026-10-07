// scripts/data_src/build_full_30_sessions.js
// Master Database & Automated Generator 900 Butir Soal Unik TKA TJKT 2026
// Berdasarkan Matriks Asesmen Pusmendik Kemendikdasmen RI
// 30 Sesi x 30 Soal = 900 Soal 100% Unik (20 PG, 5 MCMA, 5 TF)

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('./sessions_plan');
const { makePg, makeMcma, makeTf } = require('../generators/helpers');

console.log("Memulai perancangan 900 soal unik...");
