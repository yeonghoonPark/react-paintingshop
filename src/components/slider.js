import React from "react";
import slide01 from '../images/slide01.jpg';
import slide02 from '../images/slide02.jpg';
import slide03 from '../images/slide03.jpg';

function Slider() {
    return (
        <section className="slider" id="slider">
            <div className="container">
                <h2 className="title">SLIDER</h2>
                <div className="slide slide1">
                <h3 className="sub-title">30% discount on Oil painting</h3>
                <div className="img-box">
                    <img src={slide01} alt="slide01" />
                </div>
                </div>
                <div className="slide slide2">
                <h3 className="sub-title">Learn to be happy</h3>
                <div className="img-box">
                    <img src={slide02} alt="slide02" />
                </div>
                </div>
                <div className="slide slide3 active">
                <h3 className="sub-title">Welcome to Painting Shop</h3>
                <div className="img-box">
                    <img src={slide03} alt="slide03" />
                </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;