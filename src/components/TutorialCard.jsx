import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa"; // Importing React Icons
import { motion } from "framer-motion"; // Importing Framer Motion for animations

/* eslint-disable react/prop-types */
const TutorialCard = ({ tutorial }) => {
  const { _id, name, image, language, reviewCount, description } = tutorial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="mx-auto p-6 roboto bg-white dark:bg-gray-800 border hover:border-2 hover:border-purple-500 shadow-2xl rounded-2xl mt-20 relative flex flex-col justify-between hover:shadow-3xl transition-all duration-300"
    >
      {/* Tutor Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <motion.img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="mt-14 w-72 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-purple-600 dark:text-purple-300 text-sm mt-1 font-medium">{language}</p>
        <div className="flex justify-center items-center gap-1 mt-2">
          <FaStar className="text-yellow-500 text-lg" />
          <span className="text-sm text-gray-600 dark:text-green-300">
            {reviewCount} reviews
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-3 leading-relaxed dark:text-white">
          {description}
        </p>
      </div>

      {/* Details Button */}
      <div className="mt-6">
        <Link to={`/tutor/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 w-full text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Details</span>
            <FaArrowRight className="text-sm" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TutorialCard;