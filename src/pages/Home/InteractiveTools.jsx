
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  GamepadIcon, 
  BrainCircuit, 
  Sparkles, 
  GraduationCap,
  Languages
} from 'lucide-react';

const InteractiveTools = () => {
  const tools = [
    {
      title: "Language Quiz",
      description: "Test your knowledge with interactive quizzes",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      link: "https://englishtest.duolingo.com/",
      stats: "1000+ Questions"
    },
    {
      title: "Smart Flashcards",
      description: "Master vocabulary with spaced repetition",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      link: "/",
      stats: "5000+ Cards"
    },
    {
      title: "Language Games",
      description: "Learn while having fun with interactive games",
      icon: <GamepadIcon className="w-8 h-8" />,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      link: "/",
      stats: "50+ Games"
    }
  ];

  return (
    <section className="relative roboto dark:bg-[#0B0716] bg-gray-50  py-20 overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 opacity-10"
      >
        <Languages className="w-48 h-48" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-12 h-12 text-blue-500 dark:text-blue-400" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Supercharge Your Learning Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Unlock your potential with our interactive learning tools designed to make language acquisition fun and effective
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl  mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <a
                href={tool.link}
                className="block h-full"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border hover:border-lime-500 dark:border-white">
                  <div className={`${tool.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transform transition-transform duration-300 hover:rotate-6`}>
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tool.stats}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`${tool.color} ${tool.hoverColor} text-white p-2 rounded-full`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400">
            New tools and features added regularly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTools;