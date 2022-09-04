import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronLeftIcon, AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import moment from 'moment';
import TimePicker from 'react-time-picker';
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
  const [time] = useState(moment().format('HH:mm'));
  const [name, setName] = useState();
  const [error, setError] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const showCalendar = () => {
    const d: any = '';
    setSelectedMonth(selectedMonth);
    setSelectedDay(selectedDay);
    onClose();
    setName(d);
    setError('');
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

    const weeks = [];
    let done = false;
    const previousCurrentNextView = currentMonthView
      .clone()
      .startOf('month')
      .subtract(1, 'd')
      .day('Monday');
    let count: number = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={(day: any) => select(day)}
        />,
      );
      previousCurrentNextView.add(1, 'w');
      // eslint-disable-next-line no-plusplus
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }

    return weeks;
  };

  const handleAdd = () => {
    const monthEvents = selectedMonthEvents;
    const currentSelectedDate = selectedDay;

    if (!name) {
      setError('please enter event name');
    } else {
      const newEvents = [];
      const newEvent = {
        title: name,
        date: currentSelectedDate,
        dynamic: false,
      };

      newEvents.push(newEvent);

      // eslint-disable-next-line no-plusplus
      for (let i: number = 0; i < newEvents.length; i++) {
        (monthEvents as any).push(newEvents[i]);
      }

      setSelectedMonthEvents(monthEvents);
      showCalendar();
    }
  };

  const goToCurrentMonthView = () => {
    setSelectedDay(moment().startOf('day'));
  };

  const goToTomorrow = () => {
    setSelectedDay(moment().startOf('day').add(1, 'day'));
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const refresh = () => {
    const d: any = '';
    onClose();
    setName(d);
    setError('');
  };

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
            font-weight=" 600"
            border=" none"
            outline=" none"
            border-radius=" 5px"
            font-size=" 15px"
            onClick={() => goToCurrentMonthView()}
          >
            Today
          </Button>
          <Button
            background-color=" rgb(243, 243, 243)"
            color=" rgb(62, 62, 62)"
            padding=" 6px 9px"
            font-weight=" 600"
            border=" none"
            outline=" none"
            border-radius=" 5px"
            font-size=" 15px"
            onClick={() => goToTomorrow()}
          >
            Tomorrow
          </Button>
          <Button
            color=" rgb(62, 62, 62)"
            padding=" 6px 9px"
            font-weight=" 600"
            border=" none"
            outline=" none"
            border-radius=" 5px"
            font-size=" 15px"
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
          Add reminder
        </Button>
      </Box>
      <Box
        display=" flex"
        align-items=" center"
        justifyContent=" space-between"
        width=" 100%"
        backgroundColor=" #ffffff"
        padding=" 10px 20px 20px 20px"
      >
        <Button
          backgroundColor="#f2f4f5"
          color="grey"
          width="49%"
          padding=" 15px"
          font-size=" 16px"
          border-radius=" 8px"
          font-weight=" 600"
          cursor=" pointer"
        >
          Remove
        </Button>
        <Button
          backgroundColor="#0090fc"
          color="white"
          width="49%"
          padding=" 15px"
          font-size=" 16px"
          border-radius=" 8px"
          font-weight=" 600"
          cursor=" pointer"
        >
          Done
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
            <FormControl>
              <FormLabel>Event name</FormLabel>
              <Input placeholder="Event name" value={name} onChange={(e: any) => handleChange(e)} />
              <Text color="red" fontSize="14px">
                {error}
              </Text>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Data and Time</FormLabel>
              <TimePicker
                value={time}
                onChange={(e: any) =>
                  setSelectedDay(moment(selectedDay).startOf('day').add(e, 'h'))
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleAdd()}>
              Save
            </Button>
            <Button onClick={() => refresh()}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventCalendar;
