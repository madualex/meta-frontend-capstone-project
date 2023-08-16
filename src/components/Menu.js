import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <>
            <Link to="/" className="main__section-card">
                <figure>
                    <img src={props.menuImage} alt={props.menu} className="img__height" />
                </figure>
                <div className="main__section-card-desc">
                    <div className="menu__price">
                        <h4>{props.menu}</h4>
                        <span>{props.price}</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                        fugiat blanditiis dolorum. Magnam, iure!
                    </p>
                    <div className="main__section-card-footer">
                        <h6>Order a delivery</h6>
                        <figure>
                            <img src={props.deliveryImg} alt="Bike" />
                        </figure>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Menu