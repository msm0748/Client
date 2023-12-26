import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
});

async function refreshToken() {
  const refreshToken = getCookie('refreshToken');
  try {
    const response = await axiosInstance.post('/auth/refresh', {
      refreshToken,
    });
    const data = response.data.accessToken;
    return data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}

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

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.data.message === '토큰 만료') {
      try {
        const accessToken = await refreshToken();

        setCookie('accessToken', accessToken);
        originalRequest.headers.Authorization = 'Bearer ' + accessToken;

        return axios(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);
