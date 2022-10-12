import React from 'react';
import { Box, Text, useToast } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { deleteGroup } from '../../../../../../../../../../lib/redux/slices/groups/actions/deleteGroup';
import { leaveGroup } from '../../../../../../../../../../lib/redux/slices/groups/actions/leaveGroup';
import GroupsModal from '../../../../../../GroupsModal';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const ConformationModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const role = useAppSelector((state) => state.groupsReducer.role);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup?.members)?.filter(
    (m) => m.role !== 'None',
  );

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
    <GroupsModal
      modalTitle={{
        text:
          role !== 'Creator'
            ? 'Are you sure you want to leave?'
            : 'Are you sure you want to delete group?',
      }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      <Box display="flex" justifyContent="center" alignItems="center" mt="24px">
        <Box>
          {role === 'Creator' && (
            <Box display="flex" alignItems="center" justifyContent="center" marginBottom="24px">
              <I.PeopleIcon color="#F84153" />
              <Text color="#F84153" fontSize="24px" fontWeight="700" marginLeft="12px">
                {members?.length}
              </Text>
            </Box>
          )}
          <Common.ImpaktButton
            mt={{ md: 0, base: '10px' }}
            display="flex"
            justifyContent="center"
            margin="auto"
            colorScheme="#fff"
            w={{ md: '156px', base: '100%' }}
            ml={{ md: '16px', base: '0' }}
            _hover={{ bg: '#C41F30' }}
            _active={{ bg: '#910917', color: '#fff' }}
            h="60px"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '20px' }}
            onClick={role === 'Creator' ? handleGroupDelete : handleLeaveGroup}
            fontWeight="700"
          >
            {role === 'Creator' ? (
              <DeleteIcon width="24px" height="24px" marginRight="20px" />
            ) : (
              <I.LeaveIcon width="24px" height="24px" marginRight="20px" />
            )}
            {role === 'Creator' ? 'Delete' : 'Leave'}
          </Common.ImpaktButton>
        </Box>
      </Box>
    </GroupsModal>
  );
};

export default ConformationModal;
