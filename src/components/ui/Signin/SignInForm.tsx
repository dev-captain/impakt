import { Box, FormControl, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { LoginReq } from '@impakt-dev/api-client';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from '@/hooks';
import { Common, I } from '@/components';

import { parseUrlQueryParamsToKeyValuePairs, renderToast } from '../../../utils';
import { InputGroupPropsI } from '../../common/InputGroup';
import signInFormYupScheme from '../../../lib/yup/schemas/signInYupScheme';
import { useAuthControllerLogin } from '../../../lib/impakt-dev-api-client/react-query/auth/auth';
import { usePersistedAuthStore } from '../../../lib/zustand';
import { useNextParamRouter } from '../../../hooks/useNextParamRouter';
import routes from '../../../data/routes';

const SignInForm: React.FC = () => {
  const navigate = useNextParamRouter(routes.dashboard);

  const signIn = useAuthControllerLogin();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const { setMember } = usePersistedAuthStore();

  // const navigate = useNavigate();

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(signInFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
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
    await signIn.mutateAsync(
      { data: { ...signInPayload } },
      {
        onSuccess: (member) => {
          setMember(member);
          renderToast('success', `Welcome ${member.firstName ?? member.username}`);
          navigate();
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong', 'dark');
        },
      },
    );
  };

  const inputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: 'your@mail.com',
        onChange,
        type: 'email',
        name: 'email',
        autoFocus: true,
      },
      inputElementProps: { left: { item: <I.Email /> } },
      inputLabelProps: {
        label: 'Email',
      },
      errorMsg: errors?.email?.message,
    },
    {
      inputProps: {
        placeholder: '********',
        onChange,
        type: isShowPassword ? 'text' : 'password',
        name: 'password',
      },
      inputElementProps: {
        left: { item: <I.Password /> },
        right: {
          item: (
            <Box
              h="100%"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <I.EyeOff width="24px" height="24px" /> : <I.Eye />}
            </Box>
          ),
        },
      },
      inputLabelProps: {
        label: 'Password',
        helpText: {
          text: 'Forgot password?',
          href: '/recover-password',
        },
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
          <Common.ImpaktButton
            variant="primary"
            isLoading={signIn.isLoading}
            type="submit"
            leftIcon={<I.EnterIcon width="24" height="24" />}
            size="lg"
          >
            Sign In
          </Common.ImpaktButton>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default SignInForm;
