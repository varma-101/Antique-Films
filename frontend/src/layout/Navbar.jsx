import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li className='home'><NavLink to='/'>Home</NavLink></li>
            <li className='about'><NavLink to='/about'>About</NavLink></li>
            <li className='gallery'><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className='book'><NavLink to='/book'>Book Now</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar