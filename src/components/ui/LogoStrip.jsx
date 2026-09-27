import { useState, useCallback } from 'react';
import LogoLightbox from './LogoLightbox';

export default function LogoStrip({ logos = [], label = 'Partners & Sponsors' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <div className="cp-logo-strip">
      <div className="cp-section-wrap">
        <div className="cp-section-label">{label}</div>
        <div className="cp-logo-grid-wrap">
          <div className="cp-logo-grid">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="cp-logo-cell"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${logo.name} logo`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
              >
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} loading="lazy" />
                ) : (
                  <div className="cp-logo-placeholder">{logo.placeholder || logo.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <LogoLightbox
          logos={logos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
