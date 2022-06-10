import {
  UsersApi,
  createConfiguration,
  AuthApi,
  RequestContext,
  HttpMethod,
  ResponseContext,
  GodlAccountApi,
} from '@impakt-dev/api-client';
import axios from 'axios';
import { Observable } from '@impakt-dev/api-client/dist/rxjsStub';
import { API_BASE_URL, apiAxiosInstance } from '../axios/api';

export const RefreshToken = async () => {
  await apiAxiosInstance
    .post('api/v1/iam/auth/refresh')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const configuration = createConfiguration({
  baseServer: {
    makeRequestContext: (endpoint: string, method: HttpMethod) =>
      new RequestContext(`${API_BASE_URL}${endpoint}`, method),
  },
  httpApi: {
    send: (request: RequestContext) =>
      new Observable(
        new Promise((resolve, reject) => {
          axios({
            method: request.getHttpMethod() as any,
            data: request.getBody(),
            headers: request.getHeaders(),
            url: request.getUrl(),
            withCredentials: true,
            transformResponse: (x) => x,
          })
            .then((resp) => {
              resolve(
                new ResponseContext(resp.status, resp.headers, {
                  text: async () => resp.data,
                  binary: async () => resp.data,
                }),
              );
            })
            .catch(async (err) => {
              console.log('error on client library', err.response);
              const error = JSON.parse(err.response.data);
              if (error.statusCode === 401) {
                // await RefreshToken();
                error.message = 'Something went wrong please try again';
                reject(error);
              } else {
                // console.log(error);
                reject(JSON.parse(err.response.data));
              }
            });
        }),
      ),
  },
});

export const authInstance = new AuthApi(configuration);
export const godlInstance = new GodlAccountApi(configuration);
export const UserInstance = new UsersApi(configuration);
