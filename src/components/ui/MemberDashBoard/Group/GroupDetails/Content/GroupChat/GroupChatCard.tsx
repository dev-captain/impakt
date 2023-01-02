import * as React from 'react';
import { Box, Avatar, Text } from '@chakra-ui/react';

interface UserForumsPropsI {
  name?: string;
  msg: string;
  time: string;
}
const GroupChatCard: React.FC<UserForumsPropsI> = ({ name, msg, time }) => {
  return (
    <Box borderRadius="12px" marginTop="16px">
      <Box display="flex" gap="12px" flexWrap={{ base: 'wrap', md: 'unset' }}>
        <Avatar w={{ base: '30px', md: '40px' }} h={{ base: '30px', md: '40px' }} name={name} />
        <Box>
          <Box>
            <Text display="flex" color="#29323B" gap="8px" fontWeight="600" alignItems="center">
              {name}
              <Text color="#D3E2F0" fontSize="16px" fontWeight="500">
                {time}
              </Text>
            </Text>
          </Box>
          <Text fontWeight="500" color="#4E6070">
            {msg}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default React.memo(GroupChatCard);
