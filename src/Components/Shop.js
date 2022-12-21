import React from "react";
import { useState, useEffect } from "react";
import {Body}  from "./Body";

export const Shop = ({ handleClick }) => {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setItems(data));
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <Body items = {items} handleClick={ handleClick }/>
        </div>
    );
};

