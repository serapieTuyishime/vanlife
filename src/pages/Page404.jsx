import { useRouteError } from "react-router-dom";

const Page404 = () => {
    const errorElement = useRouteError();
    return (
        <div className="h-full w-full bg-red-50 grid place-items-center text-4xl font-bold">
            Page not found and this error showed up {errorElement}
        </div>
    );
};

export default Page404;
