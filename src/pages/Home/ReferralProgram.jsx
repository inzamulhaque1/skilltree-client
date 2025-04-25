import { useState } from "react";
import { FaUserFriends, FaCoins, FaGift } from "react-icons/fa";

const ReferralProgram = () => {
  const [referralCode] = useState("SKILL25TREE");
  const [copied, setCopied] = useState(false);
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  
  return (
    <div className="bg-white dark:bg-[#0B0716] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left side - description */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Refer Friends & Earn Rewards
              </h2>
              <p className="text-purple-100 text-lg mb-6">
                Share the gift of language learning with friends and family. For each person who joins using your referral code, you both receive rewards!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <FaUserFriends className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Invite Friends</h3>
                    <p className="text-purple-100">Share your unique referral code with friends and family</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <FaGift className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">They Get $25 Off</h3>
                    <p className="text-purple-100">Your friends receive $25 off their first month of any paid plan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <FaCoins className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">You Earn $25</h3>
                    <p className="text-purple-100">Get $25 credit for each friend who signs up and makes a purchase</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
            
            {/* Right side - referral code */}
            <div className="bg-white dark:bg-gray-800 md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Your Referral Code
              </h3>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-semibold text-purple-500">{referralCode}</span>
                  <button 
                    onClick={handleCopyCode}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm font-medium transition duration-300"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Share on Facebook
                </button>
                
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Share on Twitter
                </button>
                
                <button className="w-full border border-purple-500 text-purple-500 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Share via Email
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Already referred <span className="text-purple-500">24 friends</span> this month!
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            There&rsquo;s no limit to how many friends you can refer or how much you can earn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;