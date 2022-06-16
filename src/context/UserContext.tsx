import { useToast } from '@chakra-ui/react';
import { GetUserRes, LoginReq, PostUserReq } from '@impakt-dev/api-client';
import { AxiosError } from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { authInstance, UserInstance } from '../lib/impakt-dev-api-client/init';
import { singleSignOnInput, signInInput, signUpInput } from './types/UserTypes';

interface UserContextI {
  signIn: (payload: signInInput) => Promise<void>;
  signUp: (payload: signUpInput) => Promise<void>;
  signOut: () => Promise<void>;
  requestAccessToken: (payload: singleSignOnInput) => Promise<void>;
  user: GetUserRes | null;
}

const UserContext = createContext<UserContextI | null>(null);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('use UserContext provider must be used within the UserContext.Provider');
  }

  return context;
}

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<GetUserRes | null>(null);
  const toast = useToast();

  React.useEffect(() => {
    // TODO change with access token
    const userPersistenceData = localStorage.getItem('user');
    if (!userPersistenceData) return;
    const userData = JSON.parse(userPersistenceData);
    setUser(userData);
  }, []);

  const signIn = useCallback(async (payload: LoginReq) => {
    try {
      const userData = await authInstance.authControllerLogin(payload);
      setUser(userData);
      localStorage.setItem(
        'user',
        JSON.stringify({ ...userData, discourseRedirectUrl: undefined }),
      );
      toast({
        title: 'Success',
        description: 'Welcome !',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (err: any) {
      const { statusCode, message } = err;

      if (statusCode && statusCode >= 400 && statusCode < 500) {
        toast({
          title: 'Error',
          description: message,
          isClosable: true,
          duration: 8000,
          status: 'error',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please contact support.',
          isClosable: true,
          duration: 8000,
          status: 'error',
        });
      }
    }
  }, []);

  const signUp = useCallback(async (payload: PostUserReq) => {
    await UserInstance.userControllerCreate(payload);
  }, []);

  const signOut = useCallback(async () => {
    // TODO SIGNOUT PROCESS UNAUTORIZED ERROR WILL BE FIXED
    try {
      setUser(null);
      localStorage.removeItem('user');
      await authInstance.authControllerLogout();
      toast({
        title: 'Success',
        description: 'You have successfully logged out!',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (err) {
      const error = err as AxiosError;
      const { status } = error.response ?? {};
      if (status && status >= 400 && status < 500) {
        toast({
          title: 'Error',
          description:
            error.response?.data.message && error.response.data.message.length > 1
              ? error.response.data.message
              : 'Something went wrong.Please contact support.',
          isClosable: true,
          duration: 8000,
          status: 'error',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please contact support.',
          isClosable: true,
          duration: 8000,
          status: 'error',
        });
      }
    }
  }, []);

  const requestAccessToken = useCallback(async (payload: singleSignOnInput) => {
    try {
      const resp = await authInstance.authControllerSignAccessToken({
        discoursePayload: payload.DiscoursePayload,
        discourseSig: payload.DiscourseSig,
      });
      setUser(resp);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ signIn, signUp, signOut, requestAccessToken, user }}>
      {children}
    </UserContext.Provider>
  );
};
