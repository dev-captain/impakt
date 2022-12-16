import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { journeyData } from '../../../../../data';
import FitnessJourneyCard from './FitnessJourneyCard';

const FitnestJourneyCardWrapper: React.FC = () => {
  return (
    <Box
      display={{ base: 'block', md: 'flex' }}
      justifyContent="space-between"
      gap={{ lg: '35px', base: '22px' }}
      mt="40px"
    >
      {journeyData.map((data) => (
        <FitnessJourneyCard
          key={`item-${data.title}`}
          img={data.img}
          title={data.title}
          description={data.description}
        />
      ))}
    </Box>
  );
};
export default FitnestJourneyCardWrapper;
