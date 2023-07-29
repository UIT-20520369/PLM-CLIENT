import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/authentication/Login";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path:"/login",
            element:<Login />
        }
      ]
    },
  ]);
  export {router};