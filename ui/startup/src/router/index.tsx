import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// @ts-ignore
const Home = React.lazy(() => import('Home'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
]);

export default () => <RouterProvider router={router} />