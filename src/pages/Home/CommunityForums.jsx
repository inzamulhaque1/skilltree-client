import { useState } from "react";
import { FaComments, FaUsers, FaRegBookmark, FaRegThumbsUp } from "react-icons/fa";

const CommunityForums = () => {
  const [activeTab, setActiveTab] = useState("trending");
  
  const forumPosts = {
    trending: [
      {
        id: 1,
        title: "Tips for mastering tonal languages like Chinese",
        author: "LingoExpert",
        avatar: "/api/placeholder/40/40",
        language: "Chinese",
        replies: 24,
        likes: 42,
        timeAgo: "2 hours ago"
      },
      {
        id: 2,
        title: "How to practice Spanish with native speakers online",
        author: "SpanishLearner",
        avatar: "/api/placeholder/40/40",
        language: "Spanish",
        replies: 18,
        likes: 31,
        timeAgo: "5 hours ago"
      },
      {
        id: 3,
        title: "Best resources for learning Arabic script",
        author: "NewLearner",
        avatar: "/api/placeholder/40/40",
        language: "Arabic",
        replies: 15,
        likes: 27,
        timeAgo: "1 day ago"
      }
    ],
    recent: [
      {
        id: 4,
        title: "French pronunciation challenges - seeking advice",
        author: "FrenchBeginner",
        avatar: "/api/placeholder/40/40",
        language: "French",
        replies: 7,
        likes: 12,
        timeAgo: "1 hour ago"
      },
      {
        id: 5,
        title: "Which dialect of Arabic should I learn first?",
        author: "CuriousLearner",
        avatar: "/api/placeholder/40/40",
        language: "Arabic",
        replies: 9,
        likes: 14,
        timeAgo: "3 hours ago"
      },
      {
        id: 6,
        title: "Japanese kanji study techniques that worked for me",
        author: "JapanEnthusiast",
        avatar: "/api/placeholder/40/40",
        language: "Japanese",
        replies: 11,
        likes: 19,
        timeAgo: "4 hours ago"
      }
    ],
    popular: [
      {
        id: 7,
        title: "The ultimate guide to German cases",
        author: "GermanPro",
        avatar: "/api/placeholder/40/40",
        language: "German",
        replies: 53,
        likes: 118,
        timeAgo: "2 days ago"
      },
      {
        id: 8,
        title: "How I became fluent in Portuguese in 6 months",
        author: "LanguageHacker",
        avatar: "/api/placeholder/40/40",
        language: "Portuguese",
        replies: 87,
        likes: 203,
        timeAgo: "1 week ago"
      },
      {
        id: 9,
        title: "Italian vs. Spanish: Similarities and differences",
        author: "RomanticLangExpert",
        avatar: "/api/placeholder/40/40",
        language: "Italian",
        replies: 41,
        likes: 95,
        timeAgo: "3 days ago"
      }
    ]
  };
  
  return (
    <div className="bg-gray-100 dark:bg-[#0B0716] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Language Learners Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with fellow language enthusiasts, share your journey, ask questions,
            and learn from others&lsquo; experiences.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header with stats */}
          <div className="bg-purple-500 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-400 bg-opacity-30 p-3 rounded-full">
                  <FaUsers className="text-2xl" />
                </div>
                <div>
                  <p className="text-purple-200">Active Members</p>
                  <p className="text-2xl font-bold">12,458</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-400 bg-opacity-30 p-3 rounded-full">
                  <FaComments className="text-2xl" />
                </div>
                <div>
                  <p className="text-purple-200">Topics Discussed</p>
                  <p className="text-2xl font-bold">25,697</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-400 bg-opacity-30 p-3 rounded-full">
                  <FaRegThumbsUp className="text-2xl" />
                </div>
                <div>
                  <p className="text-purple-200">Helpful Solutions</p>
                  <p className="text-2xl font-bold">98,342</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Forum navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex overflow-x-auto">
              <button
                className={`px-6 py-4 font-medium text-sm flex-shrink-0 ${
                  activeTab === "trending"
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("trending")}
              >
                Trending Topics
              </button>
              <button
                className={`px-6 py-4 font-medium text-sm flex-shrink-0 ${
                  activeTab === "recent"
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("recent")}
              >
                Recent Discussions
              </button>
              <button
                className={`px-6 py-4 font-medium text-sm flex-shrink-0 ${
                  activeTab === "popular"
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Most Popular
              </button>
            </div>
          </div>
          
          {/* Forum posts */}
          <div className="p-6">
            <div className="space-y-6">
              {forumPosts[activeTab].map((post) => (
                <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                          <span>{post.author}</span>
                          <span>{post.timeAgo}</span>
                          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs">
                            {post.language}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                      <FaRegBookmark />
                    </button>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FaComments className="text-gray-400" />
                        <span>{post.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaRegThumbsUp className="text-gray-400" />
                        <span>{post.likes} likes</span>
                      </div>
                    </div>
                    
                    <button className="text-sm font-medium text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
                      View Discussion
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-8">
                <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2">
                  <FaComments />
                  View All Discussions
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Language Learning Community</h3>
          <p className="mb-6 text-green-100 max-w-2xl mx-auto">
            Create an account to participate in discussions, share your progress, ask questions,
            and connect with language learners from around the world.
          </p>
          <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition duration-300">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityForums;