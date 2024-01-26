import * as React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbars";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Purchase from "./routes/Purchase";
import Appointment from "./routes/Appoitment";
import ErrorPage from "./routes/ErrorPage";
import Footer from "./components/Footer";

// https://github.com/briancodex/react-navbar-router-v6.4
// Navbar and routing is from above link ^^^^

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "appoitment",
        element: <Appointment />,
      },

      {
        path: "purchase",
        element: <Purchase />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
