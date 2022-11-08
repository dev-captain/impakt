import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { UseFormSetValue } from 'react-hook-form';
import { Link as ReactLink } from 'react-router-dom';

import ChallengesCard from './ChallengesCard';
import { usePersistedChallengeStore } from '../../../../../../../../../lib/zustand';

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
  const { availableGroupChallenges } = usePersistedChallengeStore();

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
      {availableGroupChallenges.length === 0 ? (
        <Text cursor="pointer" color="gray.500">
          Sorry, You have to create your challenges{' '}
          <Link as={ReactLink} to="/download">
            <Text as="u">in-game</Text>
          </Link>
          . The creation of the challenges will be available here soon...
        </Text>
      ) : (
        availableGroupChallenges.map((t) => (
          <ChallengesCard
            key={t.challenge.id}
            onClose={onClose}
            setAssocId={() => setValue('assocId', t.challenge.id, { shouldValidate: true })}
            setAssocName={() => setValue('assocName', t.challenge.name, { shouldValidate: true })}
            data={t}
          />
        ))
      )}
    </Box>
  );
};

export default MyRoutines;
