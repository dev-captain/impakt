import React from 'react';
import { useColorModeValue, VStack, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import { C } from 'components';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';

import Gradients from './Gradient';

const VerificationSomethingWentWrong: React.FC = () => {
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.backgrounds.defaultBg, Images.backgrounds.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  const commonProps: any = {
    textStyle: { base: 'regular4', md: 'regular5' },
    fontSize: '16px !important',
    lineHeight: '24px !important',
    textAlign: 'center',
  };

  return (
    <C.HeroLayout showNavbar spacing={10} pos="relative" bgImage={bgImage}>
      <VStack
        position="relative"
        color={textColor}
        maxW={{ base: 'full', md: '800px' }}
        marginTop={{ base: '48px', md: '72px' }}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
      >
        <VStack
          spacing="24px"
          marginTop="0 !important"
          mb="48px"
          textAlign="center"
          flexDirection="row"
          justifyContent="center"
          w="full"
        >
          <Text
            textStyle="black3"
            fontSize={{ base: '30px', md: '60px' }}
            lineHeight={{ base: '36px', md: '60px' }}
            marginRight={{ base: '0', md: '10px' }}
          >
            {t(keys.verification.something)}
          </Text>
          <Text
            textStyle={isSmallView ? 'black7' : 'black8'}
            fontSize={{ base: '30px', md: '56px' }}
            lineHeight={{ base: '36px', md: '60px' }}
            marginTop="0 !important"
          >
            {t(keys.verification.wrong)}
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          maxW={{ base: 'full', md: '550px' }}
          w="full"
          padding={{ base: '20px 16px 48px', md: '20px 90px 35px' }}
          borderRadius={30}
          position="relative"
          overflow="hidden"
          marginTop="0 !important"
        >
          <Image minW="127px" h="150px" src={Images.wrong} />

          <VStack spacing="24px" w="full" borderRadius={16} marginTop="0 !important">
            <Text {...commonProps}>{t(keys.verification.message)}</Text>
          </VStack>

          <Gradients />
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default VerificationSomethingWentWrong;
