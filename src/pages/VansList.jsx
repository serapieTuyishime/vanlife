import { useEffect, useState } from "react";
import Van from "../components/Cards/Van";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Tag from "../components/ui/Tag";
import { getVans } from "../api";
import TitleElement from "../components/ui/TitleElement";

export function loader() {
    return getVans();
}
const VansList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [displayedVans, setDisplayedVans] = useState([]);

    const vansData = useLoaderData();
    const typeFilter = searchParams.get("type");

    useEffect(() => {
        if (!vansData) return;
        setDisplayedVans(
            typeFilter
                ? vansData.filter((van) => van.type === typeFilter)
                : vansData
        );
    }, [typeFilter, vansData]);

    function updateSearchParams(key, value) {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }

    if (loading) return <TitleElement text="Loading" />;
    return (
        <div className="grid ">
            <h1 className="text-3xl font-bold">Explore our van options</h1>
            <div className="flex gap-2 my-12 ">
                <label onClick={() => updateSearchParams("type", "simple")}>
                    <Tag text="simple" active={typeFilter === "simple"} />
                </label>
                <label onClick={() => updateSearchParams("type", "rugged")}>
                    <Tag text="rugged" active={typeFilter === "rugged"} />
                </label>
                <label onClick={() => updateSearchParams("type", "luxury")}>
                    <Tag text="luxury" active={typeFilter === "luxury"} />
                </label>
                <label onClick={() => updateSearchParams("type", null)}>
                    <Tag text="Clear" active={!typeFilter} />
                </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {displayedVans ? (
                    displayedVans.map((van) => (
                        <Link
                            state={{
                                search: `?${searchParams.toString()}`,
                                type: typeFilter,
                            }}
                            to={van.id}
                            key={van.id}
                        >
                            <Van
                                name={van.name}
                                price={van.price}
                                image={van.imageUrl}
                                id={van.id}
                                type={van.type}
                            />
                        </Link>
                    ))
                ) : (
                    <label>No vans to disaplay</label>
                )}
            </div>
        </div>
    );
};

export default VansList;
