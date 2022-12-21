import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const CartItem = ({ item }) => {
    const { image, title, price } = item;
    return (
        <div className="cart-item">
            <img src={image} />
            <div className="cart-item-description">
                <div>
                    <span>Title: {title}</span>
                </div>
                <div>
                    <span>Price: {price}USD</span>
                </div>
            </div>
            <div>
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );
};


