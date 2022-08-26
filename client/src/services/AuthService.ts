import { AuthResponse } from './../types/types';
import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post()
    }
}