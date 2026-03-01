// ==================== TO'LIQ SCREENSHOT BLOKLASH ====================

(function() {
    // ==================== ASOSIY HIMOYA ====================
    
    // 1. Barcha tugmalarni bloklash
    document.addEventListener('keydown', function(e) {
        // PrintScreen tugmasi (44 - PrintScreen kodi)
        if (e.key === 'PrintScreen' || e.keyCode === 44 || e.which === 44) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Windows + Shift + S (Snipping Tool)
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Alt + PrintScreen
        if (e.altKey && (e.key === 'PrintScreen' || e.keyCode === 44)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Ctrl + PrintScreen
        if (e.ctrlKey && (e.key === 'PrintScreen' || e.keyCode === 44)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, true); // Capture phase da ishlash
    
    // 2. Visibility change - app background ga o'tganda
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Sahifa yashirin bo'lganda - contentni o'chirish
            document.body.style.opacity = '0';
            document.body.style.transition = 'none';
        } else {
            // Sahifa ko'ringanda - contentni qaytarish
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        }
    });
    
    // 3. Blur/Focus - app almashtirilganda
    window.addEventListener('blur', function() {
        // Boshqa app ga o'tganda - contentni yashirish
        document.body.style.opacity = '0';
        document.documentElement.style.backgroundColor = 'black';
    });
    
    window.addEventListener('focus', function() {
        // Qaytib kelganda - contentni ko'rsatish
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.documentElement.style.backgroundColor = '';
        }, 200);
    });
    
    // 4. Resize event - ekran o'lchami o'zgarganda (split screen, screenshot ilovalari)
    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;
    
    setInterval(function() {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        
        if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
            // Ekran o'lchami o'zgardi - screenshot ilovasi ochilgan bo'lishi mumkin
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 300);
            
            lastWidth = currentWidth;
            lastHeight = currentHeight;
        }
    }, 100);
    
    // 5. CSS himoya - hech narsa tanlanmasin
    const style = document.createElement('style');
    style.innerHTML = `
        /* Barcha elementlarni tanlashni bloklash */
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
            -webkit-tap-highlight-color: transparent !important;
        }
        
        /* Rasm va videolarni himoyalash */
        img, video, canvas, iframe {
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            pointer-events: none !important;
        }
        
        /* Butun sahifani himoyalash */
        body {
            -webkit-text-size-adjust: none !important;
            -moz-text-size-adjust: none !important;
            -ms-text-size-adjust: none !important;
            text-size-adjust: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // 6. Developer Tools bloklash
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+U
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);
    
    // 7. O'ng tugma menyu bloklash
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // 8. Copy/Paste bloklash
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    document.addEventListener('paste', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // 9. Touch event larni bloklash (mobile)
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            // Multi-touch - screenshot bo'lishi mumkin
            e.preventDefault();
            e.stopPropagation();
        }
    }, { passive: false });
    
    // 10. Select start bloklash
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // 11. Drag start bloklash
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // 12. Drop bloklash
    document.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // 13. Kontekst menyu (mobile long press)
    document.addEventListener('touchhold', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // 14. Sahifa yopilishini oldini olish
    window.addEventListener('beforeunload', function(e) {
        // Sahifa yopilayotganda
        return undefined;
    });
    
    // 15. Iframe himoya
    if (window.self !== window.top) {
        window.top.location.href = window.self.location.href;
    }
    
    // 16. Console.log ni o'chirish
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
    console.info = function() {};
    console.debug = function() {};
    
    // 17. DevTools ochilganini aniqlash
    let devToolsOpen = false;
    const element = new Image();
    
    Object.defineProperty(element, 'id', {
        get: function() {
            if (!devToolsOpen) {
                devToolsOpen = true;
                // DevTools ochilganda contentni yashirish
                document.body.style.opacity = '0';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 500);
            }
            return '';
        }
    });
    
    setInterval(function() {
        devToolsOpen = false;
        console.log(element);
        console.clear();
    }, 500);
    
    // 18. Mobile uchun qo'shimcha
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Volume tugmalari bosilganda
        document.addEventListener('keydown', function(e) {
            if (e.key === 'AudioVolumeUp' || e.key === 'AudioVolumeDown' || 
                e.keyCode === 175 || e.keyCode === 174) {
                // Volume tugmasi - screenshot bo'lishi mumkin
                document.body.style.opacity = '0';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 300);
            }
        });
        
        // Power tugmasi (ba'zi telefonlar)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                // Power tugmasi bosilgan
                document.body.style.opacity = '0';
            }
        });
    }
    
    // 19. Canvas orqali screenshot olishni bloklash
    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    const originalToBlob = HTMLCanvasElement.prototype.toBlob;
    
    HTMLCanvasElement.prototype.toDataURL = function() {
        // Canvas dan ma'lumot olishni bloklash
        return '';
    };
    
    HTMLCanvasElement.prototype.toBlob = function() {
        // Canvas dan blob olishni bloklash
        return null;
    };
    
    // 20. Web API orqali screenshot olishni bloklash
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;
        navigator.mediaDevices.getDisplayMedia = function() {
            // Screen capture ni bloklash
            return Promise.reject(new Error('Screen capture is blocked'));
        };
    }
    
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
    console.info = function() {};
    console.debug = function() {};
    
    // Tayyor
    console.log('%c✅ SCREENSHOT BLOKLASH TIZIMI FAOL', 'color: green; font-size: 16px; font-weight: bold;');
})();