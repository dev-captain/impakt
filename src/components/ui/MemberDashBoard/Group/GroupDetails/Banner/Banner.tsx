import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';

import BannerImage from './BannerImage';
import BannerHeaderLeft from './Header/BannerHeaderLeft';
// import BannerHeaderRight from './Header/BannerHeaderRight';
import BannerPanelLeft from './Panel/BannerPanelLeft';
import BannerPanelRight from './Panel/BannerPanelRight';
import MemberDashboardCard from '../../../MemberDashBoardCard';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

const Banner: React.FC = () => {
  const memberRole = usePersistedGroupStore();

  return (
    <MemberDashboardCard borderRadius="24px" padding="0 !important" w="full">
      <BannerImage />
      <Box p={{ base: '16px', md: '32px' }} w="full">
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
          spacing="0"
          rowGap="1em"
          alignItems={{ base: 'flex-start', md: 'stretch' }}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          {memberRole.role !== 'None' && memberRole.role !== 'Member' && <BannerPanelLeft />}
          <BannerPanelRight />
        </HStack>
      </Box>
    </MemberDashboardCard>
  );
};
export default Banner;
