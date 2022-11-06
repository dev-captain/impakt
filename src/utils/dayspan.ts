import { Day, EventInput } from 'dayspan';
import {
  CalendarDtoV1,
  CalendarEventDtoV1Response,
} from '../lib/impakt-dev-api-client/react-query/types';

export const normalizeCalendarDataMap = (data: CalendarDtoV1) => {
  const normalizedEvents = data.Events.map((c) => {
    return normalizeCalendarDataEvent(c);
  });
  const outPutData = { ...data, events: normalizedEvents };

  return outPutData;
};

export const normalizeCalendarDataEvent = (data: CalendarEventDtoV1Response) => {
  const convertStartDate = Day.fromString(data.schedule.start);
  const convertEndDate = Day.fromString(data.schedule.end);

  // const convertExclude = data.schedule.exclude.map((value) => Day.fromString(value.toISOString()));
  const convertCancel = data.schedule.cancel?.map((value) => Day.fromString(value));

  const normalizedCalendarDataEvent = {
    id: data.id,
    visible: data.visible,
    schedule: {
      ...data.schedule,
      exclude: [],
      cancel: convertCancel,
      duration: 0,
      on: convertStartDate,
      times: [convertStartDate, convertEndDate],
    },
    data: JSON.stringify(data.data),
  } as EventInput<string, any> & { visible: boolean };

  return normalizedCalendarDataEvent;
};
