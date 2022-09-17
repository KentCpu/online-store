import React from 'react';
import s from "./Header.module.scss";
import Menu from "./Menu";
import Logo from "./Logo";
import Favorites from "../Favorites/Favorites";
import Profile from "./Profile";


const Header = () => {

    return (
        <header className={s["header"]}>
            <div className="container">
                <div className={s["header__wrapper"]}>
                    <Logo/>
                    <Menu />
                    <div className={s["header__panel"]}>
                        <Profile/>
                        <Favorites/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;