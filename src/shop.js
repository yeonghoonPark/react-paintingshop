import React from "react";
import './css/shop.css';
import { SkipMemuShop }  from './components/skip-menu';
import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';
import oilFlower from './images/oilcolor_flower.jpg';

function Shop(props) {
    return (
        <>
            <SkipMemuShop />
            <Header navTmCall={props.navTmCall} toTop={ props.toTop } />
            <Slider />




            <section className="product" id="product">
                <div className="container">
                    <h2 className="title"><span>PRODUCT</span></h2>
                    <nav className="nav">
                        <span>All</span>
                        <span>Watercolor</span>
                        <span>Oilcolor</span>
                    </nav>
                    <article className="items">
                        
                        <div className="item">
                            <div className="img-box">
                                <img src={oilFlower} alt="flower" />
                            </div>
                            <span className="item-producer">Producer : James</span>
                            <span className="item-type">Type : Oilcolor</span>
                            <span className="item-title">Title : Flower(2022)</span>
                            <span className="item-price">Price : 250,000 ₩</span>
                            <i className="fa-solid fa-heart"></i>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>

                        <div className="item">
                            <div className="img-box">
                                <img src={oilFlower} alt="flower" />
                            </div>
                            <span className="item-producer">Producer : James</span>
                            <span className="item-type">Type : Oilcolor</span>
                            <span className="item-title">Title : Flower(2022)</span>
                            <span className="item-price">Price : 250,000 ₩</span>
                            <i className="fa-solid fa-heart"></i>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>

                        <div className="item">
                            <div className="img-box">
                                <img src={oilFlower} alt="flower" />
                            </div>
                            <div className="contents">
                                <span className="item-producer">Anna Vidovich</span>
                                <span className="item-title">Flower (2022)</span>
                                <span className="item-type">Oilcolor Type</span>
                                <span className="item-price">250,000 ₩</span>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <button>Buy</button>
                            </div>
                            
                        </div>
                    </article>
                </div>
            </section>

            




            <Footer toTop={props.toTop} /> 
        </>
    );
}

export default Shop;