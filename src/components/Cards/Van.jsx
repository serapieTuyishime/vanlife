import React from "react";
import { Link } from "react-router-dom";

const Van = ({ id, image, price, name }) => {
    return (
        <Link
            to={`/vans/${id}`}
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
        </Link>
    );
};

export default Van;
