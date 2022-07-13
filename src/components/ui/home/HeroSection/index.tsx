/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';

import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

export const HeroSection: React.FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return isLessThan1280 ? <HeroMobile /> : <HeroDesktop />;
};

export default HeroSection;
