import axios, { InternalAxiosRequestConfig } from "axios";

import env from "../config/env";

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }
  return config;
}

export const api = axios.create({
  baseURL: env.VITE_BASE_URL,
  withCredentials: true
})

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log("An Error has occurred", { description: message });
    // useNotifications.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });
    console.error(error);

    return Promise.reject(error);
  },
)
