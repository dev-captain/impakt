import * as React from 'react';
import { Menu, MenuButton, useDisclosure } from '@chakra-ui/react';
import { Common, I } from 'components';

import GroupSocialModal from './Panel/GroupSettings/GroupSocialModal';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

const BannerShareButton: React.FC = () => {
  const { role } = usePersistedGroupStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isRoleDefined = role !== 'None';

  return (
    <>
      <Menu>
        {isRoleDefined && (
          <Common.ImpaktButton
            variant="transparent"
            as={MenuButton}
            backgroundColor="#F4F7F9"
            borderRadius="8px"
            __css={{ span: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }}
            alignItems="center"
            height="40px"
            color="#4E6070"
            px="1em"
            py="12px"
            _focus={{ boxShadow: 'none' }}
            leftIcon={<I.ShareIcon width="16px" />}
            onClick={() => {
              onOpen();
            }}
          >
            Share
          </Common.ImpaktButton>
        )}
      </Menu>
      <GroupSocialModal open={isOpen} close={() => onClose()} />
    </>
  );
};

export default BannerShareButton;
