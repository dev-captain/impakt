import { useToast } from '@chakra-ui/react';
import { GetUserRes, LoginReq, PostUserReq, RequestPasswordResetReq } from '@impakt-dev/api-client';
import { AxiosError } from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { authInstance, RefreshToken, UserInstance } from '../lib/impakt-dev-api-client/init';
import { signInInput, signUpInput } from './types/UserTypes';

interface UserContextI {
  signIn: (payload: signInInput) => Promise<void>;
  signUp: (payload: signUpInput) => Promise<void>;
  signOut: () => Promise<void>;
  user: GetUserRes | null;
  requestPasswordResetByEmail: (requestPasswordResetReq: RequestPasswordResetReq) => Promise<void>;
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

  const signUp = useCallback(async (payload: PostUserReq) => {
    await UserInstance.userControllerCreate(payload);
  }, []);

  const requestPasswordResetByEmail = useCallback(
    async (requestPasswordResetReq: RequestPasswordResetReq) => {
      try {
        await authInstance.authControllerRequestPasswordReset(requestPasswordResetReq);
        toast({
          title: 'Success',
          description: 'We have e-mailed your password reset link!',
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
      } catch (err: any) {
        const { statusCode } = err;
        if (statusCode && statusCode >= 400 && statusCode < 500) {
          toast({
            title: 'Error',
            description: err.message,
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
    },
    [],
  );

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
    } catch (err: any) {
      if (err && err.statusCode === 401) {
        await RefreshToken();
        signOut();

        return;
      }

      toast({
        title: 'Error',
        description: err.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ signIn, signUp, signOut, user, requestPasswordResetByEmail }}>
      {children}
    </UserContext.Provider>
  );
};
