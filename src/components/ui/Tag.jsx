const Tag = ({ text, color = "", active = false }) => {
    return (
        <label
            className={`max-w-max flex items-center border bg-gray-200 px-2  py-1 rounded-md ${
                active ? "border border-red-400" : ""
            }`}
        >
            {text}
        </label>
    );
};

export default Tag;
