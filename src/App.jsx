import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import "./server";
import VansList, { loader as vansLoader } from "./pages/VansList";
import VanDetails from "./pages/VanDetails";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/Layouts/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import { Vans as HostVans } from "./pages/Host/Vans";
import { VanDetails as HostVandetails } from "./pages/Host/VanDetails";
import { SingleVanDetails as Details } from "./components/vans/SingleVanDetails";
import { Pricing } from "./components/vans/Pricing";
import Photos from "./components/vans/Photos";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/vans"
                    element={<VansList />}
                    loader={vansLoader}
                    errorElement={<Page404 />}
                />
                <Route path="/vans/:id" element={<VanDetails />} />
                <Route path="/host" element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route end path="vans" element={<HostVans />} />
                    <Route path="vans/:id" element={<HostVandetails />}>
                        <Route index element={<Details />} />
                        <Route path="details" element={<Details />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="photos" element={<Photos />} />
                    </Route>
                </Route>
                <Route path="*" element={<Page404 />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
