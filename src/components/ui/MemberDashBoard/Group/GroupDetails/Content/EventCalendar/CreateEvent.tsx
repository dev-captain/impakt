import React from 'react';
import {
  Box,
  Text,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Day, EventInput } from 'dayspan';
import { useForm } from 'hooks';
import { ChallengeTab } from 'data';
import { InputGroupPropsI } from 'components/common/InputGroup';
import { I, Common } from 'components';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import MyRoutines from './SelectChallenge/MyRoutinesTab/MyRoutines';
import ChallengeDetails from './SelectChallenge/ImpaktTab/ChallengeDetails';

const CreateEvent: React.FC = () => {
  const { goBackToOverViewScreen, addEvents, getSelectedDay, goToOverViewScreen, setSelectedDay } =
    useEventCalendarContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = getSelectedDay();
  const event: any[] = [];

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { eventTitle: '', eventDescription: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const handleAdd = async (data: Object) => {
    const { eventTitle, eventDescription } = data as {
      eventTitle: string;
      eventDescription: string;
    };

    const eventData = JSON.stringify({
      title: eventTitle,
      description: eventDescription,
      link: 'impakt.com/e/ehF47bca',
      memberCount: 99,
      chellanges: 'select Chellage',
    });

    const newEvent: EventInput<string, any> = {
      id: 10,
      data: eventData,
      schedule: {
        on: Day.build(date.year, date.month, date.dayOfMonth),
        times: [Day.build(date.year, date.month, date.dayOfMonth, 9)],
        duration: 1,
        durationUnit: 'hours',
      },
    };

    event.push(newEvent);
    addEvents(event);
    setSelectedDay(date);
    goToOverViewScreen('first');
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Add title',
      onChange,
      type: 'text',
      name: 'eventTitle',
      errorMsg: errors?.eventTitle?.message,
      autoFocus: false,
      whiteMode: true,
      leftIcon: <I.TextIcon width="20px" height="20px" />,
    },
    {
      placeholder: 'Add description',
      onChange,
      type: 'text',
      name: 'eventDescription',
      errorMsg: errors?.eventDescription?.message,
      autoFocus: false,
      whiteMode: true,
      leftIcon: <I.MenuIcon width="20px" height="20px" />,
    },
  ];

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="left" alignItems="center" mb="16px">
          <ChevronLeftIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => goBackToOverViewScreen()}
            marginRight="5px"
          />
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            Create event
          </Text>
        </Box>
        <FormControl
          display="flex"
          justifyContent="center"
          flexDir="column"
          m="0 !important"
          rowGap="24px"
          as="form"
          onSubmit={handleSubmit(handleAdd)}
          autoComplete="off"
          w="full"
        >
          <Common.InputItems inputItems={inputItems} />
          <Box display="flex" alignItems="center">
            <Box w="34px">
              <I.DateIcon color="#728BA3" width="16px" height="16px" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              {Day.build(date.year, date.month, date.dayOfMonth).format('dddd, MMMM D')}
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="34px">
              <I.ClockIcon width="20px" height="20px" color="#728BA3" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              10:00pm - 10:30pm
            </Text>
          </Box>
          <Box display="flex" alignItems="center" mb="12px" w="100%">
            <Box w="34px">
              <I.ChallengeIcon width="20px" height="20px" color="#728BA3" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500" onClick={() => onOpen()}>
              Select challenge
            </Text>
          </Box>
          <Common.ImpaktButton
            variant="black"
            colorScheme="#fff"
            h={{ md: '48px', base: '40px' }}
            backgroundColor="#29323B"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="700"
          >
            <I.SendIcon fontSize="10px" />
            <Text marginLeft="10px">Create</Text>
          </Common.ImpaktButton>
        </FormControl>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
              <I.SearchIcon
                position="absolute"
                top="5px"
                left="48px"
                width="24px"
                color="#29323B"
              />
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
                {ChallengeTab.map((tab) => (
                  <Tab
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
                  <MyRoutines />
                </TabPanel>
                <TabPanel>
                  <p>My Challenges</p>
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
    </>
  );
};

export default CreateEvent;
