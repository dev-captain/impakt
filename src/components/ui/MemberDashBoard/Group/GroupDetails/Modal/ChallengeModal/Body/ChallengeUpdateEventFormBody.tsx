import React from 'react';
import { Common, Forms } from 'components';
import { Text } from '@chakra-ui/react';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import RoutineCard from '../../ChallengeModalTabs/RoutineCard/RoutineCard';

interface ChallengeUpdateEventFormBody {
  formCb: () => void;
  previewChallenge: GetChallengeRes | null;
  previewOnClick: () => void;
  replaceOnClick: () => void;
}
export const ChallengeUpdateEventFormBody: React.FC<ChallengeUpdateEventFormBody> = ({
  formCb,
  previewChallenge,
  previewOnClick,
  replaceOnClick,
}) => {
  if (!previewChallenge) return null;

  return (
    <Forms.UpdateEventForm
      formCb={formCb}
      challengeName={previewChallenge.name}
      challengeId={previewChallenge.id}
    >
      <RoutineCard showLabel routine={previewChallenge.Routine}>
        <Common.ImpaktButton
          onClick={previewOnClick}
          variant="white-50"
          w="114px !important"
          h="38px"
          borderRadius="8px"
          type="submit"
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="700"
        >
          <Text>Preview</Text>
        </Common.ImpaktButton>
        <Common.ImpaktButton
          onClick={replaceOnClick}
          variant="black"
          w="114px !important"
          h="38px"
          borderRadius="8px"
          type="submit"
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="700"
        >
          <Text>Replace</Text>
        </Common.ImpaktButton>
      </RoutineCard>
    </Forms.UpdateEventForm>
  );
};
