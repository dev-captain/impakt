import * as React from 'react';
import { useAppSelector, useForm } from 'hooks';
import { Flex, FormControl } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Common } from 'components';
import { InputGroupPropsI } from '../../common/InputGroup';
import createGroupYupScheme from '../../../lib/yup/schemas/createGroupYupScheme';
import { useGroupsControllerV1Create } from '../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { renderToast } from '../../../utils';
import { usePersistedAuthStore } from '../../../lib/zustand';

const CreateGroupForm: React.FC = ({ children }) => {
  const createGroup = useGroupsControllerV1Create();

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
    // TODO zustand add new group into my groups
    createGroup.mutate(
      { data: { groupName } },
      {
        onSuccess: () => {
          renderToast('success', 'Group created successfully.');
          navigate('/dashboard/groups');
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
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
        {children}
      </Flex>
    </FormControl>
  );
};
export default CreateGroupForm;
