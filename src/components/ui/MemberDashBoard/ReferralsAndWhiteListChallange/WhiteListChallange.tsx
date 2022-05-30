import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';

const WhiteListChallange: React.FC = () => {
  return (
    <VStack w="100%" alignItems="flex-start" padding="50px" rowGap="2em !important">
      <Box mt="0 !important" id="whitelist-challange-headline-box">
        <Text textStyle="bold6">Whitelist Challenge</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-1">
        <Text textStyle="regular4">
          Top 2500 members on the member whitelist leaderboard will get whitelisted.
        </Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="regular4">
          Whenever you or your referred friends work out, their workout score will be added to your
          leaderboard score It pays to workout with your friends!
        </Text>
      </Box>
    </VStack>
  );
};
export default WhiteListChallange;
