import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { truncateString } from '../../../../../../../../utils';
import { GetRoutineRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types';
import ChallengesCardScoreLabelsWrapper from '../ChallengesCard/ChallengesCardScoreLabelsWrapper';

interface RoutineCardProps {
  routine: GetRoutineRes;
}

const RoutineCard: React.FC<RoutineCardProps> = ({ routine, children }) => {
  return (
    <Box
      w="100%"
      padding={{ base: '12px', md: '24px' }}
      border="2px solid #EEF4F6"
      borderRadius="24px"
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        lineHeight={{ base: '35px', md: 0 }}
      >
        <Text color="#29323B" fontSize={{ base: '18px', md: '24px' }} fontWeight="600">
          {truncateString(`${routine.name}`, 23)}
        </Text>
      </Box>
      <Box
        mt={{ base: '14px', md: '25px' }}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <ChallengesCardScoreLabelsWrapper
          estimationTimeScore={`${Math.ceil(routine.estimatedTime / 60)} min`}
        />
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap="12px"
          mt={{ base: '10px', md: 0 }}
        >
          {/* <Common.ImpaktButton
            variant="black"
            color="#29323B"
            h="38px"
            w="128px !important"
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight="700"
          >
            <Text>Preview</Text>
          </Common.ImpaktButton> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default RoutineCard;
