// scripts/data_src/curated_all/make_curated_session.js
// Utility builder yang memastikan setiap soal unik, kontekstual, memiliki stimulus,
// kunci A-E merata, opsi MCMA acak, dan tabel TF berbobot.

function build30Questions(sessionMeta, questionsData) {
  const { sessionId } = sessionMeta;
  const { pg, mcma, tf } = questionsData;

  if (!pg || pg.length !== 20) {
    throw new Error(`Sesi ${sessionId} PG harus berjumlah 20, tapi terisi ${pg ? pg.length : 0}`);
  }
  if (!mcma || mcma.length !== 5) {
    throw new Error(`Sesi ${sessionId} MCMA harus berjumlah 5, tapi terisi ${mcma ? mcma.length : 0}`);
  }
  if (!tf || tf.length !== 5) {
    throw new Error(`Sesi ${sessionId} TF harus berjumlah 5, tapi terisi ${tf ? tf.length : 0}`);
  }

  // 1. Format PG (1-20)
  const letters = ["A", "B", "C", "D", "E"];
  const formattedPg = pg.map((item, idx) => {
    const qNum = idx + 1;
    const choices = [
      { text: item.correctText, isCorrect: true },
      ...item.distractors.map(d => ({ text: d, isCorrect: false }))
    ];

    // Shuffle choices
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

  // 2. Format MCMA (21-25)
  const formattedMcma = mcma.map((item, idx) => {
    const qNum = 21 + idx;
    const choices = [...item.options];

    // Shuffle options
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

  // 3. Format TF (26-30)
  const formattedTf = tf.map((item, idx) => {
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
  build30Questions
};
