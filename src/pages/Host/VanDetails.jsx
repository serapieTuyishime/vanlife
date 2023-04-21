import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const VanDetails = () => {
    const [vanDetails, setVanDetails] = useState([
        {
            name: "NO",
            imageUrl: "/",
            type: "simple",
            price: "0",
            category: "simple",
            description: "Full description",
        },
    ]);
    const fetchVansData = async (vanId) => {
        const res = await fetch("/api/vans");
        const data = await res.json();

        setVanDetails(data.vans[0]);
    };
    const { id } = useParams();
    useEffect(() => {
        fetchVansData(id);
    }, []);

    const { name, imageUrl, type, price, category, description } = vanDetails;
    return (
        <>
            {vanDetails ? (
                <div className="grid gap-4 bg-lime-50">
                    <Link to="/host/vans">Back to all vans</Link>
                    <div className="w-3/5 p-4 mx-auto bg-white">
                        <div className="flex gap-4">
                            <img
                                className="w-2/5 h-36"
                                src={imageUrl}
                                alt={name}
                            />
                            <div className="grid justify-center gap-2">
                                <label>{type}</label>
                                <label>{name}</label>
                                <label>{price}/day</label>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <div className="flex items-center gap-3">
                                <label className="">Details</label>
                                <label className="">Pricing</label>
                                <label className="">Photos</label>
                            </div>
                            <label>
                                <span className="pr-2 font-bold">Name:</span>
                                {name}
                            </label>
                            <label>
                                <span className="pr-2 font-bold">
                                    Category:
                                </span>
                                {category}
                            </label>
                            <label>
                                <span className="pr-2 font-bold">
                                    Description:
                                </span>
                                {description}
                            </label>
                        </div>
                    </div>
                </div>
            ) : (
                <label>Nothing to diaplay</label>
            )}
        </>
    );
};
