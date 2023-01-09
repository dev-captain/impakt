import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';
import { Text, Box, HStack, Image } from '@chakra-ui/react';
import { Common } from '../../..';
import { WarningIcon } from '@chakra-ui/icons';

interface ConfirmNewEmailProps {
  open: boolean;
  close: () => void;
}
const ConfirmNewEmail: React.FC<ConfirmNewEmailProps> = ({
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
            <Image src='../../../../src/assets/images/Icon.png' width={{ base: '4rem', md: '5rem'}} height='inherit' alt='Dan Abramov' />
          </Box>
        </HStack>
        <Box padding='24px'>
          <Text>Confrim Email</Text>  
        </Box>
      </ModalHeader>
      <ModalCloseButton />
      <HStack align="center" justify="center" w='full' display='flex' flexWrap='wrap' justifyContent='flex-end' rowGap='24px' >
        <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }}>
          <Text>An email has been sent to <a color='rgba(204, 76, 51, 1)'>member@email.com</a> with a verification link. Please find the email and click the link. Your email address change will take effect once verified. Until then, you need to use your old email address for signing in.</Text>
        </Box>
        <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }} backgroundColor='rgba(242, 121, 97, 0.1)' display='inline-flex' borderRadius='5px' marginLeft='0px !important' padding='10px'>
          <WarningIcon color='rgba(204, 76, 51, 1)' margin='auto 9px'></WarningIcon>
          <Text fontSize='14px' color='rgba(204, 76, 51, 1)' fontWeight='400' >Can't find the email? Check your spam folder, or re-send the email.</Text>
        </Box>
        <HStack
          align="center"
          justify="flex-end"
          w="full"
          display='flex'
          rowGap='16px'
          columnGap='8px'
          marginLeft='0px !important'
        >
          <Box w={{ base: '80%', md: '35%', lg: '36%', xl: '155px' }}>
            <Common.ImpaktButton height='48px' bg='rgba(238, 244, 246, 1)'><Text color='rgba(41, 50, 59, 1)'  fontWeight='bold'>Resend</Text></Common.ImpaktButton>
          </Box>
          <Box w={{ base: '80%', md: '35%', lg: '25%', xl: '155px' }} marginLeft={{base: '0px !important', md: '8px !important' }}>
            <Common.ImpaktButton height='48px'  bgGradient='linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))'><Text color='white' fontWeight='bold'>Continue</Text></Common.ImpaktButton>
          </Box>
        </HStack>
      </HStack>
    </ModalContent>
  </Modal>
  );
};

export default ConfirmNewEmail