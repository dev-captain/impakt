import React from 'react';
import { Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Common } from 'components';
import GroupsModal from '../../../../../../GroupsModal';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
  handleConfirm: () => Promise<void>;
}

const ConformationModal: React.FC<GroupSettingModalProps> = ({ open, close, handleConfirm }) => {
  return (
    <GroupsModal
      modalTitle={{
        text: 'Are you sure you want remove this user from moderation team?',
      }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      <Box display="flex" justifyContent="center" alignItems="center" mt="12px">
        <Box>
          <Common.ImpaktButton
            mt={{ md: 0, base: '10px' }}
            display="flex"
            justifyContent="center"
            margin="auto"
            colorScheme="#fff"
            w={{ md: '156px', base: '100%' }}
            ml={{ md: '16px', base: '0' }}
            _hover={{ bg: '#C41F30' }}
            _active={{ bg: '#910917', color: '#fff' }}
            h="60px"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            onClick={handleConfirm}
            fontWeight="700"
          >
            <DeleteIcon width="24px" height="24px" marginRight="20px" />
            Remove
          </Common.ImpaktButton>
        </Box>
      </Box>
    </GroupsModal>
  );
};

export default ConformationModal;
