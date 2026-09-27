import { thirtyUnderThirty } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';

export default function Awardees26() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero" style={{background:'linear-gradient(135deg, rgba(0,168,107,.12), var(--body-bg))'}}>
        <div className="cp-hub-hero-inner">
          <div style={{fontSize:'.75rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--accent)', marginBottom:8}}>
            <i className="fas fa-star" style={{marginRight:6}}></i>Class of 2026
          </div>
          <h1>30 Under 30 – Awardees 2026</h1>
          <p>Pakistan's emerging class of young leaders, entrepreneurs, and innovators for 2026.</p>
        </div>
      </div>
      <div className="cp-section-wrap" style={{marginTop:40}}>
        <PeopleGrid people={thirtyUnderThirty.awardees26} title="Awardees 2026" icon="fa-star" paginate={true} />
      </div>
    </div>
  );
}
