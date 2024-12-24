import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLanguage, FaArrowRight } from "react-icons/fa";  // Import React Icons

const LanguageCategory = () => {
  const [languages, setLanguages] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/tutorial")
      .then((response) => response.json())
      .then((data) => {
        // Extract unique languages
        const uniqueLanguages = [
          ...new Set(data.map((tutorial) => tutorial.language)),
        ];
        setLanguages(uniqueLanguages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 w-8/12 mx-auto">
      <h2 className="text-xl font-bold mb-4">Language Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <Link
            key={index}
            to={`/find-tutors?language=${encodeURIComponent(language)}`}
          >
            <div className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer flex items-center justify-between">
              {/* Language Icon (Logo) */}
              <div className="flex items-center space-x-2">
                <FaLanguage className="text-2xl text-purple-600" />
                <p className="text-sm text-gray-600">Language: {language}</p>
              </div>
              {/* Right Arrow Icon */}
              <FaArrowRight className="text-gray-500 text-lg" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategory;
