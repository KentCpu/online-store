import classNames from "classnames";
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useIsFirstRender } from '../../hooks/useIsFirstRender';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BooksViewType } from '../../types/book';
import BooksDisplayPanel from "../BooksDisplayPanel/BooksDisplayPanel";
import { ScrollLoader } from '../ScrollLoader/ScrollLoader';
import ClipLoader from "react-spinners/ClipLoader";
import { Title } from "../ui/Title/Title";
import Book from "./PreviewBook";
import s from "./PreviewBook.module.scss";
import { ScrollTop } from "../ScrollTop/ScrollTop";


export const PreviewBooks: FC = () => {
    const { findBooks, loadScrollBooks } = useActions();
    const [isLoader, setIsLoader] = useState(false);
    const { books, viewType } = useTypedSelector(state => state.books);
    const title = new URLSearchParams(useLocation().search).get("title");
    const isFirstRender = useIsFirstRender();


    useEffect(() => {
        async function getBooks() {
            if (title) {
                setIsLoader(true);
                try {
                    await findBooks(title, isFirstRender);
                } catch (e) {
                    console.error(e);
                } finally {
                    setIsLoader(false);
                }
            }
        }

        getBooks();
    }, [title]);

    const loadMoreBooks = async () => {
        if (title) {
            await loadScrollBooks(title, books.length);
        }
    }


    return (
        <>
            <div className={s["books-view"]}>
                <BooksDisplayPanel />
            </div>

            {isLoader ?
                <div className={s["scroll-loader"]}>
                    <ClipLoader size={70} />
                </div>
                :
                books.length > 0 ?
                    <>
                        <div className={
                            classNames(
                                s["book-container"],
                                viewType === BooksViewType.ROW_VIEW && s["book-container_row"])}>
                            {
                                books.map((book, index) => {
                                    return <Book
                                        key={index}
                                        id={book.id}
                                        title={book.title}
                                        authors={book.authors}
                                        price={book.price}
                                        isAvailable={book.isAvailable}
                                        coverLink={book.coverLink}
                                        description={book.description}
                                    />
                                })
                            }
                        </div>
                        <div className={s["scroll-loader"]}>
                            <ScrollLoader downloadData={loadMoreBooks} />
                        </div>
                        <ScrollTop />
                    </>
                    :
                    <Title>Nothing found for your request</Title>
            }
        </>
    );
};