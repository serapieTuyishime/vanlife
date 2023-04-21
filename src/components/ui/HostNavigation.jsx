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
                to="/host/dashboard"
                className={`text-2xl`}
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/host/income"
                className="text-2xl"
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Income
            </NavLink>
            <NavLink
                to="/host/reviews"
                className="text-2xl"
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Reviews
            </NavLink>
            <NavLink
                to="/host/vans"
                className="text-2xl"
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Vans
            </NavLink>
        </div>
    );
};

export default HostNavigation;
