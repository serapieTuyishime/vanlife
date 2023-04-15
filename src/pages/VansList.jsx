import React, { useEffect, useState } from "react";
import Van from "../components/Cards/Van";

const VansList = () => {
    const [vansData, setVansdata] = useState([
        {
            id: "none",
            name: "name",
            price: "23",
        },
    ]);
    const fetchVansData = async () => {
        const res = await fetch("/api/vans");
        const data = await res.json();
        setVansdata(data.vans);
    };
    useEffect(() => {
        fetchVansData();
    }, []);
    return (
        <div className="grid ">
            <h1 className="text-3xl font-bold">Explore our van options</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {vansData.map((van) => (
                    <Van
                        name={van.name}
                        price={van.price}
                        key={van.id}
                        image={van.imageUrl}
                    />
                ))}
            </div>
            {/* {JSON.stringify(vansData[1])} */}
        </div>
    );
};

export default VansList;
