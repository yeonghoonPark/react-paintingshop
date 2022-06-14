import React from "react";

function Product(props) {
    return (
        <section className="product" id="product">
            <div className="container">
                <h2 className="title"><span>PRODUCT</span></h2>
                <nav className="buttons">
                    <button className="all" value="all" onClick={props.onButtonClick}>All</button>
                    <button className="watercolor" value="watercolor" onClick={props.onButtonClick}>Watercolor</button>
                    <button className="oilcolor" value="oilcolor" onClick={props.onButtonClick}>Oilcolor</button>
                </nav>
                <article className="items">
                    {props.newProductData}
                </article>
            </div>
        </section>
    );
}

export default Product;
