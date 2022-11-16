import { Box, Text, Button, useDisclosure } from '@chakra-ui/react';
// import { I } from 'components';
import * as React from 'react';
import { AddIcon } from '@chakra-ui/icons';

import MemberDashboardCard from '../../../../MemberDashBoardCard';
// import Images from 'assets/images';
import UserForumsCard from './UserForumsCard';
import CreatePostCard from './CreatePostCard';
import { usePersistedForumStore, usePersistedGroupStore } from '../../../../../../../lib/zustand';
import CreatePostModal from './CreatePostModal';
import { getCreatedBefore } from '../../../../../../../utils';

const Forums: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { role } = usePersistedGroupStore();
  const { posts } = usePersistedForumStore();
  const isCreator = role === 'Creator';

  return (
    <>
      <Box marginStart="0 !important" width={{ base: '100%', md: '40%', lgx: '50%' }}>
        <MemberDashboardCard p={{ base: '16px', md: '24px' }} marginLeft="auto" marginTop="26px">
          <Box w="full">
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
                  Forums
                </Text>
                <Button
                  background="transparent"
                  variant="ghost"
                  _selected={{ border: '0' }}
                  _focus={{ border: 0 }}
                  padding="0"
                  onClick={onOpen}
                >
                  <AddIcon color="#29323B" width="15px" height="15px" fontWeight="bold" />
                </Button>
              </Box>
            </Box>
            {/* //TODO IF ONLY THERE IS NO POST CHECK WILL ADD */}
            {isCreator && <CreatePostCard onClick={onOpen} />}
            {posts.length > 0 &&
              posts.map(
                ({ id, Creator, content, createdAt, Comment }) =>
                  Comment.length && (
                    <UserForumsCard
                      key={id}
                      id={id}
                      message={Comment[0]?.content}
                      messageCreatorName={Comment[0]?.Creator.username}
                      messageCreatedAt={getCreatedBefore(Comment[0]?.createdAt ?? '08-08-2000')}
                      replyCount={Comment.length}
                      postCreatedAt={getCreatedBefore(createdAt)}
                      postTitle={content}
                      postCreatorName={Creator?.username}
                    />
                  ),
              )}
          </Box>
        </MemberDashboardCard>
      </Box>

      <CreatePostModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
// const forumCardDummyData = [
//   {
//     name: 'KittenSpy',
//     msg: 'Should be good 9am UTC?',
//     title: 'Best time for Morning routines',
//     msgNo: '18',
//     view: '44',
//     time: '2h',
//   },
//   {
//     name: 'NoIdea',
//     msg: 'more Cardio pls',
//     title: 'What exercises you’d like to see?',
//     msgNo: '12',
//     view: '14',
//     time: '8h',
//   },
//   {
//     name: 'Modern47',
//     msg: 'same for me...',
//     title: 'How to find time for fitness?',
//     msgNo: '66',
//     view: '152',
//     time: '4d',
//   },
// ];

export default Forums;
