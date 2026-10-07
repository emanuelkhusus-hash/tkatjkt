// scripts/data_src/definitions/full_engine/dataset_builder/generate_all_900_final.js
// COMPILER GENERATOR 900 SOAL MATRIKS RESMI PUSMENDIK KEMENDIKDASMEN
// Menghasilkan 30 File JSON Sesi (data/sessions/s01.json s.d. s30.json)
// Masing-masing tepat 30 butir soal: 20 PG, 5 MCMA, 5 TF (Total 900 Unik)

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('../../../sessions_plan');
const { buildQuestionsForSession } = require('../engine_core');

// Impor sesi 1 - 7 yang sudah ada
const s01 = require('../../../sessions/s01.js');
const s02 = require('../../../batches/batch_s02_s06.js')['s02'];
const s03 = require('../../../curated/data_s03.js');
const { s04 } = require('../../../curated_all/modules/mod_s04_s06.js');
const s05 = require('../../banks/bank_s05.js');
const s06 = require('../packs/pack_s06_s10.js')['s06'];
const { gen_s07 } = require('./session_generators/gen_s07_s10.js');

console.log("Inisialisasi Compiler Utama 900 Soal...");
