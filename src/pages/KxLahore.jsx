import { kxData } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';
import { Link } from 'react-router-dom';

export default function KxLahore() {
  const chapter = kxData.chapters.find(c => c.slug === 'lahore');
  const members = kxData.members.slice(0, 4);

  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
      }}>
        <div style={{position:'absolute',inset:0, background:'linear-gradient(to bottom, rgba(5,13,31,.7), rgba(5,13,31,.95))'}} />
        <div className="cp-hub-hero-inner" style={{position:'relative', zIndex:1}}>
          <div style={{fontSize:'.75rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--accent)', marginBottom:8}}>KX Chapter</div>
          <h1>KX Lahore</h1>
          <p>{chapter?.description}</p>
          <div style={{display:'flex', gap:16, marginTop:16, flexWrap:'wrap'}}>
            <div style={{display:'flex', alignItems:'center', gap:6, fontSize:'.85rem', color:'rgba(255,255,255,.6)'}}>
              <i className="fas fa-users" style={{color:'var(--accent)'}}></i>
              {chapter?.members}+ Members
            </div>
            <div style={{display:'flex', alignItems:'center', gap:6, fontSize:'.85rem', color:'rgba(255,255,255,.6)'}}>
              <i className="fas fa-calendar-alt" style={{color:'var(--accent)'}}></i>
              Founded {chapter?.founded}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div style={{maxWidth:1100, margin:'40px auto', padding:'0 40px'}}>
        <h2 style={{fontSize:'1.2rem', fontWeight:700, color:'#fff', marginBottom:16}}>
          <i className="fas fa-calendar-check" style={{color:'var(--accent)', marginRight:8}}></i>
          Recent Events
        </h2>
        <div style={{display:'flex', flexDirection:'column', gap:12}}>
          {kxData.lahoreEvents?.map((ev, i) => (
            <div key={i} style={{
              background:'var(--card-bg)', border:'1px solid rgba(255,255,255,.07)',
              borderRadius:12, padding:'16px 20px',
              display:'flex', alignItems:'center', gap:16,
            }}>
              <div style={{
                width:48, height:48, borderRadius:10, background:'rgba(0,168,107,.1)',
                border:'1px solid rgba(0,168,107,.2)', display:'flex', alignItems:'center', justifyContent:'center',
                flexShrink:0,
              }}>
                <i className="fas fa-calendar-alt" style={{color:'var(--accent)'}}></i>
              </div>
              <div>
                <div style={{fontWeight:600, color:'#fff', fontSize:'.9rem'}}>{ev.title}</div>
                <div style={{fontSize:'.75rem', color:'rgba(255,255,255,.4)', marginTop:3}}>
                  <i className="fas fa-clock" style={{marginRight:5}}></i>{ev.date}
                </div>
                <div style={{fontSize:'.78rem', color:'rgba(255,255,255,.55)', marginTop:3}}>{ev.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members Preview */}
      <div className="cp-section-wrap">
        <PeopleGrid people={members} title="Chapter Members" icon="fa-users" />
        <div style={{textAlign:'center', marginTop:20}}>
          <Link to="/kx/members" className="cp-btn cp-btn-green">
            <i className="fas fa-users"></i>
            View All KX Members
          </Link>
        </div>
      </div>
    </div>
  );
}
