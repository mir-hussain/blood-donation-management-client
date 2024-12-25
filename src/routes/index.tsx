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
import CreateAdmin from "@/pages/admin/CreateAdmin";
import AddReceptionist from "@/pages/admin/AddReceptionist";
import AddHospital from "@/pages/admin/AddHospital";

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
        path: "requests",
        element: <Requests />,
      },
      {
        path: "hospitals",
        element: <Hospitals />,
      },
      {
        path: "hospitals/:id",
        element: <HospitalDetails />,
      },
      {
        path: "requests",
        element: <Requests />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "add-receptionist",
        element: <AddReceptionist />,
      },
      {
        path: "add-hospital",
        element: <AddHospital />,
      },
    ],
  },
  {
    path: "/receptionist",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "add-receptionist",
        element: <AddReceptionist />,
      },
      {
        path: "add-hospital",
        element: <AddHospital />,
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
