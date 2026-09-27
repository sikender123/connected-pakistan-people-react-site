import { useParams, Link } from 'react-router-dom';
import { people } from '../data/siteData';

export default function PersonProfile() {
  const { slug } = useParams();
  const person = people.find(p => p.slug === slug);

  if (!person) {
    return (
      <div className="cp-profile-page">
        <div style={{ textAlign: 'center', padding: '100px 40px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: 12 }}>Person Not Found</h2>
          <p style={{ color: 'rgba(255,255,255,.5)', marginBottom: 24 }}>The profile you're looking for doesn't exist.</p>
          <Link to="/people" className="cp-btn cp-btn-green">← Browse All People</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cp-profile-page">
      {/* Hero */}
      <div className="cp-profile-hero">
        <div className="cp-profile-hero-inner">
          <img
            src={person.image}
            alt={person.name}
            className="cp-profile-photo"
            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=0c1a3a&color=00a86b&size=400`; }}
          />
          <div className="cp-profile-info">
            <h1 className="cp-profile-name">{person.name}</h1>
            <div className="cp-profile-role">
              {[person.role, person.org].filter(Boolean).join(' · ')}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '.78rem', color: 'rgba(255,255,255,.4)' }}>
                <i className="fas fa-heart" style={{ color: '#f87171' }}></i>
                {(person.likes || 0).toLocaleString()} likes
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '.78rem', color: 'rgba(255,255,255,.4)' }}>
                <i className="fas fa-eye"></i>
                {(person.views || 0).toLocaleString()} views
              </span>
            </div>
            {/* Social Icons */}
            {person.socials && (
              <div className="cp-profile-socials" style={{ marginTop: 14 }}>
                {person.socials.linkedin && (
                  <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" className="cp-social-btn cp-social-li" style={{ width: 38, height: 38, fontSize: '.85rem' }} aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
           
                {person.socials.facebook && (
                  <a href={person.socials.facebook} target="_blank" rel="noopener noreferrer" className="cp-social-btn cp-social-fb" style={{ width: 38, height: 38, fontSize: '.85rem' }} aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="cp-profile-body">
        {/* Breadcrumb */}
        <div className="cp-breadcrumb" style={{ padding: '14px 0', maxWidth: '100%' }}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/people">People</Link>
          <span>/</span>
          <span style={{ color: '#fff' }}>{person.name}</span>
        </div>

        {/* Bio */}
        {person.bio && (
          <p className="cp-profile-bio">{person.bio}</p>
        )}

        {/* Appearances */}
        {person.appearances && person.appearances.length > 0 && (
          <div>
            <h2 className="cp-appearances-title">
              <i className="fas fa-calendar-check" style={{ color: 'var(--accent)', marginRight: 8 }}></i>
              Event Appearances
            </h2>
            <div className="cp-appearances-list">
              {person.appearances.map((app, i) => (
                <Link key={i} to={app.to} className="cp-appearance-card">
                  <i className="fas fa-star"></i>
                  <div className="cp-appearance-info">
                    <div className="cp-appearance-title">{app.event}</div>
                    {app.date && (
                      <div className="cp-appearance-meta">
                        <i className="fas fa-calendar-alt" style={{ marginRight: 5 }}></i>
                        {app.date}
                      </div>
                    )}
                  </div>
                  <i className="fas fa-arrow-right" style={{ color: 'var(--accent)', fontSize: '.8rem' }}></i>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <Link to="/people" className="cp-btn cp-btn-ghost">
            <i className="fas fa-arrow-left"></i>
            Back to All People
          </Link>
        </div>
      </div>
    </div>
  );
}
