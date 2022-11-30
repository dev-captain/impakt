import {
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import * as React from 'react';
import { Forms } from 'components';

interface CreatePostModalPropsI {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalPropsI> = ({ onClose, isOpen }) => {
  return (
    <Modal onClose={onClose} autoFocus={false} scrollBehavior="inside" isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        mt="100px"
        mb="20px"
        p="32px"
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '720px' }}
        borderRadius="24px"
        boxShadow="0px 12px 30px -6px rgba(0, 6, 14, 0.12), 0px 24px 60px -12px rgba(0, 6, 14, 0.2)"
      >
        <ModalHeader p="0 !important">
          <Text
            fontWeight="500"
            fontSize="24px"
            lineHeight="100%"
            letterSpacing="-0.5px"
            color="#29323B"
          >
            Create Topic
          </Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody mt="32px" p="0 !important">
          <Forms.CreatePostForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CreatePostModal;
