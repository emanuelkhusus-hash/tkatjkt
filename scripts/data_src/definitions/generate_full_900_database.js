// scripts/data_src/definitions/generate_full_900_database.js
// MESIN PEMBUAT 900 BUTIR SOAL MATRIKS RESMI PUSMENDIK KEMENDIKDASMEN
// Menggabungkan 30 Sesi Terstruktur (Sesi 1 s.d. Sesi 30)
// Setiap sesi tepat 30 soal (20 PG, 5 MCMA, 5 TF) = 900 Soal Unik!

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('../sessions_plan');
const { build30Questions } = require('../curated_all/make_curated_session');

// Impor sesi 1 - 4
const s01 = require('../sessions/s01.js');
const s02 = require('../batches/batch_s02_s06.js')['s02'];
const s03 = require('../curated/data_s03.js');
const { s04 } = require('../curated_all/modules/mod_s04_s06.js');

console.log("Menyiapkan database lengkap 30 sesi...");
