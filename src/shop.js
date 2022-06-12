import React from "react";
import './css/shop.css';
import { SkipMemuShop }  from './components/skip-menu';
import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';
import productData from './data/productData.json';

function Shop(props) {


    let newProductData = productData.map((item, index) => {
        return (
            <div className="item" key={index}>
                <div className="img-box">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="contents">
                    <span className="item-title">{item.title}</span>
                    <span className="item-producer">{item.producer}</span>
                    <span className="item-type">{item.type}</span>
                    <span className="item-size">{item.size}</span>
                    <span className="item-price">{item.price}</span>
                </div>
                <div className="icon">
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <button>Purchase</button>
                </div>
            </div>
        );
    })


    return (
        <>
            <SkipMemuShop />
            <Header navTmCall={props.navTmCall} toTop={props.toTop} />
            <Slider />




            <section className="product" id="product">
                <div className="container">
                    <h2 className="title"><span>PRODUCT</span></h2>
                    <nav className="buttons">
                        <span className="all">All</span>
                        <span className="watercolor" data-key="type" data-value="Watercolor">Watercolor</span>
                        <span className="" data-key="type" data-value="Oilcolor">Oilcolor</span>
                    </nav>
                    <article className="items">
                        {newProductData}
                    </article>
                </div>
            </section>

            




            <Footer toTop={props.toTop} /> 
        </>
    );
}

export default Shop;