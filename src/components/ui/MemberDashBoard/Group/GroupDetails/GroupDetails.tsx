import { Box, HStack } from '@chakra-ui/react';
import Images from 'assets/images';
import * as React from 'react';
import Banner from '../../Banner';
import MemberList from '../../MemberList';

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
        <MemberList />
      </HStack>
    </Box>
  );
};
export default GroupDetails;
