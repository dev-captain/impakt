import * as React from 'react';
import { I } from 'components';
import { IconButton, Skeleton, useDisclosure } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../../../lib/zustand';
import ChallengeModal from '../../../Modal/ChallengeModal';
import ChallengePreviewModal from '../../../Modal/ChallengePreviewModal';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { useFavoriteControllerV1CreateOne } from '../../../../../../../../lib/impakt-dev-api-client/react-query/favorites/favorites';
import { useGroupsControllerV1GetGroupPinnedChallenges } from '../../../../../../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { useChallengesLeaderboardControllerV1Usersleaderboard } from '../../../../../../../../lib/impakt-dev-api-client/react-query/leaderboard/leaderboard';
import { useChallengeStatsControllerGetUserBestScore } from '../../../../../../../../lib/impakt-dev-api-client/react-query/default/default';
import { convertMsToHM, normalizeExerciseNames } from '../../../../../../../../utils';

const GroupLabels: React.FC = () => {
  const [playedTimes, setPlayedTimes] = React.useState(0);
  const { activeGroup } = usePersistedGroupStore();
  const { member } = usePersistedAuthStore();
  const groupPinnedChallenge = useGroupsControllerV1GetGroupPinnedChallenges(activeGroup?.id ?? 0);
  const createPinnedChallenge = useFavoriteControllerV1CreateOne();
  const [activeChallenge, setActiveChallenge] = React.useState<GetChallengeRes | null>(
    groupPinnedChallenge.data?.Challenge ?? null,
  );
  const challengeLeaderBoard = useChallengesLeaderboardControllerV1Usersleaderboard(
    activeChallenge?.id ?? 0,
    {
      query: {
        enabled: activeChallenge !== null,
      },
    },
  );

  const bestScoreOfUser = useChallengeStatsControllerGetUserBestScore(
    activeChallenge?.id ?? 0,
    member?.id ?? 0,
    {
      query: { enabled: activeChallenge !== null },
    },
  );

  const memberRank = challengeLeaderBoard.data?.usersPassed.find(
    ({ username }) => username === member?.username,
  )?.userCount;

  React.useEffect(() => {
    if (challengeLeaderBoard.data) {
      let count = 0;
      challengeLeaderBoard.data?.usersPassed.forEach(({ userTime }) => {
        count += userTime ?? 0;
      });

      setPlayedTimes(count);
    }
  }, [challengeLeaderBoard]);

  React.useEffect(() => {
    if (groupPinnedChallenge.data) {
      setActiveChallenge(groupPinnedChallenge.data.Challenge);
    }
  }, [groupPinnedChallenge.isSuccess]);

  const challengeModalDisclosure = useDisclosure();
  const challengePreviewModalDisclosure = useDisclosure();
  const { role } = usePersistedGroupStore();
  const isCreator = role === 'Creator';
  const groupStatisticLabelItems = [
    // {
    //   Icon: () => <I.CalenderIcon color="#5C7FFF" />,
    //   labelTitle: 'next event',
    //   labelDescription: 'Power Training',
    // },
    {
      leftIcon:
        activeChallenge?.name || !isCreator ? (
          <I.FireIcon />
        ) : (
          <IconButton
            onClick={(e) => {
              if (isCreator) {
                e.stopPropagation();
                challengeModalDisclosure.onOpen();
              }
            }}
            fontSize="40px"
            width="40px"
            h="40px"
            aria-label="create-top-challenge"
            variant="ghost"
            icon={<I.AddBannerLabelItemIcon />}
          />
        ),
      visible: true,
      labelTitle: 'Pinned Challenge',
      labelDescription:
        // eslint-disable-next-line no-nested-ternary
        activeChallenge?.name && activeChallenge.name.length > 0
          ? activeChallenge?.name
          : isCreator
          ? 'Select Challenge'
          : 'No Challenge Selected',
      rightIcon:
        isCreator && activeChallenge?.name && activeChallenge.name.length > 0 ? (
          <IconButton
            onClick={(e) => {
              if (isCreator) {
                e.stopPropagation();
                challengeModalDisclosure.onOpen();
              }
            }}
            fontSize="40px"
            width="40px"
            h="40px"
            aria-label="update-top-challenge"
            icon={<I.PenIcon />}
          />
        ) : null,
      onClick: () => {
        if (activeChallenge) {
          challengePreviewModalDisclosure.onOpen();
        }

        if (!activeChallenge && isCreator) {
          challengeModalDisclosure.onOpen();
        }
      },
    },
    // { Icon: () => <I.AppIcon />, labelTitle: 'top program', labelDescription: 'Home Abs' },
  ];

  const handlePinnedChallenge = (actChallenge: GetChallengeRes) => {
    if (!activeGroup) return;

    setActiveChallenge(actChallenge);
    createPinnedChallenge.mutate({
      data: { objectId: actChallenge.id, type: 'Challenge' },
      referenceType: 'Group',
      referenceId: activeGroup?.id,
    });
  };

  return (
    <>
      <Skeleton isLoaded={!groupPinnedChallenge.isLoading}>
        <GroupLabelWrapper items={groupStatisticLabelItems} />
      </Skeleton>
      <ChallengeModal
        setActiveChallenge={handlePinnedChallenge}
        close={challengeModalDisclosure.onClose}
        open={challengeModalDisclosure.isOpen}
      />
      <ChallengePreviewModal
        close={challengePreviewModalDisclosure.onClose}
        open={challengePreviewModalDisclosure.isOpen}
        challengePreview={{
          title: activeChallenge?.name ?? 'Daily Challenge',
          creator: activeChallenge?.Routine?.Creator?.username ?? 'Impakt',
          deepLinkToPlay: `https://fitness.impakt.com/?challengeId=${activeChallenge?.id}&groupId=${activeGroup?.id}`,
          exercices: normalizeExerciseNames(activeChallenge?.Routine?.TimelineBlocks ?? []),
          leaderboard: challengeLeaderBoard.data?.usersPassed ?? [],
          likeCount: activeChallenge?.likes ?? 0,
          myBestScore:
            bestScoreOfUser.data && Object.keys(bestScoreOfUser.data).length > 0
              ? bestScoreOfUser.data.userScore?.toString() ?? '-'
              : '-',
          myRank: memberRank !== undefined ? `#${memberRank}` : '-',
          playedTimes: challengeLeaderBoard.data?.totalParticipants ?? 0,
          playedMins: convertMsToHM(playedTimes, true).m,
          validFrom: activeChallenge?.validFrom ?? '',
          validUntil: activeChallenge?.validUntil ?? '',
        }}
      />
    </>
  );
};

export default GroupLabels;
