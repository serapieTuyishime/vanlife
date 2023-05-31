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
import HostVansloader, { Vans as HostVans } from "./pages/Host/Vans";
import {
    VanDetails as HostVandetails,
    loader as vanDetailsLoder,
} from "./pages/Host/VanDetails";
import { SingleVanDetails as Details } from "./components/vans/SingleVanDetails";
import { Pricing } from "./components/vans/Pricing";
import Photos from "./components/vans/Photos";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";
import Login, {
    action as loginAction,
    loader as loginLoader,
} from "./pages/Login";
import { requireAuth } from "./utils/handleAuth";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/login"
                    element={<Login />}
                    loader={loginLoader}
                    action={loginAction}
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/vans"
                    element={<VansList />}
                    loader={vansLoader}
                    errorElement={<Page404 />}
                />
                <Route path="/vans/:id" element={<VanDetails />} />
                <Route
                    path="/host"
                    element={<HostLayout />}
                    loader={async () => await requireAuth()}
                >
                    <Route
                        index
                        element={<Dashboard />}
                        loader={async () => await requireAuth()}
                    />
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route
                        end
                        path="vans"
                        element={<HostVans />}
                        loader={HostVansloader}
                    />
                    <Route
                        path="vans/:id"
                        element={<HostVandetails />}
                        loader={vanDetailsLoder}
                    >
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
