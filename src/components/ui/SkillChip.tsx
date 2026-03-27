type SkillChipProps = {
  label: string;
};

function SkillChip({ label }: SkillChipProps): JSX.Element {
  return <div className="skill-chip">{label}</div>;
}

export default SkillChip;