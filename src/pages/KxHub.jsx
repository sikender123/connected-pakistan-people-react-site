import { Link } from 'react-router-dom';
import { kxData } from '../data/siteData';

export default function KxHub() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero">
        <div className="cp-hub-hero-inner">
          <h1>KX Pakistan</h1>
          <p>Knowledge Exchange Pakistan — a community of professionals, entrepreneurs, and innovators sharing knowledge across Pakistan's major cities.</p>
        </div>
      </div>
      <div className="cp-hub-grid">
        {kxData.chapters.map((ch) => (
          <Link key={ch.slug} to={ch.slug === 'lahore' ? `/kx/lahore` : `/kx/members`} className="cp-edition-card">
            <div style={{
              width: '100%', aspectRatio: '16/9',
              background: 'linear-gradient(135deg, rgba(0,168,107,.2), #0a1628)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className="fas fa-city" style={{fontSize:'3rem', color:'var(--accent)', opacity:.5}}></i>
            </div>
            <div className="cp-edition-card-body">
              <div className="cp-edition-card-year">Est. {ch.founded}</div>
              <div className="cp-edition-card-title">{ch.name}</div>
              <div className="cp-edition-card-desc">{ch.description}</div>
            </div>
            <div className="cp-edition-card-footer">
              <div className="cp-edition-card-meta">
                <i className="fas fa-users" style={{marginRight:5, color:'var(--accent)'}}></i>
                {ch.members}+ members
              </div>
              <span className="cp-edition-card-arrow"><i className="fas fa-arrow-right"></i></span>
            </div>
          </Link>
        ))}
        <Link to="/kx/members" className="cp-edition-card">
          <div style={{
            width: '100%', aspectRatio: '16/9',
            background: 'linear-gradient(135deg, rgba(109,40,217,.2), #0a1628)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <i className="fas fa-address-book" style={{fontSize:'3rem', color:'#a78bfa', opacity:.5}}></i>
          </div>
          <div className="cp-edition-card-body">
            <div className="cp-edition-card-year">Directory</div>
            <div className="cp-edition-card-title">KX Members Directory</div>
            <div className="cp-edition-card-desc">Browse all KX Pakistan members and connect with the community.</div>
          </div>
          <div className="cp-edition-card-footer">
            <div className="cp-edition-card-meta">
              <i className="fas fa-users" style={{marginRight:5, color:'var(--accent)'}}></i>
              All members
            </div>
            <span className="cp-edition-card-arrow"><i className="fas fa-arrow-right"></i></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
