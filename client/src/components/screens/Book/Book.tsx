import { useEffect, useState } from 'react';
import BookService from "../../../services/BookService";
import { useParams } from "react-router-dom";
import { GlobalLoader } from "../../ui/GlobalLoader/GlobalLoader";
import s from "./Book.module.scss";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import classNames from "classnames";
import NotFound from "../NotFound/NotFound";
import { IPreviewBook } from "../PreviewBooks/PreviewBook";


export interface IBook extends IPreviewBook {
    description: string,
    language: string,
    pageCount: number,
    publisher: string,
    publishedDate: string,
}

const Book = () => {
    const { id } = useParams();
    const [isLoader, setIsLoader] = useState(false);
    const [book, setBook] = useState<IBook>({} as IBook);


    useEffect(() => {
        if (id) {
            setIsLoader(true);
            BookService.getBook(id)
                .then(book => setBook(book.data))
                .catch(e => console.error(e))
                .finally(() => setIsLoader(false));
        }
    }, []);

    if (isLoader) {
        return <GlobalLoader />
    }

    if (!Object.keys(book).length) {
        return <NotFound />
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

                    <p className={s["price"]}>{book.price}</p>
                    <Button disabled={!book.isAvailable} className={s["btn-buy"]}>Add to Basket</Button>
                </div>
            </div>

            <div className={s["body"]}>
                <h2 className={s["body__title"]}>About the product</h2>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default Book;