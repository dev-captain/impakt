import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { Common, I } from 'components';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import {
  usePersistedAuthStore,
  usePersistedChallengeStore,
  usePersistedGroupStore,
} from '../../../../../../../../lib/zustand';
import ChallengeModal from '../../../Modal/ChallengeModal';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { useFavoriteControllerV1CreateOne } from '../../../../../../../../lib/impakt-dev-api-client/react-query/favorites/favorites';
import { normalizeExerciseNames } from '../../../../../../../../utils';
import { useChallengeStatsControllerGetUserBestScore } from '../../../../../../../../lib/impakt-dev-api-client/react-query/default/default';
import { useChallengesLeaderboardControllerV1Usersleaderboard } from '../../../../../../../../lib/impakt-dev-api-client/react-query/leaderboard/leaderboard';

const ActionPreviewModal = React.lazy(() => import('../../../Modal/ActionPreviewModal'));

const GroupLabels: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();
  const {
    groupPinnedChallenge,
    setBestScoreOfUser,
    setChallengeLeaderBoard,
    setGroupPinnedChallenge,
    challengeLeaderBoard,
    bestScoreOfUser,
  } = usePersistedChallengeStore();
  const { member } = usePersistedAuthStore();
  const createPinnedChallenge = useFavoriteControllerV1CreateOne();
  const fetchPinnedChallengeUserBestScore = useChallengeStatsControllerGetUserBestScore(
    groupPinnedChallenge?.Challenge?.id ?? 0,
    member?.id ?? 0,
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        onSuccess: (bestScore) => {
          setBestScoreOfUser(bestScore);
        },
      },
    },
  );

  const fetchPinnedChallengeLeaderboard = useChallengesLeaderboardControllerV1Usersleaderboard(
    groupPinnedChallenge?.Challenge?.id ?? 0,
    {},
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        onSuccess: (leaderboard) => {
          setChallengeLeaderBoard(leaderboard);
        },
      },
    },
  );

  const sortLeaderboardByScore = challengeLeaderBoard?.usersPassed.sort(
    (a, b) => b.userScore - a.userScore,
  );
  const memberRankIndex = sortLeaderboardByScore?.findIndex(
    ({ username }) => username === member?.username,
  );
  // eslint-disable-next-line no-nested-ternary, no-constant-condition
  const memberRank = memberRankIndex;

  const challengeModalDisclosure = useDisclosure();
  const challengePreviewModalDisclosure = useDisclosure();
  const { role } = usePersistedGroupStore();
  const isCreator = role === 'Creator';
  const isModerator = role === 'Moderator';
  const groupStatisticLabelItems = [
    // {
    //   Icon: () => <I.CalenderIcon color="#5C7FFF" />,
    //   labelTitle: 'next event',
    //   labelDescription: 'Power Training',
    // },
    {
      leftIcon:
        groupPinnedChallenge?.Challenge?.name || (!isModerator && !isCreator) ? (
          <I.FireIcon bg="rgba(255, 255, 255, 0.1)" />
        ) : (
          <IconButton
            onClick={(e) => {
              if (isCreator || isModerator) {
                e.stopPropagation();
                challengeModalDisclosure.onOpen();
              }
            }}
            fontSize="40px"
            width="40px"
            h="40px"
            aria-label="create-top-challenge"
            variant="ghost"
            icon={<I.AddBannerLabelItemIcon bg="rgba(255, 255, 255, 0.1)" />}
          />
        ),
      visible: true,
      labelTitle: 'Pinned Challenge',
      labelDescription:
        // eslint-disable-next-line no-nested-ternary
        groupPinnedChallenge?.Challenge?.name && groupPinnedChallenge?.Challenge?.name.length > 0
          ? groupPinnedChallenge?.Challenge?.name
          : isCreator || isModerator
          ? 'Pin a challenge'
          : 'Challenge not selected',
      rightIcon:
        (isCreator || isModerator) &&
        groupPinnedChallenge?.Challenge?.name &&
        groupPinnedChallenge?.Challenge?.name.length > 0 ? (
          <Common.ImpaktButton
            variant="white-50"
            onClick={(e) => {
              if (isCreator || isModerator) {
                e.stopPropagation();
                challengeModalDisclosure.onOpen();
              }
            }}
            isLoading={createPinnedChallenge.isLoading}
            isDisabled={createPinnedChallenge.isLoading}
            fontSize="40px"
            width="40px"
            h="40px"
            padding="8px"
            aria-label="update-top-challenge"
          >
            <I.PenIcon />
          </Common.ImpaktButton>
        ) : null,
      onClick: () => {
        if (groupPinnedChallenge?.Challenge) {
          challengePreviewModalDisclosure.onOpen();
        }

        if (!groupPinnedChallenge?.Challenge && (isCreator || isModerator)) {
          challengeModalDisclosure.onOpen();
        }
      },
    },
    // { Icon: () => <I.AppIcon />, labelTitle: 'top program', labelDescription: 'Home Abs' },
  ];

  const handlePinnedChallenge = (actChallenge: GetChallengeRes) => {
    if (!activeGroup) return;
    if (actChallenge.id === groupPinnedChallenge?.Challenge?.id) return;

    setGroupPinnedChallenge({
      id: 0,
      groupName: activeGroup.groupName,
      createdAt: actChallenge.createdAt,
      updatedAt: actChallenge.updatedAt,
      Challenge: actChallenge,
    });

    createPinnedChallenge.mutate(
      {
        data: { objectId: actChallenge.id, type: 'Challenge' },
        referenceType: 'Group',
        referenceId: activeGroup?.id,
      },
      {
        onSuccess: async () => {
          await fetchPinnedChallengeLeaderboard.refetch();
          await fetchPinnedChallengeUserBestScore.refetch();
        },
      },
    );
  };

  const myRank = memberRank !== undefined && memberRank !== -1 ? `#${memberRank + 1}` : '-';

  return (
    <>
      <GroupLabelWrapper items={groupStatisticLabelItems} />
      <ChallengeModal
        setActiveChallenge={handlePinnedChallenge}
        close={challengeModalDisclosure.onClose}
        open={challengeModalDisclosure.isOpen}
      />
      {challengePreviewModalDisclosure.isOpen && (
        <React.Suspense fallback={<div>Yükleniyor...</div>}>
          <ActionPreviewModal
            key="pinned-challenge-modal"
            close={challengePreviewModalDisclosure.onClose}
            open={challengePreviewModalDisclosure.isOpen}
            actionPreview={{
              title: groupPinnedChallenge?.Challenge?.name ?? 'Daily Challenge',
              subtitle: `${challengeLeaderBoard?.usersPassed.length ?? 0} plays`,
              creator:
                groupPinnedChallenge?.Challenge?.Routine?.Creator?.username ??
                groupPinnedChallenge?.Challenge?.Creator?.username ??
                'Impakt',
              // eslint-disable-next-line no-nested-ternary
              deepLinkToPlay: isMobile
                ? `impakt://challenge?challengeId=${groupPinnedChallenge?.Challenge?.id}&groupId=${activeGroup?.id}`
                : process.env.REACT_APP_NODE_ENV === 'production'
                ? `https://fitness.impakt.com/?challengeId=${groupPinnedChallenge?.Challenge?.id}&groupId=${activeGroup?.id}&next=${window.location.origin}/d/g/${activeGroup?.id}`
                : `https://fitness.impakt-dev.com/?challengeId=${groupPinnedChallenge?.Challenge?.id}&groupId=${activeGroup?.id}&next=${window.location.origin}/d/g/${activeGroup?.id}`,
              exercices: normalizeExerciseNames(
                groupPinnedChallenge?.Challenge?.Routine?.TimelineBlocks ?? [],
              ),
              leaderboard: sortLeaderboardByScore ?? [],
              likeCount: groupPinnedChallenge?.Challenge?.likes ?? 0,
              myBestScore:
                bestScoreOfUser && Object.keys(bestScoreOfUser).length > 0
                  ? bestScoreOfUser.userScore?.toString() ?? '-'
                  : '-',
              myRank,
              playedMins: groupPinnedChallenge?.Challenge?.Routine.estimatedTime
                ? // eslint-disable-next-line no-unsafe-optional-chaining
                  Math.ceil(groupPinnedChallenge?.Challenge?.Routine.estimatedTime! / 60)
                : 0,
              mode: 'start',
              validUntil: groupPinnedChallenge?.Challenge?.validUntil ?? '',
              isPlayedByMember: myRank !== '-',
            }}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default GroupLabels;
