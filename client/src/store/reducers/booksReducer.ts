import { BooksAction, BooksActionTypes, BooksState, BooksViewType } from "../../types/book";


const defaultState: BooksState = {
    viewType: BooksViewType.TABLE_VIEW,
    books: [],
};

export const booksReducer = (state = defaultState, action: BooksAction): BooksState => {
    switch (action.type) {
        case BooksActionTypes.SET_BOOKS:
            return { ...state, books: action.payload };
        case BooksActionTypes.ADD_BOOKS:
            return { ...state, books: [...state.books, ...action.payload] };
        case BooksActionTypes.SET_VIEW:
            return { ...state, viewType: action.payload };
        default:
            return state;
    }
}