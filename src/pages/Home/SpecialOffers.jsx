import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGift, FaClock, FaGraduationCap } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAuth } from "../../providers/AuthProvider";


const SpecialOffers = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Initialize countdown timer (3 days, 8 hours, 45 minutes from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes } = prev;

        if (minutes > 0) {
          minutes -= 1;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
        } else {
          // Timer expired
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0 };
        }

        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const offers = [
    {
      id: "new-student",
      title: "New Student Special",
      icon: <FaGraduationCap className="text-2xl" />,
      discount: "50% OFF",
      description: "first month",
      details: "Perfect for beginners! Get started with any language course at half the regular price.",
      promoCode: "NEW50",
      checkoutLink: "/checkout/new-student",
    },
    {
      id: "bundle-save",
      title: "Bundle & Save",
      icon: <FaGift className="text-2xl" />,
      discount: "30% OFF",
      description: "any 3 courses",
      details: "Learn multiple languages at once with our special bundle discount for dedicated learners.",
      promoCode: "BUNDLE30",
      checkoutLink: "/checkout/bundle-save",
    },
    {
      id: "annual-subscription",
      title: "Annual Subscription",
      icon: <FaGraduationCap className="text-2xl" />,
      discount: "40% OFF",
      description: "yearly plan",
      details: "Commit to your language goals and save big with our annual subscription discount.",
      promoCode: "ANNUAL40",
      checkoutLink: "/checkout/annual-subscription",
    },
  ];

  const handleClaimOffer = async (offer) => {
    if (!user) {
      Swal.fire({
        title: "Please Log In",
        text: "You need to be logged in to claim this offer.",
        icon: "warning",
        confirmButtonText: "Log In",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    try {
      const response = await fetch(
        "https://assignment11-server-lime.vercel.app/offers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userEmail: user.email,
            offerId: offer.id,
            promoCode: offer.promoCode,
          }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: `Offer ${offer.title} claimed! Use promo code ${offer.promoCode} at checkout.`,
          icon: "success",
          confirmButtonColor: "#22c55e", // green-500
        });
        navigate(offer.checkoutLink);
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error!",
          text: errorData.message || "Failed to claim offer.",
          icon: "error",
          confirmButtonColor: "#22c55e",
        });
      }
    } catch (error) {
      console.error("Claim offer error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while claiming the offer.",
        icon: "error",
        confirmButtonColor: "#22c55e",
      });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-[#0B0716] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Limited Time Offers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take advantage of these exclusive deals to accelerate your language learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-purple-500 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">{offer.title}</h3>
                {offer.icon}
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {offer.discount}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    {offer.description}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {offer.details}
                </p>
                <div className="flex items-center text-purple-500 mb-6">
                  <FaClock className="mr-2" />
                  <span>
                    Offer ends in: {timeLeft.days}d {timeLeft.hours}h{" "}
                    {timeLeft.minutes}m
                  </span>
                </div>
                <button
                  onClick={() => handleClaimOffer(offer)}
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition duration-300"
                >
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Use promo code{" "}
            <span className="font-bold text-purple-500">LEARNNOW</span> at
            checkout
          </p>
          <Link
            to="/offers"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Special Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;