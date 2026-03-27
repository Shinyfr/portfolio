type ExperienceCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

function ExperienceCard({
  title,
  subtitle,
  description
}: ExperienceCardProps): JSX.Element {
  return (
    <article className="glass info-card">
      <div className="card-badge">{subtitle}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </article>
  );
}

export default ExperienceCard;