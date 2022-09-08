import {IAuthResponse} from '../types/IAuthResponse';
import $api, {API_URL} from "../http";
import {AxiosResponse} from "axios";
import {LOGIN_ROUTE, LOGOUT_ROUTE, REGISTRATION_ROUTE} from "../utils/constants/url";
import {ILoginData} from "../types/ILoginData";
import {IRegistrationData} from "../types/IRegistrationData";
import axios from "axios";

export default class AuthService {
    static async login({email, password}: ILoginData): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(`/user${LOGIN_ROUTE}`, {email, password});
    }

    static async registration({email, password, nickname}: IRegistrationData): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(`/user${REGISTRATION_ROUTE}`, {email, password, nickname});
    }

    static async logout(): Promise<void> {
        return $api.post(`/user${LOGOUT_ROUTE}`);
    }

    static async checkAuth(): Promise<AxiosResponse<IAuthResponse>> {
        return axios.get<IAuthResponse>(`${API_URL}/user/refresh`, {withCredentials: true});
    }
}