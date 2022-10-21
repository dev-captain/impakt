import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, Button, Text, useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Common } from 'components';
import { updateGroup } from 'lib/redux/slices/groups/actions/updateGroup';
import { toastLayout } from 'theme';
import keys from 'i18n/types';
import PermissionCard from './PermissionCard';

const PermissionTab: React.FC = () => {
  const [value, setValue] = React.useState('Public');

  const { t } = useTranslation().i18n;
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const groupParam = useParams();
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  React.useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (activeGroup?._private) {
      setValue('Private');
    } else {
      setValue('Public');
    }
  }, [activeGroup]);

  const handleOnUpdate = async (status: boolean, groupName: string, groupId: number) => {
    try {
      await dispatch(updateGroup({ status, groupName, groupId })).unwrap();
      toast({
        title: 'Success',
        description: 'Group Status Changed successfully.',
        isClosable: true,
        duration: 8000,
        variant: 'glass',
        status: 'success',
        position: 'top-right',
        containerStyle: toastLayout,
      });
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
        position: 'top-right',
      });
    }
    navigate('/dashboard/groups');
  };

  return (
    <Box>
      <Box
        height="470px"
        overflow="auto"
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
        <PermissionCard
          title="Is your group public or private?"
          helperText={t(keys.Message.PublicToolTip.description)}
        >
          <Button
            color={value === 'Public' ? '#29323B' : '#728BA3'}
            bg={value === 'Public' ? '#EEF4F6' : '#fff'}
            _hover={{
              backgroundColor: value === 'Private' ? 'transparent' : '#EEF4F6',
              color: value === 'Private' ? '#728BA3' : '#29323B',
            }}
            _focus={{ boxShadow: 'none' }}
            w="120px"
            h="38px"
            borderRadius="8px"
            onClick={() => {
              setValue('Public');
            }}
          >
            Public
          </Button>
          <Button
            bg={value === 'Private' ? '#EEF4F6' : '#fff'}
            color={value === 'Private' ? '#29323B' : '#728BA3'}
            _hover={{
              backgroundColor: value === 'Public' ? 'transparent' : '#EEF4F6',
              color: value === 'Public' ? '#728BA3' : '#29323B',
            }}
            _focus={{ boxShadow: 'none' }}
            w="120px"
            h="38px"
            borderRadius="8px"
            onClick={() => {
              setValue('Private');
            }}
          >
            Private
          </Button>
        </PermissionCard>
      </Box>
      <Box mt="20px" textAlign="end">
        <Common.ImpaktButton
          variant="black"
          color="#fff"
          w="147px"
          h="60px"
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="500"
          onClick={() =>
            handleOnUpdate(
              value !== 'Public',
              String(activeGroup?.groupName),
              Number(groupParam?.id),
            )
          }
        >
          <Text
            ml={{ md: '11px', base: '6px' }}
            fontSize={{ md: '20px', base: '16px' }}
            fontWeight="600"
          >
            Save
          </Text>
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default PermissionTab;
