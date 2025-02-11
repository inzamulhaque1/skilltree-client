/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle,
  Search
} from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I book a tutor?",
      answer: "Booking a tutor is simple! Browse the available tutors, select the one that matches your needs, and click Book Now. Follow the instructions to confirm your booking.",
      category: "Booking"
    },
    {
      question: "Are there free tutorials available?",
      answer: "Yes, we offer a variety of free tutorials to help you get started. Check the Free Tutorials section in the main menu for more details.",
      category: "Content"
    },
    {
      question: "Can I cancel or reschedule a session?",
      answer: "Absolutely! You can cancel or reschedule a session at least 24 hours in advance. Check the My Bookings section in your dashboard for options.",
      category: "Booking"
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support through the Contact Us section on our website or via email at support@platform.com.",
      category: "Support"
    },
    {
      question: "Are there any membership benefits?",
      answer: "Yes! Members get exclusive discounts on tutoring sessions and early access to new tutorials and features.",
      category: "Membership"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 dark:bg-[#0B0716] roboto py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HelpCircle className="w-12 h-12 text-purple-500 dark:text-purple-400" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl font-josefin font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Find quick answers to your most common questions
          </p>

          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>Category: {faq.category}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;