import React, { createContext, useContext, useRef } from 'react';
import { Calendar, CalendarDay, CalendarEvent, Day, EventInput, DayInput } from 'dayspan';

interface EventCalendarContext {
  addEvents: (events: EventInput<string, any>[]) => void;
  setSelectedDay: (day: Day) => Calendar<string, any>;
  getSelectedDay: () => Day;
  getSelectedDayEvents: () => CalendarEvent<string, any>[];
  moveToNextMonth: () => void;
  moveToPreviousMonth: () => void;
  getCurrentMonthLabel: () => string;
  getCurrentYear: () => number;
  getDaysOfCurrentMonth: () => CalendarDay<string, any>[];
  getStartDayOfCurrentMonth: () => Day;
  getCurrentOverviewScreen: () => OverViewScreenTypes;
  goToOverViewScreen: (screenName: OverViewScreenTypes) => void;
  goBackToOverViewScreen: () => void;
  setSelectedEventsOfDay: (dayInput: DayInput) => void;
  setSelectedEventOfDay: (event: CalendarEvent<string, any>) => void;
  getSelectedDayEvent: () => CalendarEvent<string, any> | undefined;
}

// eslint-disable-next-line no-redeclare
const EventCalendarContext = createContext<EventCalendarContext | null>(null);
type OverViewScreenTypes = 'empty' | 'first' | 'create' | 'event' | 'remove';

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
  const calendarRef = useRef(Calendar.months<string, any>());
  const [calendarOverViewScreen, setCalendarOverViewScreen] = React.useState<OverViewScreenTypes[]>(
    ['first'],
  );
  const [selectedEvents, setSelectedEvents] = React.useState<CalendarEvent<string, any>[]>([]);

  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent<string, any>>();

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, setReRenderCalendarCount] = React.useState<number>(0);

  const reRenderCalendar = () => {
    setReRenderCalendarCount((prev) => prev + 1);
  };

  const addEvents = (events: EventInput<string, any>[]) => {
    calendarRef.current.addEvents(events);
    reRenderCalendar();
  };

  const getSelectedDay = () => {
    return calendarRef.current.selection?.start;
  };

  const getSelectedDayEvent = () => {
    return selectedEvent;
  };

  const getSelectedDayEvents = () => {
    return selectedEvents;
  };

  const setSelectedEventsOfDay = (dayInput: DayInput) => {
    setSelectedEvents(calendarRef.current.getDay(dayInput).events);
  };

  const setSelectedEventOfDay = (event: CalendarEvent<string, any>) => {
    setSelectedEvent(event);
  };

  const setSelectedDay = (day: Day) => {
    const selectedDay = calendarRef.current.select(day);
    setSelectedEventsOfDay(day);
    if (getCurrentOverviewScreen() !== 'first') {
      goToOverViewScreen('first');
    }

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
  };

  return (
    <EventCalendarContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        addEvents,
        setSelectedDay,
        getSelectedDay,
        getSelectedDayEvent,
        getSelectedDayEvents,
        setSelectedEventOfDay,
        setSelectedEventsOfDay,
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
