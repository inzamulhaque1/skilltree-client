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
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorial";

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
        element: <PrivateRoute><TutorDetails /></PrivateRoute>,
        loader: ({ params }) =>
            fetch(`http://localhost:5000/tutorial/${params.id}`),
      },
      {
        path: "add-tutorials",
        element: <PrivateRoute><AddTutorials /></PrivateRoute>,
      },
      {
        path: "my-tutorials",
        element: <PrivateRoute><MyTutorials /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/tutorial"),
      },
      {
        path: "/update/:id" ,
        element: <PrivateRoute><UpdateTutorial> </UpdateTutorial></PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:5000/tutorial/${params.id}`)
      },
      {
        path: "book",  
        element: <PrivateRoute><Bookings /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/book"), 
        
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
