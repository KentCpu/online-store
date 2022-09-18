import React, {useState} from 'react';
import s from "./Header.module.scss";
import {Link} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, RATINGS_ROUTE, REVIEWS_ROUTE} from "../../utils/constants/url";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import Burger from "./Burger";
import classNames from "classnames";


const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isAuth = useTypedSelector((state: RootState) => state?.user.isAuth);
    const items = [
        {href: HOME_ROUTE, text: "Books", isVisible: true},
        {href: RATINGS_ROUTE, text: "Ratings", isVisible: true},
        {href: REVIEWS_ROUTE, text: "Reviews", isVisible: true},
        {href: LOGIN_ROUTE, text: "Sign in", isVisible: !isAuth},
    ];

    return (
        <div className={s["menu"]}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
            <nav className={classNames(s["menu__content"], isOpen && s["menu__content_active"])}>
                <ul className={s["menu__items"]}>
                    {
                        items.map(item =>
                            (
                                item?.isVisible && <li key={item.href} className={s["menu__item"]}>
                                    <Link className={s["menu__link"]} to={item.href}>{item.text}</Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Menu;