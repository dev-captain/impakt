import React, { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Images from 'assets/images';
import GroupWelcome from '../../GroupWelcome';
import Banner from '../../Banner';
import MemberList from '../../MemberList';
import Forums from '../../Forums';
import EventCalendar from '../EventCalendar/EventCalendar';

const GroupDetails: React.FC = () => {
  const [show, setShow] = useState(false);

  const hide = () => {
    setShow(true);
  };

  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
      {!show ? (
        <GroupWelcome data={() => hide()} />
      ) : (
        <HStack w="100%" display="block">
          {/* here is the components */}
          <Banner img={Images.group.cover} />
          <Box
            marginStart="0 !important"
            display="flex"
            w="full"
            gap="20px"
            flexDirection={{ base: 'column', md: 'unset' }}
          >
            <EventCalendar />
            <Forums />
            <MemberList />
          </Box>
        </HStack>
      )}
    </Box>
  );
};
export default GroupDetails;
