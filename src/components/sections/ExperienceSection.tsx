import { experiences } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "../ui/ExperienceCard";

function ExperienceSection(): JSX.Element {
  return (
    <section className="section" id="experience">
      <SectionHeading
        title="Mon expérience"
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