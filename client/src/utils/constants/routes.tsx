import React from "react";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import {BOOK_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "./url";
import Page404 from "../../pages/Page404";
import {HomePage} from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";
import { ProfilePage } from "../../pages/ProfilePage";


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
        element: <LoginPage/>,
    },

    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationPage/>,
    },

    {
        path: HOME_ROUTE,
        element: <HomePage/>,
    },

    {
        path: BOOK_ROUTE,
        element: <BookPage/>,
    }
];

export const privateRoutes: IRoute[] = [

    {
        path: "*",
        element: <Page404/>,
    },

    {
        path: HOME_ROUTE,
        element: <HomePage/>,
    },

    {
        path: PROFILE_ROUTE,
        element: <ProfilePage/>,
    },

    {
        path: BOOK_ROUTE,
        element: <BookPage/>,
    }
];