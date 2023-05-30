import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../components/Button";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}
export default function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const message = useLoaderData() || "";

    return (
        <div className="w-96 mx-auto grid gap-3 text-center">
            <h1 className="text-3xl font-bold ">Log in to your account</h1>
            {message && (
                <label className="text-red-400 w-full font-bold text-lg">
                    {message}
                </label>
            )}
            <form onSubmit={handleSubmit} className="grid w-full mx-auto gap-4">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    className="block py-3 px-4 border border-lime-400 rounded-md"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    className="block py-3 px-4 border border-lime-400 rounded-md"
                />
                <Button text="Login" />
            </form>
        </div>
    );
}
