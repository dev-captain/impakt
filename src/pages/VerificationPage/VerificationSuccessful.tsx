import { useColorModeValue, VStack, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import Gradients from './Gradient';

const VerificationSuccessful = () => {
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
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
    fontSize: '24px !important',
    lineHeight: '32px !important',
    textAlign: { base: 'center', md: 'left' },
  };

  return (
    <HeroLayout showNavbar minH="70vh" spacing={10} pos="relative" bgImage={bgImage}>
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
            {t(keys.verification.successful)}
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          height="50%"
          w="full"
          padding={{ base: '32px 15px', md: '50px 45px 30px' }}
          borderRadius={30}
          position="relative"
          overflow="hidden"
          marginTop="0 !important"
        >
          <Image minW="127px" h="150px" src={Images.verification} />

          <VStack spacing="24px" w="full" borderRadius={16}>
            <Text {...commonProps}>{t(keys.verification.Successtitle)}</Text>
            <Text {...commonProps}>{t(keys.verification.thankyou)}</Text>
          </VStack>

          <Gradients />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default VerificationSuccessful;
