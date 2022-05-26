import { useToast } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { signInInput, User } from './types';

const apiBaseUrl = process.env.REACT_APP_API;
const url = `${apiBaseUrl}/iam/auth/signin`;

interface UserContextI {
  signIn: (payload: signInInput) => Promise<void>;
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);
  const toast = useToast();

  React.useEffect(() => {
    // TODO change with access token
    const userPersistenceData = localStorage.getItem('user');
    if (!userPersistenceData) return;
    const userData = JSON.parse(userPersistenceData);
    setUser(userData as User);
  }, []);

  const signIn = useCallback(async (payload: signInInput) => {
    try {
      const userRes = await axios.post(url, payload);
      setUser(userRes.data);
      localStorage.setItem('user', JSON.stringify(userRes.data));
      toast({
        title: 'Success',
        description: 'Welcome !',
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

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <UserContext.Provider value={{ signIn, user }}>{children}</UserContext.Provider>;
};
