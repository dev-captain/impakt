import { Box, FormControl, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from '@/components';
import { useForm } from '@/hooks';
import { yupResolver } from '@hookform/resolvers/yup';

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
      placeholder: 'John',
      leftIcon: <I.NickNameIcon />,
      onChange,
      type: 'text',
      name: 'memberName',
      label: 'Your name',
      errorMsg: errors?.memberName?.message,
      value: getValues('memberName'),
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
      value: getValues('email'),
    },
    {
      placeholder: 'Your Topic',
      leftIcon: <I.InfoIcon />,
      onChange,
      type: 'text',
      name: 'topic',
      label: 'Topic',
      errorMsg: errors?.topic?.message,
      value: getValues('topic'),
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
