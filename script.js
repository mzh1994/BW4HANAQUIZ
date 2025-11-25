// QUESTIONS (you can replace this with JSON fetch later)
const questions = [
  {
    id: 1,
    text: "What are the prerequisites for deleting business partner attribute master data in SAP BW/4HANA? Note: 2 correct answers.",
    options: {
      A: "There must be no transaction data referring to the values.",
      B: "No hierarchical data must reference the values.",
      C: "No BW query uses business partner as a free characteristic.",
      D: "No analysis authorizations reference the values."
    },
    correct: ["A", "B"]
  },
  {
    id: 2,
    text: "Which layer in the LSA++ architecture is mainly responsible for virtual data models?",
    options: {
      A: "Open ODS Layer",
      B: "Corporate Memory Layer",
      C: "Virtualization Layer",
      D: "Reporting Layer"
    },
    correct: "C"
  }
];

// STATE
let mode = null;
let currentIndex = 0;
let userAnswers = {};

function getCorrectArray(q) {
  return Array.isArray(q.correct) ? q.correct : [q.correct];
}

function startQuiz(m) {
  mode = m;
  currentIndex = 0;
  userAnswers = {};
  document.getElementById("mode-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("finish-btn").classList.toggle("hidden", mode !== "exam");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  const correctArr = getCorrectArray(q);
  const isMulti = correctArr.length > 1;

  document.getElementById("mode-label").textContent =
    mode === "practice" ? "Practice Mode" : "Exam Mode";

  document.getElementById("question-counter").textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;

  document.getElementById("question-text").textContent = q.text;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  const saved = userAnswers[q.id] || [];

  Object.entries(q.options).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "sap-option-row";

    // SAP radio for single, SAP checkbox for multi
    const input = document.createElement("input");
    input.type = isMulti ? "checkbox" : "radio";
    input.name = `q_${q.id}`;
    input.value = key;

    if (saved.includes(key)) input.checked = true;

    input.onclick = (e) => {
      e.stopPropagation();
      selectOption(q, key);
    };

    row.onclick = () => selectOption(q, key);

    row.appendChild(input);
    row.appendChild(document.createTextNode(`${key}. ${value}`));

    container.appendChild(row);
  });

  updateNavLock(q);
}

function selectOption(q, key) {
  const correctArr = getCorrectArray(q);
  const isMulti = correctArr.length > 1;
  const required = correctArr.length;

  let selected = userAnswers[q.id] || [];

  if (isMulti) {
    // toggle checkbox unless exceeding required number
    if (selected.includes(key)) {
      selected = selected.filter(x => x !== key);
    } else {
      if (selected.length >= required) {
        alert(`You must select exactly ${required} answer(s).`);
        return;
      }
      selected.push(key);
    }
  } else {
    selected = [key]; // radio
  }

  userAnswers[q.id] = selected;
  renderQuestion();
}

function updateNavLock(q) {
  const correctArr = getCorrectArray(q);
  const required = correctArr.length;
  const selected = userAnswers[q.id] || [];

  const lock = required > 1 && selected.length !== required;

  document.getElementById("prev-btn").disabled = currentIndex === 0;
  document.getElementById("next-btn").disabled =
    currentIndex === questions.length - 1 || lock;

  if (mode === "exam") {
    document.getElementById("finish-btn").disabled = lock;
  }
}

function nextQuestion() {
  currentIndex++;
  renderQuestion();
}

function prevQuestion() {
  currentIndex--;
  renderQuestion();
}

function finishExam() {
  finished = true;

  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let correctCount = 0;

  // Build 1990s Excel-style table
  let reportText = "";
  reportText += "+----+----------------------+----------------------+--------+\n";
  reportText += "| Q# | Your Answers         | Correct Answers      | Result |\n";
  reportText += "+----+----------------------+----------------------+--------+\n";

  questions.forEach((q, index) => {
    const selected = userAnswers[q.id] || [];
    const correctArr = getCorrectArray(q);

    const isCorrect =
      selected.length === correctArr.length &&
      selected.every(a => correctArr.includes(a));

    if (isCorrect) correctCount++;

    const yourAns = (selected.join(" ") || "").padEnd(20);
    const correctAns = correctArr.join(" ").padEnd(20);
    const status = isCorrect ? "PASS " : "FAIL ";

    reportText += `| ${String(index + 1).padStart(2)} | ${yourAns} | ${correctAns} | ${status}|\n`;
  });

  const total = questions.length;
  const percent = Math.round((correctCount / total) * 100);

  reportText += "+----+----------------------+----------------------+--------+\n";
  reportText += `TOTAL SCORE: ${correctCount} / ${total}  (${percent}%)\n`;

  // Display the table
  const reportContainer = document.getElementById("detailed-report");
  reportContainer.innerHTML = `<pre style="font-family: 'Courier New', monospace; font-size: 14px;">${reportText}</pre>`;

  document.getElementById("score-summary").textContent =
    `Score: ${correctCount}/${total} (${percent}%)`;
}



function restart() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("mode-screen").classList.remove("hidden");
}
