import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{zIndex: 1000}}>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" color="#000" />
      </div>
      <ul className={menuOpen ? 'active' : ''}>
        <li><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to='/about' onClick={toggleMenu}>About</NavLink></li>
        <li><NavLink to='/gallery' onClick={toggleMenu}>Gallery</NavLink></li>
        <li><NavLink to='/book' onClick={toggleMenu}>Book Now</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
