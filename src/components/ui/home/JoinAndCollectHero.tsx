import { Box, GridItem, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';

const commonProps: any = {
  textAlign: { base: 'center', md: 'left' },
  alignItems: { base: 'center', md: 'flex-start' },
};

const JoinAndCollectHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid
          columns={5}
          justifyContent="center"
          alignItems="center"
          columnGap={{
            base: '4',
            sm: '8',
            md: '12',
            xl: '20',
          }}
        >
          <GridItem display={{ base: 'none', md: 'flex' }} zIndex={1} colSpan={3}>
            <HStack
              bg='linear-gradient(89.4deg, #1F2024 1.43%, rgba(31, 32, 36, 0) 37.28%), url("assets/images/join-and-collect-hero.png")'
              borderRadius="28px"
              position="relative"
              overflow="hidden"
              bgSize="cover"
            >
              <GradientEllipse />
              <Box
                bg="linear-gradient(90deg, rgba(31, 32, 36, 0.784) 50%, rgba(31, 32, 36, 0.7124) 63.01%, rgba(31, 32, 36, 0.608) 72.58%, rgba(31, 32, 36, 0) 100%)"
                borderRadius="28px"
                w="full"
                minH="400px"
                minW="600px"
              />
            </HStack>
          </GridItem>
          <GridItem
            colSpan={{
              base: 5,
              md: 2,
            }}
            zIndex={2}
            {...commonProps}
          >
            <VStack spacing="52px" align={{ base: 'center', md: 'flex-start' }}>
              <VStack spacing="8px" {...commonProps}>
                <Text
                  fontSize={{ base: '56px', md: '52px', xl: '56px' }}
                  lineHeight="60px"
                  fontWeight="300"
                >
                  Join and
                  <Text>collect your</Text>
                  <Text fontWeight="700" paddingTop={2}>
                    NFT collection!
                  </Text>
                </Text>
              </VStack>
              <GradientButton
                title="NFT marketplace"
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
