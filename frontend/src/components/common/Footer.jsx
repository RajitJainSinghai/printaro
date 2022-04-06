import React from 'react';
import IconLogo from '../../assets/img/logo.svg';
import IconFacebook from '../../assets/img/facebook-logo.svg';
import IconTwitter from '../../assets/img/twitter-logo.svg';
import IconLinkedIn from '../../assets/img/linkedin-logo.svg';
import IconInstagram from '../../assets/img/instagram-logo.svg';
import IconYoutube from '../../assets/img/youtube-logo.svg';

function Footer() {
    return (
        <>
            <section class="bottom">
                <div class="printaro">
                    <img src={IconLogo} alt="logo" />
                    <p>
                        High quality T Shirts made from eco-friendly <br /> materials. Designed for modern Guys and
                        Girls
                    </p>
                    <div class="social-links">
                        <img src={IconFacebook} alt="facebook-logo" />
                        <img src={IconTwitter} alt="twitter-logo" />
                        <img src={IconLinkedIn} alt="linkedin-logo" />
                        <img src={IconInstagram} alt="instagram-logo" />
                        <img src={IconYoutube} alt="youtube-logo" />
                    </div>
                </div>
                <div class="shopping-online">
                    <span>Shopping online</span>
                    <div class="links">
                        <a href="#">Order Status</a>
                        <a href="#">Shipping and Delivery</a>
                        <a href="#">Returns</a>
                        <a href="#">Payment Options</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div class="information">
                    <span>Information</span>
                    <div class="links">
                        <a href="#">Gift Cards</a>
                        <a href="#">Find a Store</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Become a member</a>
                        <a href="#">Site feedback</a>
                    </div>
                </div>
                <div class="contact">
                    <span>Contact</span>
                    <div class="links">
                        <a href="#">tshirt@printaro.com</a>
                        <a href="#">Hotline: +1 131 138 138</a>
                    </div>
                </div>
            </section>
            <footer>
                <p>DESIGN BY PRINTARO - © 2022. ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    );
}

export default Footer;
