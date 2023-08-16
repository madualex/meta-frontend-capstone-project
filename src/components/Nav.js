import React from 'react'
import Logo from '../assets/logo.png'

const Nav = () => {
  return (
      <>
          <nav className='nav__section'>
              <a href="/">
                  <figure>
                      <img src={Logo} alt="Little Lemon Logo" />
                  </figure>
              </a>
              
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Menu</a></li>
                  <li><a href="/">Reservations</a></li>
                  <li><a href="/">Order Online</a></li>
                  <li><a href="/">Login</a></li>
              </ul>
          </nav>
          
      </>
  )
}

export default Nav