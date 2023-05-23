import TitleElement from "../../components/ui/TitleElement";
import Van from "../../components/Cards/Van";
import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export default function HostVansloader() {
    return getVans();
}

export const Vans = () => {
    const vansData = useLoaderData();

    return (
        <div className="grid gap-4 bg-lime-50">
            <TitleElement text="Your listed vans" />
            {vansData ? (
                vansData.slice(0.5).map((van) => {
                    return (
                        <Link key={van.id} to={van.id}>
                            <Van
                                isSmallcard
                                id={van.id}
                                image={van.imageUrl}
                                price={van.price}
                                name={van.name}
                                key={van.id}
                            />
                        </Link>
                    );
                })
            ) : (
                <label>Wait for vans to be loaded</label>
            )}
        </div>
    );
};
