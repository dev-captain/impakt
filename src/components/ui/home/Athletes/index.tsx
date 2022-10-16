import { useState } from 'react';
import {
  GridItem,
  HStack,
  // SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { C, Common } from 'components';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamCard from './TeamCard';

const Athletes = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;
  const Team = t('athletes.team', { returnObjects: true }) as object[];

  const navigate = useNavigate();

  return (
    <C.HeroLayout
      bgColor="#F0F7FF"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '100px',
        '2xl': '0px',
      }}
      // minH="70vh"
    >
      <VStack spacing="0px" px="16px" maxW="100%" w="full" color={textColor}>
        <VStack width="100%">
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxW="100%"
            pb="16px"
          >
            <VStack
              w="full"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              <Box textAlign="center">
                <Text
                  color="#1C1C28"
                  fontSize={{ base: '30px', md: '50px' }}
                  textStyle="semiBold17"
                  fontWeight="700"
                  margin="auto"
                  lineHeight="100%"
                  maxWidth="600px"
                >
                  {t(keys.impaktGamesHero.athletesTitle)}
                </Text>
                <Box height="1px" background="#000" width="152px" margin="24px auto" />
                <Text
                  color="#1C1C28"
                  fontSize={{ md: '18px', base: '15px' }}
                  lineHeight="inherit"
                  fontWeight="500"
                  textStyle="TitleBold48"
                  maxWidth="670px"
                  margin="auto"
                  mb={{ lg: '97px', base: '40px' }}
                >
                  {t(keys.impaktGamesHero.athletesDescription)}
                </Text>
              </Box>
            </VStack>
            <Box w="full" maxW="1200px" alignItems="center">
              <Slider {...settings}>
                {Team.map((advisor: any) => {
                  return (
                    <GridItem
                      key={advisor.name}
                      w="full"
                      height="100%"
                      maxW="350px"
                      maxH="560px"
                      p="42px 24px 24px"
                      align="center"
                      transitionDuration="150ms"
                      justify="space-between"
                      bgColor="#fff"
                      position="relative"
                      borderRadius="20px"
                      backdropFilter="blur(40px)"
                      boxShadow="0px 8px 15px 3px rgba(0, 0, 0, 0.05)"
                    >
                      <HStack w="full" align="center" justify="center">
                        <TeamCard {...advisor} />
                      </HStack>
                    </GridItem>
                  );
                })}
              </Slider>
            </Box>
            <VStack width="100%" mt="78px !important" mb="56px !important">
              <Box textAlign="center">
                <Text
                  fontSize={{ md: '32px', base: '26px' }}
                  fontWeight="500"
                  lineHeight="120%"
                  mb="40px"
                  color="#1C1C28"
                >
                  Got what it takes to be an ICON?
                </Text>
                <Common.ImpaktButton
                  color="#ffffff"
                  bg="#000000"
                  height="50px"
                  w={{ md: '300px', base: '170px' }}
                  gap="8px"
                  padding="10px 14px"
                  _hover={{ bg: '#000', color: '#fff' }}
                  // disabled
                  onClick={() => navigate('/contact')}
                >
                  Apply Here
                </Common.ImpaktButton>
              </Box>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

const settings = {
  className: '',
  dots: false,
  infinite: true,
  speed: 0,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
} as Settings;

export default Athletes;
