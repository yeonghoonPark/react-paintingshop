import React from "react";

function Footer(props) {
    return (
        <footer className="footer" id="footer">
            <div className="container">
              <address className="address">COPYRIGHTⓒ 2022 yeonghoon-Park, All Right Reserved</address>
              <div className="to-top" onClick={props.toTop}>
                <span>TOP</span>
              </div>
            </div>
        </footer>
    );
}

export default Footer;