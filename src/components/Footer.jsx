import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white dark:bg-[#0B0716] dark:text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col space-y-6">
          <motion.h1
            className="text-4xl font-extrabold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skill<span className="text-[#FFD700]">Tree</span>
          </motion.h1>
          <p className="text-lg max-w-sm">
            Empower yourself with knowledge and skills. Join our learning community today.
          </p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition duration-300"
              whileHover={{ rotate: 15 }}
            >
              <FaFacebook className="text-white" size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition duration-300"
              whileHover={{ rotate: 15 }}
            >
              <FaTwitter className="text-white" size={24} />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-4 rounded-full hover:bg-pink-600 transition duration-300"
              whileHover={{ rotate: 15 }}
            >
              <FaInstagram className="text-white" size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-4 rounded-full hover:bg-blue-900 transition duration-300"
              whileHover={{ rotate: 15 }}
            >
              <FaLinkedin className="text-white" size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <form className="w-full flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white text-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-700 placeholder-gray-500"
            />
            <motion.button
              type="submit"
              className="bg-[#FFD700] text-purple-900 rounded-lg py-3 px-4 hover:bg-yellow-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-16 border-t border-gray-300 pt-6 text-center text-sm">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © 2025 SkillTree. Empowering Learning. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
