import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your backend
      console.log("Email submitted:", email);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset subscription message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0B0716] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-purple-500 dark:bg-purple-600 rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with SkillTree
            </h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest updates on new tutors, language courses, 
              special offers, and learning tips delivered directly to your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            
            {isSubscribed && (
              <p className="mt-4 text-center text-green-200 font-medium">
                Thank you for subscribing! You&rsquo;ll receive our updates soon.
              </p>
            )}
            
            <p className="text-purple-200 text-sm mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;