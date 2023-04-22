import { useOutletContext } from "react-router-dom";

export const SingleVanDetails = () => {
    const { vanDetails: details } = useOutletContext();
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
