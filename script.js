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
  },
  {
    "id": 10,
    "text": "You want to access data from a table residing in an external database using an SAP HANA SDA remote source. Which other SAP HANA element is required to access its data?",
    "options": {
      "A": "Replication Task",
      "B": "Flowgraph",
      "C": "Table Function",
      "D": "Virtual Table"
    },
    "correct": "D"
  },
  {
    "id": 11,
    "text": "You are involved in an SAP BW/4HANA project focusing on General Ledger reporting and want to use the SAP ERP standard Data Source 0FI_GL_14 (New GL Items), which is not active in your SAP ERP system. Which transactions can be used to activate this Data Source? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Transaction RSORBCT (Data Warehousing Workbench: BI Content) in the SAP BW/4HANA system",
      "B": "RSA5 (Installation of Data Source from Business Content) in the SAP ERP system",
      "C": "Transaction RSDS (Data Source Repository) in the SAP BW/4HANA system",
      "D": "Transaction RSA2 (Data Source Repository) in the SAP ERP system"
    },
    "correct": ["A", "D"]
  },
  {
    "id": 12,
    "text": "You created a generic Data Source in SAP ERP, but did not release the Data Source for Operational Data Provisioning (ODP). What is the effect in SAP BW/4HANA?",
    "options": {
      "A": "The ODP Data Source has to be created using the ODP HANA source system type.",
      "B": "The ODP Data Source can be generated using the Dataflow generation feature.",
      "C": "The ODP Data Source cannot be replicated using the ODP_SAP source system type.",
      "D": "The ODP Data Source must be created using the ODP_SAP source system type."
    },
    "correct": "C"
  },
  {
    "id": 13,
    "text": "Which of the following are possible delta-specific fields for a generic Data Source in SAP ERP? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Calendar day",
      "B": "Time stamp Request ID",
      "C": "Numeric pointer",
      "D": "Record mode"
    },
    "correct": ["A", "B", "C"]
  },
  {
    "id": 14,
    "text": "You created an Open ODS View on an SAP HANA database table to virtually consume the data in SAP BW/4HANA. Real-time reporting requirements have now changed and you are asked to persist the data in SAP BW/4HANA. Which objects are created when using the \"Generate Data Flow\" function in the Open ODS View editor? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Data Store object (advanced)",
      "B": "SAP HANA calculation view",
      "C": "Composite Provider",
      "D": "Transformation",
      "E": "Data source"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 15,
    "text": "In a Datastore object (advanced) of type Data Mart, which request-based deletion is possible?",
    "options": {
      "A": "Only the most recent request in the active data table",
      "B": "Any not activated request in the inbound table",
      "C": "Any request in the active data table",
      "D": "Only the most recent not activated request in the inbound table"
    },
    "correct": "B"
  },
  {
    "id": 16,
    "text": "You use a measure with semantic type \"Amount with Currency Code\" in your SAP HANA HDI calculation view. Which kind of currency reference can be assigned to the measure? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Another column of the same SAP HANA view",
      "B": "A variable in the same SAP HANA view",
      "C": "A column from another SAP HANA view",
      "D": "A fixed currency from table TCURC"
    },
    "correct": []
  },
  {
    "id": 17,
    "text": "You want to build a web-based dashboard with interactive visualizations using scripting. Which SAP tool can you use to create this?",
    "options": {
      "A": "SAP Crystal Reports",
      "B": "SAP Smart Business Cockpits",
      "C": "SAP Analytics Cloud",
      "D": "SAP BusinessObjects Web Intelligence"
    },
    "correct": "C"
  },
  {
    "id": 18,
    "text": "Which SAP solutions can leverage the Write Interface for Datastore objects (advanced) to push data into the inbound table of Datastore objects (advanced)? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "SAP Data Services",
      "B": "SAP Datasphere",
      "C": "SAP Landscape Transformation Replication Server",
      "D": "SAP Process Integration"
    },
    "correct": ["C", "D"]
  },
  {
    "id": 19,
    "text": "Which source types are available to create a generic Data Source in SAP ERP? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "SAP query",
      "B": "ABAP managed database procedure",
      "C": "ABAP class method",
      "D": "Database view",
      "E": "ABAP function module"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 20,
    "text": "Which node type is available for both graphical modeling of SAP HANA HDI Calculation Views (XS Advanced) and SAP HANA Calculation Views (XS Classic)?",
    "options": {
      "A": "Graph",
      "B": "Rank",
      "C": "Non Equi Join",
      "D": "Minus"
    },
    "correct": "B"
  },
  {
    "id": 21,
    "text": "Which join types can you use in a Composite Provider? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Temporal hierarchy joins",
      "B": "Referential join",
      "C": "Inner join",
      "D": "Text join",
      "E": "Full Outer join"
    },
    "correct": ["B", "C", "E"]
  },
  {
    "id": 22,
    "text": "You define a remote subscription of type UPSERT in an SAP HANA Smart Data Integration (SDI) real-time update scenario. Which fields are added to the DataSource automatically? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "SDI_CHANGE_SEQUENCE",
      "B": "SDI_ENTITY_COUNTER",
      "C": "SDI_CHANGE_TIME",
      "D": "SDI_CHANGE_TYPE",
      "E": "SDI_RECORD_MODE"
    },
    "correct": ["A", "C", "D"]
  },
  {
    "id": 23,
    "text": "Which SAP BW/4HANA objects support the feature of generating an external SAP HANA View? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Semantic group object",
      "B": "Open ODS view",
      "C": "Composite Provider",
      "D": "BW query"
    },
    "correct": ["B", "D"]
  },
  {
    "id": 24,
    "text": "How does integrating Databricks within SAP Business Data Cloud reduce IT overhead for customers?",
    "options": {
      "A": "By streamlining data governance processes and minimizing the need for complex data security configurations",
      "B": "By eliminating the need for rebuilding data structures and business logic externally",
      "C": "By automating data ingestion pipelines",
      "D": "By providing pre-built connectors to various data sources"
    },
    "correct": "A"
  },
  {
    "id": 25,
    "text": "What are the possible ways to fill a pre-calculated value set (bucket)? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "By using a query (update value set by query)",
      "B": "By using a transformation and data transfer process (DTP)",
      "C": "By accessing an SAP HANA HDI Calculation View of data category Dimension",
      "D": "By entering the values manually",
      "E": "By referencing a table"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 26,
    "text": "How can the delta merge process be initiated in SAP BW/4HANA? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "By setting a specific flag in the transformation",
      "B": "By using a specific process type in a process chain",
      "C": "By setting a specific flag in the data transfer process",
      "D": "By using the SAP BW/4HANA data load monitor"
    },
    "correct": ["B", "C"]
  },
  {
    "id": 27,
    "text": "Which are the purposes of the Open Operational Data Store layer in the layered scalable architecture (LSA++) of SAP BW/4HANA? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Transformations on data based on business logic",
      "B": "Real-time reporting on source system data without staging",
      "C": "Initial staging of source system data",
      "D": "Harmonization of data from several source systems"
    },
    "correct": ["C", "D"]
  },
  {
    "id": 28,
    "text": "For a report, you would like to highlight the deviation from predefined threshold values for a key figure. Which BW query feature do you use?",
    "options": {
      "A": "Condition",
      "B": "Exception",
      "C": "Formula cell",
      "D": "Key figure property"
    },
    "correct": "B"
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


