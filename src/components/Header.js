import React from 'react'
import headerBg from '../assets/hero-img.png'

const Header = () => {
  return (
      <>
          <header>
              <div>
                  <h1>Little Lemon</h1>
                  <h3>Chicago</h3>
                  <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
              </div>
              <figure>
                  <img src={headerBg} alt="A chef" />
              </figure>
        </header>
      </>
  )
}

export default Header