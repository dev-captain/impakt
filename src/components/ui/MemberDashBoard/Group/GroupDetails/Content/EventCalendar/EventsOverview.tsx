/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import ShowEvents from './ShowEvents';
import RemoveEvent from './RemoveEvent';
import ChallengeModal from '../../Modal/ChallengeModal/ChallengeModal';
import { GetChallengeRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import EventDetails from './EventDetails';
// import EventModify from './EventModify';

const EventsOverview: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = React.useState<GetChallengeRes>();
  const { getCurrentOverviewScreen, goToOverViewScreen } = useEventCalendarContext();
  const screen = getCurrentOverviewScreen();

  return (
    <Box w="full">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        w="100%"
        minH={screen === 'empty' ? '0' : 'auto'}
        p="5px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {screen === 'empty' && null}
        {screen === 'first' && <ShowEvents />}
        {screen === 'create' && (
          <ChallengeModal
            initScreen="select-challenge-event"
            close={() => goToOverViewScreen('first')}
            open
          />
        )}

        {screen === 'update' && (
          <ChallengeModal
            activeChallenge={activeChallenge}
            initScreen="update-challenge-event-form"
            close={() => goToOverViewScreen('event')}
            open
          />
        )}
        {/* {screen === 'update' && <EventModify title="Update event" type="update" />} */}
        {screen === 'event' && <EventDetails setActiveChallenge={setActiveChallenge} />}
        {screen === 'remove' && <RemoveEvent />}
      </Box>
    </Box>
  );
};

export default EventsOverview;
