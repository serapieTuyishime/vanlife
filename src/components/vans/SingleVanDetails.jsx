import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleVanDetails = () => {
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
                        <span className="pr-2 font-bold">Name:</span>
                        {details.name}
                    </label>
                    <label>
                        <span className="pr-2 font-bold">Category:</span>
                        {details.category}
                    </label>
                    <label>
                        <span className="pr-2 font-bold">Description:</span>
                        {details.description}
                    </label>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
