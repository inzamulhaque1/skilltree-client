import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-gray-300 dark:bg-gray-800 dark:text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-white mb-4">
            <span className="">Skill</span>Tree
          </h1>
          <p className="mb-4 text-gray-400">
            Learn. Grow. Achieve. Join our community of learners today.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaFacebook className="text-white" size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <FaTwitter className="text-white" size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram className="text-white" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition duration-300"
            >
              <FaLinkedin className="text-white" size={20} />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <form className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full  text-white rounded-lg py-3 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-3 px-4 hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2024 SkillTree. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
