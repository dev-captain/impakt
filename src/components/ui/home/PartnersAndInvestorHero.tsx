import { GridItem, HStack, SimpleGrid, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { Advisors, Team } from 'data';
import { layoutPadding } from 'theme';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import InvestorCard from './PartnerAndInvestorHero/InvestorCard';
import TeamCard from './PartnerAndInvestorHero/TeamCard';

const PartnerAndInvestorHero = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;

  return (
    <HeroLayout
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '0px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <VStack spacing="0px" pb="64px" px={layoutPadding} w="full" color={textColor}>
        <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full" pb="16px">
          <HStack
            w="full"
            spacing={5}
            justify={{ base: 'center', md: 'center' }}
            mt={{ base: 0, md: 0, xl: '64px' }}
          >
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="300"
            >
              {t(keys.ourAdvisor.our)}
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="700"
            >
              {t(keys.ourAdvisor.advisor)}
            </Text>
          </HStack>
          <SimpleGrid
            w="full"
            columns={6}
            alignContent="center"
            alignItems="center"
            columnGap={{ base: '8px', sm: '16px', md: '24px', xl: '24px' }}
            rowGap={{ base: '24px', sm: '16px', md: '24px', xl: '24px' }}
          >
            {Advisors.map((advisor) => (
              <GridItem
                colSpan={{
                  base: 6,
                  sm: 6,
                  md: 3,
                  xl: 2,
                }}
                key={advisor.name}
                w="full"
              >
                <HStack w="full" align="center" justify="center">
                  <InvestorCard {...advisor} />
                </HStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full">
          <HStack
            w="full"
            spacing={5}
            justify={{ base: 'center', md: 'center' }}
            mt={{ base: '24px', md: 0, xl: '64px' }}
          >
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="300"
            >
              {t(keys.ourTeam.our)}
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="700"
            >
              {t(keys.ourTeam.team)}
            </Text>
          </HStack>
          <SimpleGrid
            w="full"
            columns={6}
            columnGap={{ base: '8px', sm: '16px', md: '24px', xl: '24px' }}
            rowGap={{ base: '24px', sm: '16px', md: '24px', xl: '24px' }}
          >
            {Team.map((team) => (
              <GridItem
                colSpan={{
                  base: 6,
                  sm: 6,
                  md: 3,
                  xl: 2,
                }}
                key={team.name}
                alignItems="center"
                justifyContent="center"
                alignSelf="center"
              >
                <HStack w="full" align="center" justify="center">
                  <TeamCard {...team} />
                </HStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default PartnerAndInvestorHero;
