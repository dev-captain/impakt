import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { Common, I } from 'components';
import { useAppSelector } from 'hooks';
import { DeleteIcon } from '@chakra-ui/icons';

import ConfirmationModal from './ConfirmationModal';

const GeneralSettings: React.FC = () => {
  const role = useAppSelector((state) => state.groupsReducer.role);
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
          {role === 'Creator' ? (
            <DeleteIcon width="24px" height="24px" marginRight="20px" />
          ) : (
            <I.LeaveIcon width="24px" height="24px" marginRight="20px" />
          )}
          {role === 'Creator' ? 'Delete Group' : 'Leave Group'}
        </Common.ImpaktButton>
      </Box>
      <ConfirmationModal open={isOpen} close={() => onClose()} />
    </>
  );
};

export default GeneralSettings;
