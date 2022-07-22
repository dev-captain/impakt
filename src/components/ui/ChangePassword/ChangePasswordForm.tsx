import { Box, FormControl, useToast, VStack } from '@chakra-ui/react';
import * as React from 'react';
import * as yup from 'yup';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

import { InputGroupPropsI } from '../../common/InputGroup';

const changePasswordFormYupScheme = yup.object().shape({
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm Password is required field'),
});

const apiBaseUrl = process.env.REACT_APP_API;

const ChangePasswordForm: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const [isUpdateButtonLoading, setIsUpdateButtonLoading] = React.useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const toast = useToast();
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
    getValues,
  } = useForm({
    resolver: yupResolver(changePasswordFormYupScheme),
  });

  React.useEffect(() => {
    register('password');
    register('passwordConfirmation');
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
  };

  const handleChangePasswordFormSubmit = async (data: any) => {
    const { password } = data as { password: string };
    setIsUpdateButtonLoading(true);
    const url = `${apiBaseUrl}/iam/auth/passwordReset/${token}`;
    try {
      await axios.post(url, { password });
      toast({
        title: 'Success',
        description: 'Your password was changed, you can now login in the Impakt app.',
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
          description: 'Your link is invalid or has expired. Please request a new link.',
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
    setIsUpdateButtonLoading(false);
  };

  const inputItems: InputGroupPropsI[] = [
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
      errorMsg: errors?.password?.message,
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
      label: 'Confirm password',
      name: 'passwordConfirmation',
      errorMsg: errors?.passwordConfirmation?.message,
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
      onSubmit={handleSubmit(handleChangePasswordFormSubmit)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <VStack m="0 !important" w="full">
        <Box w={{ base: 'full', lg: '313px' }}>
          <Common.ImpaktButton
            isDisabled={!getValues('password')}
            isLoading={isUpdateButtonLoading}
            type="submit"
            leftIcon={<I.SendIcon />}
            size="lg"
          >
            Update
          </Common.ImpaktButton>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default ChangePasswordForm;
