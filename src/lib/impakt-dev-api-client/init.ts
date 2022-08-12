import { createStandaloneToast } from '@chakra-ui/react';
import {
  UsersApi,
  createConfiguration,
  AuthApi,
  RequestContext,
  HttpMethod,
  ResponseContext,
  GodlAccountApi,
  FitnessStatsApi,
  ReferralsApi,
} from '@impakt-dev/api-client';
import { Observable } from '@impakt-dev/api-client/dist/rxjsStub';
import axios from '../axios/api';
import theme from '../../theme/index';

const API_SERVER_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';

const toast = createStandaloneToast({ theme });

export const configuration = createConfiguration({
  baseServer: {
    makeRequestContext: (endpoint: string, method: HttpMethod) =>
      new RequestContext(`${API_SERVER_BASE_URL}${endpoint}`, method),
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
            .catch(async (err: any) => {
              const error: { statusCode: number; message: string } = {
                statusCode: 500,
                message: 'Something went wrong...',
              };
              if (axios.isAxiosError(err)) {
                if (typeof err.response?.data === 'string') {
                  const errorRes = JSON.parse(err.response.data) as {
                    statusCode: number;
                    message: string;
                  };

                  error.statusCode = errorRes.statusCode ?? 500;
                  error.message = errorRes.message ?? 'Something went wrong..';
                  if (error.statusCode >= 400 && error.statusCode < 500) {
                    if (Array.isArray(error.message)) {
                      error.message.forEach((message) => {
                        toast({
                          description: message,
                          status: 'error',
                          duration: 4000,
                          isClosable: true,
                        });
                      });
                    } else {
                      toast({
                        description: error.message,
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                      });
                    }
                  }

                  return reject(error);
                }

                return reject(error);
              }

              return reject(error);
            });
        }),
      ),
  },
});

export const authInstance = new AuthApi(configuration);
export const godlInstance = new GodlAccountApi(configuration);
export const UserInstance = new UsersApi(configuration);
export const FitnessInstance = new FitnessStatsApi(configuration);
export const ReferralsInstance = new ReferralsApi(configuration);
