import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import { I } from 'components';
import HeroLayout from 'components/layouts/HeroLayout';
import useModalStore from 'hooks/store/useModalStore';
import { layoutPadding } from 'theme';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';

const BurnToEarnHero = () => {
  const modal = useModalStore((state) => state);
  const { t } = useTranslation().i18n;

  const vStackSomeProps = {
    borderRadius: {
      base: '14px',
      md: '28px',
    },
    px: {
      sm: '32px',
      md: '40px',
      xl: '120px',
      base: '16px',
    },
    py: {
      base: '60px',
      md: '100px',
      xl: '180px',
      '2xl': '240px',
    },
  };

  return (
    <HeroLayout removeBottomPadding minH="70vh">
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <HStack
          _hover={{
            transition: '0.5s ease',
            transform: 'scale(1.1)',
          }}
          w="full"
          bgSize="cover"
          bgPos={{ base: 'top', xl: 'center' }}
          justify="space-between"
          align="space-between"
          {...vStackSomeProps}
          backgroundImage={Images.burnAndEarn}
          bgColor={bgImage}
          overflow="hidden"
          position="relative"
          color="glass.0"
          cursor="pointer"
          onClick={modal.setBurnAndEarn}
          boxShadow="0px 6px 6px rgba(0, 0, 0, 0.3), 0px 6px 16px rgba(0, 0, 0, 0.16)"
        >
          <VStack zIndex={2} align="flex-start" spacing={{ base: '20px', md: '130px' }}>
            <VStack align="flex-start" spacing={8}>
              <HStack fontSize={{ base: '40px', md: '56px' }} lineHeight="1.2em" fontWeight="300">
                <Text>{t(keys.burnAndEarn.burnAnd)}</Text>
                <Text fontWeight="900">{t(keys.burnAndEarn.earn)}</Text>
              </HStack>
              <Play forMobile onClick={modal.setBurnAndEarn} />
              <Text
                opacity="0.6"
                fontSize={{ base: '14px', md: '20px' }}
                maxW={{ base: '204px', md: '340px' }}
              >
                {t(keys.burnAndEarn.description)}
              </Text>
            </VStack>
          </VStack>
          <Play onClick={modal.setBurnAndEarn} />
          <Box
            w="967px"
            h="472px"
            zIndex={1}
            left="-307px"
            top="-204px"
            opacity={0.49}
            pos="absolute"
            background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
          />
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default BurnToEarnHero;

const bgImage = `linear-gradient(90deg, #1F2024 18.46%, rgba(31, 32, 36, 0) 63.94%)`;

const Play = ({ forMobile, onClick }: { forMobile?: boolean; onClick: () => void }) => (
  <Center
    w="80px"
    h="80px"
    zIndex={2}
    onClick={onClick}
    borderRadius="40px"
    alignSelf="center"
    bgColor="whiteAlpha.400"
    left={['30%', '50%', '50%', '50%']}
    boxShadow="4px 4px 10px rgba(0, 0, 0, 0.12)"
    position={forMobile ? 'initial' : 'absolute'}
    d={{ base: forMobile ? 'flex' : 'none', md: forMobile ? 'none' : 'flex' }}
  >
    <I.WhitePlay />
  </Center>
);
