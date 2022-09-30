import {IPreviewBookResponse} from "../../types/IPreviewBookResponse";
import {AddBooksAction, BooksActionTypes, SetBooksAction} from "../../types/books";
import {AppDispatch} from "../index";
import BookService from "../../services/BookService";

export const BookActions = {

    setBooks: (title: string, books: IPreviewBookResponse[]): SetBooksAction => ({
        type: BooksActionTypes.SET_BOOKS,
        payload: {
            title,
            books,
        }
    }),

    addBooks: (books: IPreviewBookResponse[]): AddBooksAction => ({
        type: BooksActionTypes.ADD_BOOKS,
        payload: {
            books,
        }
    }),

    findBooks: (title: string) => async (dispatch: AppDispatch) => {
        const foundBooks = await BookService.getBooks(title);
        dispatch(BookActions.setBooks(title, foundBooks.data.items));
    },

    loadScrollBooks: (title: string, index: number) => async (dispatch: AppDispatch) => {
        const foundBooks = await BookService.getBooks(title, index);
        dispatch(BookActions.addBooks(foundBooks.data.items));
    }
}