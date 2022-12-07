import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Day } from 'dayspan';
import { Common } from 'components';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import { useNavigate } from 'react-router-dom';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const ShowEvents: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin =
    usePersistedGroupStore().role === 'Creator' || usePersistedGroupStore().role === 'Moderator';
  const { goToOverViewScreen, getSelectedDayEvents, getSelectedDay, setActiveEventId } =
    useEventCalendarContext();
  const selectedDay = getSelectedDay();
  const selectedDayEvents = getSelectedDayEvents();
  if (!selectedDay) return null;
  const isToday = Day.now().compare(selectedDay ?? new Date(), 'day') === 0;

  return (
    <>
      <Box>
        <Box w="full" justifyContent="space-between" display="flex" mb="16px">
          <Text color="fg-1" fontStyle="semiBold6">
            {Day.build(selectedDay.year, selectedDay.month, selectedDay.dayOfMonth).format(
              'dddd, MMMM D',
            )}
          </Text>
          {isToday && (
            <Text color="#F27961" fontStyle="semiBold6">
              Today{' '}
            </Text>
          )}
        </Box>
        {selectedDayEvents?.length === 0 ? (
          <Box background="a5" p="16px" maxH="46px" color="#728BA3" borderRadius="8px" mb="3px">
            <Text textStyle="semiBold12" color="fg2">
              No upcoming events
            </Text>
          </Box>
        ) : (
          selectedDayEvents?.map(
            (eventObj) =>
              eventObj.day.time === eventObj.event.schedule.start.time && (
                <Box key={eventObj.id}>
                  {/* {new Time(eventObj.time.start.date.getHours()) >=
                new Time(Number(Day.now().format('HH'))) && <TimeIndicator />} */}
                  <Box
                    key={eventObj.id}
                    background="softOrange"
                    p="1em"
                    color="darkOrange"
                    cursor="pointer"
                    _hover={{ background: '#F27961', color: 'white' }}
                    borderRadius="8px"
                    mb="0.5em"
                    onClick={() => {
                      goToOverViewScreen('event');
                      setActiveEventId(eventObj.event.id);
                      navigate(`event/${eventObj.event.id}`);
                    }}
                  >
                    <Text textStyle="normal14">
                      {eventObj.event.schedule?.times[0].format('h:mma ')}-{' '}
                      {eventObj.event.schedule?.times[1].format('h:mma ')}
                    </Text>

                    <Text mt="8px" textStyle="semiBold12">
                      {JSON.parse(eventObj.event.data).title}
                    </Text>
                  </Box>
                </Box>
              ),
          )
        )}
        {/* <Box display="flex" alignItems="center" mb="3px">
          <Box background="#5C7FFF" w="8px" h="8px" borderRadius="50%" marginLeft="-6px" />
          <Box backgroundColor="#5C7FFF" borderRadius="0px 8px 8px 0px" h="2px" w="100%" />
        </Box> */}
      </Box>
      {isAdmin && (
        <Common.ImpaktButton
          mt="10px"
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          onClick={() => goToOverViewScreen('create')}
        >
          <AddIcon marginRight="11px" fontSize="10px" />
          Create
        </Common.ImpaktButton>
      )}
    </>
  );
};

export default ShowEvents;
