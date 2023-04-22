import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
    const { id: vanId } = useParams();
    const [vanPrice, setVanPrice] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/host/vans/${vanId}`);
            const data = await res.json();
            setVanPrice(data);
        })();
    }, [vanId]);
    return <div>{JSON.stringify(vanPrice)}</div>;
};

export default Photos;
