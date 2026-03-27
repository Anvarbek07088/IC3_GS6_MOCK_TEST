const level1Questions = [
  // TYPE 1 (10 ball)
  // TYPE 1 (10 ball) - 25 ta = 250 ball
  {
    id: 1,
    type: 1,
    text: "What is the main function of the Start button in Windows?",
    options: ["A. 2", "B. 3", "C. 1", "D. 4"],
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
    options: ["A. 1", "B. 4", "C. 2", "D. 3"],
    correct: 1,
    img: "img/s2.jpg",
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
    img: "img/s3.jpg",
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
    img: "img/s4.jpg",
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

// ==================== LEVEL 2 SAVOLLARI (IC3 GS6 Level 2) ====================
// ==================== LEVEL 2 SAVOLLARI (IC3 GS6 Level 2) ====================
// ==================== LEVEL 2 SAVOLLARI (IC3 GS6 Level 2) - 50 QUESTIONS = 1000 POINTS ====================
const level2Questions = [
  // ==================== TYPE 1: SINGLE ANSWER (10 points each) - 20 questions = 200 points ====================

  // 1. Formatting text
  {
    id: 1,
    type: 1,
    text: "What does formatting text mean in a word processor?",
    options: [
      "A. Translating text to another language",
      "B. Changing the appearance of text (font, color, size, etc.)",
      "C. Deleting text permanently",
      "D. Saving text to memory",
    ],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 2. Comments in documents
  {
    id: 2,
    type: 2,
    img: "img/e41.jpg",
    text: "Which option correctly matches each document app shown in the image with the company that created it?",
    options: [
      "A. Apple",
      "B. Google",
      "C. Samsung",
      "D. LG",
      "E. Mcrosoft",
      "F. Kingsoft",
    ],
    correct: [0, 1, 4, 5],
    maxScore: 40,
    category: "Software",
  },

  // 3. Output devices
  {
    id: 3,
    type: 1,
    text: "When you wear headphones to hear sound, which device setting is being used?",
    options: [
      "A. Input device",
      "B. Output device",
      "C. Network device",
      "D. Storage device",
    ],
    correct: 1,
    maxScore: 10,
    category: "Hardware",
  },

  // 4. Identity theft
  {
    id: 4,
    type: 1,
    text: "What is it called when someone creates a fake account pretending to be another person to deceive others?",
    options: [
      "A. Trolling",
      "B. Cyberbullying",
      "C. Impersonation (identity theft)",
      "D. Phishing",
    ],
    correct: 2,
    maxScore: 10,
    category: "Security",
  },

  // 5. Browser font settings
  {
    id: 5,
    type: 1,
    text: "Can you change font settings in a web browser?",
    options: ["A. Yes", "B. No"],
    correct: 0,
    maxScore: 10,
    category: "Software",
  },

  // 6. Auto Fill in spreadsheets
  {
    id: 6,
    type: 1,
    text: "Which function in spreadsheets automatically fills cells with sequential values?",
    options: ["A. Auto Format", "B. Auto Fill", "C. Auto Fit", "D. Auto Sort"],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 7. AND operator
  {
    id: 7,
    type: 1,
    text: "In search engines, what does the AND operator do?",
    options: [
      "A. Shows results with at least one term",
      "B. Shows results only when both terms are present",
      "C. Excludes the word from search",
      "D. Searches for synonyms",
    ],
    correct: 1,
    maxScore: 10,
    category: "Internet",
  },

  // 8. OR operator
  {
    id: 8,
    type: 1,
    text: "In search engines, what does the OR operator do?",
    options: [
      "A. Both terms must appear together",
      "B. Only the first term appears",
      "C. Shows results with at least one term",
      "D. Hides the results",
    ],
    correct: 2,
    maxScore: 10,
    category: "Internet",
  },

  // 9. Version history
  {
    id: 9,
    type: 1,
    text: "What is the purpose of version history in documents?",
    options: [
      "A. To change document design",
      "B. To restore previous versions",
      "C. To configure printer settings",
      "D. To increase internet speed",
    ],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 10. Email etiquette
  {
    id: 10,
    type: 1,
    text: "Which email practice is NOT considered professional etiquette?",
    options: [
      "A. Simple greeting",
      "B. Unnecessary capital letters and excessive symbols",
      "C. Short and clear text",
      "D. Adding a signature",
    ],
    correct: 1,
    maxScore: 10,
    category: "Ethics",
  },

  // 11. FPS in games
  {
    id: 11,
    type: 1,
    text: "Which component most affects FPS (Frames Per Second) in 3D games?",
    options: [
      "A. Printer",
      "B. CPU (Processor)",
      "C. Scanner",
      "D. Microphone",
    ],
    correct: 1,
    maxScore: 10,
    category: "Hardware",
  },

  // 12. Operating system
  {
    id: 12,
    type: 1,
    text: "What is an operating system?",
    options: [
      "A. A computer hardware component",
      "B. Software that manages hardware and other software",
      "C. An internet service",
      "D. A type of web browser",
    ],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 13. Volatile memory
  {
    id: 13,
    type: 1,
    text: "Which type of memory is volatile (temporary)?",
    options: ["A. ROM", "B. RAM", "C. SSD", "D. Flash Drive"],
    correct: 1,
    maxScore: 10,
    category: "Hardware",
  },

  // 14. Browser extensions
  {
    id: 14,
    type: 1,
    text: "What is the purpose of browser extensions?",
    options: [
      "A. They slow down the computer",
      "B. They extend browser functionality",
      "C. They remove viruses",
      "D. They update the operating system",
    ],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 15. Auto Fit in spreadsheets
  {
    id: 15,
    type: 1,
    text: "Which function in spreadsheets automatically adjusts cell size to fit content?",
    options: ["A. Auto Fill", "B. Auto Fit", "C. Auto Complete", "D. Auto Sum"],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 16. Phishing
  {
    id: 16,
    type: 1,
    text: "What is stealing personal information through fake links called?",
    options: ["A. Phishing", "B. Trolling", "C. Piracy", "D. Cyberstalking"],
    correct: 0,
    maxScore: 10,
    category: "Security",
  },

  // 17. Microphone device type
  {
    id: 17,
    type: 1,
    text: "During a video conference, microphone issues relate to which type of device?",
    options: [
      "A. Input device",
      "B. Output device",
      "C. Storage device",
      "D. Network device",
    ],
    correct: 0,
    maxScore: 10,
    category: "Hardware",
  },

  // 18. Bold text
  {
    id: 18,
    type: 1,
    text: "Making text bold is an example of what?",
    options: ["A. Editing", "B. Formatting", "C. Saving", "D. Printing"],
    correct: 1,
    maxScore: 10,
    category: "Software",
  },

  // 19. Minus sign in search
  {
    id: 19,
    type: 1,
    text: "What is the minus sign (-) used for in search engines?",
    options: [
      "A. To include the word mandatory",
      "B. To exclude the word from results",
      "C. To search for synonyms",
      "D. To sort by date",
    ],
    correct: 1,
    maxScore: 10,
    category: "Internet",
  },

  // 20. Camera eye contact
  {
    id: 20,
    type: 1,
    text: "Looking directly at the camera during video calls helps with what?",
    options: [
      "A. Decreases video quality",
      "B. Creates a professional appearance",
      "C. Increases internet speed",
      "D. Improves sound quality",
    ],
    correct: 1,
    maxScore: 10,
    category: "Ethics",
  },

  // ==================== TYPE 2: TWO ANSWERS (20 points each) - 10 questions = 200 points ====================

  // 21. Correct ways to give feedback
  {
    id: 21,
    type: 2,
    text: "Which two actions are correct ways to point out errors to a document author? (Choose two)",
    options: [
      "A. Write politely and respectfully",
      "B. Write in all capital letters",
      "C. Provide clear and accurate information in comments",
      "D. Criticize without reason",
    ],
    correct: [0, 2],
    maxScore: 20,
    category: "Ethics",
  },

  // 22. Benefits of teamwork
  {
    id: 22,
    type: 2,
    text: "What are the main benefits of teamwork? (Choose two)",
    options: [
      "A. Deeper understanding of the topic",
      "B. Everyone must work at the same pace",
      "C. Opportunity to share experience",
      "D. Responsibility decreases",
    ],
    correct: [0, 2],
    maxScore: 20,
    category: "Ethics",
  },

  // 23. FOMO examples
  {
    id: 23,
    type: 2,
    text: "Which situations are examples of FOMO (Fear Of Missing Out)? (Choose two)",
    options: [
      "A. Feeling bad when seeing friends having fun",
      "B. Buying a new gaming console to keep up with others",
      "C. Sending viruses",
      "D. Hacking accounts",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Ethics",
  },

  // 24. Opinion indicators
  {
    id: 24,
    type: 2,
    text: "Which signs indicate an article contains mostly opinions? (Choose two)",
    options: [
      "A. Statistical data is not provided",
      "B. Author insults others' opinions",
      "C. Sources are cited",
      "D. Date is clearly given",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Internet",
  },

  // 25. Video conference preparation
  {
    id: 25,
    type: 2,
    text: "Which two tasks should be done before a video conference? (Choose two)",
    options: [
      "A. Adjust camera to eye level",
      "B. Place strong light behind you",
      "C. Test technology beforehand",
      "D. Download games",
    ],
    correct: [0, 2],
    maxScore: 20,
    category: "Ethics",
  },

  // 26. Constructive feedback
  {
    id: 26,
    type: 2,
    text: "Which are rules for giving constructive feedback? (Choose two)",
    options: [
      "A. Write respectfully",
      "B. Provide clear evidence",
      "C. Insult the person",
      "D. Reject without reason",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Ethics",
  },

  // 27. Collaboration essentials
  {
    id: 27,
    type: 2,
    text: "What is important for effective collaboration on shared documents? (Choose two)",
    options: [
      "A. Assign roles",
      "B. Track versions",
      "C. Only one person can open the document",
      "D. Edit without comments",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Software",
  },

  // 28. Article reliability
  {
    id: 28,
    type: 2,
    text: "What should you consider when evaluating online article reliability? (Choose two)",
    options: [
      "A. Author and sources",
      "B. Publication date",
      "C. Image quality",
      "D. Number of ads",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Internet",
  },

  // 29. Cyberbullying examples
  {
    id: 29,
    type: 2,
    text: "Which are examples of cyberbullying? (Choose two)",
    options: [
      "A. Sending repeated insulting messages",
      "B. Mocking someone online",
      "C. Buying a new device",
      "D. Sharing study materials",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Security",
  },

  // 30. Data security recommendations
  {
    id: 30,
    type: 2,
    text: "What is recommended to improve data security? (Choose two)",
    options: [
      "A. Two-factor authentication",
      "B. Strong passwords",
      "C. Tell passwords to everyone",
      "D. Use the same password everywhere",
    ],
    correct: [0, 1],
    maxScore: 20,
    category: "Security",
  },

  // ==================== TYPE 2: THREE ANSWERS (30 points each) - 6 questions = 180 points ====================

  // 31. Cloud storage benefits
  {
    id: 31,
    type: 2,
    text: "Which three are benefits of using cloud storage? (Choose three)",
    options: [
      "A. Access files from anywhere",
      "B. Automatic backup",
      "C. Easy file sharing",
      "D. Files are always 100% secure",
      "E. Requires no internet connection",
    ],
    correct: [0, 1, 2],
    maxScore: 30,
    category: "Internet",
  },

  // 32. Strong passwords
  {
    id: 32,
    type: 2,
    text: "Which three are examples of strong passwords? (Choose three)",
    options: [
      "A. P@ssw0rd2024!",
      "B. 123456",
      "C. M!necr@ft$Gamer",
      "D. Qwerty123",
      "E. password",
      "F. Sun$hine2025",
    ],
    correct: [0, 2, 5],
    maxScore: 30,
    category: "Security",
  },

  // 33. Phishing email signs
  {
    id: 33,
    type: 2,
    text: "Which three are signs of a phishing email? (Choose three)",
    options: [
      "A. Urgent requests for personal information",
      "B. Suspicious links",
      "C. Poor grammar and spelling",
      "D. Email from a known friend",
      "E. Professional company logo",
      "F. Generic greetings like 'Dear Customer'",
    ],
    correct: [0, 1, 5],
    maxScore: 30,
    category: "Security",
  },

  // 34. Input devices
  {
    id: 34,
    type: 2,
    text: "Which three are examples of input devices? (Choose three)",
    options: [
      "A. Keyboard",
      "B. Monitor",
      "C. Mouse",
      "D. Printer",
      "E. Microphone",
      "F. Speaker",
    ],
    correct: [0, 2, 4],
    maxScore: 30,
    category: "Hardware",
  },

  // 35. Output devices
  {
    id: 35,
    type: 2,
    text: "Which three are examples of output devices? (Choose three)",
    options: [
      "A. Monitor",
      "B. Keyboard",
      "C. Speaker",
      "D. Printer",
      "E. Mouse",
      "F. Scanner",
    ],
    correct: [0, 2, 3],
    maxScore: 30,
    category: "Hardware",
  },

  // 36. Web browsers
  {
    id: 36,
    type: 2,
    text: "Which three are common web browsers? (Choose three)",
    options: [
      "A. Google Chrome",
      "B. Microsoft Word",
      "C. Mozilla Firefox",
      "D. Safari",
      "E. Adobe Reader",
      "F. Microsoft Edge",
    ],
    correct: [0, 2, 5],
    maxScore: 30,
    category: "Software",
  },

  // ==================== TYPE 3: TRUE/FALSE (10-40 points) - 14 questions = 380 points ====================

  // 37. HDMI cable
  {
    id: 37,
    type: 3,
    text: "Select True or False: HDMI cable can connect a computer to a monitor.",
    statements: ["HDMI cable can connect a computer to a monitor."],
    correct: [1],
    maxScore: 10,
    category: "Hardware",
  },

  // 38. DVI cable
  {
    id: 38,
    type: 3,
    text: "Select True or False: DVI cable can transfer data between two computers over a network.",
    statements: [
      "DVI cable can transfer data between two computers over a network.",
    ],
    correct: [0],
    maxScore: 10,
    category: "Hardware",
  },

  // 39. 64-bit processors
  {
    id: 39,
    type: 3,
    text: "Select True or False: Most modern processors support 64-bit systems.",
    statements: ["Most modern processors support 64-bit systems."],
    correct: [1],
    maxScore: 10,
    category: "Hardware",
  },

  // 40. CPU cooling
  {
    id: 40,
    type: 3,
    text: "Select True or False: A CPU can function without a cooling system.",
    statements: ["A CPU can function without a cooling system."],
    correct: [0],
    maxScore: 10,
    category: "Hardware",
  },

  // 41. Cloud upload
  {
    id: 41,
    type: 3,
    text: "Select True or False: When you upload a file to cloud storage, it is automatically deleted from your computer.",
    statements: [
      "When you upload a file to cloud storage, it is automatically deleted from your computer.",
    ],
    correct: [0],
    maxScore: 10,
    category: "Internet",
  },

  // 42. FTP transfer
  {
    id: 42,
    type: 3,
    text: "Select True or False: Files can be sent to centralized storage via FTP.",
    statements: ["Files can be sent to centralized storage via FTP."],
    correct: [1],
    maxScore: 10,
    category: "Internet",
  },

  // 43. Cloud backups
  {
    id: 43,
    type: 3,
    text: "Select True or False: Cloud systems can support automatic backups.",
    statements: ["Cloud systems can support automatic backups."],
    correct: [1],
    maxScore: 10,
    category: "Internet",
  },

  // 44. RAM data retention
  {
    id: 44,
    type: 3,
    text: "Select True or False: Data in RAM is retained after power is turned off.",
    statements: ["Data in RAM is retained after power is turned off."],
    correct: [0],
    maxScore: 10,
    category: "Hardware",
  },

  // 45. Strong password
  {
    id: 45,
    type: 3,
    text: "Select True or False: A strong password should include letters, numbers, and symbols.",
    statements: [
      "A strong password should include letters, numbers, and symbols.",
    ],
    correct: [1],
    maxScore: 10,
    category: "Security",
  },

  // 46. Comments in documents
  {
    id: 46,
    type: 3,
    text: "Select True or False: Comment text changes the main content of a document.",
    statements: ["Comment text changes the main content of a document."],
    correct: [0],
    maxScore: 10,
    category: "Software",
  },

  // 47. Cloud internet requirement
  {
    id: 47,
    type: 3,
    text: "Select True or False: Cloud storage only works when you have internet connection.",
    statements: ["Cloud storage only works when you have internet connection."],
    correct: [1],
    maxScore: 10,
    category: "Internet",
  },

  // 48. Academic sources
  {
    id: 48,
    type: 3,
    text: "Select True or False: Every website is a valid academic source.",
    statements: ["Every website is a valid academic source."],
    correct: [0],
    maxScore: 10,
    category: "Internet",
  },

  // 49. Version history
  {
    id: 49,
    type: 3,
    text: "Select True or False: Version history is only for viewing, not restoring.",
    statements: ["Version history is only for viewing, not restoring."],
    correct: [0],
    maxScore: 10,
    category: "Software",
  },

  // 50. CPU function
  {
    id: 50,
    type: 3,
    text: "Select True or False: The CPU is the main processing center of a computer.",
    statements: ["The CPU is the main processing center of a computer."],
    correct: [1],
    maxScore: 10,
    category: "Hardware",
  },
];

const level3Questions = [
  // ==================== TYPE 1 - SINGLE ANSWER (10 points each) ====================
  // Total: 20 questions × 10 = 200 points
  {
    id: 1,
    type: 1,
    text: "In Information Technology, what is the correct term for using software to create repeatable instructions and processes to replace human interaction?",
    options: ["Asynchronous", "Automation", "Robotics", "Security"],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 2,
    type: 1,
    text: "CPU, graphics card, and network card are what type of device?",
    options: [
      "Input device",
      "Output device",
      "Processing device",
      "Storage device",
    ],
    correct: 2,
    maxScore: 10,
  },
  {
    id: 3,
    type: 1,
    text: "Which software feature corrects spelling errors as you type and can guess letters based on nearby keys?",
    options: ["Autocorrect", "Grammar Checker", "Automation", "Autocomplete"],
    correct: 0,
    maxScore: 10,
  },
  {
    id: 4,
    type: 1,
    text: "What does collated printing do?",
    options: [
      "Prints all copies of page 1 first, then all copies of page 2",
      "Prints pages in order: page 1, then 2, then 3 regardless of copies",
      "Prints on both sides of the paper",
      "Prints multiple pages on one sheet",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 5,
    type: 1,
    text: "You have multiple Microsoft accounts. You are logged into your family account but need to access a file shared with your gaming account. What should you do?",
    options: [
      "Reconfigure both accounts to use the same login",
      "Link your gaming account to your family account",
      "Switch from family account to gaming account",
      "Set up a shared Google account for both",
    ],
    correct: 2,
    maxScore: 10,
  },
  {
    id: 6,
    type: 1,
    text: "Using a search engine will return a list of ______.",
    options: ["answers", "requests", "search results", "browsers"],
    correct: 2,
    maxScore: 10,
  },
  {
    id: 7,
    type: 1,
    text: "Which print option prints front and back pages in the same orientation?",
    options: [
      "Print One Sided",
      "Print on Both Sides: Flip pages on long edge",
      "Print on Both Sides: Flip pages on short edge",
      "Manually Print on Both Sides",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 8,
    type: 1,
    text: "In which group under the Review tab can a user find options to combine documents?",
    options: ["Proofing", "Tracking", "Changes", "Compare"],
    correct: 3,
    maxScore: 10,
  },
  {
    id: 9,
    type: 1,
    text: "What does URL stand for?",
    options: [
      "Universal Resource Locator",
      "Uniform Research Language",
      "United Random Link",
      "User Response List",
    ],
    correct: 0,
    maxScore: 10,
  },
  {
    id: 10,
    type: 1,
    text: "What is phishing?",
    options: [
      "A type of computer virus",
      "Fake emails to steal personal information",
      "An online fishing game",
      "Security software",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 11,
    type: 1,
    text: "What does 2FA stand for?",
    options: [
      "Two passwords",
      "Two forms of verification",
      "Two accounts",
      "Two changes",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 12,
    type: 1,
    text: "What is the best format for sharing documents that should not be easily edited?",
    options: [".docx", ".txt", ".pdf", ".rtf"],
    correct: 2,
    maxScore: 10,
  },
  {
    id: 13,
    type: 1,
    text: "What does ISP stand for?",
    options: [
      "Internet Service Provider",
      "Internal Security Protocol",
      "Internet Speed Provider",
      "International Service Program",
    ],
    correct: 0,
    maxScore: 10,
  },
  {
    id: 14,
    type: 1,
    text: "What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Rapid Access Memory",
      "Random Allocation Memory",
    ],
    correct: 0,
    maxScore: 10,
  },
  {
    id: 15,
    type: 1,
    text: "What is a web browser?",
    options: [
      "Word processor",
      "Software used to access the web",
      "Email client",
      "A type of game",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 16,
    type: 1,
    text: "What is the purpose of a firewall?",
    options: [
      "Cool the computer",
      "Block unauthorized access",
      "Increase internet speed",
      "Remove viruses",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 17,
    type: 1,
    text: "What does CC mean in email?",
    options: [
      "Copy Certificate",
      "Carbon Copy",
      "Confidential Copy",
      "Closed Circuit",
    ],
    correct: 1,
    maxScore: 10,
  },
  {
    id: 18,
    type: 1,
    text: "What does Wi-Fi stand for?",
    options: ["Wireless Fidelity", "Wide Fiber", "Wire Free", "Windows Finder"],
    correct: 0,
    maxScore: 10,
  },
  {
    id: 19,
    type: 1,
    text: "Which is a strong password?",
    options: ["123456", "password123", "M!necr@ft2024$", "admin"],
    correct: 2,
    maxScore: 10,
  },
  {
    id: 20,
    type: 1,
    text: "What is another term for double-sided printing?",
    options: ["Simplex", "Duplex", "Two-line printing", "Book printing"],
    correct: 1,
    maxScore: 10,
  },

  // ==================== TYPE 2 - CHOOSE TWO (20 points each) ====================
  // Total: 10 questions × 20 = 200 points
  {
    id: 21,
    type: 2,
    text: "Which two options are correct about cloud storage? (Choose two)",
    options: [
      "It stores files in a remote physical location",
      "Storage space is unlimited",
      "Users access files via the internet from any device",
      "It allows users to send messages quickly",
      "Users must have an account and log in to view or save files",
    ],
    correct: [0, 2],
    maxScore: 20,
  },
  {
    id: 22,
    type: 2,
    text: "Which two browser settings can be changed to meet personal needs and preferences? (Choose two)",
    options: [
      "Naming URLs",
      "Adding browser extensions",
      "Disabling cookies",
      "Adding content to Help",
    ],
    correct: [1, 2],
    maxScore: 20,
  },
  {
    id: 23,
    type: 2,
    text: "When creating an appointment on a personal digital calendar, which two settings can you typically customize? (Choose two)",
    options: [
      "Cost of the event",
      "Event host",
      "How often to repeat the event",
      "Reminders",
    ],
    correct: [2, 3],
    maxScore: 20,
  },
  {
    id: 24,
    type: 2,
    text: "Which two features allow you to control the display of specific information on your personal calendar? (Choose two)",
    options: [
      "Disable calendar",
      "Share",
      "Filter by event category",
      "Keep private",
    ],
    correct: [2, 3],
    maxScore: 20,
  },
  {
    id: 25,
    type: 2,
    text: "To help someone with poor eyesight, which two settings should you change to make the device easier to view? (Choose two)",
    options: ["Font size", "Volume", "Colors", "Ring tones"],
    correct: [0, 2],
    maxScore: 20,
  },
  {
    id: 26,
    type: 2,
    text: "Which two steps must you complete to provide a digital family calendar to all family members? (Choose two)",
    options: [
      "Share the calendar",
      "Copy the calendar to each device",
      "Print copies for each member",
      "Invite members",
    ],
    correct: [0, 3],
    maxScore: 20,
  },
  {
    id: 27,
    type: 2,
    text: "What are two benefits of online anonymity? (Choose two)",
    options: [
      "It allows cyberbullying without accountability",
      "It allows people to be authentic without fear of retaliation",
      "It allows judging others without being affected",
      "It allows discussion of unpopular ideas",
    ],
    correct: [1, 3],
    maxScore: 20,
  },
  {
    id: 28,
    type: 2,
    text: "What are two appropriate reasons to use an online alias instead of your real name? (Choose two)",
    options: [
      "To comment in ways you wouldn't in person",
      "To impersonate someone else",
      "To stand out with a common name",
      "To keep personal and business identities separate",
    ],
    correct: [0, 3],
    maxScore: 20,
  },
  {
    id: 29,
    type: 2,
    text: "Which two filters will narrow image search results to show clip art available without the artist's permission? (Choose two)",
    options: ["Usage Rights", "Color", "Type", "Time"],
    correct: [0, 2],
    maxScore: 20,
  },
  {
    id: 30,
    type: 2,
    text: "Which two options explain a centralized data storage system? (Choose two)",
    options: [
      "Document management systems like SharePoint",
      "Databases tracking inventory and orders",
      "Sharing your computer's hard drive with others",
      "Storage devices inside the computer",
    ],
    correct: [0, 1],
    maxScore: 20,
  },

  // ==================== TYPE 2 - CHOOSE THREE (30 points each) ====================
  // Total: 10 questions × 30 = 300 points
  {
    id: 31,
    type: 2,
    text: "Which three steps will help you distinguish between relevant and irrelevant search results? (Choose three)",
    options: [
      "Identify the main topic and search for it",
      "Identify keywords in results related to the topic",
      "Everything is always relevant; read it all",
      "Nothing on the Internet is relevant",
      "Identify results without keywords related to the main topic",
      "Ask a teacher for help",
    ],
    correct: [0, 1, 4],
    maxScore: 30,
  },
  {
    id: 32,
    type: 2,
    text: "What three steps can users take to determine the validity of information online? (Choose three)",
    options: [
      "Identify where the information comes from",
      "Determine if the author wrote popular books",
      "Identify the author and their authority on the topic",
      "Discredit authors friends don't trust",
      "Determine whether the information is current",
    ],
    correct: [0, 2, 4],
    maxScore: 30,
  },
  {
    id: 33,
    type: 2,
    text: "Which three are examples of system software? (Choose three)",
    options: ["Windows", "macOS", "Linux", "Microsoft Word", "Google Chrome"],
    correct: [0, 1, 2],
    maxScore: 30,
  },
  {
    id: 34,
    type: 2,
    text: "Which three are main computer components? (Choose three)",
    options: ["CPU", "RAM", "Hard Drive", "Microsoft Office", "Windows 11"],
    correct: [0, 1, 2],
    maxScore: 30,
  },
  {
    id: 35,
    type: 2,
    text: "Which three are image file extensions? (Choose three)",
    options: [".jpg", ".png", ".gif", ".mp3", ".docx"],
    correct: [0, 1, 2],
    maxScore: 30,
  },
  {
    id: 36,
    type: 2,
    text: "Which three are document file extensions? (Choose three)",
    options: [".docx", ".pdf", ".txt", ".mp4", ".exe"],
    correct: [0, 1, 2],
    maxScore: 30,
  },
  {
    id: 37,
    type: 2,
    text: "Which three are types of data storage devices? (Choose three)",
    options: ["HDD", "SSD", "USB Flash Drive", "CPU", "RAM"],
    correct: [0, 1, 2],
    maxScore: 30,
  },
  {
    id: 38,
    type: 2,
    text: "Which three are correct statements about compressing files? (Choose three)",
    options: [
      "Multiple files can be packaged into one .zip or .rar file",
      "A compressed file takes more storage space than the original",
      "A compressed file is usually smaller than the original",
      "Only image files can be compressed",
    ],
    correct: [0, 2],
    maxScore: 30,
  },
  {
    id: 39,
    type: 2,
    text: "Which three are correct statements about filling out forms? (Choose three)",
    options: [
      "When multiple checkboxes appear, you can only choose one",
      "If you hold Ctrl, you can select multiple items from a drop-down list",
      "Answers are not recorded until you click submit",
      "When multiple radio buttons appear, you can select more than one with Ctrl",
    ],
    correct: [1, 2],
    maxScore: 30,
  },
  {
    id: 40,
    type: 2,
    text: "Which three are ways to distinguish personal digital identity from professional identity? (Choose three)",
    options: [
      "Create an alias for entertainment forums but use real name for technical forums",
      "Never post photos",
      "Use LinkedIn for professional purposes and Facebook for personal posts",
      "Only follow celebrities on Twitter",
    ],
    correct: [0, 2],
    maxScore: 30,
  },

  // ==================== TYPE 3 - TRUE/FALSE (10 points per correct statement) ====================
  // Total: 5 questions × variable points = 300 points
  {
    id: 41,
    type: 3,
    text: "Evaluate the following statements about password-protecting files. Mark each statement as True or False.",
    statements: [
      "In Microsoft Excel, you can password-protect only parts of a workbook or the entire workbook.",
      "In Adobe, you can password-protect a .pdf document when opening it.",
      "In Windows 10 and newer, you can password-protect individual files and folders.",
    ],
    correct: [1, 1, 0],
    maxScore: 30,
  },
  {
    id: 42,
    type: 3,
    text: "Evaluate the following statements about computer hardware. Mark each statement as True or False.",
    statements: [
      "The CPU is the brain of the computer.",
      "RAM stores data permanently.",
      "An SSD is faster than an HDD.",
      "A monitor is an input device.",
    ],
    correct: [1, 0, 1, 0],
    maxScore: 40,
  },
  {
    id: 43,
    type: 3,
    text: "Evaluate the following statements about internet safety. Mark each statement as True or False.",
    statements: [
      "Public WiFi is safe for online banking.",
      "HTTPS indicates a secure connection.",
      "Cookies are always viruses.",
      "2FA increases account security.",
    ],
    correct: [0, 1, 0, 1],
    maxScore: 40,
  },
  {
    id: 44,
    type: 3,
    text: "Evaluate the following statements about password security. Mark each statement as True or False.",
    statements: [
      "Use a mix of letters, numbers, and symbols.",
      "Using your birthdate is a strong password.",
      "Change passwords regularly.",
      "Use the same password for email and banking.",
    ],
    correct: [1, 0, 1, 0],
    maxScore: 40,
  },
  {
    id: 45,
    type: 3,
    text: "Evaluate the following statements about email etiquette. Mark each statement as True or False.",
    statements: [
      "Using ALL CAPS is considered shouting.",
      "Always use 'Reply All' for every email.",
      "Use clear subject lines.",
      "Forward emails without permission.",
    ],
    correct: [1, 0, 1, 0],
    maxScore: 40,
  },
];