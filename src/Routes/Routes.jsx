import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading.....</p>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path:'/apps',
            element:<Apps></Apps>,
        },
         {
            path:'/installation',
            element:<Installation></Installation>,
        },
         {
            path:'/app/:id',
            element:<AppDetails></AppDetails>,
        }
    ]
  },
]);