import { useEffect, useState } from "react";
import Van from "../components/Cards/Van";
import { Link, useSearchParams } from "react-router-dom";
import Tag from "../components/ui/Tag";

const VansList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vansData, setVansdata] = useState([
        {
            id: "none",
            name: "name",
            price: "23",
        },
    ]);

    const typeFilter = searchParams.get("type");

    const displayedVans = typeFilter
        ? vansData.filter((van) => van.type === typeFilter)
        : vansData;

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
            <div className="my-12 flex gap-2 ">
                <label onClick={() => setSearchParams({ type: "simple" })}>
                    <Tag text="simple" />
                </label>
                <label onClick={() => setSearchParams({ type: "rugged" })}>
                    <Tag text="rugged" />
                </label>
                <label onClick={() => setSearchParams({ type: "luxury" })}>
                    <Tag text="luxury" />
                </label>
                <label onClick={() => setSearchParams({})}>
                    <Tag text="Clear" />
                </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {displayedVans.map((van) => (
                    <Van
                        name={van.name}
                        price={van.price}
                        key={van.id}
                        image={van.imageUrl}
                        id={van.id}
                        type={van.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default VansList;
