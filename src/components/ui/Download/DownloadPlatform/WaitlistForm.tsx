import * as React from 'react';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Box, Text, VStack } from '@chakra-ui/react';

import waitlistYupScheme from '../../../../lib/yup/schemas/waitlistYupScheme';
import { Common } from '../../..';
import { renderToast } from '../../../../utils';

// TODO move to client library
const sendMailAsContact = async (email: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/mail/mailing-list/add-contact`,
    {
      email,
      mailingListIds: [process.env.REACT_APP_MOBILE_WAITLIST_ID],
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  return response.data;
};

const WaitlistForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleSubmit, getValues, setValue, errors, reset } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(waitlistYupScheme),
  });
  const handleOnSubmitWaitlistForm = async (data: any) => {
    setIsLoading(true);
    const { email }: { email: string } = data;
    if (!email) return;
    await sendMailAsContact(email).then(() => {
      reset({ email: '' });
      renderToast('success', 'Email added to waitlist successfully.', 'dark');
    });
    setIsLoading(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  return (
    <VStack as="form" rowGap="12px" onSubmit={handleSubmit(handleOnSubmitWaitlistForm)} w="full">
      <Common.InputGroup
        label="Email"
        whiteMode
        value={getValues('email')}
        errorMsg={errors.email?.message}
        placeholder="hello@mail.com"
        name="email"
        onChange={onChange}
      />
      <Box h="50px" w="75%">
        <Common.ImpaktButton
          h="full"
          variant="black"
          isLoading={isLoading}
          isDisabled={isLoading}
          type="submit"
        >
          <Text>Join the waitlist</Text>
        </Common.ImpaktButton>
      </Box>
    </VStack>
  );
};

export default WaitlistForm;
