import * as React from 'react';
import { Box, VStack, Text, Divider } from '@chakra-ui/react';

import PostCard from '../PostCard';
import { usePersistedForumStore } from '../../../../../../../../lib/zustand';
import { getCreatedBefore } from '../../../../../../../../utils';

const ForumDetail: React.FC = () => {
  // const deletePost = usePostControllerV1DeleteOne();
  const { activePost } = usePersistedForumStore();

  const sortedComments = activePost?.Comment.sort(
    (a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate(),
  );
  const distractFirstElementFromArray = sortedComments?.slice(0, sortedComments.length - 1);
  const copyOfActivePost = { ...activePost, Comment: distractFirstElementFromArray };

  // const deletePostFromDb = async () => {
  //   if (!group || !activePost) return;
  //   deletePost.mutate(
  //     {
  //       referenceType: 'Group',
  //       referenceId: group.id,
  //       postId: activePost.id,
  //     },
  //     {
  //       onSuccess: () => {
  //         const updatedPostsList = posts.filter((post) => post.id !== activePost.id);
  //         setActivePost(null);
  //         setPosts(updatedPostsList);
  //         renderToast('success', 'Post deleted successfully.');
  //       },
  //       onError: (err) => {
  //         renderToast('error', err.response?.data.message ?? 'Something went wrong');
  //       },
  //     },
  //   );
  // };

  if (!activePost) return null;

  return (
    <VStack alignItems="flex-start" w="full">
      <Box>
        <Text fontWeight="400" color="#728BA3" fontSize="14px" lineHeight="100%">
          {copyOfActivePost.Comment?.length ?? 0} Comments
        </Text>
      </Box>
      <Divider orientation="horizontal" />
      {/* <PostCard
        w="100%"
        id={activePost.id}
        name={activePost.Creator?.firstName ?? activePost.Creator?.username}
        msg={activePost.content}
        title={activePost.content}
        comments={activePost.Comment}
        // view={view}
        time={activePost.createdAt}
      >
        {member?.id === activePost.Creator?.id && (
          <Common.ImpaktButton
            mt={{ md: 0, base: '10px' }}
            color="#B0C3D6"
            onClick={deletePostFromDb}
            bg="#fff"
            borderRadius="8px"
            type="submit"
            fontWeight="600"
          >
            <DeleteIcon width="1em" height="1em" />
          </Common.ImpaktButton>
        )}
      </PostCard> */}
      {copyOfActivePost && copyOfActivePost.Comment && copyOfActivePost.Comment.length > 0 ? (
        copyOfActivePost.Comment.map(({ content, createdAt, Creator, id }) => (
          <PostCard
            key={id}
            w="100%"
            p="16px 0"
            color="#4E6070"
            border="0"
            postId={copyOfActivePost.id!}
            id={id}
            message={content}
            messageCreatorName={Creator.username}
            messageCreatedAt={getCreatedBefore(createdAt)}
            isEditable
          />
        ))
      ) : (
        <Text color="gray.500">No comment yet</Text>
      )}
    </VStack>
  );
};
export default ForumDetail;
