import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useNormalizeError } from 'hooks';
import { useToast } from '@chakra-ui/react';

const ErrorBoundary: React.FC<any> = ({ children }) => {
  const toast = useToast();
  const { normalizeAuthErrorHandler } = useNormalizeError();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.has('error')) {
      if (searchParams.get('error') === 'AxiosError') {
        if (searchParams.has('error_description')) {
          navigate(`/dashboard?error_description=${searchParams.get('error_description')}`);
        } else {
          navigate(`/dashboard?error_description=Something+went+wrong`);
        }
      }
    }

    if (searchParams.has('error_description')) {
      const normalizedAuthErrMessage = normalizeAuthErrorHandler(
        searchParams.get('error_description')!,
      );
      toast({
        title: 'Error',
        description: normalizedAuthErrMessage,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
      navigate('/dashboard');
    }
  }, []);

  return children;
};
export default ErrorBoundary;
