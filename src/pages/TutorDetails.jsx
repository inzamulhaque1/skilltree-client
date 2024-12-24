import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";
import { useEffect, useState } from "react";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, image, language, reviewCount, description, price, email } = tutor;

  const { user } = useAuth();
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const [updatedReviewCount, setUpdatedReviewCount] = useState(reviewCount || 0);
  // const [updatedReviewCount, setUpdatedReviewCount] = useState(Number(reviewCount)); 

  // Check booking status when component mounts or user email changes
  useEffect(() => {
    const checkBookingStatus = async () => {
      if (user?.email) {
        try {
          const response = await fetch(
            `http://localhost:5000/bookings/check?tutorId=${_id}&userEmail=${user.email}`
          );
          const result = await response.json();
          if (response.ok) {
            setAlreadyBooked(result.alreadyBooked);
          } else {
            console.error(result.message || "Failed to check booking status.");
          }
        } catch (error) {
          console.error("Error checking booking status:", error);
        }
      }
    };

    checkBookingStatus();
  }, [_id, user?.email]);

  // Handle booking the tutor
  const handleBook = async () => {
    const userEmail = user?.email;

    if (!userEmail) {
      toast.error("You must be logged in to book a tutor.");
      return;
    }

    const bookingDetails = {
      tutorId: _id,
      name,
      image,
      language,
      price,
      email,
      userEmail,
      quantity: 1,
    };

    try {
      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Tutor booked successfully!");
        setAlreadyBooked(true); // Update state after successful booking
      } else {
        toast.error(result.message || "Failed to book tutor.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  // Handle review submission
  const handleReviewButtonClick = async () => {
    if (!user?.email) {
        toast.error("You must be logged in to leave a review.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/tutorial/${_id}/review`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: user.email,
                rating: 5,  // Example rating
                comment: "Great tutor!",  // Example comment
            }),
        });

        const result = await response.json();

        if (response.ok) {
            toast.success("Review submitted successfully!");
            setUpdatedReviewCount(prevCount => prevCount + 1); // Increment review count on the UI
        } else {
            toast.error(result.message || "Failed to submit review.");
        }
    } catch (error) {
        toast.error("Something went wrong while submitting your review.");
        console.error(error);
    }
};

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center bg-purple-100 p-6 rounded shadow-lg relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-orange-500 text-white py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:bg-orange-600"
        >
          <FaArrowLeft className="text-sm" />
          Back
        </button>

        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded-full border-4 border-white shadow-md mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-2">Language: {language}</p>
        <p className="text-yellow-500 text-lg mb-4">★ {updatedReviewCount} reviews</p>

        <p className="text-gray-700 text-base text-center">{description}</p>

        <p className="text-lg font-bold text-green-600 mt-4">Price: ${price}</p>

        {alreadyBooked ? (
          <p className="mt-6 text-lg text-red-500 font-bold">
            You have already booked this tutor.
          </p>
        ) : (
          <button
            onClick={handleBook}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600"
          >
            Book
          </button>
        )}

        <div className="mt-6">
          <button
            onClick={handleReviewButtonClick}
            className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600"
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
