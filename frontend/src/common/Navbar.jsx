import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
         <div className="navbar">
        <div className='left-nav'>
            <ul>
                <li>Home</li>
                <li>Occasions</li>
                <li>Past Events</li>
            </ul>
        </div>
        <div className='logo'>
            <p>ANTIQUE FILMS</p>
        </div>
        <div className="right-nav">
            <ul>
                <li>About</li>
                <li><button>Let's Talk</button></li>
            </ul>
        </div>
        
    </div>
    <hr></hr>
    </>
   
  )
}

export default Navbar