import React from "react";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import {BOOK_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./url";
import Page404 from "../../pages/Page404";

import Index from "../../pages";
import Book from "../../pages/Book";


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
        element: <Index/>,
    },

    {
        path: BOOK_ROUTE,
        element: <Book/>,
    }
];

export const privateRoutes: IRoute[] = [

    {
        path: "*",
        element: <Page404/>,
    },

    {
        path: HOME_ROUTE,
        element: <Index/>,
    },

    {
        path: BOOK_ROUTE,
        element: <Book/>,
    }

];