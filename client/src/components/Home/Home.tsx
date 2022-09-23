import React, {SyntheticEvent, useState} from 'react';
import SearchPanel from "../SearchPanel/SearchPanel";
import BookService from "../../services/BookService";
import {IBook} from "../../types/IBook";
import s from "./Home.module.scss";
import BookList from "../Book/BookList";
import classNames from "classnames";


const Home = () => {
    const [books, setBooks] = useState<IBook[]>([]);

    const findBooks = async (e: SyntheticEvent, nameBook: string) => {
        e.preventDefault();
        const books = await BookService.getBooks(nameBook);
        setBooks(books.data.items);
    }


    return (
        <div className={classNames(s["home-container"],"container")}>
            <div className={s["search-wrapper"]}>
                <SearchPanel onSubmit={findBooks}/>
            </div>
            <BookList books={books}/>
        </div>
    );
};

export default Home;