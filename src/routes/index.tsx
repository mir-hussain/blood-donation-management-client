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
import ReceptionistDashboard from "@/pages/receptionist/Dashboard";
import Profile from "@/pages/Profile";
import RequestBloodForm from "@/pages/RequestBlood";
import UserManagement from "@/pages/admin/UserManagement";
import HospitalList from "@/pages/admin/HospitalsList";
import Response from "@/pages/Response";

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
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "request-blood",
        element: <RequestBloodForm />,
      },
      {
        path: "response/:id",
        element: <Response />,
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
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "hospital-management",
        element: <HospitalList />,
      },
    ],
  },
  {
    path: "/receptionist",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <ReceptionistDashboard />,
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
