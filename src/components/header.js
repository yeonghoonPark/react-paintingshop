import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header" id="header">
            <div className="container">
                <h1 className="main-title" onClick={props.toTop}>PAINTING SHOP</h1>
                <nav className="nav">
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/shop">Shop</Link></span>
                    {/* <span><Link to="/notice">Notice</Link></span> */}
                </nav>
                <div className="nav-btn" onClick={props.navTmCall}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className="nav-tm">
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/shop">Shop</Link></span>
                    {/* <span><Link to="/notice">Notice</Link></span> */}
                </nav>
            </div>
        </header>
    );
}

export default Header;