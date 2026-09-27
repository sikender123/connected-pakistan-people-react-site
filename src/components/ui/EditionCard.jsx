import { Link } from 'react-router-dom';

export default function EditionCard({ to, year, title, description, date, location, image }) {
  return (
    <Link to={to} className="cp-edition-card">
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: image ? undefined : '#0a1628',
      }}>
        {image && <div style={{
          width:'100%', height:'100%',
          background: 'linear-gradient(to bottom, transparent 40%, rgba(5,13,31,.7))',
        }} />}
      </div>
      <div className="cp-edition-card-body">
        {year && <div className="cp-edition-card-year">{year}</div>}
        <div className="cp-edition-card-title">{title}</div>
        {description && <div className="cp-edition-card-desc">{description}</div>}
      </div>
      <div className="cp-edition-card-footer">
        <div className="cp-edition-card-meta">
          {date && <span><i className="fas fa-calendar-alt" style={{marginRight:5, color:'var(--accent)'}}></i>{date}</span>}
          {location && <span style={{marginLeft:12}}><i className="fas fa-map-marker-alt" style={{marginRight:5, color:'var(--accent)'}}></i>{location}</span>}
        </div>
        <span className="cp-edition-card-arrow"><i className="fas fa-arrow-right"></i></span>
      </div>
    </Link>
  );
}
