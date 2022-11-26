import * as React from 'react';
import { isMobile } from 'react-device-detect';
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
import { normalizeExerciseNames } from '../../../../../../../../utils';

const GroupLabels: React.FC = () => {
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
  const sortLeaderboardByScore = challengeLeaderBoard.data?.usersPassed.sort(
    (a, b) => b.userScore - a.userScore,
  );
  const memberRankIndex = sortLeaderboardByScore?.findIndex(
    ({ username }) => username === member?.username,
  );
  // eslint-disable-next-line no-nested-ternary, no-constant-condition
  const memberRank = memberRankIndex;

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
          creator:
            activeChallenge?.Routine?.Creator?.username ??
            activeChallenge?.Creator?.username ??
            'Impakt',
          // eslint-disable-next-line no-nested-ternary
          deepLinkToPlay: isMobile
            ? `impakt://challenge?challengeId=${activeChallenge?.id}&groupId=${activeGroup?.id}`
            : process.env.REACT_APP_NODE_ENV === 'production'
            ? `https://fitness.impakt.com/?challengeId=${activeChallenge?.id}&groupId=${activeGroup?.id}`
            : `https://fitness.impakt-dev.com/?challengeId=${activeChallenge?.id}&groupId=${activeGroup?.id}`,
          exercices: normalizeExerciseNames(activeChallenge?.Routine?.TimelineBlocks ?? []),
          leaderboard: sortLeaderboardByScore ?? [],
          likeCount: activeChallenge?.likes ?? 0,
          myBestScore:
            bestScoreOfUser.data && Object.keys(bestScoreOfUser.data).length > 0
              ? bestScoreOfUser.data.userScore?.toString() ?? '-'
              : '-',
          myRank: memberRank !== undefined && memberRank !== -1 ? `#${memberRank + 1}` : '-',
          playedTimes: challengeLeaderBoard.data?.usersPassed.length ?? 0,
          playedMins: activeChallenge?.Routine.estimatedTime
            ? Math.ceil(activeChallenge.Routine.estimatedTime / 60)
            : 0,
          validFrom: activeChallenge?.validFrom ?? '',
          validUntil: activeChallenge?.validUntil ?? '',
        }}
      />
    </>
  );
};

export default GroupLabels;
