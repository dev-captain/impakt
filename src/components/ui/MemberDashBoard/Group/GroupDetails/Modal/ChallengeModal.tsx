import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Link,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Common, I } from 'components';
import React from 'react';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';

import { ChallengeTab } from '../../../../../../data';
import { usePersistedChallengeStore } from '../../../../../../lib/zustand';
import ChallengesCard from './ChallengeModalTabs/ChallengesCard';

interface ChallengeModalProps {
  open: boolean;
  close: () => void;
  setAssocId: (assocId: number) => void;
  setAssocName: (assocName: string) => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({
  open,
  setAssocId,
  setAssocName,
  close,
}) => {
  const { availableGroupChallenges } = usePersistedChallengeStore();
  const { t } = useTranslation().i18n;

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
            {/* <Input
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
            <I.SearchIcon position="absolute" top="5px" left="48px" width="24px" color="#29323B" /> */}
          </Box>
          <ModalCloseButton
            onClick={close}
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
                  // eslint-disable-next-line react/no-array-index-key
                  key={`tab-${index}`}
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
                <Box
                  height="530px"
                  overflow="auto"
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
                  {availableGroupChallenges.length === 0 ? (
                    <Text color="gray.500">
                      Sorry, You have to create your challenges{' '}
                      <Link as={ReactLink} to="/download">
                        <Text as="u">in-game</Text>
                      </Link>{' '}
                      first. The creation of the challenges will be available here soon...
                    </Text>
                  ) : (
                    availableGroupChallenges.map((challengeI) => (
                      <ChallengesCard key={challengeI.challenge.id} data={challengeI}>
                        <Common.ImpaktButton
                          onClick={() => {
                            // setActiveGroupChallenge(challenge);
                            setAssocName(challengeI.challenge.name);
                            setAssocId(challengeI.challenge.id);
                            close();
                          }}
                          variant="black"
                          w="114px !important"
                          colorScheme="#fff"
                          h="38px"
                          backgroundColor="#29323B"
                          borderRadius="8px"
                          type="submit"
                          fontSize={{ base: '14px', md: '16px' }}
                          fontWeight="700"
                        >
                          <Text>Select</Text>
                        </Common.ImpaktButton>
                      </ChallengesCard>
                    ))
                  )}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChallengeModal;
