import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h4>Add Dashboard layout</h4>,
      },
      {
        path: "add-admin",
        element: <h5>Add Admin from thid page</h5>,
      },
    ],
  },
]);

export default router;
