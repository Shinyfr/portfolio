type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

function SectionHeading({
  title,
  subtitle
}: SectionHeadingProps): JSX.Element {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </>
  );
}

export default SectionHeading;