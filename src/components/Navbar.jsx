import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/1708409271184.png';
import '../styles/Navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav className={isProjectPage ? 'navbar-project' : 'navbar'}>
        <img src={logo} className="logo" alt="Logo" />
        <ul className={isMenuOpen ? 'active' : ''}>
          {isProjectPage && (
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          )}
          {!isProjectPage && (
            <>
              <li><a href="#header" onClick={handleLinkClick}>Home</a></li>
              <li><a href="#about" onClick={handleLinkClick}>About</a></li>
              <li><a href="#services" onClick={handleLinkClick}>Projects</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>Contact me</a></li>
            </>
          )}
        </ul>
        <div 
          className={`icon ${isMenuOpen ? 'rotate' : ''}`} 
          onClick={toggleMenu}
        >
          <FaBarsStaggered />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
