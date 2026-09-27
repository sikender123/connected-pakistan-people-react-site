import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NavDropdown({ item, isOpen, onToggle, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="cp-dropdown-wrap" ref={ref}>
      <button
        className={`cp-nav-btn${isOpen ? ' active' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {item.label}
        <i className={`fas fa-chevron-down chevron${isOpen ? ' open' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="cp-dropdown-panel" role="listbox">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="cp-dropdown-link"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
