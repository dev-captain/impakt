import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { Common } from '@/components';
import { GetRoutineRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import { CreateChallengeForm } from '../../../../../../../forms/groups/CreateChallengeForm';
import RoutineCard from '../../ChallengeModalTabs/RoutineCard/RoutineCard';

interface ChallengeCreateFormBody {
  formCb: () => void;
  previewRoutine: GetRoutineRes | null;
  previewOnClick: () => void;
  replaceOnClick: () => void;
}
export const ChallengeCreateFormBody: React.FC<ChallengeCreateFormBody> = ({
  previewRoutine,
  formCb,
  replaceOnClick,
  previewOnClick,
}) => {
  if (!previewRoutine) return null;

  return (
    <CreateChallengeForm cb={formCb} previewRoutine={previewRoutine}>
      <RoutineCard routine={previewRoutine}>
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
    </CreateChallengeForm>
  );
};
