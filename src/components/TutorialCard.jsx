import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TutorialCard = ({ tutorial }) => {
  const { _id, name, image, language, review, description } = tutorial;

  return (
    <div className="mx-auto p-4 bg-purple-200 shadow-lg rounded-lg mt-20 relative flex flex-col justify-between">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Content */}
      <div className="mt-10 w-72 text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">{language}</p>
        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-sm text-gray-600">{review} reviews</span>
        </div>
        <p className="text-gray-700 text-sm mt-3">{description}</p>
      </div>

      <div className="mt-2">
        {/* Fixed the path here */}
        <Link to={`/tutor/${_id}`}>
          <button className="bg-purple-500 w-full text-white px-4 py-2 rounded shadow hover:bg-blue-600">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorialCard;
