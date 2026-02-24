// Ruxsat etilgan device IDlar
const ALLOWED_DEVICES = [
    ];

// Foydalanuvchi ma'lumotlari
const USERS = {
    'student1': { password: '123456', name: 'Ali Valiyev' },
    'student2': { password: '123456', name: 'Anvarbek' },
};

// Global o'zgaruvchilar
let currentUser = null;
let currentDeviceId = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let submittedQuestions = new Set();
let questions = [];
let charts = {};

// Vaqt o'zgaruvchilari
let timeRemaining = 45 * 60; // 45 daqiqa
let timerInterval = null;
let examStarted = false;

// Ballar tizimi
let totalScore = 0;
let questionScores = [];
const PASSING_SCORE = 700;
const MAX_SCORE = 1000;

// Device ID olish
function getDeviceId() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown';
    
    const screenInfo = `${screen.width}x${screen.height}x${screen.colorDepth}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;
    const platform = navigator.platform;
    
    const combined = `${renderer}-${screenInfo}-${timezone}-${language}-${platform}`;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    
    return `DEV${Math.abs(hash).toString(16).substring(0, 8).toUpperCase()}`;
}

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function() {
    // Savollarni yuklash
    loadQuestions();
    
    // Device ID ni ko'rsatish
    currentDeviceId = getDeviceId();
    document.getElementById('deviceIdDisplay').textContent = currentDeviceId;
    
    // Event listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitAnswerBtn').addEventListener('click', submitAnswer);
    
    // Anti-copy va anti-screenshot
    disableCopyAndScreenshot();
});

// Savollarni yuklash
// Savollarni yuklash - FAQAT TYPE 1, 2, 3
function loadQuestions() {
    questions = [
        // ===== TYPE 1: BITTA VARIANTLI SAVOLLAR (10 ball) =====
        { 
            tr: 101, 
            id: 200101, 
            type: 1, 
            question: "What is the main purpose of a QR code?", 
            options: [
                "A. To play music", 
                "B. To quickly share links or information by scanning", 
                "C. To charge phones", 
                "D. To print documents"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 102, 
            id: 200102, 
            type: 1, 
            question: "Which option is the safest place to store very important school files?", 
            options: [
                "A. Only on Desktop", 
                "B. In cloud storage with 2FA enabled", 
                "C. On a public shared drive", 
                "D. In email drafts"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 103, 
            id: 200103, 
            type: 1, 
            question: "What does 'alt text' in images help with?", 
            options: [
                "A. Makes images load faster", 
                "B. Describes the image for screen readers and search engines", 
                "C. Changes image colors", 
                "D. Adds music to images"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 104, 
            id: 200104, 
            type: 1, 
            question: "What is the best way to verify if a website is legitimate before entering personal info?", 
            options: [
                "A. Check if it has many likes on social media", 
                "B. Look for HTTPS and padlock icon", 
                "C. Ask friends if they use it", 
                "D. Use it only at night"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 105, 
            id: 200105, 
            type: 1, 
            question: "Which button in most browsers lets you go back to the previous page?", 
            options: [
                "A. Refresh", 
                "B. Home", 
                "C. Back arrow", 
                "D. New Tab"
            ], 
            correct: 2, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 106, 
            id: 200106, 
            type: 1, 
            question: "What happens when you 'clear browsing data' in a browser?", 
            options: [
                "A. Deletes all files on computer", 
                "B. Removes history, cookies, cache", 
                "C. Changes your IP address", 
                "D. Installs new updates"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 107, 
            id: 200107, 
            type: 1, 
            question: "What is 'digital divide'?", 
            options: [
                "A. Difference between old and new phones", 
                "B. Gap between people who have and don't have internet access", 
                "C. Split between Windows and Mac users", 
                "D. Difference in typing speed"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 108, 
            id: 200108, 
            type: 1, 
            question: "What is the purpose of 'version control' in documents?", 
            options: [
                "A. To delete old versions", 
                "B. To keep track of changes and previous versions", 
                "C. To make file bigger", 
                "D. To share with everyone"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 109, 
            id: 200109, 
            type: 1, 
            question: "What is the best way to share a very large file with a teacher?", 
            options: [
                "A. Email attachment", 
                "B. Upload to Google Drive and share link", 
                "C. Print and give in person", 
                "D. Post on Instagram story"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 110, 
            id: 200110, 
            type: 1, 
            question: "What is the purpose of 'dark mode' on devices?", 
            options: [
                "A. Makes screen brighter", 
                "B. Reduces eye strain in low light and saves battery", 
                "C. Changes language", 
                "D. Deletes files faster"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 111, 
            id: 200111, 
            type: 1, 
            question: "What does 'synchronous' communication mean?", 
            options: [
                "A. Email and messaging", 
                "B. Real-time like video call or phone", 
                "C. Posting on forum", 
                "D. Sending letters by mail"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 112, 
            id: 200112, 
            type: 1, 
            question: "What does 'bookmark' do in a browser?", 
            options: [
                "A. Deletes the page", 
                "B. Saves the webpage address for quick access", 
                "C. Prints the page", 
                "D. Shares the page on social media"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        // ===== TYPE 2: IKKI VARIANTLI SAVOLLAR (20 ball) =====
        { 
            tr: 113, 
            id: 200113, 
            type: 2, 
            question: "Which two things should you do before clicking any link in a message? (Choose two)", 
            options: [
                "A. Hover over the link to see the real URL", 
                "B. Click it to check if it's safe", 
                "C. Check the sender's name and email address", 
                "D. Forward it to friends first"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 114, 
            id: 200114, 
            type: 2, 
            question: "Which two actions help reduce wrist strain when typing for long periods? (Choose two)", 
            options: [
                "A. Use wrist rest", 
                "B. Keep wrists straight and neutral", 
                "C. Type very fast without breaks", 
                "D. Rest palms on the desk edge"
            ], 
            correct: [0, 1], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 115, 
            id: 200115, 
            type: 2, 
            question: "Which two practices are recommended for naming school project files? (Choose two)", 
            options: [
                "A. Include your name and date", 
                "B. Use random numbers only", 
                "C. Use descriptive words like 'Math_Project_Anvar_2025-10'", 
                "D. Keep default name like 'document1.docx'"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 116, 
            id: 200116, 
            type: 2, 
            question: "Which two actions protect your smartphone from unauthorized access? (Choose two)", 
            options: [
                "A. Use screen lock (PIN, fingerprint, face)", 
                "B. Leave Bluetooth always on", 
                "C. Install apps only from official store", 
                "D. Share phone with strangers"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 117, 
            id: 200117, 
            type: 2, 
            question: "Which two things should you avoid when posting on school social media group? (Choose two)", 
            options: [
                "A. Sharing homework questions", 
                "B. Posting rude jokes about teachers", 
                "C. Tagging classmates in group photos", 
                "D. Using bad language"
            ], 
            correct: [1, 3], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 118, 
            id: 200118, 
            type: 2, 
            question: "Which two places are safe to download software from? (Choose two)", 
            options: [
                "A. Official app store", 
                "B. Random pop-up ads", 
                "C. Developer's official website", 
                "D. Unknown torrent sites"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 119, 
            id: 200119, 
            type: 2, 
            question: "Which two actions are examples of digital collaboration? (Choose two)", 
            options: [
                "A. Editing shared Google Doc together", 
                "B. Working alone at home", 
                "C. Using video call to discuss project", 
                "D. Sending files by USB drive only"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 120, 
            id: 200120, 
            type: 2, 
            question: "Which two things should you check before accepting friend request from stranger? (Choose two)", 
            options: [
                "A. Mutual friends", 
                "B. Profile picture and posts", 
                "C. Accept immediately", 
                "D. Check if account is new or fake"
            ], 
            correct: [1, 3], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 121, 
            id: 200121, 
            type: 2, 
            question: "Which two ways help protect your privacy on social media? (Choose two)", 
            options: [
                "A. Set profile to private", 
                "B. Accept all friend requests", 
                "C. Review tags before they appear", 
                "D. Share exact location every day"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        { 
            tr: 122, 
            id: 200122, 
            type: 2, 
            question: "Which two actions are good for maintaining a positive digital footprint? (Choose two)", 
            options: [
                "A. Think before posting", 
                "B. Post angry comments about teachers", 
                "C. Share helpful study tips", 
                "D. Use fake names everywhere"
            ], 
            correct: [0, 2], 
            maxScore: 20, 
            correctCount: 2 
        },
        
        // ===== TYPE 2: UCH VARIANTLI SAVOLLAR (30 ball) =====
        { 
            tr: 123, 
            id: 200123, 
            type: 2, 
            question: "Which three file types are usually considered safe to open from email if from trusted sender? (Choose three)", 
            options: [
                "A. .pdf", 
                "B. .jpg", 
                "C. .zip (without checking contents)", 
                "D. .png", 
                "E. .docx (from known teacher)"
            ], 
            correct: [0, 1, 3], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 124, 
            id: 200124, 
            type: 2, 
            question: "Which three things should you do when using someone else's image in a school presentation? (Choose three)", 
            options: [
                "A. Check if it's Creative Commons", 
                "B. Give credit to the creator", 
                "C. Use it without asking anyone", 
                "D. Include source link or name", 
                "E. Change colors to make it yours"
            ], 
            correct: [0, 1, 3], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 125, 
            id: 200125, 
            type: 2, 
            question: "Which three steps help create a strong presentation? (Choose three)", 
            options: [
                "A. Use large clear fonts", 
                "B. Put all text in one slide", 
                "C. Use relevant images", 
                "D. Keep slides simple (few words)", 
                "E. Use 10 different fonts"
            ], 
            correct: [0, 2, 3], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 126, 
            id: 200126, 
            type: 2, 
            question: "Which three things should be in a good file name for a project? (Choose three)", 
            options: [
                "A. Your name", 
                "B. Topic or description", 
                "C. Date (YYYY-MM-DD)", 
                "D. Random numbers only", 
                "E. Special characters like !@#"
            ], 
            correct: [0, 1, 2], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        // ===== TYPE 3: TRUE/FALSE SAVOLLAR (har bir statement 10 ball) =====
        { 
            tr: 127, 
            id: 200127, 
            type: 3, 
            question: "For each statement, select Yes if it's a good security habit, No if it's risky.", 
            statements: [
                "Using the same password on school and gaming accounts", 
                "Turning on automatic updates for apps", 
                "Logging out of accounts on shared computers"
            ], 
            correct: [0, 1, 1], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 128, 
            id: 200128, 
            type: 3, 
            question: "Select True if the statement is correct about netiquette, False if not.", 
            statements: [
                "Writing in ALL CAPS is considered polite online", 
                "Using clear subject lines in emails is helpful", 
                "Replying to group emails with 'me too' is always appropriate"
            ], 
            correct: [0, 1, 0], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 129, 
            id: 200129, 
            type: 3, 
            question: "Select Yes if this is an example of inclusive language, No if not.", 
            statements: [
                "Hey guys, let's start!", 
                "Hello everyone, welcome!", 
                "All ladies to the left side", 
                "Friends, please gather here"
            ], 
            correct: [0, 1, 0, 1], 
            maxScore: 40, 
            correctCount: 4 
        },
        
        { 
            tr: 130, 
            id: 200130, 
            type: 3, 
            question: "For each statement, select True if it's a good reason to use an alias online, False if not.", 
            statements: [
                "To separate personal and school accounts", 
                "To hide your identity while cyberbullying", 
                "To protect privacy in public forums"
            ], 
            correct: [1, 0, 1], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 131, 
            id: 200131, 
            type: 3, 
            question: "Select Yes if this is proper video call etiquette, No if not.", 
            statements: [
                "Mute microphone when not speaking", 
                "Eat loud food during class call", 
                "Look at camera when talking", 
                "Use funny virtual background in serious meeting"
            ], 
            correct: [1, 0, 1, 0], 
            maxScore: 40, 
            correctCount: 4 
        },
        
        { 
            tr: 132, 
            id: 200132, 
            type: 3, 
            question: "Select True if this helps save energy on laptop, False if not.", 
            statements: [
                "Lower screen brightness", 
                "Run many programs at once", 
                "Use power-saving mode", 
                "Keep charger always plugged in"
            ], 
            correct: [1, 0, 1, 0], 
            maxScore: 40, 
            correctCount: 4 
        },
        
        { 
            tr: 133, 
            id: 200133, 
            type: 3, 
            question: "Select Yes if this is an example of accessibility feature, No if not.", 
            statements: [
                "Alt text on images", 
                "Using only red and green colors", 
                "Captions on videos", 
                "Small font size (8 pt)"
            ], 
            correct: [1, 0, 1, 0], 
            maxScore: 40, 
            correctCount: 4 
        },
        
        { 
            tr: 134, 
            id: 200134, 
            type: 3, 
            question: "Select True if this is correct about online reputation.", 
            statements: [
                "What you post can affect future job opportunities", 
                "Deleting posts removes them from search engines forever", 
                "Teachers and universities check social media"
            ], 
            correct: [1, 0, 1], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        { 
            tr: 135, 
            id: 200135, 
            type: 3, 
            question: "Select Yes if this is a recommended screen setup for health, No if not.", 
            statements: [
                "Top of screen at eye level", 
                "Sit 50–70 cm away from screen", 
                "Use very bright room with screen glare", 
                "Take breaks every 20 minutes"
            ], 
            correct: [1, 1, 0, 1], 
            maxScore: 40, 
            correctCount: 4 
        },
        
        { 
            tr: 136, 
            id: 200136, 
            type: 3, 
            question: "Select Yes if this is proper online behavior in class chat, No if not.", 
            statements: [
                "Use proper language and grammar", 
                "Type in all caps to get attention", 
                "Stay on topic", 
                "Send memes during serious discussion"
            ], 
            correct: [1, 0, 1, 0], 
            maxScore: 40, 
            correctCount: 4 
        },
        
        { 
            tr: 137, 
            id: 200137, 
            type: 3, 
            question: "Select True if this is correct about open source software.", 
            statements: [
                "You can modify and share the code", 
                "It's always free to download", 
                "You must pay for technical support"
            ], 
            correct: [1, 1, 0], 
            maxScore: 30, 
            correctCount: 3 
        },
        
        // ===== QO'SHIMCHA TYPE 1 SAVOLLAR =====
        { 
            tr: 138, 
            id: 200138, 
            type: 1, 
            question: "Which of the following is an example of two-factor authentication?", 
            options: [
                "A. Password only", 
                "B. Password + code sent to phone", 
                "C. Username only", 
                "D. Security question only"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 139, 
            id: 200139, 
            type: 1, 
            question: "What is phishing?", 
            options: [
                "A. A type of computer virus", 
                "B. Fake emails trying to steal personal information", 
                "C. A fishing game", 
                "D. A security software"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 140, 
            id: 200140, 
            type: 1, 
            question: "What is the main purpose of a firewall?", 
            options: [
                "A. To cool down the computer", 
                "B. To block unauthorized access to your network", 
                "C. To increase internet speed", 
                "D. To clean viruses"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 141, 
            id: 200141, 
            type: 1, 
            question: "Which of these is a strong password?", 
            options: [
                "A. 123456", 
                "B. password", 
                "C. M!necr@ft2024", 
                "D. admin"
            ], 
            correct: 2, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 142, 
            id: 200142, 
            type: 1, 
            question: "What does URL stand for?", 
            options: [
                "A. Universal Resource Locator", 
                "B. Uniform Research Language", 
                "C. United Random Link", 
                "D. User Response List"
            ], 
            correct: 0, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 143, 
            id: 200143, 
            type: 1, 
            question: "What is cloud storage?", 
            options: [
                "A. Storing files in a physical safe", 
                "B. Storing data on remote servers accessed via internet", 
                "C. Saving files only on USB drive", 
                "D. Printing documents"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 144, 
            id: 200144, 
            type: 1, 
            question: "What is the purpose of antivirus software?", 
            options: [
                "A. To make computer faster", 
                "B. To detect and remove malware", 
                "C. To update Windows", 
                "D. To backup files"
            ], 
            correct: 1, 
            maxScore: 10, 
            correctCount: 1 
        },
        
        { 
            tr: 145, 
            id: 200145, 
            type: 1, 
            question: "What does Wi-Fi stand for?", 
            options: [
                "A. Wireless Fidelity", 
                "B. Wide Fiber", 
                "C. Wire Free", 
                "D. Windows Finder"
            ], 
            correct: 0, 
            maxScore: 10, 
            correctCount: 1 
        }
    ];
    
    // Ballarni hisoblash
    const totalMaxScore = questions.reduce((sum, q) => sum + q.maxScore, 0);
    console.log(`Jami maksimal ball: ${totalMaxScore}`);
    
    userAnswers = new Array(questions.length).fill(null);
    questionScores = new Array(questions.length).fill(0);
    
    document.getElementById('totalQuestions').textContent = questions.length;
    updateQuestionGrid();
    updateProgress();
    updateTotalScore();
}

// Loginni tekshirish
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('loginMessage');
    
    // Device ID tekshirish
    if (!ALLOWED_DEVICES.includes(currentDeviceId)) {
        messageEl.textContent = '❌ Bu qurilmadan kirish ruxsat etilmagan!';
        messageEl.className = 'message error';
        return;
    }
    
    // Foydalanuvchi tekshirish
    if (USERS[username] && USERS[username].password === password) {
        currentUser = username;
        messageEl.textContent = '✅ Kirish muvaffaqiyatli!';
        messageEl.className = 'message success';
        
        // Login panelini yashirish, test panelini ko'rsatish
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('examContainer').style.display = 'block';
        document.getElementById('userName').textContent = USERS[username].name;
        document.getElementById('userDevice').textContent = `Device: ${currentDeviceId}`;
        
        // Testni yuklash va vaqtni boshlash
        currentQuestionIndex = 0;
        loadQuestion(currentQuestionIndex);
        updateProgress();
        startTimer();
    } else {
        messageEl.textContent = '❌ Login yoki parol xato!';
        messageEl.className = 'message error';
    }
}

// Taymerni boshlash
function startTimer() {
    if (examStarted) return;
    examStarted = true;
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimer();
        
        // 5 daqiqa qolganda ogohlantirish
        if (timeRemaining === 300) {
            showTimeWarning();
        }
        
        // Vaqt tugaganda
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showTimeUp();
            setTimeout(() => {
                submitExam();
            }, 2000);
        }
    }, 1000);
}

// Taymerni yangilash
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    document.getElementById('timerMinutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('timerSeconds').textContent = seconds.toString().padStart(2, '0');
    
    // Progressni yangilash
    const totalTime = 45 * 60;
    const progress = (timeRemaining / totalTime) * 226.2;
    document.querySelector('.timer-fill').style.strokeDashoffset = progress;
    
    // Rangi o'zgartirish
    const timerFill = document.querySelector('.timer-fill');
    if (timeRemaining < 300) {
        timerFill.style.stroke = '#f56565';
    } else if (timeRemaining < 600) {
        timerFill.style.stroke = '#ecc94b';
    }
}

// Vaqt ogohlantirishi
function showTimeWarning() {
    document.getElementById('timeWarningModal').style.display = 'flex';
    setTimeout(() => {
        closeTimeWarning();
    }, 5000);
}

function closeTimeWarning() {
    document.getElementById('timeWarningModal').style.display = 'none';
}

function showTimeUp() {
    document.getElementById('timeUpModal').style.display = 'flex';
}

// Umumiy ballni yangilash
function updateTotalScore() {
    totalScore = questionScores.reduce((sum, score) => sum + score, 0);
    document.getElementById('totalScore').textContent = totalScore;
}

// Savol ballini hisoblash - TO'LIQ QAYTA YOZILDI
function calculateQuestionScore(question, userAnswer) {
    if (!userAnswer) return 0;
    
    let score = 0;
    
    // TYPE 1: Bitta variantli savol
    if (question.type === 1) {
        // To'g'ri javob bilan solishtirish
        if (userAnswer === question.correct) {
            score = 10;
        }
    }
    
    // TYPE 2: Ko'p variantli savol (2 yoki 3 variant)
    else if (question.type === 2) {
        if (!Array.isArray(userAnswer)) return 0;
        
        // Har bir to'g'ri belgilangan variant uchun 10 ball
        const correctAnswers = question.correct;
        
        userAnswer.forEach(answerIndex => {
            if (correctAnswers.includes(answerIndex)) {
                score += 10;
            }
        });
        
        // NOTO'G'RI variantlar uchun ball olib tashlanmaydi
        // Faqat to'g'ri variantlar hisoblanadi
    }
    
    // TYPE 3: True/False statementlar
    else if (question.type === 3) {
        if (!Array.isArray(userAnswer)) return 0;
        
        // Har bir to'g'ri belgilangan statement uchun 10 ball
        for (let i = 0; i < question.statements.length; i++) {
            if (userAnswer[i] === question.correct[i]) {
                score += 10;
            }
        }
    }
    
    // TYPE 5: Matching (moslashtirish)
    else if (question.type === 5) {
        if (typeof userAnswer !== 'object') return 0;
        
        // Har bir to'g'ri moslashtirish uchun 10 ball
        const correctMap = question.correct;
        
        Object.keys(correctMap).forEach(key => {
            if (userAnswer[key] === correctMap[key]) {
                score += 10;
            }
        });
    }
    
    return score;
}

// Savolni yuklash
function loadQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('questionContainer');
    const isSubmitted = submittedQuestions.has(index);
    
    document.getElementById('currentQuestionNum').textContent = index + 1;
    
    let statusHtml = `<div class="question-status ${isSubmitted ? 'answered' : 'unanswered'}">`;
    statusHtml += isSubmitted ? '✅ Bu savolga javob berilgan' : '⏳ Bu savolga javob berilmagan';
    statusHtml += '</div>';
    
    let pointsHtml = `<div class="question-points">🏆 Maksimal ball: ${question.maxScore} (${question.correctCount} ta to'g'ri javob)</div>`;
    
    let html = statusHtml + pointsHtml + `<div class="question-text">${index + 1}. ${question.question}</div>`;
    
    // TYPE 1: Bitta variantli
    if (question.type === 1) {
        html += '<div class="options-container">';
        question.options.forEach((opt, i) => {
            const checked = userAnswers[index] === i ? 'checked' : '';
            const disabled = isSubmitted ? 'disabled' : '';
            html += `
                <label class="option-item ${checked ? 'selected' : ''} ${disabled ? 'disabled' : ''}">
                    <input type="radio" name="question" value="${i}" ${checked} ${disabled} onchange="selectAnswer(${index}, ${i})">
                    ${opt}
                </label>
            `;
        });
        html += '</div>';
    }
    
    // TYPE 2: Ko'p variantli (2 yoki 3 variant)
    else if (question.type === 2) {
        html += '<div class="options-container">';
        const answers = userAnswers[index] || [];
        const maxSelections = question.correctCount; // 2 yoki 3
        
        question.options.forEach((opt, i) => {
            const checked = answers.includes(i) ? 'checked' : '';
            const disabled = isSubmitted ? 'disabled' : '';
            html += `
                <label class="option-item ${checked ? 'selected' : ''} ${disabled ? 'disabled' : ''}">
                    <input type="checkbox" value="${i}" ${checked} ${disabled} onchange="handleMultiSelect(${index}, ${i}, this.checked, ${maxSelections})">
                    ${opt}
                </label>
            `;
        });
        html += `<div class="selection-hint">⚠️ ${maxSelections} ta variant tanlashingiz kerak</div>`;
        html += '</div>';
    }
    
    // TYPE 3: True/False statementlar
    else if (question.type === 3) {
        html += '<div class="statements-container">';
        question.statements.forEach((statement, i) => {
            const answers = userAnswers[index] || [];
            const trueChecked = answers[i] === 1 ? 'checked' : '';
            const falseChecked = answers[i] === 0 ? 'checked' : '';
            const disabled = isSubmitted ? 'disabled' : '';
            html += `
                <div class="statement-row">
                    <div class="statement-text">${statement}</div>
                    <div class="statement-options">
                        <label>
                            <input type="radio" name="statement_${index}_${i}" value="1" ${trueChecked} ${disabled} onchange="saveStatement(${index}, ${i}, 1)"> True/Yes
                        </label>
                        <label>
                            <input type="radio" name="statement_${index}_${i}" value="0" ${falseChecked} ${disabled} onchange="saveStatement(${index}, ${i}, 0)"> False/No
                        </label>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    // TYPE 5: Matching
    else if (question.type === 5) {
        html += '<div class="matching-container">';
        html += '<div class="matching-items">';
        question.items.forEach((item, i) => {
            const disabled = isSubmitted ? 'disabled' : '';
            html += `<div class="matching-item ${disabled}" onclick="selectMatchingItem(${index}, ${i})">${item}</div>`;
        });
        html += '</div><div class="matching-targets">';
        question.targets.forEach((target, i) => {
            const paired = userAnswers[index] && Object.values(userAnswers[index]).includes(target);
            const disabled = isSubmitted || paired ? 'disabled' : '';
            html += `<div class="matching-target ${paired ? 'paired' : ''} ${disabled}" onclick="selectMatchingTarget(${index}, ${i})">${target}</div>`;
        });
        html += '</div></div>';
    }
    
    container.innerHTML = html;
    
    const submitBtn = document.getElementById('submitAnswerBtn');
    if (isSubmitted) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Javob yuborilgan';
    } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Javobni yuborish';
    }
    
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === questions.length - 1;
    
    updateQuestionGrid();
}

// Bitta variant tanlash (type 1)
function selectAnswer(index, value) {
    if (submittedQuestions.has(index)) return;
    userAnswers[index] = value;
    
    // UI ni yangilash
    const options = document.querySelectorAll('.option-item');
    options.forEach(opt => {
        const input = opt.querySelector('input');
        if (input && parseInt(input.value) === value) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

// Ko'p variant tanlash (type 2) - faqat kerakli sonda tanlash mumkin
function handleMultiSelect(index, value, checked, maxSelections) {
    if (submittedQuestions.has(index)) return;
    
    if (!userAnswers[index]) userAnswers[index] = [];
    
    if (checked) {
        // Agar maksimal sonda tanlangan bo'lsa, yangisini qo'shib bo'lmaydi
        if (userAnswers[index].length >= maxSelections) {
            alert(`Faqat ${maxSelections} ta variant tanlashingiz mumkin!`);
            // Checkboxni bekor qilish
            event.target.checked = false;
            return;
        }
        
        if (!userAnswers[index].includes(value)) {
            userAnswers[index].push(value);
        }
    } else {
        userAnswers[index] = userAnswers[index].filter(v => v !== value);
    }
    
    // Sort qilish
    userAnswers[index].sort((a, b) => a - b);
    
    // UI ni yangilash
    const options = document.querySelectorAll('.option-item');
    options.forEach(opt => {
        const input = opt.querySelector('input');
        if (input && userAnswers[index].includes(parseInt(input.value))) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

// Statement tanlash (type 3)
function saveStatement(index, statementIndex, value) {
    if (submittedQuestions.has(index)) return;
    
    if (!userAnswers[index]) userAnswers[index] = [];
    userAnswers[index][statementIndex] = parseInt(value);
}

// Matching uchun o'zgaruvchi
let selectedMatchingItem = null;

function selectMatchingItem(qIndex, itemIndex) {
    if (submittedQuestions.has(qIndex)) return;
    
    selectedMatchingItem = { qIndex, itemIndex };
    
    document.querySelectorAll('.matching-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function selectMatchingTarget(qIndex, targetIndex) {
    if (submittedQuestions.has(qIndex)) return;
    if (!selectedMatchingItem || selectedMatchingItem.qIndex !== qIndex) return;
    
    if (!userAnswers[qIndex]) userAnswers[qIndex] = {};
    
    const question = questions[qIndex];
    const itemName = question.items[selectedMatchingItem.itemIndex];
    const targetName = question.targets[targetIndex];
    
    // Agar bu target allaqachon boshqa itemga配对 bo'lsa
    if (Object.values(userAnswers[qIndex]).includes(targetName)) {
        alert('Bu description allaqachon tanlangan!');
        return;
    }
    
    userAnswers[qIndex][itemName] = targetName;
    
    // UI ni yangilash
    const targetEl = event.target;
    targetEl.classList.add('paired');
    targetEl.textContent = `${itemName} → ${targetName}`;
    targetEl.classList.add('disabled');
    
    selectedMatchingItem = null;
    document.querySelectorAll('.matching-item').forEach(item => {
        item.classList.remove('selected');
    });
}

// Javobni yuborish - QAYTA YOZILDI
function submitAnswer() {
    const currentIndex = currentQuestionIndex;
    
    if (submittedQuestions.has(currentIndex)) {
        alert('Bu savolga allaqachon javob berilgan!');
        return;
    }
    
    const answer = userAnswers[currentIndex];
    const question = questions[currentIndex];
    
    // Javobni tekshirish
    let isValid = false;
    
    if (question.type === 1) {
        isValid = answer !== null && answer !== undefined;
        if (!isValid) alert('Iltimos, javobni tanlang!');
    }
    else if (question.type === 2) {
        isValid = answer && Array.isArray(answer) && answer.length === question.correctCount;
        if (!isValid) alert(`Iltimos, ${question.correctCount} ta variantni tanlang!`);
    }
    else if (question.type === 3) {
        isValid = answer && Array.isArray(answer) && 
                  answer.length === question.statements.length && 
                  answer.every(v => v !== undefined);
        if (!isValid) alert('Iltimos, barcha statementlarga javob bering!');
    }
    else if (question.type === 5) {
        isValid = answer && typeof answer === 'object' && Object.keys(answer).length === question.items.length;
        if (!isValid) alert('Iltimos, barcha mosliklarni belgilang!');
    }
    
    if (!isValid) return;
    
    // Ballni hisoblash
    const score = calculateQuestionScore(question, answer);
    questionScores[currentIndex] = score;
    
    // Javobni yuborish va bloklash
    submittedQuestions.add(currentIndex);
    
    // Progress va ballni yangilash
    updateProgress();
    updateTotalScore();
    
    // UI ni yangilash (javob yuborilgan holatga)
    loadQuestion(currentIndex);
    
    // Agar barcha savollarga javob berilgan bo'lsa
    if (submittedQuestions.size === questions.length) {
        setTimeout(() => {
            if (confirm('Tabriklaymiz! Siz barcha savollarga javob berdingiz. Natijalarni ko\'rishni xohlaysizmi?')) {
                submitExam();
            }
        }, 500);
    }
}

// Progressni yangilash
function updateProgress() {
    const answered = submittedQuestions.size;
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('progressFill').style.width = `${(answered / questions.length) * 100}%`;
    updateQuestionGrid();
}

// Savollar gridini yangilash
function updateQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    let html = '';
    
    for (let i = 0; i < questions.length; i++) {
        const isAnswered = submittedQuestions.has(i);
        const isCurrent = i === currentQuestionIndex;
        
        let classes = 'grid-item';
        if (isAnswered) classes += ' answered';
        if (isCurrent) classes += ' current';
        
        html += `<div class="${classes}" data-index="${i}" onclick="goToQuestion(${i})">${i + 1}</div>`;
    }
    
    grid.innerHTML = html;
}

// Savolga o'tish
function goToQuestion(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestionIndex = index;
        loadQuestion(index);
    }
}

// Oldingi savol
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Keyingi savol
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

// Testni yakunlash
function submitExam() {
    // Vaqtni to'xtatish
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Ballarni hisoblash
    let correctCount = 0;
    const categoryScores = {
        'Security': { total: 0, earned: 0 },
        'Internet': { total: 0, earned: 0 },
        'Software': { total: 0, earned: 0 },
        'Hardware': { total: 0, earned: 0 },
        'Ethics': { total: 0, earned: 0 }
    };
    
    const results = [];
    
    questions.forEach((q, i) => {
        const userAnswer = userAnswers[i];
        const isSubmitted = submittedQuestions.has(i);
        const earnedScore = isSubmitted ? questionScores[i] : 0;
        const category = getQuestionCategory(q);
        
        if (isSubmitted && questionScores[i] === q.maxScore) {
            correctCount++;
        }
        
        categoryScores[category].total += q.maxScore;
        categoryScores[category].earned += earnedScore;
        
        results.push({
            question: q.question,
            isCorrect: earnedScore === q.maxScore,
            earnedScore,
            maxScore: q.maxScore,
            userAnswer,
            correct: q.correct
        });
    });
    
    // Natijalarni ko'rsatish
    showResults(totalScore, categoryScores, results);
}

// Savol kategoriyasini aniqlash
function getQuestionCategory(question) {
    const text = question.question.toLowerCase();
    if (text.includes('password') || text.includes('security') || text.includes('safe') || text.includes('protect')) {
        return 'Security';
    } else if (text.includes('browser') || text.includes('email') || text.includes('web') || text.includes('link') || text.includes('site')) {
        return 'Internet';
    } else if (text.includes('file') || text.includes('format') || text.includes('program') || text.includes('software') || text.includes('app')) {
        return 'Software';
    } else if (text.includes('computer') || text.includes('device') || text.includes('hardware') || text.includes('screen') || text.includes('keyboard')) {
        return 'Hardware';
    } else {
        return 'Ethics';
    }
}

// Natijalarni ko'rsatish
function showResults(finalScore, categoryScores, results) {
    const modal = document.getElementById('resultModal');
    const resultDetails = document.getElementById('resultDetails');
    const passed = finalScore >= PASSING_SCORE;
    
    document.getElementById('finalScore').textContent = finalScore;
    document.getElementById('resultStatus').textContent = passed ? '✓ IMTIHONDAN O\'TDI' : '✗ IMTIHONDAN O\'TA OLMADI';
    document.getElementById('resultStatus').className = `result-status ${passed ? 'passed' : 'failed'}`;
    
    const minutes = Math.floor((45 * 60 - timeRemaining) / 60);
    const seconds = (45 * 60 - timeRemaining) % 60;
    document.getElementById('timeSpent').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Score breakdown
    const breakdownHtml = Object.entries(categoryScores).map(([cat, data]) => `
        <div class="breakdown-item ${cat.toLowerCase()}">
            <div class="category">${cat}</div>
            <div class="score">${data.earned} <span class="max">/${data.total}</span></div>
        </div>
    `).join('');
    document.getElementById('scoreBreakdown').innerHTML = breakdownHtml;
    
    // Diagrammalarni yaratish
    createCharts(finalScore, categoryScores);
    
    // Natijalar ro'yxati
    let detailsHtml = '<h3>📝 Batafsil natijalar</h3>';
    results.forEach((r, i) => {
        detailsHtml += `
            <div class="result-item ${r.isCorrect ? 'correct' : 'incorrect'}">
                <strong>${i + 1}. ${r.question}</strong><br>
                <small>Ball: ${r.earnedScore}/${r.maxScore}</small><br>
                <small>Sizning javobingiz: ${formatAnswer(r.userAnswer)}</small><br>
                <small>To'g'ri javob: ${formatAnswer(r.correct)}</small>
            </div>
        `;
    });
    
    resultDetails.innerHTML = detailsHtml;
    modal.style.display = 'flex';
}

// Javobni formatlash
function formatAnswer(answer) {
    if (answer === null || answer === undefined) return 'Javob berilmagan';
    if (Array.isArray(answer)) {
        return answer.map(a => {
            if (typeof a === 'number') return String.fromCharCode(65 + a);
            return a;
        }).join(', ');
    }
    if (typeof answer === 'object') {
        return Object.entries(answer).map(([k, v]) => `${k} → ${v}`).join('; ');
    }
    if (typeof answer === 'number') {
        return String.fromCharCode(65 + answer);
    }
    return answer;
}

// Diagrammalarni yaratish
function createCharts(finalScore, categoryScores) {
    // Eski diagrammalarni tozalash
    if (charts.pie) charts.pie.destroy();
    if (charts.bar) charts.bar.destroy();
    if (charts.radar) charts.radar.destroy();
    
    // Pie chart
    const pieCtx = document.getElementById('resultPieChart').getContext('2d');
    charts.pie = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Olingan ball', 'Qolgan ball'],
            datasets: [{
                data: [finalScore, 1000 - finalScore],
                backgroundColor: ['#48bb78', '#e2e8f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Umumiy natija (1000 ball)'
                }
            }
        }
    });
    
    // Bar chart
    const barCtx = document.getElementById('resultBarChart').getContext('2d');
    charts.bar = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(categoryScores),
            datasets: [{
                label: 'Olingan ball',
                data: Object.values(categoryScores).map(c => c.earned),
                backgroundColor: '#667eea',
                borderRadius: 8
            }, {
                label: 'Maksimal ball',
                data: Object.values(categoryScores).map(c => c.total),
                backgroundColor: '#cbd5e0',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Kategoriyalar bo\'yicha natijalar'
                }
            }
        }
    });
    
    // Radar chart
    const radarCtx = document.getElementById('resultRadarChart').getContext('2d');
    const categories = Object.keys(categoryScores);
    charts.radar = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Foiz ko\'rsatkichi',
                data: categories.map(cat => {
                    const c = categoryScores[cat];
                    return c.total > 0 ? Math.round((c.earned / c.total) * 100) : 0;
                }),
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: '#667eea',
                pointBackgroundColor: '#667eea'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Kategoriyalar bo\'yicha foiz'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}

function printResults() {
    window.print();
}

function closeTimeWarning() {
    document.getElementById('timeWarningModal').style.display = 'none';
}

function handleLogout() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    currentUser = null;
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    submittedQuestions.clear();
    questionScores = new Array(questions.length).fill(0);
    timeRemaining = 45 * 60;
    examStarted = false;
    totalScore = 0;
    
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('examContainer').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginMessage').textContent = '';
}

// Anti-copy va anti-screenshot
function disableCopyAndScreenshot() {
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());
    document.addEventListener('paste', (e) => e.preventDefault());
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'PrintScreen') {
            e.preventDefault();
            alert('📸 Screenshot olish bloklangan!');
        }
        
        if (e.ctrlKey && ['c', 'x', 'v', 'p', 's', 'u', 'a'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            alert('⛔ Bu amal test vaqtida bloklangan!');
        }
        
        if (e.key === 'F12') {
            e.preventDefault();
            alert('🛠️ Developer Tools bloklangan!');
        }
    });
    
    setInterval(() => {
        if (window.outerWidth - window.innerWidth > 200 || 
            window.outerHeight - window.innerHeight > 200) {
            alert('⚠️ Developer Tools aniqlangan!');
            handleLogout();
        }
    }, 1000);
}