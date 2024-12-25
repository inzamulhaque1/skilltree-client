import { useLoaderData } from "react-router-dom";
import TutorialCard from "../components/TutorialCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing React Icon for search

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
    <div className="dark:bg-purple-800 dark:text-white ">
      <div className="relative w-9/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Find Tutors</h2>

        {/* Language Search Input */}
        <div className="flex justify-between mb-8">
          <div>
            <p className="text-center text-lg mb-4">
              {selectedLanguage
                ? `Showing results for language: ${selectedLanguage}`
                : "Showing all tutors"}
            </p>
          </div>
          <div className="relative w-1/4">
            <input
              type="text"
              placeholder="Search by language"
              className="w-full  p-4 pl-10 pr-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search Icon */}
            <FaSearch
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial._id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
