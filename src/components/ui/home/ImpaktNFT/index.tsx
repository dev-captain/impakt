/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
  Text,
  Image,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import InfoCard from '../../../core/InfoCard';
import RichIcon from '../../../icons/RichIcon';
// import Gradients from '../RoadmapHero/Gradients';
import '../../../../theme/styles.css';

const ImpaktNFT = () => {
  const bgImage = useColorModeValue(Images.impaktNFT.Header, Images.impaktNFT.light);

  return (
    <HeroLayout
      showNavbar
      spacing={10}
      pos="relative"
      // bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack
        w="full"
        pos="relative"
        _after={{
          transition: 'all .3s ease',
          content: '""',
          top: '-419px',
          pos: 'absolute',
          left: 0,
          w: 'full',
          bottom: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url(${bgImage})`,
          filter: 'blur(15px)',
          zIndex: 0,
        }}
      >
        <VStack maxW={{ base: '100%', lg: '1200px' }} w="full" zIndex="2">
          <HStack columnGap={{ base: 'auto', lg: '40px' }} alignItems="flex-start" w="full">
            <SimpleGrid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
              <GridItem w="full" alignItems="center" justifyContent="center" display="flex">
                <VStack
                  w="full"
                  padding={{ base: '0px 10px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Box mt="0 !important">
                    <Text color="gold" textTransform="uppercase" textStyle="reguler2">
                      nft design
                    </Text>
                  </Box>
                  <Box mt="0 !important">
                    <Text color="white" letterSpacing="-1.5px" textStyle="TitleBold48">
                      Impakt NFT designed in partnership with Oscar Winner —
                      <Text
                        display="inline-block"
                        letterSpacing="-1.5px"
                        textStyle="TitleBold48"
                        className="gradient-text"
                      >
                        Chris Armsden
                      </Text>
                    </Text>
                  </Box>
                  <Box
                    ml="7px !important"
                    mt="0 !important"
                    id="hero-headline-description"
                    backgroundClip="text"
                  >
                    <Text color="rgba(255, 255, 255, 0.85);" textStyle="regular18">
                      Chris Armsden is a graphics technical director and software developer for some
                      of Hollywood’s biggest blockbusters over the last 17 years. Among them, 6 have
                      been Oscar-nominated for their Visual Effects and with The Jungle Book (2016)
                      he took home the prestigious award.
                    </Text>
                  </Box>
                  <Box ml="7px !important" mt="0 !important" w="full" id="hero-info-card-box">
                    <InfoCard LeftLogo={<RichIcon />}>
                      <VStack alignItems="flex-start" color="white">
                        <Text textStyle="regular18" color="rgba(255, 255, 255, 0.75);">
                          Chris believes in the transformational power of graphics to educate, to
                          entertain, to change hearts and minds, and ultimately change the world. If
                          you can see it, you can believe it.
                        </Text>
                      </VStack>
                    </InfoCard>
                  </Box>
                  <Box
                    ml="7px !important"
                    mt="0 !important"
                    id="hero-headline-description"
                    backgroundClip="text"
                  >
                    <Text color="rgba(255, 255, 255, 0.85);" textStyle="regular18">
                      His career is truly impressive! And Impakt is honored to call Chris a partner!
                      Don’t believe us?{' '}
                      <Text color="gold" as="a" target="_blank" href="#">
                        Check it for yourself.
                      </Text>
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
              <GridItem w="full" alignItems="center" justifyContent="center" display="flex">
                <VStack w="full" rowGap="24px" justifyContent="flex-start" alignItems="flex-start">
                  <Box
                    position={{ base: 'static', lg: 'absolute' }}
                    top="85px"
                    right="0"
                    width={{ base: '100%', lg: '67%', xl: '67%' }}
                    display="flex"
                    justifyContent={{ base: 'center', md: 'center', lg: 'end' }}
                  >
                    <Image
                      height={{ base: 'auto', lg: '90%' }}
                      width={{ base: '100%', md: '50%', lg: '67%', xl: '67%' }}
                      src="assets/images/Chris-Armsden.png"
                      className="imgTopBlur"
                    />
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

export default memo(ImpaktNFT);
