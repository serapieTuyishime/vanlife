import { Link } from "react-router-dom";

const Van = ({ id, image, price, name, isSmallcard = false }) => {
    return (
        <>
            {isSmallcard ? (
                <div className="flex h-24 p-2 bg-white">
                    <img src={image} alt={name} className="w-1/5 h-full" />
                    <label className="w-3/4">
                        <label className="text-2xl font-bold">{name}</label>
                        <label>{price}/day</label>
                    </label>
                    <label className="flex-grow">Edit</label>
                </div>
            ) : (
                <Link
                    to={`/vans/${id}`}
                    className="grid gap-2 h-68 bg-lime-300 w-[14rem]
    "
                >
                    <div className="w-full h-11/12">
                        <img
                            alt={name}
                            className="object-contain w-full h-full"
                            src={image}
                        />
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                        <label>{name}</label>
                        <label>{price}</label>
                    </div>
                </Link>
            )}
        </>
    );
};

export default Van;
