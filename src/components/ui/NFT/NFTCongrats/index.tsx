import * as React from 'react';
import { Box, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import { C, Common } from '@/components';
import routes from '../../../../data/routes';

const NFTCongrats: React.FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <C.HeroLayout
      minH="50vh"
      removeTopPadding
      backgroundSize="100% 100%"
      backgroungRepeat="no-repeat"
      removeBottomPadding={!isLessThan1280}
      customPadding="100px"
      bgPosition="top"
      bgColor="#121216"
      align="flex-start"
      justify="flex-start"
    >
      <VStack px={{ base: '1em', lg: '0' }} w="full" h="full">
        <VStack rowGap="124px" align="start" h="full" justifyContent="start" w="full" maxW="1200px">
          <VStack rowGap="56px" w="full">
            <VStack
              w={{ base: '90%', md: '73%' }}
              textAlign={{ base: 'center', lg: 'unset' }}
              display="flex"
            >
              <Text
                letterSpacing={{ base: '-0.5px', md: '1-5px' }}
                fontWeight="700"
                fontSize={{ base: '32px', md: '48px' }}
                lineHeight={{ base: '32px', md: '56px' }}
                color="#fff"
              >
                {isLessThan1280 ? 'Congratulations! ' : 'Congrats! '}
                You read the whole thing, right? Now let&apos;s get to the Whitelist!
              </Text>
            </VStack>
            <Box>
              <Common.ImpaktButton
                as="a"
                height="64px"
                textStyle="regular201"
                minW={{ base: '225px', lg: '228px' }}
                href={routes.download}
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
export default NFTCongrats;
