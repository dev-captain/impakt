import { useToast } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import React, { createContext, useCallback, useContext } from 'react';

type signInInput = { emailOrUsername: string; password: string };

const apiBaseUrl = process.env.REACT_APP_API;
const url = `${apiBaseUrl}/iam/auth/signin`;

interface UserContextI {
  signIn: (payload: signInInput) => Promise<void>;
  // user: any | null;
  // isUserLoading: boolean;
  // signInWithGoogle: () => Promise<void>;
  // signOutCurrentAuth: () => Promise<void>;
  // isUserLoggedIn: () => boolean;
  // signInWithPasswordAndEmail: (emailAndPassword: any) => Promise<void>;
  // createUserWithEmailPasswordAndDisplayName: (
  //   emailAndPassword: any & {
  //     displayName: string;
  //   },
  // ) => Promise<void>;
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
  const toast = useToast();
  // const [user, setUser] = React.useState(null);
  // const [isUserLoading, setIsUserLoading] = React.useState<boolean>(true);

  // const signOut = async () => {
  // await signOut(auth)
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((error) => {
  //     alert(error);
  //     // An error happened.
  //   });
  // };

  // const signInWithPasswordAndEmail = async ({ email, password }: UserRequiredInput) => {};

  // const createUserWithEmailPasswordAndDisplayName = async ({}: { displayName: string }) => {};

  // listen for any changes on auth
  // React.useEffect(() => {
  //   const unlisten = auth.onAuthStateChanged((authUser) => {
  //     setUser(authUser);
  //     setIsUserLoading(false);
  //   });
  //   return () => {
  //     unlisten();
  //   };
  // }, []);
  const signIn = useCallback(async (payload: signInInput) => {
    try {
      await axios.post(url, payload);
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
  return <UserContext.Provider value={{ signIn }}>{children}</UserContext.Provider>;
};
