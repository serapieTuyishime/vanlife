import React from "react";

const Van = ({ image, price, name }) => {
    return (
        <div
            className="grid gap-2 h-68 bg-lime-300 w-[14rem]
    "
        >
            <div className="h-11/12 w-full">
                <img
                    alt={name}
                    className="h-full object-contain w-full"
                    src={image}
                />
            </div>
            <div className="flex justify-between font-bold text-lg">
                <label>{name}</label>
                <label>{price}</label>
            </div>
        </div>
    );
};

export default Van;
