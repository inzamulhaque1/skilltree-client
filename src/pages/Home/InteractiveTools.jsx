const InteractiveTools = () => {
  return (
    <section className="p-8 bg-blue-100 text-gray-800 dark:bg-purple-800 dark:text-white transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-800 dark:text-blue-400">
        Boost Your Skills
      </h2>
      <p className="text-center text-lg mb-6 text-gray-700 dark:text-gray-300">
        Explore fun and interactive tools to enhance your language learning
        experience!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://englishtest.duolingo.com/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300 text-center w-full sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Take a Quiz
        </a>
        <a
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300 text-center w-full sm:w-auto dark:bg-green-600 dark:hover:bg-green-700"
        >
          Flashcards
        </a>
        <a
          href="/"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md transition duration-300 text-center w-full sm:w-auto dark:bg-yellow-600 dark:hover:bg-yellow-700"
        >
          Language Games
        </a>
      </div>
    </section>
  );
};

export default InteractiveTools;
