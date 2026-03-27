import { navItems } from "../../data/portfolioData";

function Navbar(): JSX.Element {
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
    </nav>
  );
}

export default Navbar;