import * as React from 'react';
import { I } from 'components';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import { usePersistedGroupStore } from '../../../../../../../../lib/zustand';
import ChallengeModal from '../../../Modal/ChallengeModal';

const GroupLabels: React.FC = () => {
  const [assocId, setAssocId] = React.useState<number>(NaN);
  const [assocName, setAssocName] = React.useState<string>('');

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { role } = usePersistedGroupStore();
  const groupStatisticLabelItems = [
    // {
    //   Icon: () => <I.CalenderIcon color="#5C7FFF" />,
    //   labelTitle: 'next event',
    //   labelDescription: 'Power Training',
    // },
    {
      leftIcon: assocName.length ? (
        <I.FireIcon />
      ) : (
        <IconButton
          onClick={onOpen}
          fontSize="40px"
          width="40px"
          h="40px"
          aria-label="create-top-challenge"
          variant="ghost"
          icon={<I.AddBannerLabelItemIcon />}
        />
      ),
      visible: role === 'Creator',
      labelTitle: 'Pinned Challenge',
      labelDescription: assocName.length > 0 ? assocName : 'Select Challenge',
      rightIcon:
        assocName.length > 0 ? (
          <IconButton
            onClick={onOpen}
            fontSize="40px"
            width="40px"
            h="40px"
            aria-label="update-top-challenge"
            icon={<I.PenIcon />}
          />
        ) : (
          <> </>
        ),
    },
    // { Icon: () => <I.AppIcon />, labelTitle: 'top program', labelDescription: 'Home Abs' },
  ];

  return (
    <>
      <GroupLabelWrapper items={groupStatisticLabelItems} />
      <ChallengeModal
        setAssocId={setAssocId}
        setAssocName={setAssocName}
        close={onClose}
        open={isOpen}
      />
    </>
  );
};

export default GroupLabels;
