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
} from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from 'hooks';

// import ReferralsAndWhiteListChallange from '../ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';

// import ReferralCopyClipboard from '../ReferralCopyClipBoard';
// import { fetchReferrals } from '../../../../lib/redux/slices/referrals/actions/fetchReferrals';
// import { fetchReferralsChallenges } from '../../../../lib/redux/slices/referrals/actions/fetchReferralsChallenges';
// import { fetchReferralsReward } from '../../../../lib/redux/slices/referrals/actions/fetchReferralsReward';
// import ReferralsBox from '../ReferralsAndWhiteListChallange/ReferralsBox';

const Referrals: React.FC = () => {
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
    <Skeleton isLoaded={isLoaded}>
      <Box as="section" id="referrals-section">
        <Text>Referrals</Text>
        {/* <ReferralsBox/>  */}
      </Box>
    </Skeleton>
  );
};
export default Referrals;
