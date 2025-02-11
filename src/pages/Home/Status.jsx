/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.init";
import { FaUserAlt, FaLanguage, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

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

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="dark:bg-[#0B0716] bg-gray-50 py-12 md:py-24">
      <div className="p-6 sm:p-10 max-w-7xl mx-auto">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl libre font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-pink-50 dark:to-white"
          >
            Our Incredible Statistics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base  roboto sm:text-xl text-gray-600 dark:text-white"
          >
           
            Discover the impact we've made through our platform.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* All Tutors */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border hover:border-blue-600 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl  transition-shadow duration-300 flex items-center gap-4 sm:gap-8"
          >
            <div className="bg-blue-100 dark:bg-blue-900 p-3 sm:p-4 rounded-full shadow-md">
              <FaUserAlt className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="text-start">
              <p className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">
                {tutorials.length}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-300">
                All Tutors
              </h3>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border hover:border-green-600 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 sm:gap-8"
          >
            <div className="bg-green-100 dark:bg-green-900 p-3 sm:p-4 rounded-full shadow-md">
              <FaLanguage className="h-8 w-8 sm:h-12 sm:w-12 text-green-600 dark:text-green-300" />
            </div>
            <div className="text-start">
              <p className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">
                {languageCount}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-300">
                Languages
              </h3>
            </div>
          </motion.div>

          {/* Total Reviews */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white border hover:border-yellow-600 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 sm:gap-8"
          >
            <div className="bg-yellow-100 dark:bg-yellow-900 p-3 sm:p-4 rounded-full shadow-md">
              <FaStar className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-600 dark:text-yellow-300" />
            </div>
            <div className="text-start">
              <p className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">
                {totalReviews}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-300">
                Total Reviews
              </h3>
            </div>
          </motion.div>

          {/* Total Users */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white border hover:border-purple-600 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 sm:gap-8"
          >
            <div className="bg-purple-100 dark:bg-purple-900 p-3 sm:p-4 rounded-full shadow-md">
              <FaUsers className="h-8 w-8 sm:h-12 sm:w-12 text-purple-600 dark:text-purple-300" />
            </div>
            <div className="text-start">
              <p className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">
                {userCount}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-300">
                Total Users
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Status;