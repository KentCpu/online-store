import React from "react";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./url";


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


];

export const privateRoutes: IRoute[] = [
    {
        path: "",
        element: <Registration/>,
    }
];