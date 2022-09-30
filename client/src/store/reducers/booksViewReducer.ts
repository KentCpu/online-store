import {
    BooksViewAction,
    BooksViewActionTypes,
    BooksViewState,
    BooksViewType
} from "../../types/booksView";

const defaultState: BooksViewState = {
    viewType: BooksViewType.TABLE_VIEW,
};

export const booksViewReducer = (state = defaultState, action: BooksViewAction): BooksViewState => {
    switch (action.type) {
        case BooksViewActionTypes.SET_VIEW:
            return { ...state, viewType: action.payload};
        default:
            return state;
    }
}