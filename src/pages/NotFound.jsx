import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="cp-404" style={{ flexDirection: 'column' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="cp-btn cp-btn-green" style={{ padding: '12px 24px', fontSize: '.9rem', borderRadius: 10 }}>
          <i className="fas fa-home"></i>
          Back to Home
        </Link>
        <Link to="/events/innoventure-club-26" className="cp-btn cp-btn-ghost" style={{ padding: '12px 24px', fontSize: '.9rem', borderRadius: 10 }}>
          <i className="fas fa-calendar-alt"></i>
          View Events
        </Link>
      </div>
    </div>
  );
}
