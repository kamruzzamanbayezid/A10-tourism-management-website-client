import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import TouristSpotDetails from "../Components/TouristSpot/TouristSpotDetails";


const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/addTouristSpot',
                        element: <AddTouristSpot />
                  },
                  {
                        path: '/touristSpotDetails/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/touristSpotDetails/${params.id}`),
                        element: <TouristSpotDetails />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  }
            ]
      }
]);

export default router;