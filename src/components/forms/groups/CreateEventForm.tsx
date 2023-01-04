import { Box, Text, Select, VStack, HStack, Input } from '@chakra-ui/react';
import { Day } from 'dayspan';
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from '@/hooks';
import { Common, I } from '@/components';

import { useEventCalendarContext } from '../../../context/EventCalendarContext';
import { InputGroupPropsI } from '../../common/InputGroup';
import createEventYupScheme from '../../../lib/yup/schemas/createEventYupSchema';
import { normalizeCalendarDataEvent } from '../../../utils/dayspan';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../lib/zustand';
import { useCalendarEventControllerCreateCalendarEvent } from '../../../lib/impakt-dev-api-client/react-query/calendar/calendar';
import { parseDaytime, renderToast } from '../../../utils';

interface CreateEventFormPropsI {
  challengeId?: number;
}
export const createEventFormName = 'create-challenge-event-form';

const CreateEventForm: React.FC<CreateEventFormPropsI> = (props) => {
  const createEvent = useCalendarEventControllerCreateCalendarEvent();
  const { getSelectedDay, addEvent } = useEventCalendarContext();
  const date = getSelectedDay();

  const { member } = usePersistedAuthStore();
  const { activeGroup } = usePersistedGroupStore();
  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      eventTitle: '',
      eventDescription: '',
      eventStartTime: '',
      eventEndTime: 0,
      challengeId: props.challengeId,
    },
    resolver: yupResolver(createEventYupScheme),
  });

  React.useEffect(() => {
    if (props.challengeId) setValue('challengeId', props.challengeId);
  }, [props]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
    });
  };

  const handleAdd = async (data: Object) => {
    if (!activeGroup || !activeGroup.calendarId) return;

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

    const eventStartOn = new Date(new Date(date.date).getTime() + parseDaytime(eventStartTime));
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
      inputProps: {
        placeholder: 'Add title',
        onChange,
        type: 'text',
        name: 'eventTitle',
        autoFocus: false,
      },
      inputLabelProps: {
        label: 'Event Name',
        isSmallLabel: true,
      },
      errorMsg: errors?.eventTitle?.message,
      whiteMode: true,
    },
  ];

  return (
    <VStack
      id={createEventFormName}
      as="form"
      onSubmit={handleSubmit(handleAdd)}
      autoComplete="off"
      mt="36px"
      rowGap="24px"
    >
      <Common.InputItems inputItems={inputItems} />
      {props.children}
      <HStack justifyContent="space-between" gap="24px" w="full">
        <VStack spacing="0" w="full">
          <Box w="full">
            <Common.InputLabel label="Date" isSmallLabel whiteMode />
          </Box>
          <HStack
            minH="60px"
            p="1em"
            background="a5"
            border="1px solid #D3E2F0"
            borderRadius="12px"
            gap="1em"
            spacing="0"
            w="full"
            display="flex"
            alignItems="center"
          >
            <Box w="24px">
              <I.DateIcon color="#728BA3" width="24px" height="24px" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              {Day.build(date.year, date.month, date.dayOfMonth).format('dddd, MMMM D')}
            </Text>
          </HStack>
        </VStack>
        <HStack w="full" alignItems="center" justifyContent="flex-end" display="flex">
          <HStack w="full" justifyContent="flex-end">
            <VStack spacing="0" align="flex-start">
              <Box w="full">
                <Common.InputLabel label="Time" isSmallLabel whiteMode />
              </Box>
              <Select
                minH="60px"
                isInvalid={!!errors.eventStartTime?.message}
                name="eventStartTime"
                border="1px solid #B0C3D6;"
                borderRadius="12px"
                bg="a5"
                w="150px !important"
                placeholder="Select time"
                onChange={(value) => setValue('eventStartTime', value.currentTarget.value)}
              >
                {timeOptions.map((timeOpt, index) => (
                  <option
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${timeOpt.time}${index}`}
                    value={`${timeOpt.time}${timeOpt.format}`}
                  >
                    {timeOpt.time} {timeOpt.format}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack spacing="0" w="full" align="flex-start">
              <Box w="full">
                <Common.InputLabel label="Duration (min)" isSmallLabel whiteMode />
              </Box>
              <Input
                minH="60px"
                bg="a5"
                isInvalid={!!errors.eventStartTime?.message}
                name="eventEndTime"
                min="0"
                max="9999"
                onChange={(value) => setValue('eventEndTime', Number(value.currentTarget.value))}
                type="number"
              />
            </VStack>
          </HStack>
        </HStack>
      </HStack>
      {/* <Common.ImpaktButton
        variant="black"
        h={{ md: '48px', base: '40px' }}
        borderRadius="8px"
        type="submit"
        fontSize={{ md: '16px' }}
        fontWeight="700"
        isLoading={createEvent.isLoading}
        isDisabled={createEvent.isLoading}
      >
        <I.SendIcon fontSize="10px" />
        <Text marginLeft="10px">Create</Text>
      </Common.ImpaktButton> */}
    </VStack>
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
