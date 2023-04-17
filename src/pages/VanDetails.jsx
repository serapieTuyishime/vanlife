import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Tag from "../components/Tag";
import Button from "../components/Button";

const VanDetails = () => {
    const [vanDetails, setvanDetails] = useState("");
    const params = useParams();

    const fetchVansByID = async () => {
        const res = await fetch(`/api/vans/${params.id}`);
        const data = await res.json();

        setvanDetails(data.vans);
    };

    useEffect(() => {
        fetchVansByID();
    }, []);
    return vanDetails ? (
        <div className="grid lg:grid-cols-2">
            <label>{JSON.stringify(vanDetails)}</label>
            <Link to="/vans">Back to vans</Link>
            <img
                className="h-96 w-full"
                alt={vanDetails.name}
                src={vanDetails.imageUrl}
            />
            <div className="grid">
                <Tag text={vanDetails.type} color="orange" />
                <h1 className="font-bold text-3xl">{vanDetails.name}</h1>
                <label>
                    <span className="font-bold text-xl">
                        {vanDetails.price}
                    </span>
                    /day
                </label>
                <p>{vanDetails.description}</p>
            </div>
            <Button text="Rent this van" />
        </div>
    ) : (
        <label>Loading</label>
    );
};

export default VanDetails;
