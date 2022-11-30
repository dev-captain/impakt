import { Box } from '@chakra-ui/react';
import React from 'react';
import { I } from '../../../../../../..';
import ChallengesCardScoreLabel from './ChallengesCardScoreLabel';

interface ChallengesCardScoreLabelsWrapperPropsI {
  attemptScore?: number;
  likeScore?: number;
  estimationTimeScore: string;
}

const ChallengesCardScoreLabelsWrapper: React.FC<ChallengesCardScoreLabelsWrapperPropsI> = ({
  attemptScore,
  likeScore,
  estimationTimeScore,
}) => {
  return (
    <Box display="flex" gap="6px" color="#4E6070" flexWrap="wrap">
      {attemptScore !== undefined && (
        <ChallengesCardScoreLabel
          icon={<I.HandIcon width="16px" height="16px" />}
          score={attemptScore}
        />
      )}

      <ChallengesCardScoreLabel
        icon={<I.ClockIcon width="14px" height="14px" />}
        score={estimationTimeScore}
      />

      {likeScore !== undefined && (
        <ChallengesCardScoreLabel
          icon={<I.HeartIcon width="14px" height="14px" />}
          score={likeScore}
        />
      )}
    </Box>
  );
};
export default ChallengesCardScoreLabelsWrapper;
