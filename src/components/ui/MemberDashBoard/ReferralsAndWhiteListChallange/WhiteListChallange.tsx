import * as React from 'react';
import { VStack, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import keys from '@/i18n/translations/en';

const WhitelistChallenge: React.FC = () => {
  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      padding={{ base: '30px', lg: '50px' }}
      minH="474.90px"
      rowGap="1.8em !important"
    >
      <Box mt="0 !important" id="whitelist-challenge-headline-box">
        <Text textStyle="bold6">{keys.memberDashboard.whitelist.headline}</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challenge-description-box-1">
        <Text textStyle="regular4">{keys.memberDashboard.whitelist.subHeadline}</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challenge-description-box-2">
        <Text textStyle="regular4">{keys.memberDashboard.whitelist.description}</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challenge-description-box-2">
        <UnorderedList>
          <ListItem>{keys.memberDashboard.whitelist.item1}</ListItem>
          <ListItem>{keys.memberDashboard.whitelist.item2}</ListItem>
          <ListItem>{keys.memberDashboard.whitelist.item3}</ListItem>
        </UnorderedList>
      </Box>

      <Box mt="0 !important" id="whitelist-challenge-description-box-2">
        <Text textStyle="regular4">{keys.memberDashboard.whitelist.description2}</Text>
      </Box>
    </VStack>
  );
};
export default WhitelistChallenge;
