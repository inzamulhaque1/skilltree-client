import bannerLight from "../../assets/images/heroBg1.png";
import bannerDark from "../../assets/images/heroBg2.webp";
import hero1 from "../../assets/images/banner5.png";
import { motion } from "motion/react";
import { easeOut } from "motion";

// eslint-disable-next-line react/prop-types
const Banner = ({ theme }) => {
  const backgroundImage = theme === "dark" ? bannerLight : bannerDark;

  return (
    <div
      className="relative bg-cover bg-center min-h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative min-h-screen  flex items-center dark:text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Left Section */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0 }}
            className="w-full lg:w-1/2 text-center lg:text-left p-4"
          >
            <motion.h1
              animate={{ x: [0, 50, 0], color: [""] }}
              transition={{
                duration: 7,
                delay: 0,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-3xl font-josefin text-purple-500 md:text-5xl font-bold mb-4 dark:text-white"
            >
              Never Stop
              <motion.span
                animate={{
                  color: [
                    "#ff4d27",
                    "#ddf10f",
                    "#0f4df1",
                    "#a950f0",
                    "#1cf02f",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {" "}
                Learning{" "}
              </motion.span>{" "}
              <br /> Life Never Stop Teaching
            </motion.h1>
            <p className="text-sm md:text-lg  mb-6 roboto">
              Welcome to skillTree website, here you can learn multiple
              languages and gain more knowledge about your abilites.
            </p>
            <button className="relative px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 group-hover:m-1 group-hover:rounded-md group-hover:duration-300"></span>
              <span className="relative roboto z-10">Get Started</span>
            </button>
          </motion.div>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center p-10">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0 }}
              src={hero1}
              alt="Decorative"
              className="rounded-b-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
