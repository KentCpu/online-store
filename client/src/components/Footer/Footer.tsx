import React from 'react';
import s from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import {HOME_ROUTE, RATINGS_ROUTE, REVIEWS_ROUTE} from "../../utils/constants/url";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {getCurrentYear} from "../../utils/helpers";

const items = [
    {href: HOME_ROUTE, text: "Books"},
    {href: RATINGS_ROUTE, text: "Ratings"},
    {href: REVIEWS_ROUTE, text: "Reviews"},
];

const Footer = () => {
    return (
        <footer className={s["footer"]}>
            <div className={classNames("container", s["footer__wrapper"])}>
                <div className={s["footer__logo"]}>
                    <Logo/>
                </div>

                <ul className={s["menu"]}>
                    {
                        items.map(item =>
                            (
                                <li key={item.href} className={s["menu__item"]}>
                                    <Link className={s["menu__link"]} to={item.href}>{item.text}</Link>
                                </li>
                            )
                        )
                    }
                </ul>

                <span className={s["copy"]}>© {getCurrentYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;