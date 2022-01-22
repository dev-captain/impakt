import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

interface ContactUs {
  email: string;
  name: string;
  subject: string;
  message: string;
  isSubscribed?: boolean;
}

const url = 'https://contact-api-email.herokuapp.com/common/contact';

const useContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | string>(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const toast = useToast();

  const sendData = async (data: ContactUs, resetFields: () => void) => {
    setLoading(true);
    setError(null);
    setIsSuccessful(false);
    try {
      const msg = {
        subject: data.subject,
        text: `Name: ${data.name} - Email: ${data.email} \n ${data.message}`,
      };
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(msg),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      resetFields();
      setIsSuccessful(true);
      setLoading(false);
      toast({
        description: 'You sent a message successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      setError(err);
      setIsSuccessful(false);
      setLoading(false);
      toast({
        description: 'Something went wrong. Please check information and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return {
    loading,
    error,
    sendData,
    isSuccessful,
  };
};

export default useContactUs;
