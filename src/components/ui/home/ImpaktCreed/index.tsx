/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import { VStack, HStack, Box, Text, GridItem, SimpleGrid } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import InfoCard from '../../../core/InfoCard';
import RichIconK from '../../../icons/RichIconK';
import Images from '../../../../assets/images';

const ImpaktCreed = () => {
  return (
    <HeroLayout
      showNavbar
      pos="relative"
      bgImage={Images.backgrounds.creedSectionBg}
      align="flex-start"
      minH="auto !important"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack w="full">
          <HStack justifyContent="center" alignItems="flex-start" w="full">
            <SimpleGrid>
              <GridItem
                w={{ base: '100%', sm: '100%', md: '548px', lg: '548px' }}
                margin="auto"
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                <VStack
                  w="full"
                  padding={{ base: '0px 10px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  display="block"
                >
                  <Box mt="0 !important" mb="24px">
                    <Text color="#F04153" textTransform="uppercase" textStyle="semiBold17">
                      creed
                    </Text>
                  </Box>
                  <Box mt="0 !important" mb="24px !important">
                    <Text color="white" letterSpacing="-2.5px" textStyle="TitleBold64">
                      The Impakt Creed
                    </Text>
                  </Box>
                  <Box
                    mt="0 !important"
                    id="hero-headline-description"
                    mb="24px !important"
                    backgroundClip="text"
                  >
                    <Text color="rgba(255, 255, 255, 0.85);" fontSize="20px" textStyle="regular20">
                      Call us old-school, but we believe that you
                      <b>build first and market later</b>. Many projects do it backwards: sell-out
                      an NFT collection, get 1000 ETH, build later. Our creed is:{' '}
                      <b>provide value before asking for investment</b>. That&apos;s why even before
                      seeking institutional investment or even taking a penny from the community, we
                      had our Beta app out.
                    </Text>
                  </Box>
                  <Box mt="0 !important" w="full">
                    <InfoCard LeftLogo={<RichIconK />}>
                      <VStack alignItems="flex-start" color="white">
                        <Text textStyle="regular20" color="rgba(255, 255, 255, 0.75);">
                          We are visionaries, we are innovators,
                          <br /> we are builders. We are Impakt.
                        </Text>
                      </VStack>
                    </InfoCard>
                  </Box>
                </VStack>
              </GridItem>
            </SimpleGrid>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(ImpaktCreed);
