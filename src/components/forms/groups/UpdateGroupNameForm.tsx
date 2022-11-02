import * as React from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, useToast } from '@chakra-ui/react';

import { Common } from 'components';
import { toastLayout } from 'theme';
import { InputGroupPropsI } from '../../common/InputGroup';
import createGroupYupScheme from '../../../lib/yup/schemas/createGroupYupScheme';
import { useGroupsControllerV1PatchGroup } from '../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { renderToast } from '../../../utils';

const UpdateGroupNameForm: React.FC = () => {
  const updateGroup = useGroupsControllerV1PatchGroup();
  const group = useAppSelector((state) => state.groupsReducer.activeGroup);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { handleSubmit, errors, setValue, getValues, isDirty } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { groupName: group?.groupName },
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Group name',
      label: 'Group name',
      onChange,
      type: 'text',
      name: 'groupName',
      errorMsg: errors?.groupName?.message,
      autoFocus: false,
      whiteMode: true,
      defaultValue: getValues('groupName'),
    },
  ];
  const handleUpdateGroupNameChanges = async (data: object) => {
    const { groupName } = data as { groupName: string };
    if (!group?.id) return;
    if (isDirty) {
      updateGroup.mutate(
        { groupId: group.id, data: { groupName } },
        {
          onSuccess: () => {
            renderToast('success', 'Group name updated successfully.');
          },
          onError: (err) => {
            renderToast('error', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
      // TODO update active group on zustand
    }
  };

  return (
    <FormControl
      display={{ md: 'flex', base: 'block' }}
      justifyContent="center"
      flexDir="row"
      alignItems="flex-end"
      m="0 !important"
      rowGap="24px"
      as="form"
      autoComplete="off"
      w="full"
      onSubmit={handleSubmit(handleUpdateGroupNameChanges)}
    >
      <Common.InputItems inputItems={inputItems} />
      <Common.ImpaktButton
        mt={{ md: 0, base: '10px' }}
        variant="black"
        colorScheme="#fff"
        w={{ md: '147px', base: '100%' }}
        ml={{ md: '16px', base: '0' }}
        h="60px"
        backgroundColor="#29323B"
        borderRadius="8px"
        type="submit"
        fontSize={{ md: '16px' }}
        fontWeight="700"
      >
        Save
      </Common.ImpaktButton>
    </FormControl>
  );
};
export default UpdateGroupNameForm;
