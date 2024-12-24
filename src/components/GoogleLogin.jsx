import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Import Google icon

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await googleSignIn();
      console.log("Logged in user:", user);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Google login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-3 bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        <FcGoogle size={24} /> {/* Google icon */}
        <span className="font-semibold text-lg">Login with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
