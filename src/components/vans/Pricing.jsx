import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Pricing = () => {
    const [details, setDetails] = useState([
        {
            id: "none",
            name: "name",
            price: "23",
        },
    ]);

    const { id: vanid } = useParams();

    useEffect(() => {
        const fetchdetails = async () => {
            const res = await fetch(`/api/host/vans/${vanid}`);
            const data = await res.json();
            setDetails(data.vans[0]);
        };
        fetchdetails();
    }, [vanid]);
    return (
        <div>
            {details ? (
                <div className="grid gap-2">
                    <label>
                        <span className="pr-2 font-bold">Price:</span>
                        {details.price} / day
                    </label>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
