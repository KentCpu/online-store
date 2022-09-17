import React, {useState} from 'react';
import s from "./Header.module.scss";
import {Link} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, RATINGS_ROUTE, REVIEWS_ROUTE} from "../../utils/constants/url";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import Burger from "./Burger";
import classNames from "classnames";

const Menu: React.FC = () => {
    const isAuth = useTypedSelector((state: RootState) => state?.user.isAuth);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={s["menu"]}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
            <nav className={classNames(s["menu__content"], isOpen && s["menu__content_active"])}>
                <ul className={s["menu__items"]}>
                    <li className={s["menu__item"]}>
                        <Link className={s["menu__link"]} to={HOME_ROUTE}>Books</Link>
                    </li>
                    <li className={s["menu__item"]}>
                        <Link className={s["menu__link"]} to={RATINGS_ROUTE}>Ratings</Link>
                    </li>
                    <li className={s["menu__item"]}>
                        <Link className={s["menu__link"]} to={REVIEWS_ROUTE}>Reviews</Link>
                    </li>
                    {
                        !isAuth &&
                            <li className={s["menu__item"]}>
                                <Link className={s["menu__link"]} to={LOGIN_ROUTE}>Sign in</Link>
                            </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Menu;