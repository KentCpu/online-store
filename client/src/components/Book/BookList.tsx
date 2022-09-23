import React, {FC} from 'react';
import {IBook} from "../../types/IBook";
import Book from "./Book";
import s from "./Book.module.scss";
import {getInfoBook} from "../../utils/helpers";
import Title from "../ui/Title/Title";

interface BookList {
    books: IBook[],
}

const BookList: FC<BookList> = ({books}) => {
    const Books = books?.map(book => {
        return getInfoBook(book);
    });

    return (
        <>
            {
                Books ?
                    <div className={s["book-container"]}>
                        {Books.map(book => {
                            return <Book
                                id={book.id}
                                key={book.id}
                                title={book.title}
                                authors={book.authors}
                                price={book.price}
                                isAvailable={book.isAvailable}
                                imageLink={book.imageLink}
                            />
                        })}
                    </div>
                    :
                    <Title headingLevels={"h2"}>We didn't find anything on your request!</Title>
            }
        </>

    );
};

export default BookList;