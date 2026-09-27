import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { nav } from '../../data/siteData';

export default function MobileDrawer({ isOpen, onClose }) {
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const toggleGroup = (label) => {
    setOpenGroup(prev => prev === label ? null : label);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenGroup(null);
  };

  return (
    <>
      <div
        className={`cp-drawer-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`cp-drawer${isOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="cp-drawer-header">
          <span className="cp-drawer-label">Navigation</span>
          <button className="cp-drawer-close" onClick={onClose} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="cp-drawer-nav">
          {nav.map((item) => {
            if (item.dropdown) {
              const isGrpOpen = openGroup === item.label;
              return (
                <div key={item.label} className="cp-drawer-group">
                  <button
                    className="cp-drawer-group-btn"
                    onClick={() => toggleGroup(item.label)}
                    aria-expanded={isGrpOpen}
                  >
                    {item.label}
                    <i className={`fas fa-chevron-right chevron${isGrpOpen ? ' open' : ''}`}></i>
                  </button>
                  <div className={`cp-drawer-children${isGrpOpen ? ' open' : ''}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="cp-drawer-child-link"
                        onClick={handleLinkClick}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className="cp-drawer-plain-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="cp-drawer-socials">
          <a href="https://www.facebook.com/asad.shabbir.944/" target="_blank" rel="noopener noreferrer" className="cp-drawer-social-btn cp-social-fb" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
    <a
    href="https://wa.me/923057773703"
    target="_blank"
    rel="noopener noreferrer"
    className="cp-social-btn cp-social-wa"
    style={{ width: 32, height: 32, fontSize: '.8rem' }}
    aria-label="WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
  </a>   
  <a
    href="mailto:laravelwithasad@gmail.com"
    className="cp-social-btn cp-social-gm"
    style={{ width: 32, height: 32, fontSize: '.8rem' }}
    aria-label="Gmail"
  >
    <i className="fas fa-envelope"></i>
  </a>
        </div>
      </nav>
    </>
  );
}
