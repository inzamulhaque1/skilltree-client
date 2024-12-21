import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'find-tutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: 'add-tutorials',
                element: <AddTutorials></AddTutorials>
            },
        ]
    }
])

export default routes;