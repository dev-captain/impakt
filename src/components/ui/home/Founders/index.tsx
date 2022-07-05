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
import { Team } from 'data';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import TeamCard from '../PartnerAndInvestorHero/TeamCard';
import bgImage from '../../../../assets/images/teambg.png';

const Founder = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;

  return (
    <HeroLayout
      bgImage={bgImage}
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '0px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <VStack
        spacing="0px"
        pb="64px"
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
              <Text color="#F04153">{t(keys.Founder.builders)}</Text>
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
                <Text textStyle="TitleBold48">{t(keys.Founder.Title)}</Text>
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
              {Team.map((advisor) => (
                <GridItem key={advisor.name} w="full">
                  <HStack w="full" align="center" justify="center">
                    <TeamCard {...advisor} />
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

export default Founder;
