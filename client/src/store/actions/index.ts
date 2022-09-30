import {UserActions} from "./userActions";
import {BookActions} from "./booksActions";
import {BooksViewAction} from "./booksViewAction";


export const actions = {
    ...UserActions,
    ...BookActions,
    ...BooksViewAction,
}