import React from "react";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./url";
import Layout from "../../components/Layout/Layout";


export interface IRoute {
    path: string,
    element: React.ReactNode,
}

export const publicRoutes: IRoute[] = [
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
        element: <Layout/>,
    },

];

export const privateRoutes: IRoute[] = [
    {
        path: HOME_ROUTE,
        element: <Layout/>,
    },
    {
        path: "",
        element: <Registration/>,
    }
];