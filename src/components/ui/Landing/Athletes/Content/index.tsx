import { Box } from '@chakra-ui/react';
import * as React from 'react';
import AthletesSlider from './AthletesSlider';

const AthleteContent: React.FC = () => {
  return (
    <Box w="full" maxW="1200px" alignItems="center">
      <AthletesSlider />
    </Box>
  );
};
export default AthleteContent;
