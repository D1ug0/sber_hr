import {LOGIN_ROUTE, REGISTRATION_ROUTE, SBER_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth/Auth";
import Sber from "./pages/Sber";

export const authRoutes = [
    {
        path: SBER_ROUTE,
        Component: Sber
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]