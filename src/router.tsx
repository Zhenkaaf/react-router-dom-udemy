import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import Categories from "./pages/Categories";
import Recipe from "./pages/Recipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movie/:movieId",
        element: <Movie />,
      },
      {
        path: "/categories/:name",
        element: <Categories />,
      },
      {
        path: "/meal/:id",
        element: <Recipe />,
      },
    ],
  },
]);
