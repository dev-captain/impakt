import {
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import HeroLayout from 'components/layouts/HeroLayout';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import InvestorCard from '../Founders/InvestorCard';
import Images from '../../../../assets/images';

const Advisor = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;
  let Advisors = useState<object[]>();
  Advisors = t('impaktAdvisor.Advisors', { returnObjects: true });

  return (
    <HeroLayout
      bgImage={Images.backgrounds.advisorsSectionBg}
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '0px',
        '2xl': '0px',
      }}
      minH="70vh"
      bgColor="transparent"
    >
      <VStack
        spacing="0px"
        px="16px"
        maxW={{ base: '100%', lg: '1200px' }}
        w="full"
        color={textColor}
      >
        <VStack>
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxW={{ base: '100%', lg: '1200px' }}
            pb="16px"
          >
            <VStack
              w="full"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              <Text color="#F04153" textTransform="uppercase" textStyle="semiBold17">
                {t(keys.impaktAdvisor.adviser)}
              </Text>
            </VStack>
            <VStack
              width={{ base: '100%', lg: '100%', xl: '1200px' }}
              textAlign="center"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '24px' }}
              mb="72px !important"
            >
              <Box maxW={{ base: '100%', lg: '800px' }}>
                <Text textStyle="TitleBold48">{t(keys.impaktAdvisor.Title)}</Text>
              </Box>
            </VStack>
            <SimpleGrid
              w="full"
              columns={{ base: 1, md: 2, lg: 3 }}
              alignContent="center"
              alignItems="center"
              columnGap={{ base: '8px', sm: '16px', md: '50px !important', xl: '24px' }}
              rowGap={{ base: '100px', sm: '100px', md: '100px', xl: '24px' }}
            >
              {Advisors.map((advisor: any) => (
                <GridItem key={advisor.name} w="full">
                  <HStack w="full" align="center" justify="center">
                    <InvestorCard {...advisor} />
                  </HStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default Advisor;
