import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Tag from "../components/ui/Tag";
import Button from "../components/Button";

const VanDetails = () => {
    const [vanDetails, setvanDetails] = useState("");
    const params = useParams();

    const { id: vanID } = params;

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/host/vans/${vanID}`);
            const data = await res.json();

            setvanDetails(data.vans[0]);
        })();
    }, [vanID]);
    return vanDetails ? (
        <div className="grid lg:grid-cols-2">
            <Link to=".">&larr; Back to vans</Link>
            <img
                className="w-full h-96 bg-lime-200"
                alt={vanDetails.name}
                src={vanDetails.imageUrl}
            />
            <div className="grid">
                <Tag text={vanDetails.type} color="orange" />
                <h1 className="text-3xl font-bold">{vanDetails.name}</h1>
                <label>
                    <span className="text-xl font-bold">
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
