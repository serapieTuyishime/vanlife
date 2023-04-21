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
import HostLayout from "./components/Layouts/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import { Vans as HostVans } from "./pages/Host/Vans";
import { VanDetails as HostVandetails } from "./pages/Host/VanDetails";

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
                    <Route index path="dashboard" element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route end path="vans" element={<HostVans />} />
                    <Route path="vans/:id" element={<HostVandetails />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;