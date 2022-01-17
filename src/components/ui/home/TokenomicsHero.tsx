import { Box, GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';

const TokenomicsHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid columns={2} justifyContent="center" alignItems="center" columnGap={14}>
          <GridItem display={{ base: 'none', md: 'flex' }}>
            <Image src="assets/images/tokenomics-hero.png" />
          </GridItem>
          <GridItem
            colSpan={{
              base: 2,
              md: 1,
            }}
          >
            <VStack
              textAlign={{ base: 'center', md: 'left' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
              spacing="36px"
            >
              <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="700">
                Tokenomics
              </Text>
              <TokenomicsStatisticCard />
            </VStack>
          </GridItem>
          <GridItem display={{ base: 'flex', md: 'none' }} colSpan={2}>
            <Image src="assets/images/tokenomics-hero.png" />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default TokenomicsHero;

const TokenomicsStatisticCard = () => {
  return (
    <VStack
      w="full"
      maxW="520px"
      minH="372px"
      align="flex-start"
      justify="center"
      bgColor="#1F2024"
      borderRadius="28px"
      pl="68px"
      spacing="16px"
      pos="relative"
      overflow="hidden"
    >
      <GradientEllipse />
      <GradientEllipse1 />
      <GradientEllipse2 />
      {data.map((item) => {
        return (
          <HStack key={item.title}>
            <Box h="8px" w="8px" borderRadius="4px" bgColor={item.color} />
            <Text color={item.color} fontSize="14px" lineHeight="20px" fontWeight="400">
              {`${item.percentage} %`}
            </Text>
            <Text fontSize="14px" lineHeight="20px" fontWeight="400">
              {item.title}
            </Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="252px"
      height="224px"
      left="-109px"
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
      pos="absolute"
      width="380px"
      height="338px"
      left="347px"
      top="-196px"
      opacity="0.39"
      zIndex={1}
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #D33B26 0%, rgba(242, 112, 17, 0) 100%)"
    />
  );
};

const GradientEllipse2 = () => {
  return (
    <Box
      pos="absolute"
      width="471px"
      height="163px"
      left="178px"
      bottom="-148px"
      opacity="0.21"
      zIndex={1}
      filter="blur(64px)"
      bg="radial-gradient(50% 50% at 50% 50%, #487BFD 58.11%, #00B2FF 100%)"
    />
  );
};

const data = [
  {
    percentage: '20,0',
    title: 'Team',
    color: '#FF7723',
  },
  {
    percentage: '15,3',
    title: 'Private Sale',
    color: '#C1DA00',
  },
  {
    percentage: '10,5',
    title: 'Reserve',
    color: '#8E30FF',
  },
  {
    percentage: '6,0',
    title: 'ReStaking + LPserve',
    color: '#9D5E00',
  },
  {
    percentage: '5,6',
    title: 'Strategic Round',
    color: '#7CB413',
  },
  {
    percentage: '4,7',
    title: 'Seed Round',
    color: '#0263FF',
  },
  {
    percentage: '2,4',
    title: 'Public',
    color: '#C627B5',
  },
];
