// custom-instance.ts
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { authControllerSignAccessToken } from './react-query/auth/auth';

const API_SERVER_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';
export const AXIOS_INSTANCE = Axios.create({
  baseURL: API_SERVER_BASE_URL,
  withCredentials: true,
}); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();

  AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (error.response?.status === 403 && (!originalRequest as any).retry) {
        (originalRequest as any).retry = true;
        try {
          await refreshAccessToken();
        } catch (e) {
          Promise.reject(error);
        }

        return AXIOS_INSTANCE(originalRequest);
      }

      return Promise.reject(error);
    },
  );

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

const refreshAccessToken = async () => {
  await authControllerSignAccessToken({});
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;
