import { thirtyUnderThirty } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';

export default function Awardees25() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero" style={{background:'linear-gradient(135deg, rgba(212,160,23,.12), var(--body-bg))'}}>
        <div className="cp-hub-hero-inner">
          <div style={{fontSize:'.75rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--gold)', marginBottom:8}}>
            <i className="fas fa-trophy" style={{marginRight:6}}></i>Class of 2025
          </div>
          <h1>30 Under 30 – Awardees 2025</h1>
          <p>Pakistan's 30 brightest young leaders, entrepreneurs, and innovators of 2025.</p>
        </div>
      </div>
      <div className="cp-section-wrap" style={{marginTop:40}}>
        <PeopleGrid people={thirtyUnderThirty.awardees25} title="Awardees 2025" icon="fa-trophy" paginate={true} />
      </div>
    </div>
  );
}
