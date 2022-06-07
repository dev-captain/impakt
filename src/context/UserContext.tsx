import { useToast } from '@chakra-ui/react';
import { GetUserRes, LoginReq } from '@impakt-dev/api-client';
import axios, { AxiosError } from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { authInstance } from '../lib/impakt-dev-api-client/init';
import { signInInput, signUpInput, User } from './types/UserTypes';

const apiBaseUrl = process.env.REACT_APP_API;
const signInUrl = `${apiBaseUrl}/iam/auth/signin`;
const signUpUrl = `${apiBaseUrl}/iam/user`;
// const signOutUrl = `${apiBaseUrl}/iam/auth/signout`;

interface UserContextI {
  signIn: (payload: signInInput) => Promise<void>;
  signUp: (payload: signUpInput) => Promise<void>;
  signOut: () => Promise<void>;
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
      // const userRes = await axios.post(signInUrl, payload);
      const userData = await authInstance.authControllerLogin(payload);
      // const accesstoken = await authInstance.authControllerSignAccessToken({authMethods:{Authentication:"",Refresh:""}});
      // console.log(acc);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
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

  const signUp = useCallback(async (payload: signUpInput) => {
    await axios.post(signUpUrl, payload);
  }, []);

  const signOut = useCallback(async () => {
    // TODO SIGNOUT PROCESS UNAUTORIZED ERROR WILL BE FIXED
    try {
      await authInstance.authControllerLogout();
      setUser(null);
      localStorage.removeItem('user');
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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ signIn, signUp, signOut, user }}>
      {children}
    </UserContext.Provider>
  );
};
