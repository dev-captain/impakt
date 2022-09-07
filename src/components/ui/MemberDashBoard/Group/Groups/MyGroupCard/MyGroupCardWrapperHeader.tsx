import * as React from 'react';

import { I } from 'components';
import { useAppSelector } from 'hooks';
import MyGroupCardWrapperHeaderStatisticTag from './MyGroupCardWrapperHeaderStatisticTag';
import GroupCardWrapperHeader from '../GroupCardWrapperHeader';

const MyGroupCardWrapperHeader: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const myGroups = useAppSelector((state) => state.groupsReducer.myGroups);
  const ownedGroup = myGroups.filter((group) => group.ownerId === member?.id);

  return (
    <GroupCardWrapperHeader title="Your Groups">
      <MyGroupCardWrapperHeaderStatisticTag
        value={myGroups.length.toString()}
        icon={<I.PeopleIcon width="32px" height="32px" />}
        name="Joined Groups"
        color="#1C1C28"
        width="60px"
      />
      {/* <MyGroupCardWrapperHeaderStatisticTag
        value="0"
        icon={<I.RewardIcon color="#D92D85" />}
        name="Challenges completed"
        color="#D92D85"
        width="94px"
      /> */}
      <MyGroupCardWrapperHeaderStatisticTag
        value={ownedGroup.length.toString()}
        icon={<I.AddMemberIcon color="#5714EC" width="32px" height="32px" />}
        name="Groupscreated"
        color="#5714EC"
        width="65px"
      />
    </GroupCardWrapperHeader>
  );
};

export default MyGroupCardWrapperHeader;
