import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export const initFetchInstance = (
  config?: CreateAxiosDefaults,
): AxiosInstance => {
  const instance = axios.create({
    timeout: 10000,
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
  });

  //   interceptors
  //   instance.interceptors.request.use(
  //     (config) => {
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     },
  //   );

  return instance;
};
