import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import { Common, I } from 'components';
import { CloseIcon } from '@chakra-ui/icons';
import NoitificationCard from './NotificationCard';

interface NoitificationDrawerProps {
  open: boolean;
  close: () => void;
}

const NoitificationDrawer: React.FC<NoitificationDrawerProps> = ({ open, close }) => {
  return (
    <Drawer isOpen={open} placement="right" onClose={() => close()}>
      <DrawerOverlay />
      <DrawerContent top="80px !important" maxWidth={{ md: '384px', base: '300px' }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={{ md: '24px', base: '16px' }}
          borderBottom="1px solid #EBF4F7"
        >
          <Box display="flex" alignItems="center">
            <I.NotificationIcon color="#728BA3" />
            <DrawerHeader p="0" color="#4E6070" ml="16px">
              Notifications
            </DrawerHeader>
          </Box>
          <DrawerCloseButton position="initial" />
        </Box>
        <Box
          display={{ md: 'flex', base: 'block' }}
          justifyContent="space-between"
          width="100%"
          padding={{ md: '24px 24px 0', base: '16px 16px 0' }}
        >
          <Common.ImpaktButton
            variant="black"
            color="#fff"
            w={{ base: '100%', md: '47%' }}
            h="42px"
            backgroundColor="#29323B"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="600"
          >
            <I.CheckIcon width="16px" height="16px" />
            <Text ml={{ md: '11px', base: '6px' }} fontSize={{ md: '16px', base: '14px' }}>
              Accept All
            </Text>
          </Common.ImpaktButton>
          <Common.ImpaktButton
            mt={{ base: '10px', md: '0' }}
            variant="black"
            color="#29323B"
            w={{ base: '100%', md: '47%' }}
            h="42px"
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px', base: '14px' }}
            fontWeight="600"
          >
            <CloseIcon color="#29323B" width="10px" height="10px" mr="11px" />
            Decline All
          </Common.ImpaktButton>
        </Box>
        <DrawerBody
          pr="6px"
          mr="12px"
          pt="0"
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
          <Box>
            <NoitificationCard name="Dahaka" GroupName="Bodyweight Training" />
            <NoitificationCard name="Alp047" GroupName="Power Training" />
            <NoitificationCard name="Dahaka" GroupName="Good Morning" />
            <NoitificationCard name="Alp047" GroupName="Bodyweight Training" />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NoitificationDrawer;
