import React from "react";
import { Link } from 'react-router-dom';

function ContactUs() {
    return (
        <section className="contact-us" id="contact-us">
            <div className="container">
              <h2 className="title"><span>CONTACT-US</span></h2>
              <div className="customer">
                <h3 className="sub-title">CUSTOMER</h3>
                <ul>
                  <li><Link to="/">090-999-9999</Link></li>
                  <li><Link to="/">Notice</Link></li>
                  <li><Link to="/">Terms of Service</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Order &amp; Delivery</Link></li>
                </ul>
              </div>
              <div className="about">
                <h3 className="sub-title">ABOUT</h3>
                <ul>
                  <li><Link to="/">PAINTING SHOP</Link></li>
                  <li><Link to="/">ACADEMY</Link></li>
                </ul>
              </div>
              <div className="social">
                <h3 className="sub-title">SOCIAL</h3>
                <ul>
                  <li><Link to="/"><i className="fa-brands fa-youtube-square"></i></Link></li>
                  <li><Link to="/"><i className="fa-brands fa-facebook-square"></i></Link></li>
                  <li><Link to="/"><i className="fa-brands fa-twitter-square"></i></Link></li>
                  <li><Link to="/"><i className="fa-brands fa-instagram-square"></i></Link></li>
                </ul>
              </div>
            </div>
        </section>
    );
}

export default ContactUs;