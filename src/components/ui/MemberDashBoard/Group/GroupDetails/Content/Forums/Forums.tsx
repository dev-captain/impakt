import { Box, Text, Button } from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';
import MemberDashboardCard from '../../../../MemberDashBoardCard';
// import Images from 'assets/images';
import UserForumsCard from './UserForumsCard';

const Forums: React.FC = () => {
  return (
    <Box marginStart="0 !important" width={{ base: '100%', md: '100%', lgx: '100%' }}>
      <MemberDashboardCard p={{ base: '16px', md: '24px' }} marginLeft="auto" marginTop="26px">
        <Box w="full">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
                Forums
              </Text>
              <Button
                background="transparent"
                _hover={{ backgroundColor: 'transparent' }}
                padding="0"
              >
                <I.FullScreenIcon color="#B0C3D6" width="20px" />
              </Button>
            </Box>
          </Box>
          {forumCardDummyData.map(({ name, msg, title, msgNo, view, time }) => (
            <UserForumsCard
              key={name}
              name={name}
              msg={msg}
              title={title}
              msgNo={msgNo}
              view={view}
              time={time}
            />
          ))}
        </Box>
      </MemberDashboardCard>
    </Box>
  );
};
const forumCardDummyData = [
  {
    name: 'KittenSpy',
    msg: 'Should be good 9am UTC?',
    title: 'Best time for Morning routines',
    msgNo: '18',
    view: '44',
    time: '2h',
  },
  {
    name: 'NoIdea',
    msg: 'more Cardio pls',
    title: 'What exercises you’d like to see?',
    msgNo: '12',
    view: '14',
    time: '8h',
  },
  {
    name: 'Modern47',
    msg: 'same for me...',
    title: 'How to find time for fitness?',
    msgNo: '66',
    view: '152',
    time: '4d',
  },
];

export default Forums;
