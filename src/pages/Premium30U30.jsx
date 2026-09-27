import { thirtyUnderThirty } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';

export default function Premium30U30() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero" style={{background:'linear-gradient(135deg, rgba(219,39,119,.12), var(--body-bg))'}}>
        <div className="cp-hub-hero-inner">
          <div style={{fontSize:'.75rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#f472b6', marginBottom:8}}>
            <i className="fas fa-crown" style={{marginRight:6}}></i>Exclusive
          </div>
          <h1>30 Under 30 – Premium</h1>
          <p>Exclusive premium members of the 30Under30 community with VIP access to events and mentorship.</p>
        </div>
      </div>
      <div className="cp-section-wrap" style={{marginTop:40}}>
        <PeopleGrid people={thirtyUnderThirty.premium} title="Premium Members" icon="fa-crown" />
      </div>
    </div>
  );
}
