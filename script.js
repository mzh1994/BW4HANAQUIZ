// QUESTIONS (you can replace this with JSON fetch later)
const questions = [
  {
    "id": 1,
    "text": "What are the prerequisites for deleting business partner attribute master data in SAP BW/4HANA? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "There must be no transaction data in a Datastore Object (advanced) referring to business partner values that should be deleted.",
      "B": "In SAP BW/4HANA, there must be no hierarchical data related to business partner values that should be deleted.",
      "C": "There must be no BW query as Info der in SAP BW/4HANA that uses business partner as a free characteristic.",
      "D": "In SAP BW/4HANA, there must be no analysis authorizations related to business partner values that should be deleted."
    },
    "correct": ["A", "B"]
  },
  {
    "id": 2,
    "text": "What are the main challenges companies face when they want to make data-driven decisions? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Harness the power of fragmented, unstructured data sources to turn them into valuable business insights.",
      "B": "Uncover the hidden potential in their business by unlocking seamless access to critical insights.",
      "C": "Boost confidence in the quality of their data.",
      "D": "Simplify the data landscape to reduce costs and accelerate insights.",
      "E": "Unlock a new dimension of insights, advanced analytics, and AI capabilities."
    },
    "correct": ["A", "C", "D"]
  },
  {
    "id": 3,
    "text": "You create a report with SAP Crystal Reports for Enterprise and need an analysis view as a data source. Which tool can you use to create this analysis view?",
    "options": {
      "A": "SAP BusinessObjects Web Intelligence",
      "B": "SAP Crystal Reports for Enterprise",
      "C": "SAP Lumira, designer edition",
      "D": "SAP Analysis for Microsoft Office"
    },
    "correct": "C"
  },
  {
    "id": 4,
    "text": "For which scenarios do you use the SAP HANA model focus? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Define calculations using geospatial functions",
      "B": "Load snapshots using ABAP CDS Views",
      "C": "Build views and procedures using SQL script",
      "D": "Define ABAP Managed Database Procedures in data flows"
    },
    "correct": ["A", "C"]
  },
  {
    "id": 5,
    "text": "Which of the Augmented Analytics Smart Features in SAP Analytics Cloud generates multi-tabbed stories with Overview, Key Influencers, Unexpected Values, and Simulation tabs?",
    "options": {
      "A": "Smart Discovery",
      "B": "Smart Predict",
      "C": "Search to Insight",
      "D": "Predictive Forecast"
    },
    "correct": "A"
  },
  {
    "id": 6,
    "text": "How does SAP Business Data Cloud facilitate the use of diverse data sources for AI-powered analytics?",
    "options": {
      "A": "By centralizing data from both SAP and non-SAP sources into a unified semantic layer",
      "B": "By integrating diverse data sources through custom APIs",
      "C": "By providing a secure platform for storing and managing diverse data sets",
      "D": "By transforming raw data from diverse urces into a standardized format"
    },
    "correct": "A"
  },
  {
    "id": 7,
    "text": "What does a Composite Provider allow you to do in SAP BW/4HANA? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Create new calculated fields",
      "B": "Define new restricted key figures",
      "C": "Combine Info Providers using Joins and Unions",
      "D": "Integrate SAP HANA calculation views",
      "E": "Join two ABAP CDS views"
    },
    "correct": ["A", "C", "D"]
  },
  {
    "id": 8,
    "text": "For which requirements do you suggest an SAP HANA modeling focus rather than an SAP BW/4HANA modeling focus? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Leveraging SQL in-house knowledge",
      "B": "Reporting on a harmonized set of master data",
      "C": "Loading snapshots or deltas from different sources on a periodic basis",
      "D": "Finding the best match using a fuzzy search"
    },
    "correct": ["A", "D"]
  },
  {
    "id": 9,
    "text": "Which layer of the layered scalable architecture (LSA++) of SAP BW/4HANA is designed as the main storage for harmonized consistent data?",
    "options": {
      "A": "Virtual Data Mart layer",
      "B": "Open Operational Data Store layer",
      "C": "Data Acquisition layer",
      "D": "Flexible Enterprise Data Warehouse Core layer"
    },
    "correct": "D"
  }
]
;

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

