import { useEffect } from 'react';

export default function LogoLightbox({ logos, index, onClose, onChange }) {
  const logo = logos[index];
  const total = logos.length;

  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [index]);

  return (
    <div className="cp-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Logo lightbox">
      <button className="cp-lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <i className="fas fa-times"></i>
      </button>
      <div className="cp-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        {logo.image ? (
          <img
            src={logo.image}
            alt={logo.name}
            className="cp-lightbox-img"
          />
        ) : (
          <div className="cp-lightbox-img" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minWidth: 300, minHeight: 200, background: '#fff', borderRadius: 8,
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#333' }}>
              {logo.placeholder || logo.name}
            </span>
          </div>
        )}
        <div className="cp-lightbox-nav">
          <button onClick={prev} aria-label="Previous logo">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="cp-lightbox-counter">{index + 1} / {total}</span>
          <button onClick={next} aria-label="Next logo">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.85rem' }}>{logo.name}</p>
      </div>
    </div>
  );
}
