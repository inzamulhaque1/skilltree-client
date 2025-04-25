import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import GoogleLogin from "../components/GoogleLogin";
import axios from "axios";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signIn(email, password);
      const user = { email: email };

      axios
        .post("https://assignment11-server-lime.vercel.app/jwt", user)
        .then((res) => {
          console.log(res.data);
        });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0B0716] ">
      <div className="w-11/12 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between transition-colors duration-300">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-start space-y-8 p-6 md:p-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome To <span className="text-green-500">SkillTree</span>.
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here you can learn multiple languages and grow your skills.
        </p>
        <Link
          to="/sign-up"
          className="text-green-500 hover:underline font-semibold dark:text-green-400"
        >
          Don’t have an account? Create account →
        </Link>
        <motion.img
          whileHover={{ scale: 1.02 }}
          className="w-full rounded-3xl shadow-lg"
          src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2016/04/World_04.jpg?strip=none&ssl=1"
          alt="SkillTree"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center p-6 md:p-12"
      >
        <div
          className="p-10 shadow-lg rounded-3xl w-full max-w-md bg-white dark:bg-[#1E1A2F] transition-colors duration-300"
          style={{
            backgroundImage:
              "url('https://marketplace.canva.com/EAGKVeRrXhA/1/0/1600w/canva-blue-and-white-modern-bordered-background-instagram-post-XBgvDbZ9xfU.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-black">
              Login to your account
            </h1>
            {error && (
              <p className="text-red-500 text-center dark:text-red-400">{error}</p>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-[#0B0716] dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-[#0B0716] dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Login
            </motion.button>
            <p className="text-center">
              <Link
                to="/sign-up"
                className="text-purple-500 hover:underline font-semibold dark:text-purple-400"
              >
                Don’t have an account? Create account →
              </Link>
            </p>
            <div className="text-center text-gray-500 dark:text-gray-400">or</div>
            <GoogleLogin />
          </form>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default Login;