import * as React from 'react';
import { useForm } from 'hooks';
import { Flex, FormControl } from '@chakra-ui/react';
import { Common } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroupPropsI } from '../../common/InputGroup';
import createPostYupScheme from '../../../lib/yup/schemas/createPostYupScheme';
import {
  usePersistedAuthStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../lib/zustand';
import { usePostControllerV1CreateOne } from '../../../lib/impakt-dev-api-client/react-query/posts/posts';
import { renderToast } from '../../../utils';

const CreatePostForm: React.FC = ({ children }) => {
  const { activeGroup } = usePersistedGroupStore();
  const { addToPosts } = usePersistedForumStore();
  const createPost = usePostControllerV1CreateOne();

  const { handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(createPostYupScheme),
    defaultValues: { post: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const { member } = usePersistedAuthStore();

  const handleOnCreate = async (data: object) => {
    const { post } = data as { post: string };
    if (!member || !activeGroup) return;
    try {
      const postData = await createPost.mutateAsync({
        referenceType: 'Group',
        data: { content: post },
        referenceId: activeGroup.id,
      });
      addToPosts({ ...postData, Creator: { ...member } });
      renderToast('success', 'Post created successfully.');
    } catch (e: any) {
      renderToast('error', e.response?.data.message ?? 'Something went wrong');
    }
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'My cool post...',
      onChange,
      type: 'text',
      name: 'post',
      label: 'Post content',
      errorMsg: errors?.post?.message,
      autoFocus: true,
      whiteMode: true,
    },
  ];

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 !important"
      rowGap="24px"
      as="form"
      onSubmit={handleSubmit(handleOnCreate)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <Flex justifyContent="space-between" w="full">
        {children}
      </Flex>
    </FormControl>
  );
};
export default CreatePostForm;
