import React, {SyntheticEvent, useCallback, useRef, useState} from 'react';
import SearchPanel from "../SearchPanel/SearchPanel";
import BookService from "../../services/BookService";
import {IBook} from "../../types/IBook";
import s from "./Home.module.scss";
import BookList from "../Book/BookList";
import classNames from "classnames";
import ScrollLoader from "../ScrollLoader/ScrollLoader";


const Home = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const titleBook = useRef<string>("");

    const findBooks = useCallback( async (e: SyntheticEvent, nameBook: string) => {
        e.preventDefault();
        const foundBooks = await BookService.getBooks(nameBook);
        setBooks(foundBooks.data.items);
        titleBook.current = nameBook;
    },[]);

    const scrollFindBooks = async () => {
        const foundBooks = await BookService.getBooks(titleBook.current, books?.length);
        setBooks((previousBook) => [...previousBook, ...foundBooks.data.items]);
    }

    return (
        <div className={classNames(s["home-container"], "container")}>
            <div className={s["search-wrapper"]}>
                <SearchPanel onSubmit={findBooks}/>
            </div>
            <BookList books={books}/>
            <div className={s["loader-wrapper"]}>
                {books?.length > 0 && <ScrollLoader downloadData={scrollFindBooks}/>}
            </div>
        </div>
    );
};

export default Home;