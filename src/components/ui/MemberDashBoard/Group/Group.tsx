import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Images from 'assets/images';
import { I } from 'components';
import { useAppSelector } from 'hooks';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import MemberDashboardSectionHeadlineJoinedGroup from '../MemberDashboardSectionHeadlineJoinedGroup';
import GroupsCard from '../GroupsCard';
import AddGroup from '../AddGroup';
// import Topics from '../Topics/Topics';

const Group: React.FC = () => {
  const navigate = useNavigate();
  const myGroups = useAppSelector((state) => state.groupsReducer.myGroups);
  const member = useAppSelector((state) => state.memberAuth.member);
  const ownedGroups = myGroups.filter((groups) => groups.ownerId === member?.id);

  return (
    <Box minH="100vh" overflow="hidden" w="full" as="section" id="general-section">
      <Box display="flex" gap={{ lgx: '48px', base: '44px' }} borderBottom="2px solid #E0E0E0">
        <MemberDashboardSectionHeadlineText title="Your Groups" />
        <MemberDashboardSectionHeadlineJoinedGroup
          value={myGroups.length.toString()}
          icon={<I.PeopleIcon />}
          name="Joined Groups"
          color="#1C1C28"
          width="60px"
        />
        <MemberDashboardSectionHeadlineJoinedGroup
          value="0"
          icon={<I.RewardIcon color="#D92D85" />}
          name="Challenges completed"
          color="#D92D85"
          width="94px"
        />
        <MemberDashboardSectionHeadlineJoinedGroup
          value={ownedGroups.length.toString()}
          icon={<I.AddMemberIcon color="#5714EC" width="32px" height="32px" />}
          name="Groupscreated"
          color="#5714EC"
          width="65px"
        />
      </Box>
      <HStack
        columnGap={{ md: '24px' }}
        rowGap="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="full"
        margin="30px 0"
        flexWrap={{ sm: 'wrap' }}
        display={{ sm: 'flex' }}
      >
        {/* here is the components */}
        {myGroups.map(({ memberCount, friendlyName, id }) => (
          <Box
            key={`group-${id}`}
            cursor="pointer"
            as="a"
            onClick={(e: any) => {
              e.preventDefault();
              navigate(`/dashboard/groups/group/${id}`);
            }}
            w={{
              base: '100%',
              sm: '49%',
              md: '31%',
              lgx: '23%',
            }}
          >
            <GroupsCard member={memberCount ?? 0} img={Images.group.img} name={friendlyName} />
          </Box>
        ))}
        {/* <Box
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard member="705" img={Images.group.img} name="Dance Fit" />
        </Box>
        <Box
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard member="705" img={Images.group.img} name="Dance Fit" />
        </Box> */}
        <Box
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <AddGroup />
        </Box>
      </HStack>
    </Box>
  );
};
export default Group;
