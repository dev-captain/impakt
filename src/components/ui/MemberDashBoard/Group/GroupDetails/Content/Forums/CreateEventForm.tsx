import { FormControl, Box, Input, Text, useDisclosure } from '@chakra-ui/react';
import { Day, Time } from 'dayspan';
import * as React from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { Common, I } from 'components';
import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';
import { InputGroupPropsI } from '../../../../../../common/InputGroup';
import ChallengeModal from '../EventCalendar/SelectChallenge/ChallengeModal';
import { createEvent } from '../../../../../../../lib/redux/slices/events/actions/createEvent';
import { normalizeCalendarData } from '../../../../../../../utils';

const CreateEventForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getSelectedDay, addEvent } = useEventCalendarContext();
  const date = getSelectedDay();

  const member = useAppSelector((state) => state.memberAuth.member);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const dispatch = useAppDispatch();
  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { eventTitle: '', eventDescription: '', eventStartTime: 0, eventEndTime: 0 },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const handleAdd = async (data: Object) => {
    if (!activeGroup) return;

    const { eventTitle, eventDescription, eventStartTime, eventEndTime } = data as {
      eventTitle: string;
      eventDescription: string;
      eventStartTime: string;
      eventEndTime: string;
    };

    const eventData = {
      title: eventTitle,
      description: eventDescription,
      creatorId: member?.id,
      assocId: 1,
    };

    const parsedStartTimeTime = Time.fromString(eventStartTime);
    const parsedEndTime = Time.fromString(eventEndTime);

    const schedule = {
      start: new Date(
        new Date(date.date).setHours(parsedStartTimeTime.hour, parsedStartTimeTime.minute),
      ).toISOString(),
      end: new Date(
        new Date(date.date).setHours(parsedEndTime.hour, parsedEndTime.minute),
      ).toISOString(),
    };

    const bEpayload = { data: eventData, schedule };

    try {
      const data1 = await dispatch(
        createEvent({ calendarId: activeGroup?.calendarId, payload: bEpayload }),
      ).unwrap();
      const normalizedData1 = normalizeCalendarData(data1);
      addEvent(normalizedData1);
    } catch (e) {
      console.error(e);
    }

    // const newEvent: EventInput<string, any> = {
    //   id: 10,
    //   data: eventData,
    //   schedule: {
    //     on: Day.build(date.year, date.month, date.dayOfMonth),
    //     times: [Day.build(date.year, date.month, date.dayOfMonth, 9)],
    //     duration: 1,
    //     durationUnit: 'hours',
    //   },
    // };

    // setSelectedDay(date);
    // goToOverViewScreen('first');
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
        <Box display="flex" w="60%" alignItems="center">
          <Box w="34px">
            <I.ClockIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Input
            name="eventStartTime"
            onChange={onChange}
            pr="0"
            border="0"
            _focus={{ border: 0 }}
            size="md"
            sx={{
              '&::-webkit-calendar-picker-indicator': { background: 'none', display: 'none' },
            }}
            type="time"
          />
          -
          <Input
            name="eventEndTime"
            onChange={onChange}
            border="0"
            _focus={{ border: 0 }}
            size="md"
            sx={{
              '&::-webkit-calendar-picker-indicator': { background: 'none', display: 'none' },
            }}
            type="time"
          />
        </Box>
        <Box display="flex" alignItems="center" mb="12px" w="100%">
          <Box w="34px">
            <I.ChallengeIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text
            color="#4E6070"
            fontSize="16px"
            fontWeight="500"
            cursor="pointer"
            onClick={() => onOpen()}
          >
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

      <ChallengeModal open={isOpen} close={() => onClose()} />
    </>
  );
};
export default CreateEventForm;
