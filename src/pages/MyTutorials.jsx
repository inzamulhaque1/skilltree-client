import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";

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
      const response = await fetch(
        `https://assignment11-server-lime.vercel.app/tutorial/${id}`,
        {
          method: "DELETE",
        }
      );

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
    <div className="bg-gray-100 dark:bg-[#0B0716]">
      <div className="min-h-screen p-6 max-w-7xl mx-auto bg-gray-100 dark:bg-[#0B0716] dark:text-gray-200">
        {/* Heading and Subheading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
            My Tutorials
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
            Total Tutorials: {tutorials.length}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300 dark:border-gray-500">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="text-center text-gray-900 dark:text-gray-200">Image</th>
                <th className="text-center text-gray-900 dark:text-gray-200">Name</th>
                <th className="text-center text-gray-900 dark:text-gray-200">Language</th>
                <th className="text-center text-gray-900 dark:text-gray-200">Price</th>
                <th className="text-center text-gray-900 dark:text-gray-200">Review</th>
                <th className="text-center text-gray-900 dark:text-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map((tutorial) => (
                <tr
                  key={tutorial._id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <td className="text-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 mx-auto">
                        <img src={tutorial.image} alt={tutorial.name} />
                      </div>
                    </div>
                  </td>
                  <td className="text-center text-gray-900 dark:text-gray-300">{tutorial.name}</td>
                  <td className="text-center text-gray-900 dark:text-gray-300">{tutorial.language}</td>
                  <td className="text-center text-gray-900 dark:text-gray-300">{tutorial.price}</td>
                  <td className="text-center text-gray-900 dark:text-gray-300">{tutorial.reviewCount}</td>

                  <td className="text-center space-x-2 flex justify-center items-center">
                    <button className="btn btn-ghost btn-xs text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <Link to={`/tutor/${tutorial._id}`}>
                        <FaEye />{" "}
                      </Link>
                    </button>
                    <button className="btn btn-ghost btn-xs text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <Link to={`/update/${tutorial._id}`}>
                        <CiEdit />
                      </Link>
                    </button>
                    <button
                      className="btn btn-ghost btn-xs text-red-500 dark:text-red-400 hover:text-white"
                      onClick={() => handleDelete(tutorial._id)}
                    >
                      <FaDeleteLeft />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTutorials;
