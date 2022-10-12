import { IPreviewBook } from '../components/PreviewBooks/PreviewBook';


export interface BooksState {
    books: IPreviewBook[],
    viewType: BooksViewType,
}

export enum BooksActionTypes {
    SET_BOOKS = "SET_BOOKS",
    ADD_BOOKS = "ADD_BOOKS",
    SET_VIEW = "SET_VIEW",
}

export enum BooksViewType {
    TABLE_VIEW = "TABLE_VIEW",
    ROW_VIEW = "ROW_VIEW",
}


export interface SetBooksAction {
    type: BooksActionTypes.SET_BOOKS,
    payload: IPreviewBook[],
}

export interface AddBooksAction {
    type: BooksActionTypes.ADD_BOOKS,
    payload: IPreviewBook[],
}

export interface SetViewAction {
    type: BooksActionTypes.SET_VIEW,
    payload: BooksViewType,
}

export type BooksAction = SetBooksAction | AddBooksAction | SetViewAction;