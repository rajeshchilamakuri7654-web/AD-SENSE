import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { calculators } from '../data/calculators';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMobile} aria-label="SIPCalc Pro home">
            <div className="navbar__logo-icon" aria-hidden="true">📈</div>
            SIPCalc Pro
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/sip-calculator" className={({ isActive }) => isActive ? 'active' : ''}>
                SIP
              </NavLink>
            </li>
            <li>
              <NavLink to="/lumpsum-vs-sip" className={({ isActive }) => isActive ? 'active' : ''}>
                Lumpsum vs SIP
              </NavLink>
            </li>
            <li>
              <NavLink to="/step-up-sip-calculator" className={({ isActive }) => isActive ? 'active' : ''}>
                Step-Up SIP
              </NavLink>
            </li>
            <li>
              <NavLink to="/xirr-calculator" className={({ isActive }) => isActive ? 'active' : ''}>
                XIRR
              </NavLink>
            </li>
            <li>
              <NavLink to="/cagr-calculator" className={({ isActive }) => isActive ? 'active' : ''}>
                CAGR
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                Blog
              </NavLink>
            </li>
          </ul>

          <div className="navbar__right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Hamburger */}
            <button
              className="hamburger"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <ul className="mobile-nav__links" role="list">
          <div className="mobile-nav__section-title">Calculators</div>
          {calculators.map((c) => (
            <li key={c.id}>
              <NavLink to={c.path} onClick={closeMobile}>
                {c.icon} {c.title}
              </NavLink>
            </li>
          ))}
          <div className="mobile-nav__section-title" style={{ marginTop: 8 }}>More</div>
          <li><NavLink to="/what-is-sip" onClick={closeMobile}>📘 What is SIP?</NavLink></li>
          <li><NavLink to="/sip-vs-lumpsum" onClick={closeMobile}>⚖️ SIP vs Lump Sum</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMobile}>📝 Blog</NavLink></li>
          <li><NavLink to="/about" onClick={closeMobile}>ℹ️ About</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMobile}>📬 Contact</NavLink></li>
          <li><NavLink to="/privacy" onClick={closeMobile}>🔒 Privacy Policy</NavLink></li>
          <li><NavLink to="/terms" onClick={closeMobile}>📄 Terms of Use</NavLink></li>
        </ul>
      </div>
    </>
  );
}
