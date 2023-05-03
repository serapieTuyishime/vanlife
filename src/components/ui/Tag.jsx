const Tag = ({ text, color = "" }) => {
    return (
        <label className="max-w-max flex items-center border bg-gray-200 px-2 py-1 rounded-md">
            {text}
        </label>
    );
};

export default Tag;
