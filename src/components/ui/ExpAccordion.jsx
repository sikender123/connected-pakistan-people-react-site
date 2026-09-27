import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExpAccordion({ items = [], eventSlug = 'event' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <div className="cp-accordion">
      {items.map((item, i) => (
        <div key={i} className={`cp-accordion-item${openIndex === i ? ' open' : ''}`}>
          <button
            className="cp-accordion-header"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            {item.title}
            <i className="fas fa-chevron-down acc-chevron"></i>
          </button>
          <div className="cp-accordion-body">
            <div className="cp-accordion-body-inner">
              {item.body}
              {item.showCtas && (
                <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                  <Link to={`/get-tickets/${eventSlug}`} className="cp-btn cp-btn-blue">
                    <i className="fas fa-ticket-alt"></i>
                    Get Tickets
                  </Link>
                  <Link to="/membership" className="cp-btn cp-btn-amber">
                    <i className="fas fa-id-card"></i>
                    Become a Member
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
