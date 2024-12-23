import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import TutorDetails from "../pages/TutorDetails";
import Bookings from "../pages/Bookings";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/tutorial"),
      },
      {
        path: "find-tutors",
        element: <FindTutors />,
        loader: () => fetch("http://localhost:5000/tutorial"),
      },
      {
        path: "tutor/:id",
        element: <TutorDetails />,
        loader: ({ params }) =>
            fetch(`http://localhost:5000/tutorial/${params.id}`),
      },
      {
        path: "add-tutorials",
        element: <AddTutorials />,
      },
      {
        path: "book",  // New route for viewing bookings
        element: <PrivateRoute><Bookings /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/book"),  // Fetch bookings from the server
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
