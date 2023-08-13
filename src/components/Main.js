import React from "react";
import menu1 from "../assets/salad.png";
import menu2 from "../assets/lemon-dessert.jpg";
import menu3 from "../assets/desserts.png";
import deliveryImg from "../assets/delivery-logo.png";

const Main = () => {
    return (
        <>
            <section>
                <div>
                    <h3>This week's special</h3>
                    <p>Online menu</p>
                </div>
                <article>
                    <a href="/">
                        <div>
                            <figure>
                                <img src={menu1} alt="Greek salad" />
                            </figure>
                            <div>
                                <h6>Greek Salad</h6>
                                <span>$12.99</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                                fugiat blanditiis dolorum. Magnam, iure!
                            </p>
                            <div>
                                <h6>Order a delivery</h6>
                                <figure>
                                    <img src={deliveryImg} alt="Bike" />
                                </figure>
                            </div>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <figure>
                                <img src={menu2} alt="Lemon desserts" />
                            </figure>
                            <div>
                                <h6>Lemon Desserts</h6>
                                <span>$5.99</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                                fugiat blanditiis dolorum. Magnam, iure!
                            </p>
                            <div>
                                <h6>Order a delivery</h6>
                                <figure>
                                    <img src={deliveryImg} alt="Bike" />
                                </figure>
                            </div>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <figure>
                                <img src={menu3} alt="Bruschetta" />
                            </figure>
                            <div>
                                <h6>Bruschetta</h6>
                                <span>$5.00</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
                                fugiat blanditiis dolorum. Magnam, iure!
                            </p>
                            <div>
                                <h6>Order a delivery</h6>
                                <figure>
                                    <img src={deliveryImg} alt="Bike" />
                                </figure>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
        </>
    );
};

export default Main;
