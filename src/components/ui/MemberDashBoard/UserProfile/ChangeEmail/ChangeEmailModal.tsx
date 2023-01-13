import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';
import { Text, Box, HStack,VStack, } from '@chakra-ui/react';
import ChangeEmailForm from './ChangeEmailForm'
  
interface ChangeEmailModalProps {
  open: boolean;
  close: () => void;
}
const ChangeEmailModal: React.FC<ChangeEmailModalProps> = ({
  open,
  close,
}) => {
  
  return (
    <>
      <Modal isOpen={open} scrollBehavior="inside" onClose={() => close()} isCentered>
        <ModalOverlay />
        <ModalContent padding={{ base: '1.5em', md: '2em'}}>
            <ModalHeader textAlign='center' padding='0px'>
            <HStack justifyContent='center'>
                <Box>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="80" rx="16" fill="#FEECEE"/>
                    <path d="M56.0005 32L40.0005 42L24.0005 32V28L40.0005 38L56.0005 28V32ZM56.0005 24H24.0005C21.7805 24 20.0005 25.78 20.0005 28V52C20.0005 53.0609 20.4219 54.0783 21.1721 54.8284C21.9222 55.5786 22.9396 56 24.0005 56H56.0005C57.0614 56 58.0788 55.5786 58.8289 54.8284C59.5791 54.0783 60.0005 53.0609 60.0005 52V28C60.0005 26.9391 59.5791 25.9217 58.8289 25.1716C58.0788 24.4214 57.0614 24 56.0005 24Z" fill="url(#paint0_linear_9844_36211)"/>
                    <defs>
                      <linearGradient id="paint0_linear_9844_36211" x1="20.0005" y1="40" x2="60.0005" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F04153"/>
                        <stop offset="1" stop-color="#F27961"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
            </HStack>
            <Box padding='24px'>
                <Text>Change Email</Text>  
            </Box>
            </ModalHeader>
            <ModalCloseButton />
            <HStack align="center" justify="center" w='full' display='flex' flexWrap='wrap' justifyContent='flex-end' rowGap='16px' >
              <VStack justifyContent="center" alignItems="center" w="full" paddingRight="8px">
                <ChangeEmailForm />
              </VStack>
            </HStack>
        </ModalContent>
      </Modal>
    </>
    );
  };
  
export default ChangeEmailModal