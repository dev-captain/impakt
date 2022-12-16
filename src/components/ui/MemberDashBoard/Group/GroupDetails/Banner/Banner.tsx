import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';

import BannerImage from './BannerImage';
import BannerHeaderLeft from './Header/BannerHeaderLeft';
// import BannerHeaderRight from './Header/BannerHeaderRight';
import BannerPanelLeft from './Panel/BannerPanelLeft';
import BannerPanelRight from './Panel/BannerPanelRight';
import MemberDashboardCard from '../../../MemberDashBoardCard';

const Banner: React.FC = () => {
  return (
    <MemberDashboardCard borderRadius="24px" padding="0 !important" w="full">
      <BannerImage />
      <Box p="32px" w="full">
        <Box
          display={{ md: 'flex', base: 'block' }}
          justifyContent="space-between"
          alignItems="center"
          id="banner-header"
          mb="24px"
        >
          <BannerHeaderLeft />
          {/* <BannerHeaderRight /> */}
        </Box>
        <HStack
          flexWrap="wrap"
          spacing="0"
          rowGap="1em"
          alignItems="stretch"
          justifyContent="space-between"
        >
          <BannerPanelLeft />
          <BannerPanelRight />
        </HStack>
      </Box>
    </MemberDashboardCard>
  );
};
export default Banner;
