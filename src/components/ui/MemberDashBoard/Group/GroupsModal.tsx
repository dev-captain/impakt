import React from 'react';
import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  Box,
  ModalCloseButton,
  ModalBody,
  TextProps,
} from '@chakra-ui/react';

interface GroupsModalPropsI {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: {
    text: string;
    style?: TextProps;
  };
  showCloseButton?: boolean;
}

const GroupsModal: React.FC<GroupsModalPropsI> = ({
  isOpen,
  onClose,
  modalTitle,
  children,
  showCloseButton,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '750px' }}
        mt="140px"
        h="auto"
        overflowY="auto"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text
            w="100%"
            fontSize={{ base: '20px', md: '32px' }}
            color="#29323B"
            fontWeight="700"
            {...modalTitle.style}
          >
            {modalTitle.text}
          </Text>
          {showCloseButton && (
            <ModalCloseButton
              color="#728BA3"
              position="initial"
              fontSize="18px"
              _focus={{ boxShadow: 'none' }}
            />
          )}
        </Box>
        <ModalBody p="0">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default GroupsModal;
