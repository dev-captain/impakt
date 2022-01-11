import { useState, useRef } from 'react';
import { useToast } from '@chakra-ui/react';

interface Newsletter {
  email: string;
}

const baseUrl = 'https://colyseus-staging.herokuapp.com';

const useNewsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | string>(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const messageRef = useRef<string>('');
  const toast = useToast();

  const sendData = async (data: Newsletter) => {
    if (!data.email) {
      toast({
        description: 'You have to type your email.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

      return;
    }
    setLoading(true);
    setError(null);
    setIsSuccessful(false);

    try {
      const result = await (
        await fetch(`${baseUrl}/email/subscribe`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ).json();
      messageRef.current = !result.success
        ? 'Something went wrong, please try again.'
        : "You've successfully subscribed to our newsletter. Thank you!";
      if (!result.success) {
        if (result.isMemberExist) {
          toast({
            description: 'You are already subscribed to our newsletter.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        } else {
          messageRef.current = result.detail;
          toast({
            description: messageRef.current,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      } else {
        toast({
          description: messageRef.current,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }

      setIsSuccessful(result.success);
      setLoading(false);
    } catch (err) {
      setError(err);
      setIsSuccessful(false);
      setLoading(false);
    }
    setOpen(true);
  };

  const closeHandle = () => setOpen(false);

  return {
    open,
    error,
    loading,
    sendData,
    closeHandle,
    isSuccessful,
    message: messageRef.current,
  };
};

export default useNewsletter;
