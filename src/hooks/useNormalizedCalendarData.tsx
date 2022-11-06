import { CalendarDtoV1TypeEnum } from '@impakt-dev/api-client';
import { Schedule, ScheduleInput } from 'dayspan';
import React from 'react';
import { usePersistedCalendarStore } from '../lib/zustand';
import { normalizeCalendarDataMap } from '../utils/dayspan';

const useNormalizedCalendarData = () => {
  const { calendar } = usePersistedCalendarStore();
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
    if (calendar) {
      const data = normalizeCalendarDataMap(calendar);
      setNormalizedCalendarData(data);
    }
  }, [calendar]);

  return normalizedCalendarData;
};

export default useNormalizedCalendarData;
