import React from 'react';
import IconLogo from '../../assets/img/logo.svg';
import ImgSearchSvg from '../../assets/img/search.svg';
import ImgCartSvg from '../../assets/img/cart.svg';
import ImgUserSvg from '../../assets/img/user.svg';
import MobImgSearchSvg from '../../assets/img/search-sm.svg';
import MobImgCartSvg from '../../assets/img/cart-sm.svg';
import MobImgSidebarSvg from '../../assets/img/sidebar.svg';

function Header() {
    return (
        <div>
            <header>
                <div class="logo">
                    <img src={IconLogo} alt="logo" />
                </div>
                <div class="menu">
                    <a href="#">Products</a>
                    <a href="#">Inspiration</a>
                    <a href="#">Designs</a>
                </div>
                <div class="right-nav">
                    <img src={ImgSearchSvg} alt="search" />
                    <img src={ImgCartSvg} alt="cart" />
                    <img src={ImgUserSvg} alt="user" />
                </div>
                <div class="right-nav-mb">
                    <img src={MobImgSearchSvg} alt="search" />
                    <img src={MobImgCartSvg} alt="cart" />
                    <img src={MobImgSidebarSvg} alt="sidebar" />
                </div>
            </header>
        </div>
    );
}

export default Header;
