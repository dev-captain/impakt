import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { Common, I } from 'components';
import { useAppSelector } from 'hooks';
import { DeleteIcon } from '@chakra-ui/icons';

import { GroupRole } from '../../../../../../../lib/redux/slices/groups/types';
import ConformationModal from './ConformationModal';

const GeneralSettings: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        height={{ base: '550px', md: 'aut0' }}
        overflowY="auto"
        paddingRight="8px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            visibility: 'initial',
            width: '10px',
            background: '#D3E2F0',
            borderRadius: '24px',
          },
        }}
      >
        <Common.ImpaktButton
          mt={{ md: 0, base: '10px' }}
          variant="primary"
          color="#F84153"
          w={{ md: '222px', base: '100%' }}
          ml={{ md: '16px', base: '0' }}
          h="60px"
          bg="#FEE1E3"
          _hover={{ bg: '#C41F30', color: '#fff' }}
          _active={{ bg: '#910917', color: '#fff' }}
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '20px' }}
          onClick={() => onOpen()}
          fontWeight="600"
        >
          {activeGroup?.role === GroupRole.Creator ? (
            <DeleteIcon width="24px" height="24px" marginRight="20px" />
          ) : (
            <I.LeaveIcon width="24px" height="24px" marginRight="20px" />
          )}
          {activeGroup?.role === GroupRole.Creator ? 'Delete Group' : 'Leave Group'}
        </Common.ImpaktButton>
      </Box>
      <ConformationModal open={isOpen} close={() => onClose()} />
    </>
  );
};

export default GeneralSettings;
