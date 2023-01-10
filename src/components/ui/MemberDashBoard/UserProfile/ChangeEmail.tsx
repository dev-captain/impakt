import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';
import { Text, Box, HStack, Image, InputGroup, Input, InputLeftElement, InputRightElement, useDisclosure } from '@chakra-ui/react';
import { Common, I } from '../../..';
import { LockIcon, ViewIcon } from '@chakra-ui/icons';
import ConfirmNewEmail from '../UserProfile/ConfirmNewEmail';
  
interface ChangeEmailProps {
  open: boolean;
  close: () => void;
}
const ChangeEmail: React.FC<ChangeEmailProps> = ({
  open,
  close,
}) => {
  const ConfirmNewEmailDisclosure = useDisclosure();
  
  return (
    <>
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
                <Text>Change Email</Text>  
            </Box>
            </ModalHeader>
            <ModalCloseButton />
            <HStack align="center" justify="center" w='full' display='flex' flexWrap='wrap' justifyContent='flex-end' rowGap='16px' >
                <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }}>
                <Text>New Email:</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' w='17px' margin='9px 12px' color='gray.700' children={<I.Email />}></InputLeftElement>
                    <Input size='lg' margin='5px 0' placeholder="hello@mail.com"></Input>
                </InputGroup>
                </Box>
                <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }} marginLeft='0px !important'>
                <Text>Password:</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.700' />} marginTop='9px'></InputLeftElement>
                    <Input size='lg' margin='5px 0' placeholder="hello@mail.com"></Input>
                    <InputRightElement pointerEvents='none' children={<ViewIcon color='gray.700' />} marginTop='9px'></InputRightElement>
                </InputGroup>
                </Box>
                <Box w={{ base: '30%', md: '30%', lg: '30%', xl: '155px' }} marginLeft='0px !important'>
                <Text></Text>
                <Common.ImpaktButton height='48px' marginTop='21px' bgGradient='linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))'   onClick={ () => {ConfirmNewEmailDisclosure.onOpen(); close}}><Text color='rgba(255, 255, 255, 1)' fontWeight='600'>Submit</Text></Common.ImpaktButton>
                </Box>
            </HStack>
        </ModalContent>
      </Modal>
      <ConfirmNewEmail open={ConfirmNewEmailDisclosure.isOpen} close={ConfirmNewEmailDisclosure.onClose} />
    </>
    );
  };
  
export default ChangeEmail