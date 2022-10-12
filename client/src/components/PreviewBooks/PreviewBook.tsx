import classNames from "classnames";
import { FC, memo } from 'react';
import { Link, NavLink } from "react-router-dom";
import coverEmpty from "../../assets/img/empty-cover-book.png";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BooksViewType } from '../../types/book';
import { BOOKS_ROUTE } from "../../utils/constants/url";
import Button from "../ui/Button/Button";
import s from "./PreviewBook.module.scss";

export interface IPreviewBook {
    id: string;
    title: string;
    authors: string;
    coverLink: string;
    price: string;
    isAvailable: boolean;
    description: string,
}

const PreviewBook: FC<IPreviewBook> = ({ id, title, authors, coverLink, price, isAvailable, description }) => {
    const viewType = useTypedSelector(state => state.books.viewType);
    const isRowView = viewType === BooksViewType.ROW_VIEW;


    return (
        <div className={classNames(s["book"], isRowView && s["book_row"])}>
            <div className={s["cover"]}>
                <Link className={s["cover-link"]} to={`${BOOKS_ROUTE}/${id}`}>
                    <img className={s["cover-img"]} src={coverLink ? coverLink : coverEmpty} alt="Cover" />
                </Link>
            </div>

            <div className={classNames(s["body"], isRowView && s["body_row"])}>
                <div className={s["info"]}>
                    <NavLink className={s["title"]} to={`${BOOKS_ROUTE}/${id}`}>{title}</NavLink>
                    <p className={s["author"]}>{authors}</p>
                    {
                        isRowView && <p className={s["description"]}>{description}</p>
                    }
                </div>
                <p className={s["price"]}>{price}</p>
                <Button disabled={!isAvailable} className={s["btn-buy"]}>Add to Basket</Button>
            </div>
        </div>
    );
};

export default memo(PreviewBook);