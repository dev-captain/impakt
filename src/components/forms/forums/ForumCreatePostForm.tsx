import * as React from 'react';
import { useAppDispatch, useForm } from 'hooks';
import { Flex, FormControl, useToast } from '@chakra-ui/react';
import { Common } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroupPropsI } from '../../common/InputGroup';
import { createPost } from '../../../lib/redux/slices/forum/post_actions/createPost';
import createPostYupScheme from '../../../lib/yup/schemas/createPostYupScheme';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../lib/zustand';

const CreatePostForm: React.FC = ({ children }) => {
  const { activeGroup } = usePersistedGroupStore();

  const { handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(createPostYupScheme),
    defaultValues: { post: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { member } = usePersistedAuthStore();

  const handleOnCreate = async (data: object) => {
    const { post } = data as { post: string };
    if (!member || !activeGroup) return;

    await dispatch(
      createPost({
        createPostDto: { content: post },
        referenceId: activeGroup.id,
        referenceType: 'Group',
      }),
    ).unwrap();
    toast({
      title: 'Success',
      description: 'Post created successfully.',
      isClosable: true,
      duration: 8000,
      status: 'success',
    });
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
