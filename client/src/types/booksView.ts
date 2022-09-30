
export enum BooksViewType {
    TABLE_VIEW = "TABLE_VIEW",
    ROW_VIEW = "ROW_VIEW",
}

export enum BooksViewActionTypes {
    SET_VIEW = "SET_VIEW",
}

export interface BooksViewState {
    viewType:  BooksViewType,
}

export interface SetViewAction {
    type: BooksViewActionTypes.SET_VIEW,
    payload: BooksViewType.TABLE_VIEW | BooksViewType.ROW_VIEW,
}

export type BooksViewAction = SetViewAction;
