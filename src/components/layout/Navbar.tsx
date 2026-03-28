import { navItems } from "../../data/portfolioData";
import { useEffect, useState } from "react";

function Navbar(): JSX.Element {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme ?? "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar glass">
      <a href="#" className="brand">
        <div className="brand-badge brand-badge--image">
          <img src="/Shiny.png" alt="Shiny" />
        </div>
        <span>Shiny</span>
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          theme === "light"
            ? "Activer le thème sombre"
            : "Activer le thème clair"
        }
        title={
          theme === "light"
            ? "Activer le thème sombre"
            : "Activer le thème clair"
        }
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;