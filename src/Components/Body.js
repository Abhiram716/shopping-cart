import React from "react";
import { ItemCard } from "./ItemCard";
export const Body = ({ items }) => {
    return (
        <div className="body">
            {items.map((item) => (
                <ItemCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.image}
                />
            ))}
        </div>
    );
};

