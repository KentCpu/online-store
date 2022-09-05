import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter';
import {Provider} from "react-redux";
import {store} from "./store/index";
import useActions from "./hooks/useActions";


const App: React.FC = () => {
    const {checkAuth} = useActions();
    useEffect(() => {
        if(localStorage.getItem("token")) {
            checkAuth();
        }
    })

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
