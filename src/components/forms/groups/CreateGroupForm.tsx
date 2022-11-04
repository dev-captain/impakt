import * as React from 'react';
import { useForm } from 'hooks';
import { Flex, FormControl } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { InputGroupPropsI } from '../../common/InputGroup';
import createGroupYupScheme from '../../../lib/yup/schemas/createGroupYupScheme';
import { useGroupsControllerV1Create } from '../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { renderToast } from '../../../utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../lib/zustand';

const CreateGroupForm: React.FC<{ onClose: (() => void) | undefined }> = ({ onClose }) => {
  const createGroup = useGroupsControllerV1Create();
  const { addToMyGroups } = usePersistedGroupStore();

  const { handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { groupName: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const navigate = useNavigate();
  const { member } = usePersistedAuthStore();

  const handleOnCreate = async (data: object) => {
    const { groupName } = data as { groupName: string };
    if (!member) return;
    try {
      const groupData = await createGroup.mutateAsync({ data: { groupName } });
      addToMyGroups({
        groupId: groupData.id,
        userId: member.id,
        bannedAt: null,
        joinedAt: new Date().toISOString(),
        leftAt: null,
        role: 'Creator',
        Group: { ...groupData, memberCount: 1 },
      });
      renderToast('success', 'Group created successfully.');
      navigate('/dashboard/groups');
      if (onClose) {
        onClose();
      }
    } catch (err: any) {
      renderToast('error', err.response?.data.message ?? 'Something went wrong', 'white');
    }

    // await dispatch(fetchMyGroups(member.id)).unwrap();
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
        <Common.ImpaktButton
          variant="transparent"
          _hover={{ backgroundColor: '#000', color: '#fff' }}
          _active={{ backgroundColor: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          border="2px solid #29323B"
          borderRadius="16px"
          color="#29323B"
          w={{ md: '152px', base: '120px' }}
          h={{ md: '64px', base: '54px' }}
          fontSize={{ md: '18px' }}
          fontWeight="700"
          mr={3}
          justifyContent="space-evenly"
          onClick={onClose}
          leftIcon={<I.BackIcon />}
        >
          Back
        </Common.ImpaktButton>
        <Common.ImpaktButton
          isLoading={createGroup.isLoading}
          disabled={createGroup.isSuccess}
          variant="black"
          colorScheme="#fff"
          w={{ md: '135px', base: '130px' }}
          h={{ md: '64px', base: '54px' }}
          backgroundColor="#29323B"
          borderRadius="16px"
          type="submit"
          fontSize={{ md: '18px' }}
          fontWeight="700"
        >
          Create
        </Common.ImpaktButton>
      </Flex>
    </FormControl>
  );
};
export default CreateGroupForm;
