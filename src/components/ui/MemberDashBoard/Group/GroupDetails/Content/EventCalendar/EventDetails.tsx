import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useEventCalendarContext } from '@/context/EventCalendarContext';
import { I } from '@/components';

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
// import { useChallengesLeaderboardControllerV1Usersleaderboard } from '../../../../../../../lib/impakt-dev-api-client/react-query/leaderboard/leaderboard';
// import { useChallengeStatsControllerGetUserBestScore } from '../../../../../../../lib/impakt-dev-api-client/react-query/default/default';
import { useChallengesControllerGetOne } from '../../../../../../../lib/impakt-dev-api-client/react-query/challenges/challenges';
import { GetChallengeRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types';
import ConformationModal from '../../Banner/Panel/GroupSettings/Tabs/GeneralSettings/ConfirmationModal';
import { useCalendarEventControllerDeleteCalendarEvent } from '../../../../../../../lib/impakt-dev-api-client/react-query/calendar/calendar';

const EventDetails: React.FC<{
  setActiveChallenge: (activeChallenge: GetChallengeRes) => void;
}> = ({ setActiveChallenge }) => {
  const deleteEvent = useCalendarEventControllerDeleteCalendarEvent();
  const { member } = usePersistedAuthStore();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const deleteConfirmationModal = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const { activeGroup } = usePersistedGroupStore();

  const { getSelectedDayEvent, removeEvent, goToOverViewScreen, goBackToOverViewScreen } =
    useEventCalendarContext();

  const eventObj = getSelectedDayEvent();
  if (!eventObj) return null;
  const findTheChallenge = usePersistedChallengeStore().availableGroupChallenges.find(
    (d) => d.id === JSON.parse(eventObj.data).challengeId,
  );

  const fallbackChallengeFetch = useChallengesControllerGetOne(
    JSON.parse(eventObj.data).challengeId,
    {
      query: {
        enabled: findTheChallenge === undefined && JSON.parse(eventObj.data).challengeId !== null,
      },
    },
  );

  const challange = findTheChallenge ?? fallbackChallengeFetch.data;

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

  // const fetchLeaderboard = useChallengesLeaderboardControllerV1Usersleaderboard(
  //   challange?.id ?? 0,
  //   {},
  //   {
  //     query: {
  //       enabled: !!challange,
  //       retry: 0,
  //       refetchOnMount: true,
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // );

  // const fetchBestScore = useChallengeStatsControllerGetUserBestScore(
  //   challange?.id ?? 0,
  //   member?.id ?? 0,
  //   {
  //     query: {
  //       enabled: !!challange,
  //       retry: 0,
  //       refetchOnMount: true,
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // );

  // const sortLeaderboardByScore = fetchLeaderboard.data?.usersPassed.sort(
  //   (a, b) => b.userScore - a.userScore,
  // );

  // const memberRankIndex = sortLeaderboardByScore?.findIndex(({ id }) => id === member?.id);
  // const memberRank = memberRankIndex;
  // const bestScoreOfUser = fetchBestScore.data;
  // const myBestScore =
  //   bestScoreOfUser && Object.keys(bestScoreOfUser).length > 0
  //     ? bestScoreOfUser.userScore?.toString() ?? '-'
  //     : '-';

  // const myRank = memberRank !== undefined && memberRank !== -1 ? `#${memberRank + 1}` : '-';

  const removeHandle = async () => {
    if (!eventObj) return;
    deleteEvent.mutate(
      { eventId: eventObj.event.id },
      {
        onSuccess: () => {
          removeEvent(eventObj.event);
        },
      },
    );
    // locally delete event
  };

  return (
    <>
      <ActionPreviewModal
        key="event-preview-modal"
        actionPreview={{
          exercices: normalizeExerciseNames(challange?.Routine?.TimelineBlocks ?? []),
          leaderboard: [],
          playedMins: challange?.Routine.estimatedTime
            ? // eslint-disable-next-line no-unsafe-optional-chaining
              Math.ceil(challange?.Routine.estimatedTime! / 60)
            : 0,
          subtitle: truncateString(`${challange?.name ?? '???'}`, 23),
          validUntil: eventObj.time.end.toISOString(),
          title: JSON.parse(eventObj.data).title ?? '',
          mode: 'join',
          isEdit: JSON.parse(eventObj.data).creatorId === member?.id,
          deepLinkToPlay: deepLink,
          modalStatus: getStatus(),
          editButtonClick: () => {
            if (challange) {
              setActiveChallenge(challange);
            }
            goToOverViewScreen('update');
            onClose();
          },
          deleteButtonClick: () => {
            deleteConfirmationModal.onOpen();
          },
        }}
        open={isOpen}
        close={() => {
          goBackToOverViewScreen();
          onClose();
        }}
      />
      <ConformationModal
        buttonIcon={<I.TrashIcon />}
        buttonTitle="Remove Event"
        title="Are you sure? Event will be deleted"
        close={deleteConfirmationModal.onClose}
        open={deleteConfirmationModal.isOpen}
        onClick={removeHandle}
      />
    </>
  );
};
export default EventDetails;
