import * as React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import keys from '@/i18n/translations/en';
import { I } from '@/components';
import InfoSection from '@/components/common/InfoSection';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import ReferralsBox from '../ReferralsAndWhiteListChallange/ReferralsBox';

const Referrals: React.FC = () => {
  return (
    <Box w="full" as="section" id="general-section">
      <MemberDashboardSectionHeadlineText title="Referrals" />
      <InfoSection
        tooltipLink="https://knowledgebase.impakt.com/referral-rewards?category=all-resources"
        tooltipText={keys.memberDashboard.referrals.description}
        tooltipIcon={<I.InfoIcon color="#B0C3D6" width="20px" height="20px" />}
      />
      <HStack
        columnGap="24px"
        rowGap="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="full"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        mt={{ sm: '24px', lg: '0' }}
      >
        <VStack
          maxW={{ base: 'auto', lg: '588px' }}
          w={{ base: '100%', lg: '50%' }}
          justifyContent="flex-start"
          alignItems="flex-start"
          rowGap="24px"
        >
          <ReferralsBox />
        </VStack>
      </HStack>
    </Box>
  );
};
export default Referrals;
