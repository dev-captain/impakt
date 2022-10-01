import React from 'react';
import { Box } from '@chakra-ui/react';
import { UseFormSetValue } from 'react-hook-form';
import { ChallengeList } from 'data';

import ChallengesCard from './ChallengesCard';

const MyRoutines: React.FC<{
  setValue: UseFormSetValue<{
    eventTitle: string;
    eventDescription: string;
    eventStartTime: string;
    eventEndTime: string;
    assocId: number;
  }>;
  onClose: () => void;
}> = ({ setValue, onClose }) => {
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
        <ChallengesCard
          key={t.id}
          onClose={onClose}
          setAssocId={() => setValue('assocId', t.id, { shouldValidate: true })}
          data={t}
        />
      ))}
    </Box>
  );
};

export default MyRoutines;
