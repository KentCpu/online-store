import React, {FC, PropsWithChildren} from 'react';
import Header from "../Header/Header";
import {GlobalLoader} from "../ui/GlobalLoader/GlobalLoader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import Footer from "../Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    const isLoading = useTypedSelector((state: RootState) => state?.user.isLoading);
    if(isLoading) {
        return <GlobalLoader/>;
    }

    return (
        <>
            <Header/>
            <main className="main">{children}</main>
            <Footer/>
        </>
    );
};

export default Layout;