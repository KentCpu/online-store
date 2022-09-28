import React from 'react';
import s from "./Footer.module.scss";
import Logo from "../ui/Logo/Logo";
import classNames from "classnames";
import {getCurrentYear} from "../../utils/helpers";


const Footer = () => {
    return (
        <footer className={s["footer"]}>
            <div className={classNames("container", s["footer__wrapper"])}>
                <div className={s["footer__logo"]}>
                    <Logo/>
                </div>

                <span className={s["copy"]}>© {getCurrentYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;