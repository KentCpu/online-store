import UserService from "../../services/UserService";
import { IErrorRegistration } from "../../types/IErrorRegistration";
import { IUser } from "../../types/IUser";
import { SetUserAction, SetLoadingAction, SetAuthAction, UserActionTypes } from "../../types/user";
import { IErrorLogin } from "../../types/IErrorLogin";
import { AppDispatch } from "../index";
import { IRegistrationData } from "../../types/IRegistrationData";
import { ILoginData } from "../../types/ILoginData";


interface IError {
    msg: string;
    param: string;
}

type TSetErrRegistration = (error: IErrorRegistration) => void;
type TSetErrLogin = (error: IErrorLogin) => void;

export const UserActions = {
    setAuth: (isAuth: boolean): SetAuthAction => ({ type: UserActionTypes.SET_AUTH, payload: isAuth }),
    setIsLoading: (isLoading: boolean): SetLoadingAction => ({ type: UserActionTypes.SET_LOADING, payload: isLoading }),
    setUser: (userData: IUser | null): SetUserAction => ({
        type: UserActionTypes.SET_USER,
        payload: { userData }
    }),


    registration: ({ email, nickname, password }: IRegistrationData, setError: TSetErrRegistration) => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.registration({ email, password, nickname });
            localStorage.setItem("token", response.data.accessToken);
            setError({});
            dispatch(UserActions.setUser(response.data.user));
            dispatch(UserActions.setAuth(true));
        } catch (e: any) {
            const possibleError: IError[] = e.response.data.errors;
            if (possibleError.length !== 0) {
                const errors: IErrorRegistration = {};
                possibleError.forEach((error) => {
                    errors[error.param as keyof IErrorRegistration] = error.msg;
                });
                setError(errors);
            }
            throw e;
        }
    },

    login: ({ email, password }: ILoginData, setError: TSetErrLogin) => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.login({ email, password });
            localStorage.setItem("token", response.data.accessToken);
            setError({});
            dispatch(UserActions.setUser(response.data.user));
            dispatch(UserActions.setAuth(true));
        } catch (e: any) {
            const possibleError: IError[] = e.response.data.errors;
            if (possibleError.length !== 0) {
                const errors: IErrorLogin = {};
                possibleError.forEach((error) => {
                    errors[error.param as keyof IErrorLogin] = error.msg;
                });
                setError(errors);
            }
            throw e;
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActions.setIsLoading(true));
            await UserService.logout();
            localStorage.removeItem("token");
            dispatch(UserActions.setAuth(false));
            dispatch(UserActions.setUser(null));
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(UserActions.setIsLoading(false));
        }
    },

    checkAuth: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActions.setIsLoading(true));
            const response = await UserService.checkAuth();
            localStorage.setItem("token", response.data.accessToken);
            dispatch(UserActions.setUser(response.data.user));
            dispatch(UserActions.setAuth(true));
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(UserActions.setIsLoading(false));
        }
    },

    uploadAvatar: (newAvatar: FormData) => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.uploadAvatar(newAvatar);
            dispatch(UserActions.setUser(response.data));
        } catch (e) {
            console.error(e)
        }
    },


    deleteAvatar: (id: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.deleteAvatar(id);
            dispatch(UserActions.setUser(response.data));
        } catch (e) {
            console.error(e)
        }
    }
}