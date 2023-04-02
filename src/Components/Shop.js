import React, { useEffect, useState } from "react";
import Body from "./Body";

const Shop = ({ handleClick }) => {
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
            <Body items={items} handleClick={handleClick} />
        </div>
    );
};

export default Shop;
