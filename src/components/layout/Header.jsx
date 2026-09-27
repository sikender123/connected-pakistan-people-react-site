import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { nav } from '../../data/siteData';
import NavDropdown from './NavDropdown';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <>
      <header className="cp-header">
        <div className="cp-header-inner">
          {/* Logo */}
          <Link to="/" className="cp-logo" onClick={closeDropdown}>
            <img
              src="https://connectedpakistan.pk/wp-content/uploads/2021/08/CP-Logo.png"
              alt="Connected Pakistan"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{display:'none', alignItems:'center', gap:'8px'}}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg,#00a86b,#007a4e)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <i className="fas fa-globe" style={{color:'#fff', fontSize:'1rem'}}></i>
              </div>
              <div style={{lineHeight:1.1}}>
                <div style={{fontSize:'.8rem', fontWeight:800, color:'#fff', letterSpacing:'.02em'}}>CONNECTED</div>
                <div style={{fontSize:'.65rem', fontWeight:600, color:'var(--accent)', letterSpacing:'.08em'}}>PAKISTAN</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="cp-nav" aria-label="Main navigation">
            {nav.map((item) => {
              if (item.dropdown) {
                return (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() => toggleDropdown(item.label)}
                    onClose={closeDropdown}
                  />
                );
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `cp-nav-btn${isActive ? ' active' : ''}`}
                  onClick={closeDropdown}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Hamburger */}
          <button
            className={`cp-hamburger${drawerOpen ? ' open' : ''}`}
            onClick={() => setDrawerOpen(v => !v)}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
