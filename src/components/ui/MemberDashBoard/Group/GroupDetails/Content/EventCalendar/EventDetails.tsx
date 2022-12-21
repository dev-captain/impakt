import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useEventCalendarContext } from 'context/EventCalendarContext';

import { deepLinkToApp } from '../../../../../../../data';
import {
  usePersistedAuthStore,
  usePersistedChallengeStore,
  usePersistedGroupStore,
} from '../../../../../../../lib/zustand';
import {
  compareDateWithNow,
  normalizeExerciseNames,
  truncateString,
} from '../../../../../../../utils';
import ActionPreviewModal from '../../Modal/ActionPreviewModal';
import { useChallengesLeaderboardControllerV1Usersleaderboard } from '../../../../../../../lib/impakt-dev-api-client/react-query/leaderboard/leaderboard';
import { useChallengeStatsControllerGetUserBestScore } from '../../../../../../../lib/impakt-dev-api-client/react-query/default/default';
import { useChallengesControllerGetOne } from '../../../../../../../lib/impakt-dev-api-client/react-query/challenges/challenges';

const EventDetails: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const { activeGroup } = usePersistedGroupStore();

  const { getSelectedDayEvent, goBackToOverViewScreen, goToOverViewScreen } =
    useEventCalendarContext();

  const eventObj = getSelectedDayEvent();
  if (!eventObj) return null;
  const findTheChallenge = usePersistedChallengeStore().availableGroupChallenges.find(
    (d) => d.id === JSON.parse(eventObj.data).challengeId,
  );
  const fallbackChallengeFetch = useChallengesControllerGetOne(
    JSON.parse(eventObj.data).challengeId,
    { query: { enabled: findTheChallenge === undefined } },
  );

  const challange = findTheChallenge ?? fallbackChallengeFetch.data;

  usePersistedChallengeStore().availableGroupChallenges.find(
    (d) => d.id === JSON.parse(eventObj.data).challengeId,
  );

  const deepLink = deepLinkToApp(activeGroup?.id, eventObj.event.id);

  const { d, h, m, s } = compareDateWithNow(eventObj.time.end.toISOString());

  const getStatus = () => {
    if (d === '00' && h === '00' && m === '00' && s === '00') {
      return 'finished';
    }

    if (d === '00' && h === '00' && Number(m) < 15) {
      return 'starting';
    }

    return 'pending';
  };

  const fetchLeaderboard = useChallengesLeaderboardControllerV1Usersleaderboard(
    challange?.id ?? 0,
    { eventId: JSON.parse(eventObj.data).assocId },
    {
      query: {
        retry: 0,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
      },
    },
  );

  const fetchBestScore = useChallengeStatsControllerGetUserBestScore(
    challange?.id ?? 0,
    member?.id ?? 0,
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
      },
    },
  );

  const sortLeaderboardByScore = fetchLeaderboard.data?.usersPassed.sort(
    (a, b) => b.userScore - a.userScore,
  );

  const memberRankIndex = sortLeaderboardByScore?.findIndex(({ id }) => id === member?.id);
  const memberRank = memberRankIndex;
  const bestScoreOfUser = fetchBestScore.data;
  const myBestScore =
    bestScoreOfUser && Object.keys(bestScoreOfUser).length > 0
      ? bestScoreOfUser.userScore?.toString() ?? '-'
      : '-';

  const myRank = memberRank !== undefined && memberRank !== -1 ? `#${memberRank + 1}` : '-';

  return (
    <ActionPreviewModal
      key="event-preview-modal"
      actionPreview={{
        exercices: normalizeExerciseNames(challange?.Routine?.TimelineBlocks ?? []),
        leaderboard: sortLeaderboardByScore ?? [],
        playedMins: challange?.Routine.estimatedTime
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            Math.ceil(challange?.Routine.estimatedTime! / 60)
          : 0,
        subtitle: truncateString(`${challange?.name}`, 23),
        validUntil: eventObj.time.end.toISOString(),
        title: JSON.parse(eventObj.data).title ?? '',
        mode: 'join',
        isEdit: JSON.parse(eventObj.data).creatorId === member?.id,
        deepLinkToPlay: deepLink,
        modalStatus: getStatus(),
        myRank,
        editButtonClick: () => {
          goToOverViewScreen('update');
          onClose();
        },
        myBestScore,
        isPlayedByMember: myRank !== '-',
      }}
      open={isOpen}
      close={() => {
        onClose();
        goBackToOverViewScreen();
      }}
    />
  );
};
export default EventDetails;
