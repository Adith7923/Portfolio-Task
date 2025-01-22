import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/1708409271184.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');

  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isProjectPage && (
          <>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;