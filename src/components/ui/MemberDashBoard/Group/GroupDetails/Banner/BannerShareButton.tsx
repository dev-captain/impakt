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
            borderRadius="8px"
            justifyConten="center"
            alignItems="center"
            p="12px"
            h="56px"
            onClick={() => {
              onOpen();
            }}
          >
            <I.ShareIcon width="32px" />
          </Common.ImpaktButton>
        )}
      </Menu>
      <GroupSocialModal open={isOpen} close={() => onClose()} />
    </>
  );
};

export default BannerShareButton;
