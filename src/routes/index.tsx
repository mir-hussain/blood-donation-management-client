import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Requests from "@/pages/Requests";
import Hospitals from "@/pages/Hospitals";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/requests",
        element: <Requests />,
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
