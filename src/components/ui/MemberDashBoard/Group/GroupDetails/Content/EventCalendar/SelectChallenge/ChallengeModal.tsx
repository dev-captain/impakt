import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  // useDisclosure,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { I } from 'components';
import React from 'react';
import { ChallengeTab } from 'data';
import { UseFormSetValue } from 'react-hook-form';
import MyRoutines from './MyRoutinesTab/MyRoutines';
import ChallengeDetails from './ImpaktTab/ChallengeDetails';

interface ChallengeModalProps {
  open: boolean;
  close: () => void;
  setValue: UseFormSetValue<{
    eventTitle: string;
    eventDescription: string;
    eventStartTime: string;
    eventEndTime: string;
    assocId: number;
  }>;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ open, close, setValue }) => {
  return (
    <Modal isOpen={open} onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '720px' }}
        mt="140px"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text w="100%" fontSize={{ base: '20px', md: '32px' }} color="#29323B" fontWeight="700">
            Select Challenge
          </Text>
          <Box position="relative" w="100%" display={{ base: 'none', md: 'block' }}>
            <Input
              placeholder="Search"
              background="#EEF4F6"
              border="0"
              _focus={{ border: '0' }}
              borderRadius="12px"
              // w="306px"
              mr="24px"
              ml="34px"
              pl="48px"
              w="86%"
            />
            <I.SearchIcon position="absolute" top="5px" left="48px" width="24px" color="#29323B" />
          </Box>
          <ModalCloseButton
            color="#728BA3"
            position="initial"
            fontSize="18px"
            _focus={{ boxShadow: 'none' }}
          />
        </Box>
        <Box position="relative" w="100%" display={{ base: 'block', md: 'none' }}>
          <Input
            mt="20px"
            placeholder="Search"
            background="#EEF4F6"
            border="0"
            _focus={{ border: '0' }}
            borderRadius="12px"
            mr="24px"
            pl="48px"
            w="100%"
          />
          <I.SearchIcon position="absolute" top="25px" left="18px" width="24px" color="#29323B" />
        </Box>
        <ModalBody p="0">
          <Tabs mt="30px">
            <TabList border="0" flexWrap="wrap">
              {ChallengeTab.map((tab, index) => (
                <Tab
                  id={`tab-${index}`}
                  _focus={{ boxShadow: 'none' }}
                  _active={{ background: 'transparent', color: '#29323B' }}
                  color="#728BA3"
                  _selected={{ color: '#29323B', borderColor: '#29323B' }}
                  fontWeight="500"
                  p="8px 0"
                  marginRight="24px"
                  fontSize={{ base: '14px', md: '16px' }}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel p="0" mt="24px">
                <MyRoutines onClose={() => close()} setValue={setValue} />
              </TabPanel>
              <TabPanel p="0" mt="24px">
                <ChallengeDetails
                  time="19 min"
                  timmer={{ h: '08', m: '32', s: '44' }}
                  name="Impakt"
                  play="256"
                  like="72"
                />
              </TabPanel>
              <TabPanel>
                <p>My Challenges</p>
              </TabPanel>
              <TabPanel>
                <p>ICONs</p>
              </TabPanel>
              <TabPanel>
                <p>Community</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChallengeModal;
