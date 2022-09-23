import axios from "axios";
import AuthService from "../services/AuthService";

export const API_URL = "http://localhost:5000/api";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use(config => {
    config!.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});


$api.interceptors.response.use(config => {
    return config;
}, (async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await AuthService.checkAuth();
            console.log(response.data)
            localStorage.setItem("token", response.data.accessToken);
            return $api.request(originalRequest);
        }catch (e) {
            console.log("Не авторизован");
        }
    }
    return Promise.reject(error);
}));


export default $api;