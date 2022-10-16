import { Box } from '@chakra-ui/react';
import * as React from 'react';
import LandingLine from '../../LandingLine';
import FitnessJourneyDescriptionText from './FitnessJourneyDescriptionText';
import FitnessJourneyGetTheAppButton from './FitnessJourneyGetTheAppButton';
import FitnessJourneyTitleText from './FitnessJourneyTitleText';

const FitnessJourneyHeader: React.FC = () => {
  return (
    <Box display={{ base: 'block', md: 'flex' }} justifyContent="space-between" alignItems="center">
      <Box display={{ base: 'block', md: 'flex' }}>
        <FitnessJourneyTitleText />
        <LandingLine dir="v" margin={{ base: '30px auto', md: 'auto 48px auto 9px' }} />
        <FitnessJourneyDescriptionText />
      </Box>
      <FitnessJourneyGetTheAppButton />
    </Box>
  );
};
export default FitnessJourneyHeader;
