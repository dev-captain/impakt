import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, VStack, Text } from '@chakra-ui/react';
import { Day } from 'dayspan';
import { DeleteIcon } from '@chakra-ui/icons';

import { deletePost } from '../../../../../../../../lib/redux/slices/forum/post_actions/deletePost';
import PostCard from '../PostCard';
import ForumCreateCommentForm from '../../../../../../../forms/forums/ForumCreateCommentForm';
import { Common } from '../../../../../../..';
import { deleteComment } from '../../../../../../../../lib/redux/slices/forum/comment_actions/deleteComment';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../../../lib/zustand';

const ForumDetail: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const { postId } = useParams();
  const postDetails = useAppSelector((state) => state.postsReducer.posts);
  const activePostDetails = postDetails.find((post) => post.id === Number(postId));
  const group = usePersistedGroupStore().activeGroup;
  const dispatch = useAppDispatch();

  const deletePostFromDb = async () => {
    if (!group || !activePostDetails) return;

    await dispatch(
      deletePost({ referenceType: 'Group', referenceId: group.id, postId: activePostDetails.id }),
    ).unwrap();
  };

  const deleteCommentFromDb = async (commentId: number) => {
    if (!group || !activePostDetails) return;
    await dispatch(deleteComment({ postId: activePostDetails.id, commentId })).unwrap();
  };

  if (!activePostDetails) return null;

  return (
    <VStack alignItems="flex-start" w="full">
      <PostCard
        w="100%"
        id={activePostDetails.id}
        name={activePostDetails.creator?.firstName ?? activePostDetails.creator?.username}
        msg={activePostDetails.content}
        title={activePostDetails.content}
        msgNo={activePostDetails.comment.length}
        // view={view}
        time={`${Day.now().hoursBetween(
          Day.fromString(activePostDetails.createdAt.toISOString()),
        )}h`}
      >
        {member?.id === activePostDetails.creator?.id && (
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
      </PostCard>
      <Box mt="20px !important" w="50%" alignSelf="flex-start">
        <ForumCreateCommentForm postId={activePostDetails.id} onClose={() => null} />
      </Box>
      {activePostDetails.comment.length > 0 ? (
        activePostDetails.comment.map(({ content, createdAt, creator, id }) => (
          <PostCard
            w="50%"
            id={id}
            name={creator?.firstName ?? creator?.username}
            msg={content}
            title={content}
            msgNo={0}
            // view={view}
            time={`${Day.now().hoursBetween(Day.fromString(createdAt.toISOString()))}h`}
          >
            {creator?.id === member?.id && (
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
