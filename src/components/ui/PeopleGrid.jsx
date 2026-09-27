import { useState } from 'react';
import PersonCard from './PersonCard';

const PAGE_SIZE = 8;

export default function PeopleGrid({ people = [], title = 'People', icon = 'fa-users', paginate = false }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(people.length / PAGE_SIZE);
  const visiblePeople = paginate ? people.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) : people;

  return (
    <section className="cp-section">
      <div className="cp-section-header">
        <i className={`fas ${icon}`}></i>
        <h2>{title}</h2>
        <span className="count-badge">{people.length}</span>
      </div>
      <div className="cp-people-grid">
        {visiblePeople.map((person) => (
          <PersonCard key={person.slug} person={person} />
        ))}
      </div>
      {paginate && totalPages > 1 && (
        <div className="cp-pagination">
          <button
            className="cp-page-btn"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`cp-page-btn${page === p ? ' active' : ''}`}
              onClick={() => setPage(p)}
              aria-label={`Page ${p}`}
              aria-current={page === p ? 'page' : undefined}
            >
              {p}
            </button>
          ))}
          <button
            className="cp-page-btn"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}
