import { useState } from 'react';
import { HEADER_LOGO, HEADER_NAV_HOME, HEADER_NAV_HELP, HEADER_NAV_NEWS, HEADER_NAV_ABOUT } from '../../local';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span className="logo-icon">❤️</span>
          <span className="logo-text">{HEADER_LOGO}</span>
        </div>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={closeMenu}>{HEADER_NAV_HOME}</a></li>
          <li><a href="#help" onClick={closeMenu}>{HEADER_NAV_HELP}</a></li>
          <li><a href="#news" onClick={closeMenu}>{HEADER_NAV_NEWS}</a></li>
          <li><a href="#about" onClick={closeMenu}>{HEADER_NAV_ABOUT}</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
