function MetricCard({
  label,
  value,
  icon,
  percentage,
  description,
  cardClass,
}) {
  return (
    <article className={`metric-card ${cardClass}`}>
      <div className="metric-top">
        <span className="metric-label">{label}</span>

        <span className="metric-icon">
          <i className={`bi ${icon}`}></i>
        </span>
      </div>

      <div className="metric-value">{value}</div>

      <div className="metric-meta">
        <span>{percentage}</span>
        <span>{description}</span>
      </div>
    </article>
  );
}

export default MetricCard;
