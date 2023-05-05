import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// @ts-ignore
const Home = React.lazy(() => import('Home'));
// @ts-ignore
const Login = React.lazy(() => import('Auth/Login'));
// @ts-ignore
const Register = React.lazy(() => import('Auth/Register'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
]);

export default () => <RouterProvider router={router} />