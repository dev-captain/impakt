import * as React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { C, Common } from 'components';
import Images from 'assets/images';

const NFTCongrats: React.FC = () => {
  return (
    <C.HeroLayout
      backgroundSize="100% 100%"
      bgImage={Images.backgrounds.nftBg2}
      align="flex-start"
      justify="flex-start"
    >
      <VStack px={{ base: '1em', lg: '0' }} w="full" h="full">
        <VStack rowGap="124px" align="start" h="full" justifyContent="start" w="full" maxW="1200px">
          <VStack rowGap="2em" w="full" id="nft-accordion-container">
            <HStack w="full">
              <Text
                letterSpacing="-1.5px"
                fontWeight="700"
                fontSize="48px"
                lineHeight="56px"
                color="#fff"
              >
                Here are some common questions...
              </Text>
            </HStack>
            <HStack
              flexDir={{ base: 'column', lg: 'row' }}
              mt="0 !important"
              columnGap="3em"
              rowGap="0.5em"
              justifyContent="flex-start"
              alignItems="flex-start"
              w="full"
            >
              <VStack w="full">
                <Common.ImpaktAccordion items={accordionItems1} />
              </VStack>
              <VStack m="0 !important" w="full">
                <Common.ImpaktAccordion items={accordionItems2} />
              </VStack>
            </HStack>
          </VStack>
          <VStack rowGap="56px" w="full">
            <VStack textAlign={{ base: 'center', lg: 'unset' }} display="flex">
              <Text
                letterSpacing={{ base: '-0.5px', lg: '1-5px' }}
                fontWeight="700"
                fontSize={{ base: '32px', lg: '48px' }}
                lineHeight={{ base: '100%', lg: '56px' }}
                color="#fff"
              >
                Congrats! You read the whole thing
              </Text>

              <Text
                letterSpacing={{ base: '-0.5px', lg: '1-5px' }}
                fontWeight="700"
                fontSize={{ base: '32px', lg: '48px' }}
                lineHeight={{ base: '100%', lg: '56px' }}
                color="#fff"
              >
                right? Now let&apos;s get to the Whitelist!
              </Text>
            </VStack>
            <Box>
              <Common.ImpaktButton
                as="a"
                height="64px"
                textStyle="regular201"
                minW={{ base: '168px', lg: '224px' }}
                href="/download"
                borderRadius="12px"
                boxShadow="0px 0px 0px 6px rgba(240, 65, 83, 0.3)"
              >
                How to Whitelist?
              </Common.ImpaktButton>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};
const accordionItems1: { title: string; description: string }[] = [
  {
    title: 'Which blockchain?',
    description: 'ETH',
  },

  {
    title: 'Whitelist period?',
    description: 'June 1st - July 1st',
  },

  {
    title: 'Impakt pass mint date?',
    description: 'ETA July 4th',
  },

  {
    title: 'Impakt pass mint price?',
    description: 'First 10,000 for free! 0.3 ETH after the Genesis mint.',
  },
];
const accordionItems2: { title: string; description: string }[] = [
  {
    title: 'Impakt pass mint date?',
    description: 'ETA July 8th 2022',
  },

  {
    title: 'Impakt pass mint price?',
    description: 'Will updated soon',
  },

  {
    title: 'Impakt genesis reveal date?',
    description: 'ETA July 10th 2022',
  },

  {
    title: 'What is special about genesis?',
    description:
      'Impakt Genesis is our first ever collection. Further collections will never match the Genesis full utility.',
  },
];
export default NFTCongrats;
