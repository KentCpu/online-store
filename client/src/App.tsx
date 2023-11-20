import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './components/AppRouter';
import { GlobalLoader } from './components/ui/GlobalLoader/GlobalLoader';
import { useActions } from "./hooks/useActions";


const App = () => {
    const [isLoader, setIsLoader] = useState(false);
    const { checkAuth } = useActions();


    useEffect(() => {
        async function checkAuthUser() {
            try {
                await checkAuth();
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoader(false);
            }
        }

        if (localStorage.getItem("token")) {
            checkAuthUser();
        }
    }, []);


    if (isLoader) {
        return <GlobalLoader />
    }


    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
