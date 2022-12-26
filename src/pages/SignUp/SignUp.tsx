import { useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

import { C, S } from '@/components';
import Images from '@/assets/images';
import { useLogout } from '@/hooks';

import { usePersistedAuthStore } from '../../lib/zustand';

const SignUp = () => {
  const logout = useLogout({ silent: true });
  const handleLogout = async () => {
    await logout();
  };
  const { member } = usePersistedAuthStore();
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');

  React.useEffect(() => {
    if (member) {
      handleLogout();
    }
  }, []);

  return (
    <C.HeroLayout
      showFooterV2
      showNavbar
      minH="100vh"
      customPadding="200"
      pos="relative"
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
        <S.SignUp />
      </VStack>
    </C.HeroLayout>
  );
};
export default SignUp;
