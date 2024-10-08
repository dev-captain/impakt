import React, { createContext, useContext, useEffect } from 'react';
import { Calendar, CalendarDay, CalendarEvent, Day, EventInput } from 'dayspan';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { usePersistedCalendarStore } from '../lib/zustand';

interface EventCalendarContext {
  addEvents: (events: EventInput<string, any>[]) => void;
  addEvent: (event: EventInput<string, any>) => void;
  updateEvent: (event: EventInput<string, any>) => void;
  removeEvent: (event: EventInput<string, any>) => void;
  pickSelectedDay: (day: Day) => Calendar<string, any>;
  getSelectedDay: () => Day;
  getSelectedDayEvents: () => CalendarEvent<string, any>[];
  setActiveEventId: React.Dispatch<React.SetStateAction<number | undefined>>;
  moveToNextMonth: () => void;
  moveToPreviousMonth: () => void;
  getCurrentMonthLabel: () => string;
  getCurrentYear: () => number;
  getDaysOfCurrentMonth: () => CalendarDay<string, any>[];
  getStartDayOfCurrentMonth: () => Day;
  getCurrentOverviewScreen: OverViewScreenTypes;
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

const calendarRef = Calendar.months<string, any>();

export const EventCalendarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const eventQuery = useParams()?.eventId;
  const navigate = useNavigate();
  const location = useLocation();
  const { calendar } = usePersistedCalendarStore();
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
    calendarRef.addEvents(events);
    reRenderCalendar();
  };

  const updateEvent = (event: EventInput<string, any>) => {
    if (!getSelectedDayEvent()) return;

    calendarRef.removeEvent(getSelectedDayEvent()?.event);
    calendarRef.addEvent(event);
    goToOverViewScreen('first');
    reRenderCalendar();
  };

  const addEvent = (event: EventInput<string, any>) => {
    calendarRef.addEvent(event);
    goToOverViewScreen('first');
    reRenderCalendar();
  };

  const removeEvent = (event: EventInput<string, any>) => {
    calendarRef.removeEvent(event);
    goToOverViewScreen('first');
    removeEventQueryFromLocation();
    reRenderCalendar();
  };

  const getSelectedDay = () => {
    return calendarRef.selection?.start;
  };

  const getSelectedDayEvent = () => {
    return calendarRef
      .getDay(getSelectedDay())
      ?.events.find((event) => event.event.id === activeEventId);
  };

  const getSelectedDayEvents = () => {
    return calendarRef.getDay(getSelectedDay())?.events.sort((a, b) => {
      return a.time.start.time - b.time.start.time;
    });
  };

  const pickSelectedDay = (day: Day) => {
    const selectedDay = calendarRef.select(day);
    if (calendarOverViewScreen[calendarOverViewScreen.length - 1] !== 'first') {
      goToOverViewScreen('first');
    }
    reRenderCalendar();

    return selectedDay;
  };

  const moveToNextMonth = () => {
    calendarRef.next();
    reRenderCalendar();
  };

  const moveToPreviousMonth = () => {
    calendarRef.prev();
    reRenderCalendar();
  };

  const getCurrentMonthLabel = () => {
    const indexOfCurrentMonth = calendarRef.span.start.month;

    return months[indexOfCurrentMonth];
  };

  const getCurrentYear = () => {
    return calendarRef.span.start.year;
  };

  const getDaysOfCurrentMonth = () => {
    return calendarRef.days;
  };

  const getStartDayOfCurrentMonth = () => {
    return calendarRef.start;
  };

  const goToOverViewScreen = (screenName: OverViewScreenTypes) => {
    setCalendarOverViewScreen([...calendarOverViewScreen, screenName]);
  };

  const goBackToOverViewScreen = () => {
    if (calendarOverViewScreen.length > 1) {
      setCalendarOverViewScreen(['first']);
    }
    // side effect
    removeEventQueryFromLocation();
  };

  const removeEventQueryFromLocation = () => {
    navigate(location.pathname.substring(0, location.pathname.indexOf('/event')));
  };

  const removeEvents = () => {
    calendarRef.removeEvents();
  };

  const initCalendar = () => {
    if (calendar) {
      removeEvents();
      addEvents(calendar.events);
    }
    // const dummyEvents = getDummyEvents();
    // addEvents(dummyEvents);
    if (eventQuery) {
      const findTheEventQuery = calendar?.events.find(({ id }) => id === parseInt(eventQuery, 10));

      if (findTheEventQuery && findTheEventQuery.visible && findTheEventQuery.schedule.start) {
        pickSelectedDay(Day.fromString(findTheEventQuery.schedule.start.toString()));
        goToOverViewScreen('event');
        setActiveEventId(findTheEventQuery.id);

        return;
      }
    }
    pickSelectedDay(Day.today());
  };

  useEffect(() => {
    initCalendar();
  }, [calendar]);

  return (
    <EventCalendarContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        addEvents,
        updateEvent,
        addEvent,
        pickSelectedDay,
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
        getCurrentOverviewScreen: calendarOverViewScreen[calendarOverViewScreen.length - 1],
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
