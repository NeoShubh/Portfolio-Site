import { useScroll } from '../hooks/useScroll';
import { useState } from 'react';

const Navigation = () => {
  const { isScrolled } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <button
          type="button"
          className="nav-logo nav-logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          Portfolio
        </button>

        <button
          type="button"
          className="nav-toggle d-md-none"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul className="nav-links d-none d-md-flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`nav-mobile d-md-none ${isOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-mobile-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="nav-mobile-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
