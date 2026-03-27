type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps): JSX.Element {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
  );
}

export default StatCard;