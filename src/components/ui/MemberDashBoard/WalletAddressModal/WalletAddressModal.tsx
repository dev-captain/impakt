import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

import WalletAddressForm from './WalletAddressForm';

interface WalletAddressModalPropsI {
  isOpen: boolean;
  onClose: () => void;
}

const WalletAddressModal: React.FC<WalletAddressModalPropsI> = ({ isOpen, onClose }) => {
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="720px" bgColor="#1C1C28" borderRadius="32px">
        <ModalHeader textStyle="bold4" color="#FFF" px="40px" pt="25px" pb="15px">
          Submit wallet address
        </ModalHeader>
        <ModalCloseButton
          color="#FFF"
          _focus={{ boxShadow: 'none !important' }}
          onClick={onClose}
        />
        <ModalBody pt="0px" px="40px" pb="40px">
          <WalletAddressForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default WalletAddressModal;
