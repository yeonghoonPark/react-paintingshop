import React from "react";

function Item(props) {
    return (
        <div className="item" key={props.item.id}>
            <div className="img-box">
                <img src={props.item.image} alt={props.item.title} />
            </div>
            <div className="contents">
                <span className="item-title">{props.item.title}</span>
                <span className="item-producer">{props.item.producer}</span>
                <span className="item-type">{props.item.type}</span>
                <span className="item-size">{props.item.size}</span>
                <span className="item-price">{props.item.price}</span>
            </div>
            <div className="icon">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <button>Purchase</button>
            </div>
        </div>
    );
}

export default Item;