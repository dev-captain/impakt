import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import GroupsModal from '../../../../GroupsModal';
import ForumDetail from './ForumDetail';

interface ForumDetailModalProps {
  open?: boolean;
  close?: () => void;
  isStandalone?: boolean;
}

const ForumDetailModal: React.FC<ForumDetailModalProps> = ({
  open,
  close,
  isStandalone = false,
}) => {
  const standaloneDisclosure = useDisclosure();
  useEffect(() => {
    if (isStandalone) {
      standaloneDisclosure.onOpen();
    }

    return () => {
      if (isStandalone) {
        standaloneDisclosure.onClose();
      }
    };
  }, []);

  return (
    <GroupsModal
      modalTitle={{ text: 'Forums' }}
      isOpen={open ?? standaloneDisclosure.isOpen}
      onClose={close ?? standaloneDisclosure.onClose}
      showCloseButton
    >
      <ForumDetail />
    </GroupsModal>
  );
};

export default ForumDetailModal;
