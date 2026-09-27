import { Link } from 'react-router-dom';

const stats = [
  { num: '10,000+', label: 'Community Members' },
  { num: '500+', label: 'Events Hosted' },
  { num: '$200M+', label: 'Funding by Alumni' },
  { num: '2015', label: 'Year Founded' },
];

const team = [
  { name: 'Waqas Ali', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
  { name: 'Sana Mirza', role: 'Head of Events', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
  { name: 'Bilal Chaudhry', role: 'Head of Community', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
];

export default function About() {
  return (
    <div className="cp-util-page">
      <div className="cp-util-hero" style={{ background: 'linear-gradient(135deg, rgba(0,168,107,.12), var(--body-bg))' }}>
        <div className="cp-util-hero-inner" style={{ maxWidth: 900 }}>
          <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
            <i className="fas fa-info-circle" style={{ marginRight: 6 }}></i>About Us
          </div>
          <h1>About Connected Pakistan</h1>
          <p>Pakistan's premier platform for entrepreneurship, innovation, and professional networking since 2015.</p>
        </div>
      </div>

      <div className="cp-about-body">
        {/* Mission */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Our Mission</h2>
          <p className="cp-bio" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Connected Pakistan is on a mission to connect Pakistan's brightest minds — entrepreneurs, investors, technologists, and leaders — through world-class events and a thriving community. We believe that when Pakistan's talent connects, extraordinary things happen.
          </p>
        </div>

        {/* Stats */}
        <div className="cp-about-grid" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
          {stats.map((s, i) => (
            <div key={i} className="cp-about-stat">
              <div className="cp-about-stat-num">{s.num}</div>
              <div className="cp-about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div style={{ margin: '48px 0' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Our Story</h2>
          <div style={{ color: 'rgba(255,255,255,.65)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1em' }}>
              Connected Pakistan was founded in 2015 with a simple idea: Pakistan's entrepreneurship community deserved a world-class platform for networking and learning. What started as a small meetup in Lahore has grown into Pakistan's most recognized community for innovation and leadership.
            </p>
            <p style={{ marginBottom: '1em' }}>
              Today, Connected Pakistan runs multiple flagship programs: the Connected Pakistan Conference (CPC), the Connected Women Conference (CWC), Innoventure Club, KX Pakistan, 30 Under 30, and Growth Summit — each serving a unique segment of Pakistan's dynamic community.
            </p>
            <p>
              Our alumni have gone on to raise over $200 million in combined funding, create 10,000+ jobs, and build companies that operate across 30+ countries. We are proud to be at the center of Pakistan's entrepreneurship revolution.
            </p>
          </div>
        </div>

        {/* Programs */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: 20 }}>Our Programs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {[
              { to: '/all-cpc', icon: 'fa-building', label: 'Connected Pakistan Conference', color: '#2563eb' },
              { to: '/cwc', icon: 'fa-female', label: 'Connected Women Conference', color: '#db2777' },
              { to: '/innoventure-club/26', icon: 'fa-mountain', label: 'Innoventure Club', color: '#00a86b' },
              { to: '/kx', icon: 'fa-lightbulb', label: 'KX Pakistan', color: '#d97706' },
              { to: '/30under30', icon: 'fa-trophy', label: '30 Under 30', color: '#d4a017' },
              { to: '/growth-summit', icon: 'fa-chart-line', label: 'Growth Summit', color: '#7c3aed' },
            ].map((p, i) => (
              <Link key={i} to={p.to} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px',
                background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 12,
                textDecoration: 'none', color: '#fff', transition: 'all .2s',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: `${p.color}22`, border: `1px solid ${p.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className={`fas ${p.icon}`} style={{ color: p.color }}></i>
                </div>
                <span style={{ fontSize: '.88rem', fontWeight: 600 }}>{p.label}</span>
                <i className="fas fa-arrow-right" style={{ color: 'var(--accent)', marginLeft: 'auto', fontSize: '.75rem' }}></i>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.07)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/contact" className="cp-btn cp-btn-green">
            <i className="fas fa-envelope"></i>
            Contact Us
          </Link>
          <Link to="/membership" className="cp-btn cp-btn-amber">
            <i className="fas fa-id-card"></i>
            Join Community
          </Link>
        </div>
      </div>
    </div>
  );
}
