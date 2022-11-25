import { useColorModeValue, VStack, Spinner } from '@chakra-ui/react';
import { S, C } from 'components';
import Images from 'assets/images';
import { useEffect } from 'react';

import { parseUrlQueryParamsToKeyValuePairs } from '../../utils';
import { usePersistedAuthStore } from '../../lib/zustand';
import { useNextParamRouter } from '../../hooks/useNextParamRouter';

const SignIn = () => {
  const { member } = usePersistedAuthStore();
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const navigateTo = useNextParamRouter();

  useEffect(() => {
    if (member) {
      navigateTo();
    }
  }, []);

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
