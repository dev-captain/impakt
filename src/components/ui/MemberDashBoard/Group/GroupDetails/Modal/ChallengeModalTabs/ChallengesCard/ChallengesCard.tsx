import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { Day } from 'dayspan';
import { convertMsToHM, truncateString } from '../../../../../../../../utils';
import { usePersistedAuthStore } from '../../../../../../../../lib/zustand';
import { AvailableGroupChallengesTypeI } from '../../../../../../../../lib/zustand/stores/challengeStore';
import ChallengesCardScoreLabelsWrapper from './ChallengesCardScoreLabelsWrapper';
import ChallengeCardMetaLabel from './ChallengeCardMetaLabel';

interface ChallengesCardProps {
  data: AvailableGroupChallengesTypeI;
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({ data, children }) => {
  const { challenge, likes, attempts } = data;

  const isValidDate = challenge.validFrom
    ? Day.fromString(challenge.validFrom)!.time < Day.now().time
    : false;
  const getTimeDifference = () => {
    if (!isValidDate) return { h: 0, m: 0, s: 0, d: 0 };

    const d = Day.fromString(challenge.validUntil ?? '').daysBetween(Day.now());
    console.log(challenge.validUntil, d);
    const h = Day.fromString(challenge.validUntil ?? '').hoursBetween(Day.now()) % 24;
    const m = Day.fromString(challenge.validUntil ?? '').minutesBetween(Day.now()) % 60;

    return { h, m, d };
  };

  return (
    <Box
      padding={{ base: '12px', md: '24px' }}
      border="2px solid #EEF4F6"
      borderRadius="24px"
      marginBottom="16px"
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        lineHeight={{ base: '35px', md: 0 }}
      >
        <Text color="#29323B" fontSize={{ base: '18px', md: '24px' }} fontWeight="600">
          {truncateString(`${challenge.name}`, 23)}
        </Text>

        <ChallengesCardScoreLabelsWrapper
          attemptScore={attempts.successAttempts}
          estimationTimeScore={`${Math.ceil(challenge.Routine.estimatedTime / 60)} min`}
          likeScore={likes?.count ?? undefined}
        />
      </Box>
      <Box
        mt={{ base: '14px', md: '20px' }}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <ChallengeCardMetaLabel
          times={{
            h: getTimeDifference().h,
            m: getTimeDifference().m,
            d: getTimeDifference().d,
          }}
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

export default ChallengesCard;
