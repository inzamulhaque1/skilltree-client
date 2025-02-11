import { useLoaderData } from "react-router-dom";
import TutorialCard from "../components/TutorialCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaCode } from "react-icons/fa"; // Importing React Icons
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const FindTutors = () => {
  const tutorials = useLoaderData();
  const location = useLocation();

  // Get the 'language' query parameter
  const searchParams = new URLSearchParams(location.search);
  const selectedLanguage = searchParams.get("language");

  // State to handle language search
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tutorials by the selected language (from the query) and the search term
  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSelectedLanguage = selectedLanguage
      ? tutorial.language === selectedLanguage
      : true;
    const matchesSearchTerm = searchTerm
      ? tutorial.language.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesSelectedLanguage && matchesSearchTerm;
  });

  return (
    <div className="bg-white dark:bg-[#0B0716]   min-h-screen py-12">
      <div className="relative w-11/12 lg:w-9/12 mx-auto">
        {/* Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl  lg:text-5xl font-bold text-green-600 dark:text-white mb-4 flex items-center justify-center gap-2">
            <FaCode className="text-purple-500" />
            Find Your Perfect Tutor
          </h1>
          <p className="text-lg roboto dark:text-gray-300 text-purple-600">
            Discover expert tutors in your desired programming language and take
            your skills to the next level.
          </p>
        </motion.div>

        {/* Language Search Input */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col roboto lg:flex-row justify-between items-center mb-8 gap-4"
        >
          <div>
            <p className="text-center roboto text-lg text-purple-500 dark:text-gray-300">
              {selectedLanguage
                ? `Showing results for language: ${selectedLanguage}`
                : "Showing all tutors"}
            </p>
          </div>
          <div className="relative  roboto w-full lg:w-1/4">
            <input
              type="text"
              placeholder="Search by language"
              className="w-full p-4 pl-12 pr-4 bg-green-50 border border-green-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search Icon */}
            <FaSearch
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </motion.div>

        {/* Tutorial Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTutorials.map((tutorial) => (
            <motion.div
              key={tutorial._id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <TutorialCard tutorial={tutorial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FindTutors;