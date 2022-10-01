import { Day } from 'dayspan';
import React from 'react';
import { CalendarType } from '../lib/redux/slices/calendar/types';
import { normalizeCalendarDataMap } from '../utils';
import useAppSelector from './useAppSelector';

const useNormalizedCalendarData = () => {
  const activeGroupCalendar = useAppSelector((state) => state.calendarReducer.activeGroupCalendar);
  const [normalizedCalendarData, setNormalizedCalendarData] = React.useState<{
    Events: {
      schedule: {
        on: string;
        times: Day[];
        start: string;
        end: string;
        maxOccurrences?: number;
        cancel: string[];
        exclude: string[];
        dayOfWeek: number[];
      };
      data: string;
      id: number;
      visible: boolean;
    }[];
    id: number;
    type: CalendarType;
  } | null>(null);

  React.useEffect(() => {
    if (activeGroupCalendar) {
      setNormalizedCalendarData(normalizeCalendarDataMap(activeGroupCalendar));
    }
  }, [activeGroupCalendar]);

  return normalizedCalendarData;
};

export default useNormalizedCalendarData;
