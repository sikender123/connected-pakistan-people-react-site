import { thirtyUnderThirty } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';

export default function Speakers30U30() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero" style={{background:'linear-gradient(135deg, rgba(37,99,235,.12), var(--body-bg))'}}>
        <div className="cp-hub-hero-inner">
          <div style={{fontSize:'.75rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#60a5fa', marginBottom:8}}>
            <i className="fas fa-microphone" style={{marginRight:6}}></i>30 Under 30
          </div>
          <h1>30 Under 30 – Speakers</h1>
          <p>Inspiring speakers sharing their journeys, lessons, and vision at the 30Under30 recognition ceremony.</p>
        </div>
      </div>
      <div className="cp-section-wrap" style={{marginTop:40}}>
        <PeopleGrid people={thirtyUnderThirty.speakers} title="Speakers" icon="fa-microphone" />
      </div>
    </div>
  );
}
