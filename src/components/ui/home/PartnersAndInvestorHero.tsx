/* eslint-disable */

import {
  Box,
  Circle,
  GridItem,
  Stack,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const PartnerAndInvestorHero = () => {
  const colSpan = {
    base: 12,
    sm: 6,
    md: 6,
    xl: 6,
    '2xl': 6,
  };

  return (
    <HeroLayout
      hideBlur
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '0px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <VStack spacing="0px" py={0} px={layoutPadding} w="full">
        <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full">
          <HStack w="full" spacing={5} justify={{ base: 'center', md: 'center' }}>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="300"
            >
              Our
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="700"
            >
              Advisors
            </Text>
          </HStack>
          <Stack w="full" spacing={8} direction={{ base: 'column', lg: 'row' }}>
            {Advisors.map((advisor) => (
              <GridItem colSpan={colSpan} w="full">
                <CompanyCard {...advisor} />
              </GridItem>
            ))}
          </Stack>
        </VStack>
        {/* <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full">
          <HStack w="full" spacing={5} justify={{ base: 'flex-start', md: 'center' }}>
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
          <SimpleGrid
            w="full"
            columns={12}
            columnGap={{ base: '8px', sm: '16px', md: '24px' }}
            rowGap={{ base: '8px', sm: '16px', md: '24px', xl: '46px' }}
          >
            {Advisors.map(() => (
              <GridItem colSpan={colSpan} w="full">
                <CompanyCard />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack> */}
      </VStack>
    </HeroLayout>
  );
};

export default PartnerAndInvestorHero;

const Advisors = [
  {
    name: 'Kevin Lin',
    title: 'Founder - Twitch',
    image: 'assets/images/kevin-lin.jpeg',
    subtitle: '',
  },
  {
    name: 'Tim Howes',
    title: 'CTO - Netscape',
    image: 'assets/images/tim-howes.gif',
    subtitle: 'Director of Engineering - Facebook',
  },
  {
    name: 'Kai Huang',
    title: 'Founder - Guitar Hero',
    image: 'assets/images/kai-huang.jpeg',
    subtitle: 'President of Red Octane - Activision',
  },
];

const CompanyCard = ({
  image,
  name,
  title,
  subtitle,
}: {
  image: string;
  name: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <VStack
      w="full"
      py="36px"
      align="center"
      justify="center"
      bgColor="#1F2024"
      overflow="hidden"
      position="relative"
      borderRadius="28px"
      boxShadow="0px 6px 6px rgba(0, 0, 0, 0.3), 0px 6px 16px rgba(0, 0, 0, 0.16)"
    >
      <Circle
        overflow="hidden"
        boxShadow="0px 6px 6px rgba(0, 0, 0, 0.3), 0px 6px 16px rgba(0, 0, 0, 0.16)"
      >
        <Image src={image} objectFit="cover" borderRadius="100px" w="180px" h="180px" />
      </Circle>
      <VStack p="8px" align="center" justify="center">
        <Text fontSize="20px" fontWeight="semibold" pt="8px">
          {name}
        </Text>
        <Text height="20px" opacity="0.8" align="center">
          {title}
        </Text>
        <Text height="20px" opacity="0.8" align="center" display="inline">
          {subtitle}
        </Text>
      </VStack>
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
