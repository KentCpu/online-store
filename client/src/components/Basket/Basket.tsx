import React from 'react';
import s from "./Busket.module.scss";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import {Link} from "react-router-dom";
import {FAVORITES_ROUTE} from "../../utils/constants/url";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";


const Basket = () => {
    const isAuth = useTypedSelector((state: RootState) => state?.user.isAuth);

    if(!isAuth) {
        return <></>;
    }

    return (
        <div className={s["favorites"]}>
            <Link className={s["favorites__link"]} to={FAVORITES_ROUTE}>
                <FontAwesomeIcon icon={faCartShopping}/>
            </Link>
        </div>
    );
};

export default Basket;