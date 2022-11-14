import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
// import { usePersistedGroupStore } from '../../../../../../../../lib/zustand';
import GroupInviteLink from '../../GroupShare/GroupInviteLink';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const GroupSocialModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  // const { activeGroup } = usePersistedGroupStore();

  return (
    <Modal isOpen={open} onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '750px' }}
        mt="140px"
        overflowY="auto"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text w="100%" fontSize={{ base: '20px', md: '32px' }} color="#29323B" fontWeight="700">
            Invite friends
          </Text>
          <ModalCloseButton
            color="#728BA3"
            position="initial"
            fontSize="18px"
            _focus={{ boxShadow: 'none' }}
          />
        </Box>
        <ModalBody p="0">
          <Tabs mt="15px">
            <GroupInviteLink />
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GroupSocialModal;
