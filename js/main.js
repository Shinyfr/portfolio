const THEME_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const themeButtons = document.querySelectorAll("[data-theme-toggle]");

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || LIGHT_THEME;
}

function applyTheme(theme) {
  const nextTheme = theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);

  themeButtons.forEach((button) => {
    const isLight = nextTheme === LIGHT_THEME;
    const label = isLight ? "Activer le thème sombre" : "Activer le thème clair";

    button.textContent = isLight ? "🌙" : "☀️";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || LIGHT_THEME;
  applyTheme(currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", toggleTheme);
});

applyTheme(getSavedTheme());
