import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { ORDERS_ROUTE, PROFILE_ROUTE, SERVER_URL } from "../../../../utils/constants/url";
import s from "./Profile.module.scss";

export const Profile = () => {
    const { logout } = useActions();
    const isAuth = useTypedSelector(state => state.user?.isAuth);
    const avatar = useTypedSelector(state => state.user.userData?.avatar);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const dropDownRoot = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOustideDropDown = (e: MouseEvent) => {
            if (dropDownRoot.current && !dropDownRoot.current.contains(e.target as Node)) {
                setIsOpenDropDown(false);
            }
        };

        document.addEventListener("click", clickOustideDropDown);

        return () => {
            document.removeEventListener("click", clickOustideDropDown);
        }
    }, []);

    const toggleDropDown = () => {
        setIsOpenDropDown(isOpen => !isOpen);
    }


    if (!isAuth) {
        return <></>;
    }

    return (
        <div ref={dropDownRoot} className={s["profile"]}>
            {
                avatar ?
                    <img
                        className={s["profile__img"]}
                        src={`${SERVER_URL}/${avatar}`}
                        alt="Profile"
                        onClick={toggleDropDown}
                    />
                    :
                    <FontAwesomeIcon icon={faUser} />
            }

            {
                isOpenDropDown &&
                <div className={s["dropdown"]}>
                    <div className={s["dropdown__item"]}>
                        <Link to={PROFILE_ROUTE} className={s["dropdown__link"]}>My profile</Link>
                    </div>
                    <div className={s["dropdown__item"]}>
                        <Link to={ORDERS_ROUTE} className={s["dropdown__link"]}>My orders</Link>
                    </div>
                    <div className={s["dropdown__item"]}>
                        <span onClick={logout} className={s["dropdown__link"]}>Logout</span>
                    </div>
                </div>
            }
        </div>
    );
};