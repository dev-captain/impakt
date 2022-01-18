import { Box, GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const PartnerAndInvestorHero = () => {
  const colSpan = {
    base: 6,
    sm: 4,
    md: 3,
    xl: 3,
    '2xl': 3,
  };

  return (
    <HeroLayout hideBlur>
      <VStack spacing="120px" py={10} px={layoutPadding} w="full">
        <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full">
          <HStack spacing={5}>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '44px', md: '60px' }}
              fontWeight="300"
            >
              Our
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '44px', md: '60px' }}
              fontWeight="700"
            >
              Partners
            </Text>
          </HStack>
          <SimpleGrid columns={12} columnGap="24px" rowGap={{ base: '24px', xl: '46px' }} w="full">
            {CompanyData.map(() => (
              <GridItem colSpan={colSpan} w="full">
                <CompanyCard />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
        <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full">
          <HStack spacing={5}>
            <Text
              fontWeight="300"
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '44px', md: '60px' }}
            >
              Our
            </Text>
            <Text
              fontWeight="700"
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '44px', md: '60px' }}
            >
              Investor
            </Text>
          </HStack>
          <SimpleGrid columns={12} columnGap="24px" rowGap={{ base: '24px', xl: '46px' }} w="full">
            {CompanyData.map(() => (
              <GridItem colSpan={colSpan} w="full">
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
      w="full"
      align="center"
      justify="center"
      bgColor="#1F2024"
      overflow="hidden"
      position="relative"
      borderRadius="28px"
      minH={{ base: '100px', md: '156px' }}
      maxW={{ base: '160px', md: '220px', xl: '350px' }}
    >
      <Image src="assets/images/logo.png" />
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
