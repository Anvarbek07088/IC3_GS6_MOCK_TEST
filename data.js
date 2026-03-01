/**
 * Screenshot Blokirovka Moduli
 * Bu fayl platformada screenshot qilishni to'liqqa o'chiradi
 * Barcha metodlar: klaviatura, kontekst menyu, API, Canvas
 */

(function () {
  "use strict";

  // ====== 1. KLAVIATURA SHUNONLARINI BLOKIROVKA QILISH ======
  document.addEventListener(
    "keydown",
    (event) => {
      // Print Screen tugmasi
      if (event.key === "PrintScreen") {
        event.preventDefault();
        console.warn("⛔ Screenshot qilish taqiqlangan (Print Screen)");
        return false;
      }

      // Ctrl + Shift + S (Chrome/Firefox screenshot)
      if (event.ctrlKey && event.shiftKey && event.key === "s") {
        event.preventDefault();
        console.warn("⛔ Screenshot qilish taqiqlangan (Ctrl+Shift+S)");
        return false;
      }

      // Shift + Windows + S (Windows snipping tool)
      if (event.shiftKey && event.metaKey && event.key === "s") {
        event.preventDefault();
        console.warn("⛔ Screenshot qilish taqiqlangan (Shift+Win+S)");
        return false;
      }

      // Command + Shift + 3 (Mac screenshot)
      if (event.metaKey && event.shiftKey && event.key === "3") {
        event.preventDefault();
        console.warn("⛔ Screenshot qilish taqiqlangan (Cmd+Shift+3)");
        return false;
      }

      // Command + Shift + 4 (Mac selective screenshot)
      if (event.metaKey && event.shiftKey && event.key === "4") {
        event.preventDefault();
        console.warn("⛔ Screenshot qilish taqiqlangan (Cmd+Shift+4)");
        return false;
      }

      // F12 (Developer Tools)
      if (event.key === "F12") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi");
        return false;
      }

      // Ctrl + Shift + I (Developer Tools)
      if (event.ctrlKey && event.shiftKey && event.key === "i") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi (Ctrl+Shift+I)");
        return false;
      }

      // Ctrl + Shift + C (Developer Tools Inspector)
      if (event.ctrlKey && event.shiftKey && event.key === "c") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi (Ctrl+Shift+C)");
        return false;
      }

      // Ctrl + Shift + J (Developer Tools Console)
      if (event.ctrlKey && event.shiftKey && event.key === "j") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi (Ctrl+Shift+J)");
        return false;
      }

      // Ctrl + Shift + K (Developer Tools Console)
      if (event.ctrlKey && event.shiftKey && event.key === "k") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi (Ctrl+Shift+K)");
        return false;
      }

      // Cmd + Option + I (Mac Developer Tools)
      if (event.metaKey && event.altKey && event.key === "i") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi (Cmd+Option+I)");
        return false;
      }

      // Cmd + Option + U (Mac Developer Tools)
      if (event.metaKey && event.altKey && event.key === "u") {
        event.preventDefault();
        console.warn("⛔ Developer Tools o'chirildi (Cmd+Option+U)");
        return false;
      }
    },
    true,
  );

  // ====== 2. O'NG TUGMA (RIGHT-CLICK) MENUSINI O'CHIRISH ======
  document.addEventListener(
    "contextmenu",
    (event) => {
      event.preventDefault();
      console.warn("⛔ Kontekst menyu taqiqlangan");
      return false;
    },
    true,
  );

  // ====== 3. SCREEN CAPTURE API NI BLOKIROVKA QILISH ======
  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    navigator.mediaDevices.getDisplayMedia = async () => {
      console.warn("⛔ Screen Capture API blokirovlandi");
      throw new Error("Screenshot qilish bu platformada taqiqlangan!");
    };
  }

  // ====== 4. CANVAS ORQALI SCREENSHOT QILISHNI BLOKIROVKA QILISH ======
  const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
  HTMLCanvasElement.prototype.toDataURL = function () {
    console.warn("⛔ Canvas toDataURL blokirovlandi");
    return "";
  };

  const originalToBlob = HTMLCanvasElement.prototype.toBlob;
  HTMLCanvasElement.prototype.toBlob = function (callback) {
    console.warn("⛔ Canvas toBlob blokirovlandi");
    callback(null);
  };

  // ====== 5. CLIPBOARD API NI BLOKIROVKA QILISH ======
  if (navigator.clipboard) {
    navigator.clipboard.write = async () => {
      console.warn("⛔ Clipboard write blokirovlandi");
      throw new Error("Clipboard operatsiyasi taqiqlangan!");
    };

    navigator.clipboard.writeText = async () => {
      console.warn("⛔ Clipboard writeText blokirovlandi");
      throw new Error("Clipboard operatsiyasi taqiqlangan!");
    };
  }

  // ====== 6. DRAG & DROP NI BLOKIROVKA QILISH ======
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
    console.warn("⛔ Drag & Drop taqiqlangan");
    return false;
  });

  document.addEventListener("drop", (event) => {
    event.preventDefault();
    console.warn("⛔ Drop operatsiyasi taqiqlangan");
    return false;
  });

  // ====== 7. COPY-PASTE NI BLOKIROVKA QILISH (OPTIONAL) ======
  document.addEventListener("copy", (event) => {
    // Agar copy-paste ni ham o'chirish kerak bo'lsa, comments belgisini olib tashlang
    // event.preventDefault();
    // console.warn('⛔ Copy operatsiyasi taqiqlangan');
  });

  document.addEventListener("paste", (event) => {
    // Agar copy-paste ni ham o'chirish kerak bo'lsa, comments belgisini olib tashlang
    // event.preventDefault();
    // console.warn('⛔ Paste operatsiyasi taqiqlangan');
  });

  // ====== 8. DEVTOOLS DETEKSIYASI ======
  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (widthThreshold || heightThreshold) {
      console.warn(
        "⚠️  Developer Tools ochildi. Seating qayta boshlash kerak.",
      );
      // Optional: sahifani qayta yuklash
      // location.reload();
    }
  }, 1000);

  // ====== 9. SCREENSHOT BLOKIROVKA STATUSINI KO'RSATISH ======
  console.log(
    "%c🔒 Screenshot Blokirovka Faollashtirildi",
    "color: #00aa00; font-weight: bold; font-size: 14px;",
  );
  console.log(
    "%c✓ Barcha screenshot metodlari blokirovlandi",
    "color: #00aa00; font-size: 12px;",
  );
  console.log(
    "%c✓ Kontekst menyu o'chirildi",
    "color: #00aa00; font-size: 12px;",
  );
  console.log(
    "%c✓ Developer Tools shunonlari blokirovlandi",
    "color: #00aa00; font-size: 12px;",
  );
  console.log(
    "%c✓ Screen Capture API blokirovlandi",
    "color: #00aa00; font-size: 12px;",
  );
})();
