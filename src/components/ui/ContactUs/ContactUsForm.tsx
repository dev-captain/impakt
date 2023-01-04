import { Box, FormControl, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Common, I } from '@/components';
import { useForm } from '@/hooks';

import { InputGroupPropsI } from '../../common/InputGroup';
import contactUsYupScheme from '../../../lib/yup/schemas/contactUsYupScheme';
import useContactUs from '../../../hooks/useContactUs';

const ContactUsForm: React.FC = () => {
  const { sendData, loading } = useContactUs();

  const { handleSubmit, reset, getValues, errors, setValue } = useForm({
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

    await sendData({
      email,
      name: memberName,
      message,
      subject: topic,
      isSubscribed: false,
    }).finally(() => {
      reset({ email: '', memberName: '', message: '', topic: '' });
    });
  };

  const inputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        onChange,
        placeholder: 'John',
        name: 'memberName',
        type: 'text',
        value: getValues('memberName'),
        autoFocus: true,
      },
      inputLabelProps: {
        label: 'Your name',
      },
      inputElementProps: {
        left: { item: <I.NickNameIcon /> },
      },
      errorMsg: errors?.memberName?.message,
    },
    {
      inputProps: {
        placeholder: 'your@mail.com',
        onChange,
        type: 'email',
        name: 'email',
        value: getValues('email'),
      },
      inputElementProps: {
        left: { item: <I.Email /> },
      },
      inputLabelProps: {
        label: 'Email',
      },
      errorMsg: errors?.email?.message,
    },
    {
      inputProps: {
        placeholder: 'Your Topic',
        onChange,
        type: 'text',
        name: 'topic',
        value: getValues('topic'),
      },
      inputElementProps: { left: { item: <I.InfoIcon /> } },
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
          value={getValues('message')}
          labelText="Message"
          errMsg={errors.message?.message}
          onChange={onChange}
        />
      </Box>

      <VStack m="0 !important" w="full">
        <Box w={{ base: 'full', lg: '240px' }}>
          <Common.ImpaktButton
            variant="primary"
            isLoading={loading}
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
