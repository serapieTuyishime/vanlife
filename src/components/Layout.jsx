import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="h-screen">
            <Navigation />
            <div className="h-4/5">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
