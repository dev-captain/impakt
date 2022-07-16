import React from 'react';
import { useColorModeValue, VStack, Text, Spinner, useBreakpointValue } from '@chakra-ui/react';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import Images from 'assets/images';

import HeroLayout from 'components/core/Layouts/HeroLayout';
import Gradients from './Gradient';

const VerificationLoading: React.FC = () => {
  const { t } = useTranslation().i18n;
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  const bgImage = useColorModeValue(Images.backgrounds.defaultBg, Images.backgrounds.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <HeroLayout showNavbar spacing={10} pos="relative" bgImage={bgImage}>
      <VStack
        position="relative"
        color={textColor}
        maxW={{ base: 'full', md: '50%' }}
        marginTop={{ base: '40px !important', md: '85px' }}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
      >
        <VStack
          spacing="24px"
          marginTop={{ base: '0', md: '15px !important' }}
          mb="48px"
          textAlign="center"
          overflow="hidden"
          flexDirection="row"
          justifyContent="center"
          w="full"
        >
          <Text
            textStyle="black3"
            fontSize={{ base: '36px', md: '50px' }}
            lineHeight={{ base: '40px', md: '60px' }}
            marginRight={{ base: '5px', md: '10px' }}
          >
            {t(keys.verification.verification)}
          </Text>
          <Text
            textStyle={isSmallView ? 'black7' : 'black8'}
            fontSize={{ base: '36px', md: '56px' }}
            lineHeight={{ base: '40px', md: '60px' }}
            marginTop="0 !important"
          >
            {t(keys.verification.loading)}
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          height="50%"
          w="full"
          padding={{ base: '48px', md: '56px' }}
          borderRadius={30}
          maxW="520"
          position="relative"
          overflow="hidden"
          marginTop="0 !important"
        >
          <Spinner thickness="5px" size="xl" />
          <Gradients />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default VerificationLoading;
