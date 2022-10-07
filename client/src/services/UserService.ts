import axios, { AxiosResponse } from "axios";
import { IUserPersonalData } from '../components/screens/ProfileInfo/ProfileInfo';
import $api, { API_URL } from "../http";
import { IAuthResponse } from '../types/IAuthResponse';
import { ILoginData } from "../types/ILoginData";
import { IRegistrationData } from "../types/IRegistrationData";
import { IUser } from '../types/IUser';
import { LOGIN_ROUTE, LOGOUT_ROUTE, REGISTRATION_ROUTE } from "../utils/constants/url";


export default class UserService {
    static async login({ email, password }: ILoginData): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(`/user${LOGIN_ROUTE}`, { email, password });
    }

    static async registration({ email, password, nickname }: IRegistrationData): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(`/user${REGISTRATION_ROUTE}`, { email, password, nickname });
    }

    static async logout(): Promise<void> {
        return $api.post(`/user${LOGOUT_ROUTE}`);
    }

    static async checkAuth(): Promise<AxiosResponse<IAuthResponse>> {
        return axios.get<IAuthResponse>(`${API_URL}/user/refresh`, { withCredentials: true });
    }

    static uploadAvatar(newAvatar: FormData): Promise<AxiosResponse<IUser>> {
        return $api.post(`/user/uploadAvatar`, newAvatar);
    }

    static deleteAvatar(id: string): Promise<AxiosResponse<IUser>> {
        return $api.delete(`/user/deleteAvatar/${id}`);
    }

    static async getDataUser(id: string): Promise<AxiosResponse<IUserPersonalData>> {
        return $api.get<IUserPersonalData>(`/user/getUserData/${id}`);
    }

    static async saveUserData(id: string, data: IUserPersonalData): Promise<void> {
        return $api.post(`/user/saveUserData`, { id, data });
    }
}