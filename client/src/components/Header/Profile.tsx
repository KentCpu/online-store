import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Link } from "react-router-dom";
import { PROFILE_ROUTE, SERVER_URL } from "../../utils/constants/url";
import s from "./Header.module.scss";

export const Profile = () => {
    const isAuth = useTypedSelector(state => state.user?.isAuth);
    const avatar = useTypedSelector(state => state.user?.userData?.avatar);

    if (!isAuth) {
        return <></>;
    }

    return (
        <div className={s["profile"]}>
            <Link className={s["profile__link"]} to={PROFILE_ROUTE}>
                {
                    avatar ?
                        <img className={s["profile__img"]} src={`${SERVER_URL}/${avatar}`} alt="Profile" />
                        :
                        <FontAwesomeIcon icon={faUser} />
                }
            </Link>
        </div>
    );
};