import { stats } from "../../data/portfolioData";
import StatCard from "../ui/StatCard";

function HeroSection(): JSX.Element {
  return (
    <section className="hero">
      <div className="glass hero-left">

        <h1 className="hero-title">
          Salut, moi c’est <span className="hero-title-word">Shiny !</span>
        </h1>

        <p className="hero-text">
          J'ai 21 ans, je fais des études en informatique et je suis très active sur discord !
          Je suis une personne qui adore les grenouilles et manger des cookies 🍪
        </p>

        <div className="hero-buttons">
          <a className="btn btn-primary" href="#experience">
            Voir mon expérience
          </a>
          <a className="btn btn-secondary" href="#communities">
            Voir les communautés
          </a>
        </div>
      </div>

      <div className="glass hero-card">
        <div className="username-tag">@Shinyfr</div>

        <div className="profile-top">
          <img
            src="/Shiny.png"
            alt="Photo de profil de Shiny"
            className="profile-image"
          />

          <div>
            <h2 className="profile-name">Shiny</h2>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;