import BackgroundEffects from "./components/layout/BackgroundEffects";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CommunitiesSection from "./components/sections/CommunitiesSection";
import FroggysLandSection from "./components/sections/FroggysLandSection";

function App(): JSX.Element {
  return (
    <div className="page">
      <BackgroundEffects />

      <main className="container">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <CommunitiesSection />
        <FroggysLandSection />
      </main>
    </div>
  );
}

export default App;