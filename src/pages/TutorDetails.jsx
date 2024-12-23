import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, image, language, review, description, price, email } = tutor;

  const { user } = useAuth();

  const handleBook = async () => {
    const userEmail = user.email;

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
        } else {
            toast.error(result.message || "Failed to book tutor.");
        }
    } catch (error) {
        toast.error("Something went wrong. Please try again.");
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
        <p className="text-yellow-500 text-lg mb-4">★ {review} reviews</p>

        <p className="text-gray-700 text-base text-center">{description}</p>

        <p className="text-lg font-bold text-green-600 mt-4">Price: ${price}</p>

        <button
          onClick={handleBook}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
