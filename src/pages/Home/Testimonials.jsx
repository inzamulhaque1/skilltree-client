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

  return (
<div className="dark:bg-purple-900 py-8">
  <h2 className="text-2xl text-blue-700 font-bold text-center mb-6 dark:text-white">
    What Our Users Say
  </h2>
  <p className="text-purple-600 text-center dark:text-gray-300 mt-2">
    Discover how our platform has made a difference in the lives of language
    learners worldwide.
  </p>
  <div className="overflow-hidden mt-6">
    <div className="marquee flex gap-8 animate-marquee  justify-center sm:flex-nowrap">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-purple-500 text-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col items-center w-full max-w-xs sm:w-72"
        >
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 text-white dark:text-white">
            {testimonial.name}
          </h3>
          <p className="text-sm text-white dark:text-gray-300 text-center">
            {testimonial.feedback}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Testimonials;
