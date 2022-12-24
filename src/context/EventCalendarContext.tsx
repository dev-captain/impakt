import React, { createContext, useContext, useEffect, useRef } from 'react';
import { Calendar, CalendarDay, CalendarEvent, Day, EventInput } from 'dayspan';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useNormalizedCalendarData from '../hooks/useNormalizedCalendarData';

interface EventCalendarContext {
  addEvents: (events: EventInput<string, any>[]) => void;
  addEvent: (event: EventInput<string, any>) => void;
  updateEvent: (event: EventInput<string, any>) => void;
  removeEvent: (event: EventInput<string, any>) => void;
  setSelectedDay: (day: Day) => Calendar<string, any>;
  getSelectedDay: () => Day;
  getSelectedDayEvents: () => CalendarEvent<string, any>[];
  setActiveEventId: React.Dispatch<React.SetStateAction<number | undefined>>;
  moveToNextMonth: () => void;
  moveToPreviousMonth: () => void;
  getCurrentMonthLabel: () => string;
  getCurrentYear: () => number;
  getDaysOfCurrentMonth: () => CalendarDay<string, any>[];
  getStartDayOfCurrentMonth: () => Day;
  getCurrentOverviewScreen: () => OverViewScreenTypes;
  goToOverViewScreen: (screenName: OverViewScreenTypes) => void;
  goBackToOverViewScreen: () => void;
  getSelectedDayEvent: () => CalendarEvent<string, any> | undefined;
}

// eslint-disable-next-line no-redeclare
const EventCalendarContext = createContext<EventCalendarContext | null>(null);
export type OverViewScreenTypes = 'empty' | 'first' | 'create' | 'event' | 'remove' | 'update';

export function useEventCalendarContext() {
  const context = useContext(EventCalendarContext);
  if (!context) {
    throw new Error(
      'use EventCalendarContext provider must be used within the EventCalendarContext.Provider',
    );
  }

  return context;
}

export const EventCalendarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const eventQuery = useParams()?.eventId;
  const navigate = useNavigate();
  const location = useLocation();
  const activeGroupCalendar = useNormalizedCalendarData();
  const calendarRef = useRef(Calendar.months<string, any>());
  const [calendarOverViewScreen, setCalendarOverViewScreen] = React.useState<OverViewScreenTypes[]>(
    ['first'],
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [reRerender, setReRenderCalendarCount] = React.useState<number>(0);
  const [activeEventId, setActiveEventId] = React.useState<number>();

  const reRenderCalendar = () => {
    setReRenderCalendarCount((prev) => prev + 1);
  };

  const addEvents = (events: EventInput<string, any>[]) => {
    calendarRef.current.addEvents(events);
    reRenderCalendar();
  };

  const updateEvent = (event: EventInput<string, any>) => {
    if (!getSelectedDayEvent()) return;

    calendarRef.current.removeEvent(getSelectedDayEvent()?.event);
    calendarRef.current.addEvent(event);
    goToOverViewScreen('first');
    reRenderCalendar();
  };

  const addEvent = (event: EventInput<string, any>) => {
    calendarRef.current.addEvent(event);
    goToOverViewScreen('first');
    reRenderCalendar();
  };

  const removeEvent = (event: EventInput<string, any>) => {
    calendarRef.current.removeEvent(event);
    goToOverViewScreen('first');
    removeEventQueryFromLocation();
    reRenderCalendar();
  };

  const getSelectedDay = () => {
    return calendarRef.current.selection?.start;
  };

  const getSelectedDayEvent = () => {
    return calendarRef.current
      .getDay(getSelectedDay())
      ?.events.find((event) => event.event.id === activeEventId);
  };

  const getSelectedDayEvents = () => {
    return calendarRef.current.getDay(getSelectedDay())?.events.sort((a, b) => {
      return a.time.start.time - b.time.start.time;
    });
  };

  const setSelectedDay = (day: Day) => {
    const selectedDay = calendarRef.current.select(day);
    if (getCurrentOverviewScreen() !== 'first') {
      goToOverViewScreen('first');
    }
    reRenderCalendar();

    return selectedDay;
  };

  const moveToNextMonth = () => {
    calendarRef.current.next();
    reRenderCalendar();
  };

  const moveToPreviousMonth = () => {
    calendarRef.current.prev();
    reRenderCalendar();
  };

  const getCurrentMonthLabel = () => {
    const indexOfCurrentMonth = calendarRef.current.span.start.month;

    return months[indexOfCurrentMonth];
  };

  const getCurrentYear = () => {
    return calendarRef.current.span.start.year;
  };

  const getDaysOfCurrentMonth = () => {
    return calendarRef.current.days;
  };

  const getStartDayOfCurrentMonth = () => {
    return calendarRef.current.start;
  };

  const getCurrentOverviewScreen = () => {
    return calendarOverViewScreen[calendarOverViewScreen.length - 1];
  };

  const goToOverViewScreen = (screenName: OverViewScreenTypes) => {
    setCalendarOverViewScreen([...calendarOverViewScreen, screenName]);
  };

  const goBackToOverViewScreen = () => {
    if (calendarOverViewScreen.length > 1) {
      calendarOverViewScreen.pop();
      setCalendarOverViewScreen([...calendarOverViewScreen]);
    }
    // side effect
    removeEventQueryFromLocation();
  };

  const removeEventQueryFromLocation = () => {
    if (
      eventQuery &&
      (calendarOverViewScreen[calendarOverViewScreen.length - 1] === 'first' ||
        calendarOverViewScreen[calendarOverViewScreen.length - 1] === 'remove')
    ) {
      navigate(location.pathname.substring(0, location.pathname.indexOf('/event')));
    }
  };

  const initCalendar = () => {
    if (activeGroupCalendar) {
      addEvents(activeGroupCalendar.events);
    }
    // const dummyEvents = getDummyEvents();
    // addEvents(dummyEvents);
    if (eventQuery) {
      const findTheEventQuery = activeGroupCalendar?.events.find(
        ({ id }) => id === parseInt(eventQuery, 10),
      );

      if (findTheEventQuery && findTheEventQuery.visible && findTheEventQuery.schedule.start) {
        setSelectedDay(Day.fromString(findTheEventQuery.schedule.start.toString()));
        goToOverViewScreen('event');
        setActiveEventId(findTheEventQuery.id);

        return;
      }
    }
    setSelectedDay(Day.today());
  };
  const removeEvents = () => {
    calendarRef.current.removeEvents();
  };

  useEffect(() => {
    initCalendar();

    // refresh once demounted
    return () => removeEvents();
  }, [activeGroupCalendar]);

  return (
    <EventCalendarContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        addEvents,
        updateEvent,
        addEvent,
        setSelectedDay,
        setActiveEventId,
        removeEvent,
        getSelectedDay,
        getSelectedDayEvent,
        getSelectedDayEvents,
        moveToNextMonth,
        moveToPreviousMonth,
        getCurrentMonthLabel,
        getCurrentYear,
        getDaysOfCurrentMonth,
        getStartDayOfCurrentMonth,
        getCurrentOverviewScreen,
        goToOverViewScreen,
        goBackToOverViewScreen,
      }}
    >
      {children}
    </EventCalendarContext.Provider>
  );
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
