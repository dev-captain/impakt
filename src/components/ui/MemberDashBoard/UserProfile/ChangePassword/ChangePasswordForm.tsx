import { Box, FormControl, useToast, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { Common, I } from '@/components';
import { useForm } from '@/hooks';

import { InputGroupPropsI } from '../../../../common/InputGroup';
import changePasswordFormYupScheme from '../../../../../lib/yup/schemas/changePasswordYupScheme';

const apiBaseUrl = import.meta.env.VITE_API;

const ChangePasswordForm: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const [isUpdateButtonLoading, setIsUpdateButtonLoading] = React.useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const toast = useToast();

  const { handleSubmit, setValue, errors, getValues } = useForm({
    defaultValues: { oldpassword: '', password: '', passwordConfirmation: '' },
    resolver: yupResolver(changePasswordFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
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

  const oldInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: '********',
        onChange,
        type: isShowPassword ? 'text' : 'password',
        name: 'oldPassword',
        autoFocus: true,
      },
      inputElementProps: {
        left: { item: <I.LockIcon color="#29323B" width="20px" height="20px" /> },
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
              {isShowPassword ? (
                <I.EyeOff color="#29323B" width="24px" height="24px" />
              ) : (
                <I.Eye color="#29323B" />
              )}
            </Box>
          ),
        },
      },
      whiteMode: true,
      errorMsg: errors?.password?.message,
    },
  ];
  const newInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: '********',
        onChange,
        type: isShowPassword ? 'text' : 'password',
        name: 'password',
      },
      inputElementProps: {
        left: { item: <I.LockIcon color="#29323B" width="20px" height="20px" /> },
        right: {
          item: (
            <Box
              h="100%"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="0px"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <I.EyeOff color="#29323B" width="24px" height="24px" />
              ) : (
                <I.Eye color="#29323B" />
              )}
            </Box>
          ),
        },
      },
      whiteMode: true,
      errorMsg: errors?.password?.message,
    },
  ];

  const confirmInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: '********',
        onChange,
        type: isShowPassword ? 'text' : 'password',
        name: 'passwordConfirmation',
      },
      inputElementProps: {
        left: { item: <I.LockIcon color="#29323B" width="20px" height="20px" /> },
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
              {isShowPassword ? (
                <I.EyeOff color="#29323B" width="24px" height="24px" />
              ) : (
                <I.Eye color="#29323B" />
              )}
            </Box>
          ),
        },
      },
      whiteMode: true,
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
      rowGap="12px"
      as="form"
      onSubmit={handleSubmit(handleChangePasswordFormSubmit)}
      autoComplete="off"
      w="full"
    >
      <Text
        w="100%"
        fontSize={{ base: 'regular2', md: 'regular3' }}
        color="#4E6070"
        fontWeight="500"
      >
        Old Password:
      </Text>
      <Common.InputItems inputItems={oldInputItems} />
      <Text
        w="100%"
        fontSize={{ base: 'regular2', md: 'regular3' }}
        color="#4E6070"
        fontWeight="500"
      >
        New Password:
      </Text>
      <Common.InputItems inputItems={newInputItems} />
      <Text
        w="100%"
        fontSize={{ base: 'regular2', md: 'regular3' }}
        color="#4E6070"
        fontWeight="500"
      >
        Confirm Password:
      </Text>
      <Common.InputItems inputItems={confirmInputItems} />
      <HStack m="0 !important" w="full" justifyContent="end">
        <Box w={{ base: '100%', md: '121px' }} h="48px">
          <Common.ImpaktButton
            variant="primary"
            isDisabled={!getValues('password')}
            isLoading={isUpdateButtonLoading}
            type="submit"
            bgGradient="linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))"
            leftIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00081 17.3332C4.40054 17.3281 0.672532 13.6001 0.66748 8.99985V8.83318C0.75909 4.25363 4.52964 0.606482 9.10971 0.667252C13.6898 0.728022 17.3622 4.47392 17.3323 9.0543C17.3024 13.6347 13.5813 17.3323 9.00081 17.3332ZM5.17581 8.65818L4.00081 9.83318L7.33415 13.1665L14.0008 6.49985L12.8258 5.31652L7.33415 10.8082L5.17581 8.65818Z"
                  fill="white"
                />
              </svg>
            }
          >
            Save
          </Common.ImpaktButton>
        </Box>
      </HStack>
    </FormControl>
  );
};

export default ChangePasswordForm;
