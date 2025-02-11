import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import GoogleLogin from "../components/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signUp(email, password, name, photoURL);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const checkPasswordStrength = (password) => {
    const length = password.length;
    if (length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      setPasswordStrength("strong");
    } else if (length >= 6) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword) {
      checkPasswordStrength(newPassword);
    } else {
      setPasswordStrength("weak");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="dark:bg-[#0B0716]">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row min-h-screen ">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col justify-center items-start p-6 md:p-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-purple-500">
          Create An Account
        </h1>
        <p className="text-lg text-green-500 dark:text-white">
          Join us to start your journey of learning languages and connecting
          with others.
        </p>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--new-user-registering-log-register-form-maggy-pack-design-development-illustrations-4097209.png?f=webp"
          alt="Sign Up Illustration"
          className="mt-6 max-w-full rounded-lg shadow-lg dark:shadow-white"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex-1 flex justify-center items-center p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Sign Up
          </h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 w-full rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 w-full rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={`border p-3 w-full rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ${passwordStrength === "weak" ? "" : passwordStrength === "medium" ? "border-yellow-500" : "border-green-500"}`}
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-gray-300"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {password && (
            <div
              className={`text-sm ${
                passwordStrength === "weak"
                  ? "text-red-500"
                  : passwordStrength === "medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {passwordStrength === "weak"
                ? "Weak password"
                : passwordStrength === "medium"
                ? "Medium strength password"
                : "Strong password"}
            </div>
          )}
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="border p-3 w-full rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg w-full hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Sign Up
          </button>
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-500 hover:underline font-semibold"
            >
              Login →
            </Link>
          </p>
          <GoogleLogin />
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
