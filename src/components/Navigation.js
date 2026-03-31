import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/ja_logo.png`}
            alt="Joshua Agyekum"
            className="logo-img"
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              AI Systems
            </Link>
          </li>

          <li>
            <Link
              to="/experience"
              className={location.pathname === '/experience' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="/toolkit"
              className={location.pathname === '/toolkit' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              People Tech Stack
            </Link>
          </li>

          <li>
            <Link
              to="/certifications"
              className={location.pathname === '/certifications' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Certifications
            </Link>
          </li>

          <li>
            <Link
              to="/education"
              className={location.pathname === '/education' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="/recommendations"
              className={location.pathname === '/recommendations' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Recommendations
            </Link>
          </li>

          <li>
            <Link
              to="/articles"
              className={location.pathname === '/articles' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Insights
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
