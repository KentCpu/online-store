import {IUser} from './IUser';


export enum UserActionTypes {
    SET_USER = "SET_USER",
    SET_LOADING = "SET_LOADING",
}


export interface UserState {
    user: IUser | null,
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
        user: IUser | null,
        isAuth: boolean,
    }
}


export type UserAction = SetUserAction | SetLoadingAction ;