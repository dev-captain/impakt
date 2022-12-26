import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { I } from '@/components';

interface MemberCountPropsI {
  count: number;
}
const GroupCardMemberCount: React.FC<MemberCountPropsI> = ({ count }) => {
  return (
    <Box
      display="flex"
      bg="rgba(0, 2, 10, 0.4);"
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(20px)"
      p="4px 10px"
      borderRadius="40px"
    >
      <I.PeopleIcon color="white" width="20px !important" height="20px !important" />
      <Text
        as="h1"
        textStyle="semiBold12"
        fontSize={{ lgx: '20px', base: '16px' }}
        color="white"
        marginLeft="6px"
      >
        {count}
      </Text>
    </Box>
  );
};

export default GroupCardMemberCount;
