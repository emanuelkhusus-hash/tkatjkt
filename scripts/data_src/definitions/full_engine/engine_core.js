// scripts/data_src/definitions/full_engine/engine_core.js
// UTILITY CORE BUILDER UNTUK MERAKIT 30 SOAL PER SESI
// 20 PG, 5 MCMA, 5 TF dengan Kunci & Opsi Dinamis Terdistribusi Merata

function buildQuestionsForSession(sessionId, pgList, mcmaList, tfList) {
  if (pgList.length !== 20) throw new Error(`${sessionId}: PG length must be 20, got ${pgList.length}`);
  if (mcmaList.length !== 5) throw new Error(`${sessionId}: MCMA length must be 5, got ${mcmaList.length}`);
  if (tfList.length !== 5) throw new Error(`${sessionId}: TF length must be 5, got ${tfList.length}`);

  const letters = ["A", "B", "C", "D", "E"];

  // 1. Process 20 PG
  const formattedPg = pgList.map((item, idx) => {
    const qNum = idx + 1;
    const choices = [
      { text: item.correctText, isCorrect: true },
      ...item.distractors.map(d => ({ text: d, isCorrect: false }))
    ];

    // Seeded-like or random shuffle
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    let key = "A";
    const options = choices.map((c, cIdx) => {
      const letter = letters[cIdx];
      if (c.isCorrect) key = letter;
      return { id: letter, text: c.text };
    });

    return {
      id: `${sessionId}_q${qNum}`,
      number: qNum,
      type: "pg",
      stimulus: item.stimulus,
      question: item.question,
      options: options,
      key: key,
      explanation: item.explanation,
      quickTip: item.quickTip
    };
  });

  // 2. Process 5 MCMA
  const formattedMcma = mcmaList.map((item, idx) => {
    const qNum = 21 + idx;
    const choices = [...item.options];

    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    const correctLetters = [];
    const options = choices.map((c, cIdx) => {
      const letter = letters[cIdx];
      if (c.isCorrect) correctLetters.push(letter);
      return { id: letter, text: c.text };
    });

    return {
      id: `${sessionId}_q${qNum}`,
      number: qNum,
      type: "pgk_mcma",
      stimulus: item.stimulus,
      question: item.question,
      options: options,
      key: correctLetters.sort(),
      explanation: item.explanation,
      quickTip: item.quickTip
    };
  });

  // 3. Process 5 TF
  const formattedTf = tfList.map((item, idx) => {
    const qNum = 26 + idx;
    return {
      id: `${sessionId}_q${qNum}`,
      number: qNum,
      type: "pgk_tf",
      stimulus: item.stimulus,
      question: item.question,
      statements: item.statements.map((st, sIdx) => ({
        id: `st${sIdx + 1}`,
        text: st.text,
        correct: st.correct
      })),
      explanation: item.explanation,
      quickTip: item.quickTip
    };
  });

  return [...formattedPg, ...formattedMcma, ...formattedTf];
}

module.exports = {
  buildQuestionsForSession
};
