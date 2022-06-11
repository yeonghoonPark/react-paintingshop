import React from "react";
import SkipMemu from './components/skip-menu';
import Header from './components/header';
import Slider from './components/slider';
import Piece from './components/piece';
import Academy from './components/academy';
import ContactUs from './components/contact-us';
import Footer from './components/footer';

function Main(props) {
    return (
        <>
          <SkipMemu />
          <Header navTmCall={props.navTmCall} toTop={ props.toTop } />
          <Slider />
          <Piece />
          <Academy />
          <ContactUs />
          <Footer toTop={ props.toTop } /> 
        </>
    );
}

export default Main;