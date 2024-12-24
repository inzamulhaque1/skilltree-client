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
        console.log("Users Snapshot:", usersSnapshot);

        if (usersSnapshot.empty) {
          console.log("No users found.");
        } else {
          const users = usersSnapshot.docs.map((doc) => doc.data());
          console.log("Users:", users);
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
    <div className="p-10 max-w-7xl mx-auto">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        Our Incredible Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* All Tutors */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex items-center justify-start gap-8">
          <div className="bg-blue-100 p-4 rounded-full shadow-md">
            <FaUserAlt className="h-12 w-12 text-blue-600" />
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">{tutorials.length}</p>
            <h3 className="text-xl font-semibold text-blue-600">All Tutors</h3>
          </div>
        </div>
        {/*Languages */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex items-center justify-start gap-8">
          <div className="bg-blue-100 p-4 rounded-full shadow-md">
          <FaLanguage className="h-12 w-12 text-green-600" />
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">{languageCount}</p>
            <h3 className="text-xl font-semibold text-blue-600">Languages</h3>
          </div>
        </div>
        
        {/* Total Reviews  */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex items-center justify-start gap-8">
          <div className="bg-blue-100 p-4 rounded-full shadow-md">
          <FaStar className="h-12 w-12 text-yellow-600" />
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">{totalReviews}</p>
            <h3 className="text-xl font-semibold text-blue-600">Total Reviews</h3>
          </div>
        </div>
        {/* Total Users */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex items-center justify-start gap-8">
          <div className="bg-blue-100 p-4 rounded-full shadow-md">
          <FaUsers className="h-12 w-12 text-purple-600" />
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">{userCount}</p>
            <h3 className="text-xl font-semibold text-blue-600">Total Users</h3>
          </div>
        </div>

        

        

        

      </div>
    </div>
  );
};

export default Status;
