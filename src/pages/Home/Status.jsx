import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.init";
import { FaUserAlt, FaLanguage, FaStar, FaUsers } from "react-icons/fa"; // Import React Icons

const Status = () => {
  const tutorials = useLoaderData();
  const [userCount, setUserCount] = useState(0);

  // Fetch the user count from Firestore
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, "users"));

        if (usersSnapshot.empty) {
          console.log("No users found.");
        } else {
          const users = usersSnapshot.docs.map((doc) => doc.data());

          setUserCount(users.length);
        }
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  // Calculate the sum of all reviews
  const totalReviews = tutorials.reduce(
    (sum, tutorial) => sum + (tutorial.reviewCount || 0),
    0
  );

  // Get unique languages
  const uniqueLanguages = new Set(
    tutorials.map((tutorial) => tutorial.language)
  );
  const languageCount = uniqueLanguages.size;

  return (
<div className="dark:bg-purple-950">
  <div className="p-6 sm:p-10 max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-5xl font-extrabold text-center dark:text-white text-purple-500 mb-8 sm:mb-12">
      Our Incredible Statistics
    </h2>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* All Tutors */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex items-center gap-4 sm:gap-8">
        <div className="bg-blue-100 p-3 sm:p-4 rounded-full shadow-md">
          <FaUserAlt className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
        </div>
        <div className="text-start">
          <p className="text-2xl sm:text-4xl font-bold text-gray-800">
            {tutorials.length}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
            All Tutors
          </h3>
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex items-center gap-4 sm:gap-8">
        <div className="bg-blue-100 p-3 sm:p-4 rounded-full shadow-md">
          <FaLanguage className="h-8 w-8 sm:h-12 sm:w-12 text-green-600" />
        </div>
        <div className="text-start">
          <p className="text-2xl sm:text-4xl font-bold text-gray-800">
            {languageCount}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
            Languages
          </h3>
        </div>
      </div>

      {/* Total Reviews */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex items-center gap-4 sm:gap-8">
        <div className="bg-blue-100 p-3 sm:p-4 rounded-full shadow-md">
          <FaStar className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-600" />
        </div>
        <div className="text-start">
          <p className="text-2xl sm:text-4xl font-bold text-gray-800">
            {totalReviews}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
            Total Reviews
          </h3>
        </div>
      </div>

      {/* Total Users */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex items-center gap-4 sm:gap-8">
        <div className="bg-blue-100 p-3 sm:p-4 rounded-full shadow-md">
          <FaUsers className="h-8 w-8 sm:h-12 sm:w-12 text-purple-600" />
        </div>
        <div className="text-start">
          <p className="text-2xl sm:text-4xl font-bold text-gray-800">
            {userCount}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
            Total Users
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Status;
