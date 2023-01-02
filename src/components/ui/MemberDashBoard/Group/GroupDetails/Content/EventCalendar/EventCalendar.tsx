import React from 'react';
import { Box } from '@chakra-ui/react';

import EventsOverview from './EventsOverview';
import CalendarDays from './CalendarDays';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import MemberDashboardCard from '../../../../MemberDashBoardCard';
import AccessDeniedBox from '../AccessDeniedBox';
// import { getDummyEvents } from '../../../../../../../data';

const EventCalendar: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();

  if (activeGroup?.isPreview && activeGroup.private) return <AccessDeniedBox />;

  return (
    <MemberDashboardCard
      display="flex"
      flexWrap="wrap"
      borderRadius="24px"
      p="0.6em 1em 1em 1em"
      bg="white"
      width={{ base: '100%', md: '312px' }}
      minW="312px"
      mt="0 !important"
    >
      <CalendarDays />
      <Box
        m="0 !important"
        pb="4px !important"
        pt="24px"
        backgroundColor=" #ffffff"
        width=" 100%"
        borderRadius="0 0 24px 24px"
        borderTop="1px solid #DFEDF2"
      >
        <EventsOverview />
      </Box>
    </MemberDashboardCard>
  );
};

export default EventCalendar;
