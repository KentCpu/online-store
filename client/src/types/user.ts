import { IUser } from './IUser';


export enum UserActionTypes {
    SET_USER = "SET_USER",
    SET_LOADING = "SET_LOADING",
    SET_AUTH = "SET_AUTH",
}


export interface UserState {
    userData: IUser | null,
    isAuth: boolean,
    isLoading: boolean,
}

export interface SetLoadingAction {
    type: UserActionTypes.SET_LOADING,
    payload: boolean,
}

export interface SetUserAction {
    type: UserActionTypes.SET_USER,
    payload: {
        userData: IUser | null,
    }
}

export interface SetAuthAction {
    type: UserActionTypes.SET_AUTH,
    payload: boolean,
}

export type UserAction = SetUserAction | SetLoadingAction | SetAuthAction;