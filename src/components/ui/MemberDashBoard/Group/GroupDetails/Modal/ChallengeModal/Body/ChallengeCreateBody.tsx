import { VStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { Common } from 'components';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../../../../../data/routes';
import { GetRoutineRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import NoItemCard from '../../ChallengeModalTabs/NoChallengeCard/NoItemCard';
import RoutineCard from '../../ChallengeModalTabs/RoutineCard/RoutineCard';

interface ChallengeCreateBodyPropsI {
  routines: GetRoutineRes[];
  previewOnClick: (preview: GetRoutineRes) => void;
  selectOnClick: (challengeI: GetRoutineRes) => void;
}

export const ChallengeCreateBody: React.FC<ChallengeCreateBodyPropsI> = ({
  routines,
  previewOnClick,
  selectOnClick,
}) => {
  const navigate = useNavigate();

  return (
    <VStack rowGap="24px" pl="0.5em" justifyContent="flex-start" alignItems="flex-start">
      <VStack w="full" spacing="16px" id="exercise-card-item-s" justifyContent="flex-start">
        {routines.length === 0 ? (
          <NoItemCard
            noItemButtonOnClick={() => navigate(routes.download)}
            noItemButtonTitle="Download"
            noItemTitle="You don't have any routines yet."
          >
            <Box mt="0 !important">
              <Text>Download our app to create your first one.</Text>
            </Box>
          </NoItemCard>
        ) : (
          routines.map((routine) => (
            <RoutineCard key={routine.id} routine={routine}>
              <Common.ImpaktButton
                onClick={() => previewOnClick(routine)}
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
                onClick={() => selectOnClick(routine)}
                variant="black"
                w="114px !important"
                h="38px"
                borderRadius="8px"
                type="submit"
                fontSize={{ base: '14px', md: '16px' }}
                fontWeight="700"
              >
                <Text>Select</Text>
              </Common.ImpaktButton>
            </RoutineCard>
          ))
        )}
      </VStack>
    </VStack>
  );
};
