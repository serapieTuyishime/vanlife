import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="flex bg-lime-50 justify-between items-center h-32 px-12">
            <Link to="/" className="text-3xl uppercase font-bold">
                #vanlife
            </Link>
            <div className="item-center gap-4 justify-end flex">
                <Link to="/about" className="text-2xl">
                    About
                </Link>
                <Link to="/vans" className="text-2xl">
                    Vans
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
