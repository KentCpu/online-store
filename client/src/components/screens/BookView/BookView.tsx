import React, {useEffect, useState} from 'react';
import BookService from "../../../services/BookService";
import {useParams} from "react-router-dom";
import {GlobalLoader} from "../../ui/GlobalLoader/GlobalLoader";
import {PreviewBookProps} from "../PreviewBook/PreviewBook";
import {getInfoBook} from "../../../utils/helpers";
import s from "./BookView.module.scss";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import classNames from "classnames";
import NotFound from "../NotFound/NotFound";

export interface IBookView extends PreviewBookProps {
    description: string,
    language: string,
    pageCount: number,
    publisher: string,
    publishedDate: string,
}

const BookView = () => {
    const {id} = useParams();
    const [isLoader, setIsLoader] = useState(false);
    const [book, setBook] = useState<IBookView>({} as IBookView);


    useEffect(() => {
        if (id) {
            setIsLoader(true);
            BookService.getBook(id)
                .then(book => setBook(getInfoBook(book.data)))
                .catch(e => console.error(e))
                .finally(() => setIsLoader(false));
        }
    }, []);

    if (isLoader) {
        return <GlobalLoader/>
    }

    if (!Object.keys(book).length) {
        return <NotFound/>
    }


    return (
        <div className={classNames("container", s["book-container"])}>
            <div className={s["header"]}>
                <div className={s["cover"]}>
                    <img className={s["cover-pic"]} src={book.imageLink} alt="Cover"></img>
                </div>

                <div className={s["info"]}>
                    <h1 className={s["title"]}>{book.title}</h1>
                    <div className={s["characteristics"]}>
                        <Title className={s["characteristics__title"]} headingLevels={"h3"}>Characteristics</Title>
                        <p>Authors: {book.authors}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Language: {book.language}</p>
                        <p>Publication date: {book.publishedDate}</p>
                        <p>Number of pages: {book.pageCount}</p>
                    </div>

                    <div className={s["trade"]}>
                        <p className={s["price"]}>{book.price}</p>
                        <Button disabled={!book.isAvailable} className={s["btn-buy"]}>Add to Basket</Button>
                    </div>
                </div>
            </div>

            <div className={s["body"]}>
                <h2 className={s["body__title"]}>About the product</h2>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default BookView;