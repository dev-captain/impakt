import { Box, Text, Button, useDisclosure } from '@chakra-ui/react';
// import { I } from 'components';
import * as React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { I } from 'components';

import MemberDashboardCard from '../../../../MemberDashBoardCard';
// import Images from 'assets/images';
import UserForumsCard from './UserForumsCard';
import CreatePostCard from './CreatePostCard';
import { usePersistedForumStore, usePersistedGroupStore } from '../../../../../../../lib/zustand';
import CreatePostModal from './CreatePostModal';
import { getCreatedBefore, renderToast } from '../../../../../../../utils';

const Forums: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { posts } = usePersistedForumStore();
  const { activeGroup, role } = usePersistedGroupStore();
  // const creatorCommentSortedByCreatedDate = activePost?.Comment.sort(
  //   (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  // );
  const resortedPosts = posts.map((post) => {
    return {
      ...post,
      Comment: post.Comment.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    };
  });

  if (activeGroup?.isPreview && activeGroup.private)
    return (
      <MemberDashboardCard justifyContent="center" alignItems="center" marginTop="26px">
        <I.LockIcon />
      </MemberDashboardCard>
    );

  const isRoleDefined = role && role !== 'None';

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
                  onClick={
                    isRoleDefined
                      ? onOpen
                      : () => {
                          renderToast(
                            'warning',
                            'You have to be a member of the group to create a topic',
                          );
                        }
                  }
                >
                  <AddIcon color="#29323B" width="15px" height="15px" fontWeight="bold" />
                </Button>
              </Box>
            </Box>
            {resortedPosts.length === 0 && <CreatePostCard onClick={onOpen} />}
            {resortedPosts.length > 0 &&
              resortedPosts.map(
                ({ id, Creator, content, createdAt, Comment }) =>
                  Comment.length && (
                    <UserForumsCard
                      key={id}
                      id={id}
                      message={Comment[0]?.content}
                      messageCreatorName={Comment[0]?.Creator.username}
                      messageCreatedAt={getCreatedBefore(Comment[0]?.createdAt ?? '08-08-2000')}
                      replyCount={Comment.length - 1}
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
