import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ProjectPage from "../pages/ProjectPage";
import CertificationPage from "../pages/CertificationPage";
import ContactPage from "../pages/ContactPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ExperiencePage from "../pages/ExperiencePage";

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
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project-detail/:slug",
        element: <ProjectDetailPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
    ],
  },
]);
export default router;
