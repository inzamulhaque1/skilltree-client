import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../providers/AuthProvider";
import { FaStar, FaTrash, FaUserCircle } from "react-icons/fa"; // Import React icons
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth(); // Get the logged-in user from context

  // Fetch all bookings on component mount
  useEffect(() => {
    fetch("https://assignment11-server-lime.vercel.app/book")
      .then((response) => response.json())
      .then((data) => {
        // Initialize review count to 0 if it doesn't exist
        const userBookings = data.map((booking) => ({
          ...booking,
          review: booking.review || 0, // Ensure review is initialized to 0 if undefined
        }));
        // Filter bookings to show only those belonging to the logged-in user
        const filteredBookings = userBookings.filter(
          (booking) => booking.userEmail === user?.email
        );
        setBookings(filteredBookings);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, [user?.email]); // Re-fetch when the user email changes

  if (loading) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-300">
        Loading bookings...
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center min-h-[calc(100vh-380px)] text-gray-500 dark:text-gray-300">
        No bookings found.
      </div>
    );
  }

  // Handle delete booking
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment11-server-lime.vercel.app/book/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setBookings((prevBookings) =>
                prevBookings.filter((booking) => booking._id !== id)
              );
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => console.error("Error deleting booking:", error));
      }
    });
  };

  // Handle review click
  const handleReview = (id) => {
    const updatedBookings = bookings.map((booking) => {
      if (booking._id === id) {
        const newReviewCount = booking.review + 1; // Increase review count
        return { ...booking, review: newReviewCount }; // Update the booking with the new review count
      }
      return booking;
    });

    // Update the local state with the new review count
    setBookings(updatedBookings);

    // Send the updated review count to the backend
    fetch(`https://assignment11-server-lime.vercel.app/book/${id}`, {
      method: "PATCH", // Use PATCH to update the review count
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: updatedBookings.find((booking) => booking._id === id).review,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Review added!", "success");
        } else {
          Swal.fire("Error", "Failed to update review", "error");
        }
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  return (
    <div className="bg-gray-100 dark:bg-[#0B0716] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Bookings
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Manage your booked tutorials and leave reviews for your tutors.
          </p>
        </motion.div>

        {/* Bookings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {bookings.map((booking) => (
            <motion.div
              key={booking._id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#1E1A2F] rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300"
            >
              {/* Tutor Image */}
              <div className="relative h-48">
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">
                    {booking.name}
                  </h3>
                  <p className="text-gray-200">{booking.language}</p>
                </div>
              </div>

              {/* Booking Details */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <FaUserCircle className="w-6 h-6 text-purple-500" />
                  <p className="text-gray-700 dark:text-gray-300">
                    User:{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      {booking.userEmail}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <FaUserCircle className="w-6 h-6 text-purple-500" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Tutor:{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      {booking.email}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <FaStar className="w-6 h-6 text-yellow-500" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Reviews: {booking.review}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Price: ${booking.price}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => handleReview(booking._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  >
                    <FaStar /> Review
                  </button>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;