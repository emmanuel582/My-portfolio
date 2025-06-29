import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Github, FileText, Instagram } from 'lucide-react';

function Header() {
  const location = useLocation();

  useEffect(() => {
    const nav = document.querySelector('.nav-container');
    const hero = document.querySelector('.hero-wrapper');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          nav.classList.add('blurred');
        } else {
          nav.classList.remove('blurred');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (hero) observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      <header className="header" style={{ marginBottom: '10rem' }}>
        <nav className="nav-container">
          <Link to="/" className="nav-item" data-tooltip="Home">
            <Home size={20} />
          </Link>

          <div className="separator"></div>

          <a href="https://www.instagram.com/wealth_consort/" className="nav-item" data-tooltip="Instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>

          <a href="https://github.com/emmanuel582" className="nav-item" data-tooltip="GitHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>

          <Link to="/resume" className="nav-item" data-tooltip="Resume">
            <FileText size={20} />
          </Link>

          <div className="separator"></div>

          <Link to="/reviews" className="nav-item blog-item reviews-item">
            Reviews
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
