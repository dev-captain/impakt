import React from 'react';
import { Box } from '@chakra-ui/react';
import { I } from 'components';

import EventsOverview from './EventsOverview';
import CalendarDays from './CalendarDays';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import MemberDashboardCard from '../../../../MemberDashBoardCard';
// import { getDummyEvents } from '../../../../../../../data';

const EventCalendar: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();

  if (activeGroup?.isPreview && activeGroup.private)
    return (
      <MemberDashboardCard
        justifyContent="center"
        alignItems="center"
        width={{ base: '100%', md: '312px' }}
        minW={{ base: '100%', md: '312px' }}
        minH={{ base: '100%', md: '312px' }}
        height={{ base: '100%', md: '312px' }}
        marginTop="26px"
      >
        <I.LockIcon />
      </MemberDashboardCard>
    );

  return (
    <Box
      height="100%"
      width={{ base: '100%', md: '428px' }}
      display="flex"
      flexWrap="wrap"
      transform="translateY(20px)"
      borderRadius="10px"
      marginTop="10px"
      boxShadow="0px 10px 10px -5px rgba(0, 6, 14, 0.08), 0px 20px 25px -5px rgba(0, 6, 14, 0.14);"
    >
      <CalendarDays />
      <Box
        backgroundColor=" #ffffff"
        width=" 100%"
        padding=" 20px 20px"
        borderRadius="0 0 10px 10px"
      >
        <EventsOverview />
      </Box>
    </Box>
  );
};

export default EventCalendar;
