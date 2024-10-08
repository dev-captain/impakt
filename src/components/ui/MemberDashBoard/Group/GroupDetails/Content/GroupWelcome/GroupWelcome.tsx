import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import ChangeBannerImage from './ChangeBannerImage';
import GroupShare from './GroupShare';

interface BannerProps {
  hideGroupWelcome: () => void;
}
const GroupWelcome: React.FC<BannerProps> = ({ hideGroupWelcome }) => {
  return (
    <Box w="100%">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        p={{ base: '16px', md: '24px' }}
        w={{ base: '100%', md: '100%' }}
        m="0"
        display="flex"
        flexDirection="column"
        // alignItems="center"
        justifyContent="center"
      >
        <Text
          w="100%"
          color="#1C1C28"
          textStyle={{ base: 'bold20', md: 'bold4' }}
          mb={{ base: '10px', md: '16px' }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          Welcome to your new group
          <CloseIcon
            w={3}
            h={3}
            color="#000"
            boxSize="12px"
            _hover={{ cursor: 'pointer' }}
            onClick={() => {
              hideGroupWelcome();
            }}
          />
        </Text>
        <Text
          maxW="624px"
          textStyle={{ base: 'regular14', md: 'regular20' }}
          color="rgba(28, 28, 40, 0.7)"
          textAlign="start"
          mb="32px"
        >
          Here are the steps to get you started:
        </Text>
        <ChangeBannerImage />
        <GroupShare />
      </Box>
    </Box>
  );
};
export default GroupWelcome;
