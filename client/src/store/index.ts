import { userReducer } from './reducers/userReducer';
import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {booksReducer} from "./reducers/booksReducer";
import {booksViewReducer} from "./reducers/booksViewReducer";

const rootReducer = combineReducers({
    user: userReducer,
    books: booksReducer,
    booksView: booksViewReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;