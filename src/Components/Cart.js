import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ cart }) => {
    return (
        <div>

        <div className="secondary">
          <h1>This is your cart</h1>
        </div>        
        <div className="cart-item-container">
            {cart.map((item) => (
                <CartItem item={item} key={item.id} />
            ))}
        </div>
        </div>
    );
};


