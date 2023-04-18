import React, { useEffect, useState } from "react";
import TitleElement from "../../components/ui/TitleElement";
import Van from "../../components/Cards/Van";

const Vans = () => {
    const [vansData, setVansdata] = useState([]);
    const fetchVansData = async () => {
        const res = await fetch("/api/vans");
        const data = await res.json();
        setVansdata(data.vans);
    };

    useEffect(() => {
        fetchVansData();
    }, []);

    return (
        <div className="grid">
            <TitleElement text="Your listed vans" />
            {vansData.slice(0.5).map((van) => {
                return (
                    <Van
                        isSmallcard
                        id={van.id}
                        image={van.imageUrl}
                        price={van.price}
                        name={van.name}
                        key={van.id}
                    />
                );
            })}
        </div>
    );
};

export default Vans;
