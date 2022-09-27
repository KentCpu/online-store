import {IBook} from "./IBook";


export interface BooksState {
    title: string,
    books: IBook[],
}

export enum BooksActionTypes {
    SET_BOOKS = "SET_BOOKS",
    ADD_BOOKS = "ADD_BOOKS",
}

export interface SetBooksAction {
    type: BooksActionTypes.SET_BOOKS,
    payload: {
        title: string,
        books: IBook[],
    },
}

export interface AddBooksAction {
    type: BooksActionTypes.ADD_BOOKS,
    payload: {
        books: IBook[],
    },
}


export type BooksAction = SetBooksAction | AddBooksAction;