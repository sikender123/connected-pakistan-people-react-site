import { useState } from 'react';
import { people } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';

export default function PeopleDirectory() {
  const [search, setSearch] = useState('');

  const filtered = people.filter(p =>
    !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.org && p.org.toLowerCase().includes(search.toLowerCase())) ||
    (p.role && p.role.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero">
        <div className="cp-hub-hero-inner">
          <h1>People Directory</h1>
          <p>Browse all speakers, attendees, mentors, and members of the Connected Pakistan community.</p>
          {/* Search */}
          <div style={{ marginTop: 20, position: 'relative', maxWidth: 400 }}>
            <i className="fas fa-search" style={{
              position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
              color: 'rgba(255,255,255,.35)', fontSize: '.9rem',
            }}></i>
            <input
              type="text"
              placeholder="Search by name, role, or organization..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="cp-form-input"
              style={{ paddingLeft: 40 }}
            />
          </div>
        </div>
      </div>
      <div className="cp-section-wrap" style={{ marginTop: 40 }}>
        <PeopleGrid
          people={filtered}
          title={`All People${filtered.length !== people.length ? ` (${filtered.length})` : ''}`}
          icon="fa-users"
          paginate={true}
        />
      </div>
    </div>
  );
}
