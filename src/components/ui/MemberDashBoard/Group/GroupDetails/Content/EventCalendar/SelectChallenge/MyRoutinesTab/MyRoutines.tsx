import React from 'react';
import { Box } from '@chakra-ui/react';
import ChallengesCard from './ChallengesCard';

const MyRoutines: React.FC = () => {
  return (
    <Box
      height="530px"
      overflow="auto"
      paddingRight="8px"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          visibility: 'initial',
          width: '10px',
          background: '#D3E2F0',
          borderRadius: '24px',
        },
      }}
    >
      <ChallengesCard
        title="Daily Challenge"
        challenge="8"
        time="5 min"
        play="256"
        like="72"
        timmer={{ h: '08', m: '32', s: '44' }}
        name="Impakt"
      />
      <ChallengesCard title="Good Morning" challenge="22" time="18 min" name="Demideus" />
      <ChallengesCard
        title="Power v3"
        challenge="16"
        time="12 min"
        play="8"
        timmer={{ h: '08', m: '32', s: '44' }}
        name="Demideus"
      />
      <ChallengesCard
        title="Power v3"
        challenge="16"
        time="19 min"
        timmer={{ h: '08', m: '32', s: '44' }}
        name="Demideus"
      />
    </Box>
  );
};

export default MyRoutines;
