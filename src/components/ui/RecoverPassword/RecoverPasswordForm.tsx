import { Box, FormControl, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'hooks';

import { InputGroupPropsI } from '../../common/InputGroup';
import recoverPasswordFormYupScheme from '../../../lib/yup/schemas/recoverPasswordScheme';
import { useAuthControllerRequestPasswordReset } from '../../../lib/impakt-dev-api-client/react-query/auth/auth';
import { renderToast } from '../../../utils';

const RecoverPasswordForm: React.FC = () => {
  const resetPassword = useAuthControllerRequestPasswordReset();
  const { handleSubmit, errors, getValues, setValue } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(recoverPasswordFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const handleRecoverPasswordFormSubmit = async (data: any) => {
    const { email } = data as { email: string };

    resetPassword.mutate(
      { data: { email } },
      {
        onSuccess: () => {
          renderToast('success', 'We have e-mailed your password reset link!', 'dark');
        },
        onError: (e) => {
          renderToast('error', e.response?.data.message ?? 'Something went wrong', 'dark');
        },
      },
    );
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
            variant="primary"
            isDisabled={!getValues('email')}
            isLoading={resetPassword.isLoading}
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
