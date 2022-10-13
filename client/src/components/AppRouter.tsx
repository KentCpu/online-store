import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../utils/constants/routes';
import { useTypedSelector } from "../hooks/useTypedSelector";


export const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.user.isAuth);

    return isAuth ?
        <Routes>
            {
                privateRoutes.map(({ path, element }, i) => {
                    return <Route key={i} path={path} element={element} />
                })
            }
        </Routes>
        :
        <Routes>
            {
                publicRoutes.map(({ path, element }, i) => {
                    return <Route key={i} path={path} element={element} />
                })
            }
        </Routes>
};