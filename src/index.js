import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Client from "./components/Client";
import Component from "./components/Component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/component",
    element: <Component />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
