import React from 'react'
import "./cssForComponents/navbar.css"

const Navbar = () => {
  return (
    <div className='header'>
      <div className='logo'><a href='/'>employee<span>Management</span></a></div>
      <ul className='nav-menu'>
        <li className='nav-item'><a href='/'>About</a></li>
        <li className='nav-item'><a href='/'>Testimonials</a></li>
        <li className='nav-item'><a href='/'>Demo</a></li>
      </ul>
    </div>
  )
}

export default Navbar
