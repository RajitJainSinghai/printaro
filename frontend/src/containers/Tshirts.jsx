import React from 'react';
import TshirtType from '../components/common/TshirtType';
import Tshirt from '../components/common/TshirtItem';
import Subscribe from '../components/common/Subscribe';
function Tshirts() {
    return (
        <>
            <section class="home">
                <div class="home-link">
                    <a href="#">
                        <img src="images/home.svg" alt="home" />
                    </a>
                </div>
            </section>
            <main>
                <aside>
                    <section class="main">
                        <div class="product-type">
                            <div class="heading">
                                <h5>PRODUCT TYPE</h5>
                                <img src="images/upward-arrow.svg" alt="upward-arrow" />
                            </div>
                            <TshirtType />
                            <TshirtType />
                            <TshirtType />
                            <TshirtType />
                        </div>
                    </section>
                    <section class="price">
                        <div class="heading">
                            <h5>PRICE</h5>
                            <img src="images/upward-arrow.svg" alt="upward-arrow" />
                        </div>
                        <div class="bar">
                            <div class="price-range">
                                <button>0 USD</button>
                                <button>500 USD</button>
                            </div>
                            <input type="range" />
                        </div>
                    </section>
                    <section class="collection">
                        <div class="heading">
                            <h5>COLLECTION</h5>
                            <img src="images/downward-arrow.svg" alt="downward-arrow" />
                        </div>
                    </section>
                    <section class="size">
                        <div class="heading">
                            <h5>SIZE</h5>
                            <img src="images/upward-arrow.svg" alt="upward-arrow" />
                        </div>
                        <div class="size-chart">
                            <div class="xs">
                                <p>XS</p>
                            </div>
                            <div class="small">
                                <p>S</p>
                            </div>
                            <div class="medium">
                                <p>M</p>
                            </div>
                            <div class="large">
                                <p>L</p>
                            </div>
                            <div class="xl">
                                <p>XL</p>
                            </div>
                            <div class="xxl">
                                <p>XXL</p>
                            </div>
                        </div>
                    </section>
                    <section class="color">
                        <div class="heading">
                            <h5>COLOR</h5>
                            <img src="images/upward-arrow.svg" alt="upward-arrow" />
                        </div>
                        <div class="color-chart">
                            <input type="color" value="#000" />
                            <input type="color" value="#6F3E18" />
                            <input type="color" value="#D4BE8D" />
                            <input type="color" value="#838383" />
                            <input type="color" value="#ffffff" />
                            <input type="color" value="#0F73AD" />
                        </div>
                    </section>
                </aside>
                <section class="products">
                    <div class="heading">
                        <p>
                            Choose your T-Shirts <span>(133)</span>
                        </p>
                        <div class="show-products">
                            <h6>Show Products:</h6>
                            <img src="images/show-products.svg" alt="show-products" />
                        </div>
                        <div class="sort">
                            <h6>Sort:</h6>
                            <img src="images/popular.svg" alt="popular" />
                        </div>
                        <div class="filter">
                            <img src="images/filter.svg" alt="filter" />
                        </div>
                    </div>
                    <div class="product-container">
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                        <Tshirt />
                    </div>
                </section>
            </main>
            <section class="pages">
                <div class="page-num">
                    <p>Pages</p>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div>
                <div class="next">
                    <a href="#">NEXT</a>
                </div>
            </section>
            <Subscribe />
        </>
    );
}

export default Tshirts;
