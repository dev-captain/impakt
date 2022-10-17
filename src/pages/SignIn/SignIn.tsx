import { useColorModeValue, Text, VStack, Spinner, useToast } from '@chakra-ui/react';
import { S, C } from 'components';
import { useEffect, useCallback } from 'react';
import Images from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';

import { parseUrlQueryParamsToKeyValuePairs } from '../../utils';
import { requestAccessToken } from '../../lib/redux/slices/member/actions/requestAccessToken';
import { deepLinkToApp } from '../../data';

const SignIn = () => {
  const isThereNextParam = useLocation().search.includes('next');
  const navigateTo = isThereNextParam ? useLocation().search.split('=')[1] : '/dashboard';

  const navigate = useNavigate();
  const toast = useToast();
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const member = useAppSelector((state) => state.memberAuth.member);
  const requestAccessTokenAttemp = useAppSelector(
    (state) => state.memberAuth.requestAccessTokenAttemptCount,
  );

  const deepLink = deepLinkToApp(1, 4);
  const dispatch = useAppDispatch();

  const requestAccessTokenAsync = useCallback(async () => {
    toast({
      title: 'Logging in to forums',
      duration: 2000,
      status: 'info',
    });

    try {
      const request = await dispatch(
        requestAccessToken({
          discoursePayload: queryString.sso,
          discourseSig: queryString.sig,
        }),
      ).unwrap();

      if (request.discourseRedirectUrl === undefined) {
        toast({
          title: 'Error',
          description: ' "Something went wrong...',
          isClosable: false,
          duration: 2000,
          status: 'error',
        });

        return undefined;
      }

      toast({
        title: 'Success',
        description: ' "Redirecting to forums..',
        isClosable: false,
        duration: 2000,
        status: 'success',
      });

      return request.discourseRedirectUrl;
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
  }, [member, requestAccessTokenAttemp]);

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

      <a
        onClick={(e) => {
          e.preventDefault();
          // eslint-disable-next-line func-names
          const timeout = window.setTimeout(function () {
            navigate('/download');
            toast({
              title: 'Error',
              description: 'You have to install this app on your device',
              isClosable: true,
              duration: 8000,
              status: 'error',
            });
          }, 1000);

          window.location = deepLink as any;
        }}
        href={deepLink}
      >
        <Text color="#5C7FFF" fontSize="16px" fontWeight="500">
          Click to join event
        </Text>
      </a>
    </C.HeroLayout>
  );
};
export default SignIn;
