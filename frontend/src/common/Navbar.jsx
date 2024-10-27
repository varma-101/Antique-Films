import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-component'>
      <div className="navbar">
        <div className='logo'>
          <p>ANTIQUE FILMS</p>
        </div>
        <div className='nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Occasions</li>
            <li>Testimonials</li>
            <li>Gallery</li>
            <li><button>Let's Talk</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
