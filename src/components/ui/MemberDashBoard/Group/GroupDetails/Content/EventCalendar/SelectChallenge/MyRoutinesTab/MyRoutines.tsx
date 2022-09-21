import React from 'react';
import { Box } from '@chakra-ui/react';
import { ChallengeList } from 'data';
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
      {ChallengeList.map((t) => (
        <ChallengesCard data={t} />
      ))}
    </Box>
  );
};

export default MyRoutines;
