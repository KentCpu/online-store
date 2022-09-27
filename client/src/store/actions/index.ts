import {UserActions} from "./userActions";
import {BookActions} from "./booksActions";


export const actions = {
    ...UserActions,
    ...BookActions,
}