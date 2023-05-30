import { Link } from "react-router-dom";
import Button from "../components/Button";
const About = () => {
    return (
        <div className="grid h-[48rem] place-content-center relative">
            <img src="/about-bg.png" className="max-w-full" alt="About page" />
            <div className="px-5 mb-10 text-gray-700">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="px-5 pb-5 mx-5 text-gray-700 rounded-md">
                <h2>
                    Your destination is waiting.
                    <br />
                    Your van is ready.
                </h2>
                <Link to="/vans">
                    <Button text="Explore our vans" />
                </Link>
            </div>
        </div>
    );
};

export default About;
