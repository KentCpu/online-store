import {BooksViewActionTypes, BooksViewType, SetViewAction} from "../../types/booksView";
import {AppDispatch} from "../index";


export const BooksViewAction = {
    setView: (viewType: BooksViewType): SetViewAction => ({
        type: BooksViewActionTypes.SET_VIEW,
        payload: viewType,
    }),

    setTableView: () => (dispatch: AppDispatch) => {
        dispatch(BooksViewAction.setView(BooksViewType.TABLE_VIEW));
    },

    setRowView: () => (dispatch: AppDispatch) => {
        dispatch(BooksViewAction.setView(BooksViewType.ROW_VIEW));
    }
}