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
  ModalProps,
} from '@chakra-ui/react';

interface GroupsModalPropsI {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: {
    text: string;
    style?: TextProps;
  };
  showCloseButton?: boolean;
  size?: ModalProps['size'];
}

const GroupsModal: React.FC<GroupsModalPropsI> = ({
  isOpen,
  onClose,
  modalTitle,
  children,
  showCloseButton,
  size,
}) => {
  return (
    <Modal size={size} scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '720px' }}
        mt="100px"
        mb="20px"
        h={size === 'full' ? '100px' : 'auto'}
        overflowY="auto"
        borderRadius={size === 'full' ? '0' : '32px'}
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
