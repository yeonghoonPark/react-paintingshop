import React from "react";
import './css/main.css';
import SkipMemu from './components/skip-menu';
import Header from './components/header';
import Slider from './components/slider';
import Piece from './components/piece';
import Academy from './components/academy';
import ContactUs from './components/contact-us';
import Footer from './components/footer';

function Main() {
  
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
    return (
        <>
          <SkipMemu />
          <Header navTmCall={navTmCall} toTop={ toTop } />
          <Slider />
          <Piece />
          <Academy />
          <ContactUs />
          <Footer toTop={ toTop } /> 
        </>
    );
}

export default Main;