import { VStack, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import * as React from 'react';

const WhiteListChallange: React.FC = () => {
  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      padding={{ base: '30px', lg: '50px' }}
      minH="474.90px"
      rowGap="1.8em !important"
    >
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
          Your total score & rank on the leaderboard is determined by summing up:
        </Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <UnorderedList>
          <ListItem>All your workout scores</ListItem>
          <ListItem>5% of your referred friends&apos; workout scores</ListItem>
          <ListItem>2% of your referred friends&apos; referrals&apos; workout scores</ListItem>
        </UnorderedList>
      </Box>

      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="regular4">It pays to workout with your friends!</Text>
      </Box>
    </VStack>
  );
};
export default WhiteListChallange;
