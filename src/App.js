import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./Components/Shop";
import { Cart } from "./Components/Cart";
import { Header } from "./Components/Header";
import "./App.css";


export default function App() {
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        let isPresent = false;

        cart.forEach((product) => {
            if (item.id === product.id) {
                isPresent = true;
            }
        });

        if (isPresent) {
            return;
        }

        setCart([...cart, item]);
    };

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Shop handleClick={handleClick} />} />
                <Route path="/Cart" element={<Cart cart={cart} />} />
            </Routes>
        </div>
    );
}


