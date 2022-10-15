import { FormControl, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Common, I } from 'components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { createComment } from '../../../lib/redux/slices/forum/comment_actions/createComment';
import { InputGroupPropsI } from '../../common/InputGroup';

const ForumCreateCommentForm = React.forwardRef<
  HTMLInputElement,
  { onClose: () => void; postId: number }
>((props, ref) => {
  const { handleSubmit, setValue } = useForm({
    defaultValues: { comment: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);

  const handleOnCommentCreate = async (data: { comment: string }) => {
    if (!member) return;
    console.log(data.comment);
    await dispatch(
      createComment({ postId: props.postId, createCommentDto: { content: data.comment } }),
    ).unwrap();
    props.onClose();
  };

  const inputItems: InputGroupPropsI = {
    placeholder: 'My cool comment for post',
    onChange,
    type: 'text',
    name: 'comment',
    label: 'Your comment',
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
