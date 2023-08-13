import React from 'react'
import footerLogo from '../assets/logo.png'

const Footer = () => {
  return (
      <>
          <footer>
              <figure>
                  <img src={footerLogo} alt="Little lemon logo" />
              </figure>
              <div>
                  <h4>Doormat Navigation</h4>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Menu</a></li>
                      <li><a href="/">Reservations</a></li>
                      <li><a href="/">Order Online</a></li>
                      <li><a href="/">Login</a></li>
                  </ul>
              </div>
              <div>
                  <h4>Contact</h4>
                  <p>Address</p>
                  <p>Phone number</p>
                  <p>Email</p>
              </div>
              <div>
                  <h4>Social media links</h4>
                  <ul>
                      <li><a href="/">Facebook</a></li>
                      <li><a href="/">Threads</a></li>
                      <li><a href="/">Instagram</a></li>
                  </ul>
              </div>
        </footer>
      </>
  )
}

export default Footer