import React, { useEffect, useState } from "react";
import TitleElement from "../../components/ui/TitleElement";
import Van from "../../components/Cards/Van";
import { Link } from "react-router-dom";

export const Vans = () => {
    const [vansData, setVansdata] = useState([
        {
            id: "none",
            name: "name",
            price: "23",
        },
    ]);
    const fetchVansData = async () => {
        const res = await fetch("/api/host/vans");
        const data = await res.json();
        setVansdata(data.vans);
    };
    useEffect(() => {
        fetchVansData();
    }, []);

    return (
        <div className="grid gap-4 bg-lime-50">
            <TitleElement text="Your listed vans" />
            {vansData.slice(0.5).map((van) => {
                return (
                    <Link key={van.id} to={van.id}>
                        <Van
                            isSmallcard
                            id={van.id}
                            image={van.imageUrl}
                            price={van.price}
                            name={van.name}
                            key={van.id}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
