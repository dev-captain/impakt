import { Box, Flex, FormControl, Input, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import ImpaktButton from '../../common/ImpaktButton';

const SignInForm: React.FC = () => {
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(event);
  };

  const inputItems: {
    leftIcon?: any;
    rightIcon?: any;
    placeholder?: string | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    label?: string | undefined;
    helpText?: {
      onClick: () => void;
      text: string;
    };
  }[] = [
    {
      placeholder: 'your@mail.com',
      leftIcon: <I.Email />,
      onChange: onChangeEmail,
      type: 'email',
      label: 'Email',
    },
    {
      placeholder: '********',
      leftIcon: <I.Password />,
      rightIcon: <I.Eye />,
      onChange: onChangeEmail,
      type: 'password',
      label: 'Password',
      helpText: { text: 'Forgot password?', onClick: () => null },
    },
  ];

  return (
    <VStack
      m="0 !important"
      rowGap="32px"
      justifyContent="flex-start"
      alignItems="flex-start"
      as="form"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <VStack m="0 !important" w="full">
        <Box w="240px">
          <ImpaktButton leftIcon={<I.EnterIcon width="24" height="24" />} size="lg">
            Sign In
          </ImpaktButton>
        </Box>
      </VStack>
    </VStack>
  );
};

export default SignInForm;
