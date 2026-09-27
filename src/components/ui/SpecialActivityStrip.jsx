export default function SpecialActivityStrip({ activity }) {
  if (!activity) return null;
  return (
    <div className="cp-activity-strip">
      <div className="cp-activity-inner">
        <div className="cp-activity-tag">
          <i className="fas fa-star"></i>
          {activity.title}
        </div>
        <div className="cp-activity-meta">
          <div className="cp-activity-item">
            <i className="fas fa-calendar-alt"></i>
            {activity.date}
          </div>
          <div className="cp-activity-item">
            <i className="fas fa-clock"></i>
            {activity.time}
          </div>
          <div className="cp-activity-item">
            <i className="fas fa-map-marker-alt"></i>
            {activity.location}
          </div>
        </div>
      </div>
    </div>
  );
}
