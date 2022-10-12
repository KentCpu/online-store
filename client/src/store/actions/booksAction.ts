import { store } from './../index';
import { AppDispatch } from "../index";
import BookService from "../../services/BookService";
import { AddBooksAction, BooksActionTypes, BooksViewType, SetBooksAction, SetViewAction } from "../../types/book";
import { IPreviewBook } from "../../components/PreviewBooks/PreviewBook";

export const BookActions = {
    setBooks: (books: IPreviewBook[]): SetBooksAction => ({
        type: BooksActionTypes.SET_BOOKS,
        payload: books,
    }),

    addBooks: (books: IPreviewBook[]): AddBooksAction => ({
        type: BooksActionTypes.ADD_BOOKS,
        payload: books,
    }),

    setView: (viewType: BooksViewType): SetViewAction => ({
        type: BooksActionTypes.SET_VIEW,
        payload: viewType,
    }),

    findBooks: (title: string, isInitialRequest: boolean) => async (dispatch: AppDispatch) => {
        const books = store.getState().books.books;
        if (isInitialRequest && books.length > 0) {
            return;
        }

        const foundBooks = await BookService.getBooks(title);
        dispatch(BookActions.setBooks(foundBooks.data));
    },

    loadScrollBooks: (title: string, startIndex: number) => async (dispatch: AppDispatch) => {
        const foundBooks = await BookService.getBooks(title, startIndex);
        dispatch(BookActions.addBooks(foundBooks.data));
    },

    setTableView: () => (dispatch: AppDispatch) => {
        dispatch(BookActions.setView(BooksViewType.TABLE_VIEW));
    },

    setRowView: () => (dispatch: AppDispatch) => {
        dispatch(BookActions.setView(BooksViewType.ROW_VIEW));
    }
}