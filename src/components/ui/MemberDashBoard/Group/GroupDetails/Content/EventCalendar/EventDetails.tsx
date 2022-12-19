import React, { useEffect } from 'react';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { ChevronLeftIcon, DeleteIcon } from '@chakra-ui/icons';
import { Day, Time } from 'dayspan';
import { I, Common } from 'components';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import { isAndroid } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

import { deepLinkToApp } from '../../../../../../../data';
import {
  usePersistedAuthStore,
  usePersistedChallengeStore,
  usePersistedGroupStore,
} from '../../../../../../../lib/zustand';
import { truncateString } from '../../../../../../../utils';
import ActionPreviewModal from '../../Modal/ActionPreviewModal';

const EventDetails: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const navigate = useNavigate();
  // const [isGoing, setIsGoing] = React.useState(true);
  // const navigate = useNavigate();
  const { activeGroup } = usePersistedGroupStore();
  const { role } = usePersistedGroupStore();
  const isAdmin = role === 'Creator' || role === 'Moderator';
  // const toast = useToast();

  const { getSelectedDayEvent, goBackToOverViewScreen, goToOverViewScreen } =
    useEventCalendarContext();

  const eventObj = getSelectedDayEvent();
  if (!eventObj) return null;

  const challange = usePersistedChallengeStore().availableGroupChallenges.find(
    (d) => d.id === JSON.parse(eventObj.data).challengeId,
  );

  const deepLink = deepLinkToApp(activeGroup?.id, eventObj.event.id);

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
            onClick={() => {
              goBackToOverViewScreen();
            }}
            marginRight="5px"
          />
          <Box
            display="flex"
            wordBreak="break-word"
            justifyContent="space-between"
            alignContent="center"
          >
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
            {Day.fromDate(eventObj.schedule.end.date)?.format('dddd, MMMM D')}
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
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ArrowIcon w="15px" height="15px" color="#728BA3" />
          </Box>
          <a
            onClick={(e) => {
              e.preventDefault();
              if (isAndroid) {
                window.location =
                  `intent://scan/#Intent;scheme=${deepLink};S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.impakt.fitness;end` as any;

                setTimeout(() => {
                  window.location =
                    'https://play.google.com/store/apps/details?id=com.impakt.fitness' as any;
                }, 1500);

                return;
              }

              window.location = deepLink as any;

              setTimeout(() => {
                navigate('/download');
              }, 1000);
            }}
            href={deepLink}
          >
            <Text color="nextOrange" fontSize="16px" fontWeight="500">
              Join event
            </Text>
          </a>
        </Box>
        <Box display="flex" alignItems="center">
          <Box w="34px">
            <I.ChallengeIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500" maxW="258px">
            {truncateString(`${challange?.name}`, 23)}
          </Text>
        </Box>
      </Box>

      <Box display="flex" gap="8px" w="full" justifyContent="flex-end" mt="1em">
        {/* <Common.ImpaktButton
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
        </Common.ImpaktButton> */}
        {isAdmin && (
          <>
            <Common.ImpaktButton
              variant="white-50"
              onClick={() => goToOverViewScreen('update')}
              w="48px"
              h={{ md: '48px', base: '40px' }}
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="700"
              padding="8px"
            >
              <I.PenIcon width="18px" />
            </Common.ImpaktButton>
            <Common.ImpaktButton
              variant="delete"
              w="48px"
              h={{ md: '48px', base: '40px' }}
              borderRadius="8px"
              type="submit"
              fontSize={{ md: '16px' }}
              fontWeight="700"
              onClick={() => goToOverViewScreen('remove')}
            >
              <DeleteIcon width="18px" />
            </Common.ImpaktButton>
          </>
        )}
      </Box>
      <ActionPreviewModal
        actionPreview={{
          exercices: [],
          leaderboard: [],
          playedMins: 5,
          subtitle: truncateString(`${challange?.name}`, 23),
          validUntil: eventObj.time.end.toISOString(),
          title: JSON.parse(eventObj.data).title ?? '',
          mode: 'join',
          isEdit: JSON.parse(eventObj.data).creatorId === member?.id,
        }}
        open={isOpen}
        close={onClose}
      />
    </>
  );
};
export default EventDetails;
