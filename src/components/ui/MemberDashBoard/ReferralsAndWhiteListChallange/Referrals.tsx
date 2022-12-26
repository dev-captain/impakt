import * as React from 'react';

import { VStack, Box, Text } from '@chakra-ui/react';
import keys from '@/i18n/translations/en';
import ReferralCopyClipboard from '../ReferralCopyClipBoard';
import { usePersistedAuthStore } from '../../../../lib/zustand';

const Referrals: React.FC = () => {
  const { member } = usePersistedAuthStore();

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
        <Text textStyle="bold6">{keys.memberDashboard.referrals.headline}</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-1">
        <Text textStyle="bold4">{keys.memberDashboard.referrals.subHeadline}</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="regular4">{keys.memberDashboard.referrals.description}</Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        w="83%"
        alignItems="flex-end"
        mt="0 !important"
        id="whitelist-challange-description-box-3"
      >
        <ReferralCopyClipboard userId={member?.id} />
      </Box>
    </VStack>
  );
};
export default Referrals;
