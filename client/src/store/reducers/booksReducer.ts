import {BooksAction, BooksActionTypes, BooksState} from "../../types/books";

const defaultState: BooksState = {
    title: "",
    books: [],
};

export const booksReducer = (state = defaultState, action: BooksAction): BooksState => {
    switch (action.type) {
        case BooksActionTypes.SET_BOOKS:
            return {...state, title: action.payload.title, books: action.payload.books};
        case BooksActionTypes.ADD_BOOKS:
            return {...state, books: [...state.books, ...action.payload.books]};
        default:
            return state;
    }
}