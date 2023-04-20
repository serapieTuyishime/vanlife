import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

import "./server";
import Footer from "./components/Footer";
import VansList from "./pages/VansList";
import VanDetails from "./pages/VanDetails";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostNavigation from "./components/ui/HostNavigation";
import HostLayout from "./components/Layouts/HostLayout";
import Dashboard from "./pages/Host/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<VansList />} />
                <Route path="/vans/:id" element={<VanDetails />} />
                <Route path="/host" element={<HostLayout />}>
                    <Route path="/host/" element={<Dashboard />} />
                    <Route path="/host/dashboard" element={<Dashboard />} />
                    <Route path="/host/income" element={<Income />} />
                    <Route path="/host/reviews" element={<Reviews />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
