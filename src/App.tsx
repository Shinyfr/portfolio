import BackgroundEffects from "./components/layout/BackgroundEffects";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CommunitiesSection from "./components/sections/CommunitiesSection";
import FroggysLandSection from "./components/sections/FroggysLandSection";
import ThemeToggle from "./components/ui/ThemeToggle";

function App(): JSX.Element {
  return (
    <div className="page">
      <BackgroundEffects />

      <main className="container">
        <Navbar />
        <div className="mobile-theme-toggle">
          <ThemeToggle />
        </div>
        <HeroSection />
        <ExperienceSection />
        <CommunitiesSection />
        <FroggysLandSection />
      </main>
    </div>
  );
}

export default App;