import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/layout';
import Login from "./pages/authentication/Login";
import Home from "./pages/home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:true,
          element: <Home />
        }
        ,
        {
            path:"/login",
            element:<Login />
        }
      ]
    },
  ]);
  export {router};