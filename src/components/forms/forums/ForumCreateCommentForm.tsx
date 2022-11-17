import { Box, Button, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { usePersistedAuthStore, usePersistedForumStore } from '../../../lib/zustand';
import { useCommentControllerV1CreateOne } from '../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { renderToast } from '../../../utils';
import createCommentFormYupScheme from '../../../lib/yup/schemas/createCommentFormYupScheme';
import GroupTextAreaInput from '../../ui/MemberDashBoard/Group/GroupsTextAreaField';

const ForumCreateCommentForm: React.FC<{ postId?: number }> = (props) => {
  const refCommentArea = React.useRef<HTMLDivElement | null>(null);
  const createComment = useCommentControllerV1CreateOne();
  const { handleSubmit, setValue, errors } = useForm({
    defaultValues: { comment: '' },
    resolver: yupResolver(createCommentFormYupScheme),
  });

  // const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //   setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  // };

  const onInput = (e: any) => {
    setValue('comment', e.currentTarget.innerHTML, { shouldValidate: true });
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
          if (refCommentArea.current) {
            refCommentArea.current.innerText = '';
          }
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
          ref={refCommentArea}
          onInput={onInput}
          name="comment"
          errMessage={errors.comment?.message}
          minHeight="88px"
        />
      </Box>
      <Box display="flex" alignSelf="flex-end">
        <Button
          width="110px"
          h="38px"
          color="#FFFFFF"
          bg="#29323B"
          id="send-comment-button"
          isDisabled={createComment.isLoading}
          isLoading={createComment.isLoading}
          type="submit"
          leftIcon={<I.SendIcon />}
          _hover={{
            bg: '#F27961',
            color: '#FFFFFF',
          }}
        >
          <Text fontWeight="600" fontSize="16px" lineHeight="18px">
            Send
          </Text>
        </Button>
      </Box>
    </VStack>
  );
};

export default ForumCreateCommentForm;
