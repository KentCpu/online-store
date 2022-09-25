import React, {FC, memo} from 'react';
import s from "./Book.module.scss";
import {Link} from "react-router-dom";
import Button from "../ui/Button/Button";

export interface IBookProps {
    id: string;
    title: string;
    authors?: string;
    imageLink: string | undefined;
    price: string;
    isAvailable: boolean;
}

const Book: FC<IBookProps> =  ({title, authors, imageLink, price, isAvailable}) => {
    return (
        <div className={s["book"]}>
            <div className={s["cover"]}>
                <Link className={s["cover-link"]} to={"fw"}>
                    <img className={s["cover-img"]} src={imageLink} alt="Cover"/>
                </Link>
            </div>

            <div className={s["info"]}>
                <Link className={s["info-link"]} to="ss">
                    <p className={s["title"]}>{title}</p>
                </Link>
                <p className={s["author"]}>{authors}</p>
                <p className={s["price"]}>{price}</p>
            </div>

            <Button disabled={!isAvailable}  className={s["btn-buy"]}>Add to Basket</Button>
        </div>
    );
};

export default memo(Book);