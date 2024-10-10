import React from 'react'

const Navbar = () => {
  return (
    <div>
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
  )
}

export default Navbar