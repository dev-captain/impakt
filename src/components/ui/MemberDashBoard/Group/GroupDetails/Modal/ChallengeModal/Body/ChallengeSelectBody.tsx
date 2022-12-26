import React from 'react';
import { Text } from '@chakra-ui/react';
import { Common } from '@/components';
import ChallengesCard from '../../ChallengeModalTabs/ChallengesCard/ChallengesCard';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import NoItemCard from '../../ChallengeModalTabs/NoChallengeCard/NoItemCard';

interface PropsI {
  challenges: GetChallengeRes[];
  previewOnClick: (preview: GetChallengeRes) => void;
  selectOnClick: (challengeI: GetChallengeRes) => void;
  noItemCardCreateOnClick: () => void;
  formName?: string;
}

export const ChallengeSelectBody: React.FC<PropsI> = ({
  challenges,
  previewOnClick,
  selectOnClick,
  noItemCardCreateOnClick,
  formName,
}) => {
  if (challenges.length === 0) {
    return (
      <NoItemCard
        noItemTitle="You don't have any active challenges. Create one to pin it."
        noItemButtonTitle="Create"
        noItemButtonOnClick={noItemCardCreateOnClick}
      />
    );
  }

  return (
    <>
      {challenges.map((challengeI) => (
        <ChallengesCard key={challengeI.id} challenge={challengeI}>
          <Common.ImpaktButton
            onClick={() => previewOnClick(challengeI)}
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
            onClick={() => selectOnClick(challengeI)}
            variant="black"
            w="114px !important"
            h="38px"
            borderRadius="8px"
            type="submit"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight="700"
            form={formName}
          >
            <Text>Select</Text>
          </Common.ImpaktButton>
        </ChallengesCard>
      ))}
    </>
  );
};
