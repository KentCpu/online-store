import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/constants/url";
import s from "./Logo.module.scss";

export const Logo: FC = () => {
    return (
        <div className={s["logo"]}>
            <Link className={s["link"]} to={HOME_ROUTE}>
                <FontAwesomeIcon icon={faBookOpenReader} />
                <span className={s["title"]}>BookFind</span>
            </Link>
        </div>
    );
};
