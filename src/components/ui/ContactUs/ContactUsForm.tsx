import { Box, FormControl, useToast, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { useState } from 'react';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputGroupPropsI } from '../../common/InputGroup';
import contactUsYupScheme from '../../../lib/yup/schemas/contactUsYupScheme';

const url = 'https://contact-api-email.herokuapp.com/common/contact';

const ContactUsForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { memberName: '', email: '', topic: '', message: '' },
    resolver: yupResolver(contactUsYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const handleContactUsFormSubmit = async (data: any) => {
    const { email, memberName, message, topic } = data as {
      email: string;
      message: string;
      name: string;
      memberName: string;
      topic: string;
    };

    setIsLoading(true);
    try {
      const msg = {
        subject: topic,
        text: `Name: ${memberName} - Email: ${email} \n ${message}`,
      };
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(msg),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsLoading(false);
      toast({
        description: 'You sent a message successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      setIsLoading(false);
      toast({
        description: 'Something went wrong. Please check information and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'John',
      leftIcon: <I.NickNameIcon />,
      onChange,
      type: 'text',
      name: 'memberName',
      label: 'Your name',
      errorMsg: errors?.memberName?.message,
      autoFocus: true,
    },
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
      placeholder: 'Your Topic',
      leftIcon: <I.InfoIcon />,
      onChange,
      type: 'text',
      name: 'topic',
      label: 'Topic',
      errorMsg: errors?.topic?.message,
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
      onSubmit={handleSubmit(handleContactUsFormSubmit)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <Box w="full">
        <Common.ImpaktTextareaField
          name="message"
          labelText="Message"
          errMsg={errors.message?.message}
          onChange={onChange}
        />
      </Box>

      <VStack m="0 !important" w="full">
        <Box w={{ base: 'full', lg: '240px' }}>
          <Common.ImpaktButton
            isLoading={isLoading}
            type="submit"
            leftIcon={<I.SendIcon width="24" height="24" />}
            size="lg"
          >
            Send
          </Common.ImpaktButton>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default ContactUsForm;
