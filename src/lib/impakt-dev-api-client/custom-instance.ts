// custom-instance.ts
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { usePersistedAuthStore } from '../zustand';

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  // eslint-disable-next-line prefer-const
  // 1200

  AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: any) => {
      const originalRequest = error.config as any;
      if (error.response?.status === 401 && !originalRequest.retry) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        originalRequest.retry = true;
        await AXIOS_INSTANCE_REFRESH_TOKEN.post('/api/v1/iam/auth/refresh');
        AXIOS_INSTANCE(originalRequest);
      }

      throw error;
    },
  );

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then((response) => response?.data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

const API_SERVER_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';
const authStorePersisted = usePersistedAuthStore;

export const AXIOS_INSTANCE = Axios.create({
  baseURL: API_SERVER_BASE_URL,
  withCredentials: true,
}); // use your own URL here or environment variable

export const AXIOS_INSTANCE_REFRESH_TOKEN = Axios.create({
  baseURL: API_SERVER_BASE_URL,
  withCredentials: true,
}); // use your own URL here or environment variable

AXIOS_INSTANCE_REFRESH_TOKEN.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    if (error.response?.status === 401 || error.response.status === 400) {
      authStorePersisted.persist.clearStorage();
      window.location.href = '/signin';
    }
  },
);

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;
