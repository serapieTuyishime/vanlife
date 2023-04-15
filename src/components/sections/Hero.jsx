import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className=" grid h-[48rem] place-content-center relative">
            <img
                className="w-screen h-[48rem] absolute -z-10"
                src="/eveningMountain.png"
                alt="Mountain evening"
            />
            <div className=" mx-auto grid text-white gap-12 max-w-4xl">
                <h1 className="text-7xl font-bold">
                    You got the travel plans, we got the travel vans.
                </h1>
                <p className="grid text-2xl">
                    <p>
                        Add adventure to you life by joining the{" "}
                        <Link to="/" className="mr-2">
                            #vanlife
                        </Link>
                        movemement
                    </p>
                    <p>Rent the perfect van to make your perfect road trip.</p>
                </p>

                <Link
                    to="/vans"
                    className="text-white font-bold flex items-center justify-center h-10 rounded-md bg-orange-400"
                >
                    Find your van
                </Link>
            </div>
        </div>
    );
};

export default Hero;
