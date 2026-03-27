type CommunityCardProps = {
  badge: string;
  name: string;
  description: string;
  href: string;
  buttonLabel: string;
  buttonVariant: "primary" | "secondary";
};

function CommunityCard({
  badge,
  name,
  description,
  href,
  buttonLabel,
  buttonVariant
}: CommunityCardProps): JSX.Element {
  const buttonClassName =
    buttonVariant === "secondary" ? "btn btn-secondary" : "btn btn-primary";

  return (
    <article className="glass info-card info-card--community">
      <div>
        <div className="card-badge">{badge}</div>
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>

      <div className="community-card-footer">
        <a
          className={buttonClassName}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {buttonLabel}
        </a>
      </div>
    </article>
  );
}

export default CommunityCard;