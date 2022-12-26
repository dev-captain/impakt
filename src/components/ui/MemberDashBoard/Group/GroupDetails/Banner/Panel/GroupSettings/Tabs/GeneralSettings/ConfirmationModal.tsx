import React from 'react';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
  title: string;
  buttonTitle: any;
  buttonIcon: any;
  onClick: () => void;
  isLoading?: boolean;
}

const ConformationModal: React.FC<GroupSettingModalProps> = ({
  open,
  close,
  title,
  onClick,
  buttonTitle,
  buttonIcon,
  isLoading,
  children,
}) => {
  return (
    <Modal isOpen={open} isCentered onClose={close}>
      <ModalOverlay />
      <ModalContent
        mt="100px"
        mb="20px"
        p="32px"
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '560px' }}
        borderRadius="24px"
        boxShadow="0px 12px 30px -6px rgba(0, 6, 14, 0.12), 0px 24px 60px -12px rgba(0, 6, 14, 0.2)"
      >
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody padding="0 !important">
          <VStack rowGap="16px">
            <Box textAlign="center" id="confirmation-modal-title-box">
              <Text color="#29323B" fontWeight="500" fontSize="24px" lineHeight="32px">
                {title}
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt="24px">
              <Box>
                {children}
                <Button
                  display="flex"
                  justifyContent="center"
                  width="min-content"
                  h="60px"
                  borderRadius="8px"
                  type="submit"
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  onClick={onClick}
                  color="#FFFFFF"
                  bg="linear-gradient(90deg, #F04153 0%, #F27961 100%);"
                  leftIcon={buttonIcon}
                  _hover={{ bg: '#F04153' }}
                >
                  <Text fontWeight="600" fontSize="20px" lineHeight="32px">
                    {buttonTitle}
                  </Text>
                </Button>
              </Box>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConformationModal;
