import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-component">
      <div className="navbar">
        <div className="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Occasions</li>
            <li>Testimonials</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="nav-button">
          <button>Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
