import { useOutletContext } from "react-router-dom";

const Photos = () => {
    const { vanDetails: vanPhotos } = useOutletContext();
    return (
        <div>
            <img
                src={vanPhotos.imageUrl}
                alt={vanPhotos.name}
                className="h-48 w-72"
            />
        </div>
    );
};

export default Photos;
