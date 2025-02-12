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
import ErrorPage from "../components/ErrorPage";
import PricingPlans from "../pages/Home/PricingPlans";
import FAQSection from "../pages/Home/FAQSection";
import Testimonials from "../pages/Home/Testimonials";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://assignment11-server-lime.vercel.app/tutorial"),
      },
      {
        path: "find-tutors",
        element: <FindTutors />,
        loader: () => fetch("https://assignment11-server-lime.vercel.app/tutorial"),
      },
      {
        path: "tutor/:id",
        element: <PrivateRoute><TutorDetails /></PrivateRoute>,
        loader: ({ params }) =>
            fetch(`https://assignment11-server-lime.vercel.app/tutorial/${params.id}`),
      },
      {
        path: "add-tutorials",
        element: <PrivateRoute><AddTutorials /></PrivateRoute>,
      },
      {
        path: "my-tutorials",
        element: <PrivateRoute><MyTutorials /></PrivateRoute>,
        loader: () => fetch("https://assignment11-server-lime.vercel.app/tutorial"),
      },
      {
        path: "/update/:id" ,
        element: <PrivateRoute><UpdateTutorial> </UpdateTutorial></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://assignment11-server-lime.vercel.app/tutorial/${params.id}`)
      },
      {
        path: "book",  
        element: <PrivateRoute><Bookings /></PrivateRoute>,
        loader: () => fetch("https://assignment11-server-lime.vercel.app/book"), 
        
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "pricing",
        element: <PricingPlans></PricingPlans>,
      },
      {
        path: "review",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "faq",
        element: <FAQSection></FAQSection>,
      },
    ],
  },
]);

export default routes;
