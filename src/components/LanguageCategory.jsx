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
    <div className="bg-gray-50 dark:bg-[#0B0716] roboto py-10 md:py-24">
      <div className="w-11/12 lg:w-8/12 mx-auto">
        {/* Page Heading */}
        <h2 className="text-3xl font-bold font-josefin text-green-500 dark:text-white text-center mb-2">
          Explore Language Categories
        </h2>
        <p className="text-purple-600 libre dark:text-gray-300 text-center font-roboto mb-8">
          Discover tutorials by language and start your learning journey today.
        </p>

        {/* Language Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.length > 0 ? (
            languages.map((language, index) => (
              <Link
                key={index}
                to={`/find-tutors?language=${encodeURIComponent(language)}`}
              >
                <div className="border bg-purple-600 hover:bg-green-500  p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-between dark:border-yellow-200 dark:bg-white">
                  {/* Language Icon and Name */}
                  <div className="flex items-center space-x-3">
                    <FaLanguage className="text-3xl text-white dark:text-purple-500" />
                    <p className="text-lg font-libre text-white dark:text-purple-500">
                      {language}
                    </p>
                  </div>

                  {/* Right Arrow Icon */}
                  <FaArrowRight className="text-white dark:text-purple-500" />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
              No language categories available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageCategory;