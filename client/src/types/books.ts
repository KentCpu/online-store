import {IPreviewBookResponse} from "./IPreviewBookResponse";


export interface BooksState {
    title: string,
    books: IPreviewBookResponse[],
}

export enum BooksActionTypes {
    SET_BOOKS = "SET_BOOKS",
    ADD_BOOKS = "ADD_BOOKS",
}

export interface SetBooksAction {
    type: BooksActionTypes.SET_BOOKS,
    payload: {
        title: string,
        books: IPreviewBookResponse[],
    },
}

export interface AddBooksAction {
    type: BooksActionTypes.ADD_BOOKS,
    payload: {
        books: IPreviewBookResponse[],
    },
}

export type BooksAction = SetBooksAction | AddBooksAction;