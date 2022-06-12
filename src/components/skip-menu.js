import React from "react";

export function SkipMemuMain() {
    return (
        <div className="skip-menu">
          <div className="container">
            <a href="#header"><span>HEADER</span></a>
            <a href="#slider"><span>SLIDER</span></a>
            <a href="#piece"><span>PIECE</span></a>
            <a href="#academy"><span>ACADEMY</span></a>
            <a href="#contact-us"><span>CONTACT-US</span></a>
          </div>
        </div>
    );
}

export function SkipMemuShop() {
    return (
        <div className="skip-menu">
          <div className="container">
            <a href="#header"><span>HEADER</span></a>
            <a href="#slider"><span>SLIDER</span></a>
            <a href="#"><span>본문</span></a>
          </div>
        </div>
    );
}

export default { SkipMemuMain, SkipMemuShop };