import { Box, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { usePersistedAuthStore, usePersistedForumStore } from '../../../lib/zustand';
import { useCommentControllerV1CreateOne } from '../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { renderToast } from '../../../utils';
import createCommentFormYupScheme from '../../../lib/yup/schemas/createCommentFormYupScheme';
import GroupTextAreaInput from '../../ui/MemberDashBoard/Group/GroupsTextAreaField';

const ForumCreateCommentForm: React.FC<{ postId?: number }> = (props) => {
  const createComment = useCommentControllerV1CreateOne();
  const { handleSubmit, setValue, reset, getValues, errors } = useForm({
    defaultValues: { comment: '' },
    resolver: yupResolver(createCommentFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const { member } = usePersistedAuthStore();
  const { posts, setPosts, setActivePost } = usePersistedForumStore();
  // const topic = posts.find((postsd) => postsd.id === props.postId);
  // const placeholdertext = `Comment on ${topic ? topic.content : ''}`;
  const handleOnCommentCreate = async (data: { comment: string }) => {
    if (!member) return;
    if (!props.postId) return;

    createComment.mutate(
      {
        postId: props.postId,
        data: {
          content: data.comment,
        },
      },
      {
        onSuccess: (newComment) => {
          const shallowOfPosts = [...posts];
          const a = shallowOfPosts.findIndex((post) => post.id === props.postId);
          if (a !== -1) {
            shallowOfPosts[a] = {
              ...shallowOfPosts[a],
              Comment: [
                {
                  ...newComment,
                  Creator: { ...member },
                },
                ...shallowOfPosts[a].Comment,
              ],
            };
            setPosts(shallowOfPosts);
            const activePost = posts.find((postsd) => postsd.id === props.postId);
            if (activePost) {
              setActivePost({
                ...activePost,
                Comment: [
                  {
                    ...newComment,
                    Creator: { ...member },
                  },
                  ...activePost.Comment,
                ],
              });
            }
          }
          renderToast('success', 'Comment added successfully.', 'white');
          reset({ comment: '' });
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong', 'white');
        },
      },
    );
  };

  return (
    <VStack
      as="form"
      rowGap="8px"
      onSubmit={handleSubmit(handleOnCommentCreate)}
      autoComplete="off"
    >
      <Box w="full">
        <GroupTextAreaInput
          onChange={onChange}
          name="comment"
          value={getValues('comment')}
          errMessage={errors.comment?.message}
        />
      </Box>
      <Box display="flex" alignSelf="flex-end">
        <Common.ImpaktButton
          isDisabled={createComment.isLoading}
          isLoading={createComment.isLoading}
          type="submit"
          variant="black"
          leftIcon={<I.SendIcon />}
        >
          <Text>Send</Text>
        </Common.ImpaktButton>
      </Box>
    </VStack>
  );
};

export default ForumCreateCommentForm;
