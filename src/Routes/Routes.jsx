import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);