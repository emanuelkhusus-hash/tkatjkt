// scripts/generators/helpers.js
// Utility helper functions untuk membuat soal standar Pusmendik

function makePg(number, stimulus, question, correctText, distractors, explanation, quickTip) {
  const letters = ["A", "B", "C", "D", "E"];
  const allChoices = [
    { text: correctText, isCorrect: true },
    ...distractors.map(d => ({ text: d, isCorrect: false }))
  ];

  // Acak posisi pilihan jawaban dengan algoritma Fisher-Yates
  for (let i = allChoices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allChoices[i], allChoices[j]] = [allChoices[j], allChoices[i]];
  }

  let correctLetter = "A";
  const options = allChoices.map((c, idx) => {
    const letter = letters[idx];
    if (c.isCorrect) correctLetter = letter;
    return { id: letter, text: c.text };
  });

  return {
    number,
    type: "pg",
    stimulus,
    question,
    options,
    key: correctLetter,
    explanation,
    quickTip
  };
}

function makeMcma(number, stimulus, question, optionsWithCorrectness, explanation, quickTip) {
  const letters = ["A", "B", "C", "D", "E"];
  const cloned = [...optionsWithCorrectness];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }

  const correctLetters = [];
  const options = cloned.map((c, idx) => {
    const letter = letters[idx];
    if (c.isCorrect) correctLetters.push(letter);
    return { id: letter, text: c.text };
  });

  return {
    number,
    type: "pgk_mcma",
    stimulus,
    question,
    options,
    key: correctLetters.sort(),
    explanation,
    quickTip
  };
}

function makeTf(number, stimulus, question, statements, explanation, quickTip) {
  return {
    number,
    type: "pgk_tf",
    stimulus,
    question,
    statements: statements.map((st, idx) => ({
      id: `st${idx + 1}`,
      text: st.text,
      correct: st.correct // "B" atau "S"
    })),
    explanation,
    quickTip
  };
}

module.exports = {
  makePg,
  makeMcma,
  makeTf
};
