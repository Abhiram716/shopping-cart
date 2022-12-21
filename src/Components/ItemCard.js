import React from "react";
import { ButtonContainer } from "./ButtonContainer";

export const ItemCard = (props) => {
    const { imgUrl, title } = props;
    return (
        <div className="card">
            <img src={imgUrl} />
            <div>{title}</div>
            <div>
                <ButtonContainer/>
            </div>
        </div>
    );
};


