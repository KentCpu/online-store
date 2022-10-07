import {FC, memo} from 'react';
import s from "./PreviewBook.module.scss";
import {Link, NavLink} from "react-router-dom";
import Button from "../../ui/Button/Button";
import {HOME_ROUTE} from "../../../utils/constants/url";
import {BooksViewType} from "../../../types/booksView";
import classNames from "classnames";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {RootState} from "../../../store";

export interface IPreviewBook {
    id: string;
    title: string;
    authors: string;
    imageLink: string | undefined;
    price: string;
    isAvailable: boolean;
    description: string,
}

const PreviewBook: FC<IPreviewBook> = ({id, title, authors, imageLink, price, isAvailable, description}) => {
    const viewType = useTypedSelector((state: RootState) => state.booksView.viewType);
    const isRowView = viewType === BooksViewType.ROW_VIEW;

    return (
        <div className={classNames(s["book"], isRowView && s["book_row"])}>
            <div className={s["cover"]}>
                <Link className={s["cover-link"]} to={`${HOME_ROUTE}/${id}`}>
                    <img className={s["cover-img"]} src={imageLink} alt="Cover"/>
                </Link>
            </div>

            <div className={classNames(s["body"], isRowView && s["body_row"])}>
                <div className={s["info"]}>
                    <NavLink className={s["title"]} to={`${HOME_ROUTE}/${id}`}>{title}</NavLink>
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