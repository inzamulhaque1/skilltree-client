import bannerLight from "../../assets/images/heroBg1.png";
import bannerDark from "../../assets/images/heroBg2.webp";
import hero1 from "../../assets/images/banner5.png";
import { motion } from "motion/react"
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
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}  transition={{ duration: 1.2, delay: 0, }} className="w-full lg:w-1/2 text-center lg:text-left p-4">
            <motion.h1 animate={{ x: [0, 50, 0] , color: ["brown"] }}
            transition={{
              duration: 7,
              delay: 0,
              ease: easeOut,
              repeat: Infinity,
            }} className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
              Never Stop<motion.span  animate={{ color: ["#ff4d27", "#ddf10f" , "#0f4df1" , "#a950f0" , "#1cf02f"] }} transition={{duration: 4, repeat: Infinity }}> Learning </motion.span> <br /> Life Never Stop Teaching
            </motion.h1>
            <p className="text-sm md:text-lg  mb-6">
              This is a placeholder for a promotional message, tagline, or a brief description of your product or service.
            </p>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
              Get Started
            </button>
          </motion.div>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center p-10">

            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }}  transition={{ duration: 1.2, delay: 0, }}
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
