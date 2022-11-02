import { FormControl, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Common, I } from 'components';
import { useAppDispatch } from '../../../hooks';
import { InputGroupPropsI } from '../../common/InputGroup';
import { usePersistedAuthStore } from '../../../lib/zustand';
import { useCommentControllerV1CreateOne } from '../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { renderToast } from '../../../utils';

const ForumCreateCommentForm = React.forwardRef<
  HTMLInputElement,
  { onClose: () => void; postId: number }
>((props, ref) => {
  const createComment = useCommentControllerV1CreateOne();
  const { handleSubmit, setValue } = useForm({
    defaultValues: { comment: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const dispatch = useAppDispatch();
  const { member } = usePersistedAuthStore();

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
        onSuccess: () => {
          // TODO zustand update related post comments array
          // const a = state.posts.findIndex((post) => post.id === action.payload.postId);
          // if (a !== -1) {
          //   state.posts[a] = {
          //     ...state.posts[a],
          //     comment: [...state.posts[a].comment, action.payload],
          //   };
          // }

          renderToast('success', 'Comment deleted successfully.');
          props.onClose();
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

  const inputItems: InputGroupPropsI = {
    placeholder: 'My cool comment for post',
    onChange,
    type: 'text',
    name: 'comment',
    label: 'Comment',
    whiteMode: true,
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
