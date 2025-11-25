// STATE
let questions = [];
let currentIndex = 0;
let userAnswers = {};
let revealedQuestions = new Set(); // questions where user clicked "Show Answer"
let questionsLoaded = false;

function getCorrectArray(q) {
  return Array.isArray(q.correct) ? q.correct : [q.correct];
}

// Load questions.json on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  fetch("questions.json")
    .then((res) => res.json())
    .then((data) => {
      // Ensure sorted by id
      questions = data.slice().sort((a, b) => (a.id || 0) - (b.id || 0));
      questionsLoaded = true;

      document.getElementById("total-questions").textContent =
        `Total Questions: ${questions.length}`;

      renderQuestion();
      buildAllQuestionsViews(); // for result screen and side panel
    })
    .catch((err) => {
      console.error("Error loading questions.json:", err);
      const qt = document.getElementById("question-text");
      if (qt) {
        qt.textContent = "Failed to load questions. Please check questions.json.";
      }
    });
});

function renderQuestion() {
  if (!questionsLoaded || questions.length === 0) return;

  const q = questions[currentIndex];
  const correctArr = getCorrectArray(q);
  const isMulti = correctArr.length > 1;

  // Meta info
  const counterEl = document.getElementById("question-counter");
  const progressInner = document.getElementById("progress-bar-inner");

  counterEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  if (progressInner) {
    progressInner.style.width = `${progressPercent}%`;
  }

  // Question text
  const qTextEl = document.getElementById("question-text");
  qTextEl.textContent = q.text;

  // Options
  const container = document.getElementById("options-container");
  container.innerHTML = "";

  const saved = userAnswers[q.id] || [];
  const reveal = revealedQuestions.has(q.id);

  Object.entries(q.options).forEach(([key, value]) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "sap-option-row";

    // Input icon replacement with custom bullet / indicator
    const input = document.createElement("span");
    input.className = isMulti ? "option-indicator checkbox" : "option-indicator radio";

    if (saved.includes(key)) {
      row.classList.add("selected");
    }

    // Mark correct / incorrect if revealed
    if (reveal) {
      const isCorrect = correctArr.includes(key);
      const isSelected = saved.includes(key);
      if (isCorrect) {
        row.classList.add("correct");
      }
      if (isSelected && !isCorrect) {
        row.classList.add("incorrect");
      }
    }

    const label = document.createElement("span");
    label.className = "option-text";
    label.textContent = `${key}. ${value}`;

    row.appendChild(input);
    row.appendChild(label);

    row.onclick = () => selectOption(q, key);
    container.appendChild(row);
  });

  updateNavState(q);
  updateFeedback(q);
}

function selectOption(q, key) {
  const correctArr = getCorrectArray(q);
  const isMulti = correctArr.length > 1;
  const required = correctArr.length;

  let selected = userAnswers[q.id] || [];

  if (isMulti) {
    if (selected.includes(key)) {
      selected = selected.filter((x) => x !== key);
    } else {
      // allow up to required answers
      if (selected.length >= required) {
        // still keep a gentle guard; no alert spam
        return;
      }
      selected.push(key);
    }
  } else {
    selected = [key];
  }

  userAnswers[q.id] = selected;
  renderQuestion();
}

// Navigation buttons and lock if multi-question under-selected
function updateNavState(q) {
  const correctArr = getCorrectArray(q);
  const required = correctArr.length;
  const selected = userAnswers[q.id] || [];

  const lock = required > 1 && selected.length === 0; // basic guard, but still allow navigation mostly

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const finishBtn = document.getElementById("finish-btn");

  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  if (nextBtn) nextBtn.disabled = currentIndex === questions.length - 1;
  if (finishBtn) finishBtn.disabled = lock;
}

function updateFeedback(q) {
  const feedbackEl = document.getElementById("feedback");
  if (!feedbackEl) return;

  if (!revealedQuestions.has(q.id)) {
    feedbackEl.textContent = "";
    feedbackEl.className = "sap-feedback";
    return;
  }

  const selected = userAnswers[q.id] || [];
  const correctArr = getCorrectArray(q);

  const isCorrect =
    selected.length === correctArr.length &&
    selected.every((a) => correctArr.includes(a));

  if (isCorrect) {
    feedbackEl.textContent = "Correct ✅";
    feedbackEl.className = "sap-feedback feedback-correct";
  } else {
    const correctStr = correctArr.join(", ");
    feedbackEl.textContent = `Correct answer(s): ${correctStr}`;
    feedbackEl.className = "sap-feedback feedback-incorrect";
  }
}

function nextQuestion() {
  if (!questionsLoaded) return;
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (!questionsLoaded) return;
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

// Replaces "Practice Mode" concept
function showAnswer() {
  if (!questionsLoaded) return;
  const q = questions[currentIndex];
  revealedQuestions.add(q.id);
  renderQuestion();
}

// Finish exam and show scrollable list
function finishExam() {
  if (!questionsLoaded) return;

  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  if (quizScreen) quizScreen.classList.add("hidden");
  if (resultScreen) resultScreen.classList.remove("hidden");

  // Score summary
  let correctCount = 0;

  questions.forEach((q) => {
    const selected = userAnswers[q.id] || [];
    const correctArr = getCorrectArray(q);
    const isCorrect =
      selected.length === correctArr.length &&
      selected.every((a) => correctArr.includes(a));

    if (isCorrect) correctCount++;
  });

  const total = questions.length;
  const percent = Math.round((correctCount / total) * 100);

  const scoreSummary = document.getElementById("score-summary");
  if (scoreSummary) {
    scoreSummary.textContent = `Score: ${correctCount} / ${total} (${percent}%)`;
  }

  // Ensure all Q & A views are built
  buildAllQuestionsViews();
}

// Build scrollable list for result screen and panel
function buildAllQuestionsViews() {
  if (!questionsLoaded || questions.length === 0) return;

  const containerMain = document.getElementById("all-questions-container");
  const containerPanel = document.getElementById("all-questions-panel-container");

  if (!containerMain && !containerPanel) return;

  const buildHTML = () => {
    const fragment = document.createDocumentFragment();

    questions.forEach((q, idx) => {
      const correctArr = getCorrectArray(q);
      const selected = userAnswers[q.id] || [];

      const card = document.createElement("div");
      card.className = "qa-card";

      const qTitle = document.createElement("div");
      qTitle.className = "qa-question-title";
      qTitle.textContent = `Q${idx + 1}. ${q.text}`;
      card.appendChild(qTitle);

      const qOptions = document.createElement("ul");
      qOptions.className = "qa-options";

      Object.entries(q.options).forEach(([key, value]) => {
        const li = document.createElement("li");
        li.className = "qa-option";

        const isCorrect = correctArr.includes(key);
        const isSelected = selected.includes(key);

        if (isCorrect) li.classList.add("qa-option-correct");
        if (isSelected && !isCorrect) li.classList.add("qa-option-selected-wrong");
        if (isSelected && isCorrect) li.classList.add("qa-option-selected-correct");

        li.textContent = `${key}. ${value}`;
        qOptions.appendChild(li);
      });

      card.appendChild(qOptions);

      const answerLine = document.createElement("div");
      answerLine.className = "qa-answer-line";
      answerLine.textContent = `Correct: ${correctArr.join(", ")}${
        selected.length ? ` | Your: ${selected.join(", ")}` : ""
      }`;
      card.appendChild(answerLine);

      fragment.appendChild(card);
    });

    return fragment;
  };

  const fragmentMain = buildHTML();
  const fragmentPanel = buildHTML();

  if (containerMain) {
    containerMain.innerHTML = "";
    containerMain.appendChild(fragmentMain);
  }
  if (containerPanel) {
    containerPanel.innerHTML = "";
    containerPanel.appendChild(fragmentPanel);
  }
}

// Slide-over All Questions panel
function toggleAllQuestionsPanel() {
  const panel = document.getElementById("all-questions-panel");
  if (!panel) return;

  const isHidden = panel.classList.contains("hidden");
  if (isHidden) {
    buildAllQuestionsViews();
    panel.classList.remove("hidden");
  } else {
    panel.classList.add("hidden");
  }
}

// Export PDF of all questions + correct answers
function exportPDF() {
  const element = document.getElementById("all-questions-print");
  if (!element) return;

  // Make sure latest content is there
  buildAllQuestionsViews();

  if (window.html2pdf) {
    const opt = {
      margin: 10,
      filename: "SAP_BW4HANA_Questions_Answers.pdf",
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    window.html2pdf().from(element).set(opt).save();
  } else {
    // Fallback: browser print dialog
    window.print();
  }
}

// Restart quiz
function restart() {
  currentIndex = 0;
  userAnswers = {};
  revealedQuestions = new Set();

  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  if (resultScreen) resultScreen.classList.add("hidden");
  if (quizScreen) quizScreen.classList.remove("hidden");

  renderQuestion();
}
