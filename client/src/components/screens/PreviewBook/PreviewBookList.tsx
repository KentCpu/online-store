import React, {FC} from 'react';
import Book from "./PreviewBook";
import s from "./PreviewBook.module.scss";
import {getInfoPreviewBook} from "../../../utils/helpers";
import Title from "../../ui/Title/Title";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {RootState} from "../../../store";
import ScrollLoader from "../../ScrollLoader/ScrollLoader";
import useActions from "../../../hooks/useActions";


const PreviewBookList: FC = () => {
    const title = useTypedSelector((state: RootState) => state.books.title);
    const books = useTypedSelector((state: RootState) => state.books.books);
    const {loadScrollBooks} = useActions();
    const Books = books?.map(book => {
        return getInfoPreviewBook(book);
    });

    const loadScrollBooksWrapper = async () => {
        await loadScrollBooks(title, Books?.length);
    }


    return (
        <>
            {
                Books ?
                    <>
                        <div className={s["book-container"]}>
                            {Books.map((book, index) => {
                                return <Book
                                    id={book.id}
                                    key={index}
                                    title={book.title}
                                    authors={book.authors}
                                    price={book.price}
                                    isAvailable={book.isAvailable}
                                    imageLink={book.imageLink}
                                />
                            })}
                        </div>
                        {
                            books.length > 0
                            &&
                            <div className={s["scroll-loader"]}>
                                <ScrollLoader downloadData={loadScrollBooksWrapper}/>
                            </div>
                        }
                    </>
                    :
                    <Title headingLevels={"h2"}>We didn't find anything on your request!</Title>
            }
        </>

    );
};

export default PreviewBookList;