import { FC } from 'react';
import s from "./Menu.module.scss";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../../../utils/constants/url";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Basket } from "../../../Basket/Basket";
import { Profile } from "../Profile/Profile";


export const Menu: FC = () => {
    const isAuth = useTypedSelector(state => state.user?.isAuth);

    return (
        <div className={s["menu"]}>
            <nav className={s["menu__content"]}>
                <ul className={s["menu__items"]}>
                    {
                        isAuth
                            ?
                            <>
                                <Profile />
                                <Basket />
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