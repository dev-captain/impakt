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
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import AOS from 'aos';
import InfoCard from '../../../core/InfoCard';
import RichIcon from '../../../icons/RichIcon';
import '../../../../theme/styles.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const ImpaktNFT = () => {
  const bgImage = useColorModeValue(Images.impaktNFT.Header, Images.impaktNFT.light);
  const { t } = useTranslation(`default`).i18n;

  return (
    <HeroLayout
      showNavbar
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack columnGap={{ base: 'auto', lg: '40px' }} alignItems="flex-start" w="full">
            <SimpleGrid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
              <GridItem
                w="full"
                alignItems="center"
                justifyContent="center"
                display="flex"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="200"
                data-aos-delay="50"
              >
                <VStack
                  w="full"
                  padding={{ base: '0px 10px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Box mt="0 !important">
                    <Text color="gold" textTransform="uppercase" textStyle="reguler2">
                      {t(Keys.impaktNFT.impaktDesign)}
                    </Text>
                  </Box>
                  <Box mt="0 !important">
                    <Text color="white" letterSpacing="-1.5px" textStyle="TitleBold48">
                      {t(Keys.impaktNFT.impaktlabel)}
                      <Text
                        display="inline-block"
                        letterSpacing="-1.5px"
                        textStyle="TitleBold48"
                        className="gradient-text"
                      >
                        {t(Keys.impaktNFT.impaktChris)}
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
                      {t(Keys.impaktNFT.description)}
                    </Text>
                  </Box>
                  <Box ml="7px !important" mt="0 !important" w="full" id="hero-info-card-box">
                    <InfoCard LeftLogo={<RichIcon />}>
                      <VStack alignItems="flex-start" color="white">
                        <Text textStyle="regular18" color="rgba(255, 255, 255, 0.75);">
                          {t(Keys.impaktNFT.description1)}
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
                      {t(Keys.impaktNFT.careerdescription)}
                      <Text color="gold" as="a" target="_blank" href="#">
                        {t(Keys.impaktNFT.careerdescription1)}
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
                    width={{ base: '100%', lg: '60%', xl: '60%' }}
                    display="flex"
                    justifyContent={{ base: 'center', md: 'center', lg: 'end' }}
                  >
                    <Image
                      height={{ base: 'auto', lg: '90%' }}
                      width={{ base: '100%', md: '50%', lg: '67%', xl: '67%' }}
                      src="assets/images/Chris-Armsden.png"
                      className="imgTopBlur"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-offset="200"
                      data-aos-delay="50"
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
