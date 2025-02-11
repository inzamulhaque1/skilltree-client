
import { motion } from 'framer-motion';
import { Check, Crown, Star, Zap } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "per month",
      icon: <Zap className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
      features: [
        "Access to basic courses",
        "Community support",
        "Email support",
        "24/7 Customer Service",
        "Basic Analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      features: [
        "Access to all courses",
        "Priority support",
        "Exclusive resources",
        "Advanced Analytics",
        "Custom Learning Path"
      ],
      cta: "Choose Pro",
      popular: true
    },
    {
      name: "Premium",
      price: "$29",
      period: "per month",
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      features: [
        "All Pro features",
        "1-on-1 Mentorship",
        "Early access to new content",
        "Dedicated Account Manager",
        "Custom Branding"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-purple-900 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Learning Journey
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unlock your potential with our flexible pricing plans designed for every stage of your learning journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative ${
                plan.popular ? 'lg:-mt-4' : ''
              }`}
            >
              <div className={`h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'border-2 border-blue-500 dark:border-blue-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            All plans include a 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;