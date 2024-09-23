import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ProjectPage from "../pages/ProjectPage";
import CertificationPage from "../pages/CertificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/certification",
        element: <CertificationPage />,
      },
    ],
  },
]);
export default router;
