import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons';
import { Day, Time } from 'dayspan';
import { I, Common } from 'components';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import { useAppSelector } from '../../../../../../../hooks';
import { assocId } from '../../../../../../../lib/yup/fields';

const EventDetails: React.FC = () => {
  const [isGoing, setIsGoing] = React.useState(true);
  const [isAdmin] = React.useState(true);
  const { getSelectedDayEvent, goBackToOverViewScreen, goToOverViewScreen } =
    useEventCalendarContext();

  const eventObj = getSelectedDayEvent();
  if (!eventObj) return null;

  const challanges = useAppSelector((state) => state.challengesReducer.availableGroupChallenges);

  const challange = useAppSelector(
    (state) => state.challengesReducer.availableGroupChallenges,
  ).find(({ id }) => id === JSON.parse(eventObj.data).assocId);

  console.log(challange, challanges, JSON.parse(eventObj.data));

  // console.log('detail', eventObj);

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="left" alignItems="center" mb="16px">
          <ChevronLeftIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => goBackToOverViewScreen()}
            marginRight="5px"
          />
          <Box display="flex" justifyContent="space-between" alignContent="center">
            <Text color="#29323B" fontWeight="600" fontSize="20px" marginRight="50px">
              {JSON.parse(eventObj.data).title}
            </Text>
            {new Time(Number(eventObj.schedule.times.map((h) => h.hour))).matchesHour(
              new Time(Number(Day.now().format('HH'))),
            ) && (
              <Box background="#5C7FFF" borderRadius="16px" textAlign="center" p="2px 14px">
                <Text color="#fff" fontWeight="700">
                  LIVE
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.MenuIcon fontSize="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500" maxW="258px">
            {JSON.parse(eventObj.data).description}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.DateIcon width="20px" height="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            {Day.build(
              eventObj.schedule.end.date.getFullYear(),
              eventObj.schedule.end.date.getMonth(),
              eventObj.schedule.end.date.getDate(),
            ).format('dddd, MMMM D')}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ClockIcon color="#728BA3" width="16px" height="16px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            {eventObj.event.schedule?.times[0].format('h:mma ')}-{' '}
            {eventObj.event.schedule?.times[1].format('h:mma ')}
          </Text>
        </Box>
        {/* <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.PeopleIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          {!isGoing && (
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              {`${JSON.parse(eventObj.data).memberCount} `}
              members
            </Text>
          )}
          {isGoing && (
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              <Text as="span" fontWeight="bold">
                You
              </Text>{' '}
              and
              {` ${JSON.parse(eventObj.data).memberCount} members more`}
            </Text>
          )}
        </Box> */}
        {/* <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ArrowIcon w="15px" height="15px" color="#728BA3" />
          </Box>
          <Text color="#5C7FFF" fontSize="16px" fontWeight="500">
            {`${JSON.parse(eventObj.data).link} `}
          </Text>
        </Box> */}
        <Box display="flex" alignItems="center">
          <Box w="34px">
            <I.ChallengeIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500" maxW="258px">
            {challange?.name ?? 'Challenge'}
          </Text>
        </Box>
      </Box>

      <Box display="flex" gap="8px">
        <Common.ImpaktButton
          variant="black"
          color={isGoing ? '#fff' : '#29323B'}
          h={{ md: '48px', base: '40px' }}
          backgroundColor={isGoing ? '#29323B' : '#EEF4F6'}
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          onClick={() => setIsGoing(!isGoing)}
        >
          {isGoing && <I.CoolIcon fontSize="10px" />}
          {!isGoing && <CloseIcon width="16px" height="16px" />}
          <Text marginLeft="10px">{isGoing ? 'Going' : 'Not Going'} </Text>
        </Common.ImpaktButton>
        {isAdmin && (
          <>
            <Common.ImpaktButton
              variant="black"
              w="48px"
              h={{ md: '48px', base: '40px' }}
              backgroundColor="#EEF4F6"
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="700"
            >
              <I.PenIcon width="18px" />
            </Common.ImpaktButton>
            <Common.ImpaktButton
              variant="black"
              w="48px"
              h={{ md: '48px', base: '40px' }}
              backgroundColor="#FEE1E3"
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="700"
              onClick={() => goToOverViewScreen('remove')}
            >
              <DeleteIcon width="18px" color="#F84153" />
            </Common.ImpaktButton>
          </>
        )}
      </Box>
    </>
  );
};
export default EventDetails;
