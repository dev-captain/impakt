import { Box, FormControl, useToast, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { LoginReq } from '@impakt-dev/api-client';
import { useState } from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInMember } from '../../../lib/redux/slices/member/actions/signInMember';
import { parseUrlQueryParamsToKeyValuePairs } from '../../../utils';
import { InputGroupPropsI } from '../../common/InputGroup';
import signInFormYupScheme from '../../../lib/yup/schemas/signInYupScheme';

const SignInForm: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toast = useToast();
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const dispatch = useAppDispatch();
  const isMemberAuthLoading = useAppSelector((state) => state.memberAuth.isLoading);

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
      autoFocus: true,
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
          {isShowPassword ? <I.EyeOff width="24px" height="24px" /> : <I.Eye />}
        </Box>
      ),
      onChange,
      type: isShowPassword ? 'text' : 'password',
      label: 'Password',
      name: 'password',
      helpText: {
        text: 'Forgot password?',
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
          <Common.ImpaktButton
            isLoading={isMemberAuthLoading}
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
