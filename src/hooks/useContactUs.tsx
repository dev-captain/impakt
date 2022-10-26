import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

interface ContactUs {
  email: string;
  name: string;
  subject: string;
  message: string;
  isSubscribed?: boolean;
}

const freshDeskAwsApiGateWayAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TICKET_API_GATEWAY_BASE_URI,
});

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
      const payload = JSON.stringify({
        name: data.name,
        description: data.message,
        subject: data.subject,
        priority: 1,
        status: 2,
        group_id: 'General',
        type: 'Question',
        tags: ['discord'],
        email_config_id: 72000081040,
        email: data.email,
      });

      await freshDeskAwsApiGateWayAxiosInstance.post('/tickets/', payload);

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
