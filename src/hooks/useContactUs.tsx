import { useState } from 'react';
import axios from 'axios';
import { renderToast } from '../utils';

interface ContactUs {
  email: string;
  name: string;
  subject: string;
  message: string;
  isSubscribed?: boolean;
}

const freshDeskAwsApiGateWayAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TICKET_API_GATEWAY_BASE_URI,
});

const useContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | string>(null);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const sendData = async (data: ContactUs) => {
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

      setIsSuccessful(true);
      setLoading(false);
      renderToast('success', 'You sent a message successfully.', 'dark');
    } catch (err) {
      setError(err);
      setIsSuccessful(false);
      setLoading(false);
      renderToast('error', 'Something went wrong. Please check information and try again.', 'dark');
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
