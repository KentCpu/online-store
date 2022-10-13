import React from "react";
import BookPage from "../../pages/BookPage";
import LoginPage from "../../pages/LoginPage";
import Page404 from "../../pages/Page404";
import ProfilePage from "../../pages/ProfilePage";
import RegistrationPage from "../../pages/RegistrationPage";
import SearchPage from "../../pages/SearchPage";
import { BOOKS_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./url";


export interface IRoute {
    path: string,
    element: React.ReactNode,
}

export const publicRoutes: IRoute[] = [
    {
        path: "*",
        element: <Page404 />,
    },

    {
        path: LOGIN_ROUTE,
        element: <LoginPage />,
    },

    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationPage />,
    },

    {
        path: BOOKS_ROUTE,
        element: <SearchPage />,
    },

    {
        path: BOOK_ROUTE,
        element: <BookPage />,
    }
];

export const privateRoutes: IRoute[] = [
    {
        path: "*",
        element: <Page404 />,
    },

    {
        path: BOOKS_ROUTE,
        element: <SearchPage />,
    },

    {
        path: PROFILE_ROUTE,
        element: <ProfilePage />,
    },

    {
        path: BOOK_ROUTE,
        element: <BookPage />,
    }
];