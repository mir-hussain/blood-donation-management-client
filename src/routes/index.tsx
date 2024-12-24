import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Requests from "@/pages/Requests";
import Hospitals from "@/pages/Hospitals";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import HospitalDetails from "@/pages/HospitalDetails";
import HomePage from "@/pages/Home";
import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/hospitals/:id",
        element: <HospitalDetails />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
