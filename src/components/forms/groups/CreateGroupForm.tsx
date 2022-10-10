import * as React from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { Flex, FormControl, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { createGroup } from '../../../lib/redux/slices/groups/actions/createGroup';
import { fetchMyGroups } from '../../../lib/redux/slices/groups/actions/fetchMyGroups';
import { InputGroupPropsI } from '../../common/InputGroup';
import createGroupYupScheme from '../../../lib/yup/schemas/createGroupYupScheme';

const CreateGroupForm: React.FC = ({ children }) => {
  const { handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { groupName: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const member = useAppSelector((state) => state.memberAuth.member);

  const handleOnCreate = async (data: object) => {
    const { groupName } = data as { groupName: string };
    try {
      if (!member) return;
      await dispatch(createGroup(groupName)).unwrap();
      await dispatch(fetchMyGroups(member.id));
      toast({
        title: 'Success',
        description: 'Group created successfully.',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
    navigate('/dashboard/groups');
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'My cool fitness group',
      onChange,
      type: 'text',
      name: 'groupName',
      label: 'Group name',
      errorMsg: errors?.groupName?.message,
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
export default CreateGroupForm;
