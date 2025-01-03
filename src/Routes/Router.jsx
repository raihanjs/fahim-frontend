import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Experiences from "../Pages/Experiences/Experiences";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Certificates from "../Pages/Certificates/Certificates";
import Projects from "../Pages/Projects/Projects";
import Leadership from "../Pages/Leadership/Leadership";
import ExperienceDetails from "../Pages/ExperienceDetails/ExperienceDetails";
import LeadershipDetails from "../LeadershipDetails/LeadershipDetails";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "experiencedetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://fahim-backend.vercel.app/portfolio/api/experiences/${params.id}`
          ),
        element: <ExperienceDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "leadership",
        element: <Leadership />,
      },
      {
        path: "leadershipdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://fahim-backend.vercel.app/portfolio/api/leaderships/${params.id}`
          ),
        element: <LeadershipDetails />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projectdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://fahim-backend.vercel.app/portfolio/api/projects/${params.id}`
          ),
        element: <ProjectDetails />,
      },
      {
        path: "certificates",
        element: <Certificates />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
