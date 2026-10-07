// scripts/data_src/curated_all/generators/gen_all_30_sessions.js
// MASTER HIGH-PRECISION QUESTION COMPILER FOR ALL 30 SESSIONS (900 UNIQUE QUESTIONS)
// Strictly follows BSKAP 046/2025 & Pusmendik Matrix:
// Elemen 1 (Wawasan & Bisnis), Elemen 2 (K3BK, OS, Virtualisasi, Server, Switch, Router),
// Elemen 3 (Media Transmisi UTP/STP/Optik, Topologi, OSI, IPv4, IPv6), Elemen 4 (Alat Ukur OPM, OTDR, Splicer, dll)

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('../../sessions_plan');
const { build30Questions } = require('../make_curated_session');

// Import sessions that already have handcrafted files
const s01Data = require('../../sessions/s01.js');
const s02Data = require('../../batches/batch_s02_s06.js')['s02'];
const s03Data = require('../../curated/data_s03.js');
const { s04 } = require('../modules/mod_s04_s06.js');

console.log("Memulai kompilasi penuh 30 sesi (900 soal)...");
