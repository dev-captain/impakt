import { useColorModeValue, VStack, Spinner } from '@chakra-ui/react';
import { S, C } from 'components';
import Images from 'assets/images';

import { parseUrlQueryParamsToKeyValuePairs } from '../../utils';
import useAppSelector from '../../hooks/useAppSelector';

const SignIn = () => {
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const member = useAppSelector((state) => state.memberAuth.member);
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <C.HeroLayout
      showFooterV2
      showNavbar
      minH="100vh"
      pos="relative"
      justify="flex-start"
      align="flex-start"
      bgImage={bgImage}
    >
      <VStack
        color={textColor}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
      >
        {member && queryString.DiscourseConnect && <Spinner size="xl" />}
        {!member && <S.SignIn />}
      </VStack>
    </C.HeroLayout>
  );
};
export default SignIn;
