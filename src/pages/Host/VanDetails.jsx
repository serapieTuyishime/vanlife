import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils/handleAuth";

export async function loader({ params }) {
    await requireAuth();
    return getHostVans(params.id);
}
export const VanDetails = () => {
    const data = useLoaderData();

    const vanDetails = data[0];

    const { name, imageUrl, type } = vanDetails;
    return (
        <>
            {vanDetails ? (
                <div className="grid gap-4 bg-lime-50">
                    <Link to=".." relative="path">
                        Back to all vans
                    </Link>
                    <div className="w-3/5 p-4 mx-auto bg-white min-h-[25rem]">
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
                                <Link className="" to={`details`}>
                                    Details
                                </Link>
                                <Link className="" to={`pricing`}>
                                    Pricing
                                </Link>
                                <Link className="" to={`photos`}>
                                    Photos
                                </Link>
                            </div>
                            <Outlet context={{ vanDetails }} />
                        </div>
                    </div>
                </div>
            ) : (
                <label>Nothing to diaplay</label>
            )}
        </>
    );
};
