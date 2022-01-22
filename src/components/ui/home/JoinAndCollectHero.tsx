import { Box, GridItem, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const commonProps: any = {
  textAlign: { base: 'left', md: 'left' },
  alignItems: { base: 'left', md: 'flex-start' },
};

const JoinAndCollectHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }} align="flex-start">
        <SimpleGrid
          columns={4}
          w="full"
          justifyContent="flex-start"
          alignItems="flex-start"
          columnGap={{
            base: '4',
            sm: '8',
            md: '8',
            xl: '20',
          }}
          px={{ base: '16px', md: 0 }}
        >
          <GridItem display={{ base: 'none', md: 'flex' }} zIndex={1} colSpan={2}>
            <CardBg />
          </GridItem>
          <GridItem
            w="full"
            zIndex={1}
            colSpan={4}
            display={{ base: 'none', sm: 'flex', md: 'none' }}
          >
            <CardBg>
              <VStack
                alignItems="flex-start"
                px="40px"
                py="48px"
                w="500px"
                spacing="140px"
                zIndex={2}
              >
                <Text
                  color="white"
                  fontWeight="400"
                  lineHeight={{ base: '44px', md: '60px' }}
                  fontSize={{ base: '40px', md: '52px', xl: '56px' }}
                >
                  Join and
                  <Text>collect your</Text>
                  <Text fontWeight="700" paddingTop={2}>
                    NFT collection!
                  </Text>
                </Text>
                <GradientButton
                  title="NFT marketplace"
                  w={{ base: 'full', sm: 'fit-content', md: 'auto' }}
                  bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                />
              </VStack>
            </CardBg>
          </GridItem>
          <GridItem
            colSpan={{
              base: 4,
              md: 2,
            }}
            zIndex={2}
            {...commonProps}
            h="full"
          >
            <VStack
              spacing="52px"
              align={{ base: 'center', md: 'flex-start' }}
              w="full"
              h="full"
              justifyContent="center"
            >
              <VStack
                w="full"
                {...commonProps}
                spacing={{ base: '32px', md: '8px' }}
                alignItems={{ base: 'flex-start', md: 'flex-start' }}
              >
                <VStack alignItems="flex-start" d={{ base: 'flex', sm: 'none', md: 'flex' }}>
                  <Text
                    fontWeight="300"
                    lineHeight={{ base: '44px', md: '60px' }}
                    fontSize={{ base: '40px', md: '52px', xl: '56px' }}
                  >
                    Join and
                    <Text>collect your</Text>
                    <Text fontWeight="700" paddingTop={2}>
                      NFT collection!
                    </Text>
                  </Text>
                </VStack>
                <HStack
                  d={{ base: 'flex', sm: 'none' }}
                  bg='linear-gradient(89.4deg, #1F2024 1.43%, rgba(31, 32, 36, 0) 37.28%), url("assets/images/join-and-collect-hero.png")'
                  borderRadius="28px"
                  position="relative"
                  overflow="hidden"
                  bgSize="cover"
                  w="full"
                >
                  <GradientEllipse />
                  <Box
                    bg="linear-gradient(90deg, rgba(31, 32, 36, 0.784) 50%, rgba(31, 32, 36, 0.7124) 63.01%, rgba(31, 32, 36, 0.608) 72.58%, rgba(31, 32, 36, 0) 100%)"
                    borderRadius="28px"
                    w="full"
                    minH="220px"
                  />
                </HStack>
              </VStack>
              <GradientButton
                title="NFT marketplace"
                w={{ base: 'full', md: 'auto' }}
                d={{ base: 'flex', sm: 'none', md: 'flex' }}
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default JoinAndCollectHero;

const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="967px"
      height="472px"
      left="-307px"
      top="-204px"
      opacity="0.4"
      zIndex={1}
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

// eslint-disable-next-line no-undef
const CardBg = ({ children }: { children?: JSX.Element }) => {
  return (
    <HStack
      bg='linear-gradient(89.4deg, #1F2024 1.43%, rgba(31, 32, 36, 0) 37.28%), url("assets/images/join-and-collect-hero.png")'
      borderRadius="28px"
      position="relative"
      overflow="hidden"
      bgSize="cover"
      w="full"
    >
      {children}
      <GradientEllipse />
      <Box
        d={{ base: 'flex', md: 'flex', sm: 'none' }}
        bg="linear-gradient(90deg, rgba(31, 32, 36, 0.784) 50%, rgba(31, 32, 36, 0.7124) 63.01%, rgba(31, 32, 36, 0.608) 72.58%, rgba(31, 32, 36, 0) 100%)"
        borderRadius="28px"
        w="full"
        minH="400px"
        minW="600px"
      />
    </HStack>
  );
};
