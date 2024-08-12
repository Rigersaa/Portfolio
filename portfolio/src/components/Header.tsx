import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header style={{ 
      backgroundColor: '#0F0F3E', 
      backgroundImage: 'linear-gradient(135deg, #0F0F3E 0%, #4B0082 50%, #7B4DAE 100%)', 
      color: 'white' 
    }}>
      <div className="header-left">
        <a href="mailto:rigersabicakuu@gmail.com">rigersabicakuu@gmail.com</a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        <svg className="menu-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <nav className={`header-right ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><ScrollLink to="resume" smooth={true} offset={-80} duration={500}>Resume</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} offset={-80} duration={500}>Services</ScrollLink></li>
          <li><ScrollLink to="portfolio" smooth={true} offset={-80} duration={500}>Projects</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} offset={-80} duration={500}>Skills</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} offset={-80} duration={500}>Contact</ScrollLink></li>
          <li><ScrollLink to="home" smooth={true} offset={-80} duration={500} className="hire-me-btn">HIRE ME</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
