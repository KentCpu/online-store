import React from "react";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import { BOOK_ROUTE, BOOKS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./url";
import Page404 from "../../pages/Page404";
import { SearchPage } from "../../pages/SearchPage";
import BookPage from "../../pages/BookPage";
import { ProfilePage } from "../../pages/ProfilePage";


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