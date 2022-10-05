import * as React from 'react';
import { Box } from '@chakra-ui/react';

import BannerImage from './BannerImage';
import BannerHeaderLeft from './BannerHeaderLeft';
import BannerHeaderRight from './BannerHeaderRight';
// import BannerPanelLeft from './BannerPanelLeft';
import BannerPanelRight from './BannerPanelRight';

const Banner: React.FC = () => {
  return (
    <Box>
      <Box backgroundColor="#fff" borderRadius="24px" w="full" p={{ base: '16px', md: '32px' }}>
        <BannerImage />
        <Box>
          <Box
            marginTop="32px"
            display={{ md: 'flex', base: 'block' }}
            justifyContent="space-between"
            alignItems="center"
            id="banner-header"
            mb="24px"
          >
            <BannerHeaderLeft />
            <BannerHeaderRight />
          </Box>
          <Box display={{ md: 'flex', base: 'block' }} justifyContent="end" alignItems="flex-end">
            {/* <BannerPanelLeft /> */}
            <BannerPanelRight />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
