const Tag = ({ text, color }) => {
    return (
        <label className="max-w-max flex items-center text-white rounded-md">
            {text}- {color}
        </label>
    );
};

export default Tag;
