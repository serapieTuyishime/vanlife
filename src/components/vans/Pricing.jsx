import { useOutletContext } from "react-router-dom";

export const Pricing = () => {
    const { vanDetails: details } = useOutletContext();

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
