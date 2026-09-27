import { Link } from 'react-router-dom';
import { thirtyUnderThirty } from '../data/siteData';

const subpages = [
  { to: '/30under30/awardees-25', title: '30 Under 30 – Awardees 2025', desc: 'Meet Pakistan\'s 30 brightest leaders under 30 for 2025.', icon: 'fa-trophy', color: '#d4a017', count: 30 },
  { to: '/30under30/awardees-26', title: '30 Under 30 – Awardees 2026', desc: 'Pakistan\'s newest class of emerging young leaders for 2026.', icon: 'fa-star', color: '#00a86b', count: 30 },
  { to: '/30under30/speakers', title: '30 Under 30 – Speakers', desc: 'Inspiring speakers sharing their journeys at the 30Under30 ceremony.', icon: 'fa-microphone', color: '#2563eb', count: thirtyUnderThirty.speakers.length },
  { to: '/30under30/premium', title: '30 Under 30 – Premium', desc: 'Exclusive premium members of the 30Under30 community.', icon: 'fa-crown', color: '#db2777', count: thirtyUnderThirty.premium.length },
];

export default function ThirtyUnderThirty() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero" style={{
        background: 'linear-gradient(135deg, rgba(212,160,23,.15), var(--body-bg))',
        borderBottom: '1px solid rgba(212,160,23,.15)',
      }}>
        <div className="cp-hub-hero-inner">
          <h1 style={{color:'#fff'}}>
            <span style={{color:'var(--gold)'}}>30</span> Under 30
          </h1>
          <p>Pakistan's premier list recognizing the brightest young leaders, entrepreneurs, and innovators under the age of 30.</p>
        </div>
      </div>
      <div className="cp-hub-grid">
        {subpages.map((sp) => (
          <Link key={sp.to} to={sp.to} className="cp-edition-card">
            <div style={{
              width:'100%', aspectRatio:'16/9',
              background: `linear-gradient(135deg, ${sp.color}22, #0a1628)`,
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <i className={`fas ${sp.icon}`} style={{fontSize:'3rem', color:sp.color, opacity:.6}}></i>
            </div>
            <div className="cp-edition-card-body">
              <div className="cp-edition-card-title">{sp.title}</div>
              <div className="cp-edition-card-desc">{sp.desc}</div>
            </div>
            <div className="cp-edition-card-footer">
              <div className="cp-edition-card-meta">
                <i className="fas fa-users" style={{marginRight:5, color:'var(--accent)'}}></i>
                {sp.count} people
              </div>
              <span className="cp-edition-card-arrow"><i className="fas fa-arrow-right"></i></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
