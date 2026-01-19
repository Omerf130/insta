import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking on mobile
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo - Left Side */}
          <div className="navbar-logo" onClick={scrollToTop}>
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=100&h=100&fit=crop" 
              alt="לוגו אינסטלציה"
              className="logo-image"
            />
            <span className="logo-text">אינסטלציה ודודי שמש</span>
          </div>

          {/* Desktop Navigation - Right Side */}
          <ul className="navbar-links">
            <li>
              <button onClick={() => scrollToSection('services')} className="nav-link">
                השירותים שלנו
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('why-choose-me')} className="nav-link">
                למה לבחור בנו
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">
                גלריה
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link">
                המלצות
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link nav-link-cta">
                צור קשר
              </button>
            </li>
          </ul>

          {/* Hamburger Menu Button - Mobile Only */}
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
            onClick={toggleMenu}
            aria-label="תפריט"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="mobile-menu-links">
            <li>
              <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
                השירותים שלנו
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('why-choose-me')} className="mobile-nav-link">
                למה לבחור בנו
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="mobile-nav-link">
                גלריה
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">
                המלצות
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link mobile-nav-link-cta">
                צור קשר
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

