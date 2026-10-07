// scripts/generators/builder_util.js
// Utility builder untuk membangun 30 butir soal lengkap per sesi (20 PG, 5 MCMA, 5 TF)

const { makePg, makeMcma, makeTf } = require('./helpers');

function createSessionQuestions(sessionId, pgItems, mcmaItems, tfItems) {
  if (pgItems.length !== 20) {
    throw new Error(`Sesi ${sessionId} membutuhkan tepat 20 soal PG, tapi menerima ${pgItems.length}`);
  }
  if (mcmaItems.length !== 5) {
    throw new Error(`Sesi ${sessionId} membutuhkan tepat 5 soal MCMA, tapi menerima ${mcmaItems.length}`);
  }
  if (tfItems.length !== 5) {
    throw new Error(`Sesi ${sessionId} membutuhkan tepat 5 soal TF, tapi menerima ${tfItems.length}`);
  }

  // Buat 20 PG
  const formattedPg = pgItems.map((item, idx) => {
    return makePg(
      idx + 1,
      item.stimulus,
      item.question,
      item.correctText,
      item.distractors,
      item.explanation,
      item.quickTip
    );
  });

  // Buat 5 MCMA
  const formattedMcma = mcmaItems.map((item, idx) => {
    return makeMcma(
      21 + idx,
      item.stimulus,
      item.question,
      item.options,
      item.explanation,
      item.quickTip
    );
  });

  // Buat 5 TF
  const formattedTf = tfItems.map((item, idx) => {
    return makeTf(
      26 + idx,
      item.stimulus,
      item.question,
      item.statements,
      item.explanation,
      item.quickTip
    );
  });

  // Gabungkan 30 soal terurut
  const questions = [...formattedPg, ...formattedMcma, ...formattedTf].map((q, idx) => {
    return {
      id: `${sessionId}_q${idx + 1}`,
      number: idx + 1,
      ...q
    };
  });

  return questions;
}

module.exports = {
  createSessionQuestions
};
