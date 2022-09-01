import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  CircularProgress,
  VStack,
  useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import SearchUserForm from './SearchUserForm';
import { inviteMember } from '../../../../../../lib/redux/slices/groups/actions/inviteMember';

interface SearchUserPropsI {
  onClose: () => void;
  isOpen: boolean;
}
const SearchUserModal: React.FC<SearchUserPropsI> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const isLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const searchMembers = useAppSelector((state) => state.memberAuth.memberSearch);
  const authMember = useAppSelector((state) => state.memberAuth.member);
  const handleInvite = async (userId: number, username: string) => {
    if (!activeGroup) return;
    try {
      await dispatch(inviteMember({ groupId: activeGroup.id, toUserId: userId })).unwrap();

      toast({
        title: 'Success',
        description: `${username} invited successfully`,
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
      onClose();
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'Error',
        description: error?.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent margin="0 20px">
        <ModalHeader>Invite People</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SearchUserForm />
          {isLoading ? (
            <Flex px="5" w="full" justifyContent="center">
              <CircularProgress isIndeterminate />
            </Flex>
          ) : (
            <VStack px="5">
              {searchMembers.map(
                ({ username, id }) =>
                  authMember?.id !== id && (
                    <Flex
                      bgColor="gray.200"
                      borderRadius="0.2em"
                      p="1em"
                      mt="1em"
                      w="full"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <p key={id}>{username}</p>
                      <Button colorScheme="green" onClick={() => handleInvite(id, username)}>
                        Invite
                      </Button>
                    </Flex>
                  ),
              )}
            </VStack>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default SearchUserModal;
