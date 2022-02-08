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
  useColorModeValue,
} from '@chakra-ui/react';
import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';
import { Advisors, Team } from 'data';
import { layoutPadding } from 'theme';

const PartnerAndInvestorHero = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');

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
      <VStack spacing="0px" pb={'16px'} px={layoutPadding} w="full" color={textColor}>
        <VStack spacing="36px" align={{ base: 'flex-start', md: 'auto' }} w="full">
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
          <Stack
            w="full"
            spacing={8}
            direction={{ base: 'column', lg: 'row' }}
            justify={'center'}
            align="center"
          >
            {Advisors.map((advisor) => (
              <GridItem colSpan={colSpan} key={advisor.name} maxW="384px" w="full">
                <CompanyCard {...advisor} />
              </GridItem>
            ))}
          </Stack>
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
              Our
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="700"
            >
              Team
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
                  sm: 3,
                  md: 2,
                }}
                key={team.name}
                maxW="384px"
                w="full"
              >
                <CompanyCard {...team} />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default PartnerAndInvestorHero;

const CompanyCard = ({
  image,
  name,
  title,
  subtitle,
  alt,
}: {
  alt: string;
  image: string;
  name: string;
  title: string;
  subtitle: string;
}) => {
  const bgColor = useColorModeValue('glass.800', 'glass.200');

  return (
    <VStack
      w="full"
      pb="36px"
      align="center"
      justify="center"
      bgColor={bgColor}
      overflow="hidden"
      position="relative"
      borderRadius="28px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
    >
      <Image src={image} objectFit="cover" w="full" h="380px" alt={alt} borderRadius="28px" />
      <VStack p="8px" align="center" justify="center">
        <Text textStyle={'bold5'} pt="8px" align={'center'}>
          {name}
        </Text>
        <Text textStyle={'regular4'} opacity="0.6" align="center" pt="24px" color="electric.100">
          {title}
        </Text>
        <Text height="20px" opacity="0.6" align="center" display="inline" color="electric.100">
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
