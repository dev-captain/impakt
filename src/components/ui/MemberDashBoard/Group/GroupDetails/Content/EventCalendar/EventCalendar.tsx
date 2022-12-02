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
    <MemberDashboardCard
      display="flex"
      flexWrap="wrap"
      borderRadius="24px"
      p="1em"
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
