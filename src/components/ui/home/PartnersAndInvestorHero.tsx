import { Box, GridItem, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import SmallLogo from 'components/core/SmallLogo';
import HeroLayout from 'components/layouts/HeroLayout';

const PartnerAndInvestorHero = () => {
  const colSpan = {
    base: 8,
    sm: 8,
    md: 4,
    xl: 2,
  };

  return (
    <HeroLayout hideBlur>
      <VStack spacing="120px" py={10}>
        <VStack spacing="36px">
          <HStack spacing={5}>
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="300">
              Our
            </Text>
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="700">
              Partners
            </Text>
          </HStack>
          <SimpleGrid columns={8} columnGap="24px" rowGap="24px">
            {CompanyData.map(() => (
              <GridItem colSpan={colSpan}>
                <CompanyCard />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
        <VStack spacing="36px">
          <HStack spacing={5}>
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="300">
              Our
            </Text>
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="700">
              Investor
            </Text>
          </HStack>
          <SimpleGrid columns={8} columnGap="24px" rowGap="24px">
            {CompanyData.map(() => (
              <GridItem colSpan={colSpan}>
                <CompanyCard />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default PartnerAndInvestorHero;

const CompanyData = [1, 2, 3, 4, 5, 6, 7, 8];

const CompanyCard = () => {
  return (
    <VStack
      p={0}
      minW="282px"
      minH="156px"
      align="center"
      justify="center"
      bgColor="#1F2024"
      overflow="hidden"
      position="relative"
      borderRadius="28px"
    >
      <SmallLogo />
      <GradientEllipse />
      <GradientEllipse1 />
    </VStack>
  );
};

const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="220px"
      height="196px"
      left="-93px"
      top="-136px"
      opacity="0.49"
      zIndex={1}
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

const GradientEllipse1 = () => {
  return (
    <Box
      top="68px"
      zIndex={1}
      width="335px"
      pos="absolute"
      height="116px"
      right="-231px"
      opacity="0.21"
      filter="blur(64px)"
      bg="radial-gradient(50% 50% at 50% 50%, #487BFD 58.11%, #00B2FF 100%)"
    />
  );
};
