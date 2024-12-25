import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import GoogleLogin from "../components/GoogleLogin";
import axios from "axios";

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
      const user = {email: email}

      axios.post('http://localhost:5000/jwt' , user)
      .then(res =>{
        console.log(res.data);
      })


      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-9/12 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between ">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-8">
        <h1 className="text-4xl font-bold">
          Welcome To <span className="text-green-500">SkillTree</span>.
        </h1>
        <p className="text-gray-600">Here you can learn multiple Languages</p>
        <Link
          to="/sign-up"
          className="text-green-500 hover:underline font-semibold"
        >
          Don’t have an account? Create account →
        </Link>
        <img className="w-full rounded-3xl"
          src="https://e0.pxfuel.com/wallpapers/348/445/desktop-wallpaper-the-breakfast-club-and-mobile-background-iphone-6.jpg"
          alt=""
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center bg-cover bg-center relative">
        <div
          className=" p-10 shadow-lg rounded-3xl w-full max-w-md"
          style={{
            backgroundImage:
              "url('https://marketplace.canva.com/EAGKVeRrXhA/1/0/1600w/canva-blue-and-white-modern-bordered-background-instagram-post-XBgvDbZ9xfU.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-2xl font-bold text-center">
              Login to your account
            </h1>
            {error && <p className="text-red-500 text-center">{}</p>}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
            <p className="">
              <Link
                to="/sign-up"
                className="text-purple-500 hover:underline font-semibold"
              >
                Don’t have an account? Create account →
              </Link>
            </p>
            <div className="text-center text-gray-500">or</div>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
