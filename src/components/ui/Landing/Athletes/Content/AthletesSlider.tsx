import { GridItem, HStack } from '@chakra-ui/react';
import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import { useTranslation } from 'react-i18next';
import TeamCard from './TeamCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AthletesSlider: React.FC = () => {
  const { t } = useTranslation().i18n;
  const Team = t('athletes.team', { returnObjects: true }) as object[];

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
            boxShadow="0px 8px 15px 3px rgba(0, 0, 0, 0.05)"
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
  speed: 500,
  autoplay: true,
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

export default AthletesSlider;
