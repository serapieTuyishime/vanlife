import React from "react";
import { Link } from "react-router-dom";

const Van = ({ id, image, price, name, isSmallcard = false }) => {
    return (
        <>
            {isSmallcard ? (
                <Link className="h-24 bg-white p-2 flex">
                    <img src={image} alt={name} className="h-full w-1/5" />
                    <label className="w-3/4">
                        <label className="font-bold text-2xl">{name}</label>
                        <label>{price}/day</label>
                    </label>
                    <label className="flex-grow">Edit</label>
                </Link>
            ) : (
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
            )}
        </>
    );
};

export default Van;
