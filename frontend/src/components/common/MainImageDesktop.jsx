import React from 'react';
import DesktopMainImg from '../../assets/img/web-banner.svg';

function MainImageDesktop() {
    return (
        <>
            <div class="main-img-xl">
                <img src={DesktopMainImg} alt="banner" />
            </div>
        </>
    );
}

export default MainImageDesktop;
