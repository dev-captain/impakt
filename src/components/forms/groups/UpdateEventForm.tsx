import { FormControl, Box, Input, Text, useDisclosure } from '@chakra-ui/react';
import { Day, Time } from 'dayspan';
import * as React from 'react';
import { useForm } from 'hooks';
import { Common, I } from 'components';

import { useEventCalendarContext } from '../../../context/EventCalendarContext';
import { InputGroupPropsI } from '../../common/InputGroup';
import ChallengeModal from '../../ui/MemberDashBoard/Group/GroupDetails/Content/EventCalendar/SelectChallenge/ChallengeModal';
import { padTo2Digits, renderToast, truncateString } from '../../../utils';
import { normalizeCalendarDataEvent } from '../../../utils/dayspan';
import { usePersistedChallengeStore, usePersistedGroupStore } from '../../../lib/zustand';
import { useCalendarEventControllerUpdateCalendarEvent } from '../../../lib/impakt-dev-api-client/react-query/calendar/calendar';

const UpdateEventForm: React.FC = () => {
  const updateEventBe = useCalendarEventControllerUpdateCalendarEvent();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getSelectedDay, getSelectedDayEvent, updateEvent } = useEventCalendarContext();
  const date = getSelectedDay();

  const { activeGroup } = usePersistedGroupStore();

  if (!getSelectedDayEvent()) return null;

  const challange = usePersistedChallengeStore().availableGroupChallenges.find(
    (d) => d.challenge.id === JSON.parse(getSelectedDayEvent()!.event?.data).assocId,
  );

  const { handleSubmit, errors, setValue, getValues } = useForm({
    defaultValues: {
      eventTitle: JSON.parse(getSelectedDayEvent()!.event?.data).title ?? '',
      eventDescription: JSON.parse(getSelectedDayEvent()!.event?.data).description ?? '',
      assocId: JSON.parse(getSelectedDayEvent()!.event?.data).assocId ?? '',
      assocName: truncateString(challange?.challenge.name ?? '', 23) ?? '',
      eventStartTime: getSelectedDayEvent()?.event.schedule?.times[0].toString() ?? '',
      eventEndTime: getSelectedDayEvent()?.event.schedule?.times[1].toString() ?? '',
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleUpdate = async (data: Object) => {
    if (!activeGroup) return;

    const { eventTitle, eventDescription, eventStartTime, eventEndTime, assocId } = data as {
      eventTitle: string;
      eventDescription: string;
      assocId: number;
      eventStartTime: string;
      eventEndTime: string;
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

    updateEventBe.mutate(
      {
        eventId: getSelectedDayEvent()?.event.id,
        data: {
          assocId,
          description: eventDescription,
          title: eventTitle,
          reschedule: {
            endDateTime: schedule.end,
            startDateTime: schedule.start,
            on: schedule.start,
          },
        },
      },
      {
        onSuccess: (updatedEventData) => {
          const normalizedData1 = normalizeCalendarDataEvent(updatedEventData);
          updateEvent(normalizedData1);
          renderToast('success', 'Event updated successfully.');
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
      defaultValue: JSON.parse(getSelectedDayEvent()!.event.data).title,
    },
    {
      placeholder: 'Add description',
      onChange,
      type: 'text',
      name: 'eventDescription',
      errorMsg: errors?.eventDescription?.message,
      autoFocus: false,
      whiteMode: true,
      defaultValue: JSON.parse(getSelectedDayEvent()!.event.data).description,
      leftIcon: <I.MenuIcon width="20px" height="20px" />,
    },
  ];

  const defaultEventStartTime = getSelectedDayEvent()
    ? [
        padTo2Digits(getSelectedDayEvent()!.event.schedule?.times[0].hour as any),
        padTo2Digits(getSelectedDayEvent()!.event.schedule?.times[0].minute as any),
      ]
        .join(':')
        .toString()
    : '';

  const defaultEventEndDate = getSelectedDayEvent()
    ? [
        padTo2Digits(getSelectedDayEvent()!.event.schedule?.times[1].hour as any),
        padTo2Digits(getSelectedDayEvent()!.event.schedule?.times[1].minute as any),
      ]
        .join(':')
        .toString()
    : '';

  return (
    <>
      <FormControl
        display="flex"
        justifyContent="center"
        flexDir="column"
        m="0 !important"
        rowGap="24px"
        as="form"
        onSubmit={handleSubmit(handleUpdate)}
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
              defaultValue={defaultEventStartTime}
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
              defaultValue={defaultEventEndDate}
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
              onClick={() => onOpen()}
            >
              {getValues('assocName').length > 0
                ? truncateString(getValues('assocName'), 23)
                : 'Select challenge'}
            </Text>
          </Box>

          <Box>
            <Common.InputErrorMessage errorMsg={errors?.assocId?.message} />
          </Box>
        </Box>
        <Common.ImpaktButton
          isLoading={updateEventBe.isLoading}
          isDisabled={updateEventBe.isLoading}
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
        >
          <I.PenIcon width="18px" />
          <Text marginLeft="10px">Update Event</Text>
        </Common.ImpaktButton>
      </FormControl>

      <ChallengeModal key="2" setValue={setValue} open={isOpen} close={() => onClose()} />
    </>
  );
};
export default UpdateEventForm;
