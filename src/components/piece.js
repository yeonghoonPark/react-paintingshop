import React from "react";
import { Link } from 'react-router-dom';

function Piece() {
    return (
        <section className="piece" id="piece">
            <div className="container">
              <h2 className="title"><span>PIECE</span></h2>
              <article className="watercolor">
                <h3 className="sub-title">Watercolor</h3>
                <div className="img-box">
                  <img src={process.env.PUBLIC_URL + '/images/banner_watercolor.jpg'} alt="banner_watercolor" />
                </div>
                <p className="text">
                  <span>Watercolor is a type of paint that you can use to solve in water, or you can paint with it, so look at a variety of watercolors.</span>
                  <span>We have a variety of Watercolors available, so appreciate them and buy them.</span>
                </p>
                <button className="btn btn-watercolor"><Link to="/"><span>Enjoying Watercolor</span></Link></button>
              </article>
              <article className="oilcolor">
                <h3 className="sub-title">Oilcolor</h3>
                <div className="img-box">
                  <img src={process.env.PUBLIC_URL + '/images/banner_oilcolor.jpg'} alt="banner_oilcolor" />
                </div>
                <p className="text">
                  <span>It is a method loved by artists even today because it can be painted using oil-based paint, painted several times, and expressed using a unique texture of paint.</span>
                  <span>We have a new Oil painting in stock, so don't miss this opportunity.</span>
                </p>
                <button className="btn btn-oilcolor"><Link to="/"><span>Enjoying Oilcolor</span></Link></button>
              </article>
            </div>
        </section>
    );
}

export default Piece;