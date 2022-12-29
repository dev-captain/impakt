import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useNormalizeError } from '@/hooks';
import routes from '../../data/routes';

const ErrorBoundary: React.FC<any> = ({ children }) => {
  const toast = useToast();
  const { normalizeAuthErrorHandler } = useNormalizeError();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.has('error')) {
      if (searchParams.has('error_description')) {
        const errorDescription = searchParams.get('error_description')!;
        if (searchParams.get('error') === 'AxiosError') {
          const normalizedAuthErrMessage = normalizeAuthErrorHandler(errorDescription);
          toast({
            title: 'Error',
            description: normalizedAuthErrMessage,
            isClosable: true,
            duration: 8000,
            status: 'error',
          });
        } else {
          toast({
            title: 'Error',
            description: errorDescription,
            isClosable: true,
            duration: 8000,
            status: 'error',
          });
        }
      }
      navigate(routes.dashboard);
    }
  }, []);

  return children;
};
export default ErrorBoundary;
