import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const MyTutorials = () => {
  const loadedTutorials = useLoaderData();
  const [tutorials, setTutorials] = useState(loadedTutorials);

  const handleDelete = async (id) => {
    // SweetAlert2 confirmation
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`http://localhost:5000/tutorial/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTutorials(tutorials.filter((tutorial) => tutorial._id !== id));
        Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
      } else {
        const errorData = await response.json();
        Swal.fire(
          "Error!",
          errorData.message || "Failed to delete tutorial",
          "error"
        );
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error!",
        "An error occurred while deleting the tutorial",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">My Tutorials</h1>
      <p>Total Tutorials: {tutorials.length}</p>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th>Image</th>
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Review</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr
                key={tutorial._id}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={tutorial.image} alt={tutorial.name} />
                    </div>
                  </div>
                </td>
                <td>{tutorial.name}</td>
                <td>{tutorial.language}</td>
                <td>{tutorial.price}</td>
                <td>{tutorial.reviewCount}</td>
                <td>{tutorial.description}</td>

                <td>
                  <button className="btn btn-ghost btn-xs">
                    <Link to={`/tutor/${tutorial._id}`}>View Details</Link>
                  </button>
                  <button className="btn btn-ghost btn-xs">
                    <Link to={`/update/${tutorial._id}`}>Update</Link>
                  </button>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(tutorial._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
