import { Box, FormControl, useToast, VStack } from '@chakra-ui/react';
import * as React from 'react';
import * as yup from 'yup';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginReq } from '@impakt-dev/api-client';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import ImpaktButton from '../../common/ImpaktButton';
import { signInMember } from '../../../lib/redux/slices/member/actions/signInMember';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { requestAccessToken } from '../../../lib/redux/slices/member/actions/requestAccessToken';
import { parseUrlQueryParamsToKeyValuePairs } from '../../../utils';
import { Eye } from '../../icons';
import { InputGroupPropsI } from '../../common/InputGroup';

const signInFormYupScheme = yup.object().shape({
  email: yup
    .string()
    .email('Email field should be a valid email')
    .required('Email is required field')
    .default(''),
  password: yup.string().required('Password is required field'),
});

const SignInForm: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toast = useToast();
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const requestAccessTokenAttemp = useAppSelector(
    (state) => state.memberAuth.requestAccessTokenAttemptCount,
  );
  const isMemberAuthLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
  } = useForm({
    resolver: yupResolver(signInFormYupScheme),
  });

  React.useEffect(() => {
    register('email');
    register('password');
  }, []);

  const requestAccessTokenAsync = React.useCallback(async () => {
    toast({
      title: 'Logging in to forums',
      duration: 2000,
      status: 'info',
    });

    try {
      const request = await dispatch(
        requestAccessToken({
          discoursePayload: queryString.sso,
          discourseSig: queryString.sig,
        }),
      ).unwrap();

      if (request.discourseRedirectUrl === undefined) {
        toast({
          title: 'Error',
          description: ' "Something went wrong...',
          isClosable: false,
          duration: 2000,
          status: 'error',
        });

        return undefined;
      }

      toast({
        title: 'Success',
        description: ' "Redirecting to forums..',
        isClosable: false,
        duration: 2000,
        status: 'success',
      });

      return request.discourseRedirectUrl;
    } catch (error: any) {
      return null;
    }
  }, []);

  React.useEffect(() => {
    if (member) {
      if (queryString.DiscourseConnect) {
        if (requestAccessTokenAttemp === 0) {
          const request = requestAccessTokenAsync();
          request.then((res) => {
            if (res) {
              window.location.href = res;
            }
          });

          return;
        }
      }

      if (requestAccessTokenAttemp === 0) {
        navigate('/dashboard');
      }
    }
  }, [member, requestAccessTokenAttemp]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
  };

  const handleSignInFormSubmit = async (data: any) => {
    const { email, password } = data as { email: string; password: string };

    const signInPayload: LoginReq & { discoursePayload?: any; discourseSig?: any } = {
      emailOrUsername: email,
      password,
    };

    if (queryString.DiscourseConnect) {
      signInPayload.discoursePayload = queryString.sso;
      signInPayload.discourseSig = queryString.sig;
    }

    await dispatch(signInMember(signInPayload)).unwrap();

    toast({
      title: 'Success',
      description: 'Welcome !',
      isClosable: true,
      duration: 8000,
      status: 'success',
    });
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'your@mail.com',
      leftIcon: <I.Email />,
      onChange,
      type: 'email',
      name: 'email',
      label: 'Email',
      errorMsg: errors?.email?.message,
    },
    {
      placeholder: '********',
      leftIcon: <I.Password />,
      rightIcon: (
        <Box
          h="100%"
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          <Eye />
        </Box>
      ),
      onChange,
      type: isShowPassword ? 'text' : 'password',
      label: 'Password',
      name: 'password',
      helpText: {
        text: 'Forgot password?',
        as: 'a',
        href: '/recover-password',
      },
      errorMsg: errors?.password?.message,
    },
  ];

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 !important"
      rowGap="32px"
      as="form"
      onSubmit={handleSubmit(handleSignInFormSubmit)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <VStack m="0 !important" w="full">
        <Box w={{ base: 'full', lg: '240px' }}>
          <ImpaktButton
            isLoading={isMemberAuthLoading}
            type="submit"
            leftIcon={<I.EnterIcon width="24" height="24" />}
            size="lg"
          >
            Sign In
          </ImpaktButton>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default SignInForm;
