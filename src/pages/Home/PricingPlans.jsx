const PricingPlans = () => {
    const plans = [
      {
        name: "Basic",
        price: "$9/month",
        features: ["Access to basic courses", "Community support", "Email support"],
        cta: "Choose Plan",
      },
      {
        name: "Pro",
        price: "$19/month",
        features: [
          "Access to all courses",
          "Priority support",
          "Exclusive resources",
        ],
        cta: "Choose Plan",
      },
      {
        name: "Premium",
        price: "$29/month",
        features: [
          "All Pro features",
          "1-on-1 Mentorship",
          "Early access to new content",
        ],
        cta: "Choose Plan",
      },
    ];
  
    return (
      <section className="bg-gray-100 dark:bg-purple-900 py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Affordable Plans for Everyone
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Choose a plan that fits your learning goals and start your journey today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white dark:bg-purple-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-blue-500 dark:text-gray-200 mb-6">
                  {plan.price}
                </p>
                <ul className="text-left mb-6 space-y-2 text-gray-600 dark:text-gray-400">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-blue-500 w-2.5 h-2.5 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingPlans;
  