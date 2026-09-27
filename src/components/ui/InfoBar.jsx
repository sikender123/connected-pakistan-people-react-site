import { Link } from 'react-router-dom';

export default function InfoBar({ event }) {
  const slug = event.eventSlug || event.slug || 'event';
  return (
    <div className="cp-info-bar">
      <div className="cp-info-grid">
        <div className="cp-info-cell">
          <div className="cp-info-label">Date</div>
          <div className="cp-info-value">
            <i className="fas fa-calendar-check"></i>
            {event.date}
          </div>
        </div>
        <div className="cp-info-cell">
          <div className="cp-info-label">Event Time</div>
          <div className="cp-info-value">
            <i className="fas fa-clock"></i>
            {event.time}
          </div>
        </div>
        <div className="cp-info-cell">
          <div className="cp-info-label">Location</div>
          <div className="cp-info-value">
            <i className="fas fa-map-marker-alt"></i>
            {event.location}
          </div>
        </div>
        <div className="cp-info-cell">
          <div className="cp-info-label">Tickets</div>
          <div className="cp-ticket-btns">
            {event.isPaid && (
              <Link to={`/get-tickets/${slug}`} className="cp-btn cp-btn-blue">
                <i className="fas fa-ticket-alt"></i>
                Get Tickets
              </Link>
            )}
            <Link to="/membership" className="cp-btn cp-btn-amber">
              <i className="fas fa-id-card"></i>
              Become a Member
            </Link>
            <Link to={`/terms/${slug}`} className="cp-btn cp-btn-ghost">
              <i className="fas fa-file-alt"></i>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
