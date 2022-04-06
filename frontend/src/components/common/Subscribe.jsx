import React from 'react';

function Subscribe() {
    return (
        <>
            <section class="newsletter">
                <div class="subscription">
                    <p>
                        Subscribe to our newsletter and <br /> receive exclusive offers every week
                    </p>
                </div>
                <div class="email">
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div class="button-subscribe">
                    <button>Subscribe</button>
                </div>
            </section>
        </>
    );
}

export default Subscribe;
