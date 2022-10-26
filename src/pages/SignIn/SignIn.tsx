import { useColorModeValue, VStack, Spinner, useToast } from '@chakra-ui/react';
import { S, C } from 'components';
import { useEffect, useCallback, useState } from 'react';
import Images from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';

import { parseUrlQueryParamsToKeyValuePairs, renderToast } from '../../utils';
import { usePersistedAuthStore } from '../../lib/zustand';
import { useAuthControllerSignAccessToken } from '../../lib/impakt-dev-api-client/react-query/auth/auth';

const SignIn = () => {
  const requestAccessToken = useAuthControllerSignAccessToken();
  const { member } = usePersistedAuthStore();

  const isThereNextParam = useLocation().search.includes('next');
  const navigateTo = isThereNextParam ? useLocation().search.split('=')[1] : '/dashboard';
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);

  const [requestAccessTokenAttemp, setRequestAccessTokenAttemp] = useState(0);

  const navigate = useNavigate();
  const toast = useToast();

  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');

  const requestAccessTokenAsync = useCallback(async () => {
    toast({
      title: 'Logging in to forums',
      duration: 2000,
      status: 'info',
    });

    try {
      const request = await requestAccessToken.mutateAsync({
        data: {
          DiscoursePayload: queryString.sso,
          DiscourseSig: queryString.sig,
        },
      });
      setRequestAccessTokenAttemp((prev) => prev + 1);

      if (request.DiscourseRedirectUrl === undefined) {
        renderToast('error', 'Something went wrong...');

        return undefined;
      }

      toast({
        title: 'Success',
        description: ' "Redirecting to forums..',
        isClosable: false,
        duration: 2000,
        status: 'success',
      });

      return request.DiscourseRedirectUrl;
    } catch (error: any) {
      return null;
    }
  }, []);

  useEffect(() => {
    if (member) {
      if (queryString.DiscourseConnect) {
        if (requestAccessTokenAttemp === 0) {
          const request = requestAccessTokenAsync();
          request.then((res) => {
            if (res) {
              window.location.href = res;
            }
          });

          return;
        }
      }

      if (requestAccessTokenAttemp === 0) {
        navigate(navigateTo);
      }
    }
  }, [requestAccessTokenAttemp]);

  return (
    <C.HeroLayout
      showFooterV2
      showNavbar
      minH="100vh"
      pos="relative"
      customPadding="200"
      justify="flex-start"
      align="flex-start"
      bgImage={bgImage}
    >
      <VStack
        color={textColor}
        w="full"
        px={{ base: '1em', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
        mt={{ base: '10px', lg: '15px' }}
      >
        {member && queryString.DiscourseConnect && <Spinner size="xl" />}
        {!member && <S.SignIn />}
      </VStack>
    </C.HeroLayout>
  );
};
export default SignIn;
