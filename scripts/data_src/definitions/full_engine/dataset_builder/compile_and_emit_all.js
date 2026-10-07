// scripts/data_src/definitions/full_engine/dataset_builder/compile_and_emit_all.js
// COMPILER EKSEKUTIF PENUH: MENGHASILKAN 30 FILE JSON (900 SOAL UNIK STANDAR PUSMENDIK)
// Memverifikasi dan mengeluarkan ke data/sessions/s01.json s.d. s30.json

const fs = require('fs');
const path = require('path');
const { SESSIONS_PLAN } = require('../../../sessions_plan');
const { buildQuestionsForSession } = require('../engine_core');

const s01 = require('../../../sessions/s01.js');
const s02 = require('../../../batches/batch_s02_s06.js')['s02'];
const s03 = require('../../../curated/data_s03.js');
const { s04 } = require('../../../curated_all/modules/mod_s04_s06.js');
const s05 = require('../../banks/bank_s05.js');
const s06 = require('../packs/pack_s06_s10.js')['s06'];

console.log("Menyiapkan generator 900 soal...");
