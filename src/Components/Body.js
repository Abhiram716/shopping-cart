import React from "react";
import { ItemCard } from "./ItemCard";
const Body = ({ items, handleClick }) => {
    return (
        <div className="body">
            {items.map((item) => (
                <ItemCard item={item} key={item.id} handleClick={handleClick} />
            ))}
        </div>
    );
};

export default Body;
