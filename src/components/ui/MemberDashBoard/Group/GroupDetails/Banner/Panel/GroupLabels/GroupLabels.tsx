import * as React from 'react';
import { I } from 'components';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import { usePersistedGroupStore } from '../../../../../../../../lib/zustand';
import ChallengeModal from '../../../Modal/ChallengeModal';
import ChallengePreviewModal from '../../../Modal/ChallengePreviewModal';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';

const GroupLabels: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = React.useState<GetChallengeRes | null>(null);

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
        activeChallenge?.name.length || !isCreator ? (
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

  return (
    <>
      <GroupLabelWrapper items={groupStatisticLabelItems} />
      <ChallengeModal
        setActiveChallenge={setActiveChallenge}
        close={challengeModalDisclosure.onClose}
        open={challengeModalDisclosure.isOpen}
      />
      <ChallengePreviewModal
        close={challengePreviewModalDisclosure.onClose}
        open={challengePreviewModalDisclosure.isOpen}
        challengePreview={{
          title: activeChallenge?.name ?? 'Daily Challenge',
          creator: activeChallenge?.Routine.Creator?.username ?? 'Impakt',
          deepLinkToPlay: '',
          exercices: activeChallenge?.Routine.TimelineBlocks ?? [],
          leaderboard: [],
          likeCount: activeChallenge?.likes ?? 0,
          myBestScore: '2.450',
          myRank: '7',
          playedTimes: 256,
          playedMins: 15,
          validFrom: activeChallenge?.validFrom ?? '',
          validUntil: activeChallenge?.validUntil ?? '',
        }}
      />
    </>
  );
};

export default GroupLabels;
