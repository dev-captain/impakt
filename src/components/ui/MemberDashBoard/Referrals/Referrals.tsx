import * as React from 'react';
import { Box, Text, Skeleton, HStack, VStack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { I } from 'components';
import { useAppDispatch } from 'hooks';
import { fetchReferralsChallenges } from 'lib/redux/slices/referrals/actions/fetchReferralsChallenges';
import { fetchReferrals } from 'lib/redux/slices/referrals/actions/fetchReferrals';
import { fetchReferralsReward } from 'lib/redux/slices/referrals/actions/fetchReferralsReward';
import InfoSection from 'components/common/InfoSection';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import ReferralsBox from '../ReferralsAndWhiteListChallange/ReferralsBox';

const Referrals: React.FC = () => {
  const { t } = useTranslation().i18n;

  return (
    <Box w="full" as="section" id="general-section">
      <MemberDashboardSectionHeadlineText title="Referrals" />
      <InfoSection
        tooltipLink="https://knowledgebase.impakt.com/referral-rewards?category=all-resources"
        tooltipText={t(keys.memberDashboard.referrals.description)}
        tooltipIcon={<I.InfoIcon width="20px" height="20px" />}
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
          maxW={{ base: 'auto', lg: '708px' }}
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
