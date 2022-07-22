import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Images from '../../../assets/images';

interface InfoModalPropsI {
  handleModal?: () => void;
  isModalOpen: boolean;
}

const ModalWalletAddress: React.FC<InfoModalPropsI> = ({ handleModal, isModalOpen }) => {
  const { onClose } = useDisclosure();
  return (
    <Modal closeOnOverlayClick={false} isOpen={isModalOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="720px" bgColor="#1C1C28" borderRadius="32px">
        <ModalHeader textStyle="bold4" color="#FFF" px="40px" pt="25px" pb="15px">
          Submit wallet address
        </ModalHeader>
        <ModalCloseButton
          color="#FFF"
          _focus={{ boxShadow: 'none !important' }}
          onClick={handleModal}
        />
        <ModalBody pt="0px" px="40px" pb="40px">
          <HStack spacing={4} w="full" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Box w="full">
              <InputGroup border="none" background="#121216" borderRadius="12px">
                <InputLeftElement
                  pointerEvents="none"
                  height="60px"
                  width="60px"
                  borderEnd="1px solid rgba(255, 255, 255, 0.1)"
                  marginRight="16px"
                >
                  <img
                    src={Images.Common.Walletad}
                    style={{ opacity: '0.5' }}
                    alt="Discord"
                    width="19px"
                    height="32px"
                  />
                </InputLeftElement>
                <Input
                  border="none"
                  type="address"
                  height="60px"
                  pl="80px"
                  minWidth={{ base: '100%', md: '495px' }}
                  placeholder="Enter wallet address"
                  color="rgba(255, 255, 255, 0.4)"
                  textStyle="regular201"
                  _placeholder={{ color: 'rgba(255, 255, 255, 0.4)' }}
                  _focus={{ border: 'none !important', boxShadow: 'none !important' }}
                  borderRadius="16px !important"
                />
              </InputGroup>
            </Box>
            <Box
              w="full"
              mt={{ base: '16px !important', md: '0px !important' }}
              ms={{ base: '0px !important', md: '16px !important' }}
            >
              <Button
                background="linear-gradient(180deg, #F04153 0%, #F91F35 100%)"
                _hover={{ background: 'linear-gradient(180deg, #F04153 0%, #F91F35 100%)' }}
                color="#FFF"
                fontSize="20px"
                lineHeight="32px"
                fontWeight="500"
                paddingX="32px"
                height="60px"
                borderRadius="16px"
                minWidth={{ base: '100%', md: '137px' }}
              >
                Submit
              </Button>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalWalletAddress;
