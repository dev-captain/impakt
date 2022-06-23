import { createStandaloneToast } from '@chakra-ui/react';
import { GetUserRes, LoginReq, PostUserReq, RequestPasswordResetReq } from '@impakt-dev/api-client';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { authInstance, UserInstance } from '../lib/impakt-dev-api-client/init';
import { singleSignOnInput, signInInput, signUpInput } from './types/UserTypes';

interface UserContextI {
  signIn: (payload: signInInput) => Promise<void>;
  signUp: (payload: signUpInput) => Promise<void>;
  signOut: () => Promise<void>;
  requestAccessToken: (payload: singleSignOnInput) => Promise<void>;
  user: (GetUserRes & { discourseRedirectUrl?: string }) | null;
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
  const [user, setUser] = useState<(GetUserRes & { discourseRedirectUrl?: string }) | null>(null);
  const toast = createStandaloneToast();

  React.useEffect(() => {
    // TODO change with access token
    const userPersistenceData = localStorage.getItem('user');
    if (!userPersistenceData) return;
    const userData = JSON.parse(userPersistenceData);
    setUser(userData);
  }, []);

  const signIn = useCallback(async (payload: LoginReq) => {
    const userData = await authInstance.authControllerLogin(payload);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify({ ...userData, discourseRedirectUrl: undefined }));
    toast({
      title: 'Success',
      description: 'Welcome !',
      isClosable: true,
      duration: 8000,
      status: 'success',
    });
  }, []);

  const signUp = useCallback(async (payload: PostUserReq) => {
    await UserInstance.userControllerCreate(payload);
  }, []);

  const requestPasswordResetByEmail = useCallback(
    async (requestPasswordResetReq: RequestPasswordResetReq) => {
      await authInstance.authControllerRequestPasswordReset(requestPasswordResetReq);
      toast({
        title: 'Success',
        description: 'We have e-mailed your password reset link!',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    },
    [],
  );

  const signOut = useCallback(async () => {
    // TODO SIGNOUT PROCESS UNAUTORIZED ERROR WILL BE FIXED
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
  }, []);

  const requestAccessToken = useCallback(async (payload: singleSignOnInput) => {
    toast({
      title: 'Logging in to forums',
      duration: 2000,
      status: 'info',
    });

    const resp = await authInstance.authControllerSignAccessToken({
      discoursePayload: payload.DiscoursePayload,
      discourseSig: payload.DiscourseSig,
    });

    toast({
      title: 'Success',
      description: ' "Redirecting to forums..',
      isClosable: false,
      duration: 2000,
      status: 'success',
    });

    setUser(resp);
  }, []);

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ signIn, signUp, signOut, user, requestPasswordResetByEmail, requestAccessToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
