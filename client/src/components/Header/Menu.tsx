import React, {FC} from 'react';
import s from "./Header.module.scss";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/constants/url";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import Basket from "../Basket/Basket";
import Profile from "./Profile";


const Menu: FC = () => {
    const isAuth = useTypedSelector((state: RootState) => state?.user.isAuth);


    return (
        <div className={s["menu"]}>
            <nav className={s["menu__content"]}>
                <ul className={s["menu__items"]}>
                    {
                        isAuth
                            ?
                            <>
                                <Profile/>
                                <Basket/>
                            </>
                            :
                            <>
                                <li className={s["menu__item"]}>
                                    <Link className={s["menu__link"]} to={LOGIN_ROUTE}>Sign in</Link>
                                </li>

                                <li className={s["menu__item"]}>
                                    <Link className={s["menu__link"]} to={REGISTRATION_ROUTE}>Sign up</Link>
                                </li>
                            </>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Menu;