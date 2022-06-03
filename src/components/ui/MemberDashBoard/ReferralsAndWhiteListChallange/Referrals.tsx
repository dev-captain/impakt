import * as React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { useUserContext } from '../../../../context/UserContext';
import ReferralCopyClipBoard from '../ReferralCopyClipBoard';

const Referrals: React.FC = () => {
  const { user } = useUserContext();

  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      padding={{ base: '30px', lg: '50px' }}
      minH="548px"
      maxH={{ base: 'auto', lg: '548px' }}
      rowGap="1.8em !important"
    >
      <Box mt="0 !important" id="whitelist-challange-headline-box">
        <Text textStyle="bold6">Referrals</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-1">
        <Text textStyle="bold4">Refer friends and earn GODL</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="regular4">
          For each member who joins through your referral link and completes at least 5 daily,
          weekly or targeted challenges with Impakt, you receive +1000 GODL and they receive +5000
          GODL.
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        w="83%"
        alignItems="flex-end"
        mt="0 !important"
        id="whitelist-challange-description-box-3"
      >
        <ReferralCopyClipBoard isAnimate userId={user?.id} />
      </Box>
    </VStack>
  );
};
export default Referrals;
