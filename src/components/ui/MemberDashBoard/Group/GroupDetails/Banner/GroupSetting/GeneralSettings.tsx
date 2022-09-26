import React from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { Common } from 'components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';

import { GroupRole } from '../../../../../../../lib/redux/slices/groups/types';
import { deleteGroup } from '../../../../../../../lib/redux/slices/groups/actions/deleteGroup';
import { leaveGroup } from '../../../../../../../lib/redux/slices/groups/actions/leaveGroup';

const GeneralSettings: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const dispatch = useAppDispatch();

  const handleGroupDelete = async () => {
    try {
      if (activeGroup?.id) {
        await dispatch(deleteGroup(activeGroup.id)).unwrap();
        toast({
          title: 'Success',
          description: `Group is deleted successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
        navigate('/dashboard/groups');
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `${e.response.data.message}`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  const handleLeaveGroup = async () => {
    try {
      if (activeGroup) {
        await dispatch(leaveGroup(activeGroup.id)).unwrap();
        toast({
          title: 'Success',
          description: `Left from Group successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `You can't leave your owned group`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }

    navigate('/dashboard/groups');
  };

  return (
    <Box
      height={{ base: '550px', md: 'aut0' }}
      overflowY="auto"
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
      <Common.ImpaktButton
        mt={{ md: 0, base: '10px' }}
        variant="primary"
        colorScheme="#fff"
        w={{ md: '147px', base: '100%' }}
        ml={{ md: '16px', base: '0' }}
        h="60px"
        backgroundColor="#29323B"
        borderRadius="8px"
        type="submit"
        fontSize={{ md: '16px' }}
        onClick={activeGroup?.role === GroupRole.Creator ? handleGroupDelete : handleLeaveGroup}
        fontWeight="700"
      >
        {activeGroup?.role === GroupRole.Creator ? 'Delete Group' : 'Leave Group'}
      </Common.ImpaktButton>
    </Box>
  );
};

export default GeneralSettings;
