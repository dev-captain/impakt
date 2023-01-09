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
    Image,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Input,
  } from '@chakra-ui/react';
import { Common, I } from '../../..';
import { LockIcon, ViewIcon } from '@chakra-ui/icons';

interface ChangePasswordProps {
  open: boolean;
  close: () => void;
}
const ChangePassword: React.FC<ChangePasswordProps> = ({
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
            <Text>Change password</Text>  
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <HStack align="center" justify="center" w='full' display='flex' flexWrap='wrap' justifyContent='flex-end' rowGap='16px' >
          <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }}>
            <Text>Old Password:</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.700' />} marginTop='9px'></InputLeftElement>
              <Input size='lg' margin='5px 0' placeholder="********"></Input>
              <InputRightElement pointerEvents='none' children={<ViewIcon color='gray.700' />} marginTop='9px'></InputRightElement>
            </InputGroup>
          </Box>
          <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }} marginLeft='0px !important'>
            <Text>New Password:</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.700' />} marginTop='9px'></InputLeftElement>
              <Input size='lg' margin='5px 0' placeholder="********"></Input>
              <InputRightElement pointerEvents='none' children={<ViewIcon color='gray.700' />} marginTop='9px'></InputRightElement>
            </InputGroup>
          </Box>
          <Box w={{ base: '100%', md: '100%', lg: '100%', xl: '155px' }} marginLeft='0px !important'>
            <Text>Confirm New Password:</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.700' />} marginTop='9px'></InputLeftElement>
              <Input size='lg' margin='5px 0' placeholder="********" leftIcon={<I.CheckIcon  margin='auto 9px' />}></Input>
              <InputRightElement pointerEvents='none' children={<ViewIcon color='gray.700' />} marginTop='9px'></InputRightElement>
            </InputGroup>
          </Box>
          <Box w={{ base: '100%', md: '30%', lg: '30%', xl: '155px' }} marginLeft='0px !important'>
            <Common.ImpaktButton height='48px' marginTop='21px' bgGradient='linear(to-r, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))'><Text color='rgba(255, 255, 255, 1)' fontWeight='600'>Submit</Text></Common.ImpaktButton>
          </Box>
        </HStack>
      </ModalContent>
    </Modal>
  );
};
  
export default ChangePassword