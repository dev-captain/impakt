import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Text,
    HStack,
    Box,
  } from '@chakra-ui/react';
  import ChangePassowrdForm from './ChangePasswordForm';

interface ChangePasswordProps {
  open: boolean;
  close: () => void;
}
const ChangePasswordModal: React.FC<ChangePasswordProps> = ({
    open,
    close,
  }) => {

  return (
    <Modal isOpen={open} scrollBehavior="inside" onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent padding={{ base: '1.5em', md: '2em'}}>
        <ModalHeader textAlign='center' padding='0px'>
          <HStack justifyContent='center'>
            <Box>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="64" height="64" rx="12.8" fill="#FEECEE"/>
              <path d="M32.4985 40.0003C33.3472 40.0003 34.1611 39.6631 34.7612 39.063C35.3613 38.4629 35.6985 37.649 35.6985 36.8003C35.6985 35.9516 35.3613 35.1376 34.7612 34.5375C34.1611 33.9374 33.3472 33.6003 32.4985 33.6003C31.6498 33.6003 30.8359 33.9374 30.2357 34.5375C29.6356 35.1376 29.2985 35.9516 29.2985 36.8003C29.2985 37.649 29.6356 38.4629 30.2357 39.063C30.8359 39.6631 31.6498 40.0003 32.4985 40.0003ZM42.0985 25.6003C42.9472 25.6003 43.7611 25.9374 44.3612 26.5375C44.9613 27.1376 45.2985 27.9516 45.2985 28.8003V44.8003C45.2985 45.649 44.9613 46.4629 44.3612 47.063C43.7611 47.6631 42.9472 48.0003 42.0985 48.0003H22.8985C22.0498 48.0003 21.2359 47.6631 20.6357 47.063C20.0356 46.4629 19.6985 45.649 19.6985 44.8003V28.8003C19.6985 27.9516 20.0356 27.1376 20.6357 26.5375C21.2359 25.9374 22.0498 25.6003 22.8985 25.6003H24.4985V22.4003C24.4985 20.2785 25.3413 18.2437 26.8416 16.7434C28.3419 15.2431 30.3768 14.4003 32.4985 14.4003C33.5491 14.4003 34.5893 14.6072 35.56 15.0092C36.5306 15.4113 37.4125 16.0005 38.1553 16.7434C38.8982 17.4863 39.4875 18.3682 39.8895 19.3388C40.2916 20.3094 40.4985 21.3497 40.4985 22.4003V25.6003H42.0985ZM32.4985 17.6003C31.2254 17.6003 30.0045 18.106 29.1044 19.0062C28.2042 19.9063 27.6985 21.1272 27.6985 22.4003V25.6003H37.2985V22.4003C37.2985 21.1272 36.7928 19.9063 35.8926 19.0062C34.9924 18.106 33.7715 17.6003 32.4985 17.6003Z" fill="url(#paint0_linear_9845_37387)"/>
              <defs>
                <linearGradient id="paint0_linear_9845_37387" x1="19.6985" y1="31.2003" x2="45.2985" y2="31.2003" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F04153"/>
                  <stop offset="1" stop-color="#F27961"/>
                </linearGradient>
              </defs>
            </svg>

            </Box>
          </HStack>
          <Box padding='24px'>
            <Text>Change password</Text>  
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <HStack align="center" justify="center" w='full' display='flex' flexWrap='wrap' justifyContent='flex-end' rowGap='16px' >
          <ChangePassowrdForm />
        </HStack>
      </ModalContent>
    </Modal>
  );
};
  
export default ChangePasswordModal