import { FormControl, Box, Text, Select, VStack, HStack, Input } from '@chakra-ui/react';
import { Day, Time } from 'dayspan';
import * as React from 'react';
import { useForm } from 'hooks';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';

import { useEventCalendarContext } from '../../../context/EventCalendarContext';
import { InputGroupPropsI } from '../../common/InputGroup';
import createEventYupScheme from '../../../lib/yup/schemas/createEventYupSchema';
import { normalizeCalendarDataEvent } from '../../../utils/dayspan';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../lib/zustand';
import { useCalendarEventControllerCreateCalendarEvent } from '../../../lib/impakt-dev-api-client/react-query/calendar/calendar';
import { renderToast, truncateString } from '../../../utils';

interface CreateEventFormPropsI {
  challengeId?: number;
  challengeName?: string;
  clearAssoc: () => void;
  onOpen: () => void;
}

const CreateEventForm: React.FC<CreateEventFormPropsI> = (props) => {
  const createEvent = useCalendarEventControllerCreateCalendarEvent();
  const { getSelectedDay, addEvent } = useEventCalendarContext();
  const date = getSelectedDay();

  const { member } = usePersistedAuthStore();
  const { activeGroup } = usePersistedGroupStore();
  const { handleSubmit, errors, setValue, getValues } = useForm({
    defaultValues: {
      eventTitle: '',
      eventDescription: '',
      eventStartTime: '',
      eventEndTime: 0,
      challengeId: props.challengeId,
      challengeName: props.challengeName,
    },
    resolver: yupResolver(createEventYupScheme),
  });

  React.useEffect(() => {
    if (props.challengeId) setValue('challengeId', props.challengeId);
    if (props.challengeName) setValue('challengeName', props.challengeName);

    return () => {
      props.clearAssoc();
    };
  }, [props]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
    });
  };

  const handleAdd = async (data: Object) => {
    if (!activeGroup) return;

    const { eventTitle, eventDescription, eventStartTime, eventEndTime, challengeId } = data as {
      eventTitle: string;
      eventDescription: string;
      eventStartTime: string;
      eventEndTime: number;
      challengeId: number;
    };

    const eventData = {
      title: eventTitle,
      description: eventDescription,
      creatorId: member!.id,
      challengeId,
    };
    const timeFromString = Time.fromString(eventStartTime);
    const eventStartOn = new Date(
      new Date(date.date).setHours(timeFromString.hour, timeFromString.minute),
    );
    const addDate = Day.fromDate(eventStartOn)
      ?.add('minute', eventEndTime < 0 ? 0 : eventEndTime)
      .toDate();
    const eventEndOn = new Date(addDate!);

    createEvent.mutate(
      {
        calendarId: activeGroup.calendarId,
        data: {
          data: { ...eventData, challengeId, groupId: activeGroup.id },
          schedule: { start: eventStartOn.toISOString(), end: eventEndOn.toISOString() },
        },
      },
      {
        onSuccess: (event) => {
          const normalizedData1 = normalizeCalendarDataEvent(event);
          addEvent(normalizedData1);
          props.clearAssoc();
          renderToast('success', 'Event created successfully.', 'white');
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong', 'white');
        },
      },
    );
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
      <Box display="flex" flexDir="column">
        <Box w="full" alignItems="center" display="flex">
          <Box w="34px">
            <I.ClockIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          {/* <Input
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
          /> */}
          <HStack w="full">
            <VStack align="flex-start">
              <Text ml="5px" fontWeight="500" fontSize="14px" lineHeight="100%" color="#4E6070">
                Time:
              </Text>
              <Select
                isInvalid={!!errors.eventStartTime?.message}
                name="eventStartTime"
                border="1px solid #B0C3D6;"
                borderRadius="12px"
                bg="#FFFFFF"
                w="150px !important"
                placeholder="Select time"
                onChange={(value) => setValue('eventStartTime', value.currentTarget.value)}
              >
                {timeOptions.map((timeOpt, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={`${timeOpt.time}${index}`} value={timeOpt.time}>
                    {timeOpt.time} {timeOpt.format}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack align="flex-start">
              <Text fontWeight="500" fontSize="14px" lineHeight="100%" color="#4E6070">
                Duration (min):
              </Text>
              <Input
                isInvalid={!!errors.eventStartTime?.message}
                name="eventEndTime"
                min="0"
                max="9999"
                onChange={(value) => setValue('eventEndTime', Number(value.currentTarget.value))}
                type="number"
              />
            </VStack>
          </HStack>
        </Box>
        <Box>
          <Common.InputErrorMessage
            errorMsg={errors?.eventStartTime?.message || errors?.eventEndTime?.message}
          />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" alignItems="flex-start" mb="12px" w="100%">
        <Box display="flex">
          <Box w="34px">
            <I.ChallengeIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text
            color="#4E6070"
            fontSize="16px"
            fontWeight="500"
            cursor="pointer"
            onClick={() => props.onOpen()}
          >
            {getValues('challengeName') && getValues('challengeName')!.length > 0
              ? truncateString(getValues('challengeName')!, 23)
              : 'Select challenge'}{' '}
          </Text>
        </Box>

        <Box>
          <Common.InputErrorMessage errorMsg={errors?.challengeId?.message} />
        </Box>
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
        isLoading={createEvent.isLoading}
        isDisabled={createEvent.isLoading}
      >
        <I.SendIcon fontSize="10px" />
        <Text marginLeft="10px">Create</Text>
      </Common.ImpaktButton>
    </FormControl>
  );
};
const timeOptions: { time: string; format: 'am' | 'pm' }[] = [
  { time: '1:00', format: 'am' },
  { time: '1:15', format: 'am' },
  { time: '1:30', format: 'am' },
  { time: '1:45', format: 'am' },
  { time: '2:00', format: 'am' },
  { time: '2:15', format: 'am' },
  { time: '2:30', format: 'am' },
  { time: '2:45', format: 'am' },
  { time: '3:00', format: 'am' },
  { time: '3:15', format: 'am' },
  { time: '3:30', format: 'am' },
  { time: '3:45', format: 'am' },
  { time: '4:00', format: 'am' },
  { time: '4:15', format: 'am' },
  { time: '4:30', format: 'am' },
  { time: '4:45', format: 'am' },
  { time: '5:00', format: 'am' },
  { time: '5:15', format: 'am' },
  { time: '5:30', format: 'am' },
  { time: '5:45', format: 'am' },
  { time: '6:00', format: 'am' },
  { time: '6:15', format: 'am' },
  { time: '6:30', format: 'am' },
  { time: '6:45', format: 'am' },
  { time: '7:00', format: 'am' },
  { time: '7:15', format: 'am' },
  { time: '7:30', format: 'am' },
  { time: '7:45', format: 'am' },
  { time: '8:00', format: 'am' },
  { time: '8:15', format: 'am' },
  { time: '8:30', format: 'am' },
  { time: '8:45', format: 'am' },
  { time: '9:00', format: 'am' },
  { time: '9:15', format: 'am' },
  { time: '9:30', format: 'am' },
  { time: '9:45', format: 'am' },
  { time: '10:00', format: 'am' },
  { time: '10:15', format: 'am' },
  { time: '10:30', format: 'am' },
  { time: '10:45', format: 'am' },
  { time: '11:00', format: 'am' },
  { time: '11:15', format: 'am' },
  { time: '11:30', format: 'am' },
  { time: '11:45', format: 'am' },
  { time: '12:00', format: 'pm' },
  { time: '12:15', format: 'am' },
  { time: '12:30', format: 'am' },
  { time: '12:45', format: 'am' },
  { time: '1:00', format: 'pm' },
  { time: '1:15', format: 'pm' },
  { time: '1:30', format: 'pm' },
  { time: '1:45', format: 'pm' },
  { time: '2:00', format: 'pm' },
  { time: '2:15', format: 'pm' },
  { time: '2:30', format: 'pm' },
  { time: '2:45', format: 'pm' },
  { time: '3:00', format: 'pm' },
  { time: '3:15', format: 'pm' },
  { time: '3:30', format: 'pm' },
  { time: '3:45', format: 'pm' },
  { time: '4:00', format: 'pm' },
  { time: '4:15', format: 'pm' },
  { time: '4:30', format: 'pm' },
  { time: '4:45', format: 'pm' },
  { time: '5:00', format: 'pm' },
  { time: '5:15', format: 'pm' },
  { time: '5:30', format: 'pm' },
  { time: '5:45', format: 'pm' },
  { time: '6:00', format: 'pm' },
  { time: '6:15', format: 'pm' },
  { time: '6:30', format: 'pm' },
  { time: '6:45', format: 'pm' },
  { time: '7:00', format: 'pm' },
  { time: '7:15', format: 'pm' },
  { time: '7:30', format: 'pm' },
  { time: '7:45', format: 'pm' },
  { time: '8:00', format: 'pm' },
  { time: '8:15', format: 'pm' },
  { time: '8:30', format: 'pm' },
  { time: '8:45', format: 'pm' },
  { time: '9:00', format: 'pm' },
  { time: '9:15', format: 'pm' },
  { time: '9:30', format: 'pm' },
  { time: '9:45', format: 'pm' },
  { time: '10:00', format: 'pm' },
  { time: '10:15', format: 'pm' },
  { time: '10:30', format: 'pm' },
  { time: '10:45', format: 'pm' },
  { time: '11:00', format: 'pm' },
  { time: '11:15', format: 'pm' },
  { time: '11:30', format: 'pm' },
  { time: '11:45', format: 'pm' },
  { time: '12:00', format: 'am' },
  { time: '12:15', format: 'am' },
  { time: '12:30', format: 'am' },
  { time: '12:45', format: 'am' },
];
export default CreateEventForm;
