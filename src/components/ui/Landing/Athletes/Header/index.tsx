import { Box } from '@chakra-ui/react';
import * as React from 'react';
import LandingLine from '../../LandingLine';
import AthletesDescriptionText from './AthletesDescriptionText';
import AthletesTitleText from './AthletesTitleText';

const AthletesHeader: React.FC = () => {
  return (
    <Box textAlign="center">
      <AthletesTitleText />
      <LandingLine dir="h" />
      <AthletesDescriptionText />
    </Box>
  );
};
export default AthletesHeader;
