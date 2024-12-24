import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../providers/AuthProvider";
import { FaStar } from "react-icons/fa"; // Import React icon for the review button

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth(); // Get the logged-in user from context

  // Fetch all bookings on component mount
  useEffect(() => {
    fetch("http://localhost:5000/book")
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
    return <div className="text-center text-gray-500">Loading bookings...</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-center text-gray-500">No bookings found.</div>;
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
        fetch(`http://localhost:5000/book/${id}`, {
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
    fetch(`http://localhost:5000/book/${id}`, {
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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Bookings</h1>
      <div>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col bg-white p-4 mb-4 shadow-md rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={booking.image}
                alt={booking.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{booking.name}</h3>
                <p>Language: {booking.language}</p>
                <p>Price: {booking.price}</p>
                <p>
                  User Email:{" "}
                  <span className="text-blue-600">{booking.userEmail}</span>
                </p>
                <p>
                  Tutor Email:{" "}
                  <span className="text-blue-600">{booking.email}</span>
                </p>
                <p>Reviews: {booking.review}</p>{" "}
                {/* Display the review count */}
              </div>
            </div>

            {/* Review Button */}
            <button
              onClick={() => handleReview(booking._id)}
              className="mt-4 bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600 self-end flex items-center gap-2"
            >
              <FaStar className="text-white" /> Review
            </button>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(booking._id)}
              className="mt-4 bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 self-end"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
