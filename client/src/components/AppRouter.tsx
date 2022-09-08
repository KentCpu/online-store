import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../utils/constants/routes';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {RootState} from "../store";


const AppRouter = () => {
    const isAuth = useTypedSelector((state: RootState) => state?.user.isAuth);

    return isAuth ?
        (
            <Routes>
                {
                    privateRoutes.map(({path, element}, i) => {
                        return <Route key={i} path={path} element={element}/>
                    })
                }
            </Routes>
        )
        :
        (
            <Routes>
                {
                    publicRoutes.map(({path, element}, i) => {
                        return <Route key={i} path={path} element={element}/>
                    })
                }
            </Routes>
        )
};

export default AppRouter;