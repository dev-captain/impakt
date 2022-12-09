import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'hooks';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import { Flex, FormControl, Box, Button, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { InputGroupPropsI } from '../../common/InputGroup';
import createGroupYupScheme from '../../../lib/yup/schemas/createGroupYupScheme';
import { useGroupsControllerV1Create } from '../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { renderToast } from '../../../utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../lib/zustand';
import routes from '../../../data/routes';

const CreateGroupForm: React.FC<{ onClose: (() => void) | undefined }> = ({ onClose }) => {
  const createGroup = useGroupsControllerV1Create();
  const { addToMyGroups } = usePersistedGroupStore();
  const [value, settingValue] = useState(false);
  const [info, setInfo] = useState(false);
  const { handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { groupName: '' },
  });
  const { t } = useTranslation().i18n;
  const helperText = t(keys.Message.PublicToolTip.description);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const navigate = useNavigate();
  const { member } = usePersistedAuthStore();

  const handleOnCreate = async (data: object) => {
    const { groupName } = data as { groupName: string };
    if (!member) return;
    try {
      const groupData = await createGroup.mutateAsync({ data: { groupName, _private: value } });
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
      navigate(routes.groups);
      if (onClose) {
        onClose();
      }
    } catch (err: any) {
      if (err.response?.status !== 401) {
        renderToast('error', err.response?.data.message ?? 'Something went wrong', 'white');
      }
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
  const toggleInfo = () => {
    if (!info) {
      setInfo(true);
    } else setInfo(false);
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
      onSubmit={handleSubmit(handleOnCreate)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <Box
        overflow="auto"
        width="full"
        paddingRight="8px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            visibility: 'initial',
            width: '10px',
            background: '#D3E2F0',
            borderRadius: '24px',
          },
        }}
      >
        <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
          <Box display="flex" justifyContent="space-between" alignItem="center">
            <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
              Is your group public or private?
            </Text>
            <Text
              color={!info ? '#CC4C33' : '#728BA3'}
              display="block"
              style={{ cursor: 'pointer' }}
              onClick={toggleInfo}
            >
              learn more
            </Text>
          </Box>
          <Box display="flex" width="100%" mt="12px">
            <Button
              color={value === false ? '#29323B' : '#728BA3'}
              bg={value === false ? '#EEF4F6' : '#fff'}
              _hover={{
                backgroundColor: value === true ? 'transparent' : '#EEF4F6',
                color: value === true ? '#728BA3' : '#29323B',
              }}
              _focus={{ boxShadow: 'none' }}
              w="120px"
              h="38px"
              borderRadius="8px"
              onClick={() => {
                settingValue(false);
              }}
            >
              Public
            </Button>
            <Button
              bg={value === true ? '#EEF4F6' : '#fff'}
              color={value === true ? '#29323B' : '#728BA3'}
              _hover={{
                backgroundColor: value === false ? 'transparent' : '#EEF4F6',
                color: value === false ? '#728BA3' : '#29323B',
              }}
              _focus={{ boxShadow: 'none' }}
              w="120px"
              h="38px"
              borderRadius="8px"
              onClick={() => {
                settingValue(true);
              }}
            >
              Private
            </Button>
          </Box>
          {info && (
            <Text
              color="#4E6070"
              bg="#EEF4F6"
              padding="15px"
              style={{ display: 'block', marginTop: '20px', borderRadius: '10px' }}
              dangerouslySetInnerHTML={{
                __html: helperText,
              }}
            />
          )}
        </Box>
      </Box>
      <Flex justifyContent="space-between" w="full">
        <Common.ImpaktButton
          variant="delete"
          borderRadius="16px"
          w={{ md: '135px', base: '130px' }}
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
          w={{ md: '135px', base: '130px' }}
          h={{ md: '64px', base: '54px' }}
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
