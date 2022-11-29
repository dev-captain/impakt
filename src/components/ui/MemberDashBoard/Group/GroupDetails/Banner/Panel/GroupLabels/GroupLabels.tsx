import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { I } from 'components';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import {
  usePersistedAuthStore,
  usePersistedChallengeStore,
  usePersistedGroupStore,
} from '../../../../../../../../lib/zustand';
import ChallengeModal from '../../../Modal/ChallengeModal';
import ChallengePreviewModal from '../../../Modal/ChallengePreviewModal';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { useFavoriteControllerV1CreateOne } from '../../../../../../../../lib/impakt-dev-api-client/react-query/favorites/favorites';
import { normalizeExerciseNames } from '../../../../../../../../utils';

const GroupLabels: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();
  const { groupPinnedChallenge, setGroupPinnedChallenge, challengeLeaderBoard, bestScoreOfUser } =
    usePersistedChallengeStore();
  const { member } = usePersistedAuthStore();

  const createPinnedChallenge = useFavoriteControllerV1CreateOne();
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
  const groupStatisticLabelItems = [
    // {
    //   Icon: () => <I.CalenderIcon color="#5C7FFF" />,
    //   labelTitle: 'next event',
    //   labelDescription: 'Power Training',
    // },
    {
      leftIcon:
        groupPinnedChallenge?.Challenge?.name || !isCreator ? (
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
        groupPinnedChallenge?.Challenge?.name && groupPinnedChallenge?.Challenge?.name.length > 0
          ? groupPinnedChallenge?.Challenge?.name
          : isCreator
          ? 'Select Challenge'
          : 'No Challenge Selected',
      rightIcon:
        isCreator &&
        groupPinnedChallenge?.Challenge?.name &&
        groupPinnedChallenge?.Challenge?.name.length > 0 ? (
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
        if (groupPinnedChallenge) {
          challengePreviewModalDisclosure.onOpen();
        }

        if (!groupPinnedChallenge && isCreator) {
          challengeModalDisclosure.onOpen();
        }
      },
    },
    // { Icon: () => <I.AppIcon />, labelTitle: 'top program', labelDescription: 'Home Abs' },
  ];

  const handlePinnedChallenge = (actChallenge: GetChallengeRes) => {
    if (!activeGroup || !groupPinnedChallenge) return;

    setGroupPinnedChallenge({ ...groupPinnedChallenge, Challenge: actChallenge });
    createPinnedChallenge.mutate({
      data: { objectId: actChallenge.id, type: 'Challenge' },
      referenceType: 'Group',
      referenceId: activeGroup?.id,
    });
  };

  return (
    <>
      <GroupLabelWrapper items={groupStatisticLabelItems} />
      <ChallengeModal
        setActiveChallenge={handlePinnedChallenge}
        close={challengeModalDisclosure.onClose}
        open={challengeModalDisclosure.isOpen}
      />
      <ChallengePreviewModal
        close={challengePreviewModalDisclosure.onClose}
        open={challengePreviewModalDisclosure.isOpen}
        challengePreview={{
          title: groupPinnedChallenge?.Challenge?.name ?? 'Daily Challenge',
          creator:
            groupPinnedChallenge?.Challenge?.Routine?.Creator?.username ??
            groupPinnedChallenge?.Challenge?.Creator?.username ??
            'Impakt',
          // eslint-disable-next-line no-nested-ternary
          deepLinkToPlay: isMobile
            ? `impakt://challenge?challengeId=${groupPinnedChallenge?.Challenge?.id}&groupId=${activeGroup?.id}`
            : process.env.REACT_APP_NODE_ENV === 'production'
            ? `https://fitness.impakt.com/?challengeId=${groupPinnedChallenge?.Challenge?.id}&groupId=${activeGroup?.id}`
            : `https://fitness.impakt-dev.com/?challengeId=${groupPinnedChallenge?.Challenge?.id}&groupId=${activeGroup?.id}`,
          exercices: normalizeExerciseNames(
            groupPinnedChallenge?.Challenge?.Routine?.TimelineBlocks ?? [],
          ),
          leaderboard: sortLeaderboardByScore ?? [],
          likeCount: groupPinnedChallenge?.Challenge?.likes ?? 0,
          myBestScore:
            bestScoreOfUser && Object.keys(bestScoreOfUser).length > 0
              ? bestScoreOfUser.userScore?.toString() ?? '-'
              : '-',
          myRank: memberRank !== undefined && memberRank !== -1 ? `#${memberRank + 1}` : '-',
          playedTimes: challengeLeaderBoard?.usersPassed.length ?? 0,
          playedMins: groupPinnedChallenge?.Challenge?.Routine.estimatedTime
            ? // eslint-disable-next-line no-unsafe-optional-chaining
              Math.ceil(groupPinnedChallenge?.Challenge?.Routine.estimatedTime! / 60)
            : 0,
          validFrom: groupPinnedChallenge?.Challenge?.validFrom ?? '',
          validUntil: groupPinnedChallenge?.Challenge?.validUntil ?? '',
        }}
      />
    </>
  );
};

export default GroupLabels;
