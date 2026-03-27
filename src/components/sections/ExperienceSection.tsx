import { experiences } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "../ui/ExperienceCard";

function ExperienceSection(): JSX.Element {
  return (
    <section className="section" id="experience">
      <SectionHeading
        title="Mon expérience"
        subtitle="Je suis présente dans des contextes où la réactivité, le calme, l’accompagnement et la compréhension des personnes sont essentiels."
      />

      <div className="cards-grid">
        {experiences.map((item) => (
          <ExperienceCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;