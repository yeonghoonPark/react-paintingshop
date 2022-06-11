import React from "react";
import SkipMemu from './components/skip-menu';
import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';


function Shop(props) {
    return (
        <>
            <SkipMemu />
            <Header navTmCall={props.navTmCall} toTop={ props.toTop } />
            <Slider />
            <Footer toTop={props.toTop} /> 
        </>
    );
}

export default Shop;