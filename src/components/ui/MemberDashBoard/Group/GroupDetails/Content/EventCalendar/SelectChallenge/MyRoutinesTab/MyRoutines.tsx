import React from 'react';
import { Box } from '@chakra-ui/react';
import { UseFormSetValue } from 'react-hook-form';

import ChallengesCard from './ChallengesCard';
import { useAppSelector } from '../../../../../../../../../hooks';

const MyRoutines: React.FC<{
  setValue: UseFormSetValue<{
    eventTitle: string;
    eventDescription: string;
    eventStartTime: string;
    eventEndTime: string;
    assocId: number;
    assocName: string;
  }>;
  onClose: () => void;
}> = ({ setValue, onClose }) => {
  const availableGroupChallenges = useAppSelector(
    (state) => state.challengesReducer.availableGroupChallenges,
  );
  if (!availableGroupChallenges.length) return null;

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
      {availableGroupChallenges.map((t) => (
        <ChallengesCard
          key={t.challenge.id}
          onClose={onClose}
          setAssocId={() => setValue('assocId', t.challenge.id, { shouldValidate: true })}
          setAssocName={() => setValue('assocName', t.challenge.name, { shouldValidate: true })}
          data={t}
        />
      ))}
    </Box>
  );
};

export default MyRoutines;
