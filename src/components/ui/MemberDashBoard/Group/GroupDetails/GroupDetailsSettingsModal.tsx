import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Common } from 'components';
import { deleteGroup } from '../../../../../lib/redux/slices/groups/actions/deleteGroup';
import { updateGroup } from '../../../../../lib/redux/slices/groups/actions/updateGroup';

const GroupDetailSettingsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const toast = useToast();
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [friendlyName, setFriendlyName] = React.useState(activeGroup?.friendlyName);

  const onFriendlyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendlyName(e.target.value);
  };

  const handleUpdateGroupName = async () => {
    try {
      await dispatch(updateGroup({ groupId: activeGroup?.id, friendlyName })).unwrap();
    } catch (e: any) {
      toast({
        title: 'Error',
        description: 'Group name already exist',
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };
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

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent minWidth={isLessThan768 ? 'auto' : '720px'} margin="0 20px">
        <ModalHeader
          color="#29323B"
          fontSize={{ base: isLessThan768 ? '30px' : '48px', lg: '48px' }}
          paddingBottom="0"
          fontWeight="700"
          textAlign="center"
        >
          Settings
        </ModalHeader>
        <ModalBody padding={{ md: '20px', base: '12px' }}>
          <Text color="#4E6070" fontSize={{ md: '18px' }} marginBottom="8px">
            Group settings:
          </Text>

          <Text color="#4E6070" fontSize={{ md: '18px' }} marginBottom="8px">
            Group name:
          </Text>
          <Input
            defaultValue={activeGroup?.friendlyName}
            onChange={onFriendlyNameChange}
            placeholder="Group by Demidues"
            size="md"
            backgroundColor="#EEF4F6"
            borderRadius="12px"
            border="0"
            height={{ md: '60px', base: '50px' }}
            outline="none"
            _focus={{ border: '0' }}
          />

          <Button
            colorScheme="#fff"
            _focus={{ boxShadow: 'none' }}
            backgroundColor="#29323B"
            _hover={{ backgroundColor: '#29323B' }}
            _active={{ backgroundColor: '#29323B' }}
            borderRadius="16px"
            onClick={handleUpdateGroupName}
            fontSize={{ md: '18px' }}
            fontWeight="700"
          >
            Update Group Name
          </Button>
        </ModalBody>

        <ModalFooter justifyContent="space-between" padding={{ md: '20px', base: '12px' }}>
          <Common.ImpaktButton
            autoFocus
            variant="alert"
            borderRadius="16px"
            w={{ md: '152px', base: '120px' }}
            h={{ md: '64px', base: '54px' }}
            fontSize={{ md: '18px' }}
            fontWeight="700"
            mr={3}
            justifyContent="space-evenly"
            onClick={() => {
              handleGroupDelete();
              onClose();
            }}
          >
            Delete
          </Common.ImpaktButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default GroupDetailSettingsModal;
