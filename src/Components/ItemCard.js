import { AiOutlinePlus } from "react-icons/ai";
import React from "react";

export const ItemCard = ({ item, handleClick }) => {
  const { image, title, price } = item;
  return (
    <div className="card">
      <img src={image} alt=""/>
      <div className="description">
        <div>
          <span>Title: {title}</span>
        </div>
        <div>
          <span>Price: {price}USD</span>
        </div>
      </div>
      <div>
        <button onClick={() => handleClick(item)}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};
