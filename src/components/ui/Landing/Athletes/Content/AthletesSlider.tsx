import { GridItem, HStack } from '@chakra-ui/react';
import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import TeamCard from './TeamCard';
import Keys from '@/i18n/translations/en';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AthletesSlider: React.FC = () => {
  const Team = [Keys.athletes];

  return (
    <Slider {...settings}>
      {Team.map((advisor: any) => {
        return (
          <GridItem
            key={advisor.name}
            w="full"
            maxW="350px"
            maxH="560px"
            p="24px 24px 24px"
            align="center"
            transitionDuration="150ms"
            justify="space-between"
            bgColor="#fff"
            position="relative"
            borderRadius="20px"
            backdropFilter="blur(40px)"
            boxShadow="0px 8px 15px -5px rgba(0, 0, 0, 0.8)"
          >
            <HStack w="full" align="center" justify="center">
              <TeamCard {...advisor} />
            </HStack>
          </GridItem>
        );
      })}
    </Slider>
  );
};

const settings = {
  className: '',
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
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

export default AthletesSlider;
