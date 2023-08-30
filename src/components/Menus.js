import React from "react";
import menu1 from "../assets/salad.png";
import menu2 from "../assets/lemon-dessert.jpg";
import menu3 from "../assets/desserts.png";
import deliveryImg from "../assets/delivery-logo.png";
import Menu from "./Menu";

const Menus = () => {
    return (
        <>
            <main className="main__section">
                <div className="main__section-title">
                    <h2>This week's specials</h2>
                    <p>Online menu</p>
                </div>
                <article>
                    <Menu menuImage={menu1} deliveryImg={deliveryImg} menu='Greek Salad' price='$12.99' />
                    <Menu menuImage={menu2} deliveryImg={deliveryImg} menu='Lemon Desserts' price='$5.99' />
                    <Menu menuImage={menu3} deliveryImg={deliveryImg} menu='Bruschetta' price='$5.00' />
                    {/* <a href="/" className="main__section-card">
                        <figure>
                            <img src={menu1} alt="Greek salad" className="img__height" />
                        </figure>
                        <div className="main__section-card-desc">
                            <div className="menu__price">
                                <h4>Greek Salad</h4>
                                <span>$12.99</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                                fugiat blanditiis dolorum. Magnam, iure!
                            </p>
                            <div className="main__section-card-footer">
                                <h6>Order a delivery</h6>
                                <figure>
                                    <img src={deliveryImg} alt="Bike" />
                                </figure>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="main__section-card">
                        <figure>
                            <img src={menu2} alt="Lemon desserts" className="img__height" />
                        </figure>
                        <div className="main__section-card-desc">
                            <div className="menu__price">
                                <h4>Lemon Desserts</h4>
                                <span>$5.99</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                                fugiat blanditiis dolorum. Magnam, iure!
                            </p>
                            <div className="main__section-card-footer">
                                <h6>Order a delivery</h6>
                                <figure>
                                    <img src={deliveryImg} alt="Bike" />
                                </figure>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="main__section-card">
                        <figure>
                            <img src={menu3} alt="Bruschetta" className="img__height"/>
                        </figure>
                        <div className="main__section-card-desc">
                            <div className="menu__price">
                                <h4>Bruschetta</h4>
                                <span>$5.00</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                                fugiat blanditiis dolorum. Magnam, iure!
                            </p>
                            <div className="main__section-card-footer">
                                <h6>Order a delivery</h6>
                                <figure>
                                    <img src={deliveryImg} alt="Bike" />
                                </figure>
                            </div>
                        </div>
                    </a> */}
                </article>
            </main>
        </>
    );
};

export default Menus;
