import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter';
import useActions from "./hooks/useActions";


const App: FC = () => {
    const { checkAuth } = useActions();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            checkAuth();
        }
    }, []);

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;