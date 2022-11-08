import * as React from 'react';
import { I } from 'components';
import { IconButton } from '@chakra-ui/react';
import GroupLabelWrapper from './GroupLabelWrapper';
import { usePersistedGroupStore } from '../../../../../../../../lib/zustand';

const GroupLabels: React.FC = () => {
  const { role } = usePersistedGroupStore();
  const isChallengeSelectedBefore = false;
  const isEditable = false;
  const groupStatisticLabelItems = [
    // {
    //   Icon: () => <I.CalenderIcon color="#5C7FFF" />,
    //   labelTitle: 'next event',
    //   labelDescription: 'Power Training',
    // },
    {
      leftIcon: isChallengeSelectedBefore ? (
        <I.FireIcon />
      ) : (
        <IconButton
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
      labelDescription: isChallengeSelectedBefore ? '' : 'Select Challenge',
      rightIcon: isEditable ? (
        <IconButton
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

  return <GroupLabelWrapper items={groupStatisticLabelItems} />;
};

export default GroupLabels;
