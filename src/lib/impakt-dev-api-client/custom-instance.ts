// custom-instance.ts
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { sendExceptionToSentry } from '../../utils/sentry';
import { usePersistedAuthStore } from '../zustand';

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  // eslint-disable-next-line prefer-const
  // 1200

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

const createAxiosResponseInterceptor = () => {
  const interceptor = AXIOS_INSTANCE.interceptors.response.use(
    (response) => response,
    (error: any) => {
      // Reject promise if usual error
      if (
        process.env.REACT_APP_VERCEL_ENV === 'production' ||
        process.env.REACT_APP_VERCEL_ENV === 'preview'
      ) {
        sendExceptionToSentry(error, authStorePersisted.getState().member, error.config.data);
      }

      if (error.response?.status !== 401) {
        return Promise.reject(error);
      }

      /*
       * When response code is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response.
       *
       * Must be re-attached later on or the token refresh will only happen once
       */
      AXIOS_INSTANCE.interceptors.response.eject(interceptor);

      return AXIOS_INSTANCE.post('/api/v1/iam/auth/refresh')
        .then(() => {
          return AXIOS_INSTANCE(error.response?.config);
        })
        .catch(() => {
          authStorePersisted.persist.clearStorage();
          window.location.href = '/signin';
        })
        .finally(createAxiosResponseInterceptor); // Re-attach the interceptor by running the method
    },
  );
};

createAxiosResponseInterceptor();

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;
