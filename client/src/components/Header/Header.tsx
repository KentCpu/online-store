import React from 'react';
import s from "./Header.module.scss";
import Menu from "./Menu";
import Logo from "../ui/Logo/Logo";
import SearchPanel from "../SearchPanel/SearchPanel";
import useActions from "../../hooks/useActions";
import {useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/constants/url";


const Header = () => {
    const {findBooks} = useActions();
    const location = useLocation();
    const navigate = useNavigate();

    const searchBooks = async (title: string) => {
        await findBooks(title);
        if(location.pathname != HOME_ROUTE) {
            navigate(HOME_ROUTE);
        }
    }


    return (
        <header className={s["header"]}>
            <div className="container">
                <div className={s["header__wrapper"]}>
                    <Logo/>
                    <div className={s["search"]}>
                        <SearchPanel onSubmit={searchBooks}/>
                    </div>
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;