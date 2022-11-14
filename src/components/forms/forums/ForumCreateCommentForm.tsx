import { FormControl, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputGroupPropsI } from '../../common/InputGroup';
import { usePersistedAuthStore, usePersistedForumStore } from '../../../lib/zustand';
import { useCommentControllerV1CreateOne } from '../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { renderToast } from '../../../utils';
import createCommentFormYupScheme from '../../../lib/yup/schemas/createCommentFormYupScheme';

const ForumCreateCommentForm = React.forwardRef<
  HTMLInputElement,
  { onClose: () => void; postId: number }
>((props, ref) => {
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
  const topic = posts.find((postsd) => postsd.id === props.postId);
  const placeholdertext = `comment on ${topic ? topic.content : ''}`;
  const handleOnCommentCreate = async (data: { comment: string }) => {
    if (!member) return;

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
          props.onClose();
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong', 'white');
        },
      },
    );
  };

  const inputItems: InputGroupPropsI = {
    placeholder: placeholdertext,
    onChange,
    type: 'text',
    name: 'comment',
    label: 'Comment',
    whiteMode: true,
    value: getValues('comment'),
    errorMsg: errors?.comment?.message,
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 !important"
      rowGap="24px"
      as="form"
      onSubmit={handleSubmit(handleOnCommentCreate)}
      autoComplete="off"
      w="full"
    >
      <Common.InputGroup {...inputItems} ref={ref} />

      <Common.ImpaktButton
        variant="black"
        colorScheme="#fff"
        h={{ md: '48px', base: '40px' }}
        backgroundColor="#29323B"
        borderRadius="8px"
        type="submit"
        fontSize={{ md: '16px' }}
        fontWeight="700"
        isLoading={createComment.isLoading}
        isDisabled={createComment.isLoading}
      >
        <I.SendIcon fontSize="10px" />
        <Text marginLeft="10px">Send</Text>
      </Common.ImpaktButton>
      {/* <Flex justifyContent="space-between" w="full">
        {children}
      </Flex> */}
    </FormControl>
  );
});

export default ForumCreateCommentForm;
