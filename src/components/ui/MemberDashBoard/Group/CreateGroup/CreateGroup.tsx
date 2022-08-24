import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Input,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createGroup } from '../../../../../lib/redux/slices/groups/actions/createGroup';
import { fetchMyGroups } from '../../../../../lib/redux/slices/groups/actions/fetchMyGroups';

const CreateGroup: React.FC = () => {
  const [friendlyName, setFriendlyName] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const member = useAppSelector((state) => state.memberAuth.member);
  const navigate = useNavigate();
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  const handleOnCreate = async () => {
    try {
      if (!member) return;
      await dispatch(createGroup(friendlyName)).unwrap();
      await dispatch(fetchMyGroups(member.id));
      toast({
        title: 'Success',
        description: 'Your password was changed, you can now login in the Impakt app.',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (e: any) {
      console.error(e);
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
    navigate('/dashboard/groups');
  };

  const onFriendlyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendlyName(e.target.value);
  };
  React.useEffect(() => {
    onOpen();
  }, []);

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={() => {
        onClose();
        navigate('/dashboard/groups');
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
          Create a Group
        </ModalHeader>
        <ModalBody padding={{ md: '20px', base: '12px' }}>
          <Text color="#728BA3" textAlign="center" fontSize={{ md: '18px' }} marginBottom="24px">
            Your group is where you’re doing fitness with others: friends, students, fans,
            colleagues, and just like-minded people.
          </Text>
          <Text color="#4E6070" fontSize={{ md: '18px' }} marginBottom="8px">
            Group name:
          </Text>
          <Input
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
        </ModalBody>

        <ModalFooter justifyContent="space-between" padding={{ md: '20px', base: '12px' }}>
          <Button
            backgroundColor="transparent"
            _hover={{ backgroundColor: 'transparent' }}
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
            onClick={() => {
              onClose();
              navigate('/dashboard/groups');
            }}
          >
            <I.BackIcon />
            Back
          </Button>
          <Button
            colorScheme="#fff"
            w={{ md: '135px', base: '130px' }}
            h={{ md: '64px', base: '54px' }}
            _focus={{ boxShadow: 'none' }}
            backgroundColor="#29323B"
            _hover={{ backgroundColor: '#29323B' }}
            _active={{ backgroundColor: '#29323B' }}
            borderRadius="16px"
            onClick={handleOnCreate}
            fontSize={{ md: '18px' }}
            fontWeight="700"
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateGroup;
