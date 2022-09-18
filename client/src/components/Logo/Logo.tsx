import React from 'react';
import s from "../Logo/Logo.module.scss";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/constants/url";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpenReader} from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
    return (
        <div className={s["logo"]}>
            <Link className={s["link"]} to={HOME_ROUTE}>
                <FontAwesomeIcon icon={faBookOpenReader}/>
                <span className={s["title"]}>BookFind</span>
            </Link>
        </div>
    );
};

export default Logo;