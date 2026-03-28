import { communities } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import CommunityCard from "../ui/CommunityCard";

function CommunitiesSection(): JSX.Element {
  return (
    <section className="section" id="communities">
      <SectionHeading
        title="Communautés"
      />

      <div className="cards-grid cards-grid--equal">
        {communities.map((community) => (
          <CommunityCard
            key={community.name}
            badge={community.badge}
            name={community.name}
            description={community.description}
            href={community.href}
            buttonLabel={community.buttonLabel}
            buttonVariant={community.buttonVariant}
          />
        ))}
      </div>
    </section>
  );
}

export default CommunitiesSection;