import React from 'react';
import Header from '../components/common/Header';
import Subscribe from '../components/common/Subscribe';
import MainImageDesktop from '../components/common/MainImageDesktop';
import MainImageMobile from '../components/common/MainImageMobile';
import IconShop from '../assets/img/shop-now.svg';
import IconArrow from '../assets/img/arrow.svg';
import IconBackward from '../assets/img/transparent-backward-arrow.svg';
import Iconforward from '../assets/img/forward-arrow-white.svg';
import IconLeft from '../assets/img/grid-arrow-left.svg';
import IconBlue from '../assets/img/blue-shipping.svg';
import IconSmile from '../assets/img/smile.svg';
import IconGautented from '../assets/img/gautented-blue.svg';
import ImgTshirt1 from '../assets/img/pic-1.png';
import ImgTshirt2 from '../assets/img/pic-2.png';
import IconOff from '../assets/img/thirty-off.svg';
import IconShipping from '../assets/img/shipping.svg';
import IconPayments from '../assets/img/payments.svg';
import IconMoney from '../assets/img/gaurented.svg';
import IconQuality from '../assets/img/finest-quality.svg';
import Footer from '../components/common/Footer';

function Home() {
    return (
        <>
            <section class="main-image">
                <MainImageDesktop />
                <MainImageMobile />
                <Header />
                <div class="text-sm">
                    <p>Look Funky with Printaro</p>
                </div>
                <div class="text">
                    <p>
                        Get your <br />
                        Favourite <br />
                        Design Print <br />
                        on T- Shirt
                    </p>
                    <div class="shop-now">
                        <img src={IconShop} alt="shop-now" />
                    </div>
                </div>
                <div class="arrow">
                    <img src={IconArrow} alt="arrow" />
                </div>
                <div class="front-back-arrows">
                    <img src={IconBackward} alt="arrow" />
                    <img src={Iconforward} alt="arrow" />
                </div>
                <section class="white-background">
                    <div class="free-shipping">
                        <img src={IconBlue} alt="shipping" />
                        <div class="shipping-text">
                            <span>Free Shipping</span>
                            <p>On purchases over $150</p>
                        </div>
                    </div>
                    <div class="customer-satisfaction">
                        <img src={IconSmile} alt="smile" />
                        <div class="satisfaction-text">
                            <span>99% satisfied customers</span>
                            <p>
                                Our clients' opinions <br />
                                speak for themselves
                            </p>
                        </div>
                    </div>
                    <div class="originality">
                        <img src={IconGautented} alt="gaurented" />
                        <div class="originality-text">
                            <span>Originality Guaranteed</span>
                            <p>
                                2 years warranty for each <br />
                                Material from our store
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <section class="offers">
                <div class="dark-orange">
                    <img src={ImgTshirt1} alt="image" />
                    <div class="offer-text">
                        <p>
                            New collection <br />
                            available now
                        </p>
                        <button>VIEW ALL</button>
                    </div>
                </div>
                <div class="dark-blue">
                    <img src={ImgTshirt2} alt="image" />
                    <div class="offer-text">
                        <p>
                            Redefining the <br />
                            modern design
                        </p>
                        <button>CHECK MORE</button>
                    </div>
                </div>
            </section>
            <section class="just-for-you">
                <div class="heading">
                    <p>Selected just for you</p>
                    <button>SHOW MORE</button>
                </div>
                <div class="item-container">
                    <img src={IconLeft} alt="arrow" />
                    <div class="item-flex">
                        <div class="item">
                            <div class="background">
                                <div class="item-image">
                                    <img src={ImgTshirt1} alt="tshirt-one" />
                                </div>
                            </div>
                            <div class="item-details">
                                <p>Mandelbaum's</p>
                                <span>$199.99</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="background">
                                <div class="item-image">
                                    <img src={ImgTshirt1} alt="tshirt-one" />
                                </div>
                                <div class="discount">
                                    <img src={IconOff} alt="30%-off" />
                                </div>
                            </div>
                            <div class="item-details">
                                <p>Winter Camp name</p>
                                <div class="discount-price">
                                    <span>$299.99</span>
                                    <p>$499.99</p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="background">
                                <div class="item-image">
                                    <img src={ImgTshirt1} alt="tshirt-one" />
                                </div>
                            </div>
                            <div class="item-details">
                                <p>Cycling</p>
                                <span>$169.99</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="background">
                                <div class="item-image">
                                    <img src={ImgTshirt1} alt="tshirt-one" />
                                </div>
                            </div>
                            <div class="item-details">
                                <p>Robo Ninja</p>
                                <span>$119.99</span>
                            </div>
                        </div>
                    </div>
                    <img src={Iconforward} alt="arrow" />
                </div>
            </section>
            <section class="choose-us">
                <div class="heading">
                    <p>Why should you choose us?</p>
                </div>
                <div class="container">
                    <div class="free-shipping">
                        <img src={IconShipping} alt="shipping" />
                        <div class="choose-us-text">
                            <span>Free Shipping</span>
                            <p>
                                All purchases over $150 are eligible for <br />
                                free shipping via UPS Pack and Ship.
                            </p>
                        </div>
                    </div>
                    <div class="easy-payments">
                        <img src={IconPayments} alt="payments" />
                        <div class="choose-us-text">
                            <span>Easy Payments</span>
                            <p>
                                All payments are processed instantly <br />
                                over a secure payment protocol.
                            </p>
                        </div>
                    </div>
                    <div class="money-back">
                        <img src={IconMoney} alt="gaurented" />
                        <div class="choose-us-text">
                            <span>Money-Back Guarantee</span>
                            <p>
                                If an item arrived damaged or you've <br />
                                changed your mind, you can send it <br />
                                back for a full refund.
                            </p>
                        </div>
                    </div>
                    <div class="quality">
                        <img src={IconQuality} alt="finest-quality" />
                        <div class="choose-us-text">
                            <span>Finest Quality</span>
                            <p>
                                Designed to last, each of our products has <br />
                                been crafted with the finest cloth <br />
                                materials.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe />
            <Footer />
        </>
    );
}

export default Home;
