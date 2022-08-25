import { Box, HStack } from '@chakra-ui/react';
import Images from 'assets/images';
import * as React from 'react';
import Banner from '../../Banner';
import MemberList from '../../MemberList';
import Forums from '../../Forums';

const GroupDetails: React.FC = () => {
  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
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
          <MemberList />
          <Forums />
          <MemberList />
        </Box>
      </HStack>
    </Box>
  );
};
export default GroupDetails;
