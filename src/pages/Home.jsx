import { Link } from 'react-router-dom';

const verticals = [
  {
    title: 'Connected Pakistan Conference',
    desc: 'Pakistan\'s flagship entrepreneurship conference bringing together thousands of innovators.',
    to: '/all-cpc',
    bg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    icon: 'fa-building',
    color: '#2563eb',
  },
  {
    title: 'Connected Women Conference',
    desc: 'Celebrating and empowering Pakistan\'s most inspiring women leaders.',
    to: '/cwc',
    bg: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    icon: 'fa-female',
    color: '#db2777',
  },
  {
    title: 'KX Pakistan',
    desc: 'Knowledge Exchange community for professionals across Pakistan\'s major cities.',
    to: '/kx',
    bg: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    icon: 'fa-lightbulb',
    color: '#d97706',
  },
  {
    title: 'Innoventure Club',
    desc: 'Pakistan\'s premier mountain innovation summit for entrepreneurs and investors.',
    to: '/innoventure-club/26',
    bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    icon: 'fa-mountain',
    color: '#00a86b',
  },
  {
    title: '30 Under 30',
    desc: 'Recognizing Pakistan\'s brightest young leaders under the age of 30.',
    to: '/30under30',
    bg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    icon: 'fa-trophy',
    color: '#d4a017',
  },
  {
    title: 'Growth Summit',
    desc: 'Pakistan\'s growth marketing summit helping startups scale faster.',
    to: '/growth-summit',
    bg: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    icon: 'fa-chart-line',
    color: '#7c3aed',
  },
];

const stats = [
  { num: '10,000+', label: 'Community Members' },
  { num: '500+', label: 'Events Hosted' },
  { num: '$200M+', label: 'Funding Raised by Alumni' },
  { num: '15+', label: 'Cities Covered' },
];

export default function Home() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section className="cp-home-hero">
        <div className="cp-home-hero-bg" />
        <div className="cp-home-hero-content">
          <h1>
            Connecting <span>Pakistan's</span> Best Minds
          </h1>
          <p>
            Connected Pakistan People is the hub for Pakistan's most vibrant entrepreneurship,
            innovation, and leadership community — across conferences, summits, and exclusive retreats.
          </p>
          <div className="cp-home-btns">
            <Link to="/innoventure-club/26" className="cp-btn cp-btn-green" style={{padding:'13px 28px', fontSize:'.9rem', borderRadius:10}}>
              <i className="fas fa-mountain"></i>
              Innoventure Club 26
            </Link>
            <Link to="/people" className="cp-btn cp-btn-ghost" style={{padding:'13px 28px', fontSize:'.9rem', borderRadius:10}}>
              <i className="fas fa-users"></i>
              Browse People
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'rgba(0,168,107,.05)', borderTop: '1px solid rgba(0,168,107,.15)', borderBottom: '1px solid rgba(0,168,107,.15)', padding: '36px 0' }}>
        <div className="container-cp">
          <div className="cp-home-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)' }}>{s.num}</div>
                <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="cp-verticals-section">
        <h2 className="cp-verticals-title">Our Programs & Events</h2>
        <div className="cp-verticals-grid">
          {verticals.map((v) => (
            <Link
              key={v.to}
              to={v.to}
              className="cp-vertical-card"
              style={{ backgroundImage: `url(${v.bg})`, minHeight: 220 }}
            >
              <div className="cp-vertical-card-overlay">
                <div className="cp-vertical-card-title">{v.title}</div>
                <div className="cp-vertical-card-desc">{v.desc}</div>
              </div>
              <div className="cp-vertical-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Event Promo */}
      <section style={{ maxWidth: 1100, margin: '0 auto 64px', padding: '0 40px' }}>
        <div style={{
          borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(0,168,107,.15), rgba(5,13,31,.8))',
          border: '1px solid rgba(0,168,107,.25)',
          padding: '48px',
          display: 'flex',
          gap: 32,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
              🔥 Featured Event
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
              Innoventure Club 26
            </h2>
            <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 20 }}>
              Join Pakistan's premier mountain innovation summit at the breathtaking Utror Valley, Swat.
              Sep 18–21, 2026.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/innoventure-club/26" className="cp-btn cp-btn-green">
                <i className="fas fa-info-circle"></i>
                Learn More
              </Link>
              <Link to="/get-tickets/innoventure-club-26" className="cp-btn cp-btn-blue">
                <i className="fas fa-ticket-alt"></i>
                Get Tickets
              </Link>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: 180, height: 120, borderRadius: 12, overflow: 'hidden',
              backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80)',
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
          </div>
        </div>
      </section>
    </div>
  );
}
