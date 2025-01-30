import React from 'react'
import logo from '../assets/logo.png'
import './style.css'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <header>
            <img
                src={logo}
                alt='logo'
                className='logo'
            />
            <div className='orb'></div>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout