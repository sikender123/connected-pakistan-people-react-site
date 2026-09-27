import { Link } from 'react-router-dom';

export default function PersonCard({ person }) {
  const role = [person.role, person.org].filter(Boolean).join(' · ');
  return (
    <Link to={`/people/${person.slug}`} className="cp-person-card" aria-label={`View ${person.name}'s profile`}>
      <div className="cp-person-img-wrap">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=0c1a3a&color=00a86b&size=400`; }}
        />
        <div className="cp-person-img-gradient" />
      </div>
      <div className="cp-person-body">
        <div className="cp-person-name">{person.name}</div>
        <div className="cp-person-role">{role}</div>
      </div>
      <div className="cp-person-footer">
        <div className="cp-person-stats">
          <span><i className="fas fa-heart"></i> {(person.likes || 0).toLocaleString()}</span>
          <span><i className="fas fa-eye"></i> {(person.views || 0).toLocaleString()}</span>
        </div>
        <span className="cp-person-view">View Profile →</span>
      </div>
    </Link>
  );
}
