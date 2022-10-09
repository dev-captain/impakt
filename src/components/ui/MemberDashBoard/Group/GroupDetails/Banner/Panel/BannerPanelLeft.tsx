import { HStack } from '@chakra-ui/layout';
import * as React from 'react';
import { I } from 'components';
import GroupStatisticLabel from './GroupStatisticsLabel';

const groupStatisticLabelItems = [
  { Icon: () => <I.FireIcon />, labelTitle: 'top challenge', labelDescription: 'Hero Cardio' },
  { Icon: () => <I.AppIcon />, labelTitle: 'top program', labelDescription: 'Home Abs' },
  {
    Icon: () => <I.CalenderIcon color="#5C7FFF" />,
    labelTitle: 'next event',
    labelDescription: 'Power Training',
  },
];

const BannerPanelLeft: React.FC = () => {
  return (
    <HStack
      alignItems="flex-start"
      justifyContent="flex-start"
      rowGap="12px"
      columnGap="12px"
      flexDir={{ base: 'column', md: 'row' }}
    >
      {groupStatisticLabelItems.map(({ Icon, labelDescription, labelTitle }) => (
        <GroupStatisticLabel
          key={labelTitle}
          icon={Icon}
          labelDescription={labelDescription}
          labelTitle={labelTitle}
        />
      ))}
    </HStack>
  );
};

export default BannerPanelLeft;
