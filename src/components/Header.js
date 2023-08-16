import React from 'react'
import headerBg from '../assets/hero-img.png'

const Header = () => {
    return (
        <>
            <header className='header__section'>
                <div id='order__1' className='header__items'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <a href="/" className='reserve__table'>
                        Reserve a Table
                    </a>
                </div>
                <figure id='order__2'>
                    <img src={headerBg} alt="A chef" />
                </figure>
            </header>
        </>
    )
}

export default Header