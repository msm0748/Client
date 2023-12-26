import axios from 'axios';
import { getCookie } from 'cookies-next';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getCookie('accessToken');
    config.headers.Authorization = 'Bearer ' + accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
