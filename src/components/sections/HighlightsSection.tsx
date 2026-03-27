import { skills } from "../../data/portfolioData";
import SkillChip from "../ui/SkillChip";

function HighlightsSection(): JSX.Element {
  return (
    <div className="glass panel" id="skills">
      <p className="mini-label">Points forts</p>
      <h2 className="panel-title">Ce que j’apporte</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}

export default HighlightsSection;