// ==================== KONFIGURATSIYA ====================
const ALLOWED_DEVICES = [
  "DEVC888F3",
  "DEV504090",
  "DEV275D8A",
  "DEV35050F",
  "DEVD511F8",
];
const REACTIVATION_CODE = "1243";
const USERS = {
  student1: { password: "123456", name: "Anvarbek" },
  student2: { password: "123456", name: "Anvarbek" },
  student3: { password: "123456", name: "Anvarbek" },
};

// ==================== GLOBAL O'ZGARUVCHILAR ====================
let currentUser = null;
let currentDeviceId = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let submittedQuestions = new Set();
let questions = [];
let timerInterval = null;
let timeLeft = 50 * 60; // 50 daqiqa
let totalScore = 0;
let examCompleted = localStorage.getItem("exam_locked") === "true";
let chart = null;

// ==================== DEVICE ID OLISH ====================
function getDeviceId() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    let renderer = "unknown";

    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        renderer =
          gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "unknown";
      }
    }

    const screenInfo = `${screen.width}x${screen.height}`;
    const lang = navigator.language;
    const platform = navigator.platform || "unknown";

    const combined = `${renderer}-${screenInfo}-${lang}-${platform}`;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = (hash << 5) - hash + combined.charCodeAt(i);
      hash = hash & hash;
    }

    return "DEV" + Math.abs(hash).toString(16).substring(0, 6).toUpperCase();
  } catch (e) {
    return "DEV" + Math.random().toString(36).substring(2, 8).toUpperCase();
  }
}

// ==================== SAVOLLARNI YUKLASH ====================
function loadQuestions() {
  questions = [
    // TYPE 1 (10 ball) - 25 ta = 250 ball
    {
      id: 1,
      type: 1,
      text: "What is the main function of the Start button in Windows?",
      options: [
        "A. 2",
        "B. 3",
        "C. 1",
        "D. 4",
      ],
      correct: 2,
      maxScore: 10,
      img: "img/s1.jpg",
    },
    {
      id: 2,
      type: 1,
      text: "What does CPU stand for?",
      options: [
        "A. Central Processing Unit",
        "B. Computer Personal Unit",
        "C. Central Power Unit",
        "D. Core Processing Unit",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 3,
      type: 1,
      text: "What is the purpose of a firewall?",
      options: [
        "A. Cool computer",
        "B. Block unauthorized access",
        "C. Increase speed",
        "D. Clean viruses",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 4,
      type: 1,
      text: "What is phishing?",
      options: [
        "A. Computer virus",
        "B. Fake emails to steal info",
        "C. Fishing game",
        "D. Security software",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 5,
      type: 1,
      text: "What does CC mean in email?",
      options: [
        "A. Copy Certificate",
        "B. Carbon Copy",
        "C. Confidential Copy",
        "D. Closed Circuit",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 6,
      type: 1,
      text: "What does URL stand for?",
      options: [
        "A. Universal Resource Locator",
        "B. Uniform Research Language",
        "C. United Random Link",
        "D. User Response List",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 7,
      type: 1,
      text: "What is cloud storage?",
      options: [
        "A. Physical safe",
        "B. Remote servers via internet",
        "C. USB drive only",
        "D. Printed documents",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 8,
      type: 1,
      text: "What does Wi-Fi stand for?",
      options: [
        "A. Wireless Fidelity",
        "B. Wide Fiber",
        "C. Wire Free",
        "D. Windows Finder",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 9,
      type: 1,
      text: "Which is a strong password?",
      options: ["A. 123456", "B. password123", "C. M!necr@ft2024$", "D. admin"],
      correct: 2,
      maxScore: 10,
    },
    {
      id: 10,
      type: 1,
      text: "Another term for double-sided printing?",
      options: ["A. Simplex", "B. Duplex", "C. Two-line", "D. Book printing"],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 11,
      type: 1,
      text: "Best way to find referencing sources?",
      options: [
        "A. Library",
        "B. Research paper",
        "C. Search engines",
        "D. Social media",
      ],
      correct: 2,
      maxScore: 10,
    },
    {
      id: 12,
      type: 1,
      text: "What is 2FA?",
      options: [
        "A. Two passwords",
        "B. Two forms of verification",
        "C. Two accounts",
        "D. Two changes",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 13,
      type: 1,
      text: "Best format for sharing documents?",
      options: ["A. .docx", "B. .txt", "C. .pdf", "D. .rtf"],
      correct: 2,
      maxScore: 10,
    },
    {
      id: 14,
      type: 1,
      text: "What does JPEG stand for?",
      options: [
        "A. Joint Photographic Experts Group",
        "B. Java Photo Editor",
        "C. Jpeg Photo Group",
        "D. Just Photo Edit",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 15,
      type: 1,
      text: "Which device shown in the image is an input device?",
      options: [
        "A. 1",
        "B. 4",
        "C. 2",
        "D. 3",
      ],
      correct: 1,
      img:"img/s2.jpg",
      maxScore: 10,
    },
    {
      id: 16,
      type: 1,
      text: "What is alt text for?",
      options: [
        "A. Faster loading",
        "B. Describe images for screen readers",
        "C. Change colors",
        "D. Add music",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 17,
      type: 1,
      text: "What does ISP stand for?",
      options: [
        "A. Internet Service Provider",
        "B. Internal Security",
        "C. Internet Speed",
        "D. International Service",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 18,
      type: 1,
      text: "Purpose of antivirus?",
      options: [
        "A. Faster computer",
        "B. Detect malware",
        "C. Update Windows",
        "D. Backup",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 19,
      type: 1,
      text: "What does RAM stand for?",
      options: [
        "A. Random Access Memory",
        "B. Read Access",
        "C. Rapid Access",
        "D. Random Allocation",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 20,
      type: 1,
      text: "Which of the following connectors is a standard USB cable?",
      options: ["A. 3", "B. 1", "C. 4", "D. 2"],
      correct: 2,
      img:"img/s3.jpg",
      maxScore: 10,
    },
    {
      id: 21,
      type: 1,
      text: "Purpose of router?",
      options: [
        "A. Store files",
        "B. Connect devices to internet",
        "C. Print",
        "D. Charge",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 22,
      type: 1,
      text: "What does IP address stand for?",
      options: [
        "A. Internet Protocol",
        "B. Internal Program",
        "C. Internet Provider",
        "D. International Protocol",
      ],
      correct: 0,
      maxScore: 10,
    },
    {
      id: 23,
      type: 1,
      text: "HD resolution?",
      options: ["A. 640x480", "B. 1280x720", "C. 800x600", "D. 1024x768"],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 24,
      type: 1,
      text: "What is a browser?",
      options: [
        "A. Word processor",
        "B. Web access software",
        "C. Email client",
        "D. Game",
      ],
      correct: 1,
      maxScore: 10,
    },
    {
      id: 25,
      type: 1,
      text: "What is malware?",
      options: [
        "A. Good software",
        "B. Malicious software",
        "C. Hardware",
        "D. Network",
      ],
      correct: 1,
      maxScore: 10,
    },

    // TYPE 2 IKKI VARIANTLI (20 ball) - 10 ta = 200 ball
    {
      id: 26,
      type: 2,
      text: "Which two are input devices? (Choose two)",
      options: ["A. 2", "B. 4", "C. 1", "D. 3"],
      correct: [0, 1],
      img:"img/s4.jpg",
      maxScore: 20,
    },
    {
      id: 27,
      type: 2,
      text: "Which two are output devices? (Choose two)",
      options: ["A. Keyboard", "B. Monitor", "C. Mouse", "D. Speaker"],
      correct: [1, 3],
      maxScore: 20,
    },
    {
      id: 28,
      type: 2,
      text: "Which two are web browsers? (Choose two)",
      options: ["A. Chrome", "B. Word", "C. Firefox", "D. Reader"],
      correct: [0, 2],
      maxScore: 20,
    },
    {
      id: 29,
      type: 2,
      text: "Safe password practices? (Choose two)",
      options: [
        "A. Same password",
        "B. Password manager",
        "C. Sticky notes",
        "D. 2FA",
      ],
      correct: [1, 3],
      maxScore: 20,
    },
    {
      id: 30,
      type: 2,
      text: "Phishing email signs? (Choose two)",
      options: [
        "A. Urgent requests",
        "B. Known friend",
        "C. Suspicious links",
        "D. Perfect grammar",
      ],
      correct: [0, 2],
      maxScore: 20,
    },
    {
      id: 31,
      type: 2,
      text: "Cloud storage benefits? (Choose two)",
      options: [
        "A. Access anywhere",
        "B. Hack-proof",
        "C. Auto backup",
        "D. Free forever",
      ],
      correct: [0, 2],
      maxScore: 20,
    },
    {
      id: 32,
      type: 2,
      text: "Types of malware? (Choose two)",
      options: ["A. Virus", "B. Firewall", "C. Trojan", "D. Antivirus"],
      correct: [0, 2],
      maxScore: 20,
    },
    {
      id: 33,
      type: 2,
      text: "Common print settings? (Choose two)",
      options: [
        "A. Three lines",
        "B. Transparent",
        "C. Slides per page",
        "D. Pages per sheet",
      ],
      correct: [2, 3],
      maxScore: 20,
    },
    {
      id: 34,
      type: 2,
      text: "Printing methods? (Choose two)",
      options: ["A. PDF", "B. From web", "C. Plotter", "D. To email"],
      correct: [0, 2],
      maxScore: 20,
    },
    {
      id: 35,
      type: 2,
      text: "SSO benefits? (Choose two)",
      options: [
        "A. Stronger security",
        "B. Access all apps",
        "C. One login details",
        "D. No passwords",
      ],
      correct: [0, 2],
      maxScore: 20,
    },

    // TYPE 2 UCH VARIANTLI (30 ball) - 5 ta = 150 ball
    {
      id: 36,
      type: 2,
      text: "System software examples? (Choose three)",
      options: ["A. Windows", "B. macOS", "C. Linux", "D. Word", "E. Chrome"],
      correct: [0, 1, 2],
      maxScore: 30,
    },
    {
      id: 37,
      type: 2,
      text: "Computer components? (Choose three)",
      options: ["A. CPU", "B. RAM", "C. Hard Drive", "D. Office", "E. Windows"],
      correct: [0, 1, 2],
      maxScore: 30,
    },
    {
      id: 38,
      type: 2,
      text: "Image file extensions? (Choose three)",
      options: ["A. .jpg", "B. .png", "C. .gif", "D. .mp3", "E. .docx"],
      correct: [0, 1, 2],
      maxScore: 30,
    },
    {
      id: 39,
      type: 2,
      text: "Document file extensions? (Choose three)",
      options: ["A. .docx", "B. .pdf", "C. .txt", "D. .mp4", "E. .exe"],
      correct: [0, 1, 2],
      maxScore: 30,
    },
    {
      id: 40,
      type: 2,
      text: "Data storage types? (Choose three)",
      options: ["A. HDD", "B. ROM", "C. SSD", "D. USB", "E. RAM"],
      correct: [0, 2, 3],
      maxScore: 30,
    },

    // TYPE 3 TRUE/FALSE (40 ball) - 10 ta = 400 ball
    {
      id: 41,
      type: 3,
      text: "Computer hardware statements",
      statements: [
        "CPU is brain of computer",
        "RAM stores permanently",
        "SSD is faster than HDD",
        "Monitor is input device",
      ],
      correct: [1, 0, 1, 0],
      maxScore: 40,
    },
    {
      id: 42,
      type: 3,
      text: "Internet safety statements",
      statements: [
        "Public WiFi safe for banking",
        "HTTPS is secure",
        "Cookies always viruses",
        "2FA increases security",
      ],
      correct: [0, 1, 0, 1],
      maxScore: 40,
    },
    {
      id: 43,
      type: 3,
      text: "Online behavior (Yes/No)",
      statements: [
        "Share password with friends",
        "Logout on public computers",
        "Same password for all",
        "Report suspicious messages",
      ],
      correct: [0, 1, 0, 1],
      maxScore: 40,
    },
    {
      id: 44,
      type: 3,
      text: "File management statements",
      statements: [
        "Files need descriptive names",
        "Folders help organize",
        "Recycle Bin delete is permanent",
        "Cloud storage always free",
      ],
      correct: [1, 1, 1, 0],
      maxScore: 40,
    },
    {
      id: 45,
      type: 3,
      text: "Password practices (Yes/No)",
      statements: [
        "Mix letters and symbols",
        "Use birthdate",
        "Change regularly",
        "Same for email and banking",
      ],
      correct: [1, 0, 1, 0],
      maxScore: 40,
    },
    {
      id: 46,
      type: 3,
      text: "Copyright statements (Yes/No)",
      statements: [
        "1992 image free",
        "Photo 100 years old",
        "Unregistered lyrics free",
        "Document can't copy",
      ],
      correct: [0, 1, 0, 0],
      maxScore: 40,
    },
    {
      id: 47,
      type: 3,
      text: "Network statements",
      statements: [
        "LAN small area",
        "WiFi more secure",
        "Router connects devices",
        "IP identifies device",
      ],
      correct: [1, 0, 1, 1],
      maxScore: 40,
    },
    {
      id: 48,
      type: 3,
      text: "Digital citizenship",
      statements: [
        "Think before posting",
        "Everything is private",
        "Cyberbullying serious",
        "Respect privacy",
      ],
      correct: [1, 0, 1, 1],
      maxScore: 40,
    },
    {
      id: 49,
      type: 3,
      text: "Email etiquette",
      statements: [
        "ALL CAPS is shouting",
        "Reply all always",
        "Clear subject lines",
        "Forward without permission",
      ],
      correct: [1, 0, 1, 0],
      maxScore: 40,
    },
    {
      id: 50,
      type: 3,
      text: "Security habits (Yes/No)",
      statements: [
        "Same password everywhere",
        "Auto updates on",
        "Logout shared computers",
      ],
      correct: [0, 1, 1],
      maxScore: 30,
    },
  ];

  userAnswers = new Array(questions.length).fill(null);
  updateUI();
}

// ==================== UI YANGILASH ====================
function updateUI() {
  document.getElementById("answered").textContent =
    `${submittedQuestions.size}/${questions.length}`;
  document.getElementById("score").textContent = totalScore;
  document.getElementById("progressFill").style.width =
    `${(submittedQuestions.size / questions.length) * 100}%`;
}

// ==================== SAVOLNI KO'RSATISH ====================
// ==================== SAVOLNI KO'RSATISH (RASM BILAN) ====================
function displayQuestion() {
  const q = questions[currentQuestionIndex];
  const isSubmitted = submittedQuestions.has(currentQuestionIndex);
  const card = document.getElementById("questionCard");

  let html = `
        <div class="question-status ${isSubmitted ? "status-answered" : "status-unanswered"}">
            ${isSubmitted ? "✅ Javob berilgan" : "⏳ Javob berilmagan"}
        </div>
        <div class="question-points">🏆 ${q.maxScore} ball</div>
    `;

  // AGAR RASM BO'LSA, RASMNI CHIQARISH
  if (q.img) {
    html += `
            <div class="question-image">
                <img src="${q.img}" alt="Question image" class="question-img" 
                     onerror="this.style.display='none'">
            </div>
        `;
  }

  html += `<div class="question-text">${currentQuestionIndex + 1}. ${q.text}</div>`;

  if (q.type === 1) {
    html += '<div class="options">';
    q.options.forEach((opt, i) => {
      const checked = userAnswers[currentQuestionIndex] === i ? "checked" : "";
      const disabled = isSubmitted ? "disabled" : "";
      html += `
                <label class="option ${checked ? "selected" : ""} ${disabled}">
                    <input type="radio" name="q" value="${i}" ${checked} ${disabled} onchange="selectAnswer(${i})">
                    ${opt}
                </label>
            `;
    });
    html += "</div>";
  } else if (q.type === 2) {
    html += '<div class="options">';
    const answers = userAnswers[currentQuestionIndex] || [];
    const maxSelect = q.correct.length;

    q.options.forEach((opt, i) => {
      const checked = answers.includes(i) ? "checked" : "";
      const disabled = isSubmitted ? "disabled" : "";
      html += `
                <label class="option ${checked ? "selected" : ""} ${disabled}">
                    <input type="checkbox" value="${i}" ${checked} ${disabled} onchange="toggleMulti(${i})">
                    ${opt}
                </label>
            `;
    });
    html += `<div class="selection-hint">${maxSelect} ta tanlang</div>`;
    html += "</div>";
  } else if (q.type === 3) {
    html += '<div class="statements">';
    const answers = userAnswers[currentQuestionIndex] || [];

    q.statements.forEach((stmt, i) => {
      const trueChecked = answers[i] === 1 ? "checked" : "";
      const falseChecked = answers[i] === 0 ? "checked" : "";
      const disabled = isSubmitted ? "disabled" : "";
      html += `
                <div class="statement-row">
                    <div class="statement-text">${stmt}</div>
                    <div class="statement-options">
                        <label><input type="radio" name="s_${i}" value="1" ${trueChecked} ${disabled} onchange="setStatement(${i}, 1)"> Ha/True</label>
                        <label><input type="radio" name="s_${i}" value="0" ${falseChecked} ${disabled} onchange="setStatement(${i}, 0)"> Yo'q/False</label>
                    </div>
                </div>
            `;
    });
    html += "</div>";
  }

  card.innerHTML = html;

  document.getElementById("submitBtn").disabled = isSubmitted;
  document.getElementById("prevBtn").disabled = currentQuestionIndex === 0;
  document.getElementById("nextBtn").disabled =
    currentQuestionIndex === questions.length - 1;
  updateGrid();
}

// ==================== JAVOBLARNI SAQLASH ====================
function selectAnswer(val) {
  if (submittedQuestions.has(currentQuestionIndex)) return;
  userAnswers[currentQuestionIndex] = val;
  displayQuestion();
}

function toggleMulti(val) {
  if (submittedQuestions.has(currentQuestionIndex)) return;

  if (!userAnswers[currentQuestionIndex])
    userAnswers[currentQuestionIndex] = [];
  const idx = userAnswers[currentQuestionIndex].indexOf(val);

  if (idx === -1) {
    userAnswers[currentQuestionIndex].push(val);
  } else {
    userAnswers[currentQuestionIndex].splice(idx, 1);
  }
  userAnswers[currentQuestionIndex].sort();
  displayQuestion();
}

function setStatement(idx, val) {
  if (submittedQuestions.has(currentQuestionIndex)) return;

  if (!userAnswers[currentQuestionIndex])
    userAnswers[currentQuestionIndex] = [];
  userAnswers[currentQuestionIndex][idx] = val;
}

// ==================== JAVOBNI YUBORISH ====================
function submitAnswer() {
  const q = questions[currentQuestionIndex];
  const ans = userAnswers[currentQuestionIndex];

  let isValid = false;

  if (q.type === 1) {
    isValid = ans !== null && ans !== undefined;
  } else if (q.type === 2) {
    isValid = ans && ans.length === q.correct.length;
  } else if (q.type === 3) {
    isValid =
      ans &&
      ans.length === q.statements.length &&
      ans.every((v) => v !== undefined);
  }

  if (!isValid) {
    alert("Iltimos, javobni to'liq kiriting!");
    return;
  }

  // Ball hisoblash
  let score = 0;
  if (q.type === 1) {
    score = ans === q.correct ? 10 : 0;
  } else if (q.type === 2) {
    ans.forEach((a) => {
      if (q.correct.includes(a)) score += 10;
    });
  } else if (q.type === 3) {
    for (let i = 0; i < q.statements.length; i++) {
      if (ans[i] === q.correct[i]) score += 10;
    }
  }

  questionScores[currentQuestionIndex] = score;
  totalScore = questionScores.reduce((a, b) => a + b, 0);

  submittedQuestions.add(currentQuestionIndex);
  updateUI();
  displayQuestion();

  if (submittedQuestions.size === questions.length) {
    clearInterval(timerInterval);
    showResults();
  }
}

// ==================== GRID NI YANGILASH ====================
function updateGrid() {
  const grid = document.getElementById("questionGrid");
  let html = "";

  for (let i = 0; i < questions.length; i++) {
    let cls = "grid-item";
    if (i === currentQuestionIndex) cls += " current";
    if (submittedQuestions.has(i)) cls += " answered";
    html += `<div class="${cls}" onclick="goToQuestion(${i})">${i + 1}</div>`;
  }
  grid.innerHTML = html;
}

function goToQuestion(idx) {
  currentQuestionIndex = idx;
  displayQuestion();
}

// ==================== NATIJALARNI KO'RSATISH ====================
function showResults() {
  const passed = totalScore >= 700;
  const minutes = Math.floor((50 * 60 - timeLeft) / 60);
  const seconds = (50 * 60 - timeLeft) % 60;

  document.getElementById("finalScore").textContent = totalScore;
  document.getElementById("resultStatus").textContent = passed
    ? "IMTIHONDAN O'TDI"
    : "IMTIHONDAN O'TA OLMADI";
  document.getElementById("resultStatus").className =
    `result-status ${passed ? "status-pass" : "status-fail"}`;
  document.getElementById("resultTime").textContent =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;

  // Kategoriyalar
  const cats = ["Security", "Internet", "Software", "Hardware", "Ethics"];
  const catScores = [200, 200, 200, 200, 200];
  const catHtml = cats
    .map(
      (c, i) => `
        <div class="category-item">
            <span class="category-name">${c}</span>
            <span class="category-points">${Math.round(totalScore / 5)}/${catScores[i]}</span>
        </div>
    `,
    )
    .join("");
  document.getElementById("categoryScores").innerHTML = catHtml;

  // Chart
  const ctx = document.getElementById("resultChart").getContext("2d");
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["To'g'ri", "Noto'g'ri"],
      datasets: [
        {
          data: [totalScore, 1000 - totalScore],
          backgroundColor: ["#4158D0", "#e0e0e0"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "70%",
      plugins: { legend: { display: false } },
    },
  });

  document.getElementById("resultModal").style.display = "flex";
}

// ==================== VAQT ====================
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById("timer").textContent =
      `${mins}:${secs.toString().padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Vaqt tugadi!");
      showResults();
    }
  }, 1000);
}

// ==================== LOGIN ====================
document.getElementById("loginBtn").addEventListener("click", function () {
  const login = document.getElementById("login").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMessage");

  if (examCompleted) {
    document.getElementById("lockModal").style.display = "flex";
    return;
  }

  if (!ALLOWED_DEVICES.includes(currentDeviceId)) {
    msg.textContent = "❌ Qurilmadan foydalanish mumkin emas";
    msg.className = "message error";
    return;
  }

  if (USERS[login] && USERS[login].password === pass) {
    currentUser = USERS[login].name;
    document.getElementById("userName").textContent = currentUser;

    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("examPage").classList.add("active");

    loadQuestions();
    displayQuestion();
    startTimer();
  } else {
    msg.textContent = "❌ Login yoki parol xato";
    msg.className = "message error";
  }
});

// ==================== UNLOCK ====================
document.getElementById("unlockBtn").addEventListener("click", function () {
  const code = document.getElementById("unlockCode").value;
  const msg = document.getElementById("unlockMessage");

  if (code === REACTIVATION_CODE) {
    examCompleted = false;
    localStorage.removeItem("exam_locked");
    document.getElementById("lockModal").style.display = "none";
    msg.textContent = "✅ Kod to'g'ri, qayta kiring";
    msg.className = "small-message success";
  } else {
    msg.textContent = "❌ Kod noto'g'ri";
    msg.className = "small-message error";
  }
});

// ==================== CLOSE RESULT ====================
document
  .getElementById("closeResultBtn")
  .addEventListener("click", function () {
    document.getElementById("resultModal").style.display = "none";
    examCompleted = true;
    localStorage.setItem("exam_locked", "true");

    document.getElementById("examPage").classList.remove("active");
    document.getElementById("loginPage").classList.add("active");
    document.getElementById("loginMessage").textContent = "Test yakunlangan";
    document.getElementById("loginMessage").className = "message error";
  });

// ==================== NAVIGATION ====================
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
});

document.getElementById("submitBtn").addEventListener("click", submitAnswer);

document.getElementById("exitBtn").addEventListener("click", () => {
  if (confirm("Chiqish? Test qayta boshlanadi.")) {
    location.reload();
  }
});

// ==================== DEVICE ID ====================
currentDeviceId = getDeviceId();
document.getElementById("deviceDisplay").textContent = currentDeviceId;

// ==================== ANTI-COPY ====================
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (
    e.key === "PrintScreen" ||
    (e.ctrlKey && ["c", "x", "v", "p", "s", "u"].includes(e.key))
  ) {
    e.preventDefault();
    alert("Bu amal bloklangan!");
  }
});

// ==================== GLOBAL FUNCTIONS ====================
window.selectAnswer = selectAnswer;
window.toggleMulti = toggleMulti;
window.setStatement = setStatement;
window.goToQuestion = goToQuestion;
window.questionScores = new Array(50).fill(0);
