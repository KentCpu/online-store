import {IPreviewBook} from "./IPreviewBook";


export interface BooksState {
    title: string,
    books: IPreviewBook[],
}

export enum BooksActionTypes {
    SET_BOOKS = "SET_BOOKS",
    ADD_BOOKS = "ADD_BOOKS",
}

export interface SetBooksAction {
    type: BooksActionTypes.SET_BOOKS,
    payload: {
        title: string,
        books: IPreviewBook[],
    },
}

export interface AddBooksAction {
    type: BooksActionTypes.ADD_BOOKS,
    payload: {
        books: IPreviewBook[],
    },
}


export type BooksAction = SetBooksAction | AddBooksAction;