import { UserAction, UserActionTypes, UserState } from "../../types/user";


const defaultState: UserState = {
    userData: null,
    isAuth: false,
    isLoading: false,
};

export const userReducer = (state = defaultState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return { ...state, userData: action.payload.userData };
        case UserActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload };
        case UserActionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}