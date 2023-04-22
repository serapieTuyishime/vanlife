import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

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
    const { id: vanId } = useParams();

    useEffect(() => {
        const fetchVansData = async () => {
            const res = await fetch(`/api/host/vans/${vanId}`);
            const data = await res.json();

            setVanDetails(data.vans[0]);
        };
        fetchVansData();
    }, [vanId]);

    const { name, imageUrl, type } = vanDetails;
    return (
        <>
            {vanDetails ? (
                <div className="grid gap-4 bg-lime-50">
                    <Link to="/host/vans">Back to all vans</Link>
                    <div className="w-3/5 p-4 mx-auto bg-white">
                        <div className="flex gap-4">
                            <img
                                className="w-1/3 h-44"
                                src={imageUrl}
                                alt={name}
                            />
                            <div className="grid justify-center gap-2">
                                <label>{type}</label>
                                <label>{name}</label>
                                <label>{vanDetails.price}/day</label>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <div className="flex items-center gap-3">
                                <Link
                                    className=""
                                    to={`/host/vans/${vanId}/details`}
                                >
                                    Details
                                </Link>
                                <Link
                                    className=""
                                    to={`/host/vans/${vanId}/pricing`}
                                >
                                    Pricing
                                </Link>{" "}
                                <label className="">Photos</label>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            ) : (
                <label>Nothing to diaplay</label>
            )}
        </>
    );
};
