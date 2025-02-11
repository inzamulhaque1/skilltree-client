import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      photo: "https://avatars.preply.com/i/logos/i/logos/avatar_pxk41q1fih.jpg",
      name: "John Doe",
      feedback:
        "This platform has transformed the way I learn languages. Highly recommend!",
    },
    {
      photo:
        "https://avatars.preply.com/i/logos/i/logos/avatar_g3tv34b19wq.jpg",
      name: "Jane Smith",
      feedback: "I found the best tutors here. A great resource for learners!",
    },
    {
      photo:
        "https://avatars.preply.com/i/logos/i/logos/avatar_cnbt7kqyj8r.jpg",
      name: "Carlos Rivera",
      feedback:
        "Fantastic experience! The tutors are very professional and helpful.",
    },
    {
      photo:
        "https://avatars.preply.com/i/logos/i/logos/avatar_2ltkp6vfbsc.jpg",
      name: "Li Wei",
      feedback:
        "The interface is user-friendly, and the learning experience is seamless.",
    },
    {
      photo:
        "https://avatars.preply.com/i/logos/i/logos/avatar_c33h4srvm39.jpg",
      name: "Emily Johnson",
      feedback:
        "Learning a new language was so much easier with the tutors on this platform.",
    },
    {
      photo:
        "https://avatars.preply.com/i/logos/i/logos/921558.bc1413cd04.jpeg",
      name: "Ahmed Hassan",
      feedback:
        "The resources here are top-notch, and I love the personalized attention.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="dark:bg-[#0B0716] bg-gray-50 roboto py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-700 dark:text-white mb-4"
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-purple-600 dark:text-gray-300 mb-12"
        >
          Discover how our platform has made a difference in the lives of language
          learners worldwide.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  "
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-[#1C1B23]  rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col  items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500 dark:border-purple-500"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {testimonial.feedback}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;