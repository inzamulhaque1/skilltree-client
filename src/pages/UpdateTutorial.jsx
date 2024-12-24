import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const tutorial = useLoaderData(); // Loaded data for the specific tutorial
  const navigate = useNavigate();

  const handleUpdateTutorial = (e) => {
    e.preventDefault();
  
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
  
    const updatedTutorial = { name, email, image, language, price, description };
  
    fetch(`http://localhost:5000/tutorial/${tutorial._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  // Log the response from the backend to check for any discrepancies.
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tutorial updated successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate("/my-tutorials"); // Redirect to My Tutorials page
        } else {
          Swal.fire("No changes made", "The tutorial was not updated.", "info");
          
        }
      })
      .catch((error) => {
        console.error("Error updating tutorial:", error);
        Swal.fire("Error!", "Failed to update the tutorial.", "error");
      });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Update Tutorial</h1>
        <form onSubmit={handleUpdateTutorial} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled 
              defaultValue={tutorial.name}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled 
              defaultValue={tutorial.email}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="image">
              Tutorial Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              defaultValue={tutorial.image}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="language">
              Language
            </label>
            <select
              id="language"
              name="language"
              defaultValue={tutorial.language}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            >
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
            <label className="block mb-2 font-semibold" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={tutorial.price}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={tutorial.description}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Update Tutorial
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTutorial;
