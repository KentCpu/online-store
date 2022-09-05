import React from 'react';
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../utils/constants/routes';



const AppRouter = () => {
    const isAuth = false;

    return isAuth ?
        (
            <Routes>
                {
                    privateRoutes.map(({ path, element }, i) => {
                        return <Route key={i} path={path} element={element} />
                    })
                }
            </Routes>
        )
        :
        (
            <Routes>
                {
                    publicRoutes.map(({ path, element }, i) => {
                        return <Route key={i} path={path} element={element} />
                    })
                }
            </Routes>
        )
};

export default AppRouter;