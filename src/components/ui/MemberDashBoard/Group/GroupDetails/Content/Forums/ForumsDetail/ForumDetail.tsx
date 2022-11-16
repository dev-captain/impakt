import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Box, VStack, Text, Drawer, Divider } from '@chakra-ui/react';
import { Day } from 'dayspan';
import { DeleteIcon } from '@chakra-ui/icons';

import PostCard from '../PostCard';
import ForumCreateCommentForm from '../../../../../../../forms/forums/ForumCreateCommentForm';
import { Common } from '../../../../../../..';
import {
  usePersistedAuthStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../../../../../../lib/zustand';
import {
  useCommentControllerV1DeleteOne,
  usePostControllerV1DeleteOne,
} from '../../../../../../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { getCreatedBefore, renderToast } from '../../../../../../../../utils';

const ForumDetail: React.FC = () => {
  const deletePost = usePostControllerV1DeleteOne();
  const deleteComment = useCommentControllerV1DeleteOne();
  const { member } = usePersistedAuthStore();
  const { activePost, posts, setActivePost, setPosts } = usePersistedForumStore();
  const group = usePersistedGroupStore().activeGroup;

  const sortedComments = activePost?.Comment.sort(
    (a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate(),
  );
  console.log('detail', sortedComments);
  const distractFirstElementFromArray = sortedComments?.slice(0, sortedComments.length - 1);
  console.log(distractFirstElementFromArray);
  const copyOfActivePost = { ...activePost, Comment: distractFirstElementFromArray };

  const deletePostFromDb = async () => {
    if (!group || !activePost) return;
    deletePost.mutate(
      {
        referenceType: 'Group',
        referenceId: group.id,
        postId: activePost.id,
      },
      {
        onSuccess: () => {
          const updatedPostsList = posts.filter((post) => post.id !== activePost.id);
          setActivePost(null);
          setPosts(updatedPostsList);
          renderToast('success', 'Post deleted successfully.');
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

  const deleteCommentFromDb = async (commentId: number) => {
    if (!group || !activePost) return;

    deleteComment.mutate(
      {
        postId: activePost.id,
        commentId,
      },
      {
        onSuccess: () => {
          // TODO remove from related post comment array on zustand
          const shallowOfPosts = [...posts];
          const indexOfPost = shallowOfPosts.findIndex((post) => post.id === activePost.id);
          shallowOfPosts[indexOfPost].Comment = shallowOfPosts[indexOfPost].Comment.filter(
            (comment) => comment.id !== commentId,
          );
          setActivePost({
            ...shallowOfPosts[indexOfPost],
            Comment: shallowOfPosts[indexOfPost].Comment.filter(
              (comment) => comment.id !== commentId,
            ),
          });
          setPosts(shallowOfPosts);

          renderToast('success', 'Comment deleted successfully.');
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

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
            w="100%"
            color="#4E6070"
            border="0"
            id={id}
            message={content}
            messageCreatorName={Creator.username}
            messageCreatedAt={getCreatedBefore(createdAt)}
          >
            {Creator?.id === member?.id && (
              <Common.ImpaktButton
                mt={{ md: 0, base: '10px' }}
                color="#B0C3D6"
                onClick={() => deleteCommentFromDb(id)}
                bg="#fff"
                borderRadius="8px"
                type="submit"
                fontWeight="600"
              >
                <DeleteIcon width="1em" height="1em" />
              </Common.ImpaktButton>
            )}
          </PostCard>
        ))
      ) : (
        <Text color="gray.500">No comment yet</Text>
      )}
    </VStack>
  );
};
export default ForumDetail;
