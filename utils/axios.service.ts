import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

const axiosContainer = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
});

axiosContainer.interceptors.request.use(function (config: any) {
    let token = getCookie('userToken')
    config.headers = {
        "Authorization": `Bearer ${token}`,
    }
    // Do something before request is sent
    console.log("interceptor run");
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosContainer