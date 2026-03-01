// ==================== SCREENSHOTNI BLOKLASH - QORA EKRAN ====================

(function() {
    // ==================== QORA EKRAN YARATISH ====================
    function showBlackScreen() {
        // Qora ekran elementi
        const blackScreen = document.createElement('div');
        blackScreen.id = 'screenshot-block';
        blackScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            z-index: 999999;
            display: block;
            pointer-events: none;
        `;
        
        // Eski qora ekranni o'chirish
        const oldScreen = document.getElementById('screenshot-block');
        if (oldScreen) oldScreen.remove();
        
        // Yangi qora ekranni qo'shish
        document.body.appendChild(blackScreen);
        
        // 100ms dan keyin qora ekranni olib tashlash
        setTimeout(() => {
            const screen = document.getElementById('screenshot-block');
            if (screen) screen.remove();
        }, 100);
    }

    // ==================== PRINTSCREEN TUGMASI ====================
    document.addEventListener('keydown', function(e) {
        // PrintScreen tugmasi
        if (e.key === 'PrintScreen' || e.keyCode === 44) {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
        
        // Windows + Shift + S (Snipping Tool)
        if (e.metaKey && e.shiftKey && e.key === 's') {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
        
        // Alt + PrintScreen
        if (e.altKey && (e.key === 'PrintScreen' || e.keyCode === 44)) {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
    });

    // ==================== MOBILE UCHUN ====================
    // App background ga o'tganda (screenshot olinayotganda)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // App background ga o'tdi - qora ekranga tayyorlanish
            window.screenshotTaking = true;
        } else {
            // App ga qaytib keldi
            if (window.screenshotTaking) {
                showBlackScreen();
                window.screenshotTaking = false;
            }
        }
    });
    
    // App switch (multitasking)
    window.addEventListener('blur', function() {
        window.appBlurTime = Date.now();
    });
    
    window.addEventListener('focus', function() {
        if (window.appBlurTime) {
            const blurDuration = Date.now() - window.appBlurTime;
            // 100ms dan 2 soniyagacha - screenshot uchun tipik vaqt
            if (blurDuration > 100 && blurDuration < 2000) {
                showBlackScreen();
            }
            window.appBlurTime = null;
        }
    });

    // ==================== DEVELOPER TOOLS ====================
    // F12, Ctrl+Shift+I, Ctrl+Shift+J ni bloklash
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
        
        // Ctrl+Shift+I
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
        
        // Ctrl+Shift+J
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'j' || e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
        
        // Ctrl+U (view source)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            showBlackScreen();
            return false;
        }
    });

    // ==================== KONTEKST MENYU ====================
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    // ==================== COPY/PASTE ====================
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    
    document.addEventListener('paste', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            if (e.key === 'x' || e.key === 'X' || e.keyCode === 88) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            if (e.key === 'v' || e.key === 'V' || e.keyCode === 86) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    });

    // ==================== MATN TANLASHNI BLOKLASH ====================
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    
    // CSS orqali tanlashni bloklash
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
        }
    `;
    document.head.appendChild(style);

    console.log('✅ Screenshot bloklash tizimi faollashtirildi');
})();