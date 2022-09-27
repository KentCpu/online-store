import React from 'react';
import s from "./Header.module.scss";
import Menu from "./Menu";
import Logo from "../Logo/Logo";
import SearchPanel from "../SearchPanel/SearchPanel";
import useActions from "../../hooks/useActions";


const Header = () => {
    const {findBooks} = useActions();

    return (
        <header className={s["header"]}>
            <div className="container">
                <div className={s["header__wrapper"]}>
                    <Logo/>
                    <div className={s["search"]}>
                        <SearchPanel onSubmit={findBooks}/>
                    </div>
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;