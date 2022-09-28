import React, {FC, memo} from 'react';
import s from "./PreviewBook.module.scss";
import {Link, NavLink} from "react-router-dom";
import Button from "../../ui/Button/Button";
import { HOME_ROUTE} from "../../../utils/constants/url";

export interface PreviewBookProps {
    id: string;
    title: string;
    authors?: string;
    imageLink: string | undefined;
    price: string;
    isAvailable: boolean;
}

const PreviewBook: FC<PreviewBookProps> =  ({id, title, authors, imageLink, price, isAvailable}) => {

    return (
        <div className={s["book"]}>
            <div className={s["cover"]}>
                <Link className={s["cover-link"]} to={`${HOME_ROUTE}/${id}`}>
                    <img className={s["cover-img"]} src={imageLink} alt="Cover"/>
                </Link>
            </div>

            <div className={s["info"]}>
                <NavLink className={s["info-link"]} to={`${HOME_ROUTE}/${id}`}>
                    <p className={s["title"]}>{title}</p>
                </NavLink>
                <p className={s["author"]}>{authors}</p>
                <p className={s["price"]}>{price}</p>
            </div>

            <Button disabled={!isAvailable}  className={s["btn-buy"]}>Add to Basket</Button>
        </div>
    );
};

export default memo(PreviewBook);