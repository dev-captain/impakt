import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import WaitlistForm from './WaitlistForm';
import Images from '../../../../assets/images';

export type WaitlistModalProps = {
  isOpen: boolean;
  isCloseButton?: boolean;
  onClose: () => void;
};

const WaitlistModal: React.FC<WaitlistModalProps> = (props) => {
  return (
    <Modal isCentered scrollBehavior="inside" isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        borderRadius="3xl"
        boxShadow="0px 12px 30px -6px rgba(0, 6, 14, 0.12), 0px 24px 60px -12px rgba(0, 6, 14, 0.2);"
      >
        <ModalHeader>
          {props.isCloseButton && <ModalCloseButton onClick={props.onClose} />}
        </ModalHeader>
        <ModalBody p="2em">
          <VStack
            w="full"
            h="full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            rowGap="1em"
          >
            <Text fontSize="2xl" fontWeight="medium" color="#29323B" isTruncated>
              Launching soon on
            </Text>
            <Box mt="2" display="flex" flexDirection="column" alignItems="center">
              <Image src={Images.Common.VsportDark} w="168px" h="48px" />
              <Text fontSize="18px" fontWeight="medium" color="#29323B">
                for mobile
              </Text>
            </Box>
            <WaitlistForm />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WaitlistModal;
