import React from "react";
import { Link } from "react-router-dom";

const HostNavigation = () => {
    return (
        <div className="item-center gap-4 justify-start flex">
            <Link to="/host/dashboard" className="text-2xl">
                Dashboard
            </Link>
            <Link to="/host/income" className="text-2xl">
                Income
            </Link>
            <Link to="/host/income" className="text-2xl">
                Vans
            </Link>
            <Link to="/host/income" className="text-2xl">
                Reviews
            </Link>
        </div>
    );
};

export default HostNavigation;
