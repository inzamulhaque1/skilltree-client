import Swal from "sweetalert2";

const AddTutorials = () => {

  const handleAddTutorials = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;

    const newTutorials = {name, email, image, language, price, description};

    console.log(newTutorials);

    fetch('https://assignment11-server-lime.vercel.app/tutorial', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTutorials),
    })
    .then(res => res.json())
    .then(data => {
        if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Tutorial Added Successfully",
              icon: "success",
              confirmButtonText: "Done",
            });
          }
    })
  };

  return (
    <div className="dark:bg-[#0B0716]  dark:text-white min-h-screen flex justify-center items-center px-2 py-6">
      <div className="w-full max-w-lg  bg-white dark:bg-[#1E1A2F] p-4  rounded-xl shadow-xl transform  transition-all duration-300">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Add New Tutorial
        </h1>
        <form onSubmit={handleAddTutorials} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300" htmlFor="image">
              Tutorial Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300" htmlFor="language">
              Language
            </label>
            <select
              id="language"
              name="language"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="" disabled selected>
                Select Language
              </option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Arabic">Arabic</option>
              <option value="Japanese">Japanese</option>
              <option value="Portuguese">Portuguese</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
          >
            Submit Tutorial
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
