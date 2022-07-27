import * as React from 'react';

// import { useTranslation } from 'react-i18next';

import {
  // VStack,
  Box,
  Text,
  // OrderedList,
  // ListItem,
  // Grid,
  // GridItem,
  // Tooltip,
  // SimpleGrid,
  // Table,
  // Thead,
  // Tbody,
  // Tfoot,
  // Tr,
  // Th,
  // Td,
  // TableCaption,
  // TableContainer,
  Skeleton,
  HStack,
  VStack,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { I } from 'components';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
// import { useAppDispatch, useAppSelector } from 'hooks';

// import ReferralsAndWhiteListChallange from '../ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';

// import ReferralCopyClipboard from '../ReferralCopyClipBoard';
// import { fetchReferrals } from '../../../../lib/redux/slices/referrals/actions/fetchReferrals';
// import { fetchReferralsChallenges } from '../../../../lib/redux/slices/referrals/actions/fetchReferralsChallenges';
// import { fetchReferralsReward } from '../../../../lib/redux/slices/referrals/actions/fetchReferralsReward';
import ReferralsBox from '../ReferralsAndWhiteListChallange/ReferralsBox';
import MemberDashboardCard from '../MemberDashBoardCard';

const Referrals: React.FC = () => {
  const { t } = useTranslation().i18n;
  const [isLoaded] = React.useState(true);
  // TODO fetch data
  // TODO while fetching data show skeleton by isLoaded
  // TODO Referrals Section UI

  // const dispatch = useAppDispatch();
  // const [isTooltipClicked, setIsTooltipClicked] = React.useState(false);

  // const TooltipHandler = () => {
  //   setIsTooltipClicked(!isTooltipClicked);
  // };

  // const { t } = useTranslation().i18n;

  // React.useEffect(() => {
  //   dispatch(fetchReferrals({ count: true }));
  //   dispatch(fetchReferralsChallenges());
  //   dispatch(fetchReferralsReward());
  // }, []);

  return (
    <Skeleton w="full" isLoaded={isLoaded}>
      <Box w="full" as="section" id="general-section">
        <MemberDashboardSectionHeadlineText title="Referrals" />
        <HStack
          columnGap="24px"
          rowGap="24px"
          justifyContent="flex-start"
          alignItems="flex-start"
          w="full"
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          marginBottom="16px"
          mt={{ sm: '24px', lg: '0' }}
        >
          <VStack
            maxW={{ base: 'auto', lg: '708px' }}
            w={{ base: '100%', lg: '50%' }}
            justifyContent="flex-start"
            alignItems="flex-start"
            rowGap="24px"
          >
            <MemberDashboardCard
              flexDir="column"
              rowGap={{ base: '18px', lg: '32px' }}
              p={{ base: '12px' }}
              borderRadius="16px"
            >
              <Box
                display="flex"
                alignItems="center"
                letterSpacing="-0.04em !important"
                justifyContent="space-between"
                marginTop="0 !important"
                w="100%"
                id="whitelist-challange-description-box-2"
                position="relative"
                sx={{ svg: { minW: '20px', opacity: 0.5 } }}
              >
                <Link href="https://knowledgebase.impakt.com/referral-rewards?category=all-resources">
                  <I.InfoIcon width="30px" height="30px" />{' '}
                </Link>
                <Text
                  textStyle="semiBold5"
                  margin="0px 10px"
                  color="rgba(255, 255, 255, 0.75);"
                  dangerouslySetInnerHTML={{
                    __html: t(keys.memberDashboard.referrals.description),
                  }}
                />
              </Box>
            </MemberDashboardCard>
          </VStack>
        </HStack>
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
    </Skeleton>
  );
};
export default Referrals;
