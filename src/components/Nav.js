import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Nav = () => {
  return (
      <>
          <nav className='nav__section'>
              <Link to="/">
                  <figure>
                      <img src={Logo} alt="Little Lemon Logo" />
                  </figure>
              </Link>
              
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Menu</Link></li>
                  <li><Link to="/booking">Reservations</Link></li>
                  <li><Link to="/">Order Online</Link></li>
                  <li><Link to="/">Login</Link></li>
              </ul>
          </nav>
          
      </>
  )
}

export default Nav