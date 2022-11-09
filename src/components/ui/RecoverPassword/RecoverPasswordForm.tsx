import { Box, FormControl, useToast, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';

import { InputGroupPropsI } from '../../common/InputGroup';
import { forgotPassword } from '../../../lib/redux/slices/member/actions/forgotPassword';
import recoverPasswordFormYupScheme from '../../../lib/yup/schemas/recoverPasswordScheme';

const RecoverPasswordForm: React.FC = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const isMemberAuthLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const { handleSubmit, errors, getValues, setValue } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(recoverPasswordFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const handleRecoverPasswordFormSubmit = async (data: any) => {
    const { email } = data as { email: string };

    await dispatch(forgotPassword({ email })).unwrap();
    toast({
      title: 'Success',
      description: 'We have e-mailed your password reset link!',
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
      onSubmit={handleSubmit(handleRecoverPasswordFormSubmit)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <VStack m="0 !important" w="full">
        <Box w={{ base: 'full', lg: '313px' }}>
          <Common.ImpaktButton
            isDisabled={!getValues('email')}
            isLoading={isMemberAuthLoading}
            type="submit"
            leftIcon={<I.SendIcon />}
            size="lg"
          >
            Send a recovery link
          </Common.ImpaktButton>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default RecoverPasswordForm;
