import { CalendarDtoV1TypeEnum } from '@impakt-dev/api-client';
import { Schedule, ScheduleInput } from 'dayspan';
import React from 'react';
import { normalizeCalendarDataMap } from '../utils/dayspan';
import useAppSelector from './useAppSelector';

const useNormalizedCalendarData = () => {
  const activeGroupCalendar = useAppSelector((state) => state.calendarReducer.activeGroupCalendar);
  const [normalizedCalendarData, setNormalizedCalendarData] = React.useState<{
    events: {
      id?: any;
      data?: string | undefined;
      schedule: Schedule<any> | ScheduleInput<any>;
      visible: boolean;
    }[];
    id: number;
    type: CalendarDtoV1TypeEnum;
  } | null>(null);

  React.useEffect(() => {
    if (activeGroupCalendar) {
      const data = normalizeCalendarDataMap(activeGroupCalendar);
      setNormalizedCalendarData(data);
    }
  }, [activeGroupCalendar]);

  return normalizedCalendarData;
};

export default useNormalizedCalendarData;
