import HostNavigation from "../ui/HostNavigation";
import { Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <div>
            <HostNavigation />
            <Outlet />
        </div>
    );
};

export default HostLayout;
