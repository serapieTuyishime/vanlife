const Button = ({ text }) => {
    return (
        <label className="text-white font-bold flex items-center justify-center h-10 rounded-md bg-orange-400">
            {text}
        </label>
    );
};

export default Button;
