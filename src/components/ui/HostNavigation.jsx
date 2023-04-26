import { NavLink } from "react-router-dom";

const HostNavigation = () => {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };
    return (
        <div className="flex justify-start gap-4 item-center">
            <NavLink
                to="."
                className={`text-2xl`}
                style={({ isActive }) => (isActive ? activeStyles : null)}
                end
            >
                Dashboard
            </NavLink>
            <NavLink
                to="income"
                className="text-2xl"
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Income
            </NavLink>
            <NavLink
                to="reviews"
                className="text-2xl"
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Reviews
            </NavLink>
            <NavLink
                to="vans"
                className="text-2xl"
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Vans
            </NavLink>
        </div>
    );
};

export default HostNavigation;
