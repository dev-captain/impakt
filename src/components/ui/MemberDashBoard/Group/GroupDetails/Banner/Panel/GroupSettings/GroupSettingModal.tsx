import React from 'react';
import GroupsModal from '../../../../GroupsModal';
import GroupSettingsTabs from './Tabs/GroupSettingsTabs';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const GroupSettingModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  return (
    <GroupsModal
      modalTitle={{ text: 'Group Settings' }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      <GroupSettingsTabs />
    </GroupsModal>
  );
};

export default GroupSettingModal;
