import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { useForm } from 'hooks';
import { ChevronLeftIcon, AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Common } from 'components';
import { InputGroupPropsI } from 'components/common/InputGroup';
import moment from 'moment';
import Week from './Week';
import Events from './Events';
import DayNames from './DayNames';

const initialiseEvents = () => {
  const allEvents = [];

  const event1 = {
    title:
      'Press the Add button and enter a name for your event. P.S you can delete me by pressing me!',
    date: moment(),
    dynamic: false,
  };

  const event2 = {
    title: 'Event 2 - Meeting',
    date: moment().startOf('day').subtract(2, 'd').add(2, 'h'),
    dynamic: false,
  };

  const event3 = {
    title: 'Event 3 - Cinema',
    date: moment().startOf('day').subtract(7, 'd').add(18, 'h'),
    dynamic: false,
  };

  const event4 = {
    title: 'Event 4 - Theater',
    date: moment().startOf('day').subtract(16, 'd').add(20, 'h'),
    dynamic: false,
  };

  const event5 = {
    title: 'Event 5 - Drinks',
    date: moment().startOf('day').subtract(2, 'd').add(12, 'h'),
    dynamic: false,
  };

  const event6 = {
    title: 'Event 6 - Diving',
    date: moment().startOf('day').subtract(2, 'd').add(13, 'h'),
    dynamic: false,
  };

  const event7 = {
    title: 'Event 7 - Tennis',
    date: moment().startOf('day').subtract(2, 'd').add(14, 'h'),
    dynamic: false,
  };

  const event8 = {
    title: 'Event 8 - Swimmming',
    date: moment().startOf('day').subtract(2, 'd').add(17, 'h'),
    dynamic: false,
  };

  const event9 = {
    title: 'Event 9 - Chilling',
    date: moment().startOf('day').subtract(2, 'd').add(16, 'h'),
    dynamic: false,
  };

  const event10 = {
    title: 'Hello World',
    date: moment().startOf('day').add(5, 'h'),
    dynamic: false,
  };

  const event11 = {
    title: 'Tomorrow Event',
    date: moment().startOf('day').add(1, 'day'),
    dynamic: false,
  };

  allEvents.push(event1);
  allEvents.push(event2);
  allEvents.push(event3);
  allEvents.push(event4);
  allEvents.push(event5);
  allEvents.push(event6);
  allEvents.push(event7);
  allEvents.push(event8);
  allEvents.push(event9);
  allEvents.push(event10);
  allEvents.push(event11);

  return allEvents;
};

const EventCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(moment().startOf('day'));
  const [selectedMonthEvents, setSelectedMonthEvents] = useState(initialiseEvents());
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { friendlyName: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const showCalendar = () => {
    setSelectedMonth(selectedMonth);
    setSelectedDay(selectedDay);
    onClose();
  };

  const renderMonthLabel = () => {
    const currentMonthView = selectedMonth;

    return (
      <Text fontSize="16px" fontWeight="500" color="rgb(38, 38, 38)">
        {currentMonthView.format('MMMM YYYY')}
      </Text>
    );
  };

  const next = () => {
    setSelectedMonth(moment(selectedMonth).add(1, 'month'));
  };

  const previous = () => {
    setSelectedMonth(moment(selectedMonth).subtract(1, 'month'));
  };

  const select = (day: any) => {
    setSelectedMonth(day.date);
    setSelectedDay(moment(day.date).clone());
  };

  const renderWeeks = () => {
    const currentMonthView = selectedMonth;
    const currentSelectedDay = selectedDay;
    const monthEvents = selectedMonthEvents;
    const num = ['', '', '', '', ''];

    const weeks: any = [];
    const previousCurrentNextView = currentMonthView
      .clone()
      .startOf('month')
      .subtract(1, 'd')
      .day('Monday');
    let monthIndex = previousCurrentNextView.month();
    console.log('monthIndex :', monthIndex);

    num.forEach(() => {
      weeks.push(
        <Week
          // key={count}
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={(day: any) => select(day)}
        />,
      );
      previousCurrentNextView.add(1, 'w');
      monthIndex = previousCurrentNextView.month();
    });

    return weeks;
  };

  const handleAdd = async (data: any) => {
    const { friendlyName } = data as { friendlyName: string };
    const monthEvents = selectedMonthEvents;
    const currentSelectedDate = selectedDay;
    const newEvents = [];
    const newEvent = {
      title: friendlyName,
      date: currentSelectedDate,
      dynamic: false,
    };

    newEvents.push(newEvent);

    newEvents.forEach((d: any) => {
      (monthEvents as any).push(d);
    });

    setSelectedMonthEvents(monthEvents);
    showCalendar();
  };

  const goToCurrentMonthView = () => {
    setSelectedDay(moment().startOf('day'));
  };

  const goToTomorrow = () => {
    setSelectedDay(moment().startOf('day').add(1, 'day'));
  };

  const refresh = () => {
    onClose();
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Group by Demidues',
      onChange,
      type: 'text',
      name: 'friendlyName',
      label: 'Group name',
      errorMsg: errors?.friendlyName?.message,
      autoFocus: true,
      whiteMode: true,
    },
  ];

  return (
    <Box
      height="100%"
      width={{ base: '100%', md: '428px' }}
      display="flex"
      flexWrap="wrap"
      transform="translateY(20px)"
      borderRadius="10px"
      marginTop="10px"
    >
      <Box width="100%" height="30%" color="white" display="flex" flexWrap="wrap">
        <Box
          backgroundColor="white"
          borderRadius="10px 10px 0 0"
          width="100%"
          display="flex"
          gap="5px"
          padding="20px 20px"
        >
          <Button
            background-color=" rgb(243, 243, 243)"
            color=" rgb(62, 62, 62)"
            padding=" 6px 9px"
            fontWeight=" 600"
            border=" none"
            outline=" none"
            border-radius=" 5px"
            fontSize=" 15px"
            onClick={() => goToCurrentMonthView()}
          >
            Today
          </Button>
          <Button
            background-color=" rgb(243, 243, 243)"
            color=" rgb(62, 62, 62)"
            padding=" 6px 9px"
            fontWeight=" 600"
            border=" none"
            outline=" none"
            border-radius=" 5px"
            fontSize=" 15px"
            onClick={() => goToTomorrow()}
          >
            Tomorrow
          </Button>
          <Button
            color=" rgb(62, 62, 62)"
            padding=" 6px 9px"
            fontWeight=" 600"
            border=" none"
            outline=" none"
            border-radius=" 5px"
            fontSize=" 15px"
            background-color=" rgb(243, 243, 243)"
          >
            In 2 Days
          </Button>
        </Box>
        <Box
          padding="10px 20px"
          height="70%"
          width="100%"
          whiteSpace="nowrap"
          fontSize="1.2em"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor="white"
          color="#616161"
        >
          <ChevronLeftIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            boxShadow=" 0px 0px 12px -3px rgb(0 ,0 ,0 ,35%)"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={previous}
          />
          <Box>{renderMonthLabel()}</Box>
          <ChevronRightIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            boxShadow=" 0px 0px 12px -3px rgb(0 ,0 ,0 ,35%)"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={next}
          />
        </Box>
        <DayNames />
      </Box>
      <Box width=" 100%;" height=" 70%;" background=" #ffffff;">
        {renderWeeks()}
      </Box>
      <Box backgroundColor=" #ffffff" width=" 100%" padding=" 20px 20px">
        <Button
          background="white"
          _hover={{ backgroundColor: 'white' }}
          padding="0"
          fontSize="15px"
          color="rgb(102, 102, 102)"
          onClick={() => onOpen()}
        >
          <AddIcon marginRight=" 25px" fontSize="16px" />
          Add event
        </Button>
      </Box>
      <Box
        backgroundColor=" #ffffff"
        width=" 100%"
        padding=" 20px 20px"
        borderRadius=" 0 0 10px 10px"
      >
        <Events selectedDay={selectedDay} selectedMonthEvents={selectedMonthEvents} />
      </Box>
      <Modal isOpen={isOpen} onClose={() => refresh()} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text display="flex" justifyContent="center" marginBottom="5px" fontWeight="600">
              {moment(selectedDay).format('DD MMMM YYYY')}
            </Text>
            <FormControl
              display="flex"
              alignItems="center"
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
              <Input
                placeholder="date and time"
                border="0"
                _focus={{ border: '0' }}
                background="#eef4f6"
                height="60px"
                borderRadius="12px"
                paddingLeft="32px"
                fontSize="16px"
                // color="#a0aec0"
                fontWeight="500"
              />
              <Flex justifyContent="space-between" w="full">
                <Common.ImpaktButton
                  variant="transparent"
                  _hover={{ backgroundColor: '#000', color: '#fff' }}
                  _active={{ backgroundColor: 'transparent' }}
                  _focus={{ boxShadow: 'none' }}
                  border="2px solid #29323B"
                  borderRadius="16px"
                  color="#29323B"
                  w={{ md: '120px', base: '100px' }}
                  h={{ md: '54px', base: '44px' }}
                  fontSize={{ md: '16px' }}
                  fontWeight="700"
                  mr={3}
                  justifyContent="space-evenly"
                  onClick={() => refresh()}
                >
                  Cancel
                </Common.ImpaktButton>
                <Common.ImpaktButton
                  variant="black"
                  colorScheme="#fff"
                  w={{ md: '120px', base: '100px' }}
                  h={{ md: '54px', base: '44px' }}
                  backgroundColor="#3182ce"
                  borderRadius="16px"
                  type="submit"
                  fontSize={{ md: '16px' }}
                  fontWeight="700"
                  onSubmit={() => handleSubmit(handleAdd)}
                >
                  Add
                </Common.ImpaktButton>
              </Flex>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventCalendar;
