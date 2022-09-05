import {UserAction, UserActionTypes, UserState} from "../../types/user";


const defaultState: UserState = {
    user: null,
    isAuth: false,
    isLoading: false,
};

export const userReducer = (state = defaultState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {...state, user: action.payload.user, isAuth: action.payload.isAuth};
        case UserActionTypes.SET_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
}