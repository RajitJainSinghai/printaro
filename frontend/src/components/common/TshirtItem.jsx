import React from 'react';

function TshirtItem() {
    return (
        <>
            <div class="item">
                <div class="background">
                    <div class="heart">
                        <img src="images/heart.svg" alt="heart" />
                    </div>
                    <div class="item-image">
                        <img src="images/img-10.png" alt="item" />
                    </div>
                </div>
                <div class="item-details">
                    <p>T-Shirt Summer Vibes</p>
                    <span>79.99</span>
                </div>
            </div>
        </>
    );
}

export default TshirtItem;
