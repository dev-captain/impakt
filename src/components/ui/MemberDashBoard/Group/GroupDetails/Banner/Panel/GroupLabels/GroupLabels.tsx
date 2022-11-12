import * as React from 'react';
import { I } from 'components';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import { usePersistedGroupStore } from '../../../../../../../../lib/zustand';
import ChallengeModal from '../../../Modal/ChallengeModal';

const GroupLabels: React.FC = () => {
  const [assocId, setAssocId] = React.useState<number>(NaN);
  const [assocName, setAssocName] = React.useState<string>('');

  const challengeModalDisclosure = useDisclosure();
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
        assocName.length || !isCreator ? (
          <I.FireIcon />
        ) : (
          <IconButton
            onClick={
              isCreator
                ? (e) => {
                    e.stopPropagation();
                    challengeModalDisclosure.onOpen();
                  }
                : () => null
            }
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
        assocName.length > 0 ? assocName : isCreator ? 'Select Challenge' : 'No Challenge Selected',
      rightIcon:
        isCreator && assocName.length > 0 ? (
          <IconButton
            onClick={challengeModalDisclosure.onOpen}
            fontSize="40px"
            width="40px"
            h="40px"
            aria-label="update-top-challenge"
            icon={<I.PenIcon />}
          />
        ) : null,
      onClick: () => {},
    },
    // { Icon: () => <I.AppIcon />, labelTitle: 'top program', labelDescription: 'Home Abs' },
  ];

  return (
    <>
      <GroupLabelWrapper items={groupStatisticLabelItems} />
      <ChallengeModal
        setAssocId={setAssocId}
        setAssocName={setAssocName}
        close={challengeModalDisclosure.onClose}
        open={challengeModalDisclosure.isOpen}
      />
    </>
  );
};

export default GroupLabels;
