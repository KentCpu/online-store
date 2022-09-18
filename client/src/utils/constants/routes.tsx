import React from "react";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./url";
import Layout from "../../components/Layout/Layout";
import Page404 from "../../pages/Page404";
import Home from "../../pages/Home/Home";


export interface IRoute {
    path: string,
    element: React.ReactNode,
}

export const publicRoutes: IRoute[] = [
    {
        path: "*",
        element: <Page404/>,
    },

    {
        path: LOGIN_ROUTE,
        element: <Login/>,
    },

    {
        path: REGISTRATION_ROUTE,
        element: <Registration/>,
    },

    {
        path: HOME_ROUTE,
        element: <Home/>,
    },
];

export const privateRoutes: IRoute[] = [

    {
        path: "*",
        element: <Page404/>,
    },

    {
        path: HOME_ROUTE,
        element: <Home/>,
    },

];