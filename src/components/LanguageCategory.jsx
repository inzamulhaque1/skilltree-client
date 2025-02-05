import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLanguage, FaArrowRight } from "react-icons/fa"; // Import React Icons

const LanguageCategory = () => {
  const [languages, setLanguages] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("https://assignment11-server-lime.vercel.app/tutorial")
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
    <div className="dark:bg-purple-950">
      <div className="p-4 w-8/12 mx-auto">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Language Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <Link
            key={index}
            to={`/find-tutors?language=${encodeURIComponent(language)}`}
          >
            <div className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer flex items-center justify-between dark:border-gray-700 dark:bg-purple-900 dark:text-white">
              {/* Language Icon (Logo) */}
              <div className="flex items-center space-x-2">
                <FaLanguage className="text-2xl text-purple-600 dark:text-purple-400" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Language: {language}
                </p>
              </div>
              {/* Right Arrow Icon */}
              <FaArrowRight className="text-gray-500 text-lg dark:text-gray-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LanguageCategory;
