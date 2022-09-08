import { userReducer } from './reducers/userReducer';
import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;