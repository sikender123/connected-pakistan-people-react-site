export default function SectionHeader({ icon, title, count }) {
  return (
    <div className="cp-section-header">
      {icon && <i className={`fas ${icon}`}></i>}
      <h2>{title}</h2>
      {count !== undefined && (
        <span className="count-badge">{count}</span>
      )}
    </div>
  );
}
