import * as React from 'react';

import { I } from 'components';
import MyGroupCardWrapperHeaderStatisticTag from './MyGroupCardWrapperHeaderStatisticTag';
import GroupCardWrapperHeader from '../GroupCardWrapperHeader';

const MyGroupCardWrapperHeader: React.FC = () => {
  return (
    <GroupCardWrapperHeader title="Your Groups">
      <MyGroupCardWrapperHeaderStatisticTag
        value="1"
        icon={<I.PeopleIcon />}
        name="Joined Groups"
        color="#1C1C28"
        width="60px"
      />
      <MyGroupCardWrapperHeaderStatisticTag
        value="0"
        icon={<I.RewardIcon color="#D92D85" />}
        name="Challenges completed"
        color="#D92D85"
        width="94px"
      />
      <MyGroupCardWrapperHeaderStatisticTag
        value="1"
        icon={<I.AddMemberIcon color="#5714EC" width="32px" height="32px" />}
        name="Groupscreated"
        color="#5714EC"
        width="65px"
      />
    </GroupCardWrapperHeader>
  );
};

export default MyGroupCardWrapperHeader;
