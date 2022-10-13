import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/constants/url";
import s from "./Header.module.scss";

export const Profile = () => {
    const isAuth = useTypedSelector(state => state?.user.isAuth);

    if (!isAuth) {
        return <></>;
    }

    return (
        <div className={s["profile"]}>
            <Link className={s["profile__link"]} to={PROFILE_ROUTE}>
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </div>
    );
};