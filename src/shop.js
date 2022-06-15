import React, { useState } from "react";
import './css/shop.css';
import SkipMemu from './components/skip-menu';
import Header from './components/header';
import Slider from './components/slider';
import Product from "./components/product";
import Item from "./components/item";
import Footer from './components/footer';
import productData from './data/productData.json';

function Shop() {

    let toggleActive = (event) => {
        event.currentTarget.classList.toggle('active');
    }

    let navTmCall = (event) => {
        let navTm = document.querySelector('.nav-tm');
        navTm.classList.toggle('active');
        toggleActive(event);
    }

    let toTop = () => {
        window.scrollTo({ top: 0 });
    }

    let [useProductData, setUseProductData] = useState(productData);

    let newProductData = useProductData.map((item) => {
        return (
            <Item item={item} key={item.id} />
        );
    })

    let onButtonClick = (event) => {
        let value = event.target.value;
        if (value === 'all') {
            let filteredAllcolor = productData.filter(item => item.type !== null);
            setUseProductData(filteredAllcolor);
        } else if (value === 'watercolor') {
            let filteredWatercolor = productData.filter(item => item.type === 'Watercolor');
            setUseProductData(filteredWatercolor);
        } else if (value === 'oilcolor') {
            let filteredOilcolor = productData.filter(item => item.type === 'Oilcolor');
            setUseProductData(filteredOilcolor);
        }
    }

    return (
        <>
            <SkipMemu />
            <Header navTmCall={navTmCall} toTop={toTop} />
            <Slider />
            <Product newProductData={newProductData} onButtonClick={onButtonClick} />
            <Footer toTop={toTop} />
        </>
    );
}

export default Shop;