import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Tag from "../components/ui/Tag";
import Button from "../components/Button";

const VanDetails = () => {
    const [vanDetails, setvanDetails] = useState("");
    const params = useParams();
    const location = useLocation();

    const { id: vanID } = params;

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/host/vans/${vanID}`);
            const data = await res.json();

            setvanDetails(data.vans[0]);
        })();
    }, [vanID]);

    const search = location.state?.search || "";
    const searchText = location.state?.type || "all";
    return vanDetails ? (
        <div className="grid lg:grid-cols-2">
            <Link to={`/vans${search}`}>&larr; Back to {searchText} vans</Link>
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
        <label>
            Van not found...
            <br />
            <Link to={`/vans`}>
                <Button text="Go back to all vans" />
            </Link>
        </label>
    );
};

export default VanDetails;
