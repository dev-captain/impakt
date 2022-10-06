import React from 'react';
import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { GroupRole } from '../../../../../../../lib/redux/slices/groups/types';
import { deleteGroup } from '../../../../../../../lib/redux/slices/groups/actions/deleteGroup';
import { leaveGroup } from '../../../../../../../lib/redux/slices/groups/actions/leaveGroup';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const ConformationModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup?.Members)?.filter(
    ({ role }) => role !== GroupRole.None,
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
    <Modal isOpen={open} onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '560px' }}
        mt="140px"
        h="auto"
        overflowY="auto"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text
            w="100%"
            fontSize={{ base: '20px', md: '24px' }}
            textAlign="center"
            color="#29323B"
            fontWeight="700"
          >
            {activeGroup?.role !== GroupRole.Creator
              ? 'Are you sure you want to leave?'
              : 'Are you sure you want to delete group?'}
          </Text>
          <ModalCloseButton
            color="#728BA3"
            position="initial"
            fontSize="18px"
            _focus={{ boxShadow: 'none' }}
          />
        </Box>
        <ModalBody p="0" display="flex" justifyContent="center" alignItems="center" mt="24px">
          <Box>
            {activeGroup?.role === GroupRole.Creator && (
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
              onClick={
                activeGroup?.role === GroupRole.Creator ? handleGroupDelete : handleLeaveGroup
              }
              fontWeight="700"
            >
              {activeGroup?.role === GroupRole.Creator ? (
                <DeleteIcon width="24px" height="24px" marginRight="20px" />
              ) : (
                <I.LeaveIcon width="24px" height="24px" marginRight="20px" />
              )}
              {activeGroup?.role === GroupRole.Creator ? 'Delete' : 'Leave'}
            </Common.ImpaktButton>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConformationModal;
