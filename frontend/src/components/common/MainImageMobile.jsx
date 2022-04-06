import React from 'react';
import MobMainImg from '../../assets/img/main-img-sm.png';

function MainImageMobile() {
    return (
        <>
            <section class="main-image-sm">
                <img src={MobMainImg} alt="main-image" />
            </section>
        </>
    );
}

export default MainImageMobile;
