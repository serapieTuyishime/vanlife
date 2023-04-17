import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

import "./server";
import Footer from "./components/Footer";
import VansList from "./pages/VansList";
import VanDetails from "./pages/VanDetails";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<VansList />} />
                <Route path="/vans/:id" element={<VanDetails />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
