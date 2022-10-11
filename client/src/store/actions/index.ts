import { BookActions } from "./booksAction";
import { UserActions } from "./userActions";


export const actions = {
    ...UserActions,
    ...BookActions,
}