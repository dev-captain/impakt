import * as React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import { I } from '@/components';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import ChangeGroupTitleModal from './ChangeGroupTitleModal';

const BannerGroupTitleText: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { role } = usePersistedGroupStore();

  return (
    <Text
      textStyle="semiBold32"
      fontSize={{ base: '20px', md: '30px', lgx: '44px' }}
      color="29323B"
      letterSpacing="-0.01em"
      display="flex"
      alignItems="center"
    >
      {activeGroup?.groupName}
      {(role === 'Creator' || role === 'Moderator') && (
        <I.PenIcon
          color="#91A8BD"
          marginLeft="20px"
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            onOpen();
          }}
        />
      )}
      {(role === 'Creator' || role === 'Moderator') && (
        <ChangeGroupTitleModal open={isOpen} close={onClose} />
      )}
    </Text>
  );
};

export default BannerGroupTitleText;
