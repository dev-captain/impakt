import * as React from 'react';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Box, Text, VStack } from '@chakra-ui/react';

import waitlistYupScheme from '../../../../lib/yup/schemas/waitlistYupScheme';
import { Common } from '../../..';
import { renderToast } from '../../../../utils';

// TODO move to client library
const sendMailAsContact = async (email: string, type: 'mobile' | 'invest') => {
  const getIds = () => {
    if (type === 'mobile') {
      return [process.env.REACT_APP_MOBILE_WAITLIST_ID];
    }

    if (type === 'invest') {
      return [process.env.REACT_APP_INVEST_WAITLIST_ID];
    }

    return [];
  };

  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/mail/mailing-list/add-contact`,
    {
      email,
      mailingListIds: getIds(),
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  return response.data;
};

const WaitlistForm: React.FC<{
  setIsSubmitted: (value: boolean) => void;
  type: 'mobile' | 'invest';
}> = ({ setIsSubmitted, type }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleSubmit, getValues, setValue, errors, reset } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(waitlistYupScheme),
  });
  const handleOnSubmitWaitlistForm = async (data: any) => {
    setIsLoading(true);
    const { email }: { email: string } = data;
    if (!email) return;
    await sendMailAsContact(email, type).then(() => {
      reset({ email: '' });
      renderToast('success', 'Email added to waitlist successfully.', 'dark');
      setIsSubmitted(true);
    });
    setIsLoading(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  return (
    <VStack as="form" rowGap="12px" onSubmit={handleSubmit(handleOnSubmitWaitlistForm)} w="full">
      <Box w="full">
        <Common.InputGroup
          label="Enter your email to join the waitlist"
          whiteMode
          value={getValues('email')}
          errorMsg={errors.email?.message}
          placeholder="hello@mail.com"
          name="email"
          onChange={onChange}
        />
      </Box>
      <Box h="48px" w="full">
        <Common.ImpaktButton
          h="full"
          variant="orange-black"
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
