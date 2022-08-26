import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./url";

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        element: <Registration />,
        exact: true,
    },

    {
        path: LOGIN_ROUTE,
        element: <Login />,
        exact: true,
    }
];

export const privateRoutes = [
    {
        path: "",
        element: <Login />,
        exact: true,
    }
];