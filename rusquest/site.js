(() => {
  const supported = ["en", "zh-Hans", "vi", "id"];
  const aliases = { zh: "zh-Hans", "zh-CN": "zh-Hans", "zh-SG": "zh-Hans" };
  const saved = localStorage.getItem("rusquest-language");
  const browser = aliases[navigator.language] || navigator.language;
  const initial = supported.includes(saved) ? saved : (supported.includes(browser) ? browser : "en");

  function selectLanguage(language) {
    const selected = supported.includes(language) ? language : "en";
    document.documentElement.lang = selected;
    document.querySelectorAll("[data-lang]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.lang === selected);
    });
    document.querySelectorAll("[data-select-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.selectLang === selected));
    });
    localStorage.setItem("rusquest-language", selected);
  }

  document.querySelectorAll("[data-select-lang]").forEach((button) => {
    button.addEventListener("click", () => selectLanguage(button.dataset.selectLang));
  });
  selectLanguage(initial);
})();
