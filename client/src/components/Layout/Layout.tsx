import React, {FC, PropsWithChildren} from 'react';
import Header from "../Header/Header";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";

const Layout: FC<PropsWithChildren> = ({children}) => {
    const isLoading =  useTypedSelector((state: RootState) => state?.user.isLoading);

    if(isLoading) {
        // return
    }

    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default Layout;