import { FormControl, Box, Input, Text } from '@chakra-ui/react';
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
  assocId: number;
  assocName: string;
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
      eventEndTime: '',
      assocId: props.assocId,
      assocName: props.assocName,
    },
    resolver: yupResolver(createEventYupScheme),
  });
  React.useEffect(() => {
    if (props.assocId) setValue('assocId', props.assocId);
    if (props.assocName) setValue('assocName', props.assocName);

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

    const { eventTitle, eventDescription, eventStartTime, eventEndTime, assocId } = data as {
      eventTitle: string;
      eventDescription: string;
      eventStartTime: string;
      eventEndTime: string;
      assocId: number;
    };

    const eventData = {
      title: eventTitle,
      description: eventDescription,
      creatorId: member!.id,
      assocId,
    };

    const parsedStartTime = Time.fromString(eventStartTime);
    const parsedEndTime = Time.fromString(eventEndTime);
    const isStartTimeLessThanEndTime =
      parsedStartTime.toMilliseconds() < parsedEndTime.toMilliseconds();

    const schedule = {
      start: isStartTimeLessThanEndTime
        ? new Date(
            new Date(date.date).setHours(parsedStartTime.hour, parsedStartTime.minute),
          ).toISOString()
        : new Date(
            new Date(date.date).setHours(parsedEndTime.hour, parsedEndTime.minute),
          ).toISOString(),
      end: isStartTimeLessThanEndTime
        ? new Date(
            new Date(date.date).setHours(parsedEndTime.hour, parsedEndTime.minute),
          ).toISOString()
        : new Date(
            new Date(date.date).setHours(parsedStartTime.hour, parsedStartTime.minute),
          ).toISOString(),
    };
    const bEpayload = { data: eventData, schedule };

    createEvent.mutate(
      { calendarId: activeGroup.calendarId, data: { ...bEpayload } },
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
        <Box w="60%" alignItems="center" display="flex">
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
            {getValues('assocName').length > 0
              ? truncateString(getValues('assocName'), 23)
              : 'Select challenge'}{' '}
          </Text>
        </Box>

        <Box>
          <Common.InputErrorMessage errorMsg={errors?.assocId?.message} />
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
export default CreateEventForm;
