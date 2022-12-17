import React from 'react';
import { Forms } from 'components';
import GroupsModal from '../../../GroupsModal';
// import GroupSettingsTabs from './Tabs/GroupSettingsTabs';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const ChangeGroupTitleModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  return (
    <GroupsModal
      modalTitle={{ text: 'Change Group Title' }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      {/* <GroupSettingsTabs /> */}
      <Forms.UpdateGroupNameForm />
    </GroupsModal>
  );
};

export default ChangeGroupTitleModal;
