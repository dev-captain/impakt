import React from 'react';
import GroupsModal from '../../../../GroupsModal';
import ForumDetail from './ForumDetail';

interface ForumDetailModalProps {
  open: boolean;
  close: () => void;
}

const ForumDetailModal: React.FC<ForumDetailModalProps> = ({ open, close }) => {
  return (
    <GroupsModal
      size="full"
      modalTitle={{ text: 'Forums' }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      <ForumDetail />
    </GroupsModal>
  );
};

export default ForumDetailModal;
