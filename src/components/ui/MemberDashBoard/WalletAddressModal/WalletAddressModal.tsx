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
import { Common } from 'components';
import { useForm } from 'hooks';

import Images from '../../../../assets/images';
import { EthIcon } from '../../../icons';
import WalletAddressForm from './WalletAddressForm';

interface InfoModalPropsI {
  handleModal?: () => void;
  isModalOpen: boolean;
}

const WalletAddressModal: React.FC<InfoModalPropsI> = ({ handleModal, isModalOpen }) => {
  const { onClose } = useDisclosure();

  return (
    <Modal closeOnOverlayClick isOpen={isModalOpen} onClose={onClose} isCentered>
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
          <WalletAddressForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default WalletAddressModal;
