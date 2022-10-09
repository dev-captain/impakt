import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Box,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { Forms } from 'components';

const CreateGroupModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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
      <ModalContent minWidth={{ md: '720px', base: 'auto' }} margin="0 20px">
        <ModalHeader
          color="rgba(41, 50, 59, 1)"
          fontSize={{ lg: '48px', md: '48px', base: '30px' }}
          paddingBottom="0"
          fontWeight="700"
          textAlign="center"
        >
          Create a Group
        </ModalHeader>
        <ModalBody padding={{ md: '20px', base: '12px' }}>
          <Box id="description-box" px="2px">
            <Text
              color="#728BA3"
              textAlign="center"
              fontWeight="500"
              fontSize={{ md: '18px' }}
              marginBottom="24px"
            >
              Your group is where you’re doing fitness with others: friends, students, fans,
              colleagues, and just like-minded people.
            </Text>
          </Box>
          <Forms.CreateGroupForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CreateGroupModal;
