import TitleElement from "../../components/ui/TitleElement";
import Van from "../../components/Cards/Van";
import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils/handleAuth";

export default async function HostVansloader() {
    await requireAuth();
    return getVans();
}

export const Vans = () => {
    const vansData = useLoaderData();

    return (
        <div className="grid gap-4 w-[40rem] mx-auto">
            <TitleElement text="Your listed vans" />
            {vansData.slice(0.5).map((van) => {
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
            })}
        </div>
    );
};
