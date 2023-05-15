import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layout/Main';
import Login from '../Layout/Login/Login';
import Home from '../Layout/Home/Home';
import SingIn from '../Layout/SignIn/SingIn';
import Error from '../Layout/Error_page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SingIn></SingIn>
            }
        ]
    },
]);

export default router;