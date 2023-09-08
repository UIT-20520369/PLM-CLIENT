import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./pages/authentication/Login";
import Home from "./pages/home/Home";
import Login1 from "./pages/authentication/Login1";
import Transactions from "./pages/transactions/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login/login1",
        element: <Login1 />,
      },
    ],
  },
]);
export { router };
