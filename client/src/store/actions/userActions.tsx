import AuthService from "../../services/AuthService";
import {IErrorRegistration} from "../../types/IErrorRegistration";
import {IUser} from "../../types/IUser";
import {SetUserAction, SetLoadingAction, UserActionTypes} from "../../types/user";
import {IErrorLogin} from "../../types/IErrorLogin";
import {AppDispatch} from "../index";
import {IRegistrationData} from "../../types/IRegistrationData";
import {ILoginData} from "../../types/ILoginData";

interface IError {
    msg: string;
    param: string;
}

type TSetErrRegistration = (error: IErrorRegistration) => void;
type TSetErrLogin = (error: IErrorLogin) => void;

export const UserActions = {
    setUser: (user: IUser | null, isAuth: boolean): SetUserAction => ({type: UserActionTypes.SET_USER, payload: {user, isAuth}}),
    setIsLoading: (isLoading: boolean): SetLoadingAction => ({type: UserActionTypes.SET_LOADING, payload: isLoading}),

    registration: ({email, nickname, password}: IRegistrationData, setError: TSetErrRegistration) => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActions.setIsLoading(true));
            const response = await AuthService.registration({email, password, nickname});
            localStorage.setItem("token", response.data.accessToken);
            setError({});
            dispatch(UserActions.setUser(response.data.user, true));
            dispatch(UserActions.setIsLoading(false));
        } catch (e: any) {
            const possibleError: IError[] = e.response.data.errors;
            if (possibleError.length !== 0) {
                const errors: IErrorRegistration = {};
                possibleError.forEach((error) => {
                    errors[error.param as keyof IErrorRegistration] = error.msg;
                });
                setError(errors);
            }
            dispatch(UserActions.setIsLoading(false));
        }
    },

    login: ({email, password}: ILoginData, setError: TSetErrLogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActions.setIsLoading(true));
            const response = await AuthService.login({email, password});
            localStorage.setItem("token", response.data.accessToken);
            setError({});
            dispatch(UserActions.setUser(response.data.user, true));
            dispatch(UserActions.setIsLoading(false));
        } catch (e: any) {
            const possibleError: IError[] = e.response.data.errors;
            if (possibleError.length !== 0) {
                const errors: IErrorLogin = {};
                possibleError.forEach((error) => {
                    errors[error.param as keyof IErrorLogin] = error.msg;
                });
                setError(errors);
            }
            dispatch(UserActions.setIsLoading(false));
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            dispatch(UserActions.setUser(null, false));
        } catch (e: any) {
            console.log(e);
        }
    },

    checkAuth: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActions.setIsLoading(true));
            const response = await AuthService.checkAuth();
            dispatch(UserActions.setUser(response.data.user, false));
            dispatch(UserActions.setIsLoading(false));
        } catch (e: any) {
            console.log(e);
            dispatch(UserActions.setIsLoading(false));
        }
    }

}