import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

const userAxios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});


userAxios.interceptors.request.use(function (config: any) {
    let token = getCookie('userToken')
    config.headers = {
        "Authorization": `Bearer ${token}`,
    }
    console.log("interceptor run");
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


const adminAxios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
});


adminAxios.interceptors.request.use(function (config: any) {
    let token = getCookie('adminToken')
    config.headers = {
        "Authorization": `Bearer ${token}`,
    }
    console.log("interceptor run");
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default  {userAxios, adminAxios}