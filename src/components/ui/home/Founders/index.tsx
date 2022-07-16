import { useState } from 'react';
import {
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import TeamCard from './TeamCard';
import bgImage from '../../../../assets/images/teambg.png';

const Founder = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;
  let Team = useState<object[]>();
  Team = t('Founder.team', { returnObjects: true });

  return (
    <HeroLayout
      // showNavbar
      bgImage={bgImage}
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '100px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <VStack
        spacing="0px"
        px="16px"
        maxW={{ base: '100%', lg: '1232px' }}
        w="full"
        color={textColor}
      >
        <VStack>
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxW={{ base: '100%', lg: '1232px' }}
            pb="16px"
          >
            <VStack
              w="full"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              <Text color="#F04153" textTransform="uppercase" textStyle="semiBold17">
                {t(keys.Founder.builders)}
              </Text>
            </VStack>
            <VStack
              width={{ base: '100%', lg: '100%', xl: '1232px' }}
              textAlign="center"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '24px' }}
              mb="72px !important"
            >
              <Box maxW={{ base: '100%', lg: '800px' }}>
                <Text textStyle="TitleBold48">{t(keys.Founder.Title)}</Text>
              </Box>
            </VStack>
            <SimpleGrid
              w="full"
              columns={{ base: 1, md: 2, lg: 3 }}
              alignContent="center"
              alignItems="center"
              columnGap={{ base: '8px', sm: '16px', md: '50px !important', xl: '24px' }}
              rowGap={{ base: '99px', sm: '99px', md: '115px', xl: '16px' }}
            >
              {Team.map((advisor: any) => {
                return (
                  <GridItem key={advisor.name} w="full">
                    <HStack w="full" align="center" justify="center">
                      <TeamCard {...advisor} />
                    </HStack>
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </VStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default Founder;
