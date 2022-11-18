import * as React from 'react';
import { useForm } from 'hooks';
import { Box, Text, VStack } from '@chakra-ui/react';
import { Common } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddIcon } from '@chakra-ui/icons';
import createPostYupScheme from '../../../lib/yup/schemas/createPostYupScheme';
import {
  usePersistedAuthStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../lib/zustand';
import {
  useCommentControllerV1CreateOne,
  usePostControllerV1CreateOne,
} from '../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { renderToast } from '../../../utils';
import GroupTextAreaInput from '../../ui/MemberDashBoard/Group/GroupsTextAreaField';
import GroupInputField from '../../ui/MemberDashBoard/Group/GroupInputField';

const CreatePostForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { activeGroup } = usePersistedGroupStore();
  const { addToPosts } = usePersistedForumStore();
  const createPost = usePostControllerV1CreateOne();
  const createComment = useCommentControllerV1CreateOne();

  const { handleSubmit, reset, errors, setValue } = useForm({
    resolver: yupResolver(createPostYupScheme),
    defaultValues: { post: '', comment: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue('post', e.target.value as any, { shouldValidate: true });
  };

  const onInput = (e: any) => {
    setValue('comment', e.currentTarget.innerHTML, { shouldValidate: true });
  };

  const { member } = usePersistedAuthStore();

  const handleOnCreate = async (data: object) => {
    const { post, comment } = data as { post: string; comment: string };
    if (!member || !activeGroup) return;
    try {
      const postData = await createPost.mutateAsync({
        referenceType: 'Group',
        data: { content: post },
        referenceId: activeGroup.id,
      });
      const commentData = await createComment.mutateAsync({
        postId: postData.id,
        data: {
          content: comment,
        },
      });

      addToPosts({
        ...postData,
        Creator: { ...member },
        Comment: [{ ...commentData, Creator: { ...member } }],
      });
      renderToast('success', 'Post created successfully.', 'white');
      reset({ comment: '', post: '' });
      onClose();
    } catch (e: any) {
      renderToast('error', e.response?.data.message ?? 'Something went wrong', 'white');
    }
  };

  return (
    <VStack as="form" rowGap="8px" onSubmit={handleSubmit(handleOnCreate)} autoComplete="off">
      <Box w="full">
        <GroupInputField
          autoFocus
          maxH="46px"
          onChange={onChange}
          labelText="Topic of discussion"
          name="post"
          placeholder="Topic you want to talk about"
          errMsg={errors.post?.message}
        />
      </Box>
      <Box w="full">
        <GroupTextAreaInput
          minH="88px"
          onInput={onInput}
          labelText="Brief summary of content"
          name="comment"
          errMessage={errors.comment?.message}
        />
      </Box>
      <Box display="flex" alignSelf="flex-end">
        <Common.ImpaktButton
          isDisabled={createPost.isLoading || createComment.isLoading}
          isLoading={createPost.isLoading || createComment.isLoading}
          type="submit"
          variant="black"
          leftIcon={<AddIcon />}
        >
          <Text>Create</Text>
        </Common.ImpaktButton>
      </Box>
    </VStack>
  );
};
export default CreatePostForm;
