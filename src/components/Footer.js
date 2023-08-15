import React from 'react'
import footerLogo from '../assets/logo.png'
import footerImg from '../assets/hero-img.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer__section'>
                    <figure>
                        <img src={footerLogo} alt="Little lemon logo" />
                        <img src={footerImg} alt="Little lemon logo" className='footer__image' />
                    </figure>
                    <div>
                        <h4>Doormat Navigation</h4>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <p>Address: Nercyland Estate, Ayobo, Lagos State</p>
                        <p>Phone: +234810087657</p>
                        <p>Email: techwithalex1@gmail.com</p>
                    </div>
                    <div>
                        <h4>Social media links</h4>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Threads</a></li>
                        <li><a href="/">Instagram</a></li>
                    </div>
                </div>
                <hr />
                <p className='copyright'>Tech-with-Alex &copy; 2023</p>
            </footer>
        </>
    )
}

export default Footer