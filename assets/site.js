
    const languageRoot = document.documentElement;
    const languageButton = document.getElementById("langToggle");
    const translatedElements = document.querySelectorAll("[data-id][data-en]");
    const description = document.querySelector('meta[name="description"]');
    document.getElementById("year").textContent = new Date().getFullYear();

    function applyLanguage(language) {
      languageRoot.dataset.lang = language;
      languageRoot.lang = language;
      translatedElements.forEach((element) => {
        element.textContent = language === "en"
          ? element.getAttribute("data-en")
          : element.getAttribute("data-id");
      });
      languageButton.textContent = language === "id" ? "EN" : "ID";
      languageButton.setAttribute(
        "aria-label",
        language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"
      );
      if (document.body.dataset.page === "home") {
        document.title = language === "id"
          ? "TukangPLC — Belajar PLC dari praktik"
          : "TukangPLC — Practical PLC learning";
        description.content = language === "id"
          ? "TukangPLC — tutorial PLC umum, TwinCAT, dan PC-Based Control."
          : "TukangPLC — practical tutorials on PLC, TwinCAT, and PC-Based Control.";
      }
      try {
        localStorage.setItem("tukangplc-language", language);
      } catch (_) {}
    }

    let initialLanguage = "id";
    try {
      initialLanguage = localStorage.getItem("tukangplc-language") || "id";
    } catch (_) {}
    applyLanguage(initialLanguage);
    languageButton.addEventListener("click", () => {
      applyLanguage(languageRoot.dataset.lang === "id" ? "en" : "id");
    });
  
