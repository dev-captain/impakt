import React from 'react';
import { Forms } from 'components';
import GroupsModal from '../../GroupsModal';
// import GroupSettingsTabs from './Tabs/GroupSettingsTabs';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const BannerImageChangeModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  return (
    <GroupsModal
      modalTitle={{ text: 'Change Image' }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      {/* <GroupSettingsTabs /> */}
      <Forms.UpdateGroupImageForm />
    </GroupsModal>
  );
};

export default BannerImageChangeModal;
