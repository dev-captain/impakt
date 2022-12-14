import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';

export type WaitlistModalProps = {
  isOpen: boolean;
  isCloseButton?: boolean;
  onClose: () => void;
  overlay: boolean;
};

const WaitlistModal: React.FC<WaitlistModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay bg={props.overlay ? 'modalOverlayBg' : undefined} />
      <ModalContent
        rounded="3xl"
        boxShadow="0px 12px 30px -6px rgba(0, 6, 14, 0.12), 0px 24px 60px -12px rgba(0, 6, 14, 0.2);"
      >
        <ModalHeader>
          {props.isCloseButton && <ModalCloseButton onClick={props.onClose} />}
        </ModalHeader>
        <ModalBody>
          <Box
            maxW="360px"
            maxH="290px"
            w="full"
            h="full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Stack align="center">
              <Text fontSize="2xl" fontWeight="medium" color="#29323B" isTruncated>
                Launching soon on
              </Text>
              <Box mt="2" display="flex" flexDirection="column" alignItems="center">
                <Image src={Vsport} w="168px" h="48px" />
                <Text fontSize="18px" fontWeight="medium" color="#29323B">
                  for mobile
                </Text>
              </Box>
            </Stack>
            <WaitlistForm />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WaitlistModal;
