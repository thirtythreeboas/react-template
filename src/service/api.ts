import axios, {AxiosInstance} from 'axios';

const REQUEST_TIMEOUT = 5000;

const initApi = (): AxiosInstance => {
  const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return API;
};

export const API = initApi();
