import * as React from 'react';
import { Box, Grid, GridItem, HStack, useMediaQuery } from '@chakra-ui/react';
import Images from 'assets/images';
import { I } from 'components';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import MemberDashboardSectionHeadlineJoinedGroup from '../MemberDashboardSectionHeadlineJoinedGroup';
import GroupsCard from '../GroupsCard';
import AddGroup from '../AddGroup';
// import Topics from '../Topics/Topics';

const Group: React.FC = () => {
  const [isLessThan1440] = useMediaQuery('(max-width: 1440px)');
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');
  const [isLessThan576] = useMediaQuery('(max-width: 576px)');

  return (
    <Box minH="100vh" overflow="hidden" w="full" as="section" id="general-section">
      <Box display="flex" gap={isLessThan1440 ? '44px' : '48px'} borderBottom="2px solid #E0E0E0">
        <MemberDashboardSectionHeadlineText title="Your Groups" />
        <MemberDashboardSectionHeadlineJoinedGroup
          value="2"
          icon={<I.PeopleIcon />}
          name="Joined Groups"
          color="#1C1C28"
          width="60px"
        />
        <MemberDashboardSectionHeadlineJoinedGroup
          value="47"
          icon={<I.RewardIcon color="#D92D85" />}
          name="Challenges completed"
          color="#D92D85"
          width="94px"
        />
        <MemberDashboardSectionHeadlineJoinedGroup
          value="0"
          icon={<I.AddMemberIcon color="#5714EC" width="32px" height="32px" />}
          name="Groupscreated"
          color="#5714EC"
          width="65px"
        />
      </Box>
      <HStack
        columnGap="24px"
        rowGap="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="full"
        mt="30px"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        {/* here is the components */}
        <Grid
          width="100%"
          paddingBottom="30px"
          templateColumns={{
            sm: isLessThan576 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
            md: isLessThan768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            lg: isLessThan1440 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
          }}
          gap={5}
        >
          <GridItem w="100%">
            <GroupsCard member="705" img={Images.group.img} name="Dance Fit" />
          </GridItem>
          <GridItem w="100%">
            <GroupsCard member="9" img={Images.group.img} name="My Squad" />
          </GridItem>
          <GridItem w="100%" height="100%">
            <AddGroup />
          </GridItem>
        </Grid>
      </HStack>
    </Box>
  );
};
export default Group;
